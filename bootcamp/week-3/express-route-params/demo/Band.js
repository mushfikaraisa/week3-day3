const {sequelize, DataTypes, Model} = require('./db');


class Band extends Model {}

Band.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING
}, {
    sequelize,
    timestamps: false,
});


module.exports = {
    Band
};