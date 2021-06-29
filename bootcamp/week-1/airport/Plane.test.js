const Plane = require('./Plane')
const Airport = require('./Airport')
const Person = require('./Person')

describe('Plane', () => {
	const testPlane = new Plane('B500')
	
	const lax  = new Airport("LAX");
	const newark = new Airport("EWR")

	const crystal = new Person('Crystal')
	const judith = new Person('Judith')

	test('has a serial number', () => {
		expect(testPlane.flightNumber).toBe('B500')
	})

	test('has an origin', () => {
		testPlane.setOrigin(lax)
		expect(testPlane.origin.name).toBe('LAX')
	})

	test('has a destination', () => {
		testPlane.setDestination(newark)
		expect(testPlane.destination.name).toBe('EWR')
	})

	test('has passengers', () => {
		testPlane.addPassenger(crystal)
		testPlane.addPassenger(judith)

		expect(testPlane.passengers.length).toBe(2)
	})
})