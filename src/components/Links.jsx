import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import {Link} from 'react-router';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class Links extends Component {

    render() {
        return (
                <ul>
                    <li><Link to="/politicos">Politicos</Link></li>
                    <li><Link to="/partidos">Partidos</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                    <li><Link to="/processos">Processos</Link></li>
                    <li><Link to="/gastos">Gastos</Link></li>
                </ul>
		);
    }
}

export default Links;