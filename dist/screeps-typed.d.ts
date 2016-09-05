interface StoreDefinition {
  [resource: string]: number;
  energy: number;
}

/**
 * An object with the structure’s owner info
 */
interface Owner {

  /**
   * The name of the owner user.
   */
  username: string;

}

interface LookAtResult {
  type: string;
  constructionSite?: ConstructionSite;
  creep?: Creep;
  energy?: Resource;
  exit?: any;
  flag?: Flag;
  source?: Source;
  structure?: Structure;
  terrain?: TerrainType;
}

interface LookAtResultWithPos extends LookAtResult {
  x: number;
  y: number;
}

interface LookAtResultMatrix {
  [coord: number]: LookAtResultMatrix | LookAtResult[];
}

interface PathStep {
  x: number;
  y: number;
  dx: number;
  dy: number;
  direction: Direction;
}

interface FindPathOpts {

  /**
   * Treat squares with creeps as walkable. Can be useful with too many moving creeps around or in some other cases. The default value is
   * false.
   */
  ignoreCreeps?: boolean;

  /**
   * Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when you need
   * to move through a territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square, it
   * automatically attacks the structure. The default value is false.
   */
  ignoreDestructibleStructures?: boolean;

  /**
   * Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the new
   * PathFinder is enabled.
   */
  ignoreRoads?: boolean;

  /**
   * An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. This option cannot
   * be used when the new PathFinder is enabled (use costCallback option instead).
   */
  ignore?: RoomPosition[] | RoomObject[];

  /**
   * An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search. This option cannot be
   * used when the new PathFinder is enabled (use costCallback option instead).
   */
  avoid?: RoomPosition[] | RoomObject[];

  /**
   * The maximum limit of possible pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The
   * default value is 2000.
   */
  maxOps?: number;

  /**
   * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying A*
   * algorithm mechanics! The default value is 1.2.
   */
  heuristicWeight?: number;

  /**
   * If true, the result path will be serialized using Room.serializePath. The default is false.
   */
  serialize?: boolean;

  /**
   * The maximum allowed rooms to search. The default (and maximum) is 16. This is only used when the new PathFinder is enabled.
   */
  maxRooms?: number;

  /**
   * You can use this callback to modify a CostMatrix for any room during the search. The callback accepts two arguments, roomName and
   * costMatrix. Use the costMatrix instance to make changes to the positions costs. If you return a new matrix from this callback, it will
   * be used instead of the built-in cached one. This option is only used when the new PathFinder is enabled.
   *
   * @param roomName The name of the room.
   * @param costMatrix The current CostMatrix
   * @returns The new CostMatrix to use
   */
  costCallback?(roomName: string, costMatrix: CostMatrix): CostMatrix;

}
// Responses
interface ResponseCode extends Number {
}

declare const OK: ResponseCode;
declare const ERR_NOT_OWNER: ResponseCode;
declare const ERR_NO_PATH: ResponseCode;
declare const ERR_NAME_EXISTS: ResponseCode;
declare const ERR_BUSY: ResponseCode;
declare const ERR_NOT_FOUND: ResponseCode;
declare const ERR_NOT_ENOUGH_ENERGY: ResponseCode;
declare const ERR_NOT_ENOUGH_RESOURCES: ResponseCode;
declare const ERR_INVALID_TARGET: ResponseCode;
declare const ERR_FULL: ResponseCode;
declare const ERR_NOT_IN_RANGE: ResponseCode;
declare const ERR_INVALID_ARGS: ResponseCode;
declare const ERR_TIRED: ResponseCode;
declare const ERR_NO_BODYPART: ResponseCode;
declare const ERR_NOT_ENOUGH_EXTENSIONS: ResponseCode;
declare const ERR_RCL_NOT_ENOUGH: ResponseCode;
declare const ERR_GCL_NOT_ENOUGH: ResponseCode;

// Structures
interface StructureType<T extends Structure> extends String { // tslint:disable-line
}

declare const STRUCTURE_SPAWN: StructureType<Spawn>;
declare const STRUCTURE_EXTENSION: StructureType<Extension>;
declare const STRUCTURE_ROAD: StructureType<Road>;
declare const STRUCTURE_WALL: StructureType<Wall>;
declare const STRUCTURE_RAMPART: StructureType<Rampart>;
declare const STRUCTURE_KEEPER_LAIR: StructureType<KeeperLair>;
declare const STRUCTURE_PORTAL: StructureType<Portal>;
declare const STRUCTURE_CONTROLLER: StructureType<Controller>;
declare const STRUCTURE_LINK: StructureType<Link>;
declare const STRUCTURE_STORAGE: StructureType<StructureStorage>;
declare const STRUCTURE_TOWER: StructureType<Tower>;
declare const STRUCTURE_OBSERVER: StructureType<Observer>;
declare const STRUCTURE_POWER_BANK: StructureType<PowerBank>;
declare const STRUCTURE_POWER_SPAWN: StructureType<Structure>;
declare const STRUCTURE_EXTRACTOR: StructureType<Extractor>;
declare const STRUCTURE_LAB: StructureType<Lab>;
declare const STRUCTURE_TERMINAL: StructureType<Terminal>;
declare const STRUCTURE_CONTAINER: StructureType<Container>;
declare const STRUCTURE_NUKER: StructureType<Nuker>;

// Colors
interface Color extends Number {
}

declare const COLOR_RED: Color;
declare const COLOR_PURPLE: Color;
declare const COLOR_BLUE: Color;
declare const COLOR_CYAN: Color;
declare const COLOR_GREEN: Color;
declare const COLOR_YELLOW: Color;
declare const COLOR_ORANGE: Color;
declare const COLOR_BROWN: Color;
declare const COLOR_GREY: Color;
declare const COLOR_WHITE: Color;

// FindTypes
interface FindType<T extends RoomObject | RoomPosition> extends Number {
}

declare const FIND_EXIT_TOP: FindType<RoomPosition>;
declare const FIND_EXIT_RIGHT: FindType<RoomPosition>;
declare const FIND_EXIT_BOTTOM: FindType<RoomPosition>;
declare const FIND_EXIT_LEFT: FindType<RoomPosition>;
declare const FIND_EXIT: FindType<RoomPosition>;
declare const FIND_CREEPS: FindType<Creep>;
declare const FIND_MY_CREEPS: FindType<Creep>;
declare const FIND_HOSTILE_CREEPS: FindType<Creep>;
declare const FIND_SOURCES_ACTIVE: FindType<Source>;
declare const FIND_SOURCES: FindType<Source>;
declare const FIND_DROPPED_ENERGY: FindType<Resource>;
declare const FIND_DROPPED_RESOURCES: FindType<Resource>;
declare const FIND_STRUCTURES: FindType<Structure>;
declare const FIND_MY_STRUCTURES: FindType<Structure>;
declare const FIND_HOSTILE_STRUCTURES: FindType<Structure>;
declare const FIND_FLAGS: FindType<Flag>;
declare const FIND_MY_SPAWNS: FindType<Spawn>;
declare const FIND_HOSTILE_SPAWNS: FindType<Spawn>;
declare const FIND_CONSTRUCTION_SITES: FindType<ConstructionSite>;
declare const FIND_MY_CONSTRUCTION_SITES: FindType<ConstructionSite>;
declare const FIND_HOSTILE_CONSTRUCTION_SITES: FindType<ConstructionSite>;
declare const FIND_MINERALS: FindType<Mineral>;
declare const FIND_NUKES: FindType<Nuke>;

// Directions
interface Direction extends Number {
}

declare const TOP: Direction;
declare const TOP_RIGHT: Direction;
declare const RIGHT: Direction;
declare const BOTTOM_RIGHT: Direction;
declare const BOTTOM: Direction;
declare const BOTTOM_LEFT: Direction;
declare const LEFT: Direction;
declare const TOP_LEFT: Direction;

// Looks
interface LookType<T> extends String {
}

