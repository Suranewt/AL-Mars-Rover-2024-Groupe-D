import { Orientation } from '../domain/Orientation';
import { Rover } from '../domain/Rover';
import { Point } from '../domain/Point';
import { PlaneteInfinie } from './utilities/PlaneteInfinie';
import { RoverBuilder } from './utilities/RoverBuilder';

describe(`Un rover peut avancer`, () => {
    test(
        `ETANT DONNE un rover dirigé vers le NORD, ` +
            `QUAND il avance d'une case ` +
            `ALORS sa position y augmente d'autant`,
        () => {
            const ROVER_INIT = RoverBuilder.default();
            let roverFinal = RoverBuilder.default();

            roverFinal = roverFinal.avancer();

            expect(roverFinal.position.y).toEqual(ROVER_INIT.position.y + 1);
        }
    );
    test(
        `ETANT DONNE un rover dirigé vers le SUD, ` +
            `QUAND il avance de 1 case ` +
            `ALORS sa position y diminue d'autant`,
        () => {
            const ROVER_INIT = new RoverBuilder()
                .withOrientation(Orientation.Sud)
                .build();
            let roverFinal = new RoverBuilder()
                .withOrientation(Orientation.Sud)
                .build();

            roverFinal = roverFinal.avancer();

            expect(roverFinal.position.y).toEqual(ROVER_INIT.position.y - 1);
        }
    );
    test(
        `ETANT DONNE un rover dirigé vers l'EST, ` +
            `QUAND il avance de 1 case ` +
            `ALORS sa position x augmente d'autant`,
        () => {
            const ROVER_INIT = new RoverBuilder()
                .withOrientation(Orientation.Est)
                .build();
            let roverFinal = new RoverBuilder()
                .withOrientation(Orientation.Est)
                .build();

            roverFinal = roverFinal.avancer();

            expect(roverFinal.position.x).toEqual(ROVER_INIT.position.x + 1);
        }
    );
    test(
        `ETANT DONNE un rover dirigé vers l'OUEST, ` +
            `QUAND il avance de 1 case ` +
            `ALORS sa position x diminue d'autant`,
        () => {
            const ROVER_INIT = new RoverBuilder()
                .withOrientation(Orientation.Ouest)
                .build();
            let roverFinal = new RoverBuilder()
                .withOrientation(Orientation.Ouest)
                .build();

            roverFinal = roverFinal.avancer();

            expect(roverFinal.position.x).toEqual(ROVER_INIT.position.x - 1);
        }
    );
});

describe(`Un rover peut reculer`, () => {
    test(
        `ETANT DONNE un rover dirigé vers le NORD, ` +
            `QUAND il recule de 1 case ` +
            `ALORS position y diminue d'autant`,
        () => {
            const ROVER_INIT = new RoverBuilder()
                .withOrientation(Orientation.Nord)
                .build();
            let roverFinal = new RoverBuilder()
                .withOrientation(Orientation.Nord)
                .build();

            roverFinal = roverFinal.reculer();

            expect(roverFinal.position.y).toEqual(ROVER_INIT.position.y - 1);
        }
    );
});
