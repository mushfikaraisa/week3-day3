const express = require('express');
const app = express();

const {Musician, Band} = require("./index");
const {sequelize} = require('./db');

const port = 8080;


app.get('/', (req, res) => {
	res.send('hello world')
})

app.listen(port, async () => {
	await seed()
    console.log(`Server listening at http://localhost:${port}`)
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

}