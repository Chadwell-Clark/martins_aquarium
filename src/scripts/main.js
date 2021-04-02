// console.log("main is loaded");

// import { getMostHolyFish, getSoldierFish, getUnworthy } from "./fish/FishData.js";
// import { FishList } from "./fish/FishList.js";
// import { TipList } from "./tips/TipList.js";
// import { LocationList } from "./locations/LocationList.js";
// import { QuoteList } from "./quotes/QuoteList.js";




// const addFishToDOM =(fishArray, heading) => {
//     const DomTarget = document.querySelector("#fishList");
    
//     // console.log('fishlist reference', DOMLocation);
    
//     //3. Declare a variable to hold on to fish HTML representations
//     // let fishHTMLRepresentations = ""
//     let fishHTMLRepresentations = `<h2 class="fish-heading">${heading}</h2>
//     <div class="fishSection">${fishArray}</div>`;
    
    
//     //4. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation
//     fishArray.then((allfish) => {

//         DomTarget.innerHTML +=  FishList(theseFish);
//     })
//     }
    
//     // console.log("fishHTMLRepresentations", fishHTMLRepresentations);


// addFishToDOM(getMostHolyFish(), "Holy Fish");
// addFishToDOM(getSoldierFish(), "Soldier Fish");
// addFishToDOM(getUnworthy(), "Unworthy Fish");

// const startAquarium = () => {
//     showFishList();
//     TipList();
//     LocationList();
//     QuoteList();
// }

// startAquarium();



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
import { FishList, addFishToDOM } from "./fish/FishList.js";
import { TipList } from "./tips/TipList.js";
import { LocationList } from "./locations/LocationList.js";
import { QuoteList } from "./quotes/QuoteList.js";

//  const allfish = [...getMostHolyFish(), ...getSoldierFish(), ...getUnworthy()];

const showFishList = () => {
    // const DOMTarget = document.querySelector("#fishList");
    // allfish.then((allFish) => {
    //     DOMTarget.innerHTML = FishList(allFish);
    // })
    getMostHolyFish()
    .then(()=> addFishToDOM(useHolyFish(), "Holy Fish")) 
    getSoldierFish()
    .then(() => addFishToDOM(useSoldierFish(), "Soldier Fish")); 
    getUnworthy()
    .then(()=> addFishToDOM(useUnworthyFish(), "Unworthy Fish"))

    // addFishToDOM(getMostHolyFish(), "Holy Fish");
    // addFishToDOM(getSoldierFish(), "Soldier Fish");
    // addFishToDOM(getUnworthy(), "Unworthy Fish");
}

const startAquarium = () => {
    showFishList();
    TipList();
    LocationList();
    QuoteList();
}

startAquarium();