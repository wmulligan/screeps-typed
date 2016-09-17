type Portal = StructurePortal;

/**
 * A non-player structure. Instantly teleports your creeps to a distant room acting as a room exit tile. Portals appear randomly in the
 * central room of each sector.
 */
declare class StructurePortal extends Structure {

  /**
   * The position object in the destination room.
   */
  public destination: RoomPosition;

  /**
   * The amount of game ticks when the portal disappears, or undefined when the portal is stable.
   */
  public ticksToDecay: number | undefined;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Portal>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Portal>;

}
