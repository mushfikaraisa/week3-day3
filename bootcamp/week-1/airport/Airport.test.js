const Airport = require('./Airport')

describe('Airport object', () => {
	const testAirport = new Airport("DFW")
	
	test('airport has a name', () => {
		expect(testAirport.name).toBe("DFW")
	})

	test('airport has planes', () => {
		expect(Array.isArray(testAirport.planes)).toBe(true)
	})

	test('airport can add planes', () => {
		testAirport.addPlane('JJ the Jet Plane')
		expect(testAirport.planes.length).toBe(1)
	})
})