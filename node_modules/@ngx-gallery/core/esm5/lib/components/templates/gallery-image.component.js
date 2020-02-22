/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, style, transition, trigger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
var GalleryImageComponent = /** @class */ (function () {
    function GalleryImageComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        /**
         * Stream that emits the state
         */
        this._state = new BehaviorSubject('loading');
        this.state = this._state.asObservable();
        /**
         * Progress value
         */
        this.progress = 0;
        /**
         * Stream that emits when an error occurs
         */
        this.error = new EventEmitter();
    }
    Object.defineProperty(GalleryImageComponent.prototype, "imageLoadSuccess", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.imageUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryImageComponent.prototype, "imageLoadFailed", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.loadError;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GalleryImageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.loadingIcon) {
            this.loaderTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingIcon);
        }
        if (this.loadingError) {
            this.errorTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingError);
        }
    };
    /**
     * @return {?}
     */
    GalleryImageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._state.complete();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    GalleryImageComponent.prototype.onProgress = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var loaded = _a.loaded, total = _a.total;
        this.progress = loaded * 100 / total;
    };
    /**
     * @param {?} blobUrl
     * @return {?}
     */
    GalleryImageComponent.prototype.onLoaded = /**
     * @param {?} blobUrl
     * @return {?}
     */
    function (blobUrl) {
        this.imageUrl = this._sanitizer.bypassSecurityTrustStyle("url(" + blobUrl + ")");
        this._state.next('success');
    };
    /**
     * @param {?} err
     * @return {?}
     */
    GalleryImageComponent.prototype.onError = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.loadError = err;
        this._state.next('failed');
        this.error.emit(err);
    };
    GalleryImageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-image',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        trigger('fadeIn', [
                            transition(':enter', [
                                style({ opacity: 0 }),
                                animate('300ms ease-in', style({ opacity: 1 }))
                            ])
                        ])
                    ],
                    template: "\n    <ng-container [lazyImage]=\"src\"\n                  (progress)=\"onProgress($event)\"\n                  (loaded)=\"onLoaded($event)\"\n                  (error)=\"onError($event)\"\n                  [ngSwitch]=\"state | async\">\n\n      <div *ngSwitchCase=\"'success'\"\n           @fadeIn\n           class=\"g-image-item\"\n           [style.backgroundImage]=\"imageUrl\">\n      </div>\n\n      <div *ngSwitchCase=\"'failed'\"\n           class=\"g-image-error-message\">\n        <div *ngIf=\"errorTemplate; else defaultError\"\n             [innerHTML]=\"errorTemplate\"></div>\n        <ng-template #defaultError>\n          <ng-container *ngIf=\"isThumbnail; else isLarge\">\n            <h4>\u26A0</h4>\n          </ng-container>\n          <ng-template #isLarge>\n            <h2>\u26A0</h2>\n            <p>Unable to load the image!</p>\n          </ng-template>\n        </ng-template>\n      </div>\n\n      <ng-container *ngSwitchCase=\"'loading'\">\n        <div *ngIf=\"loaderTemplate; else defaultLoader\"\n             class=\"g-loading\"\n             [innerHTML]=\"loaderTemplate\">\n        </div>\n        <ng-template #defaultLoader>\n          <div *ngIf=\"isThumbnail\" class=\"g-thumb-loading\"></div>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryImageComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    GalleryImageComponent.propDecorators = {
        isThumbnail: [{ type: Input }],
        src: [{ type: Input }],
        loadingIcon: [{ type: Input }],
        loadingError: [{ type: Input }],
        error: [{ type: Output }],
        imageLoadSuccess: [{ type: HostBinding, args: ['class.g-image-loaded',] }],
        imageLoadFailed: [{ type: HostBinding, args: ['class.g-image-error',] }]
    };
    return GalleryImageComponent;
}());
export { GalleryImageComponent };
if (false) {
    /**
     * Stream that emits the state
     * @type {?}
     * @private
     */
    GalleryImageComponent.prototype._state;
    /** @type {?} */
    GalleryImageComponent.prototype.state;
    /**
     * Progress value
     * @type {?}
     */
    GalleryImageComponent.prototype.progress;
    /**
     * Is thumbnail
     * @type {?}
     */
    GalleryImageComponent.prototype.isThumbnail;
    /**
     * Image source URL
     * @type {?}
     */
    GalleryImageComponent.prototype.src;
    /**
     * Loaded image URL
     * @type {?}
     */
    GalleryImageComponent.prototype.imageUrl;
    /**
     * Custom loader template
     * @type {?}
     */
    GalleryImageComponent.prototype.loadingIcon;
    /**
     * Custom loader safe template
     * @type {?}
     */
    GalleryImageComponent.prototype.loaderTemplate;
    /**
     * Custom error template
     * @type {?}
     */
    GalleryImageComponent.prototype.loadingError;
    /**
     * Custom error safe template
     * @type {?}
     */
    GalleryImageComponent.prototype.errorTemplate;
    /**
     * Stream that emits when an error occurs
     * @type {?}
     */
    GalleryImageComponent.prototype.error;
    /**
     * loading error
     * @type {?}
     */
    GalleryImageComponent.prototype.loadError;
    /**
     * @type {?}
     * @private
     */
    GalleryImageComponent.prototype._sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUFFLFlBQVksRUFBdUIsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QztJQTRGRSwrQkFBb0IsVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYzs7OztRQXJDM0IsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFtQyxTQUFTLENBQUMsQ0FBQztRQUNsRixVQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7OztRQUc1QyxhQUFRLEdBQUcsQ0FBQyxDQUFDOzs7O1FBcUJILFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBYTVDLENBQUM7SUFURCxzQkFBeUMsbURBQWdCOzs7O1FBQXpEO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUF3QyxrREFBZTs7OztRQUF2RDtZQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7Ozs7SUFLRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNqRjtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2pGO0lBQ0gsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsRUFBa0Q7WUFBakQsa0JBQU0sRUFBRSxnQkFBSztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsd0NBQVE7Ozs7SUFBUixVQUFTLE9BQWU7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLFNBQU8sT0FBTyxNQUFHLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELHVDQUFPOzs7O0lBQVAsVUFBUSxHQUFVO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7O2dCQXpIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLFFBQVEsRUFBRTs0QkFDaEIsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDbkIsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDO2dDQUNuQixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDOzZCQUM5QyxDQUFDO3lCQUNILENBQUM7cUJBQ0g7b0JBQ0QsUUFBUSxFQUFFLDh4Q0FzQ1Q7aUJBQ0Y7Ozs7Z0JBdERRLFlBQVk7Ozs4QkFrRWxCLEtBQUs7c0JBR0wsS0FBSzs4QkFLTCxLQUFLOytCQUtMLEtBQUs7d0JBS0wsTUFBTTttQ0FJTixXQUFXLFNBQUMsc0JBQXNCO2tDQUlsQyxXQUFXLFNBQUMscUJBQXFCOztJQW1DcEMsNEJBQUM7Q0FBQSxBQTNIRCxJQTJIQztTQXZFWSxxQkFBcUI7Ozs7Ozs7SUFHaEMsdUNBQTJGOztJQUMzRixzQ0FBNEM7Ozs7O0lBRzVDLHlDQUFhOzs7OztJQUdiLDRDQUE4Qjs7Ozs7SUFHOUIsb0NBQXFCOzs7OztJQUVyQix5Q0FBb0I7Ozs7O0lBR3BCLDRDQUE2Qjs7Ozs7SUFFN0IsK0NBQXlCOzs7OztJQUd6Qiw2Q0FBOEI7Ozs7O0lBRTlCLDhDQUF3Qjs7Ozs7SUFHeEIsc0NBQTRDOzs7OztJQUU1QywwQ0FBaUI7Ozs7O0lBVUwsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LWltYWdlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmYWRlSW4nLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwfSksXG4gICAgICAgIGFuaW1hdGUoJzMwMG1zIGVhc2UtaW4nLCBzdHlsZSh7b3BhY2l0eTogMX0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgW2xhenlJbWFnZV09XCJzcmNcIlxuICAgICAgICAgICAgICAgICAgKHByb2dyZXNzKT1cIm9uUHJvZ3Jlc3MoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAobG9hZGVkKT1cIm9uTG9hZGVkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgKGVycm9yKT1cIm9uRXJyb3IoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICBbbmdTd2l0Y2hdPVwic3RhdGUgfCBhc3luY1wiPlxuXG4gICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInc3VjY2VzcydcIlxuICAgICAgICAgICBAZmFkZUluXG4gICAgICAgICAgIGNsYXNzPVwiZy1pbWFnZS1pdGVtXCJcbiAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRJbWFnZV09XCJpbWFnZVVybFwiPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidmYWlsZWQnXCJcbiAgICAgICAgICAgY2xhc3M9XCJnLWltYWdlLWVycm9yLW1lc3NhZ2VcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImVycm9yVGVtcGxhdGU7IGVsc2UgZGVmYXVsdEVycm9yXCJcbiAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImVycm9yVGVtcGxhdGVcIj48L2Rpdj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0RXJyb3I+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVGh1bWJuYWlsOyBlbHNlIGlzTGFyZ2VcIj5cbiAgICAgICAgICAgIDxoND7imqA8L2g0PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaXNMYXJnZT5cbiAgICAgICAgICAgIDxoMj7imqA8L2gyPlxuICAgICAgICAgICAgPHA+VW5hYmxlIHRvIGxvYWQgdGhlIGltYWdlITwvcD5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidsb2FkaW5nJ1wiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGVyVGVtcGxhdGU7IGVsc2UgZGVmYXVsdExvYWRlclwiXG4gICAgICAgICAgICAgY2xhc3M9XCJnLWxvYWRpbmdcIlxuICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwibG9hZGVyVGVtcGxhdGVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdExvYWRlcj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNUaHVtYm5haWxcIiBjbGFzcz1cImctdGh1bWItbG9hZGluZ1wiPjwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBHYWxsZXJ5SW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHRoZSBzdGF0ZSAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9zdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8J2xvYWRpbmcnIHwgJ3N1Y2Nlc3MnIHwgJ2ZhaWxlZCc+KCdsb2FkaW5nJyk7XG4gIHJlYWRvbmx5IHN0YXRlID0gdGhpcy5fc3RhdGUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgLyoqIFByb2dyZXNzIHZhbHVlICovXG4gIHByb2dyZXNzID0gMDtcblxuICAvKiogSXMgdGh1bWJuYWlsICovXG4gIEBJbnB1dCgpIGlzVGh1bWJuYWlsOiBib29sZWFuO1xuXG4gIC8qKiBJbWFnZSBzb3VyY2UgVVJMICovXG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICAvKiogTG9hZGVkIGltYWdlIFVSTCAqL1xuICBpbWFnZVVybDogU2FmZVN0eWxlO1xuXG4gIC8qKiBDdXN0b20gbG9hZGVyIHRlbXBsYXRlICovXG4gIEBJbnB1dCgpIGxvYWRpbmdJY29uOiBzdHJpbmc7XG4gIC8qKiBDdXN0b20gbG9hZGVyIHNhZmUgdGVtcGxhdGUgKi9cbiAgbG9hZGVyVGVtcGxhdGU6IFNhZmVIdG1sO1xuXG4gIC8qKiBDdXN0b20gZXJyb3IgdGVtcGxhdGUgKi9cbiAgQElucHV0KCkgbG9hZGluZ0Vycm9yOiBzdHJpbmc7XG4gIC8qKiBDdXN0b20gZXJyb3Igc2FmZSB0ZW1wbGF0ZSAqL1xuICBlcnJvclRlbXBsYXRlOiBTYWZlSHRtbDtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBhbiBlcnJvciBvY2N1cnMgKi9cbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcbiAgLyoqIGxvYWRpbmcgZXJyb3IgKi9cbiAgbG9hZEVycm9yOiBFcnJvcjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmctaW1hZ2UtbG9hZGVkJykgZ2V0IGltYWdlTG9hZFN1Y2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5pbWFnZVVybDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZy1pbWFnZS1lcnJvcicpIGdldCBpbWFnZUxvYWRGYWlsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5sb2FkRXJyb3I7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubG9hZGluZ0ljb24pIHtcbiAgICAgIHRoaXMubG9hZGVyVGVtcGxhdGUgPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5sb2FkaW5nSWNvbik7XG4gICAgfVxuICAgIGlmICh0aGlzLmxvYWRpbmdFcnJvcikge1xuICAgICAgdGhpcy5lcnJvclRlbXBsYXRlID0gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMubG9hZGluZ0Vycm9yKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zdGF0ZS5jb21wbGV0ZSgpO1xuICB9XG5cbiAgb25Qcm9ncmVzcyh7bG9hZGVkLCB0b3RhbH06IHsgbG9hZGVkOiBudW1iZXIsIHRvdGFsOiBudW1iZXIgfSkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBsb2FkZWQgKiAxMDAgLyB0b3RhbDtcbiAgfVxuXG4gIG9uTG9hZGVkKGJsb2JVcmw6IHN0cmluZykge1xuICAgIHRoaXMuaW1hZ2VVcmwgPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGB1cmwoJHtibG9iVXJsfSlgKTtcbiAgICB0aGlzLl9zdGF0ZS5uZXh0KCdzdWNjZXNzJyk7XG4gIH1cblxuICBvbkVycm9yKGVycjogRXJyb3IpIHtcbiAgICB0aGlzLmxvYWRFcnJvciA9IGVycjtcbiAgICB0aGlzLl9zdGF0ZS5uZXh0KCdmYWlsZWQnKTtcbiAgICB0aGlzLmVycm9yLmVtaXQoZXJyKTtcbiAgfVxuXG59XG4iXX0=