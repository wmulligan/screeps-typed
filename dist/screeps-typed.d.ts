/**
 * Unique names for objects
 */
declare class Name<T> extends String {
  private readonly __type__: T; // tslint:disable-line
}
declare class RoomName extends Name<Room> {
}
declare class CreepName extends Name<Creep> {
}
declare class FlagName extends Name<Flag> {
}
declare class SpawnName extends Name<Spawn> {
}

// these are inputs into our functions which allow hardcoded strings
type RoomNameOrString = RoomName | string;
type CreepNameOrString = CreepName | string;
type FlagNameOrString = FlagName | string;
type SpawnNameOrString = SpawnName | string;

/**
 * Unique ids for objects
 */
declare class ObjectId<T> extends String {
  private readonly __type__: T; // tslint:disable-line
}
declare class CreepId extends ObjectId<Creep> {
}
declare class ConstructionSiteId extends ObjectId<ConstructionSite> {
}
declare class MineralId extends ObjectId<Mineral> {
}
declare class NukeId extends ObjectId<Nuke> {
}
declare class ResourceId extends ObjectId<Resource> {
}
declare class SourceId extends ObjectId<Source> {
}
declare class StructureId<T> extends ObjectId<T> {
}

/**
 * Used in container, terminal, storage and creep
 */
interface StoreContents {

  readonly [resourceType: string]: number;

  readonly energy: number;

}

/**
 * An object with the structure’s owner info
 */
interface Owner {

  /**
   * The name of the owner user.
   */
  readonly username: string;

}

type SerializedPath = string;

interface LookAtResult {
  type: string;
  constructionSite?: ConstructionSite;
  creep?: Creep;
  energy?: Resource;
  exit?: FindType<RoomPosition>;
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
  costCallback?(roomName: RoomName, costMatrix: CostMatrix): CostMatrix;

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
declare class StructureType<T extends Structure> extends String { // tslint:disable-line
  private readonly __type__: T; // tslint:disable-line
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
declare const STRUCTURE_STORAGE: StructureType<SStorage>;
declare const STRUCTURE_TOWER: StructureType<Tower>;
declare const STRUCTURE_OBSERVER: StructureType<Observer>;
declare const STRUCTURE_POWER_BANK: StructureType<PowerBank>;
declare const STRUCTURE_POWER_SPAWN: StructureType<PowerSpawn>;
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
declare var TERRAIN_SWAMP: TerrainType;
declare var TERRAIN_WALL: TerrainType;

// RoomModes
interface RoomModes extends String {
}

declare const MODE_SIMULATION: RoomModes;
declare const MODE_SURVIVAL: RoomModes;
declare const MODE_WORLD: RoomModes;
declare const MODE_ARENA: RoomModes;

declare const BODYPART_COST: {[part: string]: number};
declare const OBSTACLE_OBJECT_TYPES: string[];
declare const TOWER_POWER_ATTACK: number;
declare const TOWER_POWER_HEAL: number;
declare const TOWER_POWER_REPAIR: number;
declare const TOWER_OPTIMAL_RANGE: number;
declare const TOWER_FALLOFF_RANGE: number;
declare const TOWER_FALLOFF: number;
declare const CARRY_CAPACITY: number;
declare const HARVEST_POWER: number;
declare const HARVEST_MINERAL_POWER: number;
declare const REPAIR_POWER: number;
declare const DISMANTLE_POWER: number;
declare const BUILD_POWER: number;
declare const ATTACK_POWER: number;
declare const UPGRADE_CONTROLLER_POWER: number;
declare const RANGED_ATTACK_POWER: number;
declare const HEAL_POWER: number;
declare const RANGED_HEAL_POWER: number;
declare const DISMANTLE_COST: number;
declare const REPAIR_COST: number;
declare const CREEP_LIFE_TIME: number;
declare const RAMPART_DECAY_AMOUNT: number;
declare const ROAD_DECAY_AMOUNT: number;
declare const CONTAINER_DECAY: number;
declare const RAMPART_DECAY_TIME: number;
declare const ROAD_DECAY_TIME: number;
declare const CONTAINER_DECAY_TIME_OWNED: number;
declare const CONTAINER_DECAY_TIME: number;
declare const LINK_LOSS_RATIO: number;
declare const LINK_CAPACITY: number;

declare const CONTROLLER_STRUCTURES:
{
	[type: string]: { [level: number]: number };
	extension: { [level: number]: number };
	spawn: { [level: number]: number };
	link: { [level: number]: number };
	road: { [level: number]: number };
	constructedWall: { [level: number]: number };
	rampart: { [level: number]: number };
	storage: { [level: number]: number };
	tower: { [level: number]: number };
	observer: { [level: number]: number };
	powerSpawn: { [level: number]: number };
};

declare const ORDER_BUY: "buy";
declare const ORDER_SELL: "sell";
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
/**
 * Creeps are your units. Creeps can move, harvest energy, construct structures, attack another creeps, and perform other actions. Each
 * creep consists of up to 50 body parts.
 */
declare class Creep extends RoomObject {

  /**
   * An array describing the creep’s body.
   */
  public readonly body: BodyPart[];

  /**
   * An object with the creep's cargo contents. Each object key is one of the RESOURCE_* constants, values are resources amounts. Use
   * lodash.sum to get the total amount of contents
   */
  public readonly carry: StoreContents;

  /**
   * The total amount of resources the creep can carry.
   */
  public readonly carryCapacity: number;

  /**
   * The movement fatigue indicator. If it is greater than zero, the creep cannot move.
   */
  public readonly fatigue: number;

  /**
   * The current amount of hit points of the creep.
   */
  public readonly hits: number;

  /**
   * The maximum amount of hit points of the creep.
   */
  public readonly hitsMax: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  public readonly id: CreepId;

  /**
   * A shorthand to Memory.creeps[creep.name]. You can use it for quick access the creep’s specific memory data object.
   */
  public memory: CreepMemory;

  /**
   * Whether it is your creep or foe.
   */
  public readonly my: boolean;

  /**
   * Creep’s name. You can choose the name while creating a new creep, and it cannot be changed later. This name is a hash key to access
   * the creep via the Game.creeps object.
   */
  public readonly name: CreepName;

  /**
   * An object with the creep’s owner info
   */
  public readonly owner: Owner;

  /**
   * The link to the Room object.
   *
   * NOTE: we override the room from RoomObject since we are guaranteed that this is not undefined
   */
  public readonly room: Room;

  /**
   * The text message that the creep was saying at the last tick.
   */
  public readonly saying: string;

  /**
   * Whether this creep is still being spawned.
   */
  public readonly spawning: boolean;

