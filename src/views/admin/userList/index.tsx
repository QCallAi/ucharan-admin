/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tag, useToast } from "@chakra-ui/react";
import Loader from "components/Loader/Loader";
import Pagination from "components/pagenation";
import React, { useEffect, useMemo, useState } from "react";
import { formatDateAmPm } from "utils/utils";
import SearchBar from "./searchBar";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

const UserList = () => {
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [allUserList, setAllUserList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [perPage] = useState(10);

  // useEffect(() => {
  //   const fetchVoiceList = async () => {
  //     setLoading(true);
  //     try {
  //       const data = await getUserList();
  //       if (data?.data) {
  //         setUserList(data?.data);
  //         setAllUserList(data?.data);
  //       }
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       Swal.fire({
  //         icon: "error",
  //         title: "Error!",
  //         text: "Failed to fetch voice list. Please try again.",
  //       });
  //     }
  //   };
  //   fetchVoiceList();
  // }, [refresh]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (allUserList) {
      const filteredData = allUserList.filter((item: any) => {
        return Object.keys(item).some((key) => {
          const itemValue = item[key];
          if (typeof itemValue === "string") {
            return itemValue.toLowerCase().includes(value.toLowerCase());
          }
          if (typeof itemValue === "number") {
            return itemValue.toString().includes(value);
          }
          if (itemValue instanceof Date) {
            return itemValue.toLocaleDateString().includes(value);
          }
          return false;
        });
      });
      setUserList(filteredData);
    }
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  // Sorting Logic
  const sortedUsers = useMemo(() => {
    let sortableItems = [...userList];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        let aValue, bValue;

        if (sortConfig.key === "amount") {
          aValue = parseFloat(a[sortConfig.key]);
          bValue = parseFloat(b[sortConfig.key]);
        } else if (sortConfig.key === "created_at") {
          aValue = new Date(a[sortConfig.key]).getTime();
          bValue = new Date(b[sortConfig.key]).getTime();
        } else {
          aValue = a[sortConfig.key];
          bValue = b[sortConfig.key];
        }

        if (aValue < bValue) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [userList, sortConfig]);

  // Pagination Logic
  const indexOfLastUser = currentPage * perPage;
  const indexOfFirstUser = indexOfLastUser - perPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  const requestSort = (key: any) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    } else if (
      sortConfig.key === key &&
      sortConfig.direction === "descending"
    ) {
      direction = "";
    }
    setSortConfig({ key: direction ? key : "", direction });
  };

  const getSortIcon = (key: any) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? (
        <FaSortUp />
      ) : (
        <FaSortDown />
      );
    }
    return <FaSort />;
  };

  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center justify-end">
        <SearchBar
          initialData={searchQuery}
          handleFilteredData={handleSearch}
        />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative overflow-x-auto rounded border-[1px] border-gray-200 p-3 shadow-md dark:border-[#ffffff33] dark:bg-navy-900 sm:rounded-lg ">
          <table className="responsive-table text-black w-full text-left text-sm dark:text-gray-400 rtl:text-right">
            <thead className="text-black-700 border-b-2 text-xs uppercase  dark:bg-navy-900 dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th
                  scope="col"
                  className="cursor-pointer px-6 py-3"
                  onClick={() => requestSort("created_at")}
                >
                  <div className="flex items-center gap-2">
                    Created At {getSortIcon("created_at")}
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Email Verify
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers?.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    index % 2 === 0 ? "even:bg-gray-50" : "odd:bg-white"
                  } ${
                    index % 2 === 0
                      ? "dark:bg-navy-900 dark:text-white"
                      : "dark:bg-navy-900 dark:text-white"
                  }`}
                >
                  <td
                    data-label="Full Name"
                    className="cursor-pointer whitespace-nowrap px-6 py-4 font-medium text-blue-800 dark:text-white"
                  >
                    {item?.first_name} {item?.last_name}
                  </td>
                  <td className="px-6 py-4" data-label="Email">
                    {item?.email ? item?.email : "-"}
                  </td>
                  <td className="px-6 py-4" data-label="Phone">
                    {item?.phone ? item?.phone : "-"}
                  </td>
                  <td className="px-6 py-4" data-label="Created At">
                    {formatDateAmPm(item?.created_at)}
                  </td>
                  <td className="px-6 py-4" data-label="Phone">
                    {item?.is_verify_email ? (
                      <Tag variant="solid" colorScheme="green">
                        Verified
                      </Tag>
                    ) : (
                      <Tag variant="solid" colorScheme="yellow">
                        Pending
                      </Tag>
                    )}
                  </td>
                  <td className="px-6 py-4" data-label="Action">
                    <div className="flex items-center justify-end gap-4 md:justify-center">
                      <button className="flex items-center justify-center gap-1 rounded bg-blue-700 px-2 py-1 text-white hover:bg-blue-800">
                        {/* <FaMoneyBillTrendUp /> */}
                        <MdEdit />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Pagination
        perPage={perPage}
        allTotal={userList?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default UserList;
