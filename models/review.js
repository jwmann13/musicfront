module.exports = function(sequelize, DataTypes) {
    var review = sequelize.define("Review", {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING(45),
        description: DataTypes.TEXT,
        productID: DataTypes.INTEGER,
        reviewID: DataTypes.INTEGER
    });
    return review;
};