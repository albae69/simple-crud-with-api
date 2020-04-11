import React from 'react';
import {Link} from 'react-router-dom';

import '../css/Header.css';

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
