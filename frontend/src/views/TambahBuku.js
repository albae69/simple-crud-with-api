import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import api from '../utils/api';
import Form from '../components/Form';
import '../css/TambahBuku.css';

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
			<Form
				title='Tambah Buku'
				submitBtn='Tambah Buku'
				state={state}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</React.Fragment>
	);
};

export default TambahBuku;
