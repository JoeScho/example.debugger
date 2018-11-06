debugger

const targaryen = Math.floor(Math.random() * 100);
const stark = Math.floor(Math.random() * 100);
const whiteWalker = Math.floor(Math.random() * 100);
const lannister = Math.floor(Math.random() * 100);

const houses = {
  targaryen,
  stark,
  whiteWalker,
  lannister
};

const whoGetsTheThrone = houses => {
  const fightValues = Object.values(houses);
  const winnerValue = Math.max(...fightValues);
  debugger
  return Object.keys(houses).find(x => houses[x] === winnerValue);
};

console.log(whoGetsTheThrone(houses));