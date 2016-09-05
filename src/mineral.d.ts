declare const Mineral: MineralConstructor;

interface MineralConstructor {
  prototype: Mineral;
}

/**
 * A mineral deposit. Can be harvested by creeps with a WORK body part using the extractor structure.
 */
interface Mineral extends RoomObject {

  /**
   * The remaining amount of resources.
   */
  mineralAmount: number;

  /**
   * The resource type, one of the RESOURCE_* constants.
   */
  mineralType: ResourceType;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  id: string;

  /**
   * The remaining time after which the deposit will be refilled.
   */
  ticksToRegeneration: number;

}
