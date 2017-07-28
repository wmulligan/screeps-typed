type SStorage = StructureStorage; // Storage is already defined in browser

/**
 * A structure that can store huge amount of resource units. Only one structure per room is allowed that can be addressed by Room.storage
 * property.
 */
declare class StructureStorage extends OwnedStructure {

  /**
   * An object with the storage contents. Each object key is one of the RESOURCE_* constants, values are resources amounts. RESOURCE_ENERGY
   * is always defined and equals to 0 when empty, other resources are undefined when empty. You can use lodash.sum to get the total amount
   * of contents.
   */
  public readonly store: StoreContents;

  /**
   * The total amount of resources the storage can contain.
   */
  public readonly storeCapacity: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<SStorage>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<SStorage>;
}
