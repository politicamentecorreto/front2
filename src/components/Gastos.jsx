import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import SelectPoliticos from './Selects/SelectPoliticos';
import Parse from 'parse';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class Gastos extends Component {

    doSomething() {
        Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
        Parse.serverURL = 'https://parseapi.back4app.com/';
        var g = {};
        g.descricao = document.getElementById("descricao").value;
        g.valor = document.getElementById("valor").value;
        g.politico = document.getElementById("politico").value;
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
                <center><h1>Gastos de Politicos</h1></center>
                <form action="" className="form" id="cadastrarGasto">
                    <label for="">Descrição</label>
                    <input type="text" name="descricao" id='descricao' className="form-control" />
                    <br />
                    <label for="">Valor</label>
                    <input type="text" name="valor" id='valor' className="form-control" />
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

export default Gastos;