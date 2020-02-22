import { EventEmitter } from '@angular/core';
import { GalleryConfig } from '../models/config.model';
import { GalleryItemType } from '../models/constants';
export declare class GalleryItemComponent {
    readonly Types: typeof GalleryItemType;
    /** Gallery config */
    config: GalleryConfig;
    /** Item's index in the gallery */
    index: number;
    /** Gallery current index */
    currIndex: number;
    /** Item's type 'image', 'video', 'youtube', 'iframe' */
    type: string;
    /** Item's data, this object contains the data required to display the content (e.g. src path) */
    data: any;
    /** Stream that emits when an error occurs */
    error: EventEmitter<Error>;
    readonly isActive: boolean;
    readonly load: boolean;
}
