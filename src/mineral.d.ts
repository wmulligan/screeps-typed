/**
 * A mineral deposit. Can be harvested by creeps with a WORK body part using the extractor structure.
 */
declare class Mineral extends RoomObject {

  /**
   * The remaining amount of resources.
   */
  public readonly mineralAmount: number;

  /**
   * The resource type, one of the RESOURCE_* constants.
   */
  public readonly mineralType: ResourceType;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  public readonly id: MineralId;

  /**
   * The remaining time after which the deposit will be refilled.
   */
  public readonly ticksToRegeneration: number;

}
