/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sale_bonus', {
    city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    manager: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    departmant: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    position: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    quarter: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    plan_i: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    plan_t: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    plan_m: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fact_i: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fact_t: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fact_m: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    percent_plan: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    percent_m: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bonus_i_t: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bonus_other: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bonus_pay: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'sale_bonus'
  });
};
