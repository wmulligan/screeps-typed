/**
 * An energy source object. Can be harvested by creeps with a WORK body part.
 */
declare class Source extends RoomObject {

  /**
   * The remaining amount of energy.
   */
  public readonly energy: number;

  /**
   * The total amount of energy in the source.
   */
  public readonly energyCapacity: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  public readonly id: SourceId;

  /**
   * The remaining time after which the source will be refilled.
   */
  public readonly ticksToRegeneration: number;

}
