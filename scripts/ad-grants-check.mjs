// Checks source for Google Ad Grants website-policy issues. Writes report to ad-grants-report.md.
import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const roots = ["app", "components", "public", "lib"];
const textExt = new Set([".tsx", ".ts", ".jsx", ".js", ".mdx", ".md", ".html", ".css"]);
const issues = [];

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    statSync(p).isDirectory() ? walk(p, out) : out.push(p);
  }
  return out;
}

const files = roots.flatMap((r) => walk(r));
const rules = [
  [/(?:href|src|action)=["']http:\/\/(?!localhost)/g, "Insecure http:// URL (HTTPS required / mixed content)"],
  [/href=["'](?:#|javascript:[^"']*|)["']/g, "Placeholder link (empty, '#' or javascript:) - links must go somewhere"],
  [/pagead2\.googlesyndication|adsbygoogle|googletagservices/g, "Google AdSense/ad script (not allowed)"],
  [/under construction|coming soon|lorem ipsum/gi, "Placeholder / 'under construction' text"],
  [/(?:href|url)=["']https?:\/\/(?:www\.)?(?:facebook|twitter|x|instagram|linkedin)\.com\/?["']/g, "Social icon linking to a bare homepage"],
];

for (const f of files) {
  const ext = extname(f).toLowerCase();
  const size = statSync(f).size;
  if ([".png", ".jpg", ".jpeg", ".gif", ".webp"].includes(ext) && size > 500 * 1024)
    issues.push(`${f}: image is ${(size / 1024).toFixed(0)} KB (>500 KB) - hurts load speed`);
  if (ext === ".pdf") issues.push(`${f}: PDF present - core info should be HTML, not PDF`);
  if (!textExt.has(ext)) continue;
  const lines = readFileSync(f, "utf8").split("\n");
  lines.forEach((line, i) => {
    for (const [re, msg] of rules) if (new RegExp(re.source, re.flags).test(line)) issues.push(`${f}:${i + 1}: ${msg}`);
  });
}

// Internal link check: href="/path" must map to an app route or public file.
const routes = new Set(["/"]);
for (const f of walk("app")) {
  const m = f.match(/^app\/(.*)\/?page\.(tsx|jsx|mdx)$/);
  if (m) routes.add("/" + m[1].replace(/\/$/, "").replace(/\([^)]*\)\/?/g, ""));
}
for (const f of files) {
  if (![".tsx", ".jsx", ".mdx"].includes(extname(f))) continue;
  const src = readFileSync(f, "utf8");
  for (const m of src.matchAll(/href=["'](\/[^"'#?]*)["']/g)) {
    const p = m[1].replace(/\/$/, "") || "/";
    if (routes.has(p) || existsSync(join("public", p)) || p.includes("[")) continue;
    if ([...routes].some((r) => r.includes("[") && r.split("/").length === p.split("/").length)) continue;
    issues.push(`${f}: internal link ${m[1]} has no matching page or file (404)`);
  }
}

const report = issues.length
  ? `# Ad Grants website-policy check: ${issues.length} issue(s)\n\n` + issues.map((i) => `- ${i}`).join("\n") + "\n"
  : "# Ad Grants website-policy check: passed\n";
writeFileSync("ad-grants-report.md", report);
console.log(report);
process.exit(issues.length ? 1 : 0);
