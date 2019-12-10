module.exports = function(sequelize, DataTypes) {
  let Order = sequelize.define("Order", {
    total: {
      type: DataTypes.DECIMAL(10, 2)
    }
  });

  Order.associate = function(models) {
    Order.belongsToMany(models.Product, {
      through: "OrderItem"
      // onDelete: "cascade"
    });
    Order.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Order;
};
