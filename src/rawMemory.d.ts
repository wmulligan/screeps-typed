/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 */
declare namespace RawMemory {

  /**
   * Get a raw string representation of the Memory object.
   *
   * @returns Returns a string value.
   */
  export function get(): string;

  /**
   * Set new memory value.
   * @param value New memory value as a string.
   */
  export function set(value: string): void;

}