declare const LOOK_CREEPS: LookType<Creep>;
declare const LOOK_ENERGY: LookType<Resource>;
declare const LOOK_RESOURCES: LookType<Resource>;
declare const LOOK_SOURCES: LookType<Source>;
declare const LOOK_MINERALS: LookType<Mineral>;
declare const LOOK_STRUCTURES: LookType<Structure>;
declare const LOOK_FLAGS: LookType<Flag>;
declare const LOOK_CONSTRUCTION_SITES: LookType<ConstructionSite>;
declare const LOOK_NUKES: LookType<Nuke>;
declare const LOOK_TERRAIN: LookType<TerrainType>;

// BodyParts
interface BodyPartType extends String {
}

declare const MOVE: BodyPartType;
declare const WORK: BodyPartType;
declare const CARRY: BodyPartType;
declare const ATTACK: BodyPartType;
declare const RANGED_ATTACK: BodyPartType;
declare const TOUGH: BodyPartType;
declare const HEAL: BodyPartType;
declare const CLAIM: BodyPartType;

// ResourceTypeTypes
interface ResourceType extends String {
}

declare const RESOURCE_ENERGY: ResourceType; // energy
declare const RESOURCE_POWER: ResourceType; // power

declare const RESOURCE_HYDROGEN: ResourceType; // H
declare const RESOURCE_OXYGEN: ResourceType; // O
declare const RESOURCE_UTRIUM: ResourceType; // U
declare const RESOURCE_LEMERGIUM: ResourceType; // L
declare const RESOURCE_KEANIUM: ResourceType; // K
declare const RESOURCE_ZYNTHIUM: ResourceType; // Z
declare const RESOURCE_CATALYST: ResourceType; // X
declare const RESOURCE_GHODIUM: ResourceType; // G

declare const RESOURCE_HYDROXIDE: ResourceType; // OH
declare const RESOURCE_ZYNTHIUM_KEANITE: ResourceType; // ZK
declare const RESOURCE_UTRIUM_LEMERGITE: ResourceType; // UL

declare const RESOURCE_UTRIUM_HYDRIDE: ResourceType; // UH
declare const RESOURCE_UTRIUM_OXIDE: ResourceType; // UO
declare const RESOURCE_KEANIUM_HYDRIDE: ResourceType; // KH
declare const RESOURCE_KEANIUM_OXIDE: ResourceType; // KO
declare const RESOURCE_LEMERGIUM_HYDRIDE: ResourceType; // LH
declare const RESOURCE_LEMERGIUM_OXIDE: ResourceType; // LO
declare const RESOURCE_ZYNTHIUM_HYDRIDE: ResourceType; // ZH
declare const RESOURCE_ZYNTHIUM_OXIDE: ResourceType; // ZO
declare const RESOURCE_GHODIUM_HYDRIDE: ResourceType; // GH
declare const RESOURCE_GHODIUM_OXIDE: ResourceType; // GO

declare const RESOURCE_UTRIUM_ACID: ResourceType; // UH2O
declare const RESOURCE_UTRIUM_ALKALIDE: ResourceType; // UHO2
declare const RESOURCE_KEANIUM_ACID: ResourceType; // KH2O
declare const RESOURCE_KEANIUM_ALKALIDE: ResourceType; // KHO2
declare const RESOURCE_LEMERGIUM_ACID: ResourceType; // LH2O
declare const RESOURCE_LEMERGIUM_ALKALIDE: ResourceType; // LHO2
declare const RESOURCE_ZYNTHIUM_ACID: ResourceType; // ZH2O
declare const RESOURCE_ZYNTHIUM_ALKALIDE: ResourceType; // ZHO2
declare const RESOURCE_GHODIUM_ACID: ResourceType; // GH2O
declare const RESOURCE_GHODIUM_ALKALIDE: ResourceType; // GHO2

declare const RESOURCE_CATALYZED_UTRIUM_ACID: ResourceType; // XUH2O
declare const RESOURCE_CATALYZED_UTRIUM_ALKALIDE: ResourceType; // XUHO2
declare const RESOURCE_CATALYZED_KEANIUM_ACID: ResourceType; // XKH2O
declare const RESOURCE_CATALYZED_KEANIUM_ALKALIDE: ResourceType; // XKHO2
declare const RESOURCE_CATALYZED_LEMERGIUM_ACID: ResourceType; // XLH2O
declare const RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE: ResourceType; // XLHO2
declare const RESOURCE_CATALYZED_ZYNTHIUM_ACID: ResourceType; // XZH2O
declare const RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE: ResourceType; // XZHO2
declare const RESOURCE_CATALYZED_GHODIUM_ACID: ResourceType; // XGH2O
declare const RESOURCE_CATALYZED_GHODIUM_ALKALIDE: ResourceType; // XGHO2

// Terrains
interface TerrainType extends String {
}

// variables since they get defined by us
declare var TERRAIN_PLAIN: TerrainType;
declare var TERRAIN_SPAWN: TerrainType;
declare var TERRAIN_WALL: TerrainType;

// RoomModes
interface RoomModes extends String {
}

declare const MODE_SIMULATION: RoomModes;
declare const MODE_SURVIVAL: RoomModes;
declare const MODE_WORLD: RoomModes;
declare const MODE_ARENA: RoomModes;
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
declare const Creep: CreepConstructor;

interface CreepConstructor {
  prototype: Creep;
}

/**
 * Creeps are your units. Creeps can move, harvest energy, construct structures, attack another creeps, and perform other actions. Each
 * creep consists of up to 50 body parts.
 */
interface Creep extends RoomObject {

  /**
   * An array describing the creep’s body.
   */
  body: BodyPart[];

  /**
   * An object with the creep's cargo contents. Each object key is one of the RESOURCE_* constants, values are resources amounts. Use
   * lodash.sum to get the total amount of contents
   */
  carry: StoreDefinition;

  /**
   * The total amount of resources the creep can carry.
   */
  carryCapacity: number;

  /**
   * The movement fatigue indicator. If it is greater than zero, the creep cannot move.
   */
  fatigue: number;

  /**
   * The current amount of hit points of the creep.
   */
  hits: number;

  /**
   * The maximum amount of hit points of the creep.
   */
  hitsMax: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  id: string;

  /**
   * A shorthand to Memory.creeps[creep.name]. You can use it for quick access the creep’s specific memory data object.
   */
  memory: CreepMemory;

  /**
   * Whether it is your creep or foe.
   */
  my: boolean;

  /**
   * Creep’s name. You can choose the name while creating a new creep, and it cannot be changed later. This name is a hash key to access
   * the creep via the Game.creeps object.
   */
  name: string;

  /**
   * An object with the creep’s owner info
   */
  owner: Owner;

  /**
   * The text message that the creep was saying at the last tick.
   */
  saying: string;

  /**
   * Whether this creep is still being spawned.
   */
  spawning: boolean;

  /**
   * The remaining amount of game ticks after which the creep will die.
   */
  ticksToLive: number;

