type KeeperLair = StructureKeeperLair;

/**
 * Non-player structure. Spawns NPC Source Keepers that guards energy sources and minerals in some rooms. This structure cannot be
 * destroyed.
 */
declare class StructureKeeperLair extends OwnedStructure<KeeperLair> {

  /**
   * Time to spawning of the next Source Keeper.
   */
  public readonly ticksToSpawn: number;

}
