/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GalleryItemType } from '../../models/constants';
var ImageItem = /** @class */ (function () {
    function ImageItem(data) {
        this.data = data;
        this.type = GalleryItemType.Image;
    }
    return ImageItem;
}());
export { ImageItem };
if (false) {
    /** @type {?} */
    ImageItem.prototype.type;
    /** @type {?} */
    ImageItem.prototype.data;
}
var VideoItem = /** @class */ (function () {
    function VideoItem(data) {
        this.data = data;
        this.type = GalleryItemType.Video;
    }
    return VideoItem;
}());
export { VideoItem };
if (false) {
    /** @type {?} */
    VideoItem.prototype.type;
    /** @type {?} */
    VideoItem.prototype.data;
}
var IframeItem = /** @class */ (function () {
    function IframeItem(data) {
        this.data = data;
        this.type = GalleryItemType.Iframe;
    }
    return IframeItem;
}());
export { IframeItem };
if (false) {
    /** @type {?} */
    IframeItem.prototype.type;
    /** @type {?} */
    IframeItem.prototype.data;
}
var YoutubeItem = /** @class */ (function () {
    function YoutubeItem(data) {
        this.data = {
            src: "//youtube.com/embed/" + data.src + "?wmode=transparent",
            thumb: data.thumb ? data.thumb : "//img.youtube.com/vi/" + data.src + "/default.jpg"
        };
        this.type = GalleryItemType.Youtube;
    }
    return YoutubeItem;
}());
export { YoutubeItem };
if (false) {
    /** @type {?} */
    YoutubeItem.prototype.type;
    /** @type {?} */
    YoutubeItem.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlcy9pdGVtcy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpEO0lBSUUsbUJBQVksSUFBUztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7SUFQQyx5QkFBc0I7O0lBQ3RCLHlCQUFtQjs7QUFRckI7SUFJRSxtQkFBWSxJQUFTO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7OztJQVBDLHlCQUFzQjs7SUFDdEIseUJBQW1COztBQVFyQjtJQUlFLG9CQUFZLElBQVM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7O0lBUEMsMEJBQXNCOztJQUN0QiwwQkFBbUI7O0FBUXJCO0lBSUUscUJBQVksSUFBUztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsR0FBRyxFQUFFLHlCQUF1QixJQUFJLENBQUMsR0FBRyx1QkFBb0I7WUFDeEQsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDBCQUF3QixJQUFJLENBQUMsR0FBRyxpQkFBYztTQUNoRixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDO0lBQ3RDLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFYRCxJQVdDOzs7O0lBVkMsMkJBQXNCOztJQUN0QiwyQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYWxsZXJ5SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9nYWxsZXJ5Lm1vZGVsJztcbmltcG9ydCB7IEdhbGxlcnlJdGVtVHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2VJdGVtIGltcGxlbWVudHMgR2FsbGVyeUl0ZW0ge1xuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGRhdGE6IGFueTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMudHlwZSA9IEdhbGxlcnlJdGVtVHlwZS5JbWFnZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmlkZW9JdGVtIGltcGxlbWVudHMgR2FsbGVyeUl0ZW0ge1xuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGRhdGE6IGFueTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMudHlwZSA9IEdhbGxlcnlJdGVtVHlwZS5WaWRlbztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSWZyYW1lSXRlbSBpbXBsZW1lbnRzIEdhbGxlcnlJdGVtIHtcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICByZWFkb25seSBkYXRhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnR5cGUgPSBHYWxsZXJ5SXRlbVR5cGUuSWZyYW1lO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBZb3V0dWJlSXRlbSBpbXBsZW1lbnRzIEdhbGxlcnlJdGVtIHtcbiAgcmVhZG9ubHkgdHlwZTogc3RyaW5nO1xuICByZWFkb25seSBkYXRhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgc3JjOiBgLy95b3V0dWJlLmNvbS9lbWJlZC8ke2RhdGEuc3JjfT93bW9kZT10cmFuc3BhcmVudGAsXG4gICAgICB0aHVtYjogZGF0YS50aHVtYiA/IGRhdGEudGh1bWIgOiBgLy9pbWcueW91dHViZS5jb20vdmkvJHtkYXRhLnNyY30vZGVmYXVsdC5qcGdgXG4gICAgfTtcbiAgICB0aGlzLnR5cGUgPSBHYWxsZXJ5SXRlbVR5cGUuWW91dHViZTtcbiAgfVxufVxuIl19