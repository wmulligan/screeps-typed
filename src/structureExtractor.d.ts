declare const StructureExtractor: StructureExtractorConstructor;

interface StructureExtractorConstructor {
  prototype: StructureExtractor;
}

type Extractor = StructureExtractor;

/**
 * Allows to harvest mineral deposits.
 */
interface StructureExtractor extends OwnedStructure {

}
