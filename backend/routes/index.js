const express = require('express');
const router = express.Router();
const db = require('../config/database');

// default routes
router.get('/', async (req, res) => {
	try {
		await res.redirect('/api/buku');
	} catch (e) {
		console.log(e);
	}
});

// get all data
router.get('/buku', async (req, res) => {
	try {
		let buku = await db('buku');
		await res.json(buku);
	} catch (e) {
		console.log(e);
	}
});

// get data by id
router.get('/buku/:id', async (req, res) => {
	try {
		let id = req.params.id;
		let buku = await db('buku').where('id', id).select();
		if (buku.length == 0) {
			res.send({messages: 'book not found'});
		} else {
			await res.send(buku);
		}
	} catch {
		e => console.log(e);
	}
});

// add data
router.post('/buku', async (req, res) => {
	try {
		let {judul, sinopsis, penulis} = req.body;
		await db('buku').insert({judul, sinopsis, penulis});
		await res.send({status: 'book added!'});
		await res.redirect('/buku');
	} catch (e) {
		console.log(e);
		next(e);
	}
});

// update data by id
router.put('/buku/:id', async (req, res) => {
	try {
		let {judul, sinopsis, penulis} = req.body;
		await db('buku').where({id: req.params.id}).update({
			judul,
			sinopsis,
			penulis,
		});
		await res.send({status: 'book updated!'});
	} catch (e) {
		console.log(e);
		next(e);
	}
});

// delete data by id
router.delete('/buku/:id', async (req, res) => {
	try {
		let id = req.params.id;
		await db('buku').where('id', id).del();
		await res.send({
			status: 'book deleted',
		});
	} catch (e) {
		console.log(e);
		next(e);
	}
});

module.exports = router;
