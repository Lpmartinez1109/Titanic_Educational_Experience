module.exports = function(sequelize, DataTypes) {
var Titanic = sequelize.define("Titanic", {
    name: DataTypes.STRING,
}, {
    freezeTableName: true

});
return Titanic
}