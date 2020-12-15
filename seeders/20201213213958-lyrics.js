'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('lyrics', null, { truncate: true, cascade: true, restartIdentity: true });

    const bulkLyrics = await queryInterface.bulkInsert("lyrics", [
      {
        questionMessage: "Make 'em whistle like a _____. Bomb, bomb.",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Every time I show up, _____ up, uh.",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "24, ___",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "So hot, so ____.",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Can you ____ that?",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Just whitstle to my ____.",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Every day, ____ day.",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Like a ____ island.",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "This ____ got me feeling like",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Make 'em ____ like a missle.",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "BLACKPINK in your ____.",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Been a bad ____, I know I am.",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "And I'm so hot, I need a ____.",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "I don't want a boy, I need a ____.",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Bottle full of ____.",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "____ to the pink.",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Yah yah yah ____!",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "____ finger up, F U pay me",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "90's ____, I pump up the jam.",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "I know you wanna ____",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        songId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        songId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Won't you set me ___?",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Imma fall in ___ baby",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Call me pretty and ____",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Cause ___ gonna get it",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "We 'gon double the ____ on them Woo!",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "I be the ____",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "and you be my ____",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "We ____ or die",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "One, Two, ____",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "BLACKPINK in ____ area",
        songId: 5,
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
