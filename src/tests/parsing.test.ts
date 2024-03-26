import { Orientation } from "../domain/Orientation";
import { Point } from "../domain/Point";
import { Rover } from "../domain/Rover";
import { RoverInterpreter } from "../app/RoverInterpreter";
import { PlaneteInfinie } from "./utilities/PlaneteInfinie";


describe('Rover Parser', () => {
    test.each([
        ["0,0,N", 0, 0, Orientation.Nord],
        ["0,0,S", 0, 0, Orientation.Sud],
        ["1,0,N", 1, 0, Orientation.Nord],
    ])
    ("La String %s correspond à un Rover de latitude %s, de longitude %s et orienté %s",
        (str, latitudeAttendue, longitudeAttendue, orientationAttendue) => {
        const planèteCommune = new PlaneteInfinie();
        const roverTémoin = new Rover(
            new Point(latitudeAttendue, longitudeAttendue),
            orientationAttendue,
            planèteCommune);

        const roverTesté = RoverInterpreter.deserialize(str, planèteCommune);

        expect(roverTesté).toEqual(roverTémoin);
    })
});