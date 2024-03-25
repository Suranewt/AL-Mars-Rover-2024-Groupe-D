"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Orientation_1 = require("../domain/Orientation");
const RoverBuilder_1 = require("./utilities/RoverBuilder");
describe(`Un rover peut avancer`, () => {
    test(`ETANT DONNE un rover dirigé vers le NORD, ` +
        `QUAND il avance d'une case ` +
        `ALORS sa position y augmente d'autant`, () => {
        const ROVER_INIT = RoverBuilder_1.RoverBuilder.default();
        let roverFinal = RoverBuilder_1.RoverBuilder.default();
        roverFinal = roverFinal.avancer();
        expect(roverFinal.position.y).toEqual(ROVER_INIT.position.y + 1);
    });
    test(`ETANT DONNE un rover dirigé vers le SUD, ` +
        `QUAND il avance de 1 case ` +
        `ALORS sa position y diminue d'autant`, () => {
        const ROVER_INIT = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Sud)
            .build();
        let roverFinal = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Sud)
            .build();
        roverFinal = roverFinal.avancer();
        expect(roverFinal.position.y).toEqual(ROVER_INIT.position.y - 1);
    });
    test(`ETANT DONNE un rover dirigé vers l'EST, ` +
        `QUAND il avance de 1 case ` +
        `ALORS sa position x augmente d'autant`, () => {
        const ROVER_INIT = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Est)
            .build();
        let roverFinal = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Est)
            .build();
        roverFinal = roverFinal.avancer();
        expect(roverFinal.position.x).toEqual(ROVER_INIT.position.x + 1);
    });
    test(`ETANT DONNE un rover dirigé vers l'OUEST, ` +
        `QUAND il avance de 1 case ` +
        `ALORS sa position x diminue d'autant`, () => {
        const ROVER_INIT = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Ouest)
            .build();
        let roverFinal = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Ouest)
            .build();
        roverFinal = roverFinal.avancer();
        expect(roverFinal.position.x).toEqual(ROVER_INIT.position.x - 1);
    });
    test(`ETANT DONNE un rover dirigé vers le NORD, ` +
        `QUAND il recule de 1 case ` +
        `ALORS il doit être à la même position qu'un Rover dirigé Sud qui avance d'une case`, () => {
        let roverInitial = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Nord)
            .build();
        let roverFinal = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Sud)
            .build();
        roverInitial = roverInitial.avancer();
        roverFinal = roverFinal.reculer();
        expect(roverFinal.position).toEqual(roverInitial.position);
    });
});
describe(`Un rover peut reculer`, () => {
    test(`ETANT DONNE un rover dirigé vers le NORD, ` +
        `QUAND il recule de 1 case ` +
        `ALORS position y diminue d'autant`, () => {
        const ROVER_INIT = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Nord)
            .build();
        let roverFinal = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Nord)
            .build();
        roverFinal = roverFinal.reculer();
        expect(roverFinal.position.y).toEqual(ROVER_INIT.position.y - 1);
    });
    test(`ETANT DONNE un rover dirigé vers le SUD, ` +
        `QUAND il recule de 1 case ` +
        `ALORS position y augmente d'autant`, () => {
        const ROVER_INIT = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Sud)
            .build();
        let roverFinal = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Sud)
            .build();
        roverFinal = roverFinal.reculer();
        expect(roverFinal.position.y).toEqual(ROVER_INIT.position.y + 1);
    });
    test(`ETANT DONNE un rover dirigé vers l'EST, ` +
        `QUAND il recule de 1 case ` +
        `ALORS position x diminue d'autant`, () => {
        const ROVER_INIT = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Est)
            .build();
        let roverFinal = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Est)
            .build();
        roverFinal = roverFinal.reculer();
        expect(roverFinal.position.x).toEqual(ROVER_INIT.position.x - 1);
    });
    test(`ETANT DONNE un rover dirigé vers l'OUEST, ` +
        `QUAND il recule de 1 case ` +
        `ALORS position x augmente d'autant`, () => {
        const ROVER_INIT = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Ouest)
            .build();
        let roverFinal = new RoverBuilder_1.RoverBuilder()
            .withOrientation(Orientation_1.Orientation.Ouest)
            .build();
        roverFinal = roverFinal.reculer();
        expect(roverFinal.position.x).toEqual(ROVER_INIT.position.x + 1);
    });
    describe(`Un Rover peut effectuer des rotations`, () => {
        test(`ETANT DONNE un Rover orienté vers le NORD, ` +
            `QUAND il tourne à droite, ` +
            `ALORS il effectue une rotation horaire et se trouve orienté vers l'EST`, () => {
            let roverInit = RoverBuilder_1.RoverBuilder.default();
            roverInit = roverInit.tournerDroite();
            expect(roverInit.orientation).toBe(Orientation_1.Orientation.Est);
        });
        test(`ETANT DONNE un Rover orienté vers le NORD, ` +
            `QUAND il tourne à gauche, ` +
            `ALORS il effectue une rotation anti-horaire et se trouve orienté vers l'OUEST`, () => {
            let roverInit = RoverBuilder_1.RoverBuilder.default();
            roverInit = roverInit.tournerGauche();
            expect(roverInit.orientation).toBe(Orientation_1.Orientation.Ouest);
        });
        test(`ETANT DONNE un Rover orienté vers le NORD, ` +
            `QUAND il tourne à 2 fois à gauche, ` +
            `ALORS il doit avoir la même orientation qu'un Rover orienté initialement vers le Nord et qui tourne 2 fois à droite`, () => {
            let roverInit = RoverBuilder_1.RoverBuilder.default();
            let roverFinal = RoverBuilder_1.RoverBuilder.default();
            roverInit = roverInit.tournerGauche().tournerGauche();
            roverFinal = roverFinal.tournerDroite().tournerDroite();
            expect(roverInit.orientation).toBe(roverFinal.orientation);
        });
    });
});
//# sourceMappingURL=mouvements.test.js.map