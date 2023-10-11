import React from "react";


const NavBar = () => (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href='./indexProductos'>Productos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);

export default NavBar;