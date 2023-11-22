import React from 'react';

const PeliculaComponent = ({ name, description, img, datetime, genus,link }) => {
    return (
        <div className="card" style={{ width: '25rem' }}>
            <img src={img} className="card-img-top " alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{datetime}</p>
                <p className="card-text">Genus: {genus}</p>
                <a className="btn btn-primary" href={link} >
                    Ver En Linea  
                </a>
            </div>
        </div>
    );
};

export default PeliculaComponent;


