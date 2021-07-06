const User = require('../src/User')



//test for typeOf user === object
describe('user objects', () => {
  test('user to be of type object', () => {
    const newUser = new User('test', 'case', 30);

    expect(typeof newUser).toBe('object');
  })
})

//test username to be of type string
describe('username', () => {
  test('to be of type string', () => {
    const newUser = new User('test', 'case', 30);

    expect(typeof newUser.username).toBe('string');
  })
})

//test password to be of type string
describe('password', () => {
  test('to be of type string', () => {
    const newUser = new User('test', 'case', 30);

    expect(typeof newUser.password).toBe('string');
  })
})

//test age for type number
describe('age', () => {
  test('to be of type number', () => {
    const newUser = new User('test', 'case', 30);

    expect(typeof newUser.age).toBe('number');
  })
})
