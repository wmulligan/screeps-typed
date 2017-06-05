declare class RoomVisual {
    /** The name of the room. */
    roomName?: string;

    /**
     * You can directly create new RoomVisual object in any room, even if it's invisible to your script.
     * @param roomName The room name.
     */
    constructor(roomName?: string);

    /**
     * Draw a line.
     * @param x1 The start X coordinate.
     * @param y1 The start Y coordinate.
     * @param x2 The finish X coordinate.
     * @param y2 The finish Y coordinate.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    line(x1: number, y1: number, x2: number, y2: number, style?: LineStyle): RoomVisual;

    /**
     * Draw a circle.
     * @param x The X coordinate of the center.
     * @param y The Y coordinate of the center.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    circle(x: number, y: number, style?: CircleStyle): RoomVisual;

    /**
     * Draw a rectangle.
     * @param x The X coordinate of the top-left corner.
     * @param y The Y coordinate of the top-left corner.
     * @param w The width of the rectangle.
     * @param h The height of the rectangle.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    rect(x: number, y: number, w: number, h: number, style?: PolyStyle): RoomVisual;

    /**
     * Draw a polygon.
     * @param points An array of point coordinate arrays, i.e. [[0,0], [5,5], [5,10]].
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    poly(points: [number, number][], style?: PolyStyle): RoomVisual;

    /**
     * Draw a text label.
     * @param text The text message.
     * @param x The X coordinate of the label baseline center point.
     * @param y The Y coordinate of the label baseline center point.
     * @param style The (optional) text style.
     * @returns The RoomVisual object, for chaining.
     */
    text(text: string, x: number, y: number, style?: TextStyle): RoomVisual;

    /**
     * Remove all visuals from the room.
     * @returns The RoomVisual object, for chaining.
     */
    clear(): RoomVisual;

    /**
     * Get the stored size of all visuals added in the room in the current tick.
     * It must not exceed 512,000 (500 KB).
     * @returns The size of the visuals in bytes.
     */
    getSize(): number;
}

interface LineStyle {
    /**
     * Line width, default is 0.1.
     */
    width?: number;
    /**
     * Line color in any web format, default is #ffffff (white).
     */
    color?: string;
    /**
     * Opacity value, default is 0.5.
     */
    opacity?: number;
    /**
     * Either undefined (solid line), dashed, or dotted. Default is undefined.
     */
    lineStyle?: "dashed" | "dotted";
}

interface PolyStyle {
    /**
     * Fill color in any web format, default is undefined (no fill).
     */
    fill?: string;
    /**
     * Opacity value, default is 0.5.
     */
    opacity?: number;
    /**
     * Stroke color in any web format, default is #ffffff (white).
     */
    stroke?: string;
    /**
     * Stroke line width, default is 0.1.
     */
    strokeWidth?: number;
    /**
     * Either undefined (solid line), dashed, or dotted. Default is undefined.
     */
    lineStyle?: "dashed" | "dotted";
}

interface CircleStyle extends PolyStyle {
    /**
     * Circle radius, default is 0.15.
     */
    radius?: number;
}

interface TextStyle {
    /**
     * Font color in any web format, default is #ffffff (white).
     */
    color?: string;
   /**
    * Either a number or a string in one of the following forms:
    *   - 0.7 - relative size in game coordinates
    *   - 20px - absolute size in pixels
    *   - 0.7 serif
    *   - bold italic 1.5 Times New Roman
    */
    font?: number | string;
    /**
     * Stroke color in any web format, default is undefined (no stroke).
     */
    stroke?: string;
    /**
     * Stroke width, default is 0.15.
     */
    strokeWidth?: number;
    /**
     * Background color in any web format, default is undefined (no background). When 
     * background is enabled, text vertical align is set to middle (default is baseline).
     */
    background?: string;
    /**
     * Background rectangle padding, default is 0.3.
     */
    backgroundPadding?: number;
    /**
     * Text align, either center, left, or right. Default is center.
     */
    align?: "center" | "left" | "right";
    /**
     * Opacity value, default is 1.0.
     */
    opacity?: number;
}
