/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GalleryItemType } from '../../models/constants';
export class ImageItem {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
        this.type = GalleryItemType.Image;
    }
}
if (false) {
    /** @type {?} */
    ImageItem.prototype.type;
    /** @type {?} */
    ImageItem.prototype.data;
}
export class VideoItem {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
        this.type = GalleryItemType.Video;
    }
}
if (false) {
    /** @type {?} */
    VideoItem.prototype.type;
    /** @type {?} */
    VideoItem.prototype.data;
}
export class IframeItem {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
        this.type = GalleryItemType.Iframe;
    }
}
if (false) {
    /** @type {?} */
    IframeItem.prototype.type;
    /** @type {?} */
    IframeItem.prototype.data;
}
export class YoutubeItem {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = {
            src: `//youtube.com/embed/${data.src}?wmode=transparent`,
            thumb: data.thumb ? data.thumb : `//img.youtube.com/vi/${data.src}/default.jpg`
        };
        this.type = GalleryItemType.Youtube;
    }
}
if (false) {
    /** @type {?} */
    YoutubeItem.prototype.type;
    /** @type {?} */
    YoutubeItem.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlcy9pdGVtcy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE1BQU0sT0FBTyxTQUFTOzs7O0lBSXBCLFlBQVksSUFBUztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztDQUNGOzs7SUFQQyx5QkFBc0I7O0lBQ3RCLHlCQUFtQjs7QUFRckIsTUFBTSxPQUFPLFNBQVM7Ozs7SUFJcEIsWUFBWSxJQUFTO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7OztJQVBDLHlCQUFzQjs7SUFDdEIseUJBQW1COztBQVFyQixNQUFNLE9BQU8sVUFBVTs7OztJQUlyQixZQUFZLElBQVM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7Q0FDRjs7O0lBUEMsMEJBQXNCOztJQUN0QiwwQkFBbUI7O0FBUXJCLE1BQU0sT0FBTyxXQUFXOzs7O0lBSXRCLFlBQVksSUFBUztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsR0FBRyxFQUFFLHVCQUF1QixJQUFJLENBQUMsR0FBRyxvQkFBb0I7WUFDeEQsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixJQUFJLENBQUMsR0FBRyxjQUFjO1NBQ2hGLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQztDQUNGOzs7SUFWQywyQkFBc0I7O0lBQ3RCLDJCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbGxlcnlJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dhbGxlcnkubW9kZWwnO1xuaW1wb3J0IHsgR2FsbGVyeUl0ZW1UeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBJbWFnZUl0ZW0gaW1wbGVtZW50cyBHYWxsZXJ5SXRlbSB7XG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgcmVhZG9ubHkgZGF0YTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy50eXBlID0gR2FsbGVyeUl0ZW1UeXBlLkltYWdlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb0l0ZW0gaW1wbGVtZW50cyBHYWxsZXJ5SXRlbSB7XG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgcmVhZG9ubHkgZGF0YTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy50eXBlID0gR2FsbGVyeUl0ZW1UeXBlLlZpZGVvO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJZnJhbWVJdGVtIGltcGxlbWVudHMgR2FsbGVyeUl0ZW0ge1xuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGRhdGE6IGFueTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMudHlwZSA9IEdhbGxlcnlJdGVtVHlwZS5JZnJhbWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFlvdXR1YmVJdGVtIGltcGxlbWVudHMgR2FsbGVyeUl0ZW0ge1xuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGRhdGE6IGFueTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBzcmM6IGAvL3lvdXR1YmUuY29tL2VtYmVkLyR7ZGF0YS5zcmN9P3dtb2RlPXRyYW5zcGFyZW50YCxcbiAgICAgIHRodW1iOiBkYXRhLnRodW1iID8gZGF0YS50aHVtYiA6IGAvL2ltZy55b3V0dWJlLmNvbS92aS8ke2RhdGEuc3JjfS9kZWZhdWx0LmpwZ2BcbiAgICB9O1xuICAgIHRoaXMudHlwZSA9IEdhbGxlcnlJdGVtVHlwZS5Zb3V0dWJlO1xuICB9XG59XG4iXX0=