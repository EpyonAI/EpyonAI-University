import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import GuideScenePlayer from './GuideScenePlayer';

describe('accessible initial player HTML', () => {
  const html = () => renderToStaticMarkup(React.createElement(GuideScenePlayer, { previewNavigation: true }));

  it('server-renders a readable encounter with only the arrival Guide image', () => {
    const result = html();
    expect(result).toContain('One question opens a pathway.');
    expect(result).toContain('not a live AI chat');
    expect(result.match(/<img /g)).toHaveLength(1);
    expect(result).toContain('alt="ChatGPT Guide:');
    expect(result).toContain('width="768"');
    expect(result).toContain('height="1152"');
    expect(result).not.toContain('claude.webp');
    expect(result).not.toMatch(/<(video|audio|input|textarea)\b/);
  });

  it('uses semantic, named keyboard controls and defers interaction until storage loads', () => {
    const result = html();
    expect(result).toContain('role="group" aria-label="Preview navigation triggers"');
    expect(result).toContain('aria-labelledby=');
    expect(result).toContain('<h2');
    expect(result).toContain('tabindex="-1"');
    expect(result).toContain('<summary>');
    expect(result).toContain('aria-label="Acknowledged scene checkpoints"');
    expect(result).toContain('aria-live="polite"');
    const buttons = result.match(/<button\b[^>]*>/g)!;
    expect(buttons.length).toBeGreaterThan(5);
    expect(buttons.every((button) => button.includes('type="button"'))).toBe(true);
    expect(buttons.every((button) => button.includes('disabled=""'))).toBe(true);
    expect(result).toContain('<noscript>');
  });
});
