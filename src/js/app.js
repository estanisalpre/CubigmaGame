//Imports
import { cubeRotation } from "./functions.js";
import { lightGame } from "./functions.js";
import { verifyNumber } from "./functions.js";
import { enigmaCesar } from "./functions.js";
import { controlSoundEffect } from "./functions.js";
import { finalAnimation } from "./functions.js";
import { controlPapyrus } from "./functions.js";

//DOM
document.addEventListener('DOMContentLoaded', () =>{

    cubeRotation();
    lightGame();
    controlPapyrus();
    verifyNumber();
    enigmaCesar();
    controlSoundEffect();
    finalAnimation();
    
});
