import * as THREE from "three";
import { BaseMeasureDrawable } from "./BaseMeasureDrawable";
import { MeasurementType } from "./BaseMeasurement";
export declare class DistanceMeasureDrawable extends BaseMeasureDrawable {
    static readonly SHORT_LINE_LENGTH = 12;
    scale?: number;
    type: MeasurementType;
    constructor(id: string, points: THREE.Vector3[], scale?: number);
    draw(ctx: CanvasRenderingContext2D, camera: THREE.Camera): void;
    drawText(ctx: CanvasRenderingContext2D, camera: THREE.Camera): void;
    private drawVerticalLine;
    private getShortLineBySegments;
    getClassType(): string;
    setScale(scale: number): void;
}
