type Wall = StructureWall;

/**
 * Blocks movement of all creeps.
 */
declare class StructureWall extends Structure<Wall> {

  /**
   * The amount of game ticks when the wall will disappear (only for automatically placed border walls at the start of the game).
   */
  public readonly ticksToLive: number;

}
