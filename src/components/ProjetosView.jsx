import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu


class ProjetosView extends Component {

    componentDidMount() {
        console.log(this.props.params.id);
    }

    render() {
        return (
            <div>
                Projetos
            </div>
        );
    }
}

export default ProjetosView;