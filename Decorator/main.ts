/**
 * Created by PhpStorm.
 * Author: Max Ulyanov
 * Project: Design-Patterns
 * Date:  05.01.2017
 * Time: 22:13
 */


'use strict';

import { Diablo } from './pizza/Diablo';
import { Pepperoni } from './pizza/Pepperoni';

import { Sauce } from './additions/Sauce';
import { Cheese } from './additions/Cheese';

let diablo = new Diablo();
console.log(diablo.getDescription() + ' price: ' + diablo.getPrice()); // Pizza diablo price: 450

let pepperoni = new Pepperoni();
console.log(pepperoni.getDescription() + ' price: ' + pepperoni.getPrice()); // Pizza Pepperoni price: 300

let peppetoniWithAddition = new Sauce(new Cheese(new Pepperoni()));
console.log(peppetoniWithAddition.getDescription() + ' price: ' + peppetoniWithAddition.getPrice()); // Pizza Pepperoni with cheese with sauce price: 370