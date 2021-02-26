import { Location } from "./Location.js";
import { getLocation } from "./LocationData";

export const locationList = () => {
    const allLocations = getLocation();
    const LocDOMLocation = document.querySelector("#locationList");
    let locHTML = "";
    for (const location of allLocations) {
        locHTML += Location(location);
    }
    LocDOMLocation += locHTML;
};