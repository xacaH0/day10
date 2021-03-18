function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },

      gold: true,
    },
    002: {
      artist: "Idddk",
      title: "Idk",
      release_year: 1969,
      id: 1234,
      formats: {
        1: "XD",
        2: "SD",
        3: "DD",
      },
    },
  };
  return myMusic;
}
myFunction()[2];
module.exports = myFunction;
