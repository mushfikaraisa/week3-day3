const { Dog, Cockerspaniel, Shiba } = require('./index')

describe('Dog Class', () => {

	const testDog = new Dog('Nox', 'Havanese')

	test('has a name', () => {
		expect(testDog.name).toBe('Nox')
	})

	test('has a breed', () => {
		expect(testDog.breed).toBe('Havanese')
	})

	test('can speak', () => {
		expect(testDog.speak()).toEqual("Woof woof")
	})
})

describe('Cockerspaniel Class', () => {
	const testSpaniel = new Cockerspaniel('Lady', true);

	test('is a cockerspaniel', () => {
		expect(testSpaniel.breed).toBe('Cockerspaniel')
	})

	test('spaniels can speak too', () => {
		expect(testSpaniel.speak()).toEqual("Woof woof")
	})

	test('has Floopy Ears', () => {
		expect(testSpaniel.floopyEars).toBeTruthy
	})

})

describe('Shiba Class', () => {
	const testShiba = new Shiba('Elon')

	test('is a Shiba', () => {
		expect(testShiba.breed).toBe('Shiba Inu')
	})

	test('can buy Dogecoin', () => {
		expect(testShiba.buyDoge()).toEqual('$$$')
	})

	test('Shibas are Dogs', () => {
		expect(testShiba instanceof Dog).toBeTruthy;
	})
})





