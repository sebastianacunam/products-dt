import { useEffect, useState } from 'react';
import Pagination from './components/Pagination'
import Cards from './components/ui/Cards'
import { categorias } from './utils/categorias';
import { Link } from 'react-router-dom';
import Modal from './components/ui/Modal';

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchName, setSearchName] = useState("");
  const [selectCategory, setSelectCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const onPageChange = async (pageNumber) => {
    setCurrentPage(pageNumber);
    await fetchDataForPage(pageNumber, searchName, selectCategory)
  };
  const handleInputChange = (event) => {
    setSearchName(event.target.value);
    setCurrentPage(1);
  };

  const fetchDataForPage = async (pageNumber, searchName = '', selectCategory = '') => {
    try {
      const response = await fetch(`https://products-dun.vercel.app/products?page=${pageNumber}&nombre=${searchName}&categoria=${selectCategory}`);
      const data = await response.json();
      if (data?.error === true) {
        throw new Error(data?.message);
      }
      setProducts(data?.data);
      setTotalPages(data?.data?.totalPages);
      setCurrentPage(pageNumber);

    } catch (error) {
      console.error('Error al obtener productos:', error?.message);
    }
  };



  useEffect(() => {
    fetchDataForPage(currentPage, searchName, selectCategory);
  }, [currentPage, searchName, selectCategory]);

  const handleCategoryChange = (event) => {
    setSelectCategory(event.target.value);
    setCurrentPage(1);
  };

  const handleFilter = () => {
    window.location.reload();
  }

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className='flex flex-col mt-10 p-11'>
        <input
          value={searchName}
          onChange={handleInputChange}
          type="text"
          placeholder="Buscar..."
          className="w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mx-auto mb-4"
        />
      </div>
      <div className='flex flex-row justify-center items-center p-5'>
        <select value={selectCategory} onChange={handleCategoryChange} className="w-60 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mr-4">
          <option value="">Todas las categorías</option>
          {categorias?.map((category, i) => (
            <option key={i} value={category}>{category}</option>
          ))}
        </select>
        <button onClick={handleFilter} className="px-4 py-2 bg-indigo-300 text-black rounded-md">Limpiar filtros</button>
        <div className='flex flex-row justify-center p-5 ml-36' >  <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to="/nuevo-producto">Nuevo Producto</Link></button></div>
      </div>


      <div className='mb-14'>
        <Cards products={products} openModal={openModal} />
      </div>
      <div className="relative  w-auto h-60 flex flex-row justify-center ">
        <div className="absolute  flex flex-row justify-center pt-1 ">
          <Pagination products={products?.products?.length} totalProductos={products?.totalProductos} totalPages={totalPages} onPageChange={onPageChange} currentPage={currentPage} />
        </div>
      </div>
      <Modal isOpen={!!selectedProduct} onClose={closeModal} product={selectedProduct} />
    </>
  )
}

export default App
