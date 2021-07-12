const {sequelize, DataTypes, Model} = require('./db');

class Musician extends Model {
	//add custom methods for advanced querying
}

Musician.init({
	name: DataTypes.STRING,
	instrument: DataTypes.STRING
}, {
	sequelize,
	// timestamps: false,
});


module.exports = { Musician };