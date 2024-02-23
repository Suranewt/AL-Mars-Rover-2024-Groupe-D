import { EncapsulationStringArray } from '../domain/EncapsulationStringArray';
import { Rover } from '../domain/Rover';

// Objet valeur
export class RoverInterpretor {
    private _rover: Rover;

    constructor(rover: Rover) {
        this._rover = rover;
    }

    public executer(commandes: string): Rover {
        const commandesTab: EncapsulationStringArray =
            new EncapsulationStringArray(commandes.trim().split(''));
        let aRencontreUnObstacle: boolean = false;
        let i = 0;

        while (i < commandesTab.length() && !aRencontreUnObstacle) {
            const ROVER_INITIAL = this._rover;
            this._rover = this._executerCommande(
                commandesTab.getCharAtIndex(i)
            );

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
        }
        throw new Error(`Commande invalide : ${commande}`);
    }
}
