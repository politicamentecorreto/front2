import React, { Component } from 'react';
import '../App.css';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import { Link } from 'react-router';

//import script from './js/script.js';

// função auxiliar que abre e fecha o menu



class Card extends Component {

	render() {
		const styleFoto = {
			'height': '20vh'
		}
		const stylePartido = {
			'width': '20px'
		}
		const styleTexto = {
			'float': 'right'
		}
		const styleLink = {
			'text-decoration': 'none'
		}

		return (
			<Link to={`/detalhesPolitico/${this.props.id}`}>
				<div className="col-md-4">
					<br />
					<div className="panel panel-primary">
						<div className="panel-heading">
							<div className="panel-title">
								<img style={stylePartido} src={this.props.partidofoto} />&nbsp;&nbsp;&nbsp;&nbsp;
							{this.props.titulo}

							</div>
							<div className='panel-title-right'>

							</div>
						</div>
						<div className="panel-body">
							<div className="col-md-6">
								<img className="img-responsive" style={styleFoto} src={this.props.foto} />
							</div>
							<div className="col-md-6" style={styleTexto}>
								<p>{this.props.sexo}</p>
								<div className='row'>
									<div className="col-md-12">
										<img style={stylePartido} src={this.props.partidofoto} />&nbsp;&nbsp;
									{this.props.partido}
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
		);
	}
}

export default Card;