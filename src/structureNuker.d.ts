type Nuker = StructureNuker;

/**
 * Launches a nuke to another room dealing huge damage to the landing area. Each launch has a cooldown and requires energy and ghodium
 * resources. Launching creates a Nuke object at the target room position which is visible to any player until it is landed. Incoming nuke
 * cannot be moved or cancelled. Nukes cannot be launched from or to novice rooms.
 */
declare class StructureNuker extends OwnedStructure {

  /**
   * The amount of energy contained in this structure.
   */
  public readonly energy: number;

  /**
   * The total amount of energy this structure can contain.
   */
  public readonly energyCapacity: number;

  /**
   * The amount of energy contained in this structure.
   */
  public readonly ghodium: number;

  /**
   * The total amount of energy this structure can contain.
   */
  public readonly ghodiumCapacity: number;

  /**
   * The amount of game ticks the link has to wait until the next transfer is possible.
   */
  public readonly cooldown: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Nuker>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Nuker>;

  /**
   * CPU cost: CONST
   *
   * Launch a nuke to the specified position.
   *
   * @param pos The target room position.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_TIRED, ERR_RCL_NOT_ENOUGH
   */
  public launchNuke(pos: RoomPosition): ResponseCode;

}
