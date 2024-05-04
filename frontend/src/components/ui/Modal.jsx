/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose, product }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className=" inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">{product.nombre}</h3>
                    <div className="mb-2">Precio: {product.precio}</div>
                    <div className="mb-2">Total Productos: {product.total_productos}</div>
                    <img src={product.imagen} alt={product.nombre} className="w-full max-h-60 object-contain mb-2" />
                    <div className="mb-2">Descripción: {product.descripcion}</div>
                    <div className="mb-2">Categoría: {product.categoria}</div>
                    <div className="mb-2">Disponible: {product?.disponibilidad ? "Si" : "No disponible"}</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={onClose} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Cerrar
                </button>
                <Link to={`/editar-producto/${product._id}`} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Editar
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
