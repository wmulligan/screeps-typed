declare const StructureLink: StructureLinkConstructor;

interface StructureLinkConstructor {
  prototype: StructureLink;
}

type Link = StructureLink;

/**
 * Remotely transfers energy to another Link in the same room.
 */
interface StructureLink extends OwnedStructure {

  /**
   * The amount of game ticks the link has to wait until the next transfer is possible.
   */
  cooldown: number;

  /**
   * The amount of energy containing in the link.
   */
  energy: number;

  /**
   * The total amount of energy the link can contain.
   */
  energyCapacity: number;

  /**
   * CPU cost: CONST
   *
   * Remotely transfer energy to another link at any location in the same room.
   *
   * @param target The target object.
   * @param amount The amount of energy to be transferred. If omitted, all the available energy is used.
   * @returns Return code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_FULL, ERR_INVALID_ARGS, ERR_TIRED,
   *     ERR_RCL_NOT_ENOUGH
   */
  transferEnergy(target: Link, amount?: number): ResponseCode;

}
