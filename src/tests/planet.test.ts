import { Rover } from '../app/Rover';
import { PlaneteToroidale } from '../app/PlaneteToroidale';
import { Orientation } from '../app/Orientation';
import { Point } from '../app/Point';
import { RoverBuilder } from './utilities/RoverBuilder';

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

        expect(rover.position.posX).toBe(0);
        expect(rover.position.posY).toBe(0);
    });

    test('Rover dépasse le bord est', () => {
        let rover = new RoverBuilder()
            .withStartingPosition(new Point(99, 0))
            .withOrientation(Orientation.Est)
            .withPlanete(planeteToroidale)
            .build();

        rover = rover.avancer();

        expect(rover.position.posX).toBe(0);
        expect(rover.position.posY).toBe(0);
    });

    test('Rover dépasse le bord sud', () => {
        let rover = new RoverBuilder()
            .withStartingPosition(new Point(0, 0))
            .withOrientation(Orientation.Sud)
            .withPlanete(planeteToroidale)
            .build();

        rover = rover.avancer();

        expect(rover.position.posX).toBe(0);
        expect(rover.position.posY).toBe(99);
    });

    test('Rover dépasse le bord ouest', () => {
        let rover = new RoverBuilder()
            .withStartingPosition(new Point(0, 0))
            .withOrientation(Orientation.Ouest)
            .withPlanete(planeteToroidale)
            .build();

        rover = rover.avancer();

        expect(rover.position.posX).toBe(99);
        expect(rover.position.posY).toBe(0);
    });
});
