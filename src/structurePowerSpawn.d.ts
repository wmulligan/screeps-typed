type PowerSpawn = StructurePowerSpawn;

/**
 * Processes power into your account, and spawns power creeps with special unique powers (in development).
 */
declare class StructurePowerSpawn extends OwnedStructure {

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<PowerSpawn>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<PowerSpawn>;

}
