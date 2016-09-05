declare const Flag: FlagConstructor;

interface FlagConstructor {
  prototype: Flag;
}

/**
 * A flag. Flags can be used to mark particular spots in a room. Flags are visible to their owners only.
 */
interface Flag extends RoomObject {

  /**
   * Flag primary color. One of the COLOR_* constants.
   */
  color: Color;

  /**
   * A shorthand to Memory.flags[flag.name]. You can use it for quick access the flag's specific memory data object.
   */
  memory: FlagMemory;

  /**
   * Flag’s name. You can choose the name while creating a new flag, and it cannot be changed later. This name is a hash key to access the
   * spawn via the Game.flags object.
   */
  name: string;

  /**
   * Flag secondary color. One of the COLOR_* constants.
   */
  secondaryColor: Color;

  /**
   * CPU cost: CONST
   *
   * Remove the flag.
   *
   * @returns Always returns OK.
   */
  remove(): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Set new color of the flag.
   *
   * @param color Primary color of the flag. One of the COLOR_* constants.
   * @parma secondaryColor Secondary color of the flag. One of the COLOR_* constants.
   * @returns Result Code: OK, ERR_INVALID_ARGS
   */
  setColor(color: Color, secondaryColor?: Color): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Set new position of the flag.
   *
   * @param x The X position in the room.
   * @param y The Y position in the room.
   * @returns Result Code: OK, ERR_INVALID_TARGET
   */
  setPosition(x: number, y: number): ResponseCode;

  /**
   * CPU cost: CONST
   *
   * Set new position of the flag.
   *
   * @param pos Can be a RoomPosition object or any object containing RoomPosition.
   * @returns Result Code: OK, ERR_INVALID_TARGET
   */
  setPosition(pos: RoomPosition | RoomObject): ResponseCode;

}
