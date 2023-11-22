import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    return (

        <div className=" homePage container mt-5  " style={{ boxShadow: '0 0 10px rgba(23, 32, 42)' }}>
            <div className="row ">
                <div className="col ">
                    <h5 className=" display-5 p-4 m-4 d-flex  justify-content-center ">Bienvenidos A Monster Inc </h5>
                    <div className="row gap-2 p-4">
                        <div className=''>
                            <h6>Monster Inc</h6>
                            <p>
                                Es una película de animación producida por Pixar Animation Studios y distribuida por Walt Disney Pictures.
                                La historia se desarrolla en un mundo habitado por monstruos que se dedican a asustar a los niños para generar energía.
                                La trama sigue a dos monstruos, Sulley y Mike, quienes trabajan en una empresa de sustos llamada Monster, Inc. Su vida cambia cuando una niña llamada Boo se cuela en su mundo, desencadenando una serie de divertidas y conmovedoras aventuras mientras intentan devolverla a su hogar y descubren la importancia del amor y la amistad. La película combina elementos de comedia, aventura y emotividad, mostrando la relación entre el mundo de los monstruos y los niños desde una perspectiva única y encantadora.
                            </p>
                        </div>
                        <div className="col d-flex  justify-content-center">
                            <Link to="/PeliculaPage"
                                className="btn btn-outline-light btn-lg">
                               Ir a peliculas
                            </Link>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
};
export default HomePage;
