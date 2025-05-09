import * as THREE from "three";
import { Tooltip } from "../../components/tool-tip";
import { EventInfo } from "../../core/input-manager/InputManager";
import type { BaseViewer } from "../../core/viewers";
/**
 * Box select an area in screen coordinate.
 * @internal
 */
export declare class PickMarkupHelper {
    protected viewer: BaseViewer;
    private active;
    protected tooltip?: Tooltip;
    protected resolve?: (value: THREE.Box2 | PromiseLike<THREE.Box2> | undefined) => void;
    protected reject?: (reason: any) => void;
    protected isResolvedOrRejected: boolean;
    constructor(viewer: BaseViewer);
    private get viewerContainer();
    private get camera();
    isActive(): boolean;
    private mouseClicked;
    activate(): void;
    deactivate(): void;
    keydown: (e: EventInfo) => void;
    /**
     * Starts to pick a markup area.
     */
    pick(): Promise<THREE.Box2 | undefined>;
    destroy(): void;
}
