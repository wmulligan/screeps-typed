declare const StructurePowerBank: StructurePowerBankConstructor;

interface StructurePowerBankConstructor {
  prototype: StructurePowerBank;
}

type PowerBank = StructurePowerBank;

/**
 * Non-player structure. Contains power resource which can be obtained by destroying the structure. Hits the attacker creep back on each
 * attack.
 */
interface StructurePowerBank extends OwnedStructure {

  /**
   * The amount of power containing.
   */
  power: number;

  /**
   * The amount of game ticks when this structure will disappear.
   */
  ticksToDecay: number;

}
