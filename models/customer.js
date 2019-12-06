module.exports = function (sequelize, DataTypes) {  
    var customer = sequelize.define("Customer", {
        id: DataTypes.INTEGER,
        userName: DataTypes.STRING(45),
        userPassword: DataTypes.STRING(45),
        firstName: DataTypes.STRING(45),
        lastName: DataTypes.STRING(45),
        addres: DataTypes.STRING(100),
        email: DataTypes.STRING(45),
        cardNumber: DataTypes.INTEGER
    });
    return customer;
};
