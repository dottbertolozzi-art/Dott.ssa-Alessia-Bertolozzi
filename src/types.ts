export interface QuestionOption {
  label: string;
  value: number;
}

export interface Question {
  id: number;
  area: string;
  text: string;
  options?: QuestionOption[];
}

export interface Profile {
  id: number;
  name: string;
  description: string;
  message: string;
  whatIsHappening: string;
  whyPastAttemptsFailed: string;
  whatIsNeeded: string;
  minScore: number;
  maxScore: number;
  color: string;
}
