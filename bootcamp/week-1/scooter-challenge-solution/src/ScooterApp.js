const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  static scooterSessions = []

  constructor() {
    this.stations = {
      'Manhattan': [],
      'Brooklyn': [],
      'Queens': [],
      'Bronx': [],
      'StatenIsland': []
      }
    this.registeredUsers = {}
    this.constructor.scooterSessions.push(this)
  }

  register(user) {
    if(!this.registeredUsers[user.username]) {
      if(user.age > 17) {
        this.registeredUsers[user.username] = {
          password: user.password,
          age: user.age,
          accountCharge: 0,
          loggedIn: false
        }
        console.log( `congrats ${user.username}, you've been registered, please log in`)
      }
    } else {
      if(this.registeredUsers[user.username]) console.log('user already registered')
      else console.log('too young!')
    }
  }

  logIn(username, password) {
    if(this.registeredUsers[username] && this.registeredUsers[username].password === password) {
      this.registeredUsers[username].loggedIn = true
      console.log(`${username} has successfully logged in`)
      return username
    } else {
      console.log('username or password is incorrect')
    }
  }

  addScooter(location, scooter) {
    scooter.station = location
    this.stations[location].push(scooter)
  }

  removeScooter(scooterToRemove) {
    const serial = scooterToRemove.serial
    let targetScooterArray = this.stations[scooterToRemove.station]
    let idx = -1

    targetScooterArray.find((scooter,i) => {
      if(scooter.serial === serial){
        idx = i
      }
    })
    console.log(targetScooterArray)
    targetScooterArray.splice(idx,1)
    console.log(targetScooterArray)

  }

}

module.exports = ScooterApp
