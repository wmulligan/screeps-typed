declare const OwnedStructure: OwnedStructureConstructor;

interface OwnedStructureConstructor {
  prototype: OwnedStructure;
}

/**
 * The base prototype for a structure that has an owner. Such structures can be found using FIND_MY_STRUCTURES and FIND_HOSTILE_STRUCTURES
 * constants.
 */
interface OwnedStructure extends Structure {

  /**
   * Whether this is your own structure. Walls and roads don't have this property as they are considered neutral
   * structures.
   */
  my: boolean;

  /**
   * An object with the structure’s owner info (if present) containing the following properties: username
   */
  owner: Owner;

}
