'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('lyrics', null, { truncate: true, cascade: true, restartIdentity: true });

    const bulkSongs = await queryInterface.bulkInsert("lyrics", [
      {
        questionMessage: "Make 'em whistle like a _____. Bomb, bomb.",
        songId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Every time I show up, _____ up, uh.",
        songId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        questionMessage: "24, ___",
        songId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        questionMessage: "So hot, so ____.",
        songId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        questionMessage: "Can you ____ that?",
        songId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        questionMessage: "Just whitstle to my ____.",
        songId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        questionMessage: "Every day, ____ day.",
        songId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        questionMessage: "Like a ____ island.",
        songId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        questionMessage: "This ____ got me feeling like",
        songId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        questionMessage: "Make 'em ____ like a missle.",
        songId: "1",
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
