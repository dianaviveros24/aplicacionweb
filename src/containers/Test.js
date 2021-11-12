import React from "react";
import { connect } from 'react-redux';
import TestKolb from '../components/TestKolb';
import '../assets/Styles/Components/Test.scss';


const Test = props => {
    return (
        <div className="o-test-container container">
        <div className="o-info-header">
            <h2 className="mt-2 col">Conoce tu estilo de aprendizaje</h2>
            <p className="col">Este test te permitirá tener un acercamiento a la forma en que adquieres mejor tus conocimientos</p>
            <p className="col">En cada pregunta dale un valor a cada item entre 1 y 4 sin repetir los valores</p>
            </div>
            <TestKolb/>
        </div>
    )
}

export default connect(null, null)(Test);