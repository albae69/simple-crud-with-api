import React, {useState, useEffect} from 'react';
import axios from 'axios';
import api from '../utils/api';

const Buku = props => {
	const [state, setState] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				let {id} = props.match.params;
				let res = await axios.get(`${api}/${id}`);
				await setState(res.data);
			} catch (e) {
				if (e) console.log(e);
			}
		};
		fetchData();
	}, [props.match.params]);

	return (
		<React.Fragment>
			{state.map(s => (
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
				</ul>
			))}
		</React.Fragment>
	);
};

export default Buku;
