'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lyric extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  lyric.init({
    questionId: DataTypes.INTEGER,
    questionMessage: DataTypes.STRING,
    songId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lyric',
  });
  return lyric;
};