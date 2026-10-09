import type { Metadata } from 'next';
import Link from 'next/link';
import GuideScenePlayer from '../../../components/guide-scenes/GuideScenePlayer';

export const metadata: Metadata = {
  title: 'AI Crew Guide Scenes | Review Preview',
  description: 'A scripted, work-in-progress EAIU Guide interaction preview for human review.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'AI Crew Guide Scenes | Review Preview',
    description: 'Work in progress. Not a public classroom release or live AI conversation.',
    url: '/preview/guide-scenes',
  },
};

export default function GuideScenesPreview() {
  return (
    <div className="min-h-screen bg-[#070b12] px-4 pb-16 pt-28 text-slate-100 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <a href="#guide-preview"
          className="inline-block rounded px-3 py-2 text-sm text-emerald-200 underline hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200"
        >Skip to the Guide encounter</a>
        <div className="mb-8 mt-5 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-200">W08 · Review preview · Not a public release</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight [text-wrap:balance] sm:text-5xl">
            Meet a Guide.<br />Choose a direction.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            A small journey through AI basics and Epyon. Meet the Crew through
            individual encounters, try a practical task, and follow your curiosity.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Scripted text, approved reference art, no AI connection or audio.
            Dialogue and teaching roles await human review. Navigation below
            rehearses future integration; W02 and Keelforge still own the live site.
          </p>
        </div>
        <div id="guide-preview" tabIndex={-1} className="scroll-mt-24 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200">
          <GuideScenePlayer previewNavigation syncHash />
        </div>
        <Link href="/" className="mt-8 inline-block rounded px-3 py-2 text-emerald-200 underline hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200">
          Leave the preview and return to the website
        </Link>
      </div>
    </div>
  );
}
