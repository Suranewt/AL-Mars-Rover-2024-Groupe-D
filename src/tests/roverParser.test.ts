import { RoverInterpreter } from '../domain/RoverInterpreter';
import { Orientation } from '../domain/Orientation';
import { Point } from '../domain/Point';
import { Rover } from '../domain/Rover';
import { PlaneteInfinie } from './utilities/PlaneteInfinie';

describe('Sérialisation du Rover en string', () => {
    test.each([
        [0, 0, Orientation.Nord, '0,0,N'],
        [0, 0, Orientation.Sud, '0,0,S'],
        [1, 0, Orientation.Est, '1,0,E'],
        [0, 1, Orientation.Ouest, '0,1,O'],
        [0, 2, Orientation.Nord, '0,2,N']
    ])(
        'Un rover de latitude %s, de longitude %s et orienté %s correspond à la string suivante : %s',
        (latitude, longitude, orientation, strAttendue) => {
            const planeteCommune = new PlaneteInfinie();

            const rover = new Rover(
                new Point(latitude, longitude),
                orientation,
                planeteCommune
            );

            const stringGeneree = RoverInterpreter.serialize(rover);

            expect(stringGeneree).toEqual(strAttendue);
        }
    );
});
