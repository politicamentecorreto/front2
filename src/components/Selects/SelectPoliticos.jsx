import React, { Component } from 'react';
import '../../App.css';
import '../../css/bootstrap/css/bootstrap.min.css';
import '../../css/font-awesome/css/font-awesome.min.css';
import '../../css/main.css';
import Parse from 'parse';
import OptionPolitico from './OptionPolitico';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class SelectPoliticos extends Component {

    state = {
        politicos: []
    }

    componentDidMount() {
        Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
        Parse.serverURL = 'https://parseapi.back4app.com/';
        var Politico = Parse.Object.extend('Politico');
        var query = new Parse.Query(Politico);
        query.find().then(function (results) {
            var politicos = [];
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                var politico = {};
                politico.id = object.id;
                politico.nome = object.get('nome');
                politicos.push(politico);
            }
            return politicos;
        }).then(response => {
            this.setState({
                politicos: response
            })
        })
    }

    renderOptions() {
        return this.state.politicos.map(politico => {
            return <OptionPolitico key={politico.id} objectId={politico.id} nome={politico.nome} />
        })
    }

    render() {
        return (
            <select name="politico" id="politico" className="form-control">
                <option value="">Selecione o politico</option>
                {this.renderOptions()}
            </select>
        );
    }
}

export default SelectPoliticos;