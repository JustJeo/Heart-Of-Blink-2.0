"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bulkAlbums = await queryInterface.bulkInsert("albums", [
      {
        "albumName": "Square One",
        "coverArt": "https://vignette.wikia.nocookie.net/blinks/images/3/3e/Square_One_Cover.jpg/revision/latest/scale-to-width-down/1000?cb=20170208214140",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "albumName": "Square Two",
        "coverArt": "https://vignette.wikia.nocookie.net/blinks/images/d/df/BLACKPINK_Square_Two_cover_art.png/revision/latest?cb=20170208215104",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "albumName": "As If It's Your Last",
        "coverArt": "https://vignette.wikia.nocookie.net/kpop/images/1/15/BLACKPINK_As_If_It%27s_Your_Last_cover_art.png/revision/latest?cb=20170622105624",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "albumName": "Square Up",
        "coverArt": "https://vignette.wikia.nocookie.net/blinks/images/5/5e/Blackpink-square-up-pink-version.jpg/revision/latest?cb=20180616045110",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "albumName": "Kill This Love",
        "coverArt": "https://vignette.wikia.nocookie.net/blinks/images/0/05/Kill_This_Love_-_Pink%2BDigital_Version.jpg/revision/latest?cb=20190404153011",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "albumName": "How You Like That",
        "coverArt": "https://upload.wikimedia.org/wikipedia/en/e/eb/Blackpink_-_How_You_Like_That.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "albumName": "Ice Cream",
        "coverArt": "https://upload.wikimedia.org/wikipedia/en/d/db/Blackpink_%26_Selena_Gomez_-_Ice_Cream.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "albumName": "The Album",
        "coverArt": "https://vignette.wikia.nocookie.net/kpop/images/d/d3/BLACKPINK_The_Album_digital_album_cover.png/revision/latest?cb=20200728003805",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
