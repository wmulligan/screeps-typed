declare const StructureRampart: StructureRampartConstructor;

interface StructureRampartConstructor {
  prototype: StructureRampart;
}

type Rampart = StructureRampart;

/**
 * Blocks movement of hostile creeps, and defends your creeps and structures on the same tile. Can be used as a controllable gate.
 */
interface StructureRampart extends OwnedStructure {

  /**
   * If false (default), only your creeps can step on the same square. If true, any hostile creeps can pass through.
   */
  isPublic: boolean;

  /**
   * The amount of game ticks when this rampart will lose some hit points.
   */
  ticksToDecay: number;

  /**
   * CPU cost: CONST
   *
   * Make this rampart public to allow other players' creeps to pass through.
   *
   * @param isPublic Whether this rampart should be public or non-public
   * @returns Return code: OK, ERR_NOT_OWNER
   */
  setPublic(isPublic: boolean): ResponseCode;

}
