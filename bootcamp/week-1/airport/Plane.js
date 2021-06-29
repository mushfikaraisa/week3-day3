
class Plane {

	constructor(flightNumber) {
		this.flightNumber = flightNumber
		this.origin = ''
		this.destination = ''
		this.passengers = []
	}

	setOrigin(airport) {
		this.origin = airport
	}

	setDestination(airport) {
		this.destination = airport
	}

	addPassenger(person){
		this.passengers.push(person)
	}
}

module.exports = Plane