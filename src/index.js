import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Politicos from './components/Politicos.jsx';
import Partidos from './components/Partidos.jsx';
import Projetos from './components/Projetos.jsx';
import Processos from './components/Processos.jsx';
import ViewPoliticos from './components/ViewPoliticos.jsx';
import Visao from './components/Visao.jsx';
import Historico from './components/Historico.jsx';
import ProcessosView from './components/ProcessosView.jsx';
import ProjetosView from './components/ProjetosView.jsx';
import Gastos from './components/Gastos.jsx';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MenuDetalhesPolitico from './components/MenuDetalhesPolitico.jsx'



ReactDOM.render(

	(<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={ViewPoliticos} />
			<Route path="/politicos" component={Politicos} />
			<Route path="/partidos" component={Partidos} />
			<Route path="/projetos" component={Projetos} />
			<Route path="/processos" component={Processos} />
			<Route path="/gastos" component={Gastos} />
			<Route path="detalhesPolitico/:id" component={Visao} >
				<IndexRoute component={Visao} />
				<Route path="historico" component={Historico} />
				<Route path="processos" component={ProcessosView} />
				<Route path="projetos" component={ProjetosView} />
			</Route>
		</Route>
	</Router>),
	document.getElementById('root')
);