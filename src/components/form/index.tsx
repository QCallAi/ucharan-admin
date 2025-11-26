import React from 'react'

const Editform = () => {
  return (
    <div>
      <form className="max-w-sm mx-auto">
      <br/>
      <div className="mb-5">
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PRICING MODEL</label>
        <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className="mb-5">
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">BUSINESS TYPE</label>
        <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className="mb-5">
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CATEGORY</label>
        <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className="mb-5">
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PRICE</label>
        <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className="mb-5">
        <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requirment</label>
        <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>

    </form>
    </div>
  )
}

export default Editform
