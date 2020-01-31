module.exports = function(sequelize, DataTypes) {
    var Timeline = sequelize.define("Timeline", {
        name: DataTypes.STRING
    });
    return Timeline
    }