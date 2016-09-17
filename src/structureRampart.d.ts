type Rampart = StructureRampart;

/**
 * Blocks movement of hostile creeps, and defends your creeps and structures on the same tile. Can be used as a controllable gate.
 */
declare class StructureRampart extends OwnedStructure {

  /**
   * If false (default), only your creeps can step on the same square. If true, any hostile creeps can pass through.
   */
  public readonly isPublic: boolean;

  /**
   * The amount of game ticks when this rampart will lose some hit points.
   */
  public readonly ticksToDecay: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Rampart>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Rampart>;

  /**
   * CPU cost: CONST
   *
   * Make this rampart public to allow other players' creeps to pass through.
   *
   * @param isPublic Whether this rampart should be public or non-public
   * @returns Return code: OK, ERR_NOT_OWNER
   */
  public setPublic(isPublic: boolean): ResponseCode;

}
