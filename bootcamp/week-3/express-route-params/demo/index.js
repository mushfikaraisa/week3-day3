const {sequelize} = require('./db');
const {Band} = require('./Band')
const {Musician} = require('./Musician')

Musician.belongsTo(Band, {foreignKey: 'band_id'})
Band.hasMany(Musician, {foreignKey: 'band_id'})

module.exports = {
    Band,
    Musician
};
