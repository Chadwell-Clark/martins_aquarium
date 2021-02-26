import { Tip } from "./Tip.js";
import { getTip } from "./TipData.js";


export const TipList = () => {
    const alltips = getTip();
    const TipDOMLocation = document.querySelector("#tipList");
    let tipHTML = "";
    for (const onetip of alltips) {
        tipHTML += Tip(onetip);
    }
    // console.log(tipHTML);
    TipDOMLocation.innerHTML += tipHTML;
};