export interface QuestionOption {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

export interface Profile {
  id: number;
  name: string;
  mainMessage: string;
  meaningNow: string;
  inactionConsequences: string;
  improvement: string;
  transition: string;
  minScore: number;
  maxScore: number;
  color: string;
}
