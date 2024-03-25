"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Orientation_1 = require("../domain/Orientation");
const Point_1 = require("../domain/Point");
const RoverInterpreter_1 = require("../app/RoverInterpreter");
const RoverBuilder_1 = require("./utilities/RoverBuilder");
describe(`Un Rover exécute des commandes simples`, () => {
    test(`La commande 'A' fait avancer le Rover`, () => {
        let roverTemoin = RoverBuilder_1.RoverBuilder.default();
        let roverTeste = RoverBuilder_1.RoverBuilder.default();
        const roverExecutor = new RoverInterpreter_1.RoverInterpretor(roverTeste);
        roverTeste = roverExecutor.executer('A');
        roverTemoin = roverTemoin.avancer();
        expect(roverTeste.position).toEqual(roverTemoin.position);
    });
    test(`La commande 'R' fait reculer le Rover`, () => {
        let roverTemoin = RoverBuilder_1.RoverBuilder.default();
        let roverTeste = RoverBuilder_1.RoverBuilder.default();
        const roverExecutor = new RoverInterpreter_1.RoverInterpretor(roverTeste);
        roverTeste = roverExecutor.executer('R');
        roverTemoin = roverTemoin.reculer();
        expect(roverTeste.position).toEqual(roverTemoin.position);
    });
    test(`La commande 'D' fait tourner l'orientation du Rover de 90° vers la droite`, () => {
        let roverTemoin = RoverBuilder_1.RoverBuilder.default();
        let roverTeste = RoverBuilder_1.RoverBuilder.default();
        const roverExecutor = new RoverInterpreter_1.RoverInterpretor(roverTeste);
        roverTeste = roverExecutor.executer('D');
        roverTemoin = roverTemoin.tournerDroite();
        expect(roverTeste.orientation).toEqual(roverTemoin.orientation);
    });
    test(`La commande 'G' fait tourner l'orientation du Rover de 90° vers la gauche`, () => {
        let roverTemoin = RoverBuilder_1.RoverBuilder.default();
        let roverTeste = RoverBuilder_1.RoverBuilder.default();
        const roverExecutor = new RoverInterpreter_1.RoverInterpretor(roverTeste);
        roverTeste = roverExecutor.executer('G');
        roverTemoin = roverTemoin.tournerGauche();
        expect(roverTeste.orientation).toEqual(roverTemoin.orientation);
    });
    describe(`Un Rover exécute des commandes multiples`, () => {
        test(`ETANT DONNEE un Rover en position (0,0) orienté vers l'Est, ` +
            `QUAND il avance 2 fois puis tourne vers la gauche, recule 1 fois puis tourne 2 fois vers la droite, ` +
            `ALORS il doit se retrouver dans le même état qu'un Rover initialisé à (2, -1) orienté Sud`, () => {
            const POSITION_TEMOIN = new Point_1.Point(2, -1);
            let roverTemoin = new RoverBuilder_1.RoverBuilder()
                .withStartingPosition(POSITION_TEMOIN)
                .withOrientation(Orientation_1.Orientation.Sud)
                .build();
            let roverTeste = new RoverBuilder_1.RoverBuilder()
                .withOrientation(Orientation_1.Orientation.Est)
                .build();
            const roverExecutor = new RoverInterpreter_1.RoverInterpretor(roverTeste);
            roverTeste = roverExecutor.executer('AAGRDD');
            expect(roverTeste.position).toEqual(roverTemoin.position);
            expect(roverTeste.orientation).toEqual(roverTemoin.orientation);
        });
    });
});
//# sourceMappingURL=commandes.test.js.map