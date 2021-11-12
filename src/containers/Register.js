import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/Styles/Components/Register.scss';
import { registerRequest } from '../actions';
import { Link } from 'react-router-dom';

const Register = props => {
	const [form, setValues] = useState({
		nombre: '',
		correo: '',
		contraseña: '',
	});

	const handleInput = event => {
		setValues({
			...form,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = event => {
		event.preventDefault();
		props.registerRequest(form);
		props.history.push('/');
	}

	return (
		<section className="o-form_register">
			<section className="o-register_card card">
				<h2>Regístrate</h2>
				<form className="register__container--form" onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Nombre</label>
						<input
							name="nombre"
							className="form-control"
							type="text"
							placeholder="Ingresa tu nombre"
							onChange={handleInput}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Correo</label>
						<input
							name="correo"
							className="form-control"
							type="text"
							placeholder="Ingresa tu correo"
							onChange={handleInput}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Correo</label>
						<input
							name="contraseña"
							className="form-control"
							type="password"
							placeholder="Ingresa la contraseña"
							onChange={handleInput}
						/>
					</div>
				</form>

				<button type="submit" className="btn btn-primary">Registrarme</button>
				<div className='login__container--register'>
					<p>
						¿Ya tienes ninguna cuenta?<Link className="nav-link" to="/login">Iniciar sesión</Link>
					</p>
				</div>
			</section>
		</section>
	);
}

const mapDispatchToProps = {
	registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);