
//!      *****     Original      main.js     below    **********//

// console.log("main is loaded");

// import { FishList } from "./fish/FishList.js";
// import { TipList } from "./tips/TipList.js";
// import { LocationList } from "./locations/LocationList.js";
// import { QuoteList } from "./quotes/QuoteList.js";

// FishList();
// TipList();
// LocationList();
// QuoteList();


//!!!!!!!!        **      Original Above        **        !!!!
// //!!!****************  Refactor #2 Below      ********!!

console.log("main is loaded");
import { getMostHolyFish, getSoldierFish, getUnworthy, useHolyFish, useUnworthyFish, useSoldierFish} from "./fish/FishData.js";
import { FishList } from "./fish/FishList.js";
import { TipList } from "./tips/TipList.js";
import { LocationList } from "./locations/LocationList.js";
import { QuoteList } from "./quotes/QuoteList.js";


const showFishList = () => {
    getMostHolyFish()
    .then(()=> FishList(useHolyFish(), "Holy Fish")) 
    getSoldierFish()
    .then(() => FishList(useSoldierFish(), "Soldier Fish")); 
    getUnworthy()
    .then(()=> FishList(useUnworthyFish(), "Unworthy Fish"))

}

const startAquarium = () => {
    showFishList();
    TipList();
    LocationList();
    QuoteList();
}

startAquarium();
