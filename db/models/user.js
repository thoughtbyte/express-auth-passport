'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      DataTypes.STRING(32),
      allowNull: false,
      unique: true,
    },
    password: {
      DataTypes.TEXT,
      allowNull: false,
    }
    email: DataTypes.STRING(128),
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dob: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
