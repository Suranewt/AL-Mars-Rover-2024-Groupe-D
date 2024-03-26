import { RoverInterpreter } from '../app/RoverInterpreter';
import { PlaneteInfinie } from './utilities/PlaneteInfinie';
import { RoverBuilder } from './utilities/RoverBuilder';

describe('Rover piloté par des commandes', () => {
    test('Equivalence pilotage normal et par commande', () => {
        const planete = new PlaneteInfinie();
        const builder = new RoverBuilder().withPlanete(planete);
        
        const roverTemoin = builder.build();

        const roverTeste = RoverInterpreter.deserialize(
            RoverInterpreter.serialize(roverTemoin),
            planete
        );

        expect(roverTeste).toEqual(roverTemoin);
    });
});
