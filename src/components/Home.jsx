import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import Parse from 'parse';
import Card from './Card.jsx';

class Home extends Component {

	componentDidMount() {
        Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
        Parse.serverURL = 'https://parseapi.back4app.com/';
        var Politico = Parse.Object.extend('Politico', 'Partido');
        var query = new Parse.Query(Politico);
        query.find().then(function (results) {
            var poli = [];
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                var pol = {};
                pol.id = object.id;
                pol.nome = object.get('nome');
                pol.sexo = object.get('sexo');
                pol.telefone = object.get('telefone');
                pol.gabinete = object.get('gabinete');
                pol.partido = object.get('partido');
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

    exibirPoliticos() {
        return this.state.politicos.map(todo => {
            return <Card key={todo.id} titulo={todo.nome} sexo={todo.sexo} foto={todo.foto} />
        })
    }


    render() {
        return (
               this.exibirPoliticos()
        );
    }
}

export default Home;