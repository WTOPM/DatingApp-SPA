/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const GalleryAction = {
    INITIALIZED: 'initialized',
    ITEMS_CHANGED: 'itemsChanged',
    INDEX_CHANGED: 'indexChanged',
    PLAY: 'play',
    STOP: 'stop',
};
export { GalleryAction };
/** @enum {string} */
const ImageSize = {
    Cover: 'cover',
    Contain: 'contain',
};
export { ImageSize };
/** @enum {string} */
const LoadingStrategy = {
    Preload: 'preload',
    Lazy: 'lazy',
    Default: 'default',
};
export { LoadingStrategy };
/** @enum {string} */
const ThumbnailsPosition = {
    Top: 'top',
    Left: 'left',
    Right: 'right',
    Bottom: 'bottom',
};
export { ThumbnailsPosition };
/** @enum {string} */
const ImageLoaderMode = {
    Determinate: 'determinate',
    Indeterminate: 'indeterminate',
};
export { ImageLoaderMode };
/** @enum {string} */
const DotsPosition = {
    Top: 'top',
    Bottom: 'bottom',
};
export { DotsPosition };
/** @enum {string} */
const CounterPosition = {
    Top: 'top',
    Bottom: 'bottom',
};
export { CounterPosition };
/** @enum {string} */
const ThumbnailsMode = {
    Free: 'free',
    Strict: 'strict',
};
export { ThumbnailsMode };
/** @enum {string} */
const SlidingDirection = {
    Horizontal: 'horizontal',
    Vertical: 'vertical',
};
export { SlidingDirection };
/** @enum {string} */
const GalleryItemType = {
    Image: 'image',
    Video: 'video',
    Youtube: 'youtube',
    Iframe: 'iframe',
};
export { GalleryItemType };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFDRSxhQUFjLGFBQWE7SUFDM0IsZUFBZ0IsY0FBYztJQUM5QixlQUFnQixjQUFjO0lBQzlCLE1BQU8sTUFBTTtJQUNiLE1BQU8sTUFBTTs7Ozs7SUFJYixPQUFRLE9BQU87SUFDZixTQUFVLFNBQVM7Ozs7O0lBSW5CLFNBQVUsU0FBUztJQUNuQixNQUFPLE1BQU07SUFDYixTQUFVLFNBQVM7Ozs7O0lBSW5CLEtBQU0sS0FBSztJQUNYLE1BQU8sTUFBTTtJQUNiLE9BQVEsT0FBTztJQUNmLFFBQVMsUUFBUTs7Ozs7SUFJakIsYUFBYSxhQUFhO0lBQzFCLGVBQWUsZUFBZTs7Ozs7SUFJOUIsS0FBTSxLQUFLO0lBQ1gsUUFBUyxRQUFROzs7OztJQUlqQixLQUFNLEtBQUs7SUFDWCxRQUFTLFFBQVE7Ozs7O0lBSWpCLE1BQU8sTUFBTTtJQUNiLFFBQVMsUUFBUTs7Ozs7SUFJakIsWUFBYSxZQUFZO0lBQ3pCLFVBQVcsVUFBVTs7Ozs7SUFJckIsT0FBUSxPQUFPO0lBQ2YsT0FBUSxPQUFPO0lBQ2YsU0FBVSxTQUFTO0lBQ25CLFFBQVMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEdhbGxlcnlBY3Rpb24ge1xuICBJTklUSUFMSVpFRCA9ICdpbml0aWFsaXplZCcsXG4gIElURU1TX0NIQU5HRUQgPSAnaXRlbXNDaGFuZ2VkJyxcbiAgSU5ERVhfQ0hBTkdFRCA9ICdpbmRleENoYW5nZWQnLFxuICBQTEFZID0gJ3BsYXknLFxuICBTVE9QID0gJ3N0b3AnXG59XG5cbmV4cG9ydCBlbnVtIEltYWdlU2l6ZSB7XG4gIENvdmVyID0gJ2NvdmVyJyxcbiAgQ29udGFpbiA9ICdjb250YWluJ1xufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nU3RyYXRlZ3kge1xuICBQcmVsb2FkID0gJ3ByZWxvYWQnLFxuICBMYXp5ID0gJ2xhenknLFxuICBEZWZhdWx0ID0gJ2RlZmF1bHQnXG59XG5cbmV4cG9ydCBlbnVtIFRodW1ibmFpbHNQb3NpdGlvbiB7XG4gIFRvcCA9ICd0b3AnLFxuICBMZWZ0ID0gJ2xlZnQnLFxuICBSaWdodCA9ICdyaWdodCcsXG4gIEJvdHRvbSA9ICdib3R0b20nXG59XG5cbmV4cG9ydCBlbnVtIEltYWdlTG9hZGVyTW9kZSB7XG4gIERldGVybWluYXRlPSAnZGV0ZXJtaW5hdGUnLFxuICBJbmRldGVybWluYXRlPSAnaW5kZXRlcm1pbmF0ZSdcbn1cblxuZXhwb3J0IGVudW0gRG90c1Bvc2l0aW9uIHtcbiAgVG9wID0gJ3RvcCcsXG4gIEJvdHRvbSA9ICdib3R0b20nXG59XG5cbmV4cG9ydCBlbnVtIENvdW50ZXJQb3NpdGlvbiB7XG4gIFRvcCA9ICd0b3AnLFxuICBCb3R0b20gPSAnYm90dG9tJ1xufVxuXG5leHBvcnQgZW51bSBUaHVtYm5haWxzTW9kZSB7XG4gIEZyZWUgPSAnZnJlZScsXG4gIFN0cmljdCA9ICdzdHJpY3QnXG59XG5cbmV4cG9ydCBlbnVtIFNsaWRpbmdEaXJlY3Rpb24ge1xuICBIb3Jpem9udGFsID0gJ2hvcml6b250YWwnLFxuICBWZXJ0aWNhbCA9ICd2ZXJ0aWNhbCdcbn1cblxuZXhwb3J0IGVudW0gR2FsbGVyeUl0ZW1UeXBlIHtcbiAgSW1hZ2UgPSAnaW1hZ2UnLFxuICBWaWRlbyA9ICd2aWRlbycsXG4gIFlvdXR1YmUgPSAneW91dHViZScsXG4gIElmcmFtZSA9ICdpZnJhbWUnXG59XG4iXX0=