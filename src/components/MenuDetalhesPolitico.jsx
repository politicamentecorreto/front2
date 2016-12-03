import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import { Link } from 'react-router';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu

class MenuDetalhesPolitico extends Component {

    render() {
        return (
            <div>
                <ul className="nav nav-pills">
                    <li className="active"><Link to='/detalhesPolitico/visao'>Visão Geral</Link></li>
                    <li className="active"><Link to='/detalhesPolitico/historico'>Histórico</Link></li>
                    <li className="active"><Link to='/detalhesPolitico/processos'>Processos</Link></li>
                    <li className="active"><Link to='/detalhesPolitico/projetos'>Projetos</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default MenuDetalhesPolitico;