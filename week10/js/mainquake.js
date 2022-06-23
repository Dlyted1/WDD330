import QuakesController from './controllerquake.js';
import { getJSON, getLocation } from './utilitiesquake.js';

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-02-02' +
    `&latitude=-25.67` +
    `&longitude=-80` +
    `&maxradiuskm=500`

const json = getJSON(baseUrl).then(data => console.log(data));

getLocation().then(data => {
    const latitude = data.coords.latitude;
    const longitude = data.coords.longitude;
    const position = {
        lat: latitude,
        lon: longitude
    }
    console.log(position);
    const quakesController = new QuakesController("#quakeList", position);
    console.log(quakesController);
    quakesController.init();
    quakesController.getQuakesByRadius(500);
});