/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var GalleryIframeComponent = /** @class */ (function () {
    function GalleryIframeComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    Object.defineProperty(GalleryIframeComponent.prototype, "pauseVideo", {
        set: /**
         * @param {?} shouldPause
         * @return {?}
         */
        function (shouldPause) {
            /** @type {?} */
            var iframe = this.iframe.nativeElement;
            if (shouldPause) {
                /** @type {?} */
                var src = iframe.src;
                iframe.src = src;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GalleryIframeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.iframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(this.src);
    };
    GalleryIframeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-iframe',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <iframe #iframe\n            frameborder=\"0\"\n            allowfullscreen\n            [src]=\"iframeSrc\">\n    </iframe>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryIframeComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    GalleryIframeComponent.propDecorators = {
        src: [{ type: Input }],
        pauseVideo: [{ type: Input, args: ['pause',] }],
        iframe: [{ type: ViewChild, args: ['iframe',] }]
    };
    return GalleryIframeComponent;
}());
export { GalleryIframeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pZnJhbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90ZW1wbGF0ZXMvZ2FsbGVyeS1pZnJhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxZQUFZLEVBQW1CLE1BQU0sMkJBQTJCLENBQUM7QUFFMUU7SUEyQkUsZ0NBQW9CLFVBQXdCO1FBQXhCLGVBQVUsR0FBVixVQUFVLENBQWM7SUFDNUMsQ0FBQztJQVhELHNCQUFvQiw4Q0FBVTs7Ozs7UUFBOUIsVUFBK0IsV0FBb0I7O2dCQUMzQyxNQUFNLEdBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYTtZQUMzRCxJQUFJLFdBQVcsRUFBRTs7b0JBQ1QsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHO2dCQUN0QixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNsQjtRQUNILENBQUM7OztPQUFBOzs7O0lBT0QseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1RSxDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsd0lBTVQ7aUJBQ0Y7Ozs7Z0JBWlEsWUFBWTs7O3NCQWlCbEIsS0FBSzs2QkFFTCxLQUFLLFNBQUMsT0FBTzt5QkFRYixTQUFTLFNBQUMsUUFBUTs7SUFRckIsNkJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQXRCWSxzQkFBc0I7OztJQUVqQywyQ0FBMkI7O0lBRTNCLHFDQUFxQjs7SUFVckIsd0NBQXdDOzs7OztJQUU1Qiw0Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dhbGxlcnktaWZyYW1lJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlmcmFtZSAjaWZyYW1lXG4gICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuXG4gICAgICAgICAgICBbc3JjXT1cImlmcmFtZVNyY1wiPlxuICAgIDwvaWZyYW1lPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlJZnJhbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGlmcmFtZVNyYzogU2FmZVJlc291cmNlVXJsO1xuXG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuXG4gIEBJbnB1dCgncGF1c2UnKSBzZXQgcGF1c2VWaWRlbyhzaG91bGRQYXVzZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQgPSB0aGlzLmlmcmFtZS5uYXRpdmVFbGVtZW50O1xuICAgIGlmIChzaG91bGRQYXVzZSkge1xuICAgICAgY29uc3Qgc3JjID0gaWZyYW1lLnNyYztcbiAgICAgIGlmcmFtZS5zcmMgPSBzcmM7XG4gICAgfVxuICB9XG5cbiAgQFZpZXdDaGlsZCgnaWZyYW1lJykgaWZyYW1lOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlmcmFtZVNyYyA9IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodGhpcy5zcmMpO1xuICB9XG59XG4iXX0=