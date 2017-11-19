const io = require('../../app')

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sale_leader', {
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    position: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    month: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    percent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'sale_leader'
  }
)}
