type Road = StructureRoad;

/**
 * Decreases movement cost to 1. Using roads allows creating creeps with less MOVE body parts.
 */
declare class StructureRoad extends Structure<Road> {

  /**
   * The amount of game ticks when this road will lose some hit points.
   */
  public readonly ticksToDecay: number;

}
