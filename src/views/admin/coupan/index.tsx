/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card, useToast } from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import Loader from "components/Loader/Loader";
import { MdDelete, MdEdit } from "react-icons/md";
import { RiCoupon3Fill } from "react-icons/ri";
import AddCouponModal from "modal/AddCoupanModal";
import Swal from "sweetalert2";
import DeleteModal from "modal/deleteModal";
import UpdateCouponModal from "modal/UpdateCouponModal";
import { deleteCoupon, getCouponList } from "services/coupon";

const Coupon = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [isAddCoupon, setIsAddCoupon] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isModalEditCoupon, setIsModalEditCoupon] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [rowId, setRowId] = useState("");

  const handleAddCouponClose = () => {
    setIsAddCoupon(false);
  };

  const createNewCoupon = () => {
    setIsAddCoupon(!isAddCoupon);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleModal = (item: any) => {
    setIsConfirm(false);
    setIsModalOpen(!isModalOpen);
    setRowId(item?.id);
  };

  const handleEditCoupanClose = () => {
    setIsModalEditCoupon(false);
  };

  const handleEditCoupan = (item: any) => {
    setIsModalEditCoupon(!isModalEditCoupon);
    setSelectedItemId(item);
  };

  useEffect(() => {
    const fetchCouponList = async () => {
      setLoading(true);
      try {
        const data = await getCouponList();
        setCardData(data?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to fetch Coupan list. Please try again.",
        });
      }
    };
    fetchCouponList();
  }, [refresh]);

  useEffect(() => {
    if (isConfirm === true) {
      deleteCoupon(rowId)
        .then((response: any) => {
          if (response.success) {
            handleClose();
            setRefresh(!refresh);
            toast({
              description: response?.message,
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "top-left",
            });
          } else {
            toast({
              description: response?.message,
              status: "info",
              duration: 5000,
              isClosable: true,
              position: "top-left",
            });
          }
        })
        .catch((error: any) => {
          handleClose();
          console.error("Error Deleting Assistant:", error);
        });
    }
  }, [isConfirm]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="mt-8">
        {loading && <Loader />}
        <div className="mb-3 flex justify-end">
          <button
            onClick={() => createNewCoupon()}
            className="flex items-center justify-center gap-1  rounded bg-blue-700 px-6 py-2 text-white hover:bg-blue-800"
          >
            <GoPlus className="h-7 w-7" />
            ADD NEW Coupon
          </button>
        </div>
        {!loading && cardData && cardData?.length === 0 ? (
          <Card className="relative flex h-full w-full flex-col rounded border-[1px] border-gray-200 bg-white bg-clip-border p-4 shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="mb-auto flex flex-col items-center justify-center">
              <div className="mt-2 flex items-center justify-center rounded-full bg-lightPrimary p-[26px] text-5xl font-bold text-brand-500 dark:!bg-navy-700 dark:text-white">
                <RiCoupon3Fill />
              </div>
              <h4 className="mb-px mt-3 text-2xl font-bold text-navy-700 dark:text-white">
                No Coupon
              </h4>
              <p className="px-5 text-center text-base font-normal text-gray-600 md:!px-0 xl:!px-8">
                Get started by creating a new Coupon.
              </p>
              <button
                onClick={() => createNewCoupon()}
                className="mb-10 mt-10 flex items-center justify-center gap-1 rounded bg-blue-700 px-6 py-2 text-white hover:bg-blue-800"
              >
                <GoPlus className="h-7 w-7" />
                ADD NEW Coupon
              </button>
            </div>
          </Card>
        ) : (
          <div className="relative flex h-full w-full flex-col rounded border-[1px] border-gray-200 bg-white bg-clip-border p-4 shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:bg-navy-800 dark:text-white dark:shadow-none">
            <table className="responsive-table w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
              <thead className="text-black-700 border-b-2 bg-gray-50 text-xs uppercase  dark:bg-navy-800 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Coupon
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Extra Percentage
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Max Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Max Used
                  </th>
                  <th scope="col" className="px-6 py-3">
                    action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cardData?.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      index % 2 === 0 ? "even:bg-gray-50" : "odd:bg-white"
                    } ${
                      index % 2 === 0 ? "dark:bg-navy-800" : "dark:bg-navy-800"
                    }`}
                  >
                    <td
                      className="text-black cursor-pointer whitespace-nowrap px-6  py-4 text-lg hover:text-blue-700 hover:underline dark:text-white"
                      data-label="title"
                    >
                      {item?.couponcode}
                    </td>
                    <td
                      className="text-black cursor-pointer whitespace-nowrap px-6  py-4 text-lg hover:text-blue-700 hover:underline dark:text-white"
                      data-label="title"
                    >
                      {item?.extra_percentage}
                    </td>
                    <td
                      className="text-black cursor-pointer whitespace-nowrap px-6  py-4 text-lg hover:text-blue-700 hover:underline dark:text-white"
                      data-label="title"
                    >
                      {item?.maximum_amount}
                    </td>
                    <td
                      className="text-black cursor-pointer whitespace-nowrap px-6  py-4 text-lg hover:text-blue-700 hover:underline dark:text-white"
                      data-label="title"
                    >
                      {item?.max_no_of_used}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex gap-4">
                        <MdEdit
                          onClick={() => handleEditCoupan(item)}
                          className="h-6 w-6 cursor-pointer font-medium text-blue-600 hover:underline dark:text-blue-500"
                        />
                        <MdDelete
                          onClick={() => handleModal(item)}
                          className="h-6 w-6 cursor-pointer font-medium text-red-600 hover:underline dark:text-red-500"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <DeleteModal
        isOpen={isModalOpen}
        handleClose={handleClose}
        setIsConfirm={setIsConfirm}
      />

      <AddCouponModal
        isOpen={isAddCoupon}
        handleClose={handleAddCouponClose}
        setRefresh={setRefresh}
        refresh={refresh}
      />

      <UpdateCouponModal
        isOpen={isModalEditCoupon}
        handleClose={handleEditCoupanClose}
        rowData={selectedItemId}
        setRefresh={setRefresh}
        refresh={refresh}
      />
    </div>
  );
};

export default Coupon;
