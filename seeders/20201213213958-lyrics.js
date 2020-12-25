'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('lyrics', null, { truncate: true, cascade: true, restartIdentity: true });

    const bulkLyrics = await queryInterface.bulkInsert("lyrics", [
      {
        questionMessage: "Make 'em whistle like a _____. Bomb, bomb.",
        questionAnswer: "missle",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Every time I show up, _____ up, uh.",
        questionAnswer: "blow",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "24, ___",
        questionAnswer: "365",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "So hot, so ____.",
        questionAnswer: "hot",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Can you ____ that?",
        questionAnswer: "feel",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Just whitstle to my ____.",
        questionAnswer: "heart",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Every day, ____ day.",
        questionAnswer: "all",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Like a ____ island.",
        questionAnswer: "desert",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "This ____ got me feeling like",
        questionAnswer: "beat",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Make 'em ____ like a missle.",
        questionAnswer: "whistle",
        songId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "BLACKPINK in your ____.",
        questionAnswer: "area",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Been a bad ____, I know I am.",
        questionAnswer: "girl",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "And I'm so hot, I need a ____.",
        questionAnswer: "fan",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "I don't want a boy, I need a ____.",
        questionAnswer: "man",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Bottle full of ____.",
        questionAnswer: "henny",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "____ to the pink.",
        questionAnswer: "black",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Yah yah yah ____!",
        questionAnswer: "boombayah",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "____ finger up, F U pay me",
        questionAnswer: "middle",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "90's ____, I pump up the jam.",
        questionAnswer: "baby",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "I know you wanna ____",
        questionAnswer: "touch",
        songId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        questionAnswer: "Coming Soon!",
        songId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        questionAnswer: "Coming Soon!",
        songId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Won't you set me ___?",
        questionAnswer: "free",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Imma fall in ___ baby",
        questionAnswer: "love",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Call me pretty and ____",
        questionAnswer: "nasty",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Cause ___ gonna get it",
        questionAnswer: "we",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "We 'gon double the ____ on them Woo!",
        questionAnswer: "stack",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "I be the ____",
        questionAnswer: "Bonnie",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "and you be my ____",
        questionAnswer: "Clyde",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "We ____ or die",
        questionAnswer: "ride",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "One, Two, ____",
        questionAnswer: "three",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "BLACKPINK in ____ area",
        questionAnswer: "your",
        songId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "____ ah yeah, ah yeah",
        questionAnswer: "BLACKPINK",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "You hokae I’m ____",
        questionAnswer: "foxy",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Oh ____ til' I do what I",
        questionAnswer: "wait",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "____ you with that ddu-du, ddu-du, du",
        questionAnswer: "hit",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "BLACKPINK 4 ____",
        questionAnswer: "way",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "When the ____ drop it's another banger",
        questionAnswer: "bass",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "What ____ gonna do",
        questionAnswer: "you",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "When I come ____ through with that",
        questionAnswer: "come",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "With that ____ uh, uh huh",
        questionAnswer: "that",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "tteugeoweo tteugeoweo tteugeoweo like ____",
        questionAnswer: "fire",
        songId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        questionAnswer: "Coming Soon!",
        songId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        questionAnswer: "Coming Soon!",
        songId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        questionAnswer: "Coming Soon!",
        songId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "BLACKPINK in your ____",
        questionAnswer: "area",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Here I come ____ in the door",
        questionAnswer: "kick",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Look at me, look at ____",
        questionAnswer: "you",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "LET'S ____ THIS LOVE!",
        questionAnswer: "KILL",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Feelin' like a ____",
        questionAnswer: "sinner",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "He said you look ____",
        questionAnswer: "crazy",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Thank you baby, I owe it all to ____",
        questionAnswer: "you",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Got me all ____ up",
        questionAnswer: "messed",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "You plus me ____ can be dangerous",
        questionAnswer: "sadly",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "We all commit to love, that makes you ____",
        questionAnswer: "cry",
        songId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        questionAnswer: "Coming Soon!",
        songId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        questionAnswer: "Coming Soon!",
        songId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        questionAnswer: "Coming Soon!",
        songId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        questionAnswer: "Coming Soon!",
        songId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Come a little closer cause you looking ____",
        questionAnswer: "thirsty",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Look so good yeah look so ____",
        questionAnswer: "sweet",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "____ on my wrist so he call me ice cream",
        questionAnswer: "diamonds",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Ice cream chillin chillin, Ice cream ____",
        questionAnswer: "chillin",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "You're the ____ piece just stay on top of me",
        questionAnswer: "Coming Soon!",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Looking good enough to ____",
        questionAnswer: "Coming Soon!",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Chillin like a ____ yeah ra ra ra",
        questionAnswer: "Coming Soon!",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Keep it movin' like my ____ up",
        questionAnswer: "Coming Soon!",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Mona Lisa kinda ____",
        questionAnswer: "Coming Soon!",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "____ on my wrist yeah I like it like this",
        questionAnswer: "Coming Soon!",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "And I'm nice with the ____ if you know what I mean",
        questionAnswer: "Coming Soon!",
        songId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        questionAnswer: "Coming Soon!",
        songId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        questionAnswer: "Coming Soon!",
        songId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "What can we ____",
        questionAnswer: "Coming Soon!",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "But I don't ____, I'll do it over and over",
        questionAnswer: "Coming Soon!",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "We are the ____ girls",
        questionAnswer: "Coming Soon!",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "No love ____, no X and O's",
        questionAnswer: "Coming Soon!",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Didn't wanna be a ____, I'm priceless",
        questionAnswer: "Coming Soon!",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "A ____ not even on my list",
        questionAnswer: "Coming Soon!",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "____ is a drug that I quit",
        questionAnswer: "Coming Soon!",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "No ____ could help when I'm lovesick",
        questionAnswer: "Coming Soon!",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Yeah we were born to be ____",
        questionAnswer: "Coming Soon!",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "But we're ____ looking for love.",
        questionAnswer: "Coming Soon!",
        songId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        questionAnswer: "Coming Soon!",
        songId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        questionAnswer: "Coming Soon!",
        songId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        questionMessage: "Coming Soon!",
        questionAnswer: "Coming Soon!",
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
