const user = {
  id: 101,
  email: 'jessica@verizon.com',
  personalInfo: {
    name: 'Jessica',
    address: {
      line1: '1234 Broadway',
      line2: 'washmasher',
      city: 'wallas',
      state: 'WX'
    }
  }
}


//dot notation
console.log(user.personalInfo.address.city)

//bracket notation
console.log(user['personalInfo']['address']['city'])

module.exports = user
