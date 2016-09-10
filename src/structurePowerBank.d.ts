type PowerBank = StructurePowerBank;

/**
 * Non-player structure. Contains power resource which can be obtained by destroying the structure. Hits the attacker creep back on each
 * attack.
 */
declare class StructurePowerBank extends OwnedStructure<PowerBank> {

  /**
   * The amount of power containing.
   */
  public readonly power: number;

  /**
   * The amount of game ticks when this structure will disappear.
   */
  public readonly ticksToDecay: number;

}
