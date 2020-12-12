'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class highscore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.highscore.belongsTo(models.song, {through: "song_highscore"})
    }
  };
  highscore.init({
    score: DataTypes.INTEGER,
    playerName: DataTypes.STRING,
    songId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'highscore',
  });
  return highscore;
};