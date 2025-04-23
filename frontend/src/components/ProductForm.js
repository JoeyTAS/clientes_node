import React, { useState, useEffect } from 'react';
import { getProductById, createProduct, updateProduct } from '../services/productService';

const ProductForm = ({ productId, onAddProduct, onUpdateProduct }) => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [error, setError] = useState(null);

 

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nombre || !descripcion || !precio || !stock) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        const product = { nombre, precio, descripcion, stock };

        try {
            if (productId) {
                const response = await updateProduct(productId, product);
                onUpdateProduct(response.data);
            } else {
                const response = await createProduct(product);
                onAddProduct(response.data);
            }
            setNombre('');
            setDescripcion('');
            setPrecio('');
            setStock('');
            setError(null);
        } catch (error) {
            console.error('Error al guardar el producto:', error);
            setError('Error al guardar el producto. Por favor, inténtalo de nuevo.');
        }
    };

    // Efecto que se ejecuta cuando cambia el productId
  useEffect(() => {
    const fetchProduct = async () => {
      // Si productId existe, estamos editando un producto, así que lo cargamos
      if (productId) {
        try {
          const response = await getProductById(productId); // Llamada al servicio para obtener el producto
          const product = response.data;
          setNombre(product.nombre); // Establecemos los valores del producto en los estados
          setPrecio(product.precio);
          setDescripcion(product.descripcion);
            setStock(product.stock); // Establecemos el stock del producto
        } catch (error) {
          console.error("Error al obtener el producto para editar", error);
          setError("Error al obtener los datos del producto."); // Mostramos un mensaje de error
        }
      } else {
        // Si no hay productId, estamos creando un nuevo producto, así que restablecemos los campos
        setNombre("");
        setPrecio("");
        setDescripcion("");
        setStock(""); // Restablecemos el stock
      }
    };

    fetchProduct(); // Ejecutamos la función fetchProduct
  }, [productId]); // Dependencia en productId para que se ejecute cada vez que cambie

    return (
        <form onSubmit={handleSubmit}>
            <h2>{productId ? "Editar Producto" : "Crear Producto"}</h2>
            {error && <div className="error">{error}</div>} {/* Mostramos el mensaje de error si existe */}
            <div>
                <label>Nombre</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)} // Actualizamos el estado nombre cuando cambia el valor
                />
            </div>
            <div>
                <label>Precio</label>
                <input
                    type="number"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)} // Actualizamos el estado precio cuando cambia el valor
                />
            </div>
            <div>
                <label>Descripción</label>
                <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)} // Actualizamos el estado descripcion cuando cambia el valor
                />
            </div>
            <div>
                <label>Stock</label>
                <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)} // Actualizamos el estado stock cuando cambia el valor
                />
            </div>
            <button type="submit">
                {productId ? "Actualizar Producto" : "Guardar Producto"}
            </button>
        </form>
    );
};

export default ProductForm;