  /**
   * CPU cost: CONST
   *
   * Attack another creep or structure in a short-ranged attack. Requires the ATTACK body part. If the target is inside a rampart, then the
   * rampart is attacked instead. The target has to be at adjacent square to the creep. If the target is a creep with ATTACK body parts and
   * is not inside a rampart, it will automatically hit back at the attacker.
   *
   * @param target The target object to be attacked.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
   */
  attack(target: Creep | Structure): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Decreases the controller's downgrade or reservation timer for 1 tick per every 5 CLAIM body parts (so the creep must have at least
   * 5xCLAIM). The controller under attack cannot be upgraded for the next 1,000 ticks. The target has to be at adjacent square to the
   * creep.
   *
   * @param target The target controller object.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
   */
  attackController(target: Controller): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Build a structure at the target construction site using carried energy. Requires WORK and CARRY body parts. The target has to be
   * within 3 squares range of the creep.
   *
   * @param target The target construction site to be built.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART,
   *     ERR_RCL_NOT_ENOUGH
   */
  build(target: ConstructionSite): ResponseCode;

  /**
   * CPU cost: NONE
   *
   * Cancel the order given during the current game tick.
   *
   * @param methodName The name of a creep's method to be cancelled.
   * @returns Result Code: OK, ERR_NOT_FOUND
   */
  cancelOrder(methodName: string): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Claims a neutral controller under your control. Requires the CLAIM body part. The target has to be at adjacent square to the creep.
   * You need to have the corresponding Global Control Level in order to claim a new room. If you don't have enough GCL, consider reserving
   * this room instead.
   *
   * @param target The target controller object.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE, ERR_NO_BODYPART, ERR_GCL_NOT_ENOUGH
   */
  claimController(target: Controller): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Dismantles any (even hostile) structure returning 50% of the energy spent on its repair. Requires the WORK body part. If the creep has
   * an empty CARRY body part, the energy is put into it; otherwise it is dropped on the ground. The target has to be at adjacent square to
   * the creep.
   *
   * @param target The target structure.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
   */
  dismantle(target: Structure): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Drop this resource on the ground.
   *
   * @param resourceType One of the RESOURCE_* constants.
   * @param amount The amount of resource units to be dropped. If omitted, all the available carried amount is used.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES
   */
  drop(resourceType: ResourceType, amount?: number): ResponseCode;

  /**
   * CPU cost: NONE
   *
   * Get the quantity of live body parts of the given type. Fully damaged parts do not count.
   *
   * @param type A body part type, one of the following body part constants: MOVE, WORK, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
   * @returns A number representing the quantity of body parts.
   */
  getActiveBodyparts(type: BodyPartType): number;

  /**
   * CPU cost: CONST
   *
   * Harvest energy from the source or minerals from the mineral deposit. Requires the WORK body part. If the creep has an empty CARRY body
   * part, the harvested resource is put into it; otherwise it is dropped on the ground. The target has to be at an adjacent square to the
   * creep.
   *
   * @param target The object to be harvested.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_FOUND, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE,
   * ERR_NO_BODYPART
   */
  harvest(target: Source | Mineral): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Heal self or another creep. It will restore the target creep’s damaged body parts function and increase the hits counter. Requires the
   * HEAL body part. The target has to be at adjacent square to the creep.
   *
   * @param target The target creep object.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
   */
  heal(target: Creep): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Move the creep one square in the specified direction. Requires the MOVE body part.
   *
   * @param direction Direction to move.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_TIRED, ERR_NO_BODYPART
   */
  move(direction: Direction): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Move the creep using the specified predefined path. Requires the MOVE body part.
   *
   * @param path A path value as returned from Room.findPath, RoomPosition.findPathTo, or PathFinder.search methods. Both array form and
   *     serialized string form are accepted.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_FOUND, ERR_INVALID_ARGS, ERR_TIRED, ERR_NO_BODYPART
   */
  moveByPath(path: PathStep[] | RoomPosition[] | string): ResponseCode;

  /**
   * CPU cost: HIGH
   *
   * Find the optimal path to the target within the same room and move to it. A shorthand to consequent calls of pos.findPathTo() and
   * move() methods. If the target is in another room, then the corresponding exit will be used as a target. Requires the MOVE body part.
   *
   * @param x X position of the target in the room.
   * @param y Y position of the target in the room.
   * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath,
   *     serializeMemory, noPathFinding
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_TIRED, ERR_NO_BODYPART, ERR_INVALID_TARGET, ERR_NO_PATH
   */
  moveTo(x: number, y: number, opts?: MoveToOpts & FindPathOpts): ResponseCode;

  /**
   * CPU cost: HIGH
   *
   * Find the optimal path to the target within the same room and move to it. A shorthand to consequent calls of pos.findPathTo() and
   * move() methods. If the target is in another room, then the corresponding exit will be used as a target. Requires the MOVE body part.
   *
   * @param target Can be a RoomPosition object or any object containing RoomPosition. The position doesn't have to be in the same room
   *     with the creep.
   * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath,
   *     serializeMemory, noPathFinding
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_TIRED, ERR_NO_BODYPART, ERR_INVALID_TARGET, ERR_NO_PATH
   */
  moveTo(target: RoomPosition | RoomObject, opts?: MoveToOpts & FindPathOpts): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Toggle auto notification when the creep is under attack. The notification will be sent to your account email. Turned on by default.
   *
   * @param enabled Whether to enable notification or disable.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_INVALID_ARGS
   */
  notifyWhenAttacked(enabled: boolean): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Pick up an item (a dropped piece of energy). Requires the CARRY body part. The target has to be at adjacent square to the creep or at
   * the same square.
   *
   * @param target The target object to be picked up.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE
   */
  pickup(target: Resource): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * A ranged attack against another creep or structure. Requires the RANGED_ATTACK body part. If the target is inside a rampart, the
   * rampart is attacked instead. The target has to be within 3 squares range of the creep.
   *
   * @param target The target object to be attacked.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
   */
  rangedAttack(target: Creep | Structure): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Heal another creep at a distance. It will restore the target creep’s damaged body parts function and increase the hits counter.
   * Requires the HEAL body part. The target has to be within 3 squares range of the creep.
   *
   * @param target The target creep object.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
   */
  rangedHeal(target: Creep): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * A ranged attack against all hostile creeps or structures within 3 squares range. Requires the RANGED_ATTACK body part. The attack
   * power depends on the range to each target. Friendly units are not affected.
   *
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NO_BODYPART
   */
  rangedMassAttack(): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Repair a damaged structure using carried energy. Requires the WORK and CARRY body parts. The target has to be within 3 squares range
   * of the creep.
   *
   * @param target he target structure to be repaired.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
   */
  repair(target: Structure): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Temporarily block a neutral controller from claiming by other players and restore energy sources to their full capacity. Each tick,
   * this command increases the counter of the period during which the controller is unavailable by 1 tick per each CLAIM body part. The
   * maximum reservation period to maintain is 5,000 ticks. The target has to be at adjacent square to the creep.
   *
   * @param target The target controller object to be reserved.
   * @returns Result code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
   */
  reserveController(target: Controller): ResponseCode;

  /**
   * CPU cost: NONE
   *
   * Display a visual speech balloon above the creep with the specified message. The message will be available for one tick. You can read
   * the last message using the saying property.
   *
   * @param message The message to be displayed. Maximum length is 10 characters.
   * @param toPublic Set to true to allow other players to see this message. Default is false.
   * @returns Result code: OK, ERR_NOT_OWNER, ERR_BUSY
   */
  say(message: string, toPublic?: boolean): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Kill the creep immediately.
   *
   * @returns Result code: OK, ERR_NOT_OWNER, ERR_BUSY
   */
  suicide(): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Transfer resource from the creep to another object. The target has to be at adjacent square to the creep.
   *
   * @param target The target object.
   * @param resourceType One of the RESOURCE_* constants
   * @param amount The amount of resources to be transferred. If omitted, all the available carried amount is used.
   * @returns Result code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE,
   *     ERR_INVALID_ARGS
   */
  transfer(target: Creep | Structure, resourceType: ResourceType, amount?: number): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Upgrade your controller to the next level using carried energy. Upgrading controllers raises your Global Control Level in parallel.
   * Requires WORK and CARRY body parts. The target has to be within 3 squares range of the creep. A fully upgraded level 8 controller
   * can't be upgraded over 15 energy units per tick regardless of creeps abilities. The cumulative effect of all the creeps performing
   * upgradeController in the current tick is taken into account. This limit can be increased by using ghodium mineral boost.
   *
   * @param target The target controller object to be upgraded.
   * @returns Result code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
   */
  upgradeController(target: Controller): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Withdraw resources from a structure. The target has to be at adjacent square to the creep. Multiple creeps can withdraw from the same
   * structure in the same tick. Your creeps can withdraw resources from hostile structures as well, in case if there is no hostile rampart
   * on top of it.
   *
   * @param target The target object.
   * @param resourceType The target One of the RESOURCE_* constants..
   * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
   * @returns Result code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE,
   *     ERR_INVALID_ARGS
   */
  withdraw(target: Structure, resourceType: ResourceType, amount?: number): ResponseCode;

}

