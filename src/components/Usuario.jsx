import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class Usuario extends Component {

    render() {
        return (
                <div className="usuario">
                    <div className="avatar"></div>
                    <p className="nome">Fulano de Tal</p>
                    <div className="logoff"><i className="fa fa-power-off" aria-hidden="true"></i><a href="">Logoff</a></div>
                </div>
        );
    }
}

export default Usuario;