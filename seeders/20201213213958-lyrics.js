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
      {
        questionMessage: "____ ah yeah, ah yeah",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "You hokae I’m ____",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Oh ____ til' I do what I",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "____ you with that ddu-du, ddu-du, du",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "BLACKPINK 4 ____",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "When the ____ drop it's another banger",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "What ____ gonna do",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "When I come ____ through with that",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "With that ____ uh, uh huh",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "tteugeoweo tteugeoweo tteugeoweo like ____",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        songId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        songId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        songId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "BLACKPINK in your ____",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Here I come ____ in the door",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Look at me, look at ____",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "LET'S ____ THIS LOVE!",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Feelin' like a ____",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "He said you look ____",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Thank you baby, I owe it all to ____",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Got me all ____ up",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "You plus me ____ can be dangerous",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "We all commit to love, that makes you ____",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        songId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        songId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        songId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        songId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Come a little closer cause you looking ____",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Look so good yeah look so ____",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "____ on my wrist so he call me ice cream",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Ice cream chillin chillin, Ice cream ____",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "You're the ____ piece just stay on top of me",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Looking good enough to ____",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Chillin like a ____ yeah ra ra ra",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Keep it movin' like my ____ up",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Mona Lisa kinda ____",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "____ on my wrist yeah I like it like this",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "And I'm nice with the ____ if you know what I mean",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        songId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        songId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "What can we ____",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "But I don't ____, I'll do it over and over",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "We are the ____ girls",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "No love ____, no X and O's",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Didn't wanna be a ____, I'm priceless",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "A ____ not even on my list",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "____ is a drug that I quit",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "No ____ could help when I'm lovesick",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Yeah we were born to be ____",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "But we're ____ looking for love.",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        songId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        songId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
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