interface BodyPart {

  /**
   * If the body part is boosted, this property specifies the mineral type which is used for boosting. One of the RESOURCE_* constants.
   */
  boost: Resource | undefined;

  /**
   * One of the body part types constants.
   */
    type: BodyPartType;

  /**
   * The remaining amount of hit points of this body part.
   */
  hits: number;

}

interface MoveToOpts {

  /**
   * This option enables reusing the path found along multiple game ticks. It allows to save CPU time, but can result in a slightly slower
   * creep reaction behavior. The path is stored into the creep's memory to the _move property. The reusePath value defines the amount of
   * ticks which the path should be reused for. The default value is 5. Increase the amount to save more CPU, decrease to make the movement
   * more consistent. Set to 0 if you want to disable path reusing.
   */
  reusePath: number;

  /**
   * If reusePath is enabled and this option is set to true, the path will be stored in memory in the short serialized form using
   * Room.serializePath. The default value is true.
   */
  serializeMemory: boolean;

  /**
   * If this option is set to true, moveTo method will return ERR_NOT_FOUND if there is no memorized path to reuse. This can significantly
   * save CPU time in some cases. The default value is false.
   */
  noPathFinding: boolean;

}
declare const Flag: FlagConstructor;

interface FlagConstructor {
  prototype: Flag;
}

/**
 * A flag. Flags can be used to mark particular spots in a room. Flags are visible to their owners only.
 */
interface Flag extends RoomObject {

  /**
   * Flag primary color. One of the COLOR_* constants.
   */
  color: Color;

  /**
   * A shorthand to Memory.flags[flag.name]. You can use it for quick access the flag's specific memory data object.
   */
  memory: FlagMemory;

  /**
   * Flag’s name. You can choose the name while creating a new flag, and it cannot be changed later. This name is a hash key to access the
   * spawn via the Game.flags object.
   */
  name: string;

  /**
   * Flag secondary color. One of the COLOR_* constants.
   */
  secondaryColor: Color;

  /**
   * CPU cost: CONST
   *
   * Remove the flag.
   *
   * @returns Always returns OK.
   */
  remove(): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Set new color of the flag.
   *
   * @param color Primary color of the flag. One of the COLOR_* constants.
   * @parma secondaryColor Secondary color of the flag. One of the COLOR_* constants.
   * @returns Result Code: OK, ERR_INVALID_ARGS
   */
  setColor(color: Color, secondaryColor?: Color): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Set new position of the flag.
   *
   * @param x The X position in the room.
   * @param y The Y position in the room.
   * @returns Result Code: OK, ERR_INVALID_TARGET
   */
  setPosition(x: number, y: number): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Set new position of the flag.
   *
   * @param pos Can be a RoomPosition object or any object containing RoomPosition.
   * @returns Result Code: OK, ERR_INVALID_TARGET
   */
  setPosition(pos: RoomPosition | RoomObject): ResponseCode;

}
/**
 * The main global game object containing all the gameplay information.
 */
declare namespace Game {

  /**
   * A hash containing all your construction sites with their id as hash keys.
   */
  export const constructionSites: {[constructionSiteId: string]: ConstructionSite};

  /**
   * An object containing information about your CPU usage.
   */
  export const cpu: CPU;

  /**
   * A hash containing all your creeps with creep names as hash keys.
   */
  export const creeps: {[creepName: string]: Creep};

  /**
   * A hash containing all your flags with flag names as hash keys.
   */
  export const flags: {[flagName: string]: Flag};

  /**
   * Your Global Control Level
   */
  export const gcl: GCL;

  /**
   * A global object representing world map.
   */
  // export const map: Game.Map;

  /**
   * A global object representing the in-game market.
   */
  // export const market: Market;

  /**
   * A hash containing all the rooms available to you with room names as hash keys. A room is visible if you have a creep or an owned
   * structure in it.
   */
  export const rooms: {[roomName: string]: Room};

  /**
   * A hash containing all your spawns with spawn names as hash keys.
   */
  export const spawns: {[spawnName: string]: Spawn};

  /**
   * A hash containing all your structures with structure id as hash keys.
   */
  export const structures: {[structureId: string]: Structure};

  /**
   * System game tick counter. It is automatically incremented on every tick.
   */
  export const time: number;

  /**
   * CPU cost: LOW
   *
   * Get an object with the specified unique ID. It may be a game object of any type. Only objects from the rooms which are visible to you
   * can be accessed.
   *
   * @param id The unique identificator.
   * @returns an object instance or null if it cannot be found.
   */
  export function getObjectById<T>(id: string): T | null;

  /**
   * CPU cost: CONST
   *
   * Send a custom message at your profile email. This way, you can set up notifications to yourself on any occasion within the game. You
   * can schedule up to 20 notifications during one game tick. Not available in the Simulation Room.
   *
   * @param message Custom text which will be sent in the message. Maximum length is 1000 characters.
   * @param groupInterval If set to 0 (default), the notification will be scheduled immediately. Otherwise, it will be grouped with other
   *     notifications and mailed out later using the specified time in minutes.
   */
  export function notify(message: string, groupInterval?: number): void;

}

/**
 * An object containing information about your CPU usage.
 */
interface CPU {

  /**
   * Your CPU limit depending on your Global Control Level.
   */
  limit: number;

  /**
   * An amount of available CPU time at the current game tick. It can be higher than Game.cpu.limit.
   */
  tickLimit: number;

  /**
   * An amount of unused CPU accumulated in your bucket.
   */
  bucket: number;

  /**
   * Get amount of CPU time used from the beginning of the current game tick. Always returns 0 in the Simulation mode.
   *
   * @returns currently used CPU time as a float number.
   */
  getUsed(): number;

}

/**
 * Your Global Control Level
 */
interface GCL {

  /**
   * The current level.
   */
  level: number;

  /**
   * The current progress to the next level.
   */
  progress: number;

  /**
   * The progress required to reach the next level.
   */
  progressTotal: number;

}
declare namespace NodeJS {
    interface Global {
        TERRAIN_PLAIN: TerrainType;
        TERRAIN_SPAWN: TerrainType;
        TERRAIN_WALL: TerrainType;
    }
}
declare var global: NodeJS.Global;
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
/**
 * A global object representing world map. Use it to navigate between rooms. The object is accessible via Game.map property.
 */
declare namespace Game.market {

}
declare const Memory: Memory;

interface Memory {

  [name: string]: any;

  creeps: {[name: string]: CreepMemory};

  flags: {[name: string]: FlagMemory};

  rooms: {[name: string]: RoomMemory};

  spawns: {[name: string]: SpawnMemory};

}

interface CreepMemory {
}

interface FlagMemory {
}

interface RoomMemory {
}

interface SpawnMemory {
}
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
declare const Nuke: NukeConstructor;

interface NukeConstructor {
  prototype: Nuke;
}

/**
 * A nuke landing position. This object cannot be removed or modified. You can find incoming nukes in the room using the FIND_NUKES
 * constant.
 */
interface Nuke extends RoomObject {

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  id: string;

  /**
   * The name of the room where this nuke has been launched from.
   */
  launchRoomName: string;

  /**
   * The remaining landing time.
   */
  timeToLand: number;

}
declare const OwnedStructure: OwnedStructureConstructor;

interface OwnedStructureConstructor {
  prototype: OwnedStructure;
}

/**
 * The base prototype for a structure that has an owner. Such structures can be found using FIND_MY_STRUCTURES and FIND_HOSTILE_STRUCTURES
 * constants.
 */
interface OwnedStructure extends Structure {

  /**
   * Whether this is your own structure. Walls and roads don't have this property as they are considered neutral
   * structures.
   */
  my: boolean;

  /**
   * An object with the structure’s owner info (if present) containing the following properties: username
   */
  owner: Owner;

}
/**
 * Contains powerful methods for pathfinding in the game world. Support exists for custom navigation costs and paths which span multiple
 * rooms. Additionally PathFinder can search for paths through rooms you can't see, although you won't be able to detect any dynamic
 * obstacles like creeps or buildings.
 */
