import React, {useState} from 'react';
import '../css/TambahBuku.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import api from '../utils/api';

const TambahBuku = () => {
	// for redirect
	let history = useHistory();

	// init state
	const [state, setState] = useState({
		judul: '',
		sinopsis: '',
		penulis: '',
	});

	// handle input
	const handleChange = e => {
		const {name, value} = e.target;
		setState({...state, [name]: value});
	};

	// handle form
	const handleSubmit = async e => {
		try {
			e.preventDefault();
			let res = await axios.post(api, state);
			await alert(res.data.status);
			await history.push('/');
		} catch (e) {
			if (e) console.log(e);
		}
	};
	return (
		<React.Fragment>
			<h1>Tambah Buku</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={state.judul}
					placeholder='judul'
					name='judul'
					onChange={handleChange}
					autoComplete='off'
				/>
				<br />
				<input
					type='text'
					value={state.sinopsis}
					onChange={handleChange}
					placeholder='sinopsis'
					name='sinopsis'
					autoComplete='off'
				/>
				<br />
				<input
					type='text'
					value={state.penulis}
					onChange={handleChange}
					placeholder='penulis'
					name='penulis'
					autoComplete='off'
				/>
				<br />
				<input type='submit' value='Tambah Buku' />
			</form>
		</React.Fragment>
	);
};

export default TambahBuku;
