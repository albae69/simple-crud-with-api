import React from 'react';

const Form = ({handleChange, handleSubmit, state, title, submitBtn}) => {
	return (
		<div>
			<h1>{title}</h1>
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
				<input type='submit' value={submitBtn} />
			</form>
		</div>
	);
};

export default Form;
