import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import SelectPartidos from "./SelectPartidos.jsx";
import Parse from 'parse';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class Politicos extends Component {


	doSomething() {
		Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
		Parse.serverURL = 'https://parseapi.back4app.com/';
		var Politico = Parse.Object.extend("Politico");
		var politico = new Politico();
		var Partido = Parse.Object.extend("Partido");
		var partido = new Partido();
		var foto = document.getElementById("foto");
		if (foto.files.length > 0) {
			foto = foto.files[0];
			var name = foto.name;
			foto = new Parse.File(name, foto);
		}

		partido.set('id', document.getElementById("partido").value);
		politico.set("nome", document.getElementById("nome").value);
		politico.set("nacionalidade", document.getElementById("nacionalidade").value);
		politico.set("partido", partido);
		politico.set("escolaridade", document.getElementById("escolaridade").value);
		politico.set("ocupacao", document.getElementById("ocupacao").value);
		politico.set("numero", document.getElementById("numero").value);
		politico.set("sexo", document.getElementById("sexo").value);
		politico.set("site", document.getElementById("site").value);
		politico.set("email", document.getElementById("email").value);
		politico.set("link", document.getElementById("link").value);
		politico.set("dataNascimento", document.getElementById("data_nascimento").value);
		politico.set("fotoCard", foto);
		politico.save(null, { 
			success: function () { 
				alert("Politico Cadastrado com Sucesso!");
			} 
		});
		document.getElementById("cadastro_politicos").reset();
	}

    
	excluirPolitico(id){
		
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
					// The delete failed.
					// error is a Parse.Error with an error code and message.
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
						<label>Nacionalidade</label>
						<input type="text" className="form-control" id="nacionalidade" name="nacionalidade_politico" />
						<br></br>
						<div className="row">
							<div className="col-md-3">
								<label>Estado</label>
								<select name="cidade_politico" id="estado" className="form-control">
									<option value=""></option>
									<option value="">SP</option>
									<option value="">RJ</option>
									<option value="">PR</option>
									<option value="">CE</option>
									<option value="">RS</option>
									<option value="">MT</option>
									<option value="">MG</option>
								</select>
							</div>
							<div className="col-md-9">
								<label>Cidade</label>
								<input type="text" className="form-control" id="ocupacao" name="cidade_politico"></input>								
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
									<option value="analfa"></option>
									<option value="analfa">Analfabeto</option>
									<option value="f_incompleto">Fundamental Incompleto</option>
									<option value="f_completo">Fundamental Completo</option>
									<option value="em_incompleto">Ensino Medio Incompleto</option>
									<option value="em_completo">Ensino Medio Completo</option>
									<option value="su_incompleto">Superior Incompleto</option>
									<option value="su_completo">Superior Completo</option>
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
								<label>Foto</label>
								<input type="file" className="form-control" id="foto" name="foto"></input>
							</div>

							<div className="col-md-3">
								<label>Número</label>
								<input type="text" className="form-control" id="numero" name="numero_politico"></input>
							</div>
							<div className="col-md-3">
								<label>Sexo</label>
								<select name="sexo_politico" id="sexo" className="form-control">
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
								<input type="text" className="form-control" id="data_nascimento" name="dataNascimento_politico"></input>	<br></br>
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