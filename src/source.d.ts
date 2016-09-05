/**
 * An energy source object. Can be harvested by creeps with a WORK body part.
 */
interface Source extends RoomObject {

  /**
   * The remaining amount of energy.
   */
  energy: number;

  /**
   * The total amount of energy in the source.
   */
  energyCapacity: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  id: string;

  /**
   * The remaining time after which the source will be refilled.
   */
  ticksToRegeneration: number;

}
