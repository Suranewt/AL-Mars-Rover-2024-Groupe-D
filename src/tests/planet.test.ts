import { RoverInterpreter } from '../domain/RoverInterpreter';
import { PlaneteToroidale } from './../domain/PlaneteToroidale';
import { Rover } from '../domain/Rover';
import { Orientation } from '../domain/Orientation';
import { Point } from '../domain/Point';
import { RoverBuilder } from './utilities/RoverBuilder';
import { PlaneteInterface } from '../domain/Planete.interface';
import { PlaneteAvecObstacle } from '../domain/PlaneteAvecObstacle';

describe('Rover dépassant les limites de la planète', () => {
    let planeteToroidale: PlaneteToroidale;

    beforeEach(() => {
        planeteToroidale = new PlaneteToroidale(100);
    });

    test('Rover dépasse le bord nord', () => {
        let rover = new RoverBuilder()
            .withStartingPosition(new Point(0, 99))
            .withPlanete(planeteToroidale)
            .build();

        rover = rover.avancer();

        expect(rover.position.x).toBe(0);
        expect(rover.position.y).toBe(0);
    });

    test('Rover dépasse le bord est', () => {
        let rover = new RoverBuilder()
            .withStartingPosition(new Point(99, 0))
            .withOrientation(Orientation.Est)
            .withPlanete(planeteToroidale)
            .build();

        rover = rover.avancer();

        expect(rover.position.x).toBe(0);
        expect(rover.position.y).toBe(0);
    });

    test('Rover dépasse le bord sud', () => {
        let rover = new RoverBuilder()
            .withStartingPosition(new Point(0, 0))
            .withOrientation(Orientation.Sud)
            .withPlanete(planeteToroidale)
            .build();

        rover = rover.avancer();

        expect(rover.position.x).toBe(0);
        expect(rover.position.y).toBe(99);
    });

    test('Rover dépasse le bord ouest', () => {
        let rover = new RoverBuilder()
            .withStartingPosition(new Point(0, 0))
            .withOrientation(Orientation.Ouest)
            .withPlanete(planeteToroidale)
            .build();

        rover = rover.avancer();

        expect(rover.position.x).toBe(99);
        expect(rover.position.y).toBe(0);
    });
});

describe('Un Rover sur une planète avec un obstacle', () => {
    test(
        'ETANT DONNE un Rover sur une planète avec un obstacle ' +
            `QUAND le Rover essaye d'avancer sur l'obstacle, ` +
            `ALORS le Rover reste sur place et arrête la suite des commandes`,
        () => {
            const PLANETE_TOROIDALE: PlaneteInterface = new PlaneteToroidale(
                10
            );
            const OBSTACLE: Point = new Point(0, 2);
            const planeteAvecObstacle: PlaneteInterface =
                new PlaneteAvecObstacle(PLANETE_TOROIDALE, OBSTACLE);

            let roverTeste: Rover = new RoverBuilder()
                .withPlanete(planeteAvecObstacle)
                .build();
            let roverTemoin: Rover = new RoverBuilder()
                .withPlanete(planeteAvecObstacle)
                .withStartingPosition(new Point(0, 1))
                .build();

            const roverInterpretor: RoverInterpreter = new RoverInterpreter(
                roverTeste
            );

            roverTeste = roverInterpretor.executer('AAADAAA');

            expect(roverTeste.position).toEqual(roverTemoin.position);
        }
    );
    test(
        'ETANT DONNE un Rover sur une planète avec un obstacle ' +
            `QUAND le Rover essaye de reculer sur l'obstacle, ` +
            `ALORS le Rover reste sur place et arrête la suite des commandes`,
        () => {
            const PLANETE_TOROIDALE: PlaneteInterface = new PlaneteToroidale(
                10
            );
            const OBSTACLE: Point = new Point(0, 2);
            const planeteAvecObstacle: PlaneteInterface =
                new PlaneteAvecObstacle(PLANETE_TOROIDALE, OBSTACLE);

            let roverTeste: Rover = new RoverBuilder()
                .withPlanete(planeteAvecObstacle)
                .withOrientation(Orientation.Sud)
                .build();
            let roverTemoin: Rover = new RoverBuilder()
                .withPlanete(planeteAvecObstacle)
                .withStartingPosition(new Point(0, 1))
                .build();

            const roverInterpretor: RoverInterpreter = new RoverInterpreter(
                roverTeste
            );

            roverTeste = roverInterpretor.executer('RRRDAAA');

            expect(roverTeste.position).toEqual(roverTemoin.position);
        }
    );
});
