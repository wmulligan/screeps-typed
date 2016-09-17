type Extractor = StructureExtractor;

/**
 * Allows to harvest mineral deposits.
 */
declare class StructureExtractor extends OwnedStructure {

  /**
   * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly id: StructureId<Extractor>;

  /**
   * One of the STRUCTURE_* constants.
   *
   * NOTE: we override the room from Structure since we are guaranteed the type
   */
  public readonly structureType: StructureType<Extractor>;

}
