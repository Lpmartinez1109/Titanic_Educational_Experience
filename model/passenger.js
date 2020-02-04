module.exports = function(sequelize, DataTypes) {
    var Passenger = sequelize.define("Passenger", {
        Passengerid: {
            type:DataTypes.INTEGER,
        primaryKey:true},
        Survived: DataTypes.INTEGER,
        Pclass: DataTypes.INTEGER,
        Name: DataTypes.STRING,
        Sex: DataTypes.STRING,
        Age: DataTypes.INTEGER,
        Sibsp: DataTypes.INTEGER,
        Parch: DataTypes.INTEGER,
        Ticket: DataTypes.STRING,
        Fare: DataTypes.FLOAT,
        Cabin: DataTypes.STRING,
        Embarked: DataTypes.STRING,
    });
    return Passenger
}