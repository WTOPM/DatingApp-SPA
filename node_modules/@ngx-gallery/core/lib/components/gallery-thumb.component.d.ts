import { EventEmitter } from '@angular/core';
import { GalleryConfig } from '../models/config.model';
export declare class GalleryThumbComponent {
    config: GalleryConfig;
    /** Item's index in the gallery */
    index: number;
    /** Gallery current index */
    currIndex: number;
    /** Item's type 'image', 'video', 'youtube', 'iframe' */
    type: string;
    /** Item's data, this object contains the data required to display the content (e.g. src path) */
    data: any;
    error: EventEmitter<Error>;
    readonly isActive: boolean;
}
