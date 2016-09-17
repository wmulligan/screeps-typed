type Controller = StructureController;

/**
 * Claim this structure to take control over the room. The controller structure
 * cannot be damaged or destroyed. It can be addressed by `Room.controller`
 * property.
 */
declare class StructureController extends OwnedStructure {

  /**
   * Current controller level, from 0 to 8.
   */
  public readonly level: number;

  /**
   * The current progress of upgrading the controller to the next level.
   */
  public readonly progress: number;

  /**
   * The progress needed to reach the next level.
   */
  public readonly progressTotal: number;

  /**
   * An object with the controller reservation info if present: username, ticksToEnd
   */
  public readonly reservation: Reservation;

  /**
   * The amount of game ticks when this controller will lose one level. This timer can be reset by using
   * Creep.upgradeController.
   */
  public readonly ticksToDowngrade: number;

  /**
   * The amount of game ticks while this controller cannot be upgraded due to attack.
   */
  public readonly upgradeBlocked: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Controller>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Controller>;

  /**
   * CPU cost: CONST
   *
   * Make your claimed controller neutral again.
   *
   * @returns Return code: OK, ERR_NOT_OWNER
   */
  public unclaim(): ResponseCode;

}

interface Reservation {

  /**
   * The name of a player who reserved this controller.
   */
  readonly username: string;

  /**
   * The amount of game ticks when the reservation will end.
   */
  readonly ticksToEnd: number;

}
