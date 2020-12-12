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
      models.lyric.belongsTo(model.song, {through: "song_lyric"})
    }
  };
  lyric.init({
    lyricQuestion: DataTypes.STRING,
    songId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lyric',
  });
  return lyric;
};