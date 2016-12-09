import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import MenuDetalhesPolitico from './MenuDetalhesPolitico';
import ViewPoliticos from './ViewPoliticos';
import Parse from 'parse';
import Cargo from './../images/b.png';
import Urna from './../images/u.png';

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
        query.include('cargo');
        query.include('estado');
        
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
            pol.cargo = object.get('cargo').get('descricao');
            pol.partidofoto = object.get('partido').get('logo').url();
            pol.site = object.get('site');
            pol.cidade = object.get('cidade');
            pol.estado = object.get('estado').get("uf");
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
            console.log(poli.estado);
            return pol;
        }).then(response => {
            this.setState({
                politicos: response
            })
        })


    }

    render() {

        const card = {
            'height': '90vh'
        }

        const style = {
            'position': 'absolute',
            'color': 'black',
            'padding-left': '7%',
            'z-index': '10',
            'font-size': '20px'
        }

        const imageStyle = {
            'opacity': '0.5',
            'z-index': '1'
        }

        return (
            <div style={card}>
            <br/>
                <div className="md-col-12">
                    <div style={style}>
                        <h1>{this.state.politicos.nome}</h1>
                        {this.state.politicos.dataNascimento}<br />
                        {this.state.politicos.cidade}, {this.state.politicos.estado}<br/>
                        {this.state.politicos.ocupacao}<br />
                        {this.state.politicos.escolaridade}
                    </div>
                    <div className="text-center">
                        <img src={this.state.politicos.fotoCapa} style={imageStyle} width="900" />
                    </div>
                </div>
                <br />
                <div className="text-center">
                    <div className="col-md-4">
                        <img src={this.state.politicos.partidofoto} alt="Partido" width="50" /><br />
                        <h3>{this.state.politicos.partido}</h3>
                    </div>
                    <div className="col-md-4">
                        <img src={Cargo} alt="Partido" width="50" /><br />
                        <h3>{this.state.politicos.cargo}</h3>
                    </div>
                    <div className="col-md-4">
                        <img src={Urna} alt="Partido" width="50" /><br />
                        <h3>{this.state.politicos.numero}</h3>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export default Visao;