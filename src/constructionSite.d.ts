declare const ConstructionSite: ConstructionSiteConstructor;

interface ConstructionSiteConstructor {
  prototype: ConstructionSite;
}

/**
 * A site of a structure which is currently under construction. A construction site can be created using the 'Construct' button at the left
 * of the game field or the Room.createConstructionSite method. To build a structure on the construction site, give a worker creep some
 * amount of energy and perform Creep.build action.
 */
interface ConstructionSite extends RoomObject {

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  id: string;

  /**
   * Whether this is your own construction site.
   */
  my: boolean;

  /**
   * An object with the structure’s owner info
   */
  owner: Owner;

  /**
   * The current construction progress.
   */
  progress: number;

  /**
   * The total construction progress needed for the structure to be built.
   */
  progressTotal: number;

  /**
   * One of the STRUCTURE_* constants.
   */
  structureType: StructureType<any>;

  /**
   * CPU cost: CONST
   *
   * Remove the construction site.
   *
   * @returns Result Code: OK, ERR_NOT_OWNER
   */
  remove(): ResponseCode;

}
