declare const StructureNuker: StructureNukerConstructor;

interface StructureNukerConstructor {
  prototype: StructureNuker;
}

type Nuker = StructureNuker;

/**
 * Launches a nuke to another room dealing huge damage to the landing area. Each launch has a cooldown and requires energy and ghodium
 * resources. Launching creates a Nuke object at the target room position which is visible to any player until it is landed. Incoming nuke
 * cannot be moved or cancelled. Nukes cannot be launched from or to novice rooms.
 */
interface StructureNuker extends OwnedStructure {

  /**
   * The amount of energy contained in this structure.
   */
  energy: number;

  /**
   * The total amount of energy this structure can contain.
   */
  energyCapacity: number;

  /**
   * The amount of energy contained in this structure.
   */
  ghodium: number;

  /**
   * The total amount of energy this structure can contain.
   */
  ghodiumCapacity: number;

  /**
   * The amount of game ticks the link has to wait until the next transfer is possible.
   */
  cooldown: number;

  /**
   * CPU cost: CONST
   *
   * Launch a nuke to the specified position.
   *
   * @param pos The target room position.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_TIRED, ERR_RCL_NOT_ENOUGH
   */
  launchNuke(pos: RoomPosition): ResponseCode;

}
