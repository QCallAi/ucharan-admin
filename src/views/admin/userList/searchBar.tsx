import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchBar = ({ initialData, handleFilteredData }: any) => {
  return (
    <div className="w-[250px]">
      <div className="relative w-full">
        <input
          type="text"
          id="default-search"
          className="bg-gray-50s block w-full rounded border border-gray-300 p-3 pl-5 text-sm text-gray-900 focus:outline-none dark:border-white dark:bg-[#111C44] dark:text-white"
          placeholder="Search"
          value={initialData}
          onChange={handleFilteredData}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <LuSearch className="mr-2 text-gray-400" size={25} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
