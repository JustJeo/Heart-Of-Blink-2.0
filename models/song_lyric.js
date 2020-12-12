'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class song_lyric extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  song_lyric.init({
    songId: DataTypes.INTEGER,
    lyricId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'song_lyric',
  });
  return song_lyric;
};