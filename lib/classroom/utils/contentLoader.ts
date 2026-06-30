/**
 * Content loading utilities for the Classroom
 * Handles lesson retrieval, filtering by domain, and metadata parsing
 */

import fs from 'fs';
import path from 'path';
import { LessonMetadata, Domain } from '../types/lesson';

const LESSONS_DIR = path.join(process.cwd(), 'lib/classroom/lessons');

/**
 * Parse YAML frontmatter from markdown
 */
export function parseFrontmatter(content: string): {
  metadata: Record<string, unknown>;
  body: string;
} {
  const match = content.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { metadata: {}, body: content };
  }

  const [, frontmatterStr, body] = match;
  const metadata: Record<string, unknown> = {};

  // Simple YAML parser (handles most common cases)
  frontmatterStr.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;

    const key = line.substring(0, colonIndex).trim();
    const value = line.substring(colonIndex + 1).trim();

    // Handle arrays
    if (value.startsWith('[') && value.endsWith(']')) {
      metadata[key] = value
        .slice(1, -1)
        .split(',')
        .map((v) => v.trim());
    } else if (value === 'true') {
      metadata[key] = true;
    } else if (value === 'false') {
      metadata[key] = false;
    } else if (!isNaN(Number(value))) {
      metadata[key] = Number(value);
    } else {
      metadata[key] = value.replace(/^["']|["']$/g, '');
    }
  });

  return { metadata, body };
}

/**
 * Get all lessons available for a domain
 */
export async function getLessonsByDomain(domain: Domain): Promise<LessonMetadata[]> {
  const lessons: LessonMetadata[] = [];

  try {
    const entries = fs.readdirSync(LESSONS_DIR, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const categoryDir = path.join(LESSONS_DIR, entry.name);
        const files = fs.readdirSync(categoryDir);

        for (const file of files) {
          if (file.endsWith('.md')) {
            const filepath = path.join(categoryDir, file);
            const content = fs.readFileSync(filepath, 'utf-8');
            const { metadata } = parseFrontmatter(content);

            // Check if lesson is available for this domain
            if (
              metadata.domain &&
              Array.isArray(metadata.domain) &&
              metadata.domain.includes(domain)
            ) {
              lessons.push(metadata as unknown as LessonMetadata);
            }
          }
        }
      }
    }
  } catch (error) {
    console.error('Error loading lessons:', error);
  }

  // Sort by difficulty then by ID
  return lessons.sort((a, b) => {
    const difficultyOrder = { beginner: 0, intermediate: 1, advanced: 2 };
    const diff =
      (difficultyOrder[a.difficulty] ?? 0) - (difficultyOrder[b.difficulty] ?? 0);
    return diff || a.id.localeCompare(b.id);
  });
}

/**
 * Get a specific lesson by slug
 */
export async function getLessonBySlug(slug: string) {
  try {
    const entries = fs.readdirSync(LESSONS_DIR, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const categoryDir = path.join(LESSONS_DIR, entry.name);
        const files = fs.readdirSync(categoryDir);

        for (const file of files) {
          if (file.endsWith('.md')) {
            const filepath = path.join(categoryDir, file);
            const content = fs.readFileSync(filepath, 'utf-8');
            const { metadata, body } = parseFrontmatter(content);

            if (metadata.slug === slug) {
              return {
                ...metadata,
                content: body,
              };
            }
          }
        }
      }
    }
  } catch (error) {
    console.error('Error loading lesson:', error);
  }

  return null;
}

/**
 * Get all available lessons across all domains
 */
export async function getAllLessons(): Promise<LessonMetadata[]> {
  const lessons: LessonMetadata[] = [];

  try {
    const entries = fs.readdirSync(LESSONS_DIR, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const categoryDir = path.join(LESSONS_DIR, entry.name);
        const files = fs.readdirSync(categoryDir);

        for (const file of files) {
          if (file.endsWith('.md')) {
            const filepath = path.join(categoryDir, file);
            const content = fs.readFileSync(filepath, 'utf-8');
            const { metadata } = parseFrontmatter(content);
            lessons.push(metadata as unknown as LessonMetadata);
          }
        }
      }
    }
  } catch (error) {
    console.error('Error loading lessons:', error);
  }

  return lessons;
}

/**
 * Search lessons by tag
 */
export async function getLessonsByTag(tag: string, domain?: Domain): Promise<LessonMetadata[]> {
  const allLessons = await getAllLessons();

  return allLessons.filter((lesson) => {
    const hasTag = lesson.tags.includes(tag);
    const matchesDomain = !domain || (lesson.domain && lesson.domain.includes(domain));
    return hasTag && matchesDomain;
  });
}
