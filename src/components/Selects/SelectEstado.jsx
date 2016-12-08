import React, { Component } from 'react';
import '../../App.css';
import '../../css/bootstrap/css/bootstrap.min.css';
import '../../css/font-awesome/css/font-awesome.min.css';
import '../../css/main.css';
import Parse from 'parse';
import OptionEstado from './OptionEstado';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class SelectEstado extends Component {

    state = {
        estados: []
    }

    componentDidMount() {
        Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
        Parse.serverURL = 'https://parseapi.back4app.com/';
        var Estado = Parse.Object.extend('Estado');
        //var Partido = Parse.Object.extend('Partido');
        var query = new Parse.Query(Estado);
        // query.equalTo("nome", "ZOINHO");
        query.find().then(function(results) {
            var estados = [];
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                var estado = {};
                estado.id = object.id
                estado.nome = object.get('nome');
                estados.push(estado);
            }
            return estados;
        }).then(response => {
            this.setState({
                estados: response
            })
        })
    }

    renderOptions() {
        return this.state.estados.map(estado => {
            return <OptionEstado key={estado.id} objectId={estado.id} nome={estado.nome} />
        })
    }

    render() {
        return (
            <select name="estados" id="estado" className="form-control">
                <option value="">Selecione o estado</option>
                {this.renderOptions()}
            </select>
        );
    }
}

export default SelectEstado;