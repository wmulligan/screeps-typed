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
