const Pagination = ({ perPage, allTotal, currentPage, paginate }: any) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(allTotal / perPage);

  const maxVisiblePages = 4;

  const calculateStartIndex = () => {
    if (currentPage <= Math.floor(maxVisiblePages / 2)) {
      return 1;
    } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
      return totalPages - maxVisiblePages + 1;
    } else {
      return currentPage - Math.floor(maxVisiblePages / 2);
    }
  };

  const calculateEndIndex = () => {
    const startIndex = calculateStartIndex();
    return Math.min(startIndex + maxVisiblePages - 1, totalPages);
  };

  for (let i = calculateStartIndex(); i <= calculateEndIndex(); i++) {
    pageNumbers.push(i);
  }

  const isSinglePage = totalPages <= 1;

  if (isSinglePage) {
    return null;
  }

  return (
    <nav className="mt-4" aria-label="Pagination">
      <ul className="mr-[4%] flex list-none justify-end">
        <li className="mr-2">
          <button
            className={`rounded-md px-3 py-1 ${
              currentPage === 1
                ? "bg-gray-500 hover:bg-gray-300"
                : "bg-blue-500 text-white hover:bg-blue-500"
            }`}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {calculateStartIndex() > 1 && (
          <li className="mx-1">
            <button
              className={`rounded-md bg-gray-200 px-3 py-1 text-gray-700 hover:bg-gray-300`}
              disabled={true}
            >
              ...
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className="mx-1">
            <button
              className={`rounded-md px-3 py-1 ${
                number === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
        {calculateEndIndex() < totalPages && (
          <li className="mx-1">
            <button
              className={`rounded-md bg-gray-200 px-3 py-1 text-gray-700 hover:bg-gray-300`}
              disabled={true}
            >
              ...
            </button>
          </li>
        )}
        <li className="ml-2">
          <button
            className={`rounded-md px-3 py-1 ${
              currentPage < totalPages
                ? "bg-blue-500 text-white hover:bg-blue-500"
                : "bg-gray-500 hover:bg-gray-500"
            }`}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
