import React from 'react';
import { connect } from 'react-redux';
import '../assets/Styles/Components/Home.scss';

const Home = props => {
    const { user = {} } = props;
    const hasUser = Object.keys(user).length > 0;

    return (
        <div className="o-home">
            <h1 className="o-principal-title">Caminos de Decisión</h1>
            {hasUser ?
                <a className="o-button-text" href="/Login">Iniciar</a> :
                <a className="o-button-text" href="/Test">Iniciar</a>
            }
            {/* <a href="/">¿Como funciona?</a> */}
        </div>
    )
}
//Trae los elementos que está utilizando dentro de cada componente
const mapStateToProps = state => {
    return {
        data: state.data
    };
}

/* export default connect(props, actions)(Home);
 */export default connect(mapStateToProps, null)(Home);