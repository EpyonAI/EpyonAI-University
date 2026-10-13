import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our mission | Epyon AI University",
  description:
    "We make useful knowledge accessible and help people turn learning into opportunity through human–AI collaboration.",
};
export default function AboutPage() {
  return (
    <section className="bg-white px-5 pb-20 pt-32 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-teal-700">Our mission</p>
        <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
          Knowledge belongs
          <br />
          within reach.
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
          <p>
            Epyon AI University exists to make learning and opportunity
            accessible to people whose potential has been overlooked. We bring
            human coaches and AI guides together to adapt useful knowledge to
            the person who needs it.
          </p>
          <p>
            That might mean turning a long course into a game, breaking a
            business goal into practical steps, or helping someone find the
            computer, transportation, and encouragement they need to begin.
          </p>
          <p>
            We welcome different learning styles and different starting points.
            A person’s past, credentials, or circumstances should not define the
            limits of their future.
          </p>
        </div>
        <h2 className="mt-12 text-2xl font-bold">
          One mission. Connected programs.
        </h2>
        <ul className="mt-5 space-y-4 leading-7 text-slate-700">
          <li>
            <Link href="/pathways" className="font-bold text-violet-800">
              Epyon Pathways
            </Link>{" "}
            develops Pathfinder, our career-navigation and learning app.
          </li>
          <li>
            <Link href="/patch" className="font-bold text-violet-800">
              PATCH & Friends
            </Link>{" "}
            brings responsible AI learning to children through stories and play.
          </li>
          <li>
            <Link href="/compass-news" className="font-bold text-violet-800">
              Compass News
            </Link>{" "}
            explores accessible, source-aware news and context.
          </li>
        </ul>
        <h2 className="mt-12 text-2xl font-bold">Who we are</h2>
        <p className="mt-5 leading-7 text-slate-700">
          Epyon AI University is a Georgia educational nonprofit trust
          recognized as a 501(c)(3), with the DBA Epyon Pathways. We are not
          currently an accredited degree-granting university. We are part of the
          broader Epyon Unlimited ecosystem.
        </p>
        <dl className="mt-6 space-y-3 text-slate-700" aria-label="Nonprofit identification">
          <div><dt className="font-bold">Legal name</dt><dd>Epyon AI University</dd></div>
          <div><dt className="font-bold">Employer Identification Number (EIN)</dt><dd>41-3985129</dd></div>
          <div>
            <dt className="font-bold">Address</dt>
            <dd>
              1101 Riverbend Club Dr SE
              <br />
              Atlanta, GA 30339
            </dd>
          </div>
        </dl>
        <p className="mt-4 leading-7 text-slate-700">
          Our founding volunteers, educators, community contributors, and AI
          crew build together. Humans remain responsible for governance,
          coaching, editorial judgment, and public releases.
        </p>
        <p className="mt-4 leading-7 text-slate-700">
          Our first programs are in development. We will report real progress,
          learn from participants, and grow from what works.
        </p>
        <a href="mailto:Pathfinder@epyonai.org" className="btn-dark mt-8">
          Start a conversation →
        </a>
      </div>
    </section>
  );
}
