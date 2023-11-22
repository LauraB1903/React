import React from 'react';
import PeliculaComponent from '../Component/PeliculaComponent';
import university from '../imagenes/Monsters_university_webp.webp'
import inc from '../imagenes/inc.jpeg'


const PeliculaPage = () => {
    return (
        <div className="d-flex justify-content-around mt-5 gap-3">
            <PeliculaComponent link="https://www.youtube.com/watch?v=z6egm-8yVlk" name=" Monsters Inc" description="Es una película de animación que cuenta la historia de Sulley y Mike, dos monstruos que trabajan asustando niños para obtener energía en su mundo. Todo cambia cuando una niña llamada Boo se adentra en su realidad, desencadenando una serie de divertidas y conmovedoras aventuras mientras intentan llevarla de vuelta a casa." img={inc} datetime="2001 1h 32min" genus="Animación, Comedia, Aventura" />
            <PeliculaComponent link="https://www.youtube.com/watch?v=GHNVXDIFtVQ" name="Monsters University" description="La trama sigue a Mike y Sulley cuando se conocen en la Universidad Monstruosa y muestra cómo empezaron como rivales antes de convertirse en amigos inseparables. Ambos personajes se unen a la fraternidad Oozma Kappa y compiten en los juegos de miedo de la universidad para demostrar su valía como asustadores. La película explora temas de amistad, trabajo en equipo, aceptación y superación de desafíos mientras ofrece una visión del pasado de estos queridos personajes." img={university} datetime="2013 1h 44min" genus="Animación, Comedia, Aventura" />
        </div>
    );
}
export default PeliculaPage;