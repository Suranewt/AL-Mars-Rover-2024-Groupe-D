import { Planete } from './Planete';
import { Orientation } from './Orientation';
import { Point } from './Point';

export class Rover {
    public position: Point;
    public orentation: Orientation;

    constructor(position: Point, orientation: Orientation) {
        this.position = position;
        this.orentation = orientation;
    }

    /**
     * Avancer de 1 case
     */
    public avancer() {
        return new Rover(
            this.orentation.vecteur(this.position),
            this.orentation
        );
    }

    /**
     * Reculer de 1 cases
     */
    public reculer() {
        return new Rover(
            this.orentation.inverser().vecteur(this.position),
            this.orentation
        );
    }

    /**
     * Tourner l'orientation du robot de 90° vers la gauche
     */
    public tournerGauche() {
        return new Rover(this.position, this.orentation.rotationGauche());
    }

    /**
     * Tourner l'orientation du robot de 90° vers la droite
     */
    public tournerDroite() {
        return new Rover(this.position, this.orentation.rotationDroite());
    }

    public executerCommandes(commandes: string) {
        commandes
            .trim()
            .split('')
            .forEach((commande) => {
                this._executerCommande(commande);
            });
    }

    private _executerCommande(commande: string): Rover {
        switch (commande) {
            case 'A':
                return this.avancer();
            case 'R':
                return this.reculer();
            case 'G':
                return this.tournerGauche();
            default:
                throw new Error(`Commande invalide : ${commande}`);
        }
    }

    /**
     * Récupérer la position du robot
     */
    public getPosition(): Point {
        return this.position;
    }
}
