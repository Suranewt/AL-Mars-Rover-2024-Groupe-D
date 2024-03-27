# AL-Mars-Rover

Vous pilotez à distance un Rover se situant sur Mars, une planète toroïdale contenant un obstacle, à partir d'un Mission Control.

## Règles

-   Votre Rover se déplace case par case.
-   Vous pouvez enchaîner les commandes à la suite.
-   Vous ne pouvez pas passer à travers un obstacle.
-   Si vous entrez une commande invalide, le Rover ne se déplace pas.
-   Dans le cas où vous enchaînez les commandes, si vous entrez une commande invalide, le Rover exécutera les commandes qui précède la commande invalide puis s'arrêtera à arrivé de celle-ci.

## Pré-requis

-   Installation de [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
-   Installation de [Node.js](https://nodejs.org/en/download)

## Installation

1. Installation des packages via NPM
    ```sh
    npm install
    ```
2. Compilation du code TypeScript
    ```sh
    tsc
    ```
3. Lancement du Rover
    ```sh
    node build/rover-listener/rover-runner.js
    ```
4. Lancement du Mission Control
    ```sh
    node build/mission-control/mission-control-runner.js
    ```

## Vocabulaire

À chaque commande envoyé, le Rover vous renvoie sa position sous la forme suivante :

```
Position du rover : [x, y, orientation]
```

Où :

-   `x` correspond à la latitude du Rover
-   `y` correspond à la longitude du Rover
-   `orientation` correspond à l'orientation du Rover
    -   Elle peut avoir les valeurs suivantes :
        -   `N` pour le `Nord`
        -   `S` pour le `Sud`
        -   `E` pour l'`Est`
        -   `O` pour l'`Ouest`

## Auteurs :

-   AWAISSI Achref
-   SEGUIN Jean-Kelly
-   DAORUEANG Saranyu
