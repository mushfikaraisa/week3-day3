const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

//static property
describe('scooterSessions property', () => {
  test('static property can only be called on the class and not instances', () => {
    const newScoot = new ScooterApp();

    expect(newScoot.scooterSessions).toEqual(undefined);
    console.log('TESSSKDSFKLSDJ', ScooterApp.scooterSessions[0]);
    expect(ScooterApp.scooterSessions[0]).toEqual(newScoot);

  })
})

//register user
describe('scooterApp register method', () => {
  test('can register new users', () => {
    const newScooterApp = new ScooterApp();
    const newUser = new User('Ash', 'gttactchmall123', 40);

    newScooterApp.register(newUser);

    expect(newScooterApp.registeredUsers['Ash']).toEqual({
      password: 'gttactchmall123',
      age: 40,
      accountCharge: 0,
      loggedIn: false
    })
  })

  test('will reject user registration if age is under 17', () => {
    const newScooterApp = new ScooterApp();
    const newUser = new User('Ash', 'gttactchmall123', 12);

    newScooterApp.register(newUser);

    expect(newScooterApp.registeredUsers['Ash']).toEqual(undefined);
  })

  test('will reject user registration user already exists', () => {
    const newScooterApp = new ScooterApp();
    const newUser = new User('Ash', 'gttactchmall123', 12);

    newScooterApp.register(newUser);

    const newUser2 = new User('Ash', 'abc123', 30);

    newScooterApp.register(newUser2);

    expect(newScooterApp.registeredUsers['Ash'] === newUser2).toBe(false);


  })
})

//log in
describe('scooterApp logIn method', () => {
  test('can register new users', () => {
    const newScooterApp = new ScooterApp();
    const newUser = new User('Ash', 'gttactchmall123', 40);

    newScooterApp.register(newUser);
    newScooterApp.logIn('Ash', 'gttactchmall123');

    expect(newScooterApp.registeredUsers).toHaveProperty('Ash');

  })

  //add scooter
  describe('add scooter method', () => {
    test('should add scooter only if location and scooter instance is passed', () => {
      const newScooterApp = new ScooterApp();
      const newScooter = new Scooter('Queens');

      newScooterApp.addScooter('Queens', newScooter);

      expect(newScooterApp.stations['Queens'].length).toBe(1);

    })
  })

  //remove scooter
  describe('remove scooter method', () => {
    test('target scooter should be removed from the matching station array', () => {
      const newScooterApp = new ScooterApp();
      const newScooter = new Scooter('Queens');

      newScooterApp.removeScooter(newScooter);

      expect(newScooterApp.stations['Queens'].indexOf(newScooter)).toBe(-1);

    })
  })
})