declare namespace PathFinder {

  /**
   * Container for custom navigation cost data. By default PathFinder will only consider terrain data (plain, swamp, wall) — if you need to
   * route around obstacles such as buildings or creeps you must put them into a CostMatrix. Generally you will create your CostMatrix from
   * within roomCallback. If a non-0 value is found in a room's CostMatrix then that value will be used instead of the default terrain
   * cost. You should avoid using large values in your CostMatrix and terrain cost flags. For example, running PathFinder.search with {
   * plainCost: 1, swampCost: 5 } is faster than running it with {plainCost: 2, swampCost: 10 } even though your paths will be the same.
   */
  export const CostMatrix: CostMatrixConstructor;

  /**
   * CPU cost: HIGH
   *
   * Find an optimal path between origin and goal.
   *
   * @param origin The start position.
   * @param goal A goal or an array of goals. If more than one goal is supplied then the cheapest path found out of all the goals will be
   *     returned. A goal is either a RoomPosition or an object as defined below.
   * @param opts An object containing additional pathfinding flags.
   */
  export function search(origin: RoomPosition,
                         goal: RoomPosition | SearchGoal | (RoomPosition | SearchGoal)[],
                         opts ?: PathFinderOpts): SearchResult;

  /**
   * CPU cost: NONE
   *
   * Specify whether to use this new experimental pathfinder in game objects methods. This method should be invoked every tick. It affects
   * the following methods behavior: Room.findPath, RoomPosition.findPathTo, RoomPosition.findClosestByPath, Creep.moveTo.
   *
   * @param isEnabled Whether to activate the new pathfinder or deactivate.
   */
  export function use(isEnabled: boolean): void;

}

/**
 * Please note that if your goal is not walkable (for instance, a source) then you should set range to at least 1 or else you will waste
 * many CPU cycles searching for a target that you can't walk on.
 */
interface SearchGoal {

  /**
   * The target.
   */
  pos: RoomPosition;

  /**
   * Range to pos before goal is considered reached. The default is 0.
   */
  range?: number;

}

interface SearchResult {

  /**
   * An array of RoomPosition objects.
   */
  path: RoomPosition[];

  /**
   * Total number of operations performed before this path was calculated.
   */
  ops: number;

}

/**
 * An object containing additional pathfinding flags.
 */
interface PathFinderOpts {

  /**
   * Cost for walking on plain positions. The default is 1.
   */
  plainCost?: number;

  /**
   * Cost for walking on swamp positions. The default is 5.
   */
  swampCost?: number;

  /**
   * Instead of searching for a path to the goals this will search for a path away from the goals. The cheapest path that is out of range
   * of every goal will be returned. The default is false.
   */
  flee?: boolean;

  /**
   * The maximum allowed pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default
   * value is 2000.
   */
  maxOps?: number;

  /**
   * The maximum allowed rooms to search. The default (and maximum) is 16.
   */
  maxRooms?: number;

  /**
   * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying A*
   * algorithm mechanics! The default value is 1.2.
   */
  heuristicWeight?: number;

  /**
   * Request from the pathfinder to generate a CostMatrix for a certain room. The callback accepts one argument, roomName. This callback
   * will only be called once per room per search. If you are running multiple pathfinding operations in a single room and in a single tick
   * you may consider caching your CostMatrix to speed up your code. Please read the CostMatrix documentation below for more information on
   * CostMatrix. If you return false from the callback the requested room will not be searched, and it won't count against maxRooms.
   */
  roomCallback?(roomName: string): boolean | CostMatrix;

}

interface CostMatrixConstructor {

  prototype: CostMatrix;

  /**
   * Creates a new CostMatrix containing 0's for all positions.
   */
  new(): CostMatrix;

  /**
   * CPU cost: LOW
   *
   * Static method which deserializes a new CostMatrix using the return value of serialize.
   *
   * @param val Whatever serialize returned
   * @returns new CostMatrix instance.
   */
  deserialize(val: SerializedCostMatrix): CostMatrix;

}

/**
 * Container for custom navigation cost data. By default PathFinder will only consider terrain data (plain, swamp, wall) — if you need to
 * route around obstacles such as buildings or creeps you must put them into a CostMatrix. Generally you will create your CostMatrix from
 * within roomCallback. If a non-0 value is found in a room's CostMatrix then that value will be used instead of the default terrain cost.
 * You should avoid using large values in your CostMatrix and terrain cost flags. For example, running PathFinder.search with { plainCost:
 * 1, swampCost: 5 } is faster than running it with {plainCost: 2, swampCost: 10 } even though your paths will be the same.
 */
interface CostMatrix {

  /**
   * CPU cost: NONE
   *
   * Set the cost of a position in this CostMatrix.
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @param cost Cost of this position. Must be a whole number. A cost of 0 will use the terrain cost for that tile. A cost greater than or
   *     equal to 255 will be treated as unwalkable.
   */
  set(x: number, y: number, cost: number): void;

  /**
   * CPU cost: NONE
   *
   * Get the cost of a position in this CostMatrix.
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @returns cost
   */
  get(x: number, y: number): number;

  /**
   * CPU cost: LOW
   *
   * Copy this CostMatrix into a new CostMatrix with the same data.
   */
  clone(): CostMatrix;

  /**
   * CPU cost: LOW
   *
   * @returns a compact representation of this CostMatrix which can be stored via JSON.stringify.
   */
  serialize(): SerializedCostMatrix;

}

type SerializedCostMatrix = number[];
/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 */
declare namespace RawMemory {

  /**
   * Get a raw string representation of the Memory object.
   *
   * @returns Returns a string value.
   */
  export function get(): string;

  /**
   * Set new memory value.
   * @param value New memory value as a string.
   */
  export function set(value: string): void;

}
/**
 * A dropped piece of resource. It will decay after a while if not picked up. Dropped resource pile decays for ceil(amount/1000) units per
 * tick.
 */
interface Resource extends RoomObject {

  /**
   * The amount of resource units containing.
   */
  amount: number;

  /**
   * A unique object identificator. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
   */
  id: string;

  /**
   * One of the `RESOURCE_*` constants.
   */
  resourceType: ResourceType;

}
declare const Room: RoomConstructor;

interface RoomConstructor {

  prototype: Room;

  /**
   * CPU cost: LOW
   *
   * Serialize a path array into a short string representation, which is suitable to store in memory.
   *
   * @param path A path array retrieved from Room.findPath.
   * @returns A serialized string form of the given path.
   */
  serializePath(path: PathStep[]): SerializedPath;

  /**
   * CPU cost: LOW
   *
   * Deserialize a short string path representation into an array form.
   *
   * @param path A serialized path string.
   * @returns A path array.
   */
  deserializePath(path: SerializedPath): PathStep[];

}

type SerializedPath = string;

/**
 * An object representing the room in which your units and structures are in. It can be used to look around, find paths, etc. Every object
 * in the room contains its linked Room instance in the room property.
 */
interface Room {

  /**
   * The Controller structure of this room, if present, otherwise undefined.
   */
  controller: Controller | undefined;

  /**
   * Total amount of energy available in all spawns and extensions in the room.
   */
  energyAvailable: number;

  /**
   * Total amount of energyCapacity of all spawns and extensions in the room.
   */
  energyCapacityAvailable: number;

  /**
   * A shorthand to Memory.rooms[room.name]. You can use it for quick access the room’s specific memory data object.
   */
  memory: RoomMemory;

  /**
   * One of the following constants:
   * MODE_SIMULATION, MODE_SURVIVAL, MODE_WORLD, MODE_ARENA
   */
  mode: RoomModes;

  /**
   * The name of the room.
   */
  name: string;

  /**
   * The Storage structure of this room, if present, otherwise undefined.
   */
  storage: StructureStorage;

