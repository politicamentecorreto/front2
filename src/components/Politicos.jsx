import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import SelectPartidos from "./Selects/SelectPartidos.jsx";
import Parse from 'parse';
import SelectCargo from './Selects/SelectCargo';
import SelectEstado from './Selects/SelectEstado';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu

class Politicos extends Component {

    doSomething() {
        var p = {};
        p.nome =


            Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
        Parse.serverURL = 'https://parseapi.back4app.com/';
        var Politico = Parse.Object.extend("Politico");
        var politico = new Politico();
        var Partido = Parse.Object.extend("Partido");
        var partido = new Partido();
        var Estado = Parse.Object.extend("Estado");
        var estado = new Estado();
        var Cargo = Parse.Object.extend("Cargo");
        var cargo = new Cargo();
        var fotoCard = document.getElementById("fotoCard");
        if (fotoCard.files.length > 0) {
            fotoCard = fotoCard.files[0];
            var name = fotoCard.name;
            fotoCard = new Parse.File(name, fotoCard);
        }
        var fotoCapa = document.getElementById("fotoCapa");
        if (fotoCapa.files.length > 0) {
            fotoCapa = fotoCapa.files[0];
            var name = fotoCapa.name;
            fotoCapa = new Parse.File(name, fotoCapa);
        }

        estado.set('id', document.getElementById('estado').value);
        partido.set('id', document.getElementById("partido").value);
        cargo.set('id', document.getElementById('cargo').value);
        politico.set("nome", document.getElementById("nome").value);
        politico.set("apelido", document.getElementById("apelido").value);
        politico.set("nacionalidade", document.getElementById("nacionalidade").value);
        politico.set("cidade", document.getElementById("cidade").value);
        politico.set("partido", partido);
        politico.set("estado", estado);
        politico.set("cargo", cargo);
        politico.set("escolaridade", document.getElementById("escolaridade").value);
        politico.set("ocupacao", document.getElementById("ocupacao").value);
        politico.set("numero", document.getElementById("numero").value);
        politico.set("sexo", document.getElementById("sexo").value);
        politico.set("site", document.getElementById("site").value);
        politico.set("email", document.getElementById("email").value);
        politico.set("link", document.getElementById("link").value);
        politico.set("dataNascimento", document.getElementById("data_nascimento").value);
        politico.set("fotoCard", fotoCard);
        politico.set("fotoCapa", fotoCapa);
        politico.save(null, {
            success: function() {
                alert("Politico adicionado com suceso");
                document.getElementById("cadastro_politicos").reset();
            },
            error: function(error) {
                console.log("Erro: " + error);
                alert("Não foi possivel adiconar politico");
            }
        });

    }

    excluirPolitico(id) {

        var Politico = Parse.Object.extend("Politico");
        var politico = new Politico();
        var query = new Parse.Query(Politico);
        query.equalTo("id", id);
        query.find({
            success: function(results) {
                politico.destroy({
                    success: function(politico) {
                        console.log(politico);
                    },
                    error: function(politico, error) {
                    }
                });
            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    }

    render() {
        return (
            <div>
                <center><h1>Cadastro de Políticos</h1></center>
                <div className="col-md-offset-3 col-md-6 col-md-offset-3">
                    <form action="#" className="form" method="POST" id='cadastro_politicos'>
                        <label>Nome </label>
                        <input type="text" className="form-control" id="nome" name="nome_politico" />
                        <br></br>
                        <label>Apelido </label>
                        <input type="text" className="form-control" id="apelido" name="apelido" />
                        <br></br>
                        <label>Nacionalidade</label>
                        <input type="text" className="form-control" id="nacionalidade" name="nacionalidade_politico" />
                        <br></br>
                        <div className="row">
                            <div className="col-md-5">
                                <label>Estado</label>
                                <SelectEstado />
                            </div>
                            <div className="col-md-7">
                                <label>Cidade</label>
                                <input type="text" className="form-control" id="cidade" name="cidade_politico"></input>
                            </div>

                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-md-12">
                                <label>Partido</label>
                                <SelectPartidos />
                                <br></br>
                                <label>Escolaridade</label>
                                <select name="escolaridade_politico" id="escolaridade" className="form-control">
                                    <option value="">Selecione Escolaridade</option>
                                    <option value="Analfabeto">Analfabeto</option>
                                    <option value="Fundamental Incompleto">Fundamental Incompleto</option>
                                    <option value="Fundamental Completo">Fundamental Completo</option>
                                    <option value="Ensino Médio Incompleto">Ensino Medio Incompleto</option>
                                    <option value="Ensino Médio Completo">Ensino Medio Completo</option>
                                    <option value="Superior Incompleto">Superior Incompleto</option>
                                    <option value="Superior Completo">Superior Completo</option>
                                </select>
                                <br></br>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Ocupação</label>
                                <input type="text" className="form-control" id="ocupacao" name="ocupacao_politico"></input>
                            </div>
                            <div className="col-md-6">
                                <label>Cargo</label>
                                <SelectCargo />
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-md-6">
                                <label>Foto Card</label>
                                <input type="file" className="form-control" id="fotoCard" name="fotoCard"></input>
                            </div>
                            <div className="col-md-6">
                                <label>Foto Capa</label>
                                <input type="file" className="form-control" id="fotoCapa" name="fotoCapa"></input>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-6">
                                <label>Número</label>
                                <input type="text" className="form-control" id="numero" name="numero_politico"></input>
                            </div>
                            <div className="col-md-6">
                                <label>Sexo</label>
                                <select name="sexo_politico" id="sexo" className="form-control">
                                    <option value="">Selecione o sexo</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                </select>
                                <br></br>
                            </div>
                            <br></br>
                            <div className="col-md-12">
                                <label>Site</label>
                                <input type="text" className="form-control" id="site" name="site_politico"></input><br></br>
                                <label>Email</label>
                                <input type="email" className="form-control" id="email" name="email_politico"></input><br></br>
                                <label>Link TSE</label>
                                <input type="text" className="form-control" id="link" name="linkTSE_politico"></input><br></br>
                                <label>Data Nascimento</label>
                                <input type="date" className="form-control" id="data_nascimento" name="dataNascimento_politico"></input>	<br></br>
                            </div>
                        </div>
                    </form>
                    <button className="btn btn-primary btn-block" onClick={this.doSomething.bind(this)}>Cadastrar</button><br></br>
                </div>
            </div>

        );
    }
}

export default Politicos;