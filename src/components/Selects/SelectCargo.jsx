import React, { Component } from 'react';
import '../../App.css';
import '../../css/bootstrap/css/bootstrap.min.css';
import '../../css/font-awesome/css/font-awesome.min.css';
import '../../css/main.css';
import Parse from 'parse';
import OptionCargo from './OptionCargo';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class SelectCargo extends Component {

    state = {
        cargos: []
    }

    componentDidMount() {
        Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
        Parse.serverURL = 'https://parseapi.back4app.com/';
        var Cargo = Parse.Object.extend('Cargo');
        //var Partido = Parse.Object.extend('Partido');
        var query = new Parse.Query(Cargo);
        // query.equalTo("nome", "ZOINHO");
        query.find().then(function (results) {
            var cargos = [];
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                var cargo = {};
                cargo.id = object.id
                cargo.descricao = object.get('descricao');
                cargos.push(cargo);
            }
            return cargos;
        }).then(response => {
            this.setState({
                cargos: response
            })
        })
    }

    renderOptions() {
        return this.state.cargos.map(cargo => {
            return <OptionCargo key={cargo.id} objectId={cargo.id} descricao={cargo.descricao} />
        })
    }

    render() {
        return (
            <select name="cargos" id="cargo" className="form-control">
                <option value="">Selecione o cargo</option>
                {this.renderOptions()}
            </select>
        );
    }
}

export default SelectCargo;