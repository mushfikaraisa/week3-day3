const User = require('../src/User')


//describe - User object
describe('User object', () => {
  const testUser = new User('verizon123@verizon.com','5G123') //username - email , password

  //******* data types are correct **********//
  test('username is of type string', () => {
    expect(typeof testUser.username).toBe('string')
  })
  test('password is of type string', () => {
    expect(typeof testUser.password).toBe('string')
  })

  //make sure that the email is in the correct format @verizon.com
  test('make sure that the email is in the correct format', () => {
    const email = testUser.username // 'verizon123@verizon.com'
    // 0
    //[v,e,r,i,z,o,n,1,2,3,@,v,e,r,i,z,o,n,.,c,o,m]
    const indexOfAt = email.split('').indexOf('@') //10
    //slice method
    expect(email.slice(indexOfAt)).toBe('@verizon.com')
  })

  // testUser = {
      //  username: 'verizon123@verizon.com',
      //  password: '5G123',
      //  changeUsername: (updatedName) { this.username = updatedName }
  //}

  //******** methods (if any) ******** //
  //change username method works
  test('the changeUsername method changes the this.username property', () => {
    testUser.changeUsername('abc123@verizon.com')

    expect(testUser.username).toBe('abc123@verizon.com')
  })

})
