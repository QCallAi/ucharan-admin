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
  Textarea,
} from "@chakra-ui/react";
import { Formik, Form, FieldArray, Field } from "formik";
import InputField from "components/fields/InputField";
import { AddQuestionModalProps } from "../data/types";

const AddQuestionModal: React.FC<AddQuestionModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Question</ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{
            question: "",
            options: [
              { key: "A", text: "", isCorrect: false },
              { key: "B", text: "", isCorrect: false },
              { key: "C", text: "", isCorrect: false },
              { key: "D", text: "", isCorrect: false },
            ],
            cefr_level: "A1",
            learning_language_id: "ead569f2-0ce4-4dfe-9c1c-1e003c29ea58",
            native_language_id: "3a5d8f4d-62d4-49eb-adc9-711e38655cfd",
            type: "mcq",
            meta: JSON.stringify({}, null, 2), // ✅ Always string
          }}
          onSubmit={(values) => {
            const transformedValues = {
              ...values,
              meta:
                typeof values.meta === "string" && values.meta.trim() !== ""
                  ? JSON.parse(values.meta)
                  : {},
              createdAt: new Date().toISOString(),
              difficulty: "easy" as "easy",
            };
            onSave(transformedValues);
            onClose();
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
                  id="learning_language_id"
                  name="learning_language_id"
                  label="Learning Language ID"
                  placeholder="Enter learning language ID"
                />
                <InputField
                  id="native_language_id"
                  name="native_language_id"
                  label="Native Language ID"
                  placeholder="Enter native language ID"
                />
                <InputField
                  id="cefr_level"
                  name="cefr_level"
                  label="CEFR Level"
                  placeholder="Enter CEFR level"
                />
                <InputField
                  id="type"
                  name="type"
                  label="Type"
                  placeholder="Enter type"
                />
                <InputField
                  id="difficulty"
                  name="difficulty"
                  label="Difficulty"
                  placeholder="Enter difficulty"
                />
                <Field name="meta">
                  {({ field }: any) => (
                    <div>
                      <label htmlFor="meta">Meta (JSON)</label>
                      <Textarea
                        {...field}
                        id="meta"
                        placeholder='{"key": "value"}'
                      />
                    </div>
                  )}
                </Field>

                <FieldArray name="options">
                  {() => (
                    <div>
                      {values.options?.map((option, index) => (
                        <div
                          key={`${option.key}-${index}`}
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
                              <Checkbox
                                {...field}
                                isChecked={Boolean(field.value)} // ✅ Boolean cast
                                onChange={(e) => {
                                  const isChecked = e.target.checked;
                                  values?.options?.forEach((_, i) => {
                                    setFieldValue(
                                      `options[${i}].isCorrect`,
                                      i === index ? isChecked : false
                                    );
                                  });
                                }}
                              >
                                Correct
                              </Checkbox>
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

export default AddQuestionModal;
