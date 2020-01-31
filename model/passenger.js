module.exports = function(sequelize, DataTypes) {
    var Passenger = sequelize.define("Passenger", {
        name: DataTypes.STRING
    });
    return Passenger
    }