import { Rover } from '../domain/Rover';

// Objet valeur
export class RoverInterpretor {
    private _rover: Rover;

    constructor(rover: Rover) {
        this._rover = rover;
    }

    public executer(commandes: string): Rover {
        const commandesTab = commandes.trim().split('');
        let i = 0;

        while (i < commandesTab.length && this._rover.aucunObstacleRencontre) {
            this._rover = this._executerCommande(commandesTab[i]);
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
