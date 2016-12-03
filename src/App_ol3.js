import React, { Component } from 'react';
//import Parse from 'P';
import './App.css';
import './css/bootstrap/css/bootstrap.min.css';
import './css/font-awesome/css/font-awesome.min.css';
import './css/main.css';
import Card from './components/Card.jsx';
import Menu from './components/Menu.jsx';
import Botao from './components/BotaoAbrir';
import Barra from './components/Barra.jsx';
import Footer from './components/Footer.jsx';
import Parse from 'parse';
//import ParseReact from 'parse-react';


// função auxiliar que abre e fecha o menu
/*
function get_Politicos() {
    Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
    Parse.serverURL = 'https://parseapi.back4app.com/';
    var Politico = Parse.Object.extend('Politico', 'Partido');
    //var Partido = Parse.Object.extend('Partido');
    var query = new Parse.Query(Politico);
    //query.equalTo("nome", "ZOINHO");
    query.find({
        success: function (results) {
            //alert("Sucesso " + results.length + " scores.");
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) {
                var object = results;
                var pol = new Object();
                pol.id = object.get('objectId');
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
                pol.foto = object.get('foto');
                pol.dataNascimento = object.get('dataNascimento');
                pol.linkpolitico = object.get('link');
                pol.numero = object.get('numero');
                pol.email = object.get('email');
                pol.apelido = object.get('apelido');
                pol.ocupacao = object.get('ocupacao');


                console.log(pol);

            }

            return pol();
        },
        error: function (error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}*/

// function get_Partidos() {
//     Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
//     Parse.serverURL = 'https://parseapi.back4app.com/';
//     var Partido = Parse.Object.extend('Partido');
//     var query = new Parse.Query(Partido);
//     //query.equalTo("sigla", "PF");
//     query.find({
//         success: function (results) {
//             alert("Sucesso " + results.length + " scores.");
//             // Do something with the returned Parse.Object values
//             for (var i = 0; i < results.length; i++) {
//                 var object = results;
//                 var par = new Object();
//                 par.sigla = object.get('sigla');
//                 par.nome = object.get('nome');
//                 par.legenda = object.get('legenda');
//                 console.log(par);

//             }
//         },
//         error: function (error) {
//             alert("Error: " + error.code + " " + error.message);
//         }
//     });
// }

//get_Politicos();
//get_Partidos();

class App extends Component {


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
                pol.partido = object.get('partido').get('sigla');
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
            return <Card key={todo.id} titulo={todo.nome} sexo={todo.sexo} foto={todo.foto} partido={todo.partido}/>
        })
    }


    render() {
        return (
            <div className="wrapper">
                <div className="canvas">
                    <Menu />
                    <Botao />
                    <Barra />
                    <div className="container">
                        {this.props.children}
                        {this.exibirPoliticos()}
                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}

export default App;