  /**
   * The remaining amount of game ticks after which the creep will die.
   */
  public readonly ticksToLive: number;

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
  public attack(target: Creep | Structure): ResponseCode;

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
  public attackController(target: Controller): ResponseCode;

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
  public build(target: ConstructionSite): ResponseCode;

  /**
   * CPU cost: NONE
   *
   * Cancel the order given during the current game tick.
   *
   * @param methodName The name of a creep's method to be cancelled.
   * @returns Result Code: OK, ERR_NOT_FOUND
   */
  public cancelOrder(methodName: string): ResponseCode;

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
  public claimController(target: Controller): ResponseCode;

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
  public dismantle(target: Structure): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Drop this resource on the ground.
   *
   * @param resourceType One of the RESOURCE_* constants.
   * @param amount The amount of resource units to be dropped. If omitted, all the available carried amount is used.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES
   */
  public drop(resourceType: ResourceType, amount?: number): ResponseCode;

  /**
   * CPU cost: NONE
   *
   * Get the quantity of live body parts of the given type. Fully damaged parts do not count.
   *
   * @param type A body part type, one of the following body part constants: MOVE, WORK, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
   * @returns A number representing the quantity of body parts.
   */
  public getActiveBodyparts(type: BodyPartType): number;

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
  public harvest(target: Source | Mineral): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Heal self or another creep. It will restore the target creep’s damaged body parts function and increase the hits counter. Requires the
   * HEAL body part. The target has to be at adjacent square to the creep.
   *
   * @param target The target creep object.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
   */
  public heal(target: Creep): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Move the creep one square in the specified direction. Requires the MOVE body part.
   *
   * @param direction Direction to move.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_TIRED, ERR_NO_BODYPART
   */
  public move(direction: Direction): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Move the creep using the specified predefined path. Requires the MOVE body part.
   *
   * @param path A path value as returned from Room.findPath, RoomPosition.findPathTo, or PathFinder.search methods. Both array form and
   *     serialized string form are accepted.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_FOUND, ERR_INVALID_ARGS, ERR_TIRED, ERR_NO_BODYPART
   */
  public moveByPath(path: PathStep[] | RoomPosition[] | SerializedPath): ResponseCode;

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
  public moveTo(x: number, y: number, opts?: MoveToOpts & FindPathOpts): ResponseCode;

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
  public moveTo(target: RoomPosition | RoomObject, opts?: MoveToOpts & FindPathOpts): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Toggle auto notification when the creep is under attack. The notification will be sent to your account email. Turned on by default.
   *
   * @param enabled Whether to enable notification or disable.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_INVALID_ARGS
   */
  public notifyWhenAttacked(enabled: boolean): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Pick up an item (a dropped piece of energy). Requires the CARRY body part. The target has to be at adjacent square to the creep or at
   * the same square.
   *
   * @param target The target object to be picked up.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE
   */
  public pickup(target: Resource): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * A ranged attack against another creep or structure. Requires the RANGED_ATTACK body part. If the target is inside a rampart, the
   * rampart is attacked instead. The target has to be within 3 squares range of the creep.
   *
   * @param target The target object to be attacked.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
   */
  public rangedAttack(target: Creep | Structure): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Heal another creep at a distance. It will restore the target creep’s damaged body parts function and increase the hits counter.
   * Requires the HEAL body part. The target has to be within 3 squares range of the creep.
   *
   * @param target The target creep object.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
   */
  public rangedHeal(target: Creep): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * A ranged attack against all hostile creeps or structures within 3 squares range. Requires the RANGED_ATTACK body part. The attack
   * power depends on the range to each target. Friendly units are not affected.
   *
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NO_BODYPART
   */
  public rangedMassAttack(): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Repair a damaged structure using carried energy. Requires the WORK and CARRY body parts. The target has to be within 3 squares range
   * of the creep.
   *
   * @param target he target structure to be repaired.
   * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
   */
  public repair(target: Structure): ResponseCode;

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
  public reserveController(target: Controller): ResponseCode;

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
  public say(message: string, toPublic?: boolean): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Kill the creep immediately.
   *
   * @returns Result code: OK, ERR_NOT_OWNER, ERR_BUSY
   */
  public suicide(): ResponseCode;

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
  public transfer(target: Creep | Structure, resourceType: ResourceType, amount?: number): ResponseCode;

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
  public upgradeController(target: Controller): ResponseCode;

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
  public withdraw(target: Structure, resourceType: ResourceType, amount?: number): ResponseCode;

}

interface BodyPart {

  /**
   * If the body part is boosted, this property specifies the mineral type which is used for boosting. One of the RESOURCE_* constants.
   */
  readonly boost: Resource | undefined;

  /**
   * One of the body part types constants.
   */
  readonly type: BodyPartType;

  /**
   * The remaining amount of hit points of this body part.
   */
  readonly hits: number;

}

interface MoveToOpts {

  /**
   * This option enables reusing the path found along multiple game ticks. It allows to save CPU time, but can result in a slightly slower
   * creep reaction behavior. The path is stored into the creep's memory to the _move property. The reusePath value defines the amount of
   * ticks which the path should be reused for. The default value is 5. Increase the amount to save more CPU, decrease to make the movement
   * more consistent. Set to 0 if you want to disable path reusing.
   */
  reusePath?: number;

  /**
   * If reusePath is enabled and this option is set to true, the path will be stored in memory in the short serialized form using
   * Room.serializePath. The default value is true.
   */
  serializeMemory?: boolean;

  /**
   * If this option is set to true, moveTo method will return ERR_NOT_FOUND if there is no memorized path to reuse. This can significantly
   * save CPU time in some cases. The default value is false.
   */
  noPathFinding?: boolean;

  /**
   * Draw a line along the creep’s path using RoomVisual.poly. You can provide either an empty object or custom style parameters.
   */
  visualizePathStyle?: PolyStyle;

}
/**
 * A flag. Flags can be used to mark particular spots in a room. Flags are visible to their owners only.
 */
declare class Flag extends RoomObject {

  /**
   * Flag primary color. One of the COLOR_* constants.
   */
  public readonly color: Color;

  /**
   * A shorthand to Memory.flags[flag.name]. You can use it for quick access the flag's specific memory data object.
   */
  public memory: FlagMemory;

  /**
   * Flag’s name. You can choose the name while creating a new flag, and it cannot be changed later. This name is a hash key to access the
   * spawn via the Game.flags object.
   */
  public readonly name: FlagName;

  /**
   * Flag secondary color. One of the COLOR_* constants.
   */
  public readonly secondaryColor: Color;

