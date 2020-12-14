'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('highscores', null, { truncate: true, cascade: true, restartIdentity: true });

    const bulkHighscores = await queryInterface.bulkInsert("highscores", [
      {
        score: 100,
        playerName: "YG Entertainment",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 90,
        playerName: "Jisoo",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 80,
        playerName: "Jennie",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 70,
        playerName: "Rose",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 60,
        playerName: "Lisa",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
