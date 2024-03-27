import worldMaps from '../data/world-maps.js';
import continentMaps from '../data/continent-maps.js';
import countryMaps from '../data/country-maps.js';
import categories from '../data/categories.js';

export const getRandomItemWithProbability = (items) => {
  const totalProbability = items.reduce(
    (acc, item) => acc + item.probability,
    0
  );
  const randomValue = Math.random() * totalProbability;

  let cumulativeProbability = 0;
  for (const item of items) {
    cumulativeProbability += item.probability;
    if (randomValue <= cumulativeProbability) {
      return item;
    }
  }
};

export const selectMap = () => {
  const category = getRandomItemWithProbability(categories);
  let map;

  switch (category.name) {
    case 'world':
      map = getRandomItemWithProbability(worldMaps);
      break;
    case 'continent':
      map = getRandomItemWithProbability(continentMaps);
      break;
    case 'country':
      map = getRandomItemWithProbability(countryMaps);
      break;
  }

  const gameSetting = getRandomItemWithProbability(map.gameSettings);

  const result = {
    category: category.name,
    mapName: map.name,
    map: map.url,
    mode: gameSetting.mode,
    timeLimit: gameSetting.duration
  };

  return result;
};
