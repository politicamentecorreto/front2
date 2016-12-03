import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import Usuario from '../components/Usuario.jsx';
import BotaoFechar from '../components/BotaoFechar.jsx';
import Links from '../components/Links.jsx';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu




class Menu extends Component {

    
    render() {
        return (
            
                <div className="menu">
                    <BotaoFechar/>
                    <Usuario/>
                    <Links/>
                </div>
                    
        );
    }
}

export default Menu;