const fs = require('fs');

const Pokemon = require('./index')

test('gets info with Callbacks', (done) => { //async indicator to jest
	const pikachu = new Pokemon()

	//when
	pikachu.getInfoCallback('Pikachu', (err, foundPokemon) => {
		// first cb arg is err, second is found data
		//then
		expect(foundPokemon.type).toBe("Lightning")
		done()
	})

})

test('gets info with a promise', () => {
	const charizard = new Pokemon()
	
	//when
	return charizard.getInfoPromise('Charizard')
	.then(foundPokemon => {
		expect(foundPokemon.type === 'fire')
	})
	.catch(err => {
		// console.log(err)
		expect(err).toBeNull()
	})
})