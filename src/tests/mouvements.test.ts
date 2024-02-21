import { Orientation } from '../app/Orientation';
import { Rover } from './../app/Rover';
import { Point } from '../app/Point';

describe(`Un rover peut avancer`, () => {
    test(
        `ETANT DONNE un rover dirigé vers le NORD, ` +
            `QUAND il avance d'une case ` +
            `ALORS sa position y augmente d'autant`,
        () => {
            const POSITION = new Point(0, 0);
            const ROVER_INIT = new Rover(POSITION, Orientation.Nord);
            let ROVER_FINAL = new Rover(POSITION, Orientation.Nord);

            ROVER_FINAL = ROVER_FINAL.avancer();

            expect(ROVER_FINAL.position.posY).toEqual(
                ROVER_INIT.position.posY + 1
            );
        }
    );
    test(
        `ETANT DONNE un rover dirigé vers le SUD, ` +
            `QUAND il avance de 1 case ` +
            `ALORS sa position y diminue d'autant`,
        () => {
            const POSITION = new Point(0, 0);
            const ROVER_INIT = new Rover(POSITION, Orientation.Sud);
            let ROVER_FINAL = new Rover(POSITION, Orientation.Sud);

            ROVER_FINAL = ROVER_FINAL.avancer();

            expect(ROVER_FINAL.position.posY).toEqual(
                ROVER_INIT.position.posY - 1
            );
        }
    );
    test(
        `ETANT DONNE un rover dirigé vers l'EST, ` +
            `QUAND il avance de 1 case ` +
            `ALORS sa position x augmente d'autant`,
        () => {
            const POSITION = new Point(0, 0);
            const ROVER_INIT = new Rover(POSITION, Orientation.Est);
            let ROVER_FINAL = new Rover(POSITION, Orientation.Est);

            ROVER_FINAL = ROVER_FINAL.avancer();

            expect(ROVER_FINAL.position.posX).toEqual(
                ROVER_INIT.position.posX + 1
            );
        }
    );
    test(
        `ETANT DONNE un rover dirigé vers l'OUEST, ` +
            `QUAND il avance de 1 case ` +
            `ALORS sa position x diminue d'autant`,
        () => {
            const POSITION = new Point(0, 0);
            const ROVER_INIT = new Rover(POSITION, Orientation.Ouest);
            let ROVER_FINAL = new Rover(POSITION, Orientation.Ouest);

            ROVER_FINAL = ROVER_FINAL.avancer();

            console.log('ROVER_FINAL => ', ROVER_FINAL);

            expect(ROVER_FINAL.position.posX).toEqual(
                ROVER_INIT.position.posX - 1
            );
        }
    );
});

describe(`Un rover peut reculer`, () => {
    test(
        `ETANT DONNE un rover dirigé vers le NORD, ` +
            `QUAND il recule de 1 case ` +
            `ALORS position y diminue d'autant`,
        () => {
            const POSITION = new Point(0, 0);
            const ROVER_INIT = new Rover(POSITION, Orientation.Nord);
            let ROVER_FINAL = new Rover(POSITION, Orientation.Nord);

            ROVER_FINAL = ROVER_FINAL.reculer();

            expect(ROVER_FINAL.position.posY).toEqual(
                ROVER_INIT.position.posY - 1
            );
        }
    );
});
