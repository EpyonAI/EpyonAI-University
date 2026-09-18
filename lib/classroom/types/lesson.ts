/**
 * Core types for the Classroom learning platform
 */

export type Domain = 'universal' | 'epyonai' | 'epyontax' | 'the-epyon';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type AssessmentType = 'quiz' | 'essay' | 'discussion' | 'project' | 'none';

export interface LessonMetadata {
  id: string;
  slug: string;
  title: string;
  description?: string;
  domain: Domain[];
  difficulty: Difficulty;
  duration_minutes: number;
  instructor: string | string[];
  tags: string[];
  prerequisites: string[];
  learning_objectives: string[];
  assessment_type: AssessmentType;
  created_at?: string;
  updated_at?: string;
  featured?: boolean;
}

export interface Lesson extends LessonMetadata {
  content: string; // Markdown content
  html?: string; // Rendered HTML
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  domain: Domain[];
  lessons: string[]; // lesson IDs or slugs
  difficulty: Difficulty;
  duration_minutes: number;
  instructors: string[];
  tags: string[];
  image_url?: string;
  featured?: boolean;
  order?: number;
}

export interface Module {
  id: string;
  slug: string;
  title: string;
  description: string;
  courses: string[]; // course IDs or slugs
  order?: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'open';
  options?: string[];
  correct_answer?: number | string;
  explanation?: string;
}

export interface Quiz {
  id: string;
  lesson_id: string;
  title: string;
  questions: QuizQuestion[];
  passing_score: number; // percentage
  time_limit_minutes?: number;
}

export interface LessonContent {
  lesson: Lesson;
  quiz?: Quiz;
  related_lessons?: string[]; // slugs
  discussion_thread_id?: string;
}
