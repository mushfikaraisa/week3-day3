const {sequelize} = require("./db");

const {Musician} = require("./index")

//Destructuring Syntax
// const {banana} = require('./fruit')

// const banana = require('./fruit').banana

describe('Musician Database', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create a musician', async() => {
		const testMusician = await Musician.create({name : 'Prince'})
		expect(testMusician.name).toBe('Prince')
	})

	test('can play an instrument', async () => {
		const testMusician = await Musician.create({name: 'Jimi Hendrix', instrument : "Guitar"});
		console.log("TEST MUSICIAN: ", testMusician)
		expect(testMusician.instrument).toBe('Guitar');
	})

})