"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoverInterpretor = void 0;
// Objet valeur
class RoverInterpretor {
    constructor(rover) {
        this._rover = rover;
    }
    executer(commandes) {
        const commandesTab = commandes.trim().split('');
        let i = 0;
        while (i < commandesTab.length && this._rover.aucunObstacleRencontre) {
            this._rover = this._executerCommande(commandesTab[i]);
            i++;
        }
        return this._rover;
    }
    _executerCommande(commande) {
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
exports.RoverInterpretor = RoverInterpretor;
//# sourceMappingURL=RoverInterpreter.js.map