declare const StructureRoad: StructureRoadConstructor;

interface StructureRoadConstructor {
  prototype: StructureRoad;
}

type Road = StructureRoad;

/**
 * Decreases movement cost to 1. Using roads allows creating creeps with less MOVE body parts.
 */
interface StructureRoad extends Structure {

  /**
   * The amount of game ticks when this road will lose some hit points.
   */
  ticksToDecay: number;

}
