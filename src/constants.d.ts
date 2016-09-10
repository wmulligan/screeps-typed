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
declare class StructureType<T> extends String { // tslint:disable-line
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
declare const STRUCTURE_STORAGE: StructureType<StructureStorage>;
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
declare const FIND_STRUCTURES: FindType<Structure<any>>;
declare const FIND_MY_STRUCTURES: FindType<Structure<any>>;
declare const FIND_HOSTILE_STRUCTURES: FindType<Structure<any>>;
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
declare const LOOK_STRUCTURES: LookType<Structure<any>>;
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
