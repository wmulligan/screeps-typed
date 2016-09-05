declare const StructureTower: StructureTowerConstructor;

interface StructureTowerConstructor {
  prototype: StructureTower;
}

type Tower = StructureTower;

/**
 * Remotely attacks or heals creeps, or repairs structures. Can be targeted to any object in the room. However, its effectiveness linearly
 * depends on the distance. Each action consumes energy.
 */
interface StructureTower extends OwnedStructure {

  /**
   * The amount of energy containing in this structure.
   */
  energy: number;

  /**
   * The total amount of energy this structure can contain.
   */
  energyCapacity: number;

  /**
   * CPU cost: CONST
   *
   * Remotely attack any creep in the room. Consumes 10 energy units per tick. Attack power depends on the distance to the target: from 600
   * hits at range 10 to 300 hits at range 40.
   *
   * @param target The target creep.
   * @returns Return code: OK, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_RCL_NOT_ENOUGH
   */
  attack(target: Creep): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Remotely heal any creep in the room. Consumes 10 energy units per tick. Heal power depends on the distance to the
   * target: from 400 hits at range 10 to 200 hits at range 40.
   *
   * @param target The target creep.
   * @returns Return code: OK, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_RCL_NOT_ENOUGH
   */
  heal(target: Creep): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Remotely repair any structure in the room. Consumes 10 energy units per tick. Repair power depends on the distance
   * to the target: from 600 hits at range 10 to 300 hits at range 40.
   *
   * @param target The target structure.
   * @returns Return code: OK, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_RCL_NOT_ENOUGH
   */
  repair(target: Structure): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Transfer resource from this terminal to a creep. The target has to be at adjacent square. You can transfer resources to your creeps
   * from hostile structures as well. This method is deprecated. Please use Creep.withdraw instead.
   *
   * @deprecated
   * @param target The target object.
   * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE
   */
  transferEnergy(target: Creep, amount?: number): ResponseCode;

}
