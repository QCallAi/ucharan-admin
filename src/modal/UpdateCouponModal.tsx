/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateCouponDetails } from "services/coupon";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaPercent } from "react-icons/fa6";
const UpdateCouponModal = ({
  isOpen,
  handleClose,
  rowData,
  setRefresh,
  refresh,
}: any) => {
  const toast = useToast();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const ID = rowData?.id;
  const [startDate, setStartDate] = useState(new Date());

  const validationSchema = Yup.object().shape({
    extra_percentage: Yup.string()
      .required("Extra percentage is required")
      .max(100),
    maximum_amount: Yup.string().required("Maximum Amount required"),
    max_no_of_used: Yup.string().required("Max Numbar Used is required"),
  });

  useEffect(() => {
    if (rowData) {
      setStartDate(rowData.expired_at);
      formik.setValues({
        couponcode: rowData.couponcode,
        extra_percentage: rowData.extra_percentage,
        maximum_amount: rowData.maximum_amount,
        max_no_of_used: rowData.max_no_of_used,
      });
    }
  }, [rowData]);

  const formik = useFormik({
    initialValues: {
      extra_percentage: "",
      maximum_amount: "",
      max_no_of_used: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any, { resetForm }) => {
      const payload = {
        extra_percentage: values.extra_percentage,
        maximum_amount: values.maximum_amount,
        max_no_of_used: values.max_no_of_used,
        expired_at: startDate,
      };

      updateCouponDetails(payload, ID).then((response: any) => {
        if (response.status === 200 || response.status === 201) {
          setRefresh(!refresh);
          handleClose();
          toast({
            description: response.message,
            status: "success",
            duration: 8000,
            isClosable: true,
            position: "top-left",
          });
          resetForm();
        } else {
          toast({
            description: response.message,
            status: "info",
            duration: 8000,
            isClosable: true,
            position: "top-left",
          });
          throw new Error("Template update failed");
        }
      });
    },
  });

  return (
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
        <ModalHeader>Update Coupon</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Coupon Code</FormLabel>
            <input
              className="mb-4 w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight  focus:border-blue-500 focus:bg-white focus:outline-none dark:border-[1px]  dark:border-white/10 dark:bg-navy-900 dark:focus:bg-navy-900"
              id="coupon_code"
              type="text"
              value={formik.values.couponcode}
              onChange={formik.handleChange}
              disabled
            />
          </FormControl>
          <FormControl>
            <FormLabel>Extra Percentage</FormLabel>
            <InputGroup>
              <Input
                placeholder="Enter Percentage"
                className="mb-4 w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight  focus:border-blue-500 focus:bg-white focus:outline-none dark:border-[1px]  dark:border-white/10 dark:bg-navy-900 dark:focus:bg-navy-900"
                id="extra_percentage"
                type="number"
                value={formik.values.extra_percentage}
                onChange={formik.handleChange}
              />
              <InputRightElement>
                <FaPercent
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                />
              </InputRightElement>
            </InputGroup>
            {formik.touched.extra_percentage &&
            formik.errors.extra_percentage ? (
              <div className="text-red-500">
                {formik.errors.extra_percentage.toString()}
              </div>
            ) : null}
          </FormControl>
          <FormControl>
            <FormLabel>Extra Amount</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
              >
                $
              </InputLeftElement>
              <Input
                placeholder="Enter amount"
                className="mb-4 w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight  focus:border-blue-500 focus:bg-white focus:outline-none dark:border-[1px]  dark:border-white/10 dark:bg-navy-900 dark:focus:bg-navy-900"
                id="maximum_amount"
                type="number"
                value={formik.values.maximum_amount}
                onChange={formik.handleChange}
              />
            </InputGroup>
            {formik.touched.maximum_amount && formik.errors.maximum_amount ? (
              <div className="text-red-500">
                {formik.errors.maximum_amount.toString()}
              </div>
            ) : null}
          </FormControl>
          <FormControl>
            <FormLabel>Max Numbar Used</FormLabel>
            <input
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight  focus:border-blue-500 focus:bg-white focus:outline-none dark:border-[1px]  dark:border-white/10 dark:bg-navy-900 dark:focus:bg-navy-900"
              id="max_no_of_used"
              type="number"
              value={formik.values.max_no_of_used}
              onChange={formik.handleChange}
            />
            {formik.touched.max_no_of_used && formik.errors.max_no_of_used ? (
              <div className="text-red-500">
                {formik.errors.max_no_of_used.toString()}
              </div>
            ) : null}
          </FormControl>
          <FormControl className="expaire-css mt-3">
            <FormLabel>Expired Date</FormLabel>
            <ReactDatePicker
              className="mb-4 w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight  focus:border-blue-500 focus:bg-white focus:outline-none dark:border-[1px]  dark:border-white/10 dark:bg-navy-900 dark:focus:bg-navy-900"
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => formik.handleSubmit()}
          >
            Update
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
  );
};

export default UpdateCouponModal;
