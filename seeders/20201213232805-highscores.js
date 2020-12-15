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
      {
        score: 100,
        playerName: "YG Entertainment",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 90,
        playerName: "Jisoo",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 80,
        playerName: "Jennie",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 70,
        playerName: "Rose",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 60,
        playerName: "Lisa",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 0,
        playerName: "Coming Soon!",
        songId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 0,
        playerName: "Coming Soon!",
        songId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 100,
        playerName: "YG Entertainment",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 90,
        playerName: "Jisoo",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 80,
        playerName: "Jennie",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 70,
        playerName: "Rose",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 60,
        playerName: "Lisa",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 100,
        playerName: "YG Entertainment",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 90,
        playerName: "Jisoo",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 80,
        playerName: "Jennie",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 70,
        playerName: "Rose",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 60,
        playerName: "Lisa",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 0,
        playerName: "Coming Soon!",
        songId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 0,
        playerName: "Coming Soon!",
        songId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 0,
        playerName: "Coming Soon!",
        songId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 100,
        playerName: "YG Entertainment",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 90,
        playerName: "Jisoo",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 80,
        playerName: "Jennie",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 70,
        playerName: "Rose",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 60,
        playerName: "Lisa",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 0,
        playerName: "Coming Soon!",
        songId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 0,
        playerName: "Coming Soon!",
        songId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 0,
        playerName: "Coming Soon!",
        songId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 0,
        playerName: "Coming Soon!",
        songId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 100,
        playerName: "YG Entertainment",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 90,
        playerName: "Jisoo",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 80,
        playerName: "Jennie",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 70,
        playerName: "Rose",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 60,
        playerName: "Lisa",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 0,
        playerName: "Coming Soon!",
        songId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 0,
        playerName: "Coming Soon!",
        songId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 100,
        playerName: "YG Entertainment",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 90,
        playerName: "Jisoo",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 80,
        playerName: "Jennie",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 70,
        playerName: "Rose",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 60,
        playerName: "Lisa",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 0,
        playerName: "Coming Soon!",
        songId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 0,
        playerName: "Coming Soon!",
        songId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        score: 0,
        playerName: "Coming Soon!",
        songId: 21,
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