  /**
   * CPU cost: CONST
   *
   * Remove the flag.
   *
   * @returns Always returns OK.
   */
  public remove(): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Set new color of the flag.
   *
   * @param color Primary color of the flag. One of the COLOR_* constants.
   * @parma secondaryColor Secondary color of the flag. One of the COLOR_* constants.
   * @returns Result Code: OK, ERR_INVALID_ARGS
   */
  public setColor(color: Color, secondaryColor?: Color): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Set new position of the flag.
   *
   * @param x The X position in the room.
   * @param y The Y position in the room.
   * @returns Result Code: OK, ERR_INVALID_TARGET
   */
  public setPosition(x: number, y: number): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Set new position of the flag.
   *
   * @param pos Can be a RoomPosition object or any object containing RoomPosition.
   * @returns Result Code: OK, ERR_INVALID_TARGET
   */
  public setPosition(pos: RoomPosition | RoomObject): ResponseCode;

}
declare const Game: Game;

/**
 * The main global game object containing all the gameplay information.
 */
interface Game {

  /**
   * A hash containing all your construction sites with their id as hash keys.
   */
  readonly constructionSites: {[constructionSiteId: string]: ConstructionSite};

  /**
   * An object containing information about your CPU usage.
   */
  readonly cpu: CPU;

  /**
   * A hash containing all your creeps with creep names as hash keys.
   */
  readonly creeps: {[creepName: string]: Creep};

  /**
   * A hash containing all your flags with flag names as hash keys.
   */
  readonly flags: {[flagName: string]: Flag};

  /**
   * Your Global Control Level
   */
  readonly gcl: GCL;

  /**
   * A global object representing world map.
   */
  readonly map: GameMap;

  /**
   * A global object representing the in-game market.
   */
  readonly market: Market;

  /**
   * An object with your global resources that are bound to the account, like subscription tokens. Each object key is a resource constant,
   * values are resources amounts.
   */
  readonly resources: {[resourceType: string]: number};

  /**
   * A hash containing all the rooms available to you with room names as hash keys. A room is visible if you have a creep or an owned
   * structure in it.
   */
  readonly rooms: {[roomName: string]: Room};

  /**
   * A hash containing all your spawns with spawn names as hash keys.
   */
  readonly spawns: {[spawnName: string]: Spawn};

  /**
   * A hash containing all your structures with structure id as hash keys.
   */
  readonly structures: {[structureId: string]: Structure};

  /**
   * System game tick counter. It is automatically incremented on every tick.
   */
  readonly time: number;

  /**
   * CPU cost: LOW
   *
   * Get an object with the specified unique ID. It may be a game object of any type. Only objects from the rooms which are visible to you
   * can be accessed.
   *
   * @param id The unique identificator.
   * @returns an object instance or null if it cannot be found.
   */
  getObjectById<T>(id: ObjectId<T> | string): T | null;

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
  notify(message: string, groupInterval?: number): void;

}

/**
 * An object containing information about your CPU usage.
 */
interface CPU {

  /**
   * Your CPU limit depending on your Global Control Level.
   */
  readonly limit: number;

  /**
   * An amount of available CPU time at the current game tick. It can be higher than Game.cpu.limit.
   */
  readonly tickLimit: number;

  /**
   * An amount of unused CPU accumulated in your bucket.
   */
  readonly bucket: number;

  /**
   * CPU cost: LOW
   *
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
  readonly level: number;

  /**
   * The current progress to the next level.
   */
  readonly progress: number;

  /**
   * The progress required to reach the next level.
   */
  readonly progressTotal: number;

}
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
interface Market {
	/**
	 * Your current credits balance.
	 */
	credits: number;
	/**
	 * An array of the last 100 incoming transactions to your terminals
	 */
	incomingTransactions: Transaction[];
	/**
	 * An object with your active and inactive buy/sell orders on the market.
	 */
	orders: { [key: string]: Order };
	/**
	 * An array of the last 100 outgoing transactions from your terminals
	 */
	outgoingTransactions: Transaction[];
	/**
	 * Estimate the energy transaction cost of StructureTerminal.send and Market.deal methods. The formula: Math.ceil( amount * (Math.log(0.1*linearDistanceBetweenRooms + 0.9) + 0.1) )
	 * @param amount Amount of resources to be sent.
	 * @param roomName1 The name of the first room.
	 * @param roomName2 The name of the second room.
	 * @returns The amount of energy required to perform the transaction.
	 */
	calcTransactionCost(amount: number, roomName1: RoomNameOrString, roomName2: RoomNameOrString): number;
	/**
	 * Cancel a previously created order. The 5% fee is not returned.
	 * @param orderId The order ID as provided in Game.market.orders
	 * @returns Result Code: OK, ERR_INVALID_ARGS
	 */
	cancelOrder(orderId: string): number;
	/**
	 * Change the price of an existing order. If newPrice is greater than old price, you will be charged (newPrice-oldPrice)*remainingAmount*0.05 credits.
	 * @param orderId The order ID as provided in Game.market.orders
	 * @param newPrice The new order price.
	 * @returns Result Code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_ARGS
	 */
	changeOrderPrice(orderId: string, newPrice: number): number;
	/**
	 * Create a market order in your terminal. You will be charged price*amount*0.05 credits when the order is placed.
	 * The maximum orders count is 20 per player. You can create an order at any time with any amount,
	 * it will be automatically activated and deactivated depending on the resource/credits availability.
	 */
	createOrder(type: string, resourceType: string, price: number, totalAmount: number, roomName?: string): number;
	/**
	 * Execute a trade deal from your Terminal to another player's Terminal using the specified buy/sell order.
	 * Your Terminal will be charged energy units of transfer cost regardless of the order resource type.
	 * You can use Game.market.calcTransactionCost method to estimate it.
	 * When multiple players try to execute the same deal, the one with the shortest distance takes precedence.
	 */
	deal(orderId: string, amount: number, targetRoomName?: RoomNameOrString): number;
	/**
	 * Add more capacity to an existing order. It will affect remainingAmount and totalAmount properties. You will be charged price*addAmount*0.05 credits.
	 * @param orderId The order ID as provided in Game.market.orders
	 * @param addAmount How much capacity to add. Cannot be a negative value.
	 * @returns Result Code: OK, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_ARGS
	 */
	extendOrder(orderId: string, addAmount: number): number;
	/**
	 * Get other players' orders currently active on the market.
	 * @param filter (optional) An object or function that will filter the resulting list using the lodash.filter method.
	 * @returns An array of objects containing order information.
	 */
	getAllOrders(filter?: OrderFilter | ((o: Order) => boolean)): Order[];
	/**
	 * Retrieve info for specific market order.
	 * @param orderId The order ID
	 * @returns An object with the order info. See getAllOrders for properties explanation.
	 */
	getOrderById(id: string): Order | null;
}

interface Transaction {
	transactionId: string;
	time: number;
	sender?: { username: string };
	recipient?: { username: string };
	resourceType: string;
	amount: number;
	from: string;
	to: string;
	description: string;
}

interface Order {
	id: string;
	created: number;
	active?: boolean;
	type: string;
	resourceType: string;
	roomName?: string;
	amount: number;
	remainingAmount: number;
	totalAmount?: number;
	price: number;
}

interface OrderFilter {
	id?: string;
	created?: number;
	type?: string;
	resourceType?: string;
	roomName?: string;
	amount?: number;
	remainingAmount?: number;
	price?: number;
}
declare const Memory: Memory;

interface Memory {

