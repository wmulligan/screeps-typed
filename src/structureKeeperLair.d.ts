declare const StructureKeeperLair: StructureKeeperLairConstructor;

interface StructureKeeperLairConstructor {
  prototype: StructureKeeperLair;
}

type KeeperLair = StructureKeeperLair;

/**
 * Non-player structure. Spawns NPC Source Keepers that guards energy sources and minerals in some rooms. This structure cannot be
 * destroyed.
 */
interface StructureKeeperLair extends OwnedStructure {

  /**
   * Time to spawning of the next Source Keeper.
   */
  ticksToSpawn: number;

}