  /**
   * The Terminal structure of this room, if present, otherwise undefined.
   */
  terminal: Terminal;

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
  createConstructionSite(x: number, y: number, structureType: StructureType<any>): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Create new ConstructionSite at the specified location.
   *
   * @param pos Can be a RoomPosition object or any object containing RoomPosition.
   * @param structureType One of the STRUCTURE_* constants.
   * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_FULL, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
   */
  createConstructionSite(pos: RoomPosition | RoomObject, structureType: StructureType<any>): ResponseCode;

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
  createFlag(x: number, y: number, name?: string, color?: Color, secondaryColor?: Color): ResponseCode;

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
  createFlag(pos: RoomPosition | RoomObject, name?: string, color?: Color, secondaryColor?: Color): ResponseCode;

  /**
   * CPU cost: AVERAGE
   *
   * Find all objects of the specified type in the room.
   *
   * @param type One of the FIND_* constants.
   * @param opts An object with additional options
   * @returns An array with the objects found.
   */
  find<T extends RoomObject | RoomPosition>(type: FindType<T>, opts?: FilterOptions<T>): T[];

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
  findExitTo(room: string | Room): FindType<RoomPosition> | ResponseCode;

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
  findPath(fromPos: RoomPosition, toPos: RoomPosition, opts?: FindPathOpts): PathStep[];

  /**
   * CPU cost: LOW
   *
   * Creates a RoomPosition object at the specified location.
   *
   * @param x The X position.
   * @param y The Y position.
   * @returns A RoomPosition object or null if it cannot be obtained.
   */
  getPositionAt(x: number, y: number): RoomPosition | null;

  /**
   * CPU cost: AVERAGE
   *
   * Get the list of objects at the specified room position.
   *
   * @param x The X position.
   * @param y The Y position.
   * @returns An array with objects at the specified position
   */
  lookAt(x: number, y: number): LookAtResult[];

  /**
   * CPU cost: AVERAGE
   *
   * Get the list of objects at the specified room position.
   *
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns An array with objects at the specified position
   */
  lookAt(target: RoomPosition | RoomObject): LookAtResult[];

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
  lookAtArea(top: number, left: number, bottom: number, right: number, asArray?: boolean): LookAtResultMatrix | LookAtResultWithPos[];

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
  lookForAt<T>(type: LookType<T>, x: number, y: number): T[] | null;

  /**
   * CPU cost: LOW
   *
   * Get an object with the given type at the specified room position.
   *
   * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns An array of objects of the given type at the specified position if found.
   */
  lookForAt<T>(type: LookType<T>, target: RoomPosition | RoomObject): T[] | null;

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
  lookForAtArea(type: LookType<any>, top: number, left: number, bottom: number, right: number, asArray?: boolean): LookAtResultMatrix |
    LookAtResultWithPos[];

}
declare const RoomObject: RoomObjectConstructor;

interface RoomObjectConstructor {
  prototype: RoomObject;
}

/**
 * Any object with a position in a room. Almost all game objects prototypes are derived from RoomObject.
 */
interface RoomObject {

  /**
   * An object representing the position of this object in the room.
   */
  pos: RoomPosition;

  /**
   * The link to the Room object. May be undefined in case if an object is a flag or a construction site and is placed in a room that is
   * not visible to you.
   */
  room: Room | undefined;

}
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
declare const Structure: StructureConstructor;

interface StructureConstructor {
  prototype: Structure;
}

/**
 * The base prototype object of all structures.
 */
interface Structure extends RoomObject {

  /**
   * The current amount of hit points of the structure.
   */
  hits: number;

  /**
   * The total amount of hit points of the structure.
   */
  hitsMax: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  id: string;

  /**
   * One of the STRUCTURE_* constants.
   */
  structureType: StructureType<any>;

  /**
   * CPU cost: CONST
   *
   * Destroy this structure immediately.
   *
   * @returns Return code: OK, ERR_NOT_OWNER
   */
  destroy(): ResponseCode;

  /**
   * CPU cost: AVERAGE
   *
   * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the
   * structure will be highlighted with red in the game.
   *
   * @returns A boolean value.
   */
  isActive(): boolean;

  /**
   * CPU cost: CONST
   *
   * Toggle auto notification when the structure is under attack. The notification will be sent to your account email. Turned on by default.
   *
   * @param enabled Whether to enable notification or disable.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_INVALID_ARGS
   */
  notifyWhenAttacked(enabled: boolean): ResponseCode;

}
declare const StructureContainer: StructureContainerConstructor;

interface StructureContainerConstructor {
  prototype: StructureContainer;
}

type Container = StructureContainer;

/**
 * A small container that can be used to store resources. This is a walkable structure. All dropped resources automatically goes to the
 * container at the same tile.
 */
interface StructureContainer extends Structure {

  /**
   * An object with the structure contents. Each object key is one of the RESOURCE_* constants, values are resources amounts.
   * RESOURCE_ENERGY is always defined and equals to 0 when empty, other resources are undefined when empty. You can use lodash.sum to get
   * the total amount of contents.
   */
  store: StoreDefinition;

  /**
   * The total amount of resources the structure can contain.
   */
  storeCapacity: number;

  /**
   * CPU cost: CONST
   *
   * Transfer resource from this terminal to a creep. The target has to be at adjacent square. You can transfer resources to your creeps
   * from hostile structures as well. This method is deprecated. Please use Creep.withdraw instead.
   *
   * @deprecated
   * @param target The target object.
   * @param resourceType One of the RESOURCE_* constants.
   * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE, ERR_INVALID_ARGS
   */
  transfer(target: Creep, resourceType: ResourceType, amount?: number): ResponseCode;

}
declare const StructureController: StructureControllerConstructor;

interface StructureControllerConstructor {
  prototype: StructureController;
}

type Controller = StructureController;

/**
 * Claim this structure to take control over the room. The controller structure
 * cannot be damaged or destroyed. It can be addressed by `Room.controller`
 * property.
 */
interface StructureController extends OwnedStructure {

  /**
   * Current controller level, from 0 to 8.
   */
  level: number;

  /**
   * The current progress of upgrading the controller to the next level.
   */
  progress: number;

  /**
   * The progress needed to reach the next level.
   */
  progressTotal: number;

  /**
   * An object with the controller reservation info if present: username, ticksToEnd
   */
  // reservation: ReservationDefinition;

  /**
   * The amount of game ticks when this controller will lose one level. This timer can be reset by using
   * Creep.upgradeController.
   */
  ticksToDowngrade: number;

  /**
   * Make your claimed controller neutral again.
   */
  unclaim(): number;

}
declare const StructureExtension: StructureExtensionConstructor;

interface StructureExtensionConstructor {
  prototype: StructureExtension;
}

type Extension = StructureExtension;

/**
 * Contains energy which can be spent on spawning bigger creeps. Extensions can be placed anywhere in the room, any spawns will be able to
 * use them regardless of distance.
 */
interface StructureExtension extends OwnedStructure {

  /**
   * The amount of energy containing in the extension.
   */
  energy: number;

  /**
   * The total amount of energy the extension can contain.
   */
  energyCapacity: number;

  /**
   * CPU cost: CONST
   *
   * Transfer resource from this terminal to a creep. The target has to be at adjacent square. You can transfer resources to your creeps
   * from hostile structures as well. This method is deprecated. Please use Creep.withdraw instead.
   *
   * @deprecated
   * @param target The target object.
   * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE
   */
  transferEnergy(target: Creep, amount?: number): ResponseCode;

}
declare const StructureExtractor: StructureExtractorConstructor;

interface StructureExtractorConstructor {
  prototype: StructureExtractor;
}

type Extractor = StructureExtractor;

/**
 * Allows to harvest mineral deposits.
 */
interface StructureExtractor extends OwnedStructure {

}
declare const StructureKeeperLair: StructureKeeperLairConstructor;

interface StructureKeeperLairConstructor {
  prototype: StructureKeeperLair;
}

type KeeperLair = StructureKeeperLair;

/**
 * Non-player structure. Spawns NPC Source Keepers that guards energy sources and minerals in some rooms. This structure cannot be
 * destroyed.
 */
