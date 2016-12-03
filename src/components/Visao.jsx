import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import MenuDetalhesPolitico from './MenuDetalhesPolitico';
import ViewPoliticos from './ViewPoliticos';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class Visao extends Component {

    render() {
        return (
            <div>
                <MenuDetalhesPolitico />
                <ViewPoliticos />
            </div>
        );
    }
}

export default Visao;