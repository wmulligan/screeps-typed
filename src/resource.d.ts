/**
 * A dropped piece of resource. It will decay after a while if not picked up. Dropped resource pile decays for ceil(amount/1000) units per
 * tick.
 */
declare class Resource extends RoomObject {

  /**
   * The amount of resource units containing.
   */
  public readonly amount: number;

  /**
   * A unique object identificator. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
   */
  public readonly id: ResourceId;

  /**
   * One of the `RESOURCE_*` constants.
   */
  public readonly resourceType: ResourceType;

}
