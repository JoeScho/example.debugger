const needle = require('needle');

const a = 'foo';

const fn = async () => {
  const jonSnow = await needle('post', 'https://anapoficeandfire.com/api/characters/583');
 
  console.log(jonSnow.alases);
}

fn();