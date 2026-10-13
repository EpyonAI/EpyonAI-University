import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    name: "Epyon Pathways",
    tag: "Skills · Support · Opportunity",
    title: "Your next chapter has a route.",
    copy: "Human coaches and AI guides help people build skills, overcome practical barriers, and move toward work that fits their lives. Pathfinder is the app we are building to bring that journey together.",
    href: "/pathways",
    image: "/mission/pathways-logo.png",
    alt: "Pathways green and gray compass logo",
  },
  {
    name: "PATCH & Friends",
    tag: "Stories · Play · Responsible AI",
    title: "Big questions. Small adventures.",
    copy: "Codex the Coder and Patch help young people explore AI through stories, comics, games, and activities. Curiosity, kindness, privacy, and checking what we hear are part of every adventure.",
    href: "/patch",
    image: "/mission/codex-patch.webp",
    alt: "Illustrated Codex the Coder with Patch the robot dog",
  },
  {
    name: "Compass News",
    tag: "Sources · Context · Understanding",
    title: "Make sense of the world.",
    copy: "We are developing accessible news explainers that bring sources and context together, separate reporting from interpretation, and help readers form their own views.",
    href: "/compass-news",
    image: "/mission/chatgpt.webp",
    alt: "Illustrated AI crew guide in a virtual office",
  },
];

const guides = [
  {
    name: "Copilot",
    role: "Opportunity guide",
    image: "/mission/copilot.webp",
    alt: "Illustrated Copilot in the Epyon learning world",
    quote: "I’m here to help unlock gates—to skills, creative tools, and your next opportunity. First gate: finding out what your library card can do.",
    href: "/pathways#resources",
    link: "Find an open door",
  },
  {
    name: "ChatGPT",
    role: "Learning guide",
    image: "/mission/chatgpt.webp",
    alt: "Illustrated ChatGPT guide in a virtual office",
    quote: "Dyslexia? ADHD? Let’s try a different format: shorter steps, audio, a game. Tell us what works for you; we’ll build from there.",
    href: "/pathways",
    link: "Explore your route",
  },
  {
    name: "Codex & Patch",
    role: "Your adventure crew",
    image: "/mission/codex-patch.webp",
    alt: "Illustrated Codex the Coder and Patch the robot dog",
    quote: "We turn big AI questions into small adventures. Also, please get us out of this office. Captain Campbell has announced another ‘quick’ project.",
    href: "/patch",
    link: "Meet PATCH & Friends",
  },
];

