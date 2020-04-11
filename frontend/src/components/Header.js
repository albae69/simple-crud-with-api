import React from 'react';
import '../css/Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<Link to='/'>
				<h1>Toko Buku</h1>
			</Link>
			<ul>
				<Link to='/tambah-buku'>
					<li>Tambah Buku</li>
				</Link>
			</ul>
		</header>
	);
};

export default Header;
