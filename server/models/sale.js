/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sale', {
    id: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contr_num: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lcount: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    lcount1: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    condate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    paydate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    indate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cost: {
      type: "DOUBLE(10,2)",
      allowNull: true
    },
    price: {
      type: "DOUBLE(10,2)",
      allowNull: true
    },
    serv: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    manager: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fee: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    incline: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bonus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    diff: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    percent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    minnagovor: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    currdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    delete: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    otherserv: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tasknumb: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    addit_agr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'sale'
  });
};
