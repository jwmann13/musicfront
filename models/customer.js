module.exports = function(sequelize, DataTypes) {
  var customer = sequelize.define("Customer", {
    userName: {
        type: DataTypes.STRING(45)
    },
    userPassword: { 
        type: DataTypes.STRING(45) },

    firstName: {
        type: DataTypes.STRING(45)
    },
    lastName: {
        type: DataTypes.STRING(45)
    },
    addres: {
        type: DataTypes.STRING(100)
    },
    email: {
        type: DataTypes.STRING(45),
    },
    cardNumber: {
        type: DataTypes.INTEGER
    }
    });
  return customer;
};