  creeps: {[creepName: string]: CreepMemory};

  flags: {[flagName: string]: FlagMemory};

  rooms: {[roomName: string]: RoomMemory};

  spawns: {[spawnName: string]: SpawnMemory};

}

interface CreepMemory {
}

interface FlagMemory {
}

interface RoomMemory {
}

interface SpawnMemory {
}
/**
 * A mineral deposit. Can be harvested by creeps with a WORK body part using the extractor structure.
 */
declare class Mineral extends RoomObject {

  /**
   * The remaining amount of resources.
   */
  public readonly mineralAmount: number;

  /**
   * The resource type, one of the RESOURCE_* constants.
   */
  public readonly mineralType: ResourceType;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  public readonly id: MineralId;

  /**
   * The remaining time after which the deposit will be refilled.
   */
  public readonly ticksToRegeneration: number;

}
/**
 * A nuke landing position. This object cannot be removed or modified. You can find incoming nukes in the room using the FIND_NUKES
 * constant.
 */
declare class Nuke extends RoomObject {

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  public readonly id: NukeId;

  /**
   * The name of the room where this nuke has been launched from.
   */
  public readonly launchRoomName: RoomName;

  /**
   * The remaining landing time.
   */
  public readonly timeToLand: number;

}
/**
 * The base prototype for a structure that has an owner. Such structures can be found using FIND_MY_STRUCTURES and FIND_HOSTILE_STRUCTURES
 * constants.
 */
declare abstract class OwnedStructure extends Structure {

  /**
   * Whether this is your own structure. Walls and roads don't have this property as they are considered neutral
   * structures.
   */
  public readonly my: boolean;

  /**
   * An object with the structure’s owner info (if present) containing the following properties: username
   */
  public readonly owner: Owner;

  /**
   * The link to the Room object.
   *
   * NOTE: we override the room from RoomObject since we are guaranteed that this is not undefined
   */
  public readonly room: Room;

}
declare const PathFinder: PathFinder;

/**
 * Contains powerful methods for pathfinding in the game world. Support exists for custom navigation costs and paths which span multiple
 * rooms. Additionally PathFinder can search for paths through rooms you can't see, although you won't be able to detect any dynamic
 * obstacles like creeps or buildings.
 */
interface PathFinder {

  /**
   * Container for custom navigation cost data. By default PathFinder will only consider terrain data (plain, swamp, wall) — if you need to
   * route around obstacles such as buildings or creeps you must put them into a CostMatrix. Generally you will create your CostMatrix from
   * within roomCallback. If a non-0 value is found in a room's CostMatrix then that value will be used instead of the default terrain
   * cost. You should avoid using large values in your CostMatrix and terrain cost flags. For example, running PathFinder.search with {
   * plainCost: 1, swampCost: 5 } is faster than running it with {plainCost: 2, swampCost: 10 } even though your paths will be the same.
   */
  readonly CostMatrix: typeof CostMatrix;

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
  search(origin: RoomPosition, goal: RoomPosition | SearchGoal | (RoomPosition | SearchGoal)[], opts ?: PathFinderOpts): SearchResult;

  /**
   * CPU cost: NONE
   *
   * Specify whether to use this new experimental pathfinder in game objects methods. This method should be invoked every tick. It affects
   * the following methods behavior: Room.findPath, RoomPosition.findPathTo, RoomPosition.findClosestByPath, Creep.moveTo.
   *
   * @param isEnabled Whether to activate the new pathfinder or deactivate.
   */
  use(isEnabled: boolean): void;

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
  readonly path: RoomPosition[];

  /**
   * Total number of operations performed before this path was calculated.
   */
  readonly ops: number;

  /**
   * The total cost of the path as derived from `plainCost`, `swampCost` and any given CostMatrix instances.
   */
  readonly cost: number;

  /**
   * If the pathfinder fails to find a complete path, this will be true. Note that `path` will still be populated with a partial path which
   * represents the closest path it could find given the search parameters.
   */
  readonly incomplete: boolean;

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
  roomCallback?(roomName: RoomName): boolean | CostMatrix;

}

/**
 * Container for custom navigation cost data. By default PathFinder will only consider terrain data (plain, swamp, wall) — if you need to
 * route around obstacles such as buildings or creeps you must put them into a CostMatrix. Generally you will create your CostMatrix from
 * within roomCallback. If a non-0 value is found in a room's CostMatrix then that value will be used instead of the default terrain cost.
 * You should avoid using large values in your CostMatrix and terrain cost flags. For example, running PathFinder.search with { plainCost:
 * 1, swampCost: 5 } is faster than running it with {plainCost: 2, swampCost: 10 } even though your paths will be the same.
 */
declare class CostMatrix {

  /**
   * CPU cost: LOW
   *
   * Static method which deserializes a new CostMatrix using the return value of serialize.
   *
   * @param val Whatever serialize returned
   * @returns new CostMatrix instance.
   */
  public static deserialize(val: SerializedCostMatrix): CostMatrix;

  /**
   * Creates a new CostMatrix containing 0's for all positions.
   */
  constructor();

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
  public set(x: number, y: number, cost: number): void;

  /**
   * CPU cost: NONE
   *
   * Get the cost of a position in this CostMatrix.
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @returns cost
   */
  public get(x: number, y: number): number;

  /**
   * CPU cost: LOW
   *
   * Copy this CostMatrix into a new CostMatrix with the same data.
   */
  public clone(): CostMatrix;

  /**
   * CPU cost: LOW
   *
   * @returns a compact representation of this CostMatrix which can be stored via JSON.stringify.
   */
  public serialize(): SerializedCostMatrix;

}

type SerializedCostMatrix = number[];
declare const RawMemory: RawMemory;

/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 */
interface RawMemory {

  /**
   * Get a raw string representation of the Memory object.
   *
   * @returns Returns a string value.
   */
  get(): SerializedMemory;

  /**
   * Set new memory value.
   * @param value New memory value as a string.
   */
  set(value: SerializedMemory): void;

}

type SerializedMemory = string;
/**
 * A dropped piece of resource. It will decay after a while if not picked up. Dropped resource pile decays for ceil(amount/1000) units per
 * tick.
 */
declare class Resource extends RoomObject {

  /**
   * The amount of resource units containing.
   */
  public readonly amount: number;

  /**
   * A unique object identificator. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
   */
  public readonly id: ResourceId;

  /**
   * One of the `RESOURCE_*` constants.
   */
  public readonly resourceType: ResourceType;

}
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
   * A RoomVisual object for this room. You can use this object to draw simple shapes (lines, circles, text labels) in the room.
  */
  public readonly visual: RoomVisual;

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
   * @returns Result Code: FlagName, ERR_NAME_EXISTS, ERR_INVALID_ARGS
   */
  public createFlag(x: number, y: number, name?: FlagNameOrString, color?: Color, secondaryColor?: Color): ResponseCode | FlagName;

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
   * @returns Result Code: FlagName, ERR_NAME_EXISTS, ERR_INVALID_ARGS
   */
  public createFlag(pos: RoomPosition | RoomObject, name?: FlagNameOrString, color?: Color, secondaryColor?: Color): ResponseCode | FlagName;

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
/**
 * Any object with a position in a room. Almost all game objects prototypes are derived from RoomObject.
 */
declare abstract class RoomObject {

  /**
   * An object representing the position of this object in the room.
   */
  public readonly pos: RoomPosition;

  /**
   * The link to the Room object. May be undefined in case if an object is a flag or a construction site and is placed in a room that is
   * not visible to you.
   */
  public readonly room: Room | undefined;

}
/**
 * An object representing the specified position in the room. Every object in the room contains RoomPosition as the pos property. The
 * position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
 */
declare class RoomPosition {

  /**
   * The name of the room.
   */
  public readonly roomName: RoomName;

  /**
   * X position in the room.
   */
  public readonly x: number;

  /**
   * Y position in the room.
   */
  public readonly y: number;

  /**
   * You can create new RoomPosition object using its constructor.
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @param roomName The room name.
   */
  constructor(x: number, y: number, roomName: RoomNameOrString);

  /**
   * CPU cost: CONST
   *
   * Create new ConstructionSite at the specified location.
   *
   * @param structureType One of the STRUCTURE_* constants.
   * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_FULL, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
   */
  public createConstructionSite(structureType: StructureType<any>): ResponseCode;

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
  public createFlag(name?: FlagNameOrString, color?: Color, secondaryColor?: Color): ResponseCode;

  /**
   * CPU cost: HIGH
   *
   * Find an object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
   *
   * @param type See Room.find
   * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
   * @returns The closest object if found, null otherwise.
   */
  public findClosestByPath<T extends RoomObject | RoomPosition>(type: FindType<T>, opts?: FindClosestPathOpts<T>): T | null;

  /**
   * CPU cost: HIGH
   *
   * Find an object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
   *
   * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
   * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
   * @returns The closest object if found, null otherwise.
   */
  public findClosestByPath<T extends RoomObject | RoomPosition>(objects: T[] | RoomPosition[], opts?: FindClosestPathOpts<T>): T | null;

  /**
   * CPU cost: AVERAGE
   *
   * Find an object with the shortest linear distance from the given position.
   *
   * @param type See Room.find.
   * @param opts
   * @returns The closest object if found, null otherwise.
   */
  public findClosestByRange<T extends RoomObject | RoomPosition>(type: FindType<T>, opts?: FilterOptions<T>): T | null;

  /**
   * CPU cost: AVERAGE
   *
   * Find an object with the shortest linear distance from the given position.
   *
   * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
   * @param opts
   * @returns The closest object if found, null otherwise.
   */
  public findClosestByRange<T extends RoomObject | RoomPosition>(objects: T[], opts?: FilterOptions<T>): T | null;

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
  public findInRange<T extends RoomObject | RoomPosition>(type: FindType<T>, range: number, opts?: FilterOptions<T>): T[];

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
  public findInRange<T extends RoomObject | RoomPosition>(objects: T[] | RoomPosition[], range: number, opts?: FilterOptions<T>): T[];

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
  public findPathTo(x: number, y: number, opts?: FindPathOpts): PathStep[];

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
  public findPathTo(target: RoomPosition | RoomObject, opts?: FindPathOpts): PathStep[];

  /**
   * CPU cost: LOW
   *
   * Get linear direction to the specified position.
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @returns A number representing one of the direction constants.
   */
  public getDirectionTo(x: number, y: number): Direction;

  /**
   * CPU cost: LOW
   *
   * Get linear direction to the specified position.
   *
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns A number representing one of the direction constants.
   */
  public getDirectionTo(target: RoomPosition | RoomObject): Direction;

  /**
   * CPU cost: LOW
   *
   * Get linear range to the specified position.
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @returns A number of squares to the given position.
   */
  public getRangeTo(x: number, y: number): number;

  /**
   * CPU cost: LOW
   *
   * Get linear range to the specified position.
   *
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns A number of squares to the given position.
   */
  public getRangeTo(target: RoomPosition | RoomObject): number;

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
  public inRangeTo(x: number, y: number, range: number): boolean;

  /**
   * CPU cost: LOW
   *
   * Check whether this position is in the given range of another position.
   *
   * @param toPos The target position.
   * @param range The range distance.
   * @returns A boolean value.
   */
  public inRangeTo(toPos: RoomPosition | RoomObject, range: number): boolean;

  /**
   * CPU cost: LOW
   *
   * Check whether this position is the same as the specified position.
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @returns A boolean value.
   */
  public isEqualTo(x: number, y: number): boolean;

  /**
   * CPU cost: LOW
   *
   * Check whether this position is the same as the specified position.
   *
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns A boolean value.
   */
  public isEqualTo(target: RoomPosition | RoomObject): boolean;

  /**
   * CPU cost: LOW
   *
   * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
   *
   * @param x X position in the room.
   * @param y Y position in the room.
   * @returns A boolean value.
   */
  public isNearTo(x: number, y: number): boolean;

  /**
   * CPU cost: LOW
   *
   * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
   *
   * @param target Can be a RoomPosition object or any object containing RoomPosition.
   * @returns A boolean value.
   */
  public isNearTo(target: RoomPosition | RoomObject): boolean;

  /**
   * CPU cost: AVERAGE
   *
   * Get the list of objects at the specified room position.
   *
   * @returns An array with objects at the specified position
   */
  public look(): LookAtResult[];

  /**
   * CPU cost: LOW
   *
   * Get an object with the given type at the specified room position.
   *
   * @param type One of the LOOK_* constants.
   * @returns An array of objects of the given type at the specified position if found.
   */
  public lookFor<T extends RoomObject>(type: LookType<T>): T[];

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
  filter?: ListIterator<T> | string | {};

}

// from lodash

interface ListIterator<T> {
  (value: T, index: number, collection: List<T>): boolean;
}

interface List<T> {
  [index: number]: T;
  length: number;
}
declare class RoomVisual {
    /** The name of the room. */
    roomName?: string;

