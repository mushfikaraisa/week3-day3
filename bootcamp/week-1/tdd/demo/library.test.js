const Book = require('./library')

describe('Book class', () => {
	const testBook = new Book('Kindred', 'Octavia Butler')

	test('has a title', () => {
		expect(testBook.title).toBe('Kindred')
	})

	test('has an author', () => {
		expect(testBook.author).toBe('Octavia Butler')
	})
})