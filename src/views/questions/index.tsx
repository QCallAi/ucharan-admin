import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputField from "views/session/create-session/InputField";
import TextAreaField from "views/session/create-session/textField";

export default function QuestionForm() {
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full max-w-2xl rounded-3xl bg-white/70 p-10 shadow-xl backdrop-blur-md">
        <h2 className="mb-6 text-3xl font-semibold text-navy-800">
          Add Questions
        </h2>
        <Formik
          initialValues={{
            question: "",
            points: "",
            difficulty: "",
          }}
          validate={(values) => {
            const errors: any = {};
            if (!values.question.trim()) {
              errors.question = "Question is required";
            }
            if (!values.points) {
              errors.points = "Points are required";
            } else if (Number(values.points) < 1) {
              errors.points = "Minimum 1 point required";
            } else if (Number(values.points) > 100) {
              errors.points = "Maximum allowed is 100 points";
            }
            if (!values.difficulty) {
              errors.difficulty = "Difficulty is required";
            } else if (![1, 2, 3].includes(Number(values.difficulty))) {
              errors.difficulty = "Invalid difficulty";
            }
            return errors;
          }}
          onSubmit={async (values, { resetForm }) => {
            await fetch("http://localhost:4000/questions", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            });
            alert("Saved!");
            resetForm();
          }}
        >
          {() => (
            <Form className="space-y-6">
              <div className="flex flex-col">
                <TextAreaField name="question" placeholder="Enter question" />
              </div>
              <div className="flex flex-col">
                <InputField
                  name="points"
                  type="number"
                  placeholder="Points"
                  className="rounded-2xl border border-gray-300 bg-white p-3 text-sm 
                             shadow-sm focus:border-blue-400 focus:ring-2
                             focus:ring-blue-300"
                />
              </div>
              <Field
                as="select"
                name="difficulty"
                className="
                  w-[50%] rounded-[10px] border border-gray-300 bg-white p-3 text-sm
                    shadow-sm transition focus:border-blue-400 focus:ring-2
                    focus:ring-blue-300
                  "
              >
                <option value="">Select Difficulty</option>
                <option value="1">Easy</option>
                <option value="2">Medium</option>
                <option value="3">Hard</option>
              </Field>
              <ErrorMessage
                name="difficulty"
                component="div"
                className="mt-1 text-xs text-red-500"
              />
              {/* Save Button */}
              <div>
                <button
                  type="submit"
                  className="w-32 rounded-xl bg-blue-600 py-3 font-semibold text-white
                             shadow-md transition-all hover:bg-blue-700"
                >
                  Addd
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
