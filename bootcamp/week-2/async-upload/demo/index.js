const fs = require('fs'); // Node.js file system module for standard callbacks
const path = require('path'); // Node.js directories and file paths module

class Pokemon {
	constructor(name, type) {
		this.name = name || ''
		this.type = type || ''
	}

	getInfoCallback(name, callback) {
		const db = path.join(__dirname, 'db.json')
		//read database file
		//when
		fs.readFile(db, (err, data) => {
			//then
			const allPokemon = JSON.parse(String(data))
			const pokemon = allPokemon.find(pokemon => pokemon.name === name)
			//console.log("FOUND POKEMON: ", pokemon)
			callback(err, pokemon)
		})

	}

	getInfoPromise(name) {
		const db = path.join(__dirname, 'db.json')

		return new Promise((resolve, reject) => {
			
			fs.readFile(db, (err, data) => {
				if(err) {
					return reject(err)
				}
				const allPokemon = JSON.parse(String(data))
				const pokemon = allPokemon.find(pokemon => pokemon.name === name)
				resolve(pokemon)

				

			})
		})
	}
}

module.exports = Pokemon