import { Rover } from '../app/Rover';
import { PlaneteToroidale } from '../app/PlaneteToroidale';
import { Orientation } from '../app/Orientation';
import { Point } from '../app/Point';

describe('Rover dépassant les limites de la planète', () => {
    let planete: PlaneteToroidale;

    beforeEach(() => {
        // Initialiser une planète toroïdale 100 * 100
        planete = new PlaneteToroidale(100);
    });

    test('Rover dépasse le bord nord', () => {
        const rover = new Rover(new Point(0, 99), Orientation.Nord, planete);
        rover.avancer();
        //Le rover (y = 0).
        expect(rover.getPosition().posX).toBe(0);
        expect(rover.getPosition().posY).toBe(0);
    });
    test('Rover dépasse le bord est', () => {
        const rover = new Rover(new Point(99, 0), Orientation.Est, planete);
        rover.avancer();
        // Attendu : Le rover (x = 0).
        expect(rover.getPosition().posX).toBe(0);
        expect(rover.getPosition().posY).toBe(0);
    });

});
