import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
	const [state, setState] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/buku/')
			.then(res => {
				setState(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div style={{width: 350}}>
			{state.map(s => (
				<ul key={s.id}>
					<Link to={`/buku/${s.id}`}>
						<li>
							<strong>Judul : </strong>
							{s.judul}
						</li>
					</Link>
					<li>
						<strong>Sinopsis: </strong>
						{s.sinopsis}
					</li>
					<li>
						<strong>Penulis: </strong>
						{s.penulis}
					</li>
				</ul>
			))}
		</div>
	);
};

export default Home;
