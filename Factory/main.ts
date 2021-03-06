/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  06.01.2017
 * Time: 17:18
 */


'use strict';

import { EngineryFactorySovetUnion } from './enginery/EngineryFactorySovetUnion';
import { EngineryFactoryGermany } from './enginery/EngineryFactoryGermany';


let factorySovetUnion: EngineryFactorySovetUnion = new EngineryFactorySovetUnion();
let factoryGermany: EngineryFactoryGermany = new EngineryFactoryGermany();

let tankUSSR = factorySovetUnion.createTank();
console.log(tankUSSR.getDescription()); // T34 speed: 75 power: 100

let aircraftUSSR = factorySovetUnion.createAircraft();
console.log(aircraftUSSR.getDescription()); // Mig1 speed: 650 altitude: 2800

let tankGermany = factoryGermany.createTank();
console.log(tankGermany.getDescription()); // Panzer speed: 60 power: 120