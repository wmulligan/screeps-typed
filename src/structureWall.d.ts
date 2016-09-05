declare const StructureWall: StructureWallConstructor;

interface StructureWallConstructor {
  prototype: StructureWall;
}

type Wall = StructureWall;

/**
 * Blocks movement of all creeps.
 */
interface StructureWall extends Structure {

  /**
   * The amount of game ticks when the wall will disappear (only for automatically placed border walls at the start of the game).
   */
  ticksToLive: number;

}
