import React, {useState, useEffect} from 'react'
import axiosProductos from '../../config/axiosProductos';
import { toast } from 'react-toastify';

const Productos = () => {
  const [products, setProductos] = useState([]);
  const getProductos = async() => {
    const response = await axiosProductos.get('/products');
    console.log("RESPONSE: ",response.data)
    console.log("RESPONSE2: ",response.data.products)
    setProductos(response.data.products)
    const lista = response.data.products;
  };

  useEffect(()=> {
    getProductos();

  }, []);
  
 
  const renderProductos = () => {
    return (
      <tbody>
        {
          products.map((products, index) => (
            <tr>
              <th scope="row"> {index +1} </th>
              <td> {products.title} </td>
              <td>{products.description}</td>
              <td>{products.price}</td>
              <td ><input type="submit" name="Enviar" value="Editar" onclick= {failure}/> </td>
            </tr>
          ))
        }
      </tbody>
    );
  }

function success() {
  toast.success('Operación completada con éxito');
}
function failure() {
  toast.error('Operacion fallida');
}
  return (
    <>
    <button onclick={success()}>
      Agregar Producto
    </button>

    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Producto</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Precio</th>
    </tr>
  </thead>
  {renderProductos()}
</table>
</>
  );
}

export default Productos