import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "../containers/Home";
import Login from "../containers/Login";
import Test from "../containers/Test";
import Register from "../containers/Register";
import Estilos from '../Pages/Estilos';
import NotFound from "../containers/NotFound";
import reportWebVitals from '../reportWebVitals';

import Layout from "../components/Layout";

import InGame from '../containers/Narrativa/InGame';
import Proyectos from '../containers/Proyectos';
import BitsComponentes from '../containers/BitsComponentes';

const App = ({children}) => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route active exact path="/" component={Home} />
                <Route exact path="/Test" component={Test} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/Estilos" component={Estilos} />
                <Route exact path="/Proyectos" component={Proyectos} />
                <Route exact path="/BitsComponentes" component={BitsComponentes} />

                <Route exact path="/game" component={InGame} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>

);
reportWebVitals();

export default App;