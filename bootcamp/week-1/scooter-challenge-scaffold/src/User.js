class User {
  constructor(username, password){
    this.username = username
    this.password = password
  }
  //method to update the username and password
  changeUsername(updatedName) {
    this.username = updatedName
  }
}

module.exports = User
