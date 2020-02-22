/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
export class GalleryVideoComponent {
    constructor() {
        /**
         * Stream that emits when an error occurs
         */
        this.error = new EventEmitter();
    }
    /**
     * @param {?} shouldPause
     * @return {?}
     */
    set pauseVideo(shouldPause) {
        /** @type {?} */
        const video = this.video.nativeElement;
        if (shouldPause && !video.paused) {
            video.pause();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.src instanceof Array) {
            // If video has multiple sources
            this.videoSources = [...this.src];
        }
        else {
            this.videoSources = [{ url: this.src }];
        }
    }
}
GalleryVideoComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-video',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <video #video controls poster="{{poster}}" (error)="error.emit($event)">
      <source *ngFor="let src of videoSources" src="{{src?.url}}" type="{{src?.type}}"/>
    </video>
  `
            }] }
];
GalleryVideoComponent.propDecorators = {
    src: [{ type: Input }],
    poster: [{ type: Input }],
    pauseVideo: [{ type: Input, args: ['pause',] }],
    error: [{ type: Output }],
    video: [{ type: ViewChild, args: ['video',] }]
};
if (false) {
    /** @type {?} */
    GalleryVideoComponent.prototype.videoSources;
    /** @type {?} */
    GalleryVideoComponent.prototype.src;
    /** @type {?} */
    GalleryVideoComponent.prototype.poster;
    /**
     * Stream that emits when an error occurs
     * @type {?}
     */
    GalleryVideoComponent.prototype.error;
    /** @type {?} */
    GalleryVideoComponent.prototype.video;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS12aWRlby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LXZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVy9ILE1BQU0sT0FBTyxxQkFBcUI7SUFUbEM7Ozs7UUF3QlksVUFBSyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFZOUMsQ0FBQzs7Ozs7SUFwQkMsSUFBb0IsVUFBVSxDQUFDLFdBQW9COztjQUMzQyxLQUFLLEdBQXFCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYTtRQUN4RCxJQUFJLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7O0lBT0QsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEdBQUcsWUFBWSxLQUFLLEVBQUU7WUFDN0IsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7OztHQUlUO2FBQ0Y7OztrQkFLRSxLQUFLO3FCQUNMLEtBQUs7eUJBRUwsS0FBSyxTQUFDLE9BQU87b0JBUWIsTUFBTTtvQkFFTixTQUFTLFNBQUMsT0FBTzs7OztJQWZsQiw2Q0FBNkM7O0lBRTdDLG9DQUFzRDs7SUFDdEQsdUNBQXdCOzs7OztJQVV4QixzQ0FBNEM7O0lBRTVDLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS12aWRlbycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx2aWRlbyAjdmlkZW8gY29udHJvbHMgcG9zdGVyPVwie3twb3N0ZXJ9fVwiIChlcnJvcik9XCJlcnJvci5lbWl0KCRldmVudClcIj5cbiAgICAgIDxzb3VyY2UgKm5nRm9yPVwibGV0IHNyYyBvZiB2aWRlb1NvdXJjZXNcIiBzcmM9XCJ7e3NyYz8udXJsfX1cIiB0eXBlPVwie3tzcmM/LnR5cGV9fVwiLz5cbiAgICA8L3ZpZGVvPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlWaWRlb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdmlkZW9Tb3VyY2VzOiB7dXJsOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmd9W107XG5cbiAgQElucHV0KCkgc3JjOiBzdHJpbmcgfCB7dXJsOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmd9W107XG4gIEBJbnB1dCgpIHBvc3Rlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgncGF1c2UnKSBzZXQgcGF1c2VWaWRlbyhzaG91bGRQYXVzZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gdGhpcy52aWRlby5uYXRpdmVFbGVtZW50O1xuICAgIGlmIChzaG91bGRQYXVzZSAmJiAhdmlkZW8ucGF1c2VkKSB7XG4gICAgICB2aWRlby5wYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGFuIGVycm9yIG9jY3VycyAqL1xuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3ZpZGVvJykgdmlkZW86IEVsZW1lbnRSZWY7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuc3JjIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIC8vIElmIHZpZGVvIGhhcyBtdWx0aXBsZSBzb3VyY2VzXG4gICAgICB0aGlzLnZpZGVvU291cmNlcyA9IFsuLi50aGlzLnNyY107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlkZW9Tb3VyY2VzID0gW3sgdXJsOiB0aGlzLnNyYyB9XTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==