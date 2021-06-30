const user = require('./recap.js')

//breaks your test suite into components
describe('user object', () => {

  test('user email is in the correct format', () => {
    // 0
    //[j,e,s,s,i,c,a,@,v,e,r,i,z,o,n,.,c,o,m] //7
    const indexFromAtSign = user.email.split('').indexOf('@') //7
    //'@verizon.com'
    expect(user.email.slice(indexFromAtSign)).toEqual('@verizon.com')
  })

})



