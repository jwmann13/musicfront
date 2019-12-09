module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    title: {
      type: DataTypes.STRING(45)
    },
    description: {
      type: DataTypes.TEXT
    }
  });

  Review.associate = function(models) {
    Review.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};
