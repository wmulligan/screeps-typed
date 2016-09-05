declare const StructureStorage: StructureStorageConstructor;

interface StructureStorageConstructor {
  prototype: StructureStorage;
}

// type Storage = StructureStorage;

/**
 * A structure that can store huge amount of resource units. Only one structure per room is allowed that can be addressed by Room.storage
 * property.
 */
interface StructureStorage extends OwnedStructure {

  /**
   * An object with the storage contents. Each object key is one of the RESOURCE_* constants, values are resources amounts. RESOURCE_ENERGY
   * is always defined and equals to 0 when empty, other resources are undefined when empty. You can use lodash.sum to get the total amount
   * of contents.
   */
  store: StoreDefinition;

  /**
   * The total amount of resources the storage can contain.
   */
  storeCapacity: number;

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
  transfer(target: Creep, resourceType: ResourceType, amount?: number): ResponseCode;

}
