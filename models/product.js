module.exports = function(sequelize, dataTypes) {
  let Product = sequelize.define("Product", {
    brand: {
      type: dataTypes.STRING
    },
    name: {
      type: dataTypes.STRING
    },
    model: {
      type: dataTypes.STRING
    },
    instrumentFamily: {
      type: dataTypes.STRING
    },
    description: {
      type: dataTypes.TEXT
    },
    price: {
      type: dataTypes.DECIMAL(10, 2)
    },
    rating: {
      type: dataTypes.DECIMAL(2, 1)
    },
    photo: {
      type: dataTypes.STRING(1023)
    }
  });
  return Product;
};
