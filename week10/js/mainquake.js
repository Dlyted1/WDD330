// import QuakesController from './controllerquake.js';
// import { getJSON, getLocation } from './utilitiesquake.js';



    import QuakesController from './controllerquakes.js';
    import buildNavigation from './routing.js';
    
    const navElement = document.getElementById('mainNav');
    buildNavigation(navElement);
    
    // const myQuakesController = new QuakesController('#quakeList');
    // myQuakesController.getQuakesByRadius();