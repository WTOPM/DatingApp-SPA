import { EventEmitter } from '@angular/core';
import { GalleryState } from '../models/gallery.model';
import { GalleryConfig } from '../models/config.model';
export declare class GalleryDotsComponent {
    state: GalleryState;
    config: GalleryConfig;
    action: EventEmitter<number>;
}
