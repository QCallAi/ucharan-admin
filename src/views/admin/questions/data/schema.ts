
import * as Yup from "yup";

export const questionSchema = Yup.object().shape({
  question: Yup.string().required("Question is required"),
  options: Yup.array()
    .of(
      Yup.object().shape({
        key: Yup.string().required("Key is required"),
        text: Yup.string().required("Text is required"),
        isCorrect: Yup.boolean().required("isCorrect is required"),
      })
    )
    .min(2, "At least two options are required")
    .test(
      "one-correct-answer",
      "There must be exactly one correct answer",
      (options) => options?.filter((opt) => opt.isCorrect).length === 1
    ),
  cefr_level: Yup.string().required("CEFR Level is required"),
  learning_language_id: Yup.string().required("Learning language is required"),
  native_language_id: Yup.string().required("Native language is required"),
  type: Yup.string().required("Type is required"),
  meta: Yup.object(),
  difficulty: Yup.string()
    .oneOf(["easy", "medium", "hard"])
    .required("Difficulty is required"),
});