    /**
     * You can directly create new RoomVisual object in any room, even if it's invisible to your script.
     * @param roomName The room name.
     */
    constructor(roomName?: string);

    /**
     * Draw a line.
     * @param x1 The start X coordinate.
     * @param y1 The start Y coordinate.
     * @param x2 The finish X coordinate.
     * @param y2 The finish Y coordinate.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    line(x1: number, y1: number, x2: number, y2: number, style?: LineStyle): RoomVisual;

    /**
     * Draw a circle.
     * @param x The X coordinate of the center.
     * @param y The Y coordinate of the center.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    circle(x: number, y: number, style?: CircleStyle): RoomVisual;

    /**
     * Draw a rectangle.
     * @param x The X coordinate of the top-left corner.
     * @param y The Y coordinate of the top-left corner.
     * @param w The width of the rectangle.
     * @param h The height of the rectangle.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    rect(x: number, y: number, w: number, h: number, style?: PolyStyle): RoomVisual;

    /**
     * Draw a polygon.
     * @param points An array of point coordinate arrays, i.e. [[0,0], [5,5], [5,10]].
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    poly(points: [number, number][], style?: PolyStyle): RoomVisual;

    /**
     * Draw a text label.
     * @param text The text message.
     * @param x The X coordinate of the label baseline center point.
     * @param y The Y coordinate of the label baseline center point.
     * @param style The (optional) text style.
     * @returns The RoomVisual object, for chaining.
     */
    text(text: string, x: number, y: number, style?: TextStyle): RoomVisual;

    /**
     * Remove all visuals from the room.
     * @returns The RoomVisual object, for chaining.
     */
    clear(): RoomVisual;

    /**
     * Get the stored size of all visuals added in the room in the current tick.
     * It must not exceed 512,000 (500 KB).
     * @returns The size of the visuals in bytes.
     */
    getSize(): number;
}

interface LineStyle {
    /**
     * Line width, default is 0.1.
     */
    width?: number;
    /**
     * Line color in any web format, default is #ffffff (white).
     */
    color?: string;
    /**
     * Opacity value, default is 0.5.
     */
    opacity?: number;
    /**
     * Either undefined (solid line), dashed, or dotted. Default is undefined.
     */
    lineStyle?: "dashed" | "dotted";
}

interface PolyStyle {
    /**
     * Fill color in any web format, default is undefined (no fill).
     */
    fill?: string;
    /**
     * Opacity value, default is 0.5.
     */
    opacity?: number;
    /**
     * Stroke color in any web format, default is #ffffff (white).
     */
    stroke?: string;
    /**
     * Stroke line width, default is 0.1.
     */
    strokeWidth?: number;
    /**
     * Either undefined (solid line), dashed, or dotted. Default is undefined.
     */
    lineStyle?: "dashed" | "dotted";
}

interface CircleStyle extends PolyStyle {
    /**
     * Circle radius, default is 0.15.
     */
    radius?: number;
}

interface TextStyle {
    /**
     * Font color in any web format, default is #ffffff (white).
     */
    color?: string;
   /**
    * Either a number or a string in one of the following forms:
    *   - 0.7 - relative size in game coordinates
    *   - 20px - absolute size in pixels
    *   - 0.7 serif
    *   - bold italic 1.5 Times New Roman
    */
    font?: number | string;
    /**
     * Stroke color in any web format, default is undefined (no stroke).
     */
    stroke?: string;
    /**
     * Stroke width, default is 0.15.
     */
    strokeWidth?: number;
    /**
     * Background color in any web format, default is undefined (no background). When 
     * background is enabled, text vertical align is set to middle (default is baseline).
     */
    background?: string;
    /**
     * Background rectangle padding, default is 0.3.
     */
    backgroundPadding?: number;
    /**
     * Text align, either center, left, or right. Default is center.
     */
    align?: "center" | "left" | "right";
    /**
     * Opacity value, default is 1.0.
     */
    opacity?: number;
}
/**
 * An energy source object. Can be harvested by creeps with a WORK body part.
 */
declare class Source extends RoomObject {

  /**
   * The remaining amount of energy.
   */
  public readonly energy: number;

  /**
   * The total amount of energy in the source.
   */
  public readonly energyCapacity: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  public readonly id: SourceId;

  /**
   * The remaining time after which the source will be refilled.
   */
  public readonly ticksToRegeneration: number;

}
/**
 * The base prototype object of all structures.
 */
declare abstract class Structure extends RoomObject {

  /**
   * The current amount of hit points of the structure.
   */
  public readonly hits: number;

  /**
   * The total amount of hit points of the structure.
   */
  public readonly hitsMax: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   */
  public readonly id: StructureId<any>;

  /**
   * One of the STRUCTURE_* constants.
   */
  public readonly structureType: StructureType<any>;

  /**
   * CPU cost: CONST
   *
   * Destroy this structure immediately.
   *
   * @returns Return code: OK, ERR_NOT_OWNER
   */
  public destroy(): ResponseCode;

  /**
   * CPU cost: AVERAGE
   *
   * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the
   * structure will be highlighted with red in the game.
   *
   * @returns A boolean value.
   */
  public isActive(): boolean;

  /**
   * CPU cost: CONST
   *
   * Toggle auto notification when the structure is under attack. The notification will be sent to your account email. Turned on by default.
   *
   * @param enabled Whether to enable notification or disable.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_INVALID_ARGS
   */
  public notifyWhenAttacked(enabled: boolean): ResponseCode;

}
type Container = StructureContainer;

/**
 * A small container that can be used to store resources. This is a walkable structure. All dropped resources automatically goes to the
 * container at the same tile.
 */
declare class StructureContainer extends Structure {

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Container>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Container>;

  /**
   * An object with the structure contents. Each object key is one of the RESOURCE_* constants, values are resources amounts.
   * RESOURCE_ENERGY is always defined and equals to 0 when empty, other resources are undefined when empty. You can use lodash.sum to get
   * the total amount of contents.
   */
  public readonly store: StoreContents;

  /**
   * The total amount of resources the structure can contain.
   */
  public readonly storeCapacity: number;

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
  public transfer(target: Creep, resourceType: ResourceType, amount?: number): ResponseCode;

}
type Controller = StructureController;

/**
 * Claim this structure to take control over the room. The controller structure
 * cannot be damaged or destroyed. It can be addressed by `Room.controller`
 * property.
 */
declare class StructureController extends OwnedStructure {

