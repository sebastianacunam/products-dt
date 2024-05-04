/* eslint-disable react/prop-types */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Pagination = ({ currentPage, totalPages, onPageChange, totalProductos, products }) => {
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex justify-center items-center mb-2 sm:mb-0 sm:mr-4">
        <p className="text-sm text-gray-700 mr-2">
          Showing <span className="font-medium">{currentPage}</span> to <span className="font-medium">{totalPages}</span> of <span className="font-medium">{products}</span> of <span className="font-medium">{totalProductos}</span> results
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={goToPreviousPage}
          className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-50'}`}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          <span className="ml-2">Previous</span>
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`relative ${index + 1 === currentPage ? 'z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'} inline-flex items-center px-4 py-2 text-sm font-semibold mx-1`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${currentPage === totalPages ? 'cursor-not-allowed' : 'hover:bg-gray-50'}`}
          disabled={currentPage === totalPages}
        >
          <span className="mr-2">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

