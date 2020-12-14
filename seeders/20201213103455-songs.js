'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('songs', null, { truncate: true, cascade: true, restartIdentity: true });

    const bulkSongs = await queryInterface.bulkInsert("songs", [
      {
        "songTitle": "Whistle",
        "albumId": "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Boombayah",
        "albumId": "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Playing With Fire",
        "albumId": "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Stay",
        "albumId": "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "As If It's Your Last",
        "albumId": "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Ddu-du, Ddu-du",
        "albumId": "4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Forever Young",
        "albumId": "4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Really",
        "albumId": "4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "See U Later",
        "albumId": "4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Kill This Love",
        "albumId": "5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Don't Know What To Do",
        "albumId": "5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Kick It",
        "albumId": "5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Hope Not",
        "albumId": "5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "How You Like That",
        "albumId": "6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Ice Cream (with Selena Gomez)",
        "albumId": "7",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Pretty Savage",
        "albumId": "8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Bet You Wanna (with Cardi B)",
        "albumId": "8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Lovesick Girls",
        "albumId": "8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Crazy Over You",
        "albumId": "8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "Love To Hate Me",
        "albumId": "8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "songTitle": "You Never Know",
        "albumId": "8",
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
