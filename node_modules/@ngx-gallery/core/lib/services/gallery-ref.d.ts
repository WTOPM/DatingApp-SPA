import { Subject, Observable } from 'rxjs';
import { GalleryError, GalleryItem, GalleryState } from '../models/gallery.model';
import { GalleryConfig } from '../models/config.model';
export declare class GalleryRef {
    private deleteInstance;
    /** Stream that emits gallery state */
    private readonly _state;
    /** Stream that emits gallery config */
    private readonly _config;
    /** Stream that emits on item click */
    readonly itemClick: Subject<number>;
    /** Stream that emits on thumbnail click */
    readonly thumbClick: Subject<number>;
    /** Stream that emits on an error occurs */
    readonly error: Subject<GalleryError>;
    /** Gallery Events */
    /** Stream that emits gallery state */
    readonly state: Observable<GalleryState>;
    /** Stream that emits gallery config */
    readonly config: Observable<GalleryConfig>;
    /** Stream that emits when gallery is initialized/reset */
    readonly initialized: Observable<GalleryState>;
    /** Stream that emits when items is changed (items loaded, item added, item removed) */
    readonly itemsChanged: Observable<GalleryState>;
    /** Stream that emits when current item is changed */
    readonly indexChanged: Observable<GalleryState>;
    /** Stream that emits when the player should start or stop */
    readonly playingChanged: Observable<GalleryState>;
    /** Stream that emits when the player should start or stop */
    private readonly playerActions;
    constructor(config: GalleryConfig, deleteInstance: Function);
    /**
     * Activate player actions listener
     */
    activatePlayer(): Observable<GalleryState>;
    /**
     * Set gallery state
     * @param state
     */
    private setState;
    /**
     * Set gallery config
     * @param config
     */
    setConfig(config: GalleryConfig): void;
    /** Add gallery item
     * @param item - Gallery item object
     * @param active - Set the new item as current slide
     */
    add(item: GalleryItem, active?: boolean): void;
    /**
     * Add image item
     * @param data
     * @param active
     */
    addImage(data: any, active?: boolean): void;
    /**
     * Add video item
     * @param data
     * @param active
     */
    addVideo(data: any, active?: boolean): void;
    /**
     * Add iframe item
     * @param data
     * @param active
     */
    addIframe(data: any, active?: boolean): void;
    /**
     * Add youtube item
     * @param data
     * @param active
     */
    addYoutube(data: any, active?: boolean): void;
    /** Remove gallery item
     * @param i - Item index
     */
    remove(i: number): void;
    /**
     * Load items and reset the state
     * @param items - Gallery images data
     */
    load(items: GalleryItem[]): void;
    /**
     * Set active item
     * @param i - Active Index
     */
    set(i: number): void;
    /**
     * Next item
     */
    next(): void;
    /**
     * Prev item
     */
    prev(): void;
    /**
     * Start gallery player
     * @param interval
     */
    play(interval?: number): void;
    /**
     * Stop gallery player
     */
    stop(): void;
    /**
     * Reset gallery to initial state
     */
    reset(): void;
    /**
     * Destroy gallery
     */
    destroy(): void;
}
