"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RoverInterpreter_1 = require("./../app/RoverInterpreter");
const PlaneteToroidale_1 = require("./../domain/PlaneteToroidale");
const Orientation_1 = require("../domain/Orientation");
const Point_1 = require("../domain/Point");
const RoverBuilder_1 = require("./utilities/RoverBuilder");
const PlaneteAvecObstacle_1 = require("../domain/PlaneteAvecObstacle");
describe('Rover dépassant les limites de la planète', () => {
    let planeteToroidale;
    beforeEach(() => {
        planeteToroidale = new PlaneteToroidale_1.PlaneteToroidale(100);
    });
    test('Rover dépasse le bord nord', () => {
        let rover = new RoverBuilder_1.RoverBuilder()
            .withStartingPosition(new Point_1.Point(0, 99))
            .withPlanete(planeteToroidale)
            .build();
        rover = rover.avancer();
        expect(rover.position.x).toBe(0);
        expect(rover.position.y).toBe(0);
    });
    test('Rover dépasse le bord est', () => {
        let rover = new RoverBuilder_1.RoverBuilder()
            .withStartingPosition(new Point_1.Point(99, 0))
            .withOrientation(Orientation_1.Orientation.Est)
            .withPlanete(planeteToroidale)
            .build();
        rover = rover.avancer();
        expect(rover.position.x).toBe(0);
        expect(rover.position.y).toBe(0);
    });
    test('Rover dépasse le bord sud', () => {
        let rover = new RoverBuilder_1.RoverBuilder()
            .withStartingPosition(new Point_1.Point(0, 0))
            .withOrientation(Orientation_1.Orientation.Sud)
            .withPlanete(planeteToroidale)
            .build();
        rover = rover.avancer();
        expect(rover.position.x).toBe(0);
        expect(rover.position.y).toBe(99);
    });
    test('Rover dépasse le bord ouest', () => {
        let rover = new RoverBuilder_1.RoverBuilder()
            .withStartingPosition(new Point_1.Point(0, 0))
            .withOrientation(Orientation_1.Orientation.Ouest)
            .withPlanete(planeteToroidale)
            .build();
        rover = rover.avancer();
        expect(rover.position.x).toBe(99);
        expect(rover.position.y).toBe(0);
    });
});
describe('Un Rover sur une planète avec un obstacle', () => {
    test('ETANT DONNE un Rover sur une planète avec un obstacle ' +
        `QUAND le Rover essaye d'avancer sur l'obstacle, ` +
        `ALORS le Rover reste sur place et arrête la suite des commandes`, () => {
        const PLANETE_TOROIDALE = new PlaneteToroidale_1.PlaneteToroidale(10);
        const OBSTACLE = new Point_1.Point(0, 2);
        const planeteAvecObstacle = new PlaneteAvecObstacle_1.PlaneteAvecObstacle(PLANETE_TOROIDALE, OBSTACLE);
        let roverTeste = new RoverBuilder_1.RoverBuilder()
            .withPlanete(planeteAvecObstacle)
            .build();
        let roverTemoin = new RoverBuilder_1.RoverBuilder()
            .withPlanete(planeteAvecObstacle)
            .withStartingPosition(new Point_1.Point(0, 1))
            .build();
        const roverInterpretor = new RoverInterpreter_1.RoverInterpretor(roverTeste);
        roverTeste = roverInterpretor.executer('AAADAAA');
        expect(roverTeste.position).toEqual(roverTemoin.position);
    });
    test('ETANT DONNE un Rover sur une planète avec un obstacle ' +
        `QUAND le Rover essaye de reculer sur l'obstacle, ` +
        `ALORS le Rover reste sur place et arrête la suite des commandes`, () => {
        const PLANETE_TOROIDALE = new PlaneteToroidale_1.PlaneteToroidale(10);
        const OBSTACLE = new Point_1.Point(0, 2);
        const planeteAvecObstacle = new PlaneteAvecObstacle_1.PlaneteAvecObstacle(PLANETE_TOROIDALE, OBSTACLE);
        let roverTeste = new RoverBuilder_1.RoverBuilder()
            .withPlanete(planeteAvecObstacle).withOrientation(Orientation_1.Orientation.Sud)
            .build();
        let roverTemoin = new RoverBuilder_1.RoverBuilder()
            .withPlanete(planeteAvecObstacle)
            .withStartingPosition(new Point_1.Point(0, 1))
            .build();
        const roverInterpretor = new RoverInterpreter_1.RoverInterpretor(roverTeste);
        roverTeste = roverInterpretor.executer('RRRDAAA');
        expect(roverTeste.position).toEqual(roverTemoin.position);
    });
});
