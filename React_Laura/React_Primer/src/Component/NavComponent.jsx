import React from 'react';
import { Link } from 'react-router-dom';

const NavCompoment = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link
                    className="navbar-brand">
                    Monsters
                </Link>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="./LoginPage"
                                className="nav-link active"
                                aria-current="page">
                                Registro
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/HomePage"
                                className="nav-link active"
                                aria-current="page">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/PeliculaPage"
                                className="nav-link active"
                                aria-current="page">
                                Pelicula
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="./ApiPage"
                                className="nav-link active"
                                aria-current="page">
                                Productos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavCompoment;