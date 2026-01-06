import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { Formik, Form, FieldArray, Field } from "formik";
import InputField from "components/fields/InputField";
import { EditQuestionModalProps } from "../data/types";

const EditQuestionModal: React.FC<EditQuestionModalProps> = ({
  isOpen,
  onClose,
  onSave,
  question,
}) => {
  if (!isOpen || !question) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Question</ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{
            question: question.question || "",
            type: question.type || "mcq",
            cefr_level: question.cefr_level || "A1",
            learning_language_id:
              question.learning_language_id ||
              "ead569f2-0ce4-4dfe-9c1c-1e003c29ea58",
            native_language_id:
              question.native_language_id ||
              "3a5d8f4d-62d4-49eb-adc9-711e38655cfd",
            options: question.options || [],
            meta: JSON.stringify(question.meta || {}, null, 2),
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("SUBMIT CLICKED", values);
            try {
              const transformedValues = {
                learning_language_id:
                  values.learning_language_id || question.learning_language_id,
                native_language_id:
                  values.native_language_id || question.native_language_id,
                type: values.type || "mcq",
                question: values.question,
                cefr_level: values.cefr_level || "A1",
                meta:
                  typeof values.meta === "string" && values.meta.trim() !== ""
                    ? JSON.parse(values.meta)
                    : {},
                options: values?.options?.map((opt: any) => ({
                  key: opt.key,
                  text: opt.text,
                  isCorrect: Boolean(opt.isCorrect),
                })),
              };
              onSave(question._id, transformedValues);
              onClose();
            } catch (e) {
              console.error("Submit error:", e);
            }
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <ModalBody>
                <InputField
                  id="question"
                  name="question"
                  label="Question"
                  placeholder="Enter question"
                />
                <InputField
                  id="type"
                  name="type"
                  label="Type"
                  placeholder="Enter type"
                />
                <FieldArray name="options">
                  {() => (
                    <div>
                      {values?.options?.map((option, index) => (
                        <div
                          key={index}
                          className="mt-2 flex items-center gap-2"
                        >
                          <InputField
                            id={`options[${index}].text`}
                            name={`options[${index}].text`}
                            label={`Option ${option.key}`}
                            placeholder="Enter option text"
                          />
                          <Field name={`options[${index}].isCorrect`}>
                            {({ field }: any) => (
                              <div className="pt-7">
                                <Checkbox
                                  {...field}
                                  isChecked={field.value}
                                  onChange={(e) => {
                                    const isChecked = e.target.checked;
                                    values.options.forEach((_, i) => {
                                      setFieldValue(
                                        `options[${i}].isCorrect`,
                                        i === index ? isChecked : false
                                      );
                                    });
                                  }}
                                >
                                  Correct
                                </Checkbox>
                              </div>
                            )}
                          </Field>
                        </div>
                      ))}
                    </div>
                  )}
                </FieldArray>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} type="submit">
                  Save
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default EditQuestionModal;
