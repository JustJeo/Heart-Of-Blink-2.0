'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class highScore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  highScore.init({
    scoreId: DataTypes.INTEGER,
    scoreTotal: DataTypes.INTEGER,
    playerName: DataTypes.STRING,
    songId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'highScore',
  });
  return highScore;
};