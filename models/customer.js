module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    username: {
      type: DataTypes.STRING(45)
    },
    password: {
      type: DataTypes.STRING(255)
    },
    firstName: {
      type: DataTypes.STRING(45)
    },
    lastName: {
      type: DataTypes.STRING(45)
    },
    address: {
      type: DataTypes.STRING(100)
    },
    email: {
      type: DataTypes.STRING(45),
      validate: {
        isEmail: true
      }
    },
    cardNumber: {
      type: DataTypes.INTEGER,
      validate: {
        isCreditCard: true
      }
    }
  });

  Customer.associate = function(models) {
    Customer.hasOne(models.Order, {
      onDelete: "cascade"
    });
  };

  return Customer;
};
