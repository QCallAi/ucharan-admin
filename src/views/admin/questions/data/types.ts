
export interface QuestionOption {
  key: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  _id: string;
  question: string;
  options: QuestionOption[];
  cefr_level: string;
  learning_language_id: string;
  native_language_id: string;
  type: string;
  meta: object;
  difficulty: "easy" | "medium" | "hard";
  createdAt: string;
}

export interface AddQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (question: Omit<Question, "_id">) => void;
}

export interface EditQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: string, question: Partial<Omit<Question, "_id">>) => void;
  question: Question | null;
}

export interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
}
