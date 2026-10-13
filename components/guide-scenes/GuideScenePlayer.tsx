'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { guideSceneRegistry as registry } from '../../lib/guide-scenes/registry';
import {
  advance, clearProgress, enterTrigger, freshProgress,
  readProgress, replayScene, restoreSceneFromHash, saveProgress,
} from '../../lib/guide-scenes/progress';
import type { ProgressStorage, SceneProgress } from '../../lib/guide-scenes/types';
import styles from './GuideScenePlayer.module.css';

function browserStorage(): ProgressStorage | null {
  try { return window.localStorage; } catch { return null; }
}

export interface GuideScenePlayerProps {
  /** Route integration is opt-in; never listens to or changes global site navigation. */
  entryTrigger?: string;
  previewNavigation?: boolean;
  /** Preview-only deep links can replay visited scenes, not unlock new ones. */
  syncHash?: boolean;
}

export default function GuideScenePlayer({
  entryTrigger, previewNavigation = false, syncHash = false,
}: GuideScenePlayerProps) {
  const [progress, setProgress] = useState<SceneProgress>(freshProgress);
  const [ready, setReady] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [resetOpen, setResetOpen] = useState(false);
  const [storageNotice, setStorageNotice] = useState('Loading local progress…');
  const heading = useRef<HTMLHeadingElement>(null);
  const feedback = useRef<HTMLDivElement>(null);
  const resetCancel = useRef<HTMLButtonElement>(null);
  const resetButton = useRef<HTMLButtonElement>(null);
  const focusOnChange = useRef(false);
  const titleId = useId();
  const choiceId = useId();
  const resetId = useId();
  const current = registry.scenes.find((s) => s.id === progress.currentSceneId)!;
  const guide = registry.guides.find((g) => g.id === current.guideId)!;
  const choice = current.choices.find((c) => c.id === selectedChoice);
  const nextScene = choice?.target ? registry.scenes.find((s) => s.id === choice.target) : null;

  useEffect(() => {
    const loaded = readProgress(browserStorage());
    let next = loaded.progress;
    if (syncHash) next = restoreSceneFromHash(next, window.location.hash);
    setProgress(next);
    const messages = {
      new: 'Progress saves only on this browser. No exercise answers are collected.',
      resumed: 'Your local trail is restored. No exercise answers were saved.',
      recovered: 'Saved progress was outdated or unreadable. A fresh trail is ready.',
      memory: 'Browser storage is unavailable. You can still explore; progress lasts only while this page is open.',
    };
    setStorageNotice(messages[loaded.status]);
    setReady(true);
  }, [syncHash]);

  useEffect(() => {
    if (!ready || !entryTrigger) return;
    setSelectedChoice(null);
    setResetOpen(false);
    setProgress((p) => {
      const next = enterTrigger(p, entryTrigger);
      if (next !== p) focusOnChange.current = true;
      return next;
    });
  }, [entryTrigger, ready]);

  useEffect(() => {
    if (!ready) return;
    if (!saveProgress(browserStorage(), progress)) {
      setStorageNotice('Browser storage is unavailable. You can still explore; progress lasts only while this page is open.');
    }
    if (syncHash) {
      // Optional URL enhancement must not block learning in restricted embeds.
      try { window.history.replaceState(window.history.state, '', `#scene=${progress.currentSceneId}`); } catch { /* memory-only navigation */ }
    }
    if (focusOnChange.current) {
      heading.current?.focus();
      focusOnChange.current = false;
    }
  }, [progress, ready, syncHash]);

  useEffect(() => {
    if (selectedChoice) feedback.current?.focus();
  }, [selectedChoice]);

  useEffect(() => {
    if (resetOpen) resetCancel.current?.focus();
  }, [resetOpen]);

  useEffect(() => {
    if (!syncHash || !ready) return;
    const onHashChange = () => {
      if (!window.location.hash.startsWith('#scene=')) return;
      setSelectedChoice(null);
      setResetOpen(false);
      setProgress((p) => {
        const next = restoreSceneFromHash(p, window.location.hash);
        focusOnChange.current = next !== p;
        return next;
      });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [ready, syncHash]);

  function move(next: SceneProgress) {
    setSelectedChoice(null);
    setResetOpen(false);
    focusOnChange.current = true;
    setProgress(next);
  }

  function cancelReset() {
    setResetOpen(false);
    resetButton.current?.focus();
  }

  return (
    <section className={styles.player} aria-labelledby={titleId}>
      {previewNavigation && (
        <div className={styles.navigation}>
          <p className={styles.eyebrow}>Navigation rehearsal · not live destinations</p>
          <p className={styles.subtle}>Finish the arrival encounter to open the other desks.</p>
          <div className={styles.navButtons} role="group" aria-label="Preview navigation triggers">
            {registry.triggers.map((trigger) => (
              <button
                key={trigger.id} type="button"
                disabled={!ready || !trigger.requiresCompleted.every((id) => progress.completed.includes(id))}
                onClick={() => move(enterTrigger(progress, trigger.id))}
              >
                {trigger.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.sceneGrid}>
        <figure className={styles.portrait} key={guide.id}>
          {guide.image && (
            <Image
              src={guide.image.src} alt={guide.image.alt}
              width={guide.image.width} height={guide.image.height}
              unoptimized
              className={styles.image}
            />
          )}
          <figcaption className={styles.caption}>
            <span className={styles.eyebrow}>Your guide for this encounter</span>
            <span className={styles.guideName}>{guide.name}</span>
            <span>Illustrated character · scripted preview</span>
          </figcaption>
        </figure>

        <div className={styles.sceneBody}>
          <p className={styles.eyebrow}>{current.location}</p>
          <h2 ref={heading} tabIndex={-1} id={titleId} className={styles.sceneTitle}>
            {progress.finished ? 'A route finished. A habit to keep.' : current.title}
          </h2>
          {progress.finished ? (
            <div className={styles.finish}>
              <p>You reached this route’s reflection checkpoint. There are other branches to explore at your own pace.</p>
              <p>This records an acknowledged route, not verified learning, course completion, or a credential.</p>
              <button type="button" onClick={() => move(replayScene(progress, registry.startSceneId))}>
                Explore another route
              </button>
            </div>
          ) : (
            <>
              <p className={styles.invitation}>{current.invitation}</p>
              {current.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className={styles.takeaway}>{current.takeaway}</p>
              <div className={styles.task}>
                <h3>{current.task.label}</h3>
                <p>{current.task.instruction}</p>
                <p className={styles.subtle}><strong>Something to keep:</strong> {current.task.evidence}</p>
              </div>

              {choice ? (
                <div ref={feedback} tabIndex={-1} className={styles.feedback}>
                  <h3>Your choice: {choice.label}</h3>
                  <p>{choice.feedback}</p>
                  <div className={styles.feedbackActions}>
                    <button type="button" onClick={() => move(advance(progress, choice.id))}>
                      {choice.target === null ? 'Save this route checkpoint' :
                        choice.target === current.id ? 'Try the choice again' : `Enter: ${nextScene?.title}`}
                    </button>
                    <button type="button" onClick={() => {
                      setSelectedChoice(null);
                      heading.current?.focus();
                    }}>Choose a different direction</button>
                  </div>
                </div>
              ) : (
                <div role="group" aria-labelledby={choiceId} className={styles.choices}>
                  <h3 id={choiceId}>Choose your next step</h3>
                  {current.choices.map((option) => (
                    <button key={option.id} type="button" disabled={!ready}
                      onClick={() => setSelectedChoice(option.id)}
                    >
                      <span className={styles.choiceLabel}>{option.label}<span aria-hidden="true"> ↗</span></span>
                      <span className={styles.choiceHint}>{option.hint}</span>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
          <details className={styles.sources}>
            <summary>Sources & preview review status</summary>
            <p>Scene version {current.version} · Draft awaiting human editorial and portrayal review.</p>
            <ul>
              {current.sourceIds.map((id) => {
                const source = registry.sources.find((s) => s.id === id)!;
                return <li key={id}>{source.href ? <a href={source.href}>{source.label}</a> : source.label}</li>;
              })}
            </ul>
            <p>{guide.reviewNote}</p>
          </details>
        </div>
      </div>

      <div className={styles.trail}>
        <div>
          <h3>Your local trail</h3>
          <p>{progress.completed.length} of {registry.scenes.length} scene checkpoints acknowledged · not a skill assessment</p>
          <progress value={progress.completed.length} max={registry.scenes.length} aria-label="Acknowledged scene checkpoints" />
        </div>
        <details>
          <summary>Replay an encountered scene ({progress.visited.length})</summary>
          <ul className={styles.replayList}>
            {progress.visited.map((id) => {
              const visited = registry.scenes.find((s) => s.id === id)!;
              return <li key={id}>
                <button type="button" disabled={!ready} onClick={() => move(replayScene(progress, id))}>
                  {visited.title} {progress.completed.includes(id) ? '· checkpoint saved' : '· encountered'}
                </button>
              </li>;
            })}
          </ul>
        </details>
        <p className={styles.subtle} role="status" aria-live="polite">{storageNotice}</p>
        <button ref={resetButton} type="button" disabled={!ready}
          aria-expanded={resetOpen} aria-controls={resetId}
          onClick={() => setResetOpen(true)}
        >Reset local preview progress</button>
        {resetOpen && (
          <div id={resetId} className={styles.reset}
            onKeyDown={(event) => { if (event.key === 'Escape') cancelReset(); }}
          >
            <h4>Start this preview again?</h4>
            <p>This clears only the Guide preview trail on this browser. It does not change other site data.</p>
            <div className={styles.feedbackActions}>
              <button ref={resetCancel} type="button" onClick={cancelReset}>Keep my progress</button>
              <button type="button" onClick={() => {
                const cleared = clearProgress(browserStorage());
                setStorageNotice(cleared
                  ? 'Local preview progress reset. Your new trail starts at arrival.'
                  : 'This page is reset, but saved browser progress could not be cleared. Check browser storage settings.');
                move(freshProgress());
              }}>Clear preview progress & restart</button>
            </div>
          </div>
        )}
      </div>
      <noscript>The first encounter is readable without JavaScript. Enable JavaScript for scene choices and local replay.</noscript>
    </section>
  );
}
