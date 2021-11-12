import React from 'react';
import '../assets/Styles/Components/Proyectos.scss';
import vehiculo from '../assets/images/Picture2.jpeg';
import catapulta from '../assets/images/catapulta.png';

const Proyectos = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="o-title-card">
                        <h3 className="">LittleBits</h3>
                        <button id="duda"><a href="/BitsComponentes">¿Cómo funciona?</a></button>
                    </div>
                    <p className="o-title">Ahora es momento de que desarrolles el proyecto que
                        más te guste para que sea presentado en la feria de ciencias.</p>
                    <p></p>
                    <div className="o-project-card card col-md-4">
                        <h5>Vehículo autónomo</h5>
                        <img src={vehiculo} alt="vehiculo autónomo"></img>
                        <div><p>Construye el circuito de un vehículo que se
                            desplaza con dos motores de corriente continua.</p></div>
                        <div className="o-acciones">
                            <button id="elegir">Elegir</button>
                        </div>
                    </div>
                    <div disabled id="disabled" className="o-project-card  card col-md-4">
                        <h5>Catapulta</h5>
                        <img id="catapulta" src={catapulta} alt="vehiculo autónomo"></img>
                        <div><p>Lanzador de proyectiles con un servo que se activa
                            con sólo presionar un botón</p></div>
                        <div className="o-acciones">
                            <button id="elegir">Elegir</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proyectos;