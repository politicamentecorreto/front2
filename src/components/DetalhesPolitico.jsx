import React, { Component } from 'react';
import './../App.css';
import './../css/bootstrap/css/bootstrap.min.css';
import './../css/font-awesome/css/font-awesome.min.css';
import './../css/main.css';
import Parse from 'parse';
import MenuDetalhesPolitico from './MenuDetalhesPolitico'

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu

class DetalhesPolitico extends Component {

    state = {
        politicos: []
    }

    componentDidMount() {
        Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
        Parse.serverURL = 'https://parseapi.back4app.com/';
        var Politico = Parse.Object.extend('Politico', 'Partido');
        var Partido = Parse.Object.extend('Partido');
        var query = new Parse.Query(Politico);
        query.include('partido');
        query.equalTo("objectId", this.props.params.id)
        query.find().then(function (results) {
            var poli = [];
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                var pol = {};
                pol.id = object.id;
                pol.nome = object.get('nome');
                pol.sexo = ((object.get('sexo') == 'F') ? 'Feminino' : 'Masculino');
                pol.telefone = object.get('telefone');
                pol.gabinete = object.get('gabinete');
                pol.partido = object.get('partido').get('sigla');
                pol.partidofoto = object.get('partido').get('logo').url();
                pol.site = object.get('site');
                pol.cidade = object.get('cidade');
                pol.escolaridade = object.get('escolaridade');
                pol.projeto = object.get('projeto');
                pol.processo = object.get('processo');
                pol.popularidade = object.get('popularidade');
                pol.anexo = object.get('anexo');
                pol.stats = object.get('stats');
                pol.foto = object.get("fotoCard").url();
                pol.dataNascimento = object.get('dataNascimento');
                pol.linkpolitico = object.get('link');
                pol.numero = object.get('numero');
                pol.email = object.get('email');
                pol.apelido = object.get('apelido');
                pol.ocupacao = object.get('ocupacao');
                poli.push(pol);
            }
            return poli;
        }).then(response => {
            this.setState({
                politicos: response
            })
        })


    }

    renderPoliticos() {
        return this.state.politicos.map(politico => {
            return <MenuDetalhesPolitico id={politico.id} />
        })
    }

    render() {
        return (
            <div className="col-md-offset-1 col-md-offset-10 col-md-offset-1">
                {this.renderPoliticos()}
            </div>
        );
    }
}

export default DetalhesPolitico;