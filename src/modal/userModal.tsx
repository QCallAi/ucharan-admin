import React, { useRef } from "react";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useFormik } from "formik";

const UserModal = ({ isOpen, handleClose }: any) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    contact: Yup.string().required("Contact  is required"),
    email: Yup.string().required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      //   navigate("/admin/assistant-setting", { state: { formData: values } });
    },
  });

  return (
    <>
      <Modal
        isCentered
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={handleClose}
        size={"xxl"}
      >
        <ModalOverlay />
        <ModalContent maxW={"700px"} className="dark:bg-navy-900">
          <ModalHeader>Add User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <div className="flex justify-between gap-3">
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <input
                  className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight  focus:border-blue-500 focus:bg-white focus:outline-none dark:border-[1px]  dark:border-white/10 dark:bg-navy-900 dark:focus:bg-navy-900"
                  id="firstName"
                  type="text"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div>{formik.errors.firstName.toString()}</div>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <input
                  className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight  focus:border-blue-500 focus:bg-white focus:outline-none dark:border-[1px]  dark:border-white/10 dark:bg-navy-900 dark:focus:bg-navy-900"
                  id="lastName"
                  type="text"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div>{formik.errors.lastName.toString()}</div>
                ) : null}
              </FormControl>
            </div>

            <FormControl mt={4}>
              <FormLabel>Contact</FormLabel>
              <input
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight  focus:border-blue-500 focus:bg-white focus:outline-none dark:border-[1px]  dark:border-white/10 dark:bg-navy-900 dark:focus:bg-navy-900"
                id="contact"
                type="number"
                value={formik.values.contact}
                onChange={formik.handleChange}
              />
              {formik.touched.contact && formik.errors.contact ? (
                <div>{formik.errors.contact.toString()}</div>
              ) : null}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <input
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight  focus:border-blue-500 focus:bg-white focus:outline-none dark:border-[1px]  dark:border-white/10 dark:bg-navy-900 dark:focus:bg-navy-900"
                id="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red">{formik.errors.email.toString()}</div>
              ) : null}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => formik.handleSubmit()}
            >
              Save
            </Button>
            <Button
              onClick={() => {
                handleClose();
                formik.resetForm();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserModal;
