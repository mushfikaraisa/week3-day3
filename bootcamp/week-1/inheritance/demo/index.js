class Dog {
	constructor(name, breed) {
		this.name = name
		this.breed = breed
	}

	speak() {
		return 'Woof woof'
	}
}

class Cockerspaniel extends Dog {
	constructor(name, floopyEars){
		super(name)
		this.breed = 'Cockerspaniel'
		this.floopyEars = floopyEars
	}

}

class Shiba extends Dog {
	constructor(name){
		super(name)
		this.breed = 'Shiba Inu'
	}

	buyDoge(){
		return '$$$'
	}
}

module.exports = { Dog, Cockerspaniel, Shiba }