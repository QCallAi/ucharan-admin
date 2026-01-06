
import { useState, useEffect } from "react";
import { questionService } from "services/question";
import { Question } from "../data/types";

export const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      const data = await questionService.getQuestions();
      setQuestions(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addQuestion = async (question: Omit<Question, "_id">) => {
    setIsLoading(true);
    try {
      const newQuestion = await questionService.addQuestion(question);
      setQuestions((prev) => [...prev, newQuestion]);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuestion = async (
    id: string,
    question: Partial<Omit<Question, "_id">>
  ) => {
    setIsLoading(true);
    try {
      const updatedQuestion = await questionService.updateQuestion(id, question);
      setQuestions((prev) =>
        prev?.map((q) => (q._id === id ? updatedQuestion : q))
      );
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteQuestion = async (id: string) => {
    setIsLoading(true);
    try {
      await questionService.deleteQuestion(id);
      setQuestions((prev) => prev.filter((q) => q._id !== id));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    questions,
    isLoading,
    error,
    addQuestion,
    updateQuestion,
    deleteQuestion,
  };
};
