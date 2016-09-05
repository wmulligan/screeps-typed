declare const Structure: StructureConstructor;

interface StructureConstructor {
  prototype: Structure;
}

/**
 * The base prototype object of all structures.
 */
interface Structure extends RoomObject {

  /**
   * The current amount of hit points of the structure.
   */
  hits: number;

  /**
   * The total amount of hit points of the structure.
   */
  hitsMax: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  id: string;

  /**
   * One of the STRUCTURE_* constants.
   */
  structureType: StructureType<any>;

  /**
   * CPU cost: CONST
   *
   * Destroy this structure immediately.
   *
   * @returns Return code: OK, ERR_NOT_OWNER
   */
  destroy(): ResponseCode;

  /**
   * CPU cost: AVERAGE
   *
   * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the
   * structure will be highlighted with red in the game.
   *
   * @returns A boolean value.
   */
  isActive(): boolean;

  /**
   * CPU cost: CONST
   *
   * Toggle auto notification when the structure is under attack. The notification will be sent to your account email. Turned on by default.
   *
   * @param enabled Whether to enable notification or disable.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_INVALID_ARGS
   */
  notifyWhenAttacked(enabled: boolean): ResponseCode;

}
