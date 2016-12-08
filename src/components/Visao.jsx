import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import MenuDetalhesPolitico from './MenuDetalhesPolitico';
import ViewPoliticos from './ViewPoliticos';
import Parse from 'parse';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class Visao extends Component {

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
        query.equalTo("objectId", this.props.params.id);
        query.find().then(function(results) {
            var poli = [];
            var object = results[0];
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
            pol.fotoCapa = object.get("fotoCapa").url();
            pol.dataNascimento = object.get('dataNascimento');
            pol.linkpolitico = object.get('link');
            pol.numero = object.get('numero');
            pol.email = object.get('email');
            pol.apelido = object.get('apelido');
            pol.ocupacao = object.get('ocupacao');
            return pol;
        }).then(response => {
            this.setState({
                politicos: response
            })
        })


    }

    render() {

        const style = {
            'position': 'absolute',
            'color': 'white',
            'padding-left': '7%'
        }

        return (
            <div>
                <div style={style}>
                    <h1>{this.state.politicos.nome}</h1>
                    <p>{this.state.politicos.ocupacao}</p>
                    <p>{this.state.politicos.escolaridade}</p>
                </div>
                <div className="text-center">
                    <img src={this.state.politicos.fotoCapa} alt={this.state.politicos.nome} width="900" />
                </div>
                <br />
            </div>
        );
    }
}

export default Visao;