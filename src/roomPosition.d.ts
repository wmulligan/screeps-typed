declare const RoomPosition: RoomPositionConstructor;

interface RoomPositionConstructor {
  prototype: RoomPosition;

  /**
   * You can create new RoomPosition object using its constructor.
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @param roomName The room name.
   */
  new(x: number, y: number, roomName: string): RoomPosition;

}

/**
 * An object representing the specified position in the room. Every object in the room contains RoomPosition as the pos property. The
 * position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
 */
interface RoomPosition {

  /**
   * The name of the room.
   */
  roomName: string;

  /**
   * X position in the room.
   */
  x: number;

  /**
   * Y position in the room.
   */
  y: number;

  /**
   * CPU cost: CONST
   *
   * Create new ConstructionSite at the specified location.
   *
   * @param structureType One of the STRUCTURE_* constants.
   * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_FULL, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
   */
  createConstructionSite(structureType: StructureType<any>): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Create new Flag at the specified location.
   *
   * @param name The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name
   *     (hash key). If not defined, a random name will be generated.
   * @param color The color of a new flag. Should be one of the COLOR_* constants
   * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
   * @returns Result Code: OK, ERR_NAME_EXISTS, ERR_INVALID_ARGS
   */
  createFlag(name?: string, color?: Color, secondaryColor?: Color): ResponseCode;

  /**
   * CPU cost: HIGH
   *
   * Find an object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
   *
   * @param type See Room.find
   * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
   * @returns The closest object if found, null otherwise.
   */
  findClosestByPath<T extends RoomObject | RoomPosition>(type: FindType<T>, opts?: FindClosestPathOpts<T>): T | null;

  /**
   * CPU cost: HIGH
   *
   * Find an object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
   *
   * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
   * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
   * @returns The closest object if found, null otherwise.
   */
  findClosestByPath<T extends RoomObject | RoomPosition>(objects: T[] | RoomPosition[], opts?: FindClosestPathOpts<T>): T | null;

  /**
   * CPU cost: AVERAGE
   *
   * Find an object with the shortest linear distance from the given position.
   *
   * @param type See Room.find.
   * @param opts
   * @returns The closest object if found, null otherwise.
   */
  findClosestByRange<T extends RoomObject | RoomPosition>(type: FindType<T>, opts?: FilterOptions<T>): T | null;

  /**
   * CPU cost: AVERAGE
   *
   * Find an object with the shortest linear distance from the given position.
   *
   * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
   * @param opts
   * @returns The closest object if found, null otherwise.
   */
  findClosestByRange<T extends RoomObject | RoomPosition>(objects: T[], opts?: FilterOptions<T>): T | null;

  /**
   * CPU cost: AVERAGE
   *
   * Find all objects in the specified linear range.
   *
   * @param type See Room.find.
   * @param range The range distance.
   * @param opts See Room.find.
   * @return An array with the objects found.
   */
  findInRange<T extends RoomObject | RoomPosition>(type: FindType<T>, range: number, opts?: FilterOptions<T>): T[];

  /**
   * CPU cost: AVERAGE
   *
   * Find all objects in the specified linear range.
   *
   * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
   * @param range The range distance.
   * @param opts See Room.find.
   * @return An array with the objects found.
   */
  findInRange<T extends RoomObject | RoomPosition>(objects: T[] | RoomPosition[], range: number, opts?: FilterOptions<T>): T[];

  /**
   * CPU cost: HIGH
   *
   * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath. If the target
   * is in another room, then the corresponding exit will be used as a target.
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
   * @returns An array with path steps
   */
  findPathTo(x: number, y: number, opts?: FindPathOpts): PathStep[];

  /**
   * CPU cost: HIGH
   *
   * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath. If the target
   * is in another room, then the corresponding exit will be used as a target.
   *
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
   * @returns An array with path steps
   */
  findPathTo(target: RoomPosition | RoomObject, opts?: FindPathOpts): PathStep[];

  /**
   * CPU cost: LOW
   *
   * Get linear direction to the specified position.
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @returns A number representing one of the direction constants.
   */
  getDirectionTo(x: number, y: number): Direction;

  /**
   * CPU cost: LOW
   *
   * Get linear direction to the specified position.
   *
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns A number representing one of the direction constants.
   */
  getDirectionTo(target: RoomPosition | RoomObject): Direction;

  /**
   * CPU cost: LOW
   *
   * Get linear range to the specified position.
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @returns A number of squares to the given position.
   */
  getRangeTo(x: number, y: number): number;

  /**
   * CPU cost: LOW
   *
   * Get linear range to the specified position.
   *
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns A number of squares to the given position.
   */
  getRangeTo(target: RoomPosition | RoomObject): number;

  /**
   * CPU cost: LOW
   *
   * Check whether this position is in the given range of another position.
   *
   * @param x X position in the same room.
   * @param y Y position in the same room.
   * @param range The range distance.
   * @returns A boolean value.
   */
  inRangeTo(x: number, y: number, range: number): boolean;

  /**
   * CPU cost: LOW
   *
   * Check whether this position is in the given range of another position.
   *
   * @param toPos The target position.
   * @param range The range distance.
   * @returns A boolean value.
   */
  inRangeTo(toPos: RoomPosition | RoomObject, range: number): boolean;

  /**
   * CPU cost: LOW
   *
   * Check whether this position is the same as the specified position.
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @returns A boolean value.
   */
  isEqualTo(x: number, y: number): boolean;

  /**
   * CPU cost: LOW
   *
   * Check whether this position is the same as the specified position.
   *
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns A boolean value.
   */
  isEqualTo(target: RoomPosition | RoomObject): boolean;

  /**
   * CPU cost: LOW
   *
   * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @returns A boolean value.
   */
  isNearTo(x: number, y: number): boolean;

  /**
   * CPU cost: LOW
   *
   * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
   *
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns A boolean value.
   */
  isNearTo(target: RoomPosition | RoomObject): boolean;

  /**
   * CPU cost: AVERAGE
   *
   * Get the list of objects at the specified room position.
   *
   * @returns An array with objects at the specified position
   */
  look(): LookAtResult[];

  /**
   * CPU cost: LOW
   *
   * Get an object with the given type at the specified room position.
   *
   * @param type One of the LOOK_* constants.
   * @returns An array of objects of the given type at the specified position if found.
   */
  lookFor<T extends RoomObject>(type: LookType<T>): T[];

}

interface FindClosestPathOpts<T> extends FindPathOpts, FilterOptions<T> {

  /**
   * One of the following constants:
   * - astar is faster when there are relatively few possible targets;
   * - dijkstra is faster when there are a lot of possible targets or when the closest target is nearby.
   * The default value is determined automatically using heuristics.
   */
  algorithm?: 'astar' | 'dijkstra';

}

interface FilterOptions<T> {

  /**
   * Only the objects which pass the filter using the Lodash.filter method will be used.
   */
  filter?: ListIterator<T, boolean> | string; // TODO: support maps

}

// from lodash

interface ListIterator<T, TResult> {
  (value: T, index: number, collection: List<T>): TResult;
}

interface List<T> {
  [index: number]: T;
  length: number;
}
