type Road = StructureRoad;

/**
 * Decreases movement cost to 1. Using roads allows creating creeps with less MOVE body parts.
 */
declare class StructureRoad extends Structure {

  /**
   * The amount of game ticks when this road will lose some hit points.
   */
  public readonly ticksToDecay: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Road>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Road>;

}
