import React from "react";
import { Link } from "react-router-dom";
const Price = () => {
  const data = [
    {
      model: "STARTER",
      businessType: "Suitable for small businesses",
      category: "This plan includes 12000 Minutes per year",
      price: "$2000/ year",
    },
    {
      model: "GROWTH",
      businessType: "Suitable for growing businesses",
      category: "This plan includes 30000 Minutes per year",
      price: "$5000/ year",
    },
    // Add more data objects here as needed
  ];
  return (
    <div>
      <br />
      <div className="flex justify-end">
        <Link to="/admin/user-edit">
          <button className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none">
            ADD
          </button>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <br />
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Pricing Model
              </th>
              <th scope="col" className="px-6 py-3">
                Business type
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "even:bg-gray-50" : "odd:bg-white"
                } ${index % 2 === 0 ? "dark:bg-gray-800" : "dark:bg-gray-900"}`}
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {item.model}
                </th>
                <td className="px-6 py-4">{item.businessType}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">
                  <button className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Price;
