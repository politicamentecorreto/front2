import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import SelectPoliticos from './Selects/SelectPoliticos';
import Parse from 'parse';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class Sessoes extends Component {

    doSomething() {
        Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
        Parse.serverURL = 'https://parseapi.back4app.com/';
        var s = {};
        s.justificativa = document.getElementById("justificativa").value;
        s.descricao = document.getElementById("descricao").value;
        s.dataSessao = document.getElementById("dataSessao").value;
        s.presenca = document.getElementById("presenca").value;
        s.politico = document.getElementById("politico").value;
        var Gasto = Parse.Object.extend("Gasto");
        var gasto = new Gasto();
        var Politico = Parse.Object.extend("Politico");
        var politico = new Politico();
        politico.set("objectId", g.politico);
        gasto.set("descricao", g.descricao);
        gasto.set("valor", g.valor);
        gasto.set("politico", politico);
        gasto.save(null, { success: function () { alert('Gasto Adicionado com sucesso'); } });
        document.getElementById('cadastrarGasto').reset();
    }

    render() {
        return (
            <div className="col-md-offset-3 col-md-6 col-md-offset-3">
                <center><h1>Sessoes</h1></center>
                <form action="" className="form" id="cadastrarGasto">
                    <label for="">Justificativa</label>
                    <input type="text" name="justificativa" id='justificativa' className="form-control" />
                    <br />
                    <label for="">Descricao</label>
                    <input type="text" name="descricao" id='descricao' className="form-control" />
                    <br />
                    <label for="">Data Sessão</label>
                    <input type="text" name="dataSessao" id='dataSessao' className="form-control" />
                    <br />
                    <label for="">Presença</label>
                    <select name="presenca" id="presenca">
                        <option value="true">Presente</option>
                        <option value="false">Não Presente</option>
                    </select>
                    <br />
                    <label for="">Politico</label>
                    <SelectPoliticos />
                    <br />
                </form>
                <button className="btn btn-primary btn-block" onClick={this.doSomething.bind(this)} >Cadastrar</button>
            </div>
        );
    }
}

export default Sessoes;