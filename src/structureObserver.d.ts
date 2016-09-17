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
