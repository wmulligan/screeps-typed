/**
 * A global object representing world map. Use it to navigate between rooms. The object is accessible via Game.map property.
 */
declare namespace Game.map {

  /**
   * CPU cost: LOW
   *
   * List all exits available from the room with the given name.
   *
   * @param roomName The room name.
   * @returns The exits information or null if the room not found.
   */
  export function describeExits(roomName: string): RoomExits | null;

  /**
   * CPU cost: HIGH
   *
   * Find the exit direction from the given room en route to another room.
   *
   * @param fromRoom Start room name or room object.
   * @param toRoom Finish room name or room object.
   * @return The room direction constant, one of the following:
   * FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
   * Or one of the following Result codes: ERR_NO_PATH, ERR_INVALID_ARGS
   */
  export function findExit(fromRoom: string | Room, toRoom: string | Room): FindType<RoomPosition> | ResponseCode;

  /**
   * CPU cost: HIGH
   *
   * Find route from the given room to another room.
   *
   * @param fromRoom Start room name or room object.
   * @param toRoom Finish room name or room object.
   * @param opts find route options
   * @returns the route array or ERR_NO_PATH code
   */
  export function findRoute(fromRoom: string | Room, toRoom: string | Room, opts?: FindRouteOpts): RoomPathStep[] | ResponseCode;

  /**
   * CPU cost: NONE
   *
   * Get the linear distance (in rooms) between two rooms. You can use this function to estimate the energy cost of sending resources
   * through terminals, or using observers and nukes.
   *
   * @param roomName1 The name of the first room.
   * @param roomName2 The name of the second room.
   * @returns A number of rooms between the given two rooms.
   */
  export function getRoomLinearDistance(roomName1: string, roomName2: string): number;

  /**
   * CPU cost: LOW
   *
   * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @param roomName The room name.
   * @returns One of the following string values: plain, swamp, wall
   */
  export function getTerrainAt(x: number, y: number, roomName: string): TerrainType;

  /**
   * CPU cost: LOW
   *
   * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
   *
   * @param pos The position object.
   * @returns One of the following string values: plain, swamp, wall
   */
  export function getTerrainAt(pos: RoomPosition): TerrainType;

  /**
   * CPU cost: AVERAGE
   *
   * Check if the room with the given name is protected by temporary "newbie" walls.
   *
   * @param roomName The room name.
   * @returns A boolean value.
   */
  export function isRoomProtected(roomName: string): boolean;

}

interface RoomExits {

  /**
   * Direction TOP
   */
    '1': string | null;

  /**
   * Direction RIGHT
   */
    '3': string | null;

  /**
   * Direction BOTTOM
   */
    '5': string | null;

  /**
   * Direction LEFT
   */
    '7': string | null;

}

interface FindRouteOpts {

  /**
   * This callback accepts two arguments: function(roomName, fromRoomName). It can be used to calculate the cost of entering that room. You
   * can use this to do things like prioritize your own rooms, or avoid some rooms. You can return a floating point cost or Infinity to
   * block the room.
   */
  routeCallback: (roomName: string, fromRoomName: string) => number;

}

interface RoomPathStep {

  exit: FindType<RoomPosition>;

  room: string;

}
