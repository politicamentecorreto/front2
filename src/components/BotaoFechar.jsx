import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu

    

class BotaoFechar extends Component {

    toggleMenu() {

        // var toogleMenu = document.querySelectorAll('.toggle-menu');
        var wrapper = document.querySelector('.wrapper');
        if (wrapper.classList.contains('show-menu')) {
            wrapper.classList.remove('show-menu');
            document.getElementById("botao").style.display = 'block';
        }
        else {
            wrapper.classList.add('show-menu');
            document.getElementById("botao").style.display = 'none';
        }
    };


    componentDidMount() {
        window.onkeyup = function (e) {
            if (e.KeyCode === 27 || e.which === 27) {
                var wrapper = document.querySelector('.wrapper');
                if (wrapper.classList.contains('show-menu')) {
                    wrapper.classList.remove('show-menu');
                    document.getElementById("botao").style.display = 'block';
                }
            }
        }
    }
    
    render() {
        return (
                <div className="botao">
                    <a href="#" onClick={this.toggleMenu} className="toggle-menu botao"><i className="fa fa-times fa-1x" aria-hidden="true"></i></a>
                </div>
		);
    }
}

export default BotaoFechar;