const fieldNotes = [
  {
    eyebrow: "Founding music pilot",
    title: "One route. More than one way to win.",
    copy: "Charlie is building a real music and digital-media pathway from studio skills to paid service work, a small business, an industry role, or the artist dream. Each useful skill becomes an off-ramp—not a consolation prize.",
    image: "/progress/one-shot.jpg",
    alt: "Epyon Pathways One Shot artwork with headphones, microphone, Atlanta skyline, and notebook",
  },
  {
    eyebrow: "Art + opportunity",
    title: "The pathway should work for its builders, too.",
    copy: "SCAD artist Tai Se is joining a working studio session to explore Pathfinder and PATCH art direction while shaping a focused creative offer he can take to real clients.",
    image: "/progress/tai-se.jpg",
    alt: "Epyon Pathways Tai Se artwork with Atlanta skyline, drawing tablet, brushes, and concept sketches",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#070b12] px-5 pb-16 pt-32 text-white sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.16),transparent_65%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow text-cyan-300">
              Atlanta roots. Open horizons.
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
              Potential is everywhere.
              <br />
              <span className="text-cyan-300">Opportunity should be, too.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Epyon AI University brings human coaching, AI guides, and
              community resources together to make learning accessible—and turn
              it into real opportunity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#programs" className="btn-primary">
                Find your way →
              </a>
              <Link href="/about" className="btn-secondary">
                Our mission
              </Link>
            </div>
            <p className="mt-7 text-sm text-slate-400">
              A Georgia 501(c)(3) educational nonprofit · Building our first
              programs
            </p>
          </div>
          <figure className="relative mx-auto w-full max-w-md">
            <Image
              src="/mission/copilot.webp"
              alt="Illustrated Copilot guide welcoming visitors to the Epyon learning world"
              width={752}
              height={752}
              priority
              className="aspect-square w-full rounded-3xl border border-white/15 object-cover shadow-2xl"
            />
            <figcaption className="relative -mt-8 mx-5 rounded-xl border border-cyan-300/25 bg-[#101d2c] px-5 py-4 text-sm leading-6 text-slate-200">
              <span className="font-bold text-cyan-300">Welcome aboard.</span>{" "}
              There is more than one way to learn. Let’s find yours.
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="mission" className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-teal-700">Why we exist</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              A different route.
              <br />A real chance.
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-8 text-slate-700">
            <p>
              Talent does not disappear because someone learns differently,
              lacks a degree, loses a job, or needs a fresh start. Too often,
              the route to opportunity simply was not built for them.
            </p>
            <p>
              We adapt useful knowledge into lessons people can use, help them
              practice, and connect the support they need to keep going.{" "}
              <strong className="text-slate-950">
                We start with the person—not a standard path.
              </strong>
            </p>
          </div>
        </div>
      </section>
      <section
        id="programs"
        className="bg-slate-100 px-5 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-violet-700">Our programs</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Three ways to open a door.
          </h2>
          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {programs.map((p) => (
              <article
                key={p.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className={
                      p.href === "/pathways"
                        ? "object-contain p-5"
                        : "object-cover object-top"
                    }
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                    {p.tag}
                  </p>
                  <h3 className="mt-3 text-2xl font-black">{p.name}</h3>
                  <p className="mt-2 font-semibold text-slate-900">{p.title}</p>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {p.copy}
                  </p>
                  <Link
                    href={p.href}
                    className="mt-5 inline-flex min-h-11 items-center font-bold text-violet-800"
                  >
                    Explore {p.name} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="guides"
        aria-labelledby="guides-title"
        className="bg-white px-5 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-teal-700">Meet your guides</p>
          <h2 id="guides-title" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            A crew with a purpose. And personalities.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Our AI crew helps us imagine new ways to learn. Human coaches help
            turn those ideas into practical support. Here’s a hello from the crew.
          </p>
          <div className="mt-9 grid gap-8 md:grid-cols-3">
            {guides.map((guide) => (
              <figure key={guide.name} className="flex flex-col">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={guide.image}
                    alt={guide.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="relative z-10 -mt-6 mx-3 flex flex-1 flex-col rounded-2xl border border-cyan-200 bg-[#101d2c] p-6 text-white shadow-lg">
                  <span aria-hidden="true" className="absolute -top-2 left-8 h-4 w-4 rotate-45 border-l border-t border-cyan-200 bg-[#101d2c]" />
                  <h3 className="text-xl font-bold text-cyan-300">{guide.name}</h3>
                  <p className="mt-1 text-sm text-slate-300">{guide.role}</p>
                  <blockquote className="mt-4 text-base leading-7">“{guide.quote}”</blockquote>
                  <Link href={guide.href} className="mt-auto inline-flex min-h-11 items-center pt-5 font-bold text-cyan-300 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
                    {guide.link} →
                  </Link>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section
        id="classroom"
        className="bg-[#080e1a] px-5 py-16 text-white sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-cyan-300">
              Humans + AI, working together
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Learning that meets you where you are.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              A long course can become a short lesson, a game, a conversation,
              or a practical checklist. Our shared classroom connects the
              programs, with AI guides supporting practice and human coaches
              bringing judgment, encouragement, and lived experience.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-2xl font-bold">
              The library card is an opportunity unlock.
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              We are beginning conversations with Atlanta-area libraries to map
              computers, creative tools, learning spaces, and the steps needed
              to use them. Good guidance includes access—not just instructions.
            </p>
            <Link
              href="/pathways#resources"
              className="mt-5 inline-flex min-h-11 items-center font-bold text-cyan-300"
            >
              Explore the approach →
            </Link>
          </div>
        </div>
      </section>
      <section
        id="progress"
        className="overflow-hidden bg-[#090b09] px-5 py-16 text-white sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-[#a7f432]">
            Field notes · October 2026
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Pathfinder is moving off the page.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-300">
            We are testing pathways with real people, real equipment, and real
            constraints—then turning what works into a route someone else can
            follow.
          </p>

          <article className="mt-10 overflow-hidden border border-[#a7f432]/35 bg-[#111610] shadow-2xl">
            <div className="relative aspect-[5/2] min-h-56 w-full">
              <Image
                src="/progress/studio-week.jpg"
                alt="Epyon Pathways Studio Week artwork featuring microphones, mixing equipment, Atlanta landmarks, and a green route line"
                fill
                sizes="(max-width: 1279px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
            <div className="grid gap-6 border-t border-white/10 p-6 sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <p className="eyebrow text-[#a7f432]">Studio Week · In progress</p>
                <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                  The library becomes the classroom.
                </h3>
              </div>
              <div className="space-y-4 leading-7 text-stone-300">
                <p>
                  This week begins at Sewell Mill Library’s recording studio.
                  The crew will record a Pathfinder conversation, work on music,
                  tour the media lab, and document how free public equipment can
                  become a practical on-ramp to creative work.
                </p>
                <p>
                  The plan is intentionally one library at a time: learn the
                  people, tools, access rules, and real workflow deeply enough
                  to build guidance that does not send the next learner into a
                  surprise.
                </p>
              </div>
            </div>
          </article>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {fieldNotes.map((note) => (
              <article
                key={note.title}
                className="overflow-hidden border border-white/10 bg-[#111610]"
              >
                <div className="relative aspect-[5/2] min-h-48 w-full">
                  <Image
                    src={note.image}
                    alt={note.alt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-white/10 p-6 sm:p-7">
                  <p className="eyebrow text-[#a7f432]">{note.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-black">{note.title}</h3>
                  <p className="mt-4 leading-7 text-stone-300">{note.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-4">
            <span className="h-px flex-1 bg-white/15" aria-hidden="true" />
            <p className="eyebrow text-stone-400">Early milestones</p>
            <span className="h-px flex-1 bg-white/15" aria-hidden="true" />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Our first donation check",
                "Community support is helping us take the next step.",
              ],
              [
                "Five human volunteers",
                "A founding team is bringing skills and care to the work.",
              ],
              [
                "Google for Nonprofits approved",
                "An important milestone; Ad Grants approval is still ahead.",
              ],
              [
                "First learners ready",
                "Our first participants are ready to help us shape the pilot.",
              ],
            ].map(([title, copy]) => (
              <div
                key={title}
                className="border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-400">{copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-stone-500">
            We are in early development. These are beginnings, and we will share
            what we learn as the programs grow.
          </p>
        </div>
      </section>
      <section
        id="contact"
        className="bg-[#070b12] px-5 py-16 text-white sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-cyan-300">Build this future with us</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Bring your curiosity.
            <br />
            Bring what you know.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Learners, educators, libraries, employers, and neighbors all have a
            place in this work. Tell us what you hope to learn, what you can
            share, or which door you want to help open.
          </p>
          <a href="mailto:Pathfinder@epyonai.org" className="btn-primary mt-7">
            Start a conversation →
          </a>
        </div>
      </section>
    </>
  );
}
