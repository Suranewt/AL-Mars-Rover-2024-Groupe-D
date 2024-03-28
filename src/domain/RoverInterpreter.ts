import { Orientation } from './Orientation';
import { PlaneteInterface } from './Planete.interface';
import { Point } from './Point';
import { Rover } from './Rover';

// Objet valeur
export class RoverInterpreter {
    private _rover: Rover;

    constructor(rover: Rover) {
        this._rover = rover;
    }

    public executer(commandes: string): Rover {
        const commandesTab = commandes.trim().split('');
        let i = 0;
        let aRencontreUnObstacle: boolean = false;

        while (i < commandesTab.length && !aRencontreUnObstacle) {
            const ROVER_INITIAL = this._rover;
            this._rover = this._executerCommande(commandesTab[i]);

            if (
                ROVER_INITIAL.position === this._rover.position &&
                ROVER_INITIAL.orientation === this._rover.orientation
            )
                aRencontreUnObstacle = true;
            i++;
        }

        return this._rover;
    }

    private _executerCommande(commande: string): Rover {
        switch (commande) {
            case 'A':
                return this._rover.avancer();
            case 'R':
                return this._rover.reculer();
            case 'G':
                return this._rover.tournerGauche();
            case 'D':
                return this._rover.tournerDroite();
            default:
                throw new Error(`Commande invalide : ${commande}`);
        }
    }

    public static recupererListeCommandesValides(): string[] {
        return ['A', 'R', 'G', 'D'];
    }

    public static serialize(rover: Rover): string {
        return `${rover.position.x},${rover.position.y},${rover.orientation
            .toString()
            .charAt(0)}`;
    }
}
