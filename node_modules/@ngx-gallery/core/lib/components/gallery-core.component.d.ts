import { EventEmitter } from '@angular/core';
import { GalleryError, GalleryState } from '../models/gallery.model';
import { GalleryConfig } from '../models/config.model';
export declare class GalleryCoreComponent {
    state: GalleryState;
    config: GalleryConfig;
    action: EventEmitter<string | number>;
    itemClick: EventEmitter<number>;
    thumbClick: EventEmitter<number>;
    error: EventEmitter<GalleryError>;
    /** Set thumbnails position */
    readonly thumbPosition: 'top' | 'left' | 'right' | 'bottom';
    /** Set sliding direction */
    readonly slidingDirection: 'horizontal' | 'vertical';
    /** Disable thumbnails clicks */
    readonly disableThumb: boolean;
    /** Set gallery image size */
    readonly imageSize: 'cover' | 'contain';
    /** Set gallery dots position */
    readonly dotsPosition: 'top' | 'bottom';
    /** Set gallery counter position */
    readonly counterPosition: 'top' | 'bottom';
}
