type PowerBank = StructurePowerBank;

/**
 * Non-player structure. Contains power resource which can be obtained by destroying the structure. Hits the attacker creep back on each
 * attack.
 */
declare class StructurePowerBank extends OwnedStructure {

  /**
   * The amount of power containing.
   */
  public readonly power: number;

  /**
   * The amount of game ticks when this structure will disappear.
   */
  public readonly ticksToDecay: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<PowerBank>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<PowerBank>;

}
