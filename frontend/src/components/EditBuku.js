import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

import Form from './Form';
import api from '../utils/api';

const EditBuku = data => {
	// for redirect
	let history = useHistory();
	let id = data.data.map(data => data.id);

	// init state
	const [state, setState] = useState({
		judul: '',
		sinopsis: '',
		penulis: '',
	});

	useEffect(() => {
		data.data.map(s => setState(s));
	}, []);

	// handle input
	const handleChange = e => {
		const {name, value} = e.target;
		setState({...state, [name]: value});
	};

	// handle form
	const handleSubmit = async e => {
		try {
			e.preventDefault();
			let res = await axios.put(`${api}/${id}`, state);
			await alert(res.data.status);
			await history.push(`/buku/${id}`);
		} catch (e) {
			if (e) console.log(e);
		}
	};

	return (
		<React.Fragment>
			<Form
				state={state}
				title='Edit Buku'
				submitBtn='Kirim'
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
			<Link to={`/buku/${id}`}>
				<strong style={{marginLeft: 50}}>Batal</strong>
			</Link>
		</React.Fragment>
	);
};

export default EditBuku;
