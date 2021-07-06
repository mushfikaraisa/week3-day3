const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('scooter to be of type object', () => {
    const newUser = new User('scooby', 'doo', 30);
    const scooter = new Scooter('Brooklyn', newUser);

    expect(typeof scooter).toBe('object');
    expect(scooter.station).toEqual('Brooklyn');
    expect(scooter.user.username).toEqual('scooby');
  }
)
})

//Method tests
describe('scooter methods', () => {

  //rent method
  test('scooters can be rented if fully charged + not broken', () => {
    const newUser = new User('scooby', 'doo', 30);
    const newScooter = new Scooter('Queens', newUser);
    //can rent if scooter is not broken + charge > 20
    newScooter.rent();
    expect(newScooter.docked).toEqual(false);
  })

  //rent method
  test('scooters cannot be rented if broken', () => {
    const newUser = new User('scooby', 'doo', 30);
    const newScooter = new Scooter('Queens', newUser);
    //can't rent if broken
    newScooter.charge = 15;
    newScooter.rent();
    expect(newScooter.docked).toBe(true);
  })

  //rent method
  test('scooters cannot be rented if broken', () => {
    const newUser = new User('scooby', 'doo', 30);
    const newScooter = new Scooter('Queens', newUser);
    //can't rent if broken
    newScooter.isBroken = true;
    newScooter.rent();
    expect(newScooter.docked).toBe(true);
  })

  //dock method
  test('station should be assigned to station property when docked, docked should be assigned as true', () => {
    const newUser = new User('scooby', 'doo', 30);
    const newScooter = new Scooter('Queens', newUser);

    newScooter.dock('Brooklyn');

    expect(newScooter.user).toEqual('');
    expect(newScooter.docked).toBe(true);
    expect(newScooter.station).toBe('Brooklyn');
  })

  //requestRepair method
  test('scooter.isBroken property should be false after repair', () => {
    const newScooter = new Scooter('Queens');

    newScooter.requestRepair();

    expect(newScooter.isBroken).toBe(false);
  })

  //charge method
  test('recharge method uses async and await', async () => {
    const newScooter = new Scooter();

    await newScooter.recharge();

    console.log('TEST COMPLETE')

  })

})
