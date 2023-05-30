import { autos, animales } from "./datos.js";
import _ from "lodash";

let autosUnicos = _.uniq(autos);
console.log(autosUnicos);

//* Esto se podría hacer trivialmente con _filter, pero como lo piden con _find... 
let animalesSalvajes = [];
for(let i = 0, j; i < animales.length; i++) {
    animalesSalvajes.push(_.find(animales, { tipo: "salvaje"}, i));
    j = _.indexOf(animales, animalesSalvajes[animalesSalvajes.length-1], i);
    if(j > 0) {
        i = j;
    }
}
animalesSalvajes.pop();
console.log(animalesSalvajes);