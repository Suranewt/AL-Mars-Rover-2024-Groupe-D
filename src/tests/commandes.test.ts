import { Orientation } from '../domain/Orientation';
import { Point } from '../domain/Point';
import { Rover } from '../domain/Rover';
import { RoverInterpretor } from '../app/RoverInterpreter';
import { RoverBuilder } from './utilities/RoverBuilder';

describe(`Un Rover exécute des commandes simples`, () => {
    test(`La commande 'A' fait avancer le Rover`, () => {
        let roverTemoin: Rover = RoverBuilder.default();
        let roverTeste: Rover = RoverBuilder.default();
        const roverExecutor: RoverInterpretor = new RoverInterpretor(
            roverTeste
        );

        roverTeste = roverExecutor.executer('A');
        roverTemoin = roverTemoin.avancer();

        expect(roverTeste.position).toEqual(roverTemoin.position);
    });

    test(`La commande 'R' fait reculer le Rover`, () => {
        let roverTemoin: Rover = RoverBuilder.default();
        let roverTeste: Rover = RoverBuilder.default();
        const roverExecutor: RoverInterpretor = new RoverInterpretor(
            roverTeste
        );

        roverTeste = roverExecutor.executer('R');
        roverTemoin = roverTemoin.reculer();

        expect(roverTeste.position).toEqual(roverTemoin.position);
    });

    test(`La commande 'D' fait tourner l'orientation du Rover de 90° vers la droite`, () => {
        let roverTemoin: Rover = RoverBuilder.default();
        let roverTeste: Rover = RoverBuilder.default();
        const roverExecutor: RoverInterpretor = new RoverInterpretor(
            roverTeste
        );

        roverTeste = roverExecutor.executer('D');
        roverTemoin = roverTemoin.tournerDroite();

        expect(roverTeste.orientation).toEqual(roverTemoin.orientation);
    });

    test(`La commande 'G' fait tourner l'orientation du Rover de 90° vers la gauche`, () => {
        let roverTemoin: Rover = RoverBuilder.default();
        let roverTeste: Rover = RoverBuilder.default();
        const roverExecutor: RoverInterpretor = new RoverInterpretor(
            roverTeste
        );

        roverTeste = roverExecutor.executer('G');
        roverTemoin = roverTemoin.tournerGauche();

        expect(roverTeste.orientation).toEqual(roverTemoin.orientation);
    });

    describe(`Un Rover exécute des commandes multiples`, () => {
        test(
            `ETANT DONNEE un Rover en position (0,0) orienté vers l'Est, ` +
                `QUAND il avance 2 fois puis tourne vers la gauche, recule 1 fois puis tourne 2 fois vers la droite, ` +
                `ALORS il doit se retrouver dans le même état qu'un Rover initialisé à (2, -1) orienté Sud`,
            () => {
                const POSITION_TEMOIN = new Point(2, -1);
                let roverTemoin: Rover = new RoverBuilder()
                    .withStartingPosition(POSITION_TEMOIN)
                    .withOrientation(Orientation.Sud)
                    .build();
                let roverTeste: Rover = new RoverBuilder()
                    .withOrientation(Orientation.Est)
                    .build();
                const roverExecutor: RoverInterpretor = new RoverInterpretor(
                    roverTeste
                );

                roverTeste = roverExecutor.executer('AAGRDD');

                expect(roverTeste.position).toEqual(roverTemoin.position);
                expect(roverTeste.orientation).toEqual(roverTemoin.orientation);
            }
        );
    });
});
