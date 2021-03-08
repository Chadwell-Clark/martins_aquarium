console.log("main is loaded");

import { getMostHolyFish, getSoldierFish, getUnworthy } from "./fish/FishData.js";
import { FishList } from "./fish/FishList.js";
import { TipList } from "./tips/TipList.js";
import { LocationList } from "./locations/LocationList.js";
import { QuoteList } from "./quotes/QuoteList.js";




const addFishToDOM =(fishArray, heading) => {
    const DomTarget = document.querySelector("#fishList");
    
    // console.log('fishlist reference', DOMLocation);
    
    //3. Declare a variable to hold on to fish HTML representations
    let fishHTMLRepresentations = `<h2 class="fish-heading">${heading}</h2>
    <div class="fishSection">${fishHTMLRepresentations}</div>`;
    
    //4. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation
    fishArray.then((allfish) => {

        DomTarget.innerHTML +=  FishList(allFish);
    })
    }
    
    // console.log("fishHTMLRepresentations", fishHTMLRepresentations);


addFishToDOM(getMostHolyFish(), "Holy Fish");
addFishToDOM(getSoldierFish(), "Soldier Fish");
addFishToDOM(getUnworthy(), "Unworthy Fish");

const startAquarium = () => {
    addFishToDOM();
    TipList();
    LocationList();
    QuoteList();
}

startAquarium();



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