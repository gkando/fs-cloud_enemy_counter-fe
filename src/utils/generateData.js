const nanoid = require("nanoid").nanoid;

function randomNumber(min = 1, max = 200) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateData(count = 10, repeat = true) {
  let players = [];
  for (var i = 0; i < count; i++) {
    players.push({ playerId: nanoid(), kills: randomNumber() });
  }

  if (repeat) {
    //take last 2 player ids and assign themm to first 2 entries for repeat players in db
    players.slice(8, 10).forEach((e, idx) => {
      players[idx].playerId = e.playerId;
    });
  }

  return JSON.stringify(players);
}
export default generateData;
