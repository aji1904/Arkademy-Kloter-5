var express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser')
const path = require('path');
const kategori = require('./model/kategori')
const work = require('./model/work')
const nama = require('./model/nama')




var app = express();


app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.use('/',
	express.static(__dirname + '/view')
)

app.get('/api/kategori', async (req, res) => {
	const data = await kategori.find();
	res.send({ data });
});

app.get('/api/work', async (req, res) => {
	const data = await work.find()
	res.send({ data })
})

app.post('/api/nama', async (req, res) => {
	const newNama = new nama({
		name: req.body.nama,
		work: req.body.work,
		salary: req.body.salary
	})
	await newNama.save()
	res.send('berhasil tersimpan')
})

app.delete('/api/nama/:id', async (req, res) => {
	const data = await nama.findByIdAndRemove(req.params.id)
	res.send({
		message: `Berhasil menghapus data ${data.name}`
	})
})

app.put('/api/nama/:id', async (req, res) => {
	const data = await nama.findById(req.params.id)
	data.name = req.body.nama
	data.work = req.body.work
	data.salary = req.body.salary
	await data.save();
	res.send({
		message: `Berhasil mengedit data ${data.name}`
	})
})

app.get('/api/nama', async (req, res) => {
	const data = await nama.find()
	res.send({ data })
})

mongoose.set('useUnifiedTopology', true)
mongoose.connect('mongodb+srv://aji1998:aji12345@cluster0-bwklw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
	.then(() => {
		// const data = kategori.create([
		// 	{
		// 		salary: 10000000
		// 	},
		// 	{
		// 		salary: 12000000
		// 	}
		// ])
		// data.then(() => {
		// 	console.log('simpan kategori berhasil');
		// })

		// const datawork = work.create([
		// 	{
		// 		name: 'Frontend Dev',
		// 		id_salary: '5d77e9d4e091c90d108b8317'
		// 	},
		// 	{
		// 		name: 'Backend Dev',
		// 		id_salary: '5d77e9d4e091c90d108b8318'
		// 	}
		// ])
		// datawork.then(() => {
		// 	console.log('simpan work berhasil')
		// })
		console.log('MongoDB Connected')
		app.listen(4000, () => console.log(`Running with port 4000`))
	})
	.catch(err => {
		console.log('Error on connecting mongodb:', err)
	})


