import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import axios from 'axios';
import api from '../utils/api';
import EditBuku from '../components/EditBuku';

const Buku = props => {
	let history = useHistory();
	const [state, setState] = useState({
		edited: false,
		data: [],
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				let {id} = props.match.params;
				let res = await axios.get(`${api}/${id}`);
				await setState({data: res.data});
			} catch (e) {
				if (e) console.log(e);
			}
		};
		fetchData();
	}, [props.match.params]);

	const deleteBook = async () => {
		try {
			let {id} = props.match.params;
			let res = await axios.delete(`${api}/${id}`);
			await alert(res.data.status);
			await history.push('/');
		} catch (e) {
			if (e) console.log(e);
		}
	};

	const Container = () => {
		return (
			<React.Fragment>
				{state.data.map(s => (
					<ul key={s.id}>
						<li>
							<strong>Judul : </strong>
							{s.judul}
						</li>

						<li>
							<strong>Sinopsis: </strong>
							{s.sinopsis}
						</li>
						<li>
							<strong>Penulis: </strong>
							{s.penulis}
						</li>
						<br />
						<div>
							<strong style={{cursor: 'Pointer'}} onClick={deleteBook}>
								hapus
							</strong>
							<br />
							<strong
								style={{cursor: 'Pointer'}}
								onClick={() => setState({edited: true, data: state.data})}
							>
								edit
							</strong>
						</div>
					</ul>
				))}
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			{state.edited ? <EditBuku data={state.data} /> : <Container />}
		</React.Fragment>
	);
};

export default Buku;
