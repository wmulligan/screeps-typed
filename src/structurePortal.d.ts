declare const StructurePortal: StructurePortalConstructor;

interface StructurePortalConstructor {
  prototype: StructurePortal;
}

type Portal = StructurePortal;

/**
 * A non-player structure. Instantly teleports your creeps to a distant room acting as a room exit tile. Portals appear randomly in the
 * central room of each sector.
 */
interface StructurePortal extends Structure {

  /**
   * The position object in the destination room.
   */
  destination: RoomPosition;

  /**
   * The amount of game ticks when the portal disappears, or undefined when the portal is stable.
   */
  ticksToDecay: number | undefined;

}
