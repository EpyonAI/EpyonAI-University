import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Epyon Pathways | A route built around you",
  description:
    "Human coaches, AI guides, adapted learning, and community resources help people build skills and pursue new opportunities.",
};
const tracks = [
  {
    title: "Tax preparation & accounting",
    steps:
      "Learn the foundations. Practice with source documents and AI-assisted workflows. Build evidence through supervised cases.",
    outcome:
      "Prepare for seasonal tax operations and entry-level accounting support. Professional and client work require appropriate supervision; this training does not confer a license.",
  },
  {
    title: "Personal training & fitness",
    steps:
      "Explore the work. Build foundational knowledge. Practice coaching and navigate an established certification route.",
    outcome:
      "Our Janus Fitness pathway concept is in development. Certification partner selection and placement arrangements are still ahead.",
  },
  {
    title: "Music & digital media",
    steps:
      "Create with human performance and AI-assisted tools. Practice recording, editing, rights awareness, and release planning.",
    outcome:
      "Our first music pilot will help shape a broader route for musicians, storytellers, and digital creators to build a portfolio and understand the business of their work.",
  },
];
export default function PathwaysPage() {
  return (
    <div className="bg-white text-slate-950">
      <section className="bg-[#070b12] px-5 pb-16 pt-32 text-white sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_230px] md:items-center">
          <div>
            <p className="eyebrow text-cyan-300">
              Epyon Pathways · Workforce development
            </p>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
              Your next chapter.
              <br />
              Your own route.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              For people learning differently, rebuilding after a setback,
              entering work, or finding a new direction. We combine human
              coaching, AI guidance, and practical support to help turn
              potential into progress.
            </p>
          </div>
          <Image
            src="/mission/pathways-logo.png"
            alt="Pathways compass logo"
            width={230}
            height={230}
            className="rounded-2xl"
          />
        </div>
      </section>
      <div className="mx-auto max-w-6xl space-y-16 px-5 py-16 sm:px-8">
        <section>
          <p className="eyebrow text-teal-700">The app we are building</p>
          <h2 className="mt-3 text-3xl font-black">
            Pathfinder: a career compass.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Start with what you want and what you can already do. Pathfinder
            will help identify the skills an opportunity requires, adapt
            learning to your needs, and map a route through practice, support,
            and evidence of your abilities.
          </p>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {[
              [
                "Discover",
                "Explore goals, strengths, interests, and ways you prefer to learn.",
              ],
              [
                "Practice",
                "Use manageable lessons, guided activities, and realistic skill demonstrations.",
              ],
              [
                "Connect",
                "Find resources, human support, and opportunities that fit your progress.",
              ],
            ].map(([a, b]) => (
              <div key={a} className="rounded-xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold">{a}</h3>
                <p className="mt-3 leading-7 text-slate-600">{b}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="resources">
          <h2 className="text-3xl font-black">
            Skills alone do not open every door.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            A missing computer, an impossible bus journey, a fee, a work
            schedule, or an empty stomach can stop a pathway before it begins.
            Our Career Compass approach considers those barriers alongside
            skills and connects relevant community resources.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            We are beginning library outreach in Fulton, Cobb, and Gwinnett
            counties and exploring university resources. We will check
            eligibility, equipment, reservations, costs, and accessibility
            before recommending a facility. Outreach is not an established
            partnership.
          </p>
        </section>
        <section>
          <p className="eyebrow text-teal-700">First tracks · In development</p>
          <h2 className="mt-3 text-3xl font-black">
            Practical places to begin.
          </h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {tracks.map((t) => (
              <article
                key={t.title}
                className="rounded-xl border border-slate-200 p-6"
              >
                <h3 className="text-xl font-bold">{t.title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{t.steps}</p>
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {t.outcome}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section className="rounded-2xl bg-slate-100 p-7">
          <h2 className="text-2xl font-bold">
            Help create the opportunities, too.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            The planned Epyon Employment Opportunity Network (EEON) will connect
            learner capabilities with jobs, contracts, and entrepreneurial
            routes. Where opportunities are missing, we aim to help create
            projects and organizations that can employ graduates. Employment and
            earnings are not guaranteed.
          </p>
          <a
            href="mailto:contact@epyonai.org?subject=Pathways%20conversation"
            className="btn-dark mt-6"
          >
            Talk with us →
          </a>
        </section>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center font-bold text-violet-800"
        >
          ← Back to the campus
        </Link>
      </div>
    </div>
  );
}