  /**
   * Current controller level, from 0 to 8.
   */
  public readonly level: number;

  /**
   * The current progress of upgrading the controller to the next level.
   */
  public readonly progress: number;

  /**
   * The progress needed to reach the next level.
   */
  public readonly progressTotal: number;

  /**
   * An object with the controller reservation info if present: username, ticksToEnd
   */
  public readonly reservation: Reservation;

  /**
   * The amount of game ticks when this controller will lose one level. This timer can be reset by using
   * Creep.upgradeController.
   */
  public readonly ticksToDowngrade: number;

  /**
   * The amount of game ticks while this controller cannot be upgraded due to attack.
   */
  public readonly upgradeBlocked: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Controller>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Controller>;

  /**
   * CPU cost: CONST
   *
   * Make your claimed controller neutral again.
   *
   * @returns Return code: OK, ERR_NOT_OWNER
   */
  public unclaim(): ResponseCode;

}

interface Reservation {

  /**
   * The name of a player who reserved this controller.
   */
  readonly username: string;

  /**
   * The amount of game ticks when the reservation will end.
   */
  readonly ticksToEnd: number;

}
type Extension = StructureExtension;

/**
 * Contains energy which can be spent on spawning bigger creeps. Extensions can be placed anywhere in the room, any spawns will be able to
 * use them regardless of distance.
 */
declare class StructureExtension extends OwnedStructure {

  /**
   * The amount of energy containing in the extension.
   */
  public readonly energy: number;

  /**
   * The total amount of energy the extension can contain.
   */
  public readonly energyCapacity: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Extension>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Extension>;

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
  public transferEnergy(target: Creep, amount?: number): ResponseCode;

}
type Extractor = StructureExtractor;

/**
 * Allows to harvest mineral deposits.
 */
declare class StructureExtractor extends OwnedStructure {

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Extractor>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Extractor>;

  /**
   * The amount of game ticks until the next harvest action is possible.
   */
  public readonly cooldown: number;

}
type KeeperLair = StructureKeeperLair;

/**
 * Non-player structure. Spawns NPC Source Keepers that guards energy sources and minerals in some rooms. This structure cannot be
 * destroyed.
 */
declare class StructureKeeperLair extends OwnedStructure {

  /**
   * Time to spawning of the next Source Keeper.
   */
  public readonly ticksToSpawn: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<KeeperLair>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<KeeperLair>;

}
type Lab = StructureLab;

/**
 * Produces mineral compounds from base minerals and boosts creeps.
 */
declare class StructureLab extends OwnedStructure {

  /**
   * The amount of game ticks the lab has to wait until the next reaction is possible.
   */
  public readonly cooldown: number;

  /**
   * The amount of energy containing in the lab. Energy is used for boosting creeps.
   */
  public readonly energy: number;

  /**
   * The total amount of energy the lab can contain.
   */
  public readonly energyCapacity: number;

  /**
   * The amount of mineral resources containing in the lab.
   */
  public readonly mineralAmount: number;

  /**
   * The type of minerals containing in the lab. Labs can contain only one mineral type at the same time.
   */
  public readonly mineralType: ResourceType;

  /**
   * The total amount of minerals the lab can contain.
   */
  public readonly mineralCapacity: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Lab>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Lab>;

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
  public boostCreep(creep: Creep, bodyPartsCount?: number): ResponseCode;

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
  public runReaction(lab1: Lab, lab2: Lab): ResponseCode;

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
  public transfer(target: Creep, resourceType: ResourceType, amount?: number): ResponseCode;

}
type Link = StructureLink;

/**
 * Remotely transfers energy to another Link in the same room.
 */
declare class StructureLink extends OwnedStructure {

  /**
   * The amount of game ticks the link has to wait until the next transfer is possible.
   */
  public readonly cooldown: number;

  /**
   * The amount of energy containing in the link.
   */
  public readonly energy: number;

  /**
   * The total amount of energy the link can contain.
   */
  public readonly energyCapacity: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Link>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Link>;

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
  public transferEnergy(target: Link, amount?: number): ResponseCode;

}
type Nuker = StructureNuker;

/**
 * Launches a nuke to another room dealing huge damage to the landing area. Each launch has a cooldown and requires energy and ghodium
 * resources. Launching creates a Nuke object at the target room position which is visible to any player until it is landed. Incoming nuke
 * cannot be moved or cancelled. Nukes cannot be launched from or to novice rooms.
 */
declare class StructureNuker extends OwnedStructure {

  /**
   * The amount of energy contained in this structure.
   */
  public readonly energy: number;

  /**
   * The total amount of energy this structure can contain.
   */
  public readonly energyCapacity: number;

  /**
   * The amount of energy contained in this structure.
   */
  public readonly ghodium: number;

  /**
   * The total amount of energy this structure can contain.
   */
  public readonly ghodiumCapacity: number;

  /**
   * The amount of game ticks the link has to wait until the next transfer is possible.
   */
  public readonly cooldown: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Nuker>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Nuker>;

  /**
   * CPU cost: CONST
   *
   * Launch a nuke to the specified position.
   *
   * @param pos The target room position.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_TIRED, ERR_RCL_NOT_ENOUGH
   */
  public launchNuke(pos: RoomPosition): ResponseCode;

}
type Observer = StructureObserver;

/**
 * Provides visibility into a distant room from your script.
 */
declare class StructureObserver extends OwnedStructure {

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Observer>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Observer>;

  /**
   * CPU cost: CONST
   *
   * Provide visibility into a distant room from your script. The target room object will be available on the next
   * tick. The maximum range is 5 rooms.
   *
   * @param roomName The name of the target room.
   * @returns Return code: OK, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
   */
  public observeRoom(roomName: RoomNameOrString): ResponseCode;

}
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
type PowerBank = StructurePowerBank;

/**
 * Non-player structure. Contains power resource which can be obtained by destroying the structure. Hits the attacker creep back on each
 * attack.
 */
declare class StructurePowerBank extends OwnedStructure {

  /**
   * The amount of power containing.
   */
  public readonly power: number;

  /**
   * The amount of game ticks when this structure will disappear.
   */
  public readonly ticksToDecay: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<PowerBank>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<PowerBank>;

}
type PowerSpawn = StructurePowerSpawn;

/**
 * Processes power into your account, and spawns power creeps with special unique powers (in development).
 */
declare class StructurePowerSpawn extends OwnedStructure {

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<PowerSpawn>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<PowerSpawn>;

}
type Rampart = StructureRampart;

/**
 * Blocks movement of hostile creeps, and defends your creeps and structures on the same tile. Can be used as a controllable gate.
 */
declare class StructureRampart extends OwnedStructure {

  /**
   * If false (default), only your creeps can step on the same square. If true, any hostile creeps can pass through.
   */
  public readonly isPublic: boolean;

  /**
   * The amount of game ticks when this rampart will lose some hit points.
   */
  public readonly ticksToDecay: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Rampart>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Rampart>;

  /**
   * CPU cost: CONST
   *
   * Make this rampart public to allow other players' creeps to pass through.
   *
   * @param isPublic Whether this rampart should be public or non-public
   * @returns Return code: OK, ERR_NOT_OWNER
   */
  public setPublic(isPublic: boolean): ResponseCode;

}
type Road = StructureRoad;

/**
 * Decreases movement cost to 1. Using roads allows creating creeps with less MOVE body parts.
 */
declare class StructureRoad extends Structure {

  /**
   * The amount of game ticks when this road will lose some hit points.
   */
  public readonly ticksToDecay: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Road>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Road>;

}
type Spawn = StructureSpawn;

/**
 * Spawn is your colony center. This structure can create, renew, and recycle creeps. All your spawns are accessible through Game.spawns
 * hash list. Spawns auto-regenerate a little amount of energy each tick, so that you can easily recover even if all your creeps died.
 */
declare class StructureSpawn extends OwnedStructure {

  /**
   * The amount of energy containing in the spawn.
   */
  public readonly energy: number;

  /**
   * The total amount of energy the spawn can contain
   */
  public readonly energyCapacity: number;

  /**
   * A shorthand to Memory.spawns[spawn.name]. You can use it for quick access the spawn’s specific memory data object.
   */
  public memory: SpawnMemory;

  /**
   * Spawn’s name. You choose the name upon creating a new spawn, and it cannot be changed later. This name is a hash key to access the
   * spawn via the Game.spawns object.
   */
  public readonly name: SpawnName;

  /**
   * If the spawn is in process of spawning a new creep, this object will contain the new creep’s information, or null otherwise.
   */
  public readonly spawning: SpawningCreep;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Spawn>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Spawn>;

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
  public canCreateCreep(body: BodyPartType[], name?: CreepNameOrString): ResponseCode;

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
  public createCreep(body: BodyPartType[], name?: CreepNameOrString, memory?: CreepMemory): ResponseCode | CreepName;

  /**
   * CPU cost: CONST
   *
   * Kill the creep and drop up to 100% of resources spent on its spawning and boosting depending on remaining life time. The target should
   * be at adjacent square.
   *
   * @param target The target creep object.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE
   */
  public recycleCreep(target: Creep): ResponseCode;

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
  public renewCreep(target: Creep): ResponseCode;

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
  public transferEnergy(target: Creep, amount?: number): ResponseCode;

}

interface SpawningCreep {

  /**
   * The name of a new creep.
   */
  readonly name: string;

  /**
   * Time needed in total to complete the spawning.
   */
  readonly needTime: number;

  /**
   * Remaining time to go.
   */
  readonly remainingTime: number;

}
type SStorage = StructureStorage; // Storage is already defined in browser

/**
 * A structure that can store huge amount of resource units. Only one structure per room is allowed that can be addressed by Room.storage
 * property.
 */
declare class StructureStorage extends OwnedStructure {

  /**
   * An object with the storage contents. Each object key is one of the RESOURCE_* constants, values are resources amounts. RESOURCE_ENERGY
   * is always defined and equals to 0 when empty, other resources are undefined when empty. You can use lodash.sum to get the total amount
   * of contents.
   */
  public readonly store: StoreContents;

  /**
   * The total amount of resources the storage can contain.
   */
  public readonly storeCapacity: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<SStorage>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<SStorage>;

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
  public transfer(target: Creep, resourceType: ResourceType, amount?: number): ResponseCode;

}
type Terminal = StructureTerminal;

/**
 * Sends any resources to a Terminal in another room. The destination Terminal can belong to any player. If its storage is full, the
 * resources are dropped on the ground. Each transaction requires additional energy (regardless of the transfer resource type) that can be
 * calculated using Game.market.calcTransactionCost method. For example, sending 1000 mineral units from W0N0 to W10N5 will consume 742
 * energy units. You can track your incoming and outgoing transactions using the Game.market object. Only one Terminal per room is allowed
 * that can be addressed by Room.terminal property.
 */
declare class StructureTerminal extends OwnedStructure {

  /**
   * An object with the storage contents. Each object key is one of the RESOURCE_* constants, values are resources amounts. RESOURCE_ENERGY
   * is always defined and equals to 0 when empty, other resources are undefined when empty. You can use lodash.sum to get the total amount
   * of contents.
   */
  public readonly store: StoreContents;

  /**
   * The total amount of resources the storage can contain.
   */
  public readonly storeCapacity: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Terminal>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Terminal>;

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
  public send(resourceType: ResourceType, amount: number, destination: string, description?: string): ResponseCode;

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
  public transfer(target: Creep, resourceType: ResourceType, amount?: number): ResponseCode;

}
type Tower = StructureTower;

/**
 * Remotely attacks or heals creeps, or repairs structures. Can be targeted to any object in the room. However, its effectiveness linearly
 * depends on the distance. Each action consumes energy.
 */
declare class StructureTower extends OwnedStructure {

  /**
   * The amount of energy containing in this structure.
   */
  public readonly energy: number;

  /**
   * The total amount of energy this structure can contain.
   */
  public readonly energyCapacity: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Tower>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Tower>;

  /**
   * CPU cost: CONST
   *
   * Remotely attack any creep in the room. Consumes 10 energy units per tick. Attack power depends on the distance to the target: from 600
   * hits at range 10 to 300 hits at range 40.
   *
   * @param target The target creep.
   * @returns Return code: OK, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_RCL_NOT_ENOUGH
   */
  public attack(target: Creep): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Remotely heal any creep in the room. Consumes 10 energy units per tick. Heal power depends on the distance to the
   * target: from 400 hits at range 10 to 200 hits at range 40.
   *
   * @param target The target creep.
   * @returns Return code: OK, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_RCL_NOT_ENOUGH
   */
  public heal(target: Creep): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Remotely repair any structure in the room. Consumes 10 energy units per tick. Repair power depends on the distance
   * to the target: from 600 hits at range 10 to 300 hits at range 40.
   *
   * @param target The target structure.
   * @returns Return code: OK, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_RCL_NOT_ENOUGH
   */
  public repair(target: Structure): ResponseCode;

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
  public transferEnergy(target: Creep, amount?: number): ResponseCode;

}
type Wall = StructureWall;

/**
 * Blocks movement of all creeps.
 */
declare class StructureWall extends Structure {

  /**
   * The amount of game ticks when the wall will disappear (only for automatically placed border walls at the start of the game).
   */
  public readonly ticksToLive: number;

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Wall>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Wall>;

}
