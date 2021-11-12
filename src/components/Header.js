import React from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from "../actions";
import '../assets/Styles/Components/Header.scss';
import userIcon from '../assets/images/user-icon.png';
import gravatar from '../utils/gravatar.js';

import { Link } from 'react-router-dom';


const Header = props => {
    const { user = {} } = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogOut = () => {
        props.logoutRequest({})
    }

    return (
        <header className="header">
            <div className="o-nav row">
                <Link className="nav-link" to="/">Inicio</Link>
                <Link className="nav-link" href="#Estilos" to="/estilos">Conoce sobre tu estilo de aprendizaje</Link>
                <Link className="nav-link" href="#Game" to="/game">Narrativa</Link>
            </div>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser ?
                        <img src={gravatar(user.correo)} alt={user.correo} /> :
                        <img src={userIcon} alt="" />
                    }
                    {hasUser ?
                        <li><a href="/">{user.nombre}</a></li>
                        :
                        <p>
                            Perfil
                        </p>
                    }
                </div>
                <ul>
                    {hasUser ?
                        <li>
                            <a href="#logout" onClick={handleLogOut}>
                                Cerrar sesión
                            </a>
                        </li>
                        :
                        <li>
                            <Link to="/login">
                                Iniciar sesión
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </header>
    );
}
const mapStateToProps = state => {
    return {
        data: state.data
    };
};

const mapDispatchToProps = {
    logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);