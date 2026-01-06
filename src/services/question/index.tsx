import axios from "utils/axious";
import { Question } from "views/admin/questions/data/types";

const API_URL = "/test/placement-question";
const API_URL_START = "/test/start/ead569f2-0ce4-4dfe-9c1c-1e003c29ea58";

const mockQuestions: Question[] = [
  {
    _id: "mock-1",
    question: "What is the capital of France?",
    options: [
      { key: "A", text: "Berlin", isCorrect: false },
      { key: "B", text: "Madrid", isCorrect: false },
      { key: "C", text: "Paris", isCorrect: true },
      { key: "D", text: "Rome", isCorrect: false },
    ],
    cefr_level: "A1",
    learning_language_id: "lang-fr",
    native_language_id: "lang-en",
    type: "mcq",
    difficulty: "easy",
    createdAt: new Date().toISOString(),
    meta: { author: "mock-author" },
  },
  {
    _id: "mock-2",
    question: "What is 2 + 2?",
    options: [
      { key: "A", text: "3", isCorrect: false },
      { key: "B", text: "4", isCorrect: true },
      { key: "C", text: "5", isCorrect: false },
      { key: "D", text: "6", isCorrect: false },
    ],
    cefr_level: "A1",
    learning_language_id: "lang-ma",
    native_language_id: "lang-en",
    type: "mcq",
    difficulty: "easy",
    createdAt: new Date().toISOString(),
    meta: { author: "mock-author-2" },
  },
];

const getQuestions = async (): Promise<Question[]> => {
  try {
    const response = await axios.get(API_URL_START);
    console.log('>>>>>>>>>>>>',response.data);
    return response?.data?.questions?.map((q: any) => ({ ...q, _id: q.id }));
  } catch (error) {
    console.warn("API error, using mock data", error);
    return mockQuestions;
  }
};

const addQuestion = async (
  question: Omit<Question, "_id">
): Promise<Question> => {
  const response = await axios.post(API_URL, question);
  return { ...response.data, _id: response.data.id };
};

const updateQuestion = async (
  id: string,
  question: Partial<Omit<Question, "_id">>
): Promise<Question> => {
  const response = await axios.put(`${API_URL}/${id}`, question);
  return { ...response.data, _id: response.data.id };
};

const deleteQuestion = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const questionService = {
  getQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
};
