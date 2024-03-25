"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaneteToroidale = void 0;
class PlaneteToroidale {
    constructor(taille) {
        this.taille = taille;
    }
    normaliser(point) {
        return point.modulo(this.taille);
    }
    estLibre(position) {
        return true;
    }
}
exports.PlaneteToroidale = PlaneteToroidale;
//# sourceMappingURL=PlaneteToroidale.js.map