interface StructureKeeperLair extends OwnedStructure {

  /**
   * Time to spawning of the next Source Keeper.
   */
  ticksToSpawn: number;

}
declare const StructureLab: StructureLabConstructor;

interface StructureLabConstructor {
  prototype: StructureLab;
}

type Lab = StructureLab;

/**
 * Produces mineral compounds from base minerals and boosts creeps.
 */
interface StructureLab extends OwnedStructure {

  /**
   * The amount of game ticks the lab has to wait until the next reaction is possible.
   */
  cooldown: number;

  /**
   * The amount of energy containing in the lab. Energy is used for boosting creeps.
   */
  energy: number;

  /**
   * The total amount of energy the lab can contain.
   */
  energyCapacity: number;

  /**
   * The amount of mineral resources containing in the lab.
   */
  mineralAmount: number;

  /**
   * The type of minerals containing in the lab. Labs can contain only one mineral type at the same time.
   */
  mineralType: ResourceType;

  /**
   * The total amount of minerals the lab can contain.
   */
  mineralCapacity: number;

  /**
   * CPU cost: CONST
   *
   * Boosts creep body part using the containing mineral compound. The creep has to be at adjacent square to the lab. Boosting one body
   * part consumes 30 mineral units and 20 energy units.
   *
   * @param creep The target creep.
   * @param bodyPartsCount The number of body parts of the corresponding type to be boosted. Body parts are always
   *     counted left-to-right for TOUGH, and right-to-left for other types. If undefined, all the eligible body parts
   *     are boosted.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_FOUND, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE
   */
  boostCreep(creep: Creep, bodyPartsCount?: number): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Produce mineral compounds using reagents from two another labs. Each lab has to be within 2 squares range. The same input labs can be
   * used by many output labs
   *
   * @param lab1 The first source lab.
   * @param lab2 The second source lab.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE, ERR_INVALID_ARGS,
   *     ERR_TIRED
   */
  runReaction(lab1: Lab, lab2: Lab): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Transfer resource from this terminal to a creep. The target has to be at adjacent square. You can transfer resources to your creeps
   * from hostile structures as well. This method is deprecated. Please use Creep.withdraw instead.
   *
   * @deprecated
   * @param target The target object.
   * @param resourceType One of the RESOURCE_* constants.
   * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE, ERR_INVALID_ARGS
   */
  transfer(target: Creep, resourceType: ResourceType, amount?: number): ResponseCode;

}
declare const StructureLink: StructureLinkConstructor;

interface StructureLinkConstructor {
  prototype: StructureLink;
}

type Link = StructureLink;

/**
 * Remotely transfers energy to another Link in the same room.
 */
interface StructureLink extends OwnedStructure {

  /**
   * The amount of game ticks the link has to wait until the next transfer is possible.
   */
  cooldown: number;

  /**
   * The amount of energy containing in the link.
   */
  energy: number;

  /**
   * The total amount of energy the link can contain.
   */
  energyCapacity: number;

  /**
   * CPU cost: CONST
   *
   * Remotely transfer energy to another link at any location in the same room.
   *
   * @param target The target object.
   * @param amount The amount of energy to be transferred. If omitted, all the available energy is used.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_INVALID_ARGS, ERR_TIRED,
   *     ERR_RCL_NOT_ENOUGH
   */
  transferEnergy(target: Link, amount?: number): ResponseCode;

}
declare const StructureNuker: StructureNukerConstructor;

interface StructureNukerConstructor {
  prototype: StructureNuker;
}

type Nuker = StructureNuker;

/**
 * Launches a nuke to another room dealing huge damage to the landing area. Each launch has a cooldown and requires energy and ghodium
 * resources. Launching creates a Nuke object at the target room position which is visible to any player until it is landed. Incoming nuke
 * cannot be moved or cancelled. Nukes cannot be launched from or to novice rooms.
 */
interface StructureNuker extends OwnedStructure {

  /**
   * The amount of energy contained in this structure.
   */
  energy: number;

  /**
   * The total amount of energy this structure can contain.
   */
  energyCapacity: number;

  /**
   * The amount of energy contained in this structure.
   */
  ghodium: number;

  /**
   * The total amount of energy this structure can contain.
   */
  ghodiumCapacity: number;

  /**
   * The amount of game ticks the link has to wait until the next transfer is possible.
   */
  cooldown: number;

  /**
   * CPU cost: CONST
   *
   * Launch a nuke to the specified position.
   *
   * @param pos The target room position.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_TIRED, ERR_RCL_NOT_ENOUGH
   */
  launchNuke(pos: RoomPosition): ResponseCode;

}
declare const StructureObserver: StructureObserverConstructor;

interface StructureObserverConstructor {
  prototype: StructureObserver;
}

type Observer = StructureObserver;

/**
 * Provides visibility into a distant room from your script.
 */
interface StructureObserver extends OwnedStructure {

  /**
   * CPU cost: CONST
   *
   * Provide visibility into a distant room from your script. The target room object will be available on the next
   * tick. The maximum range is 5 rooms.
   *
   * @param roomName The name of the target room.
   * @returns Return code: OK, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
   */
  observeRoom(roomName: string): ResponseCode;

}
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
declare const StructurePowerBank: StructurePowerBankConstructor;

interface StructurePowerBankConstructor {
  prototype: StructurePowerBank;
}

type PowerBank = StructurePowerBank;

/**
 * Non-player structure. Contains power resource which can be obtained by destroying the structure. Hits the attacker creep back on each
 * attack.
 */
interface StructurePowerBank extends OwnedStructure {

  /**
   * The amount of power containing.
   */
  power: number;

  /**
   * The amount of game ticks when this structure will disappear.
   */
  ticksToDecay: number;

}
declare const StructureRampart: StructureRampartConstructor;

interface StructureRampartConstructor {
  prototype: StructureRampart;
}

type Rampart = StructureRampart;

/**
 * Blocks movement of hostile creeps, and defends your creeps and structures on the same tile. Can be used as a controllable gate.
 */
interface StructureRampart extends OwnedStructure {

  /**
   * If false (default), only your creeps can step on the same square. If true, any hostile creeps can pass through.
   */
  isPublic: boolean;

  /**
   * The amount of game ticks when this rampart will lose some hit points.
   */
  ticksToDecay: number;

  /**
   * CPU cost: CONST
   *
   * Make this rampart public to allow other players' creeps to pass through.
   *
   * @param isPublic Whether this rampart should be public or non-public
   * @returns Return code: OK, ERR_NOT_OWNER
   */
  setPublic(isPublic: boolean): ResponseCode;

}
declare const StructureRoad: StructureRoadConstructor;

interface StructureRoadConstructor {
  prototype: StructureRoad;
}

type Road = StructureRoad;

/**
 * Decreases movement cost to 1. Using roads allows creating creeps with less MOVE body parts.
 */
interface StructureRoad extends Structure {

  /**
   * The amount of game ticks when this road will lose some hit points.
   */
  ticksToDecay: number;

}
declare const StructureSpawn: StructureSpawnConstructor;

interface StructureSpawnConstructor {
  prototype: StructureSpawn;
}

type Spawn = StructureSpawn;

/**
 * Spawn is your colony center. This structure can create, renew, and recycle creeps. All your spawns are accessible through Game.spawns
 * hash list. Spawns auto-regenerate a little amount of energy each tick, so that you can easily recover even if all your creeps died.
 */
interface StructureSpawn extends OwnedStructure {

  /**
   * The amount of energy containing in the spawn.
   */
  energy: number;

  /**
   * The total amount of energy the spawn can contain
   */
  energyCapacity: number;

  /**
   * A shorthand to Memory.spawns[spawn.name]. You can use it for quick access the spawn’s specific memory data object.
   */
  memory: SpawnMemory;

  /**
   * Spawn’s name. You choose the name upon creating a new spawn, and it cannot be changed later. This name is a hash key to access the
   * spawn via the Game.spawns object.
   */
  name: string;

  /**
   * If the spawn is in process of spawning a new creep, this object will contain the new creep’s information, or null otherwise.
   */
  spawning: SpawningCreep;

  /**
   * CPU cost: LOW
   *
   * Check if a creep can be created.
   *
   * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants:
   *     WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
   * @param name The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not
   *     contain another creep with the same name (hash key). If not defined, a random name will be generated.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NAME_EXISTS, ERR_BUSY, ERR_NOT_ENOUGH_ENERGY, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
   */
  canCreateCreep(body: BodyPartType[], name?: string): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Start the creep spawning process. The required energy amount can be withdrawn from all spawns and extensions in the room.
   *
   * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants:
   *     WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
   * @param name The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not
   *     contain another creep with the same name (hash key). If not defined, a random name will be generated.
   * @param memory The memory of a new creep. If provided, it will be immediately stored into Memory.creeps[name].
   * @returns name of creep or: ERR_NOT_OWNER, ERR_NAME_EXISTS, ERR_BUSY, ERR_NOT_ENOUGH_ENERGY, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
   */
  createCreep(body: BodyPartType[], name?: string, memory?: CreepMemory): ResponseCode | string;

  /**
   * CPU cost: CONST
   *
   * Kill the creep and drop up to 100% of resources spent on its spawning and boosting depending on remaining life time. The target should
   * be at adjacent square.
   *
   * @param target The target creep object.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE
   */
  recycleCreep(target: Creep): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Increase the remaining time to live of the target creep. The target should be at adjacent square. The spawn should not be busy with
   * the spawning process. Each execution increases the creep's timer by amount of ticks according to this formula: floor(600/body_size).
   * Energy required for each execution is determined using this formula: ceil(creep_cost/2.5/body_size). Renewing a creep removes all of
   * its boosts.
   *
   * @param target The target creep object.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_ENERGY, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE
   */
  renewCreep(target: Creep): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Transfer resource from this terminal to a creep. The target has to be at adjacent square. You can transfer resources to your creeps
   * from hostile structures as well. This method is deprecated. Please use Creep.withdraw instead.
   *
   * @deprecated
   * @param target The target object.
   * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE
   */
  transferEnergy(target: Creep, amount?: number): ResponseCode;

}

interface SpawningCreep {

  /**
   * The name of a new creep.
   */
  name: string;

  /**
   * Time needed in total to complete the spawning.
   */
  needTime: number;

  /**
   * Remaining time to go.
   */
  remainingTime: number;

}
declare const StructureStorage: StructureStorageConstructor;

interface StructureStorageConstructor {
  prototype: StructureStorage;
}

// type Storage = StructureStorage;

/**
 * A structure that can store huge amount of resource units. Only one structure per room is allowed that can be addressed by Room.storage
 * property.
 */
interface StructureStorage extends OwnedStructure {

  /**
   * An object with the storage contents. Each object key is one of the RESOURCE_* constants, values are resources amounts. RESOURCE_ENERGY
   * is always defined and equals to 0 when empty, other resources are undefined when empty. You can use lodash.sum to get the total amount
   * of contents.
   */
  store: StoreDefinition;

  /**
   * The total amount of resources the storage can contain.
   */
  storeCapacity: number;

  /**
   * CPU cost: CONST
   *
   * Transfer resource from this terminal to a creep. The target has to be at adjacent square. You can transfer resources to your creeps
   * from hostile structures as well. This method is deprecated. Please use Creep.withdraw instead.
   *
   * @deprecated
   * @param target The target object.
   * @param resourceType One of the RESOURCE_* constants.
   * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE, ERR_INVALID_ARGS
   */
  transfer(target: Creep, resourceType: ResourceType, amount?: number): ResponseCode;

}
declare const StructureTerminal: StructureTerminalConstructor;

interface StructureTerminalConstructor {
  prototype: StructureTerminal;
}

type Terminal = StructureTerminal;

/**
 * Sends any resources to a Terminal in another room. The destination Terminal can belong to any player. If its storage is full, the
 * resources are dropped on the ground. Each transaction requires additional energy (regardless of the transfer resource type) that can be
 * calculated using Game.market.calcTransactionCost method. For example, sending 1000 mineral units from W0N0 to W10N5 will consume 742
 * energy units. You can track your incoming and outgoing transactions using the Game.market object. Only one Terminal per room is allowed
 * that can be addressed by Room.terminal property.
 */
interface StructureTerminal extends OwnedStructure {

  /**
   * An object with the storage contents. Each object key is one of the RESOURCE_* constants, values are resources amounts. RESOURCE_ENERGY
   * is always defined and equals to 0 when empty, other resources are undefined when empty. You can use lodash.sum to get the total amount
   * of contents.
   */
  store: StoreDefinition;

  /**
   * The total amount of resources the storage can contain.
   */
  storeCapacity: number;

  /**
   * CPU cost: CONST
   *
   * Sends resource to a Terminal in another room with the specified name.
   *
   * @param resourceType One of the RESOURCE_* constants.
   * @param amount The amount of resources to be sent. The minimum amount is 100.
   * @param destination The name of the target room. You don't have to gain visibility in this room.
   * @param description The description of the transaction. It is visible to the recipient. The maximum length is 100
   *     characters.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_ARGS
   */
  send(resourceType: ResourceType, amount: number, destination: string, description?: string): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Transfer resource from this terminal to a creep. The target has to be at adjacent square. You can transfer resources to your creeps
   * from hostile structures as well. This method is deprecated. Please use Creep.withdraw instead.
   *
   * @deprecated
   * @param target The target object.
   * @param resourceType One of the RESOURCE_* constants.
   * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE, ERR_INVALID_ARGS
   */
  transfer(target: Creep, resourceType: ResourceType, amount?: number): ResponseCode;

}
declare const StructureTower: StructureTowerConstructor;

interface StructureTowerConstructor {
  prototype: StructureTower;
}

type Tower = StructureTower;

/**
 * Remotely attacks or heals creeps, or repairs structures. Can be targeted to any object in the room. However, its effectiveness linearly
 * depends on the distance. Each action consumes energy.
 */
interface StructureTower extends OwnedStructure {

  /**
   * The amount of energy containing in this structure.
   */
  energy: number;

  /**
   * The total amount of energy this structure can contain.
   */
  energyCapacity: number;

  /**
   * CPU cost: CONST
   *
   * Remotely attack any creep in the room. Consumes 10 energy units per tick. Attack power depends on the distance to the target: from 600
   * hits at range 10 to 300 hits at range 40.
   *
   * @param target The target creep.
   * @returns Return code: OK, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_RCL_NOT_ENOUGH
   */
  attack(target: Creep): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Remotely heal any creep in the room. Consumes 10 energy units per tick. Heal power depends on the distance to the
   * target: from 400 hits at range 10 to 200 hits at range 40.
   *
   * @param target The target creep.
   * @returns Return code: OK, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_RCL_NOT_ENOUGH
   */
  heal(target: Creep): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Remotely repair any structure in the room. Consumes 10 energy units per tick. Repair power depends on the distance
   * to the target: from 600 hits at range 10 to 300 hits at range 40.
   *
   * @param target The target structure.
   * @returns Return code: OK, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_RCL_NOT_ENOUGH
   */
  repair(target: Structure): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Transfer resource from this terminal to a creep. The target has to be at adjacent square. You can transfer resources to your creeps
   * from hostile structures as well. This method is deprecated. Please use Creep.withdraw instead.
   *
   * @deprecated
   * @param target The target object.
   * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE
   */
  transferEnergy(target: Creep, amount?: number): ResponseCode;

}
declare const StructureWall: StructureWallConstructor;

interface StructureWallConstructor {
  prototype: StructureWall;
}

type Wall = StructureWall;

/**
 * Blocks movement of all creeps.
 */
interface StructureWall extends Structure {

  /**
   * The amount of game ticks when the wall will disappear (only for automatically placed border walls at the start of the game).
   */
  ticksToLive: number;

}
