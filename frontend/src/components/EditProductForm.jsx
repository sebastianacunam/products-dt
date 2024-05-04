/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categorias } from '../utils/categorias';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const EditProductForm = () => {
   const [formData, setFormData] = useState({
      nombre: '',
      precio: '',
      total_productos: '',
      imagen: '',
      descripcion: '',
      categoria: '',
      disponibilidad: true
   });
   const [product, setProduct] = useState({});
   const { id } = useParams();

   useEffect(() => {
      const fetchProduct = async () => {
         try {
            const response = await fetch(`https://products-dun.vercel.app/product/${id}`);
            if (!response.ok) {
               throw new Error('Error al obtener el producto');
            }
            const data = await response.json();
            setProduct(data.data);
         } catch (error) {
            console.error('Error al obtener el producto:', error);
            toast.success("Producto editado correctamente!", {
               position: "top-center"
            });
         }
      };

      fetchProduct();
   }, [id]);
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await fetch(`https://products-dun.vercel.app/edit-product/${id}`, {
            method: 'PATCH',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
         });
         const data = await response.json();
         if (data.error === false) {
            toast.success("Producto editado correctamente!", {
               position: "top-center"
            });
            setFormData({
               nombre: '',
               precio: '',
               total_productos: '',
               imagen: '',
               descripcion: '',
               categoria: '',
               disponibilidad: true
            });
         } else {
            toast.error(data.message, {
               position: "top-center"
            });
            throw new Error(data.message);
         }
      } catch (error) {
         console.error('Error al enviar el formulario:', error.message);
         toast.error(error.message, {
            position: "top-center"
         });
      }
   };

   return (
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-md shadow-md">
         <ToastContainer />
         <h2 className="text-2xl font-semibold mb-4">Editar Producto</h2>
         <div className="mb-4">
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} placeholder={product.nombre} className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 w-full" />
         </div>
         <div className="mb-4">
            <label htmlFor="precio" className="block text-sm font-medium text-gray-700">Precio</label>
            <input type="number" id="precio" name="precio" value={formData.precio} placeholder={product.precio} onChange={handleChange} className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 w-full" />
         </div>
         <div className="mb-4">
            <label htmlFor="total_productos" className="block text-sm font-medium text-gray-700">Total Productos</label>
            <input type="number" id="total_productos" name="total_productos" value={formData.total_productos} onChange={handleChange} placeholder={product.total_productos} className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 w-full" />
         </div>
         <div className="mb-4">
            <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">Imagen</label>
            <input type="text" id="imagen" name="imagen" placeholder={product.imagen} value={formData.imagen} onChange={handleChange} className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 w-full" />
         </div>
         <div className="mb-4">
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción</label>
            <textarea id="descripcion" name="descripcion" value={formData.descripcion} placeholder={product.descripcion} onChange={handleChange} className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 w-full"></textarea>
         </div>
         <div className="mb-4">
            <select id="categoria" name="categoria" value={formData.categoria} onChange={handleChange} className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 w-full">
               <option value="">Seleccione una categoría</option>
               {categorias.map((categoria, index) => (
                  <option key={index} value={categoria}>{categoria}</option>
               ))}
            </select>
         </div>
         <div className="mb-4">
            <label htmlFor="disponibilidad" className="block text-sm font-medium text-gray-700">Disponibilidad</label>
            <select id="disponibilidad" name="disponibilidad" value={formData.disponibilidad} onChange={handleChange} className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 w-full">
               <option value={true}>Disponible</option>
               <option value={false}>No disponible</option>
            </select>
         </div>
         <button type="submit" className="mt-4 px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Guardar Cambios</button>
         <button className=" ml-32 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"><Link to='/'>Volver al menú</Link></button>
      </form>
   );
};

export default EditProductForm;
