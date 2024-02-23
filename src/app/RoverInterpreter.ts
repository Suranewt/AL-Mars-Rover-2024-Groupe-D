import { EncapsulationBoolean } from '../domain/EncapsulationBoolean';
import { EncapsulationStringArray } from '../domain/EncapsulationStringArray';
import { EncapsulationString } from '../domain/EncapsulationString';
import { Rover } from '../domain/Rover';

// Objet valeur
export class RoverInterpretor {
    private _rover: Rover;

    constructor(rover: Rover) {
        this._rover = rover;
    }

    public executer(commandes: string ): Rover {
        const commandesTab: EncapsulationStringArray =
            new EncapsulationStringArray(commandes.trim().split(''));
        let aRencontreUnObstacle:  EncapsulationBoolean = new EncapsulationBoolean(false);
        let i = 0;
        aRencontreUnObstacle
        while (i < commandesTab.length() && !aRencontreUnObstacle.recupererValeur()) {
            const ROVER_INITIAL = this._rover;
            this._rover = this._executerCommande(
                commandesTab.getCharAtIndex(i)
            );
            if (
                ROVER_INITIAL.position === this._rover.position &&
                ROVER_INITIAL.orientation === this._rover.orientation
            ) aRencontreUnObstacle = aRencontreUnObstacle.remplacerValeur(true)
         

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
