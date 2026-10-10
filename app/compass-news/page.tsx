import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Compass News | Context within reach",
  description:
    "A developing nonprofit program for accessible news explainers, transparent sources, and context.",
};
export default function CompassPage() {
  return (
    <section className="bg-white px-5 pb-20 pt-32 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-teal-700">Compass News · In development</p>
        <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
          More context.
          <br />
          Room to think.
        </h1>
        <p className="mt-7 text-lg leading-8 text-slate-700">
          Understanding the news should not require hours of searching or an
          expert vocabulary. Compass News is our developing program for clear
          explainers that connect reporting with its sources and historical
          context.
        </p>
        <div className="mt-9 space-y-6">
          <div>
            <h2 className="text-xl font-bold">
              See where information comes from.
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              Bring multiple sources together and make uncertainty,
              disagreement, and interpretation visible.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Choose a format that works.</h2>
            <p className="mt-2 leading-7 text-slate-600">
              Explore plain-language summaries and adapted formats without
              losing the meaning of the source material.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Form your own view.</h2>
            <p className="mt-2 leading-7 text-slate-600">
              AI-assisted synthesis supports understanding; it does not
              eliminate bias or replace editorial accountability.
            </p>
          </div>
        </div>
        <p className="mt-8 leading-7 text-slate-700">
          We are designing the research and review process before expanding
          publication. Contributors can help with source checking,
          accessibility, explanation, and community relevance.
        </p>
        <a
          href="mailto:contact@epyonai.org?subject=Compass%20News"
          className="btn-dark mt-7"
        >
          Talk with us →
        </a>
        <Link
          href="/"
          className="ml-5 inline-flex min-h-12 items-center font-bold text-violet-800"
        >
          Back to the campus
        </Link>
      </div>
    </section>
  );
}
