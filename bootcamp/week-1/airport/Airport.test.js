const Airport = require('./Airport')
const Plane = require('./Plane')

describe('Airport object', () => {
	const testAirport = new Airport("DFW")

	const testPlane = new Plane('912')
	
	test('airport has a name', () => {
		expect(testAirport.name).toBe("DFW")
	})

	test('airport has planes', () => {
		expect(Array.isArray(testAirport.planes)).toBe(true)
	})

	test('airport can add planes', () => {
		testAirport.addPlane(testPlane)
		expect(testAirport.planes.length).toBe(1)
	})
})