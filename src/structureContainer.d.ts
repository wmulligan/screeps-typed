type Container = StructureContainer;

/**
 * A small container that can be used to store resources. This is a walkable structure. All dropped resources automatically goes to the
 * container at the same tile.
 */
declare class StructureContainer extends Structure {

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Container>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Container>;

  /**
   * An object with the structure contents. Each object key is one of the RESOURCE_* constants, values are resources amounts.
   * RESOURCE_ENERGY is always defined and equals to 0 when empty, other resources are undefined when empty. You can use lodash.sum to get
   * the total amount of contents.
   */
  public readonly store: StoreContents;

  /**
   * The total amount of resources the structure can contain.
   */
  public readonly storeCapacity: number;

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
