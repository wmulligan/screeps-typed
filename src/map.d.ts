/**
 * A global object representing world map. Use it to navigate between rooms. The object is accessible via Game.map property.
 */
interface GameMap {

  /**
   * CPU cost: LOW
   *
   * List all exits available from the room with the given name.
   *
   * @param roomName The room name.
   * @returns The exits information or null if the room not found.
   */
  describeExits(roomName: RoomNameOrString): RoomExits | null;

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
  findExit(fromRoom: RoomNameOrString | Room, toRoom: RoomNameOrString | Room): FindType<RoomPosition> | ResponseCode;

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
  findRoute(fromRoom: RoomNameOrString | Room, toRoom: RoomNameOrString | Room, opts?: FindRouteOpts): RoomPathStep[] | ResponseCode;

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
  getRoomLinearDistance(roomName1: RoomNameOrString, roomName2: RoomNameOrString): number;

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
  getTerrainAt(x: number, y: number, roomName: RoomNameOrString): TerrainType;

  /**
   * CPU cost: LOW
   *
   * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
   *
   * @param pos The position object.
   * @returns One of the following string values: plain, swamp, wall
   */
  getTerrainAt(pos: RoomPosition): TerrainType;

  /**
   * CPU cost: AVERAGE
   *
   * Check if the room with the given name is protected by temporary "newbie" walls.
   *
   * @param roomName The room name.
   * @returns A boolean value.
   */
  isRoomProtected(roomName: RoomNameOrString): boolean;

}

interface RoomExits {

  readonly [direction: number]: RoomName | undefined;

  /**
   * Direction TOP
   */
  readonly 1: RoomName | undefined;

  /**
   * Direction RIGHT
   */
  readonly 3: RoomName | undefined;

  /**
   * Direction BOTTOM
   */
  readonly 5: RoomName | undefined;

  /**
   * Direction LEFT
   */
  readonly 7: RoomName | undefined;

}

interface FindRouteOpts {

  /**
   * This callback accepts two arguments: function(roomName, fromRoomName). It can be used to calculate the cost of entering that room. You
   * can use this to do things like prioritize your own rooms, or avoid some rooms. You can return a floating point cost or Infinity to
   * block the room.
   */
  routeCallback: (roomName: RoomName, fromRoomName: RoomName) => number;

}

interface RoomPathStep {

  readonly exit: FindType<RoomPosition>;

  readonly room: RoomName;

}
