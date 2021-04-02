
export const getFish = () => fishCollection;

export const useHolyFish =() => {
  return [...holyFishArray]
}

const holyFishArray = [];
export const getMostHolyFish = () => {
  return fetch("http://localhost:8088/fishCollection")
    .then((response) => response.json())
    .then((data) => {
      for (const fish of data) {
        if (fish.inches % 3 === 0) {
          holyFishArray.push(fish);
        }
      }
    });
};

export const useSoldierFish = () => {
return [...soldiersArray]
}

const soldiersArray = [];
export const getSoldierFish = () => {
  return fetch("http://localhost:8088/fishCollection")
    .then((response) => response.json())
    .then((data) => {
      for (const fish of data) {
        if (fish.inches % 5 === 0 && fish.inches % 3 !== 0) {
          soldiersArray.push(fish);
        }
      }
    });
};

export const useUnworthyFish = () => {
  return [...unworthyArray]
}

const unworthyArray = [];
export const getUnworthy = () => {
  return fetch("http://localhost:8088/fishCollection")
    .then((response) => response.json())
    .then((data) => {
      for (const fish of data) {
        if (fish.inches % 5 !== 0 && fish.inches % 3 !== 0) {
          unworthyArray.push(fish);
        }
      }
    });
};
