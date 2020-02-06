'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    nome: DataTypes.STRING(20),
    email: DataTypes.STRING(20),
    telefone: DataTypes.STRING(20),
    local_foto: DataTypes.STRING(1000)
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};