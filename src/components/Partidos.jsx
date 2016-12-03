import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import Parse from 'parse';


class Partidos extends Component {


    doSomething() {
        Parse.initialize('OBH1UBDdv4al3h2Br8qJOFTfyCyMIw816hnooZf3', 's5X6vSQRWTMbRlPPuLceKWHOxpKTpXpaimXQZM2v');
        Parse.serverURL = 'https://parseapi.back4app.com/';

        var Partido = Parse.Object.extend("Partido");
        var partido = new Partido();
        var logo = document.getElementById("logo");
		if (logo.files.length > 0) {
			logo = logo.files[0];
			var name = logo.name;
			logo = new Parse.File(name, logo);
		}



        partido.set("nome", document.getElementById("nome").value);
        partido.set("sigla", document.getElementById("sigla").value);
        partido.set("numero", document.getElementById("numero").value);
        partido.set("logo", logo);
        partido.save(null, { success: function () { console.log('sucesso'); } });
        document.getElementById('cadastrarPartido').reset();
    }

    render() {
        return (
            <div className="container">
                <center><h1 align="center">Cadastro de Partidos</h1></center>
                <div className="col-md-offset-3 col-md-6 col-md-offset-3">
                    <form className="form"  id="cadastrarPartido">
                        <label for="P">Nome</label>
                        <input type="text" className="form-control" id='nome' />
                        <br></br>
                        <div className="row">
                            <div className="col-md-6">
                                <label for="">Numero</label>
                                <input type="text" className="form-control" id="numero" />
                            </div>
                            <div className="col-md-6">
                                <label for="">Sigla</label>
                                <input type="text" className="form-control" id="sigla" />
                            </div><br />
                            <div className="col-md-12">
								<label>Foto</label>
								<input type="file" className="form-control" id="logo" name="logo"></input>
							</div>
                        </div>
                        <hr />
                    </form>
                    <button className="btn btn-primary btn-block" onClick={this.doSomething.bind(this)} >Cadastrar</button>
                </div>
            </div>
        );
    }
}

export default Partidos;