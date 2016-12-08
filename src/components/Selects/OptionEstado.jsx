import React, { Component } from 'react';
import '../../App.css';
import '../../css/bootstrap/css/bootstrap.min.css';
import '../../css/font-awesome/css/font-awesome.min.css';
import '../../css/main.css';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class OptionEstado extends Component {

    render() {
        return (
            <option value={this.props.objectId}>{this.props.nome}</option>
        );
    }
}

export default OptionEstado;