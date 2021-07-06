class Scooter{

  constructor(station, user) {
    this.station = station
    this.user = user
    this.serial = Math.floor(Math.random() * 100)
    this.charge = Math.floor(Math.random() * 100)
    this.isBroken = false
    this.docked = true
  }

  rent() {
    if(!this.isBroken && this.charge > 20) {
      this.docked = false
      console.log('enjoy the ride!')
    }else if(this.charge < 20){
      console.log('scooter low on battery please charge')
    }else {
      console.log('scooter is broken, please send in repair request')
    }
  }

  async recharge() {

    console.log('Charging....')
    await new Promise(resolve => {
      setTimeout(resolve, 1000)
      this.charge = 100
    })
    console.log('scooter has been fully charged')
  }

  dock(station) {
    this.station = station
    this.docked = true
    this.user = ''
  }

  requestRepair() {

    console.log('Thank you for the repair request')

    setTimeout(() => {
      console.log('charging...')
    }, 2000)

    this.isBroken = false

    console.log('Repairs are complete')
  }
}


module.exports = Scooter
