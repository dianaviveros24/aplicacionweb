import React, { useRef, useState } from "react";
import { connect } from 'react-redux';
import { loginRequest } from "../actions";
import '../assets/Styles/Components/Login.scss';
import { Link } from 'react-router-dom';

const Login = props => {
    const [error, setError] = useState(null);
    const URL = "http://localhost/sqlconnect/login.php";

    const [form, setValues] = useState({
        nombre: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.nombre]: event.target.value
        })
    }
    const refNombre = useRef(null);
    const refContraseña = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
        const data = {
            "nombre": refNombre.current.value,
            "contraseña": refContraseña.current.value
        };
        console.log(data);

        props.loginRequest(form);
        props.history.push('/');
    }

    /*
        const [isAutheticated, setisAutheticated] = useState(false);
        const refNombre = useRef(null);
        const refContraseña = useRef(null);
    
        function login(e) {
            e.preventDefault();
            setEspera(true);
            //Crea objeto que almacena el valor de los campos
            const data = {
                "nombre": refNombre.current.value,
                "contraseña": refContraseña.current.value
            };
    
                    console.log(data);
                   const respJson = enviarDatos(URL_Ingreso, data);
                   console.log("respuesta desde el evento", respJson);
           
                   props.acceder(respJson.conectado);
                   setError(respJson.error);
                   setEspera(false);
           
                   setisAutheticated(true);
                   console.log("loggedInUser:" + isAutheticated) 
    
        }
    
        function logout() {
            setisAutheticated(false);
            console.log("loggedInUser:" + isAutheticated)
        }*/


    return (
        <section className="o-form_login">
            <div className="o-login_card card">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nombre</label>
                        <input
                            name="nombre"
                            type="text"
                            ref={refNombre}
                            className="form-control"
                            id="exampleInputName1"
                            aria-describedby="nameHelp"
                            onChange={handleInput}
                            placeholder="Ingresa tu nombre">
                        </input>
                        {/*<small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Contraseña</label>
                        <input
                            name="constraseña"
                            type="password"
                            ref={refContraseña}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Ingresa la contraseña">
                        </input>
                    </div>
   {/*                  <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                </form>
                {
                    error &&
                    <div className="alert alert-danger">
                        {error}
                    </div>
                }
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Ingresar</button>
                <div className='login__container--register'>
                    <p>
                        ¿No tienes ninguna cuenta?<Link className="nav-link" to="/register">Regístrate</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

const mapDispatchToProps = {
    loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);

/*
//funcion asincrona porque debe esperar datos del servidor
const enviarDatos = async (url, data) => {
    //obtener informacion del servidor
    const resp = await fetch(url, {
        method: 'POST',
        //convertir datos a texto
        body: JSON.stringify(data),
        headers: {
            //Que tipo de datos envia al servidor
            'Content-Type': 'application/json'
        }
    });

    //console.log(resp);
    //Convertir datos de manera asincrona a JSON
    const json = await resp.json();
    console.log(json);

    return json;
} */