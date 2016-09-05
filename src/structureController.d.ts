declare const StructureController: StructureControllerConstructor;

interface StructureControllerConstructor {
  prototype: StructureController;
}

type Controller = StructureController;

/**
 * Claim this structure to take control over the room. The controller structure
 * cannot be damaged or destroyed. It can be addressed by `Room.controller`
 * property.
 */
interface StructureController extends OwnedStructure {

  /**
   * Current controller level, from 0 to 8.
   */
  level: number;

  /**
   * The current progress of upgrading the controller to the next level.
   */
  progress: number;

  /**
   * The progress needed to reach the next level.
   */
  progressTotal: number;

  /**
   * An object with the controller reservation info if present: username, ticksToEnd
   */
  // reservation: ReservationDefinition;

  /**
   * The amount of game ticks when this controller will lose one level. This timer can be reset by using
   * Creep.upgradeController.
   */
  ticksToDowngrade: number;

  /**
   * Make your claimed controller neutral again.
   */
  unclaim(): number;

}
