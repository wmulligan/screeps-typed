type Extension = StructureExtension;

/**
 * Contains energy which can be spent on spawning bigger creeps. Extensions can be placed anywhere in the room, any spawns will be able to
 * use them regardless of distance.
 */
declare class StructureExtension extends OwnedStructure<Extension> {

  /**
   * The amount of energy containing in the extension.
   */
  public readonly energy: number;

  /**
   * The total amount of energy the extension can contain.
   */
  public readonly energyCapacity: number;

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
  public transferEnergy(target: Creep, amount?: number): ResponseCode;

}
