import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Buku from './views/Buku';
import TambahBuku from './views/TambahBuku';
import Header from './components/Header';

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/buku/:id' component={Buku} />
				<Route path='/tambah-buku' component={TambahBuku} />
			</Switch>
		</Router>
	);
};

export default App;
