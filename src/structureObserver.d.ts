type Observer = StructureObserver;

/**
 * Provides visibility into a distant room from your script.
 */
declare class StructureObserver extends OwnedStructure<Observer> {

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
