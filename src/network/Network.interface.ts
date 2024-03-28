export interface NetworkInterface {
    /**
     * @param commande La commande transmise pour être interprétée par le Rover
     * @returns La position du Rover sous la forme 'x,y,orientation'
     */
    // transmission(commande: string): string;

    /**
     * Stocke une fonction callback
     * @param callback La fonction callback à stocker
     */
    registerCallBack(callback: (commande: string) => string): void;
}
