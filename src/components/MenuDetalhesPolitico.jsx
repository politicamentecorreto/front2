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

        const style = {
            'background-color': 'white'
        }

        return (
            <div className="col-md-offset-1 col-md-offset-10 col-md-offset-1" style={style}>
                <br/>
                    <ul className="nav nav-pills" >
                        <li className=""><Link to={`/detalhesPolitico/${this.props.params.id}`}>Visão Geral</Link></li>
                        <li className=""><Link to={`/detalhesPolitico/${this.props.params.id}/historico`}>Histórico</Link></li>
                        <li className=""><Link to={`/detalhesPolitico/${this.props.params.id}/processos`}>Processos</Link></li>
                        <li className=""><Link to={`/detalhesPolitico/${this.props.params.id}/projetos`}>Projetos</Link></li>
                    </ul>
                    <hr/>
                    {this.props.children}
            </div>
                );
    }
}

export default MenuDetalhesPolitico;