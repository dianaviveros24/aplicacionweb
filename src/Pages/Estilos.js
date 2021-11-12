import React from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from "../actions";
import '../assets/Styles/Components/Estilos.scss';

import { Link } from 'react-router-dom';


const Estilos = props => {
    return (
        <div className="o-estilo-container container">
            <section className="o-estilos-container">
                <section className="o-estilo">
                    <h2>Estilos de aprendizaje según Kolb</h2>
                    <h3>Estilo divergente</h3>
                    <p>
                        Son personas muy imaginativas, su punto fuerte es la creatividad,
                        son personas que tienen constantemente muchas ideas, tienen la capacidad de enfrentarse a
                        un problema con decenas de formas diferentes. Poseen mucha imaginación e
                        inquietud mental unido a una forma creativa de ver el mundo. Estas personas
                        tienen una mente inquieta ya que necesitan una retroalimentación para
                        sentirse realizadas.
                    </p>
                </section>
                <section className="o-estilo">
                    <h3>Estilo convergente</h3>
                    <p>
                        Son personas que disfrutan poniendo en prácticas sus ideas. Cuando se enfrentan a un
                        problema tratan de buscar una solución única y concreta, no buscan muchas soluciones.
                        Se alejan de las formas abstractas y tratan de percibir la información de manera muy
                        precisa.Tratan de usar con mayor frecuencia el razonamiento deductivo. Son muy eficaces
                        presentando diagramas, proyectos prácticos.
                    </p>
                </section>
                <section className="o-estilo">
                    <h3>Estilo asimilador</h3>
                    <p>
                        Son personas que actúan sobretodo bajo situaciones abstractas. Son ideales para crear modelos
                        teóricos, actúan bajo la observación reflexiva. Son capaces de crear un razonamiento inductivo
                        y de conceptualizar observaciones diferentes en una sola. Suelen ser científicos. Prefieren
                        sobretodo la teoría a la práctica.
                    </p>
                </section>
                <section className="o-estilo">
                    <h3>Estilo acomodador</h3>
                    <p>
                        A este estilo se le llama acomodador porque la persona destaca en situaciones donde hay que adaptarse
                        a diferentes problemas. Son personas pragmáticas y les gusta la experimentación activa. Principalmente
                        les gusta adentrarse en nuevas experiencias, aprender algo nuevo. Se sienten cómodos con las personas
                        y suelen ser grandes oradores.
                    </p>
                </section>
            </section>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps, null)(Estilos);