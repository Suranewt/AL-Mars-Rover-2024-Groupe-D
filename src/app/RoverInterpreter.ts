import { Rover } from './Rover';

export class RoverInterpretor {
    private _rover: Rover;

    constructor(rover: Rover) {
        this._rover = rover;
    }

    public execute(commandes: string): Rover {
        commandes
            .trim()
            .split('')
            .forEach((commande) => {
                this._rover = this._executerCommande(commande);
            });

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
}
