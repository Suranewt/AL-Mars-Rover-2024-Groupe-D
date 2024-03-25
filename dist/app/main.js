"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RoverBuilder_1 = require("../tests/utilities/RoverBuilder");
let ROVER = RoverBuilder_1.RoverBuilder.default();
ROVER = ROVER.avancer();
ROVER = ROVER.tournerDroite();
ROVER = ROVER.reculer();
