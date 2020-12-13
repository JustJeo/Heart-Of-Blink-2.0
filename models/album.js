'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.album.belongsToMany(models.song, {through: "album_song"})
    }
  };
  album.init({
    albumName: DataTypes.STRING,
    coverArt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'album',
  });
  return album;
};