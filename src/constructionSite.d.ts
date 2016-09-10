/**
 * A site of a structure which is currently under construction. A construction site can be created using the 'Construct' button at the left
 * of the game field or the Room.createConstructionSite method. To build a structure on the construction site, give a worker creep some
 * amount of energy and perform Creep.build action.
 */
declare class ConstructionSite extends RoomObject {

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  public readonly id: ConstructionSiteId;

  /**
   * Whether this is your own construction site.
   */
  public readonly my: boolean;

  /**
   * An object with the structure’s owner info
   */
  public readonly owner: Owner;

  /**
   * The current construction progress.
   */
  public readonly progress: number;

  /**
   * The total construction progress needed for the structure to be built.
   */
  public readonly progressTotal: number;

  /**
   * One of the STRUCTURE_* constants.
   */
  public readonly structureType: StructureType<any>;

  /**
   * CPU cost: CONST
   *
   * Remove the construction site.
   *
   * @returns Result Code: OK, ERR_NOT_OWNER
   */
  public remove(): ResponseCode;

}
