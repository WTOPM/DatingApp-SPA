/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class GalleryIframeComponent {
    /**
     * @param {?} _sanitizer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?} shouldPause
     * @return {?}
     */
    set pauseVideo(shouldPause) {
        /** @type {?} */
        const iframe = this.iframe.nativeElement;
        if (shouldPause) {
            /** @type {?} */
            const src = iframe.src;
            iframe.src = src;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.iframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(this.src);
    }
}
GalleryIframeComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-iframe',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <iframe #iframe
            frameborder="0"
            allowfullscreen
            [src]="iframeSrc">
    </iframe>
  `
            }] }
];
/** @nocollapse */
GalleryIframeComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
GalleryIframeComponent.propDecorators = {
    src: [{ type: Input }],
    pauseVideo: [{ type: Input, args: ['pause',] }],
    iframe: [{ type: ViewChild, args: ['iframe',] }]
};
if (false) {
    /** @type {?} */
    GalleryIframeComponent.prototype.iframeSrc;
    /** @type {?} */
    GalleryIframeComponent.prototype.src;
    /** @type {?} */
    GalleryIframeComponent.prototype.iframe;
    /**
     * @type {?}
     * @private
     */
    GalleryIframeComponent.prototype._sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pZnJhbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90ZW1wbGF0ZXMvZ2FsbGVyeS1pZnJhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxZQUFZLEVBQW1CLE1BQU0sMkJBQTJCLENBQUM7QUFhMUUsTUFBTSxPQUFPLHNCQUFzQjs7OztJQWdCakMsWUFBb0IsVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYztJQUM1QyxDQUFDOzs7OztJQVhELElBQW9CLFVBQVUsQ0FBQyxXQUFvQjs7Y0FDM0MsTUFBTSxHQUFzQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWE7UUFDM0QsSUFBSSxXQUFXLEVBQUU7O2tCQUNULEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRztZQUN0QixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7SUFPRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7OztHQU1UO2FBQ0Y7Ozs7WUFaUSxZQUFZOzs7a0JBaUJsQixLQUFLO3lCQUVMLEtBQUssU0FBQyxPQUFPO3FCQVFiLFNBQVMsU0FBQyxRQUFROzs7O0lBWm5CLDJDQUEyQjs7SUFFM0IscUNBQXFCOztJQVVyQix3Q0FBd0M7Ozs7O0lBRTVCLDRDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlUmVzb3VyY2VVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1pZnJhbWUnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aWZyYW1lICNpZnJhbWVcbiAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW5cbiAgICAgICAgICAgIFtzcmNdPVwiaWZyYW1lU3JjXCI+XG4gICAgPC9pZnJhbWU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeUlmcmFtZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaWZyYW1lU3JjOiBTYWZlUmVzb3VyY2VVcmw7XG5cbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG5cbiAgQElucHV0KCdwYXVzZScpIHNldCBwYXVzZVZpZGVvKHNob3VsZFBhdXNlOiBib29sZWFuKSB7XG4gICAgY29uc3QgaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCA9IHRoaXMuaWZyYW1lLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHNob3VsZFBhdXNlKSB7XG4gICAgICBjb25zdCBzcmMgPSBpZnJhbWUuc3JjO1xuICAgICAgaWZyYW1lLnNyYyA9IHNyYztcbiAgICB9XG4gIH1cblxuICBAVmlld0NoaWxkKCdpZnJhbWUnKSBpZnJhbWU6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaWZyYW1lU3JjID0gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh0aGlzLnNyYyk7XG4gIH1cbn1cbiJdfQ==