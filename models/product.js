module.exports = function(sequelize, DataTypes) {
    var product = sequelize.define("Product", {
        id: DataTypes.INTEGER,
        brand: DataTypes.STRING(45),
        name: DataTypes.STRING(45),
        model: DataTypes.STRING(45),
        instrument: DataTypes.STRING(45),
        description: DataTypes.TEXT,
        color: DataTypes.STRING(45),
        price: DataTypes.DECIMAL(8,2),
        rating: DataTypes.DECIMAL(2,1)
    });
    return product;
};