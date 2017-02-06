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

  /**
   * Draw a line along the creep’s path using RoomVisual.poly. You can provide either an empty object or custom style parameters.
   */
  visualizePathStyle?: PolyStyle;

}
