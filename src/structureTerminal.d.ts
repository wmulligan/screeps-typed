type Terminal = StructureTerminal;

/**
 * Sends any resources to a Terminal in another room. The destination Terminal can belong to any player. If its storage is full, the
 * resources are dropped on the ground. Each transaction requires additional energy (regardless of the transfer resource type) that can be
 * calculated using Game.market.calcTransactionCost method. For example, sending 1000 mineral units from W0N0 to W10N5 will consume 742
 * energy units. You can track your incoming and outgoing transactions using the Game.market object. Only one Terminal per room is allowed
 * that can be addressed by Room.terminal property.
 */
declare class StructureTerminal extends OwnedStructure {

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
  public readonly id: StructureId<Terminal>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Terminal>;

  /**
   * The remaining amount of ticks while this terminal cannot be used to make StructureTerminal.send or Game.market.deal calls.
   */
  public readonly cooldown: number;

  /**
   * CPU cost: CONST
   *
   * Sends resource to a Terminal in another room with the specified name.
   *
   * @param resourceType One of the RESOURCE_* constants.
   * @param amount The amount of resources to be sent. The minimum amount is 100.
   * @param destination The name of the target room. You don't have to gain visibility in this room.
   * @param description The description of the transaction. It is visible to the recipient. The maximum length is 100
   *     characters.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_ARGS
   */
  public send(resourceType: ResourceType, amount: number, destination: string, description?: string): ResponseCode;
}
