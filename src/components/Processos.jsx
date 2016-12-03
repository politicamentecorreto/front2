import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import Parse from 'parse';
import SelectPoliticos from './SelectPoliticos'	

class Processos extends Component {

	doSomething() {
        Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
        Parse.serverURL = 'https://parseapi.back4app.com/';

        var Processo = Parse.Object.extend("Processo");
        var processo = new Processo();
		var Politico = Parse.Object.extend("Politico");
        var politico = new Politico();
        processo.set("descricao", document.getElementById("descricao").value);
        processo.set("link", document.getElementById("link").value);
		politico.set("id", document.getElementById("politico").value);
		politico.set("dataProcesso", document.getElementById("dataProcesso").value);	
		processo.set("politico", politico);
        processo.save(null, { success: function () { console.log('sucesso'); } });
        document.getElementById('cadastrarProcesso').reset();
    }

    render() {
        return (

                <div className="col-md-offset-3 col-md-6 col-md-offset-3">
                	<center><h1 align="center">Cadastro de Processos</h1></center>
					<form action="" className="form" id="cadastrarProcesso">
						<label for="">Numero</label>
						<input type="text" name="numero_processo" className="form-control"/>
						<br></br>
						<label for="">Descrição</label>
						<textarea name="descricao_processo" id="descricao" className="form-control"></textarea>
						<br></br>
						<label for="">Politico</label>
						<SelectPoliticos/>
						<br></br>
						<label for="">Data de abertura</label>
						<input type="date" name="data_processo" id="dataProcesso" className="form-control"/>
						<br></br>
						<label for="">Link TSE</label>
						<input type="text" name="link_processo" id="link"className="form-control"/>
						<hr/>						
					</form>
						<button className="btn btn-primary btn-block" onClick={this.doSomething.bind(this)} >Cadastrar</button>
				</div>
        );
    }
}

export default Processos;