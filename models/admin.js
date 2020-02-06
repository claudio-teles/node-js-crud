'use strict';

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('admin', {
    email: DataTypes.STRING(20),
    senha: DataTypes.STRING(45),
    login: DataTypes.BOOLEAN
  }, {});
  Admin.associate = function(models) {
    // associations can be defined here
  };
  return Admin;
};