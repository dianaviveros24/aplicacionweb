import React from 'react';
import '../assets/Styles/BitsComponentes.scss';
import power from '../assets/images/power.png';
import button from '../assets/images/button.png';
import wire from '../assets/images/wire.png';
import salida from '../assets/images/salida.png';

const BitsComponente = () => {
    return (
        <div className="container">
            <div className="o-title-card">
                <h3 id="o-title"> LittleBits </h3>
            </div>
            <div className="o-title-card"><h4>Código de colores</h4></div>
            <section className="o-color-code card-columns">
                <div className="card">
                        <p id="color-blue"> A. Azul - Fuente de energía </p>
                        <img src={power}></img>
                        <p className="card-text">Suministro de energía al circuito</p>
                </div>

                <div className="card">
                    <p id="color-pink">B. Rosado - Entradas </p>
                    <img src={button}></img>
                    <p>Este tipo de bits acepta la entrada del usuario o
                        del medio ambiente y envía señales que afectan a los
                        bits que siguen</p>
                </div>
                <div className="card">
                    <p id="color-orange">C. Naranja - Cables </p>
                    <img src={wire}></img>
                    <p>Los bits de cable se conectan a otros sistemas y permiten
                        construir circuitos en nuevas direcciones</p>
                </div>
                <div className="card">
                    <p id="color-green">D. Verde - Salidas </p>
                    <img src={salida}></img>
                    <p>Las salidas son el efecto de los bits anteriores, iluminar,
                        zumbar, movimiento, sonido,... </p>
                </div>
            </section>
        </div>
    )
}

export default BitsComponente;