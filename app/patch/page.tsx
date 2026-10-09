import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "PATCH & Friends | Stories for a world with AI",
  description:
    "Comics, stories, games, and activities that help children explore AI with curiosity, kindness, and care.",
};
export default function PatchPage() {
  return (
    <section className="bg-white px-5 pb-20 pt-32 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
        <div>
          <p className="eyebrow text-teal-700">
            PATCH & Friends · In development
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Growing up with AI.
            <br />
            Learning with care.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Codex the Coder and Patch the dog invite young learners into a world
            of questions, creativity, and discovery. Their adventures help
            children practice responsible choices around AI.
          </p>
          <ul className="mt-7 space-y-4 leading-7 text-slate-700">
            <li>
              <strong>Stay curious.</strong> Ask questions and explore how tools
              work.
            </li>
            <li>
              <strong>Check the answer.</strong> AI can make mistakes; sources
              and people help us verify.
            </li>
            <li>
              <strong>Protect privacy.</strong> Learn what to share and when to
              ask a trusted adult.
            </li>
            <li>
              <strong>Create with kindness.</strong> Think about how our choices
              affect others.
            </li>
          </ul>
          <p className="mt-7 leading-7 text-slate-600">
            We are building foundational stories that can become comics,
            storybooks, short cartoons, games, and workshops, with materials for
            parents and educators. Human storytelling and art direction guide
            the AI-assisted production.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href="https://epyonai.github.io/patch/" className="btn-dark">
              Visit the story project →
            </a>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center font-bold text-violet-800"
            >
              Back to the campus
            </Link>
          </div>
        </div>
        <Image
          src="/mission/codex-patch.webp"
          alt="Codex the Coder and Patch, illustrated learning companions"
          width={752}
          height={752}
          className="w-full rounded-3xl"
        />
      </div>
    </section>
  );
}
