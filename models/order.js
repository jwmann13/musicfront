module.exports = function(sequelize, DataTypes) {
  let Order = sequelize.define("Order", {
    total: {
      type: DataTypes.DECIMAL(10, 2)
    }
  });

  Order.associate = function(models) {
    Order.hasMany(models.Product, {
      onDelete: "cascade"
    });
    Order.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Order;
};
