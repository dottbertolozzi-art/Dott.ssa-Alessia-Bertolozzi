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
  mirrorEffect: string;
  explanation: string;
  urgency: string;
  reframe: string;
  direction: string;
  transition: string;
  minScore: number;
  maxScore: number;
  color: string;
}
