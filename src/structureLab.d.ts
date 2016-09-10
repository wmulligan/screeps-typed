type Lab = StructureLab;

/**
 * Produces mineral compounds from base minerals and boosts creeps.
 */
declare class StructureLab extends OwnedStructure<Lab> {

  /**
   * The amount of game ticks the lab has to wait until the next reaction is possible.
   */
  public readonly cooldown: number;

  /**
   * The amount of energy containing in the lab. Energy is used for boosting creeps.
   */
  public readonly energy: number;

  /**
   * The total amount of energy the lab can contain.
   */
  public readonly energyCapacity: number;

  /**
   * The amount of mineral resources containing in the lab.
   */
  public readonly mineralAmount: number;

  /**
   * The type of minerals containing in the lab. Labs can contain only one mineral type at the same time.
   */
  public readonly mineralType: ResourceType;

  /**
   * The total amount of minerals the lab can contain.
   */
  public readonly mineralCapacity: number;

  /**
   * CPU cost: CONST
   *
   * Boosts creep body part using the containing mineral compound. The creep has to be at adjacent square to the lab. Boosting one body
   * part consumes 30 mineral units and 20 energy units.
   *
   * @param creep The target creep.
   * @param bodyPartsCount The number of body parts of the corresponding type to be boosted. Body parts are always
   *     counted left-to-right for TOUGH, and right-to-left for other types. If undefined, all the eligible body parts
   *     are boosted.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_FOUND, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE
   */
  public boostCreep(creep: Creep, bodyPartsCount?: number): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Produce mineral compounds using reagents from two another labs. Each lab has to be within 2 squares range. The same input labs can be
   * used by many output labs
   *
   * @param lab1 The first source lab.
   * @param lab2 The second source lab.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE, ERR_INVALID_ARGS,
   *     ERR_TIRED
   */
  public runReaction(lab1: Lab, lab2: Lab): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Transfer resource from this terminal to a creep. The target has to be at adjacent square. You can transfer resources to your creeps
   * from hostile structures as well. This method is deprecated. Please use Creep.withdraw instead.
   *
   * @deprecated
   * @param target The target object.
   * @param resourceType One of the RESOURCE_* constants.
   * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE, ERR_INVALID_ARGS
   */
  public transfer(target: Creep, resourceType: ResourceType, amount?: number): ResponseCode;

}
