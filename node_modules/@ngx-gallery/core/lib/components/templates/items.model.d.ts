import { GalleryItem } from '../../models/gallery.model';
export declare class ImageItem implements GalleryItem {
    readonly type: string;
    readonly data: any;
    constructor(data: any);
}
export declare class VideoItem implements GalleryItem {
    readonly type: string;
    readonly data: any;
    constructor(data: any);
}
export declare class IframeItem implements GalleryItem {
    readonly type: string;
    readonly data: any;
    constructor(data: any);
}
export declare class YoutubeItem implements GalleryItem {
    readonly type: string;
    readonly data: any;
    constructor(data: any);
}
