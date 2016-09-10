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
