type KeeperLair = StructureKeeperLair;

/**
 * Non-player structure. Spawns NPC Source Keepers that guards energy sources and minerals in some rooms. This structure cannot be
 * destroyed.
 */
declare class StructureKeeperLair extends OwnedStructure {

  /**
   * Time to spawning of the next Source Keeper.
   */
  public readonly ticksToSpawn: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<KeeperLair>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<KeeperLair>;

}
