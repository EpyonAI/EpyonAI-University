/**
 * User progress and assessment tracking types
 */

export interface UserProgress {
  user_id: string;
  lesson_id: string;
  course_id?: string;
  started_at: Date;
  completed_at?: Date;
  time_spent_seconds: number;
  quiz_score?: number;
  quiz_passed?: boolean;
  last_accessed_at: Date;
}

export interface CourseEnrollment {
  user_id: string;
  course_id: string;
  enrolled_at: Date;
  completed_at?: Date;
  progress_percent: number;
  lessons_completed: number;
  lessons_total: number;
}

export interface QuizResponse {
  id: string;
  user_id: string;
  quiz_id: string;
  lesson_id: string;
  question_id: string;
  answer: string | number;
  correct: boolean;
  submitted_at: Date;
  time_spent_seconds?: number;
}

export interface QuizResult {
  user_id: string;
  quiz_id: string;
  lesson_id: string;
  score: number; // percentage
  passed: boolean;
  questions_correct: number;
  questions_total: number;
  submitted_at: Date;
  time_spent_seconds: number;
}

export interface UserLearningPath {
  user_id: string;
  domain: string;
  completed_lessons: string[];
  in_progress_lessons: string[];
  recommended_next: string[];
  learning_streak_days: number;
  total_learning_time_minutes: number;
  certification_progress?: {
    certificates_earned: string[];
    certificates_in_progress: string[];
  };
}
