const createHouse = (name, armySize, soldierAbility, noOfDragons) => ({
  name,
  armySize,
  soldierAbility,
  noOfDragons
});

const houses = [
  createHouse('Targaryen', 100000, 0.99, 2),
  createHouse('Stark', 20000, 0.91, 0),
  createHouse('White Walkers', 198000, 0.5, 1),
  createHouse('Lannister', 24000, 0.75, 0)
];

const battle = (house1, house2) => {
  console.log(`Battle time!\n${house1.name} vs ${house2.name}`);
  console.log(`${house1.name} is fighting with ${house1.armySize} soldiers with an ability of ${house1.soldierAbility}. They have ${house1.noOfDragons} dragons.`);
  console.log(`${house2.name} is fighting with ${house2.armySize} soldiers with an ability of ${house2.soldierAbility}. They have ${house2.noOfDragons} dragons.`);

  let h1ChanceOfWinning = house1.armySize * house1.soldierAbility;
  let h2ChanceOfWinning = house2.armySize * house2.soldierAbility;

  h1ChanceOfWinning = h1ChanceOfWinning * (1 - (0.1 * house2.noOfDragons));
  h2ChanceOfWinning = h2ChanceOfWinning * (1 - (0.1 * house1.noOfDragons));

  if (h1ChanceOfWinning > h2ChanceOfWinning) console.log(`The winner is ${house1.name}`);
  else if (h2ChanceOfWinning > h1ChanceOfWinning) console.log(`The winner is ${house2.name}`);
  else console.log('There are no winners in war...')
  console.log('');
};

battle(houses[0], houses[1]);
battle(houses[0], houses[2]);
battle(houses[0], houses[3]);
battle(houses[1], houses[2]);
battle(houses[1], houses[3]);
battle(houses[2], houses[3]);
