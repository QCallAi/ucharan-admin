import Axios from "utils/axious";
import { Formik, Field, Form, FieldArray } from "formik";
import InputField from "./InputField";

const initialValues = {
  title: "",
  content: "",
  sublessons: [
    {
      title: "",
      content: "",
      estimated_time_in_minutes: "",
      level: "",
      format: "",
      phrases: [{ phrase: "", translation: "" }],
    },
  ],
};
function createSessionAPI(payload: any) {
  try {
    const response = Axios.post("/sessions", payload);
    console.log("Session created:", response);
  } catch (error) {}
}
const CreateSession = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        if (values) {
          createSessionAPI(values);
        } else {
        }
      }}
    >
      {({ values, errors }) => (
        <Form className="space-y-6 p-6 text-navy-700 dark:text-white">
          <h1 className="text-2xl font-semibold">Create Session</h1>

          {/* MAIN SESSION INPUTS */}
          <InputField name="title" placeholder="Session Title" />

          <Field
            as="textarea"
            name="content"
            placeholder="Session Content"
            className="w-full rounded border p-2 outline-none focus:border-[#36c8ff] focus:ring-1 focus:ring-[#36c8ff]"
          />

          {/* SUB LESSONS */}
          <FieldArray name="sublessons">
            {({ push, remove }) => (
              <div>
                <h2 className="mb-3 text-xl font-semibold">Sub Lessons</h2>

                {values.sublessons.map((sub, index) => (
                  <div
                    key={index}
                    className="mb-4 rounded border bg-gray-50 p-4 dark:bg-navy-700"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-bold">Sub Lesson {index + 1}</h3>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    {/* SUB LESSON FIELDS */}
                    <InputField
                      name={`sublessons[${index}].title`}
                      placeholder="Sub Lesson Title"
                    />
                    <Field
                      as="textarea"
                      name={`sublessons[${index}].content`}
                      placeholder="Sub Lesson Content"
                      className="w-full rounded border p-2 outline-none focus:border-[#36c8ff] focus:ring-1 focus:ring-[#36c8ff]"
                    />
                    <InputField
                      name={`sublessons[${index}].estimated_time_in_minutes`}
                      type="number"
                      placeholder="Estimated Time in Minutes"
                    />
                    <InputField
                      name={`sublessons[${index}].level`}
                      placeholder="Level (Beginner / Intermediate)"
                    />
                    <InputField
                      name={`sublessons[${index}].format`}
                      placeholder="Format (Voice-based / Text)"
                    />
                    {/* PHRASES SECTION */}
                    <FieldArray name={`sublessons[${index}].phrases`}>
                      {({ push: pushPhrase, remove: removePhrase }) => (
                        <div className="mt-4 border-t pt-4">
                          <h4 className="mb-2 font-semibold">Phrases</h4>

                          {values.sublessons[index].phrases.map((_, pIndex) => (
                            <div
                              key={pIndex}
                              className="mb-3 rounded bg-white p-3 shadow-sm"
                            >
                              <div className="mb-2 flex justify-between">
                                <span className="font-medium">
                                  Phrase {pIndex + 1}
                                </span>

                                {pIndex > 0 && (
                                  <button
                                    type="button"
                                    onClick={() => removePhrase(pIndex)}
                                    className="text-red-500"
                                  >
                                    Remove
                                  </button>
                                )}
                              </div>

                              {/* PHRASE INPUT */}
                              <InputField
                                name={`sublessons[${index}].phrases[${pIndex}].phrase`}
                                placeholder="Phrase (e.g. Buenos días)"
                              />

                              {/* TRANSLATION INPUT */}
                              <InputField
                                name={`sublessons[${index}].phrases[${pIndex}].translation`}
                                placeholder="Translation (e.g. Good morning)"
                              />
                            </div>
                          ))}

                          {/* ADD PHRASE BUTTON */}
                          <button
                            type="button"
                            onClick={() =>
                              pushPhrase({ phrase: "", translation: "" })
                            }
                            className="rounded bg-purple-600 px-3 py-1 text-white"
                          >
                            + Add Phrase
                          </button>
                        </div>
                      )}
                    </FieldArray>
                  </div>
                ))}

                {/* ADD SUB LESSON */}
                <button
                  type="button"
                  onClick={() =>
                    push({
                      title: "",
                      content: "",
                      estimated_time_in_minutes: "",
                      level: "",
                      format: "",
                      phrases: [{ phrase: "", translation: "" }],
                    })
                  }
                  className="mt-2 rounded bg-blue-600 px-4 py-2 text-white"
                >
                  + Add Sub Lesson
                </button>
              </div>
            )}
          </FieldArray>

          {/* SUBMIT */}
          <button
            type="submit"
            className="rounded bg-green-600 px-4 py-2 text-white"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateSession;
