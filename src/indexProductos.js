import React from 'react'
import NavBar from './layout/Navbar';
import Productos from './components/Products';

function AppProductos() {
  return (
    <div className='container-fluid'>
      <NavBar/>
      <Productos/>
    </div>
  );
}

export default AppProductos;
