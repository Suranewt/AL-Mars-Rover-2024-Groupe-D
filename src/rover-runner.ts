import { RoverListener } from './rover-listener/RoverListener';
import { activeRover } from './conf/mission.conf';
import { WebSocketImplementation } from './network/web-socket/WebSocketImplementation';

const rover = activeRover;

const iface = new WebSocketImplementation(rover);
new RoverListener(rover, iface);

iface.demarrerServeur();
