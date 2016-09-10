declare const RawMemory: RawMemory;

/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 */
interface RawMemory {

  /**
   * Get a raw string representation of the Memory object.
   *
   * @returns Returns a string value.
   */
  get(): SerializedMemory;

  /**
   * Set new memory value.
   * @param value New memory value as a string.
   */
  set(value: SerializedMemory): void;

}

type SerializedMemory = string;
