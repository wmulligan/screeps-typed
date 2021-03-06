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
