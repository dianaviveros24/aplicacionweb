import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';
import reducer from './reducers';

const URL = "http://localhost/sqlconnect/login.php";
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
}
const initialState = {
  "user": {}
}

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));