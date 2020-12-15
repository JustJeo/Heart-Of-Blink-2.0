'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.song.belongsTo(models.album)
      models.song.hasMany(models.lyric)
      models.song.hasMany(models.highscore)
    }
  };
  song.init({
    songTitle: DataTypes.STRING,
    albumId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'song',
  });
  return song;
};