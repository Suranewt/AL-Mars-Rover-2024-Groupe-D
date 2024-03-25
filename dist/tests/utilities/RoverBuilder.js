"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoverBuilder = void 0;
const Orientation_1 = require("../../domain/Orientation");
const Point_1 = require("../../domain/Point");
const Rover_1 = require("../../domain/Rover");
const PlaneteInfinie_1 = require("./PlaneteInfinie");
class RoverBuilder {
    constructor() {
        this._startingPosition = new Point_1.Point(0, 0);
        this._orientation = Orientation_1.Orientation.Nord;
        this._planete = new PlaneteInfinie_1.PlaneteInfinie();
    }
    /**
     * Retourne un Rover de position (0, 0), d'orientation Nord et sur une planète infinie
     * @returns Rover
     */
    static default() {
        return new RoverBuilder().build();
    }
    build() {
        return new Rover_1.Rover(this._startingPosition, this._orientation, this._planete);
    }
    withStartingPosition(position) {
        this._startingPosition = position;
        return this;
    }
    withOrientation(orientation) {
        this._orientation = orientation;
        return this;
    }
    withPlanete(planete) {
        this._planete = planete;
        return this;
    }
}
exports.RoverBuilder = RoverBuilder;
//# sourceMappingURL=RoverBuilder.js.map