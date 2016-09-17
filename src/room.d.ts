/**
 * An object representing the room in which your units and structures are in. It can be used to look around, find paths, etc. Every object
 * in the room contains its linked Room instance in the room property.
 */
declare class Room {

  /**
   * CPU cost: LOW
   *
   * Serialize a path array into a short string representation, which is suitable to store in memory.
   *
   * @param path A path array retrieved from Room.findPath.
   * @returns A serialized string form of the given path.
   */
  public static serializePath(path: PathStep[]): SerializedPath;

  /**
   * CPU cost: LOW
   *
   * Deserialize a short string path representation into an array form.
   *
   * @param path A serialized path string.
   * @returns A path array.
   */
  public static deserializePath(path: SerializedPath): PathStep[];

  /**
   * The Controller structure of this room, if present, otherwise undefined.
   */
  public readonly controller: Controller | undefined;

  /**
   * Total amount of energy available in all spawns and extensions in the room.
   */
  public readonly energyAvailable: number;

  /**
   * Total amount of energyCapacity of all spawns and extensions in the room.
   */
  public energyCapacityAvailable: number;

  /**
   * A shorthand to Memory.rooms[room.name]. You can use it for quick access the room’s specific memory data object.
   */
  public memory: RoomMemory;

  /**
   * One of the following constants:
   * MODE_SIMULATION, MODE_SURVIVAL, MODE_WORLD, MODE_ARENA
   */
  public readonly mode: RoomModes;

  /**
   * The name of the room.
   */
  public readonly name: RoomName;

  /**
   * The Storage structure of this room, if present, otherwise undefined.
   */
  public readonly storage: SStorage;

  /**
   * The Terminal structure of this room, if present, otherwise undefined.
   */
  public readonly terminal: Terminal;

  /**
   * CPU cost: CONST
   *
   * Create new ConstructionSite at the specified location.
   *
   * @param x The X position.
   * @param y The Y position.
   * @param structureType One of the STRUCTURE_* constants.
   * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_FULL, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
   */
  public createConstructionSite(x: number, y: number, structureType: StructureType<any>): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Create new ConstructionSite at the specified location.
   *
   * @param pos Can be a RoomPosition object or any object containing RoomPosition.
   * @param structureType One of the STRUCTURE_* constants.
   * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_FULL, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
   */
  public createConstructionSite(pos: RoomPosition | RoomObject, structureType: StructureType<any>): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Create new Flag at the specified location.
   *
   * @param x The X position.
   * @param y The Y position.
   * @param name (optional) The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with
   *     the same name (hash key). If not defined, a random name will be generated.
   * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
   * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
   * @returns Result Code: OK, ERR_NAME_EXISTS, ERR_INVALID_ARGS
   */
  public createFlag(x: number, y: number, name?: FlagNameOrString, color?: Color, secondaryColor?: Color): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Create new Flag at the specified location.
   *
   * @param pos Can be a RoomPosition object or any object containing RoomPosition.
   * @param name (optional) The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with
   *     the same name (hash key). If not defined, a random name will be generated.
   * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
   * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
   * @returns Result Code: OK, ERR_NAME_EXISTS, ERR_INVALID_ARGS
   */
  public createFlag(pos: RoomPosition | RoomObject, name?: FlagNameOrString, color?: Color, secondaryColor?: Color): ResponseCode;

  /**
   * CPU cost: AVERAGE
   *
   * Find all objects of the specified type in the room.
   *
   * @param type One of the FIND_* constants.
   * @param opts An object with additional options
   * @returns An array with the objects found.
   */
  public find<T extends RoomObject | RoomPosition>(type: FindType<T>, opts?: FilterOptions<T>): T[];

  /**
   * CPU cost: HIGH
   *
   * Find the exit direction en route to another room. Please note that this method is not required for inter-room movement, you can simply
   * pass the target in another room into Creep.moveTo method.
   *
   * @param room Another room name or room object.
   * @returns The room direction constant, one of the following: FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
   * Or one of the following error codes: ERR_NO_PATH, ERR_INVALID_ARGS
   */
  public findExitTo(room: RoomNameOrString | Room): FindType<RoomPosition> | ResponseCode;

  /**
   * CPU cost: HIGH
   *
   * Find an optimal path inside the room between fromPos and toPos using A* search algorithm.
   *
   * @param fromPos The start position.
   * @param toPos The end position.
   * @param opts (optional) An object containing additonal pathfinding flags
   * @returns An array with path steps
   */
  public findPath(fromPos: RoomPosition, toPos: RoomPosition, opts?: FindPathOpts): PathStep[];

  /**
   * CPU cost: LOW
   *
   * Creates a RoomPosition object at the specified location.
   *
   * @param x The X position.
   * @param y The Y position.
   * @returns A RoomPosition object or null if it cannot be obtained.
   */
  public getPositionAt(x: number, y: number): RoomPosition | null;

  /**
   * CPU cost: AVERAGE
   *
   * Get the list of objects at the specified room position.
   *
   * @param x The X position.
   * @param y The Y position.
   * @returns An array with objects at the specified position
   */
  public lookAt(x: number, y: number): LookAtResult[];

  /**
   * CPU cost: AVERAGE
   *
   * Get the list of objects at the specified room position.
   *
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns An array with objects at the specified position
   */
  public lookAt(target: RoomPosition | RoomObject): LookAtResult[];

  /**
   * CPU cost: AVERAGE
   *
   * Get the list of objects at the specified room area. This method is more CPU efficient in comparison to multiple lookAt calls.
   *
   * @param top The top Y boundary of the area.
   * @param left The left X boundary of the area.
   * @param bottom The bottom Y boundary of the area.
   * @param right The right X boundary of the area.
   * @param asArray Set to true if you want to get the result as a plain array.
   * @returns An object with all the objects in the specified area
   */
  public lookAtArea(top: number, left: number, bottom: number, right: number,
                    asArray?: boolean): LookAtResultMatrix | LookAtResultWithPos[];

  /**
   * CPU cost: LOW
   *
   * Get an object with the given type at the specified room position.
   *
   * @param type One of the LOOK_* constants.
   * @param x The X position.
   * @param y The Y position.
   * @returns An array of objects of the given type at the specified position if found.
   */
  public lookForAt<T>(type: LookType<T>, x: number, y: number): T[] | null;

  /**
   * CPU cost: LOW
   *
   * Get an object with the given type at the specified room position.
   *
   * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns An array of objects of the given type at the specified position if found.
   */
  public lookForAt<T>(type: LookType<T>, target: RoomPosition | RoomObject): T[] | null;

  /**
   * CPU cost: LOW
   *
   * Get the list of objects with the given type at the specified room area. This method is more CPU efficient in comparison to multiple
   * lookForAt calls.
   *
   * @param type One of the LOOK_* constants.
   * @param top The top Y boundary of the area.
   * @param left The left X boundary of the area.
   * @param bottom The bottom Y boundary of the area.
   * @param right The right X boundary of the area.
   * @param asArray Set to true if you want to get the result as a plain array.
   * @returns An object with all the objects of the given type in the specified area
   */
  public lookForAtArea(type: LookType<any>, top: number, left: number, bottom: number, right: number,
                       asArray?: boolean): LookAtResultMatrix | LookAtResultWithPos[];

}
