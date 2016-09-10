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
