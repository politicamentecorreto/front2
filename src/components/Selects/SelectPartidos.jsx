import React, { Component } from 'react';
import '../../App.css';
import '../../css/bootstrap/css/bootstrap.min.css';
import '../../css/font-awesome/css/font-awesome.min.css';
import '../../css/main.css';
import Parse from 'parse';
import OptionPartido from './OptionPartido';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class SelectPartidos extends Component {

    state = {
        partidos: []
    }

    componentDidMount() {
        Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
        Parse.serverURL = 'https://parseapi.back4app.com/';
        var Partido = Parse.Object.extend('Partido');
        //var Partido = Parse.Object.extend('Partido');
        var query = new Parse.Query(Partido);
        // query.equalTo("nome", "ZOINHO");
        query.find().then(function (results) {
            var partidos = [];
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                var partido = {};
                partido.id = object.id
                partido.sigla = object.get('sigla');
                partidos.push(partido);
            }
            return partidos;
        }).then(response => {
            this.setState({
                partidos: response
            })
        })
    }

    renderOptions() {
        return this.state.partidos.map(partido => {
            return <OptionPartido key={partido.id} objectId={partido.id} sigla={partido.sigla} />
        })
    }

    render() {
        return (
            <select name="partidos" id="partido" className="form-control">
                <option value="">Selecione o partido</option>
                {this.renderOptions()}
            </select>
        );
    }
}

export default SelectPartidos;