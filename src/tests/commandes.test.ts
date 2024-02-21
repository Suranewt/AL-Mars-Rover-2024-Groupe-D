import { Orientation } from '../app/Orientation';
import { Point } from '../app/Point';
import { Rover } from '../app/Rover';
import { RoverExecutor } from '../app/RoverExecutor';
import { RoverBuilder } from './utilities/RoverBuilder';

describe(`Un Rover exécute des commandes simples`, () => {
    test(`La commande 'A' fait avancer le Rover`, () => {
        let ROVER_TEMOIN: Rover = RoverBuilder.default();
        let ROVER_TESTE: Rover = RoverBuilder.default();
        const roverExecutor: RoverExecutor = new RoverExecutor(ROVER_TESTE);

        ROVER_TESTE = roverExecutor.execute('A');
        ROVER_TEMOIN = ROVER_TEMOIN.avancer();

        expect(ROVER_TESTE.position).toEqual(ROVER_TEMOIN.position);
    });

    test(`La commande 'R' fait reculer le Rover`, () => {
        let ROVER_TEMOIN: Rover = RoverBuilder.default();
        let ROVER_TESTE: Rover = RoverBuilder.default();
        const roverExecutor: RoverExecutor = new RoverExecutor(ROVER_TESTE);

        ROVER_TESTE = roverExecutor.execute('R');
        ROVER_TEMOIN = ROVER_TEMOIN.reculer();

        expect(ROVER_TESTE.position).toEqual(ROVER_TEMOIN.position);
    });

    test(`La commande 'D' fait tourner l'orientation du Rover de 90° vers la droite`, () => {
        let ROVER_TEMOIN: Rover = RoverBuilder.default();
        let ROVER_TESTE: Rover = RoverBuilder.default();
        const roverExecutor: RoverExecutor = new RoverExecutor(ROVER_TESTE);

        ROVER_TESTE = roverExecutor.execute('D');
        ROVER_TEMOIN = ROVER_TEMOIN.tournerDroite();

        expect(ROVER_TESTE.orentation).toEqual(ROVER_TEMOIN.orentation);
    });

    test(`La commande 'G' fait tourner l'orientation du Rover de 90° vers la gauche`, () => {
        let ROVER_TEMOIN: Rover = RoverBuilder.default();
        let ROVER_TESTE: Rover = RoverBuilder.default();
        const roverExecutor: RoverExecutor = new RoverExecutor(ROVER_TESTE);

        ROVER_TESTE = roverExecutor.execute('G');
        ROVER_TEMOIN = ROVER_TEMOIN.tournerGauche();

        expect(ROVER_TESTE.orentation).toEqual(ROVER_TEMOIN.orentation);
    });

    describe(`Un Rover exécute des commandes multiples`, () => {
        test(
            `ETANT DONNEE un Rover en position (0,0) orienté vers l'Est, ` +
                `QUAND il avance 2 fois puis tourne vers la gauche, recule 1 fois puis tourne 2 fois vers la droite, ` +
                `ALORS il doit se retrouver dans le même état qu'un Rover initialisé à (2, -1) orienté Sud`,
            () => {
                const POSITION_TEMOIN = new Point(2, -1);
                let ROVER_TEMOIN: Rover = new RoverBuilder()
                    .withStartingPosition(POSITION_TEMOIN)
                    .withOrientation(Orientation.Sud)
                    .build();
                let ROVER_TESTE: Rover = new RoverBuilder()
                    .withOrientation(Orientation.Est)
                    .build();
                const roverExecutor: RoverExecutor = new RoverExecutor(
                    ROVER_TESTE
                );

                ROVER_TESTE = roverExecutor.execute('AAGRDD');

                expect(ROVER_TESTE.position).toEqual(ROVER_TEMOIN.position);
                expect(ROVER_TESTE.orentation).toEqual(ROVER_TEMOIN.orentation);
            }
        );
    });
});
