import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import endeavor from '../images/endeavor.png';
import back4app from '../images/back4app.png';
import jpmorgan from '../images/JPMorgan.png';
import senai from '../images/senai.png';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class Footer extends Component {

    render() {
        return (
                <div className="footer">
                    <img src={endeavor} alt="endeavor" className="endeavor"></img>
                    <img src={back4app} alt="endeavor" className="back4app"></img>
                    <img src={senai} alt="endeavor" className="senai"></img>
                    <img src={jpmorgan} alt="endeavor" className="jpmorgan"></img>
                    <div className="rodape">
                        <div className="copyright">2016 - Todos os Direitos Reservados</div>
                    </div>
                </div>
        );
    }
}

export default Footer;