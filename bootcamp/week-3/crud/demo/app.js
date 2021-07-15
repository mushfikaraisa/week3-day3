const express = require('express');
const app = express();

const {Musician, Band} = require("./index");
const {sequelize} = require('./db');

const port = 8080;

// Add this boilerplate middleware to successfully use req.body
app.use(express.json())

app.get('/', (req, res) => {
	res.send('hello world')
})

app.get('/musicians', async (req, res) => {
	let musicians = await Musician.findAll()
	res.json({ musicians })
})

app.get('/bands', async (req, res) => {
	let bands = await Band.findAll()
	res.json({ bands })
})


app.get('/musicians/:id', async (req, res) => {
	let musician = await Musician.findByPk(req.params.id);
	res.json({ musician })
})

app.get('/bands/:id', async (req, res) => {
	let band = await Band.findByPk(req.params.id, {include : Musician});
	res.json({ band })
})



//whatever we add after : becomes a key on req.params
app.get('/:banana/:mango', (req, res) => {
	res.send(`<h1>req.params.banana is ${req.params.banana} </h1> <h2>req.params.mango is ${req.params.mango} </h2>`);
})

// Add new musician
app.post('/musicians', async (req, res) => {
	let newMusician = await Musician.create(req.body);
	res.send('Created!')
})

// Delete a musician

app.delete('/musicians/:id', async (req, res) => {
	await Musician.destroy({
		where : {id : req.params.id} // Destory an Musician where this object matches
	})
	res.send("Deleted!!")
})

// Update a musician
app.put("/musicians/:id", async (req, res) => {
	let updated = await Musician.update(req.body, {
		where : {id : req.params.id} // Update a musician where the id matches, based on req.body
	})
	res.send("Updated!!")
})


app.listen(port, async () => {
	await seed()
	console.log(`Server is listening on http://localhost:${port}`)
})


//Adds Musicians and Band to database
async function seed(){
	await sequelize.sync({ force: true });

	let wutang = await Band.create({name : 'Wu-Tang Clan', genre : 'Hip Hop'})
	let raekwon = await Musician.create({name : 'Raekwon'})
	let methodMan = await Musician.create({name : 'Method Man'})

	let bigBang = await Band.create({ name : 'BIGBANG', genre : 'KPOP'})
	let GD = await Musician.create({ name : 'G-Dragon', instrument : 'Voice'})
	let Top = await Musician.create({ name : 'TOP', instrument : 'Voice'})

	await wutang.addMusician(raekwon);
	await wutang.addMusician(methodMan);

	await bigBang.addMusician(GD);
	await bigBang.addMusician(Top);

	console.log("db seeded!!")

}