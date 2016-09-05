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
