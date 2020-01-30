module.exports = function(sequelize, DataTypes) {
var Titanic = sequelize.define("Titanic", {
    name: DataTypes.STRING
});
return Titanic
}