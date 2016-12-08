import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import Parse from 'parse';
import SelectPoliticos from './Selects/SelectPoliticos'


class Projetos extends Component {

	doSomething() {
		Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
		Parse.serverURL = 'https://parseapi.back4app.com/';

		var Projeto = Parse.Object.extend("Projetos");
		var projeto = new Projeto();
		var Politico = Parse.Object.extend("Politico");
		var politico = new Politico();
		politico.set("id", document.getElementById("politico").value);
		projeto.set("titulo", document.getElementById("titulo").value);
		projeto.set("descricao", document.getElementById("descricao").value);
		projeto.set("ementa", document.getElementById("ementa").value);
		projeto.set("link", document.getElementById("link").value);
		projeto.set("tipo", document.getElementById("tipoProjeto").value);
		projeto.set("situacao", document.getElementById("situacao").value);
		projeto.set("politico", politico);
		projeto.set("data", document.getElementById("data").value);
		projeto.save(null, { success: function () { alert('Projeto Cadastrado com sucesso'); document.getElementById('cadastrarProjeto').reset(); } });

	}

	render() {
		return (
			<div className="col-md-offset-3 col-md-6 col-md-offset-3">
				<center><h1 align="center">Cadastro de Projetos</h1></center>
				<form action="" className="form" id="cadastrarProjeto">
					<label for="">Titulo</label>
					<input type="text" name="titulo_projeto" id="titulo" className="form-control" />
					<br></br>
					<label for="">Descrição</label>
					<textarea name="descricao" className="form-control" id="descricao"></textarea>
					<br></br>
					<label for="">Ementa</label>
					<textarea name="ementa" className="form-control" id="ementa"></textarea>
					<br></br>
					<label for="">Tipo Projeto</label>
					<input type='text' name="tipoProjeto" className="form-control" id="tipoProjeto" />
					<br></br>
					<label for="">Situacao</label>
					<select name='situacao' className="form-control" id='situacao'>
						<option value='Em andamento'>Em andamento</option>
						<option value='Deferido'>Deferido</option>
						<option value='Aprovado'>Aprovado</option>
						<option value='Reprovado'>Reprovado</option>
						<option value='Em tramitação'>Em tramitação</option>
					</select>
					<br></br>
					<label for="">Politico</label>
					<SelectPoliticos />
					<br></br>
					<label for="">Data</label>
					<input type="date" name="data_projeto" id="data" className="form-control" />
					<br></br>
					<label for="">Link TSE</label>
					<input type="text" name="link_projeto" id="link" className="form-control" />
					<hr />
				</form>
				<button className="btn btn-primary btn-block" onClick={this.doSomething.bind(this)} >Cadastrar</button>
			</div>

		);
	}
}

export default Projetos;