// allow us to define things globally

declare namespace NodeJS {
  interface Global {
    TERRAIN_PLAIN: TerrainType;
    TERRAIN_SPAWN: TerrainType;
    TERRAIN_WALL: TerrainType;
  }
}
declare var global: NodeJS.Global;

// For some reason, these constants are not provided

global.TERRAIN_PLAIN = 'plain'; // tslint:disable-line
global.TERRAIN_SPAWN = 'swamp'; // tslint:disable-line
global.TERRAIN_WALL = 'wall'; // tslint:disable-line
