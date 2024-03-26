import { Orientation } from '../domain/Orientation';
import { PlaneteInterface } from '../domain/Planete.interface';
import { Point } from '../domain/Point';
import { Rover } from '../domain/Rover';

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

    public static deserialize(str: string, planete: PlaneteInterface) {
        const donneesTransmises: string[] = str.split(',');
        const orientationTransmise: string | undefined =
            donneesTransmises.pop();
        const longitudeTransmise: string | undefined = donneesTransmises.pop();
        const latitudeTransmise: string | undefined = donneesTransmises.pop();

        const orientation: Orientation =
            RoverInterpreter._deserializeOrientation(orientationTransmise);

        return new Rover(
            new Point(Number(latitudeTransmise), Number(longitudeTransmise)),
            orientation,
            planete
        );
    }

    public static serialize(rover: Rover): string {
        return `${rover.position.x},${rover.position.y},${rover.orientation
            .toString()
            .charAt(0)}`;
    }

    private static _deserializeOrientation(
        orientationTransmise: string | undefined
    ): Orientation {
        switch (orientationTransmise) {
            case 'N':
                return Orientation.Nord;
            case 'E':
                return Orientation.Est;
            case 'S':
                return Orientation.Sud;
            case 'O':
                return Orientation.Ouest;
            default:
                throw new Error(
                    `Orientation invalide : ${orientationTransmise}`
                );
        }
    }
}
