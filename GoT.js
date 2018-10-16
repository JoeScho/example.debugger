const whiteWalker = true
let runAway = false;

if (whiteWalker) {
  runAway = true;
}

debugger

const fight = () => ({
  targaryen: Math.floor(Math.random() * 100),
  stark: Math.floor(Math.random() * 100),
  whiteWalker: Math.floor(Math.random() * 100),
  lannister: Math.floor(Math.random() * 100)
});

const whoGetsTheThrone = houses => {
  const fightValues = Object.values(houses);
  const winnerValue = Math.max(...fightValues);
  debugger
  return Object.keys(houses).find(x => houses[x] === winnerValue);
};

console.log(whoGetsTheThrone(fight()));