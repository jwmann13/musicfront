module.exports = function(sequelize, DataTypes) {
  var review = sequelize.define("Review", {
    id: {
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING(45)
    },
    description: {
        type: DataTypes.TEXT
    },
    productID: {
        type: DataTypes.INTEGER
    },
    reviewID: {
        type: DataTypes.INTEGER
    }
  });
  return review;
};
