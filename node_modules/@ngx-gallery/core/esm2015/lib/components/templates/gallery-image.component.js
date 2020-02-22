/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, style, transition, trigger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
export class GalleryImageComponent {
    /**
     * @param {?} _sanitizer
     */
    constructor(_sanitizer) {
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
    /**
     * @return {?}
     */
    get imageLoadSuccess() {
        return !!this.imageUrl;
    }
    /**
     * @return {?}
     */
    get imageLoadFailed() {
        return !!this.loadError;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.loadingIcon) {
            this.loaderTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingIcon);
        }
        if (this.loadingError) {
            this.errorTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingError);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._state.complete();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onProgress({ loaded, total }) {
        this.progress = loaded * 100 / total;
    }
    /**
     * @param {?} blobUrl
     * @return {?}
     */
    onLoaded(blobUrl) {
        this.imageUrl = this._sanitizer.bypassSecurityTrustStyle(`url(${blobUrl})`);
        this._state.next('success');
    }
    /**
     * @param {?} err
     * @return {?}
     */
    onError(err) {
        this.loadError = err;
        this._state.next('failed');
        this.error.emit(err);
    }
}
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
                template: `
    <ng-container [lazyImage]="src"
                  (progress)="onProgress($event)"
                  (loaded)="onLoaded($event)"
                  (error)="onError($event)"
                  [ngSwitch]="state | async">

      <div *ngSwitchCase="'success'"
           @fadeIn
           class="g-image-item"
           [style.backgroundImage]="imageUrl">
      </div>

      <div *ngSwitchCase="'failed'"
           class="g-image-error-message">
        <div *ngIf="errorTemplate; else defaultError"
             [innerHTML]="errorTemplate"></div>
        <ng-template #defaultError>
          <ng-container *ngIf="isThumbnail; else isLarge">
            <h4>⚠</h4>
          </ng-container>
          <ng-template #isLarge>
            <h2>⚠</h2>
            <p>Unable to load the image!</p>
          </ng-template>
        </ng-template>
      </div>

      <ng-container *ngSwitchCase="'loading'">
        <div *ngIf="loaderTemplate; else defaultLoader"
             class="g-loading"
             [innerHTML]="loaderTemplate">
        </div>
        <ng-template #defaultLoader>
          <div *ngIf="isThumbnail" class="g-thumb-loading"></div>
        </ng-template>
      </ng-container>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
GalleryImageComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
GalleryImageComponent.propDecorators = {
    isThumbnail: [{ type: Input }],
    src: [{ type: Input }],
    loadingIcon: [{ type: Input }],
    loadingError: [{ type: Input }],
    error: [{ type: Output }],
    imageLoadSuccess: [{ type: HostBinding, args: ['class.g-image-loaded',] }],
    imageLoadFailed: [{ type: HostBinding, args: ['class.g-image-error',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUFFLFlBQVksRUFBdUIsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQXNEdkMsTUFBTSxPQUFPLHFCQUFxQjs7OztJQXdDaEMsWUFBb0IsVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYzs7OztRQXJDM0IsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFtQyxTQUFTLENBQUMsQ0FBQztRQUNsRixVQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7OztRQUc1QyxhQUFRLEdBQUcsQ0FBQyxDQUFDOzs7O1FBcUJILFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBYTVDLENBQUM7Ozs7SUFURCxJQUF5QyxnQkFBZ0I7UUFDdkQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBd0MsZUFBZTtRQUNyRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFLRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDakY7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNqRjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQW9DO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBZTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsT0FBTyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEdBQVU7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7O1lBekhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsUUFBUSxFQUFFO3dCQUNoQixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQ25CLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7eUJBQzlDLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0NUO2FBQ0Y7Ozs7WUF0RFEsWUFBWTs7OzBCQWtFbEIsS0FBSztrQkFHTCxLQUFLOzBCQUtMLEtBQUs7MkJBS0wsS0FBSztvQkFLTCxNQUFNOytCQUlOLFdBQVcsU0FBQyxzQkFBc0I7OEJBSWxDLFdBQVcsU0FBQyxxQkFBcUI7Ozs7Ozs7O0lBakNsQyx1Q0FBMkY7O0lBQzNGLHNDQUE0Qzs7Ozs7SUFHNUMseUNBQWE7Ozs7O0lBR2IsNENBQThCOzs7OztJQUc5QixvQ0FBcUI7Ozs7O0lBRXJCLHlDQUFvQjs7Ozs7SUFHcEIsNENBQTZCOzs7OztJQUU3QiwrQ0FBeUI7Ozs7O0lBR3pCLDZDQUE4Qjs7Ozs7SUFFOUIsOENBQXdCOzs7OztJQUd4QixzQ0FBNEM7Ozs7O0lBRTVDLDBDQUFpQjs7Ozs7SUFVTCwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dhbGxlcnktaW1hZ2UnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2ZhZGVJbicsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgc3R5bGUoe29wYWNpdHk6IDB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbicsIHN0eWxlKHtvcGFjaXR5OiAxfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciBbbGF6eUltYWdlXT1cInNyY1wiXG4gICAgICAgICAgICAgICAgICAocHJvZ3Jlc3MpPVwib25Qcm9ncmVzcygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChsb2FkZWQpPVwib25Mb2FkZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAoZXJyb3IpPVwib25FcnJvcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIFtuZ1N3aXRjaF09XCJzdGF0ZSB8IGFzeW5jXCI+XG5cbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidzdWNjZXNzJ1wiXG4gICAgICAgICAgIEBmYWRlSW5cbiAgICAgICAgICAgY2xhc3M9XCJnLWltYWdlLWl0ZW1cIlxuICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZEltYWdlXT1cImltYWdlVXJsXCI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2ZhaWxlZCdcIlxuICAgICAgICAgICBjbGFzcz1cImctaW1hZ2UtZXJyb3ItbWVzc2FnZVwiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZXJyb3JUZW1wbGF0ZTsgZWxzZSBkZWZhdWx0RXJyb3JcIlxuICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiZXJyb3JUZW1wbGF0ZVwiPjwvZGl2PlxuICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRFcnJvcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNUaHVtYm5haWw7IGVsc2UgaXNMYXJnZVwiPlxuICAgICAgICAgICAgPGg0PuKaoDwvaDQ+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNpc0xhcmdlPlxuICAgICAgICAgICAgPGgyPuKaoDwvaDI+XG4gICAgICAgICAgICA8cD5VbmFibGUgdG8gbG9hZCB0aGUgaW1hZ2UhPC9wPlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2xvYWRpbmcnXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJsb2FkZXJUZW1wbGF0ZTsgZWxzZSBkZWZhdWx0TG9hZGVyXCJcbiAgICAgICAgICAgICBjbGFzcz1cImctbG9hZGluZ1wiXG4gICAgICAgICAgICAgW2lubmVySFRNTF09XCJsb2FkZXJUZW1wbGF0ZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0TG9hZGVyPlxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc1RodW1ibmFpbFwiIGNsYXNzPVwiZy10aHVtYi1sb2FkaW5nXCI+PC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEdhbGxlcnlJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgdGhlIHN0YXRlICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX3N0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDwnbG9hZGluZycgfCAnc3VjY2VzcycgfCAnZmFpbGVkJz4oJ2xvYWRpbmcnKTtcbiAgcmVhZG9ubHkgc3RhdGUgPSB0aGlzLl9zdGF0ZS5hc09ic2VydmFibGUoKTtcblxuICAvKiogUHJvZ3Jlc3MgdmFsdWUgKi9cbiAgcHJvZ3Jlc3MgPSAwO1xuXG4gIC8qKiBJcyB0aHVtYm5haWwgKi9cbiAgQElucHV0KCkgaXNUaHVtYm5haWw6IGJvb2xlYW47XG5cbiAgLyoqIEltYWdlIHNvdXJjZSBVUkwgKi9cbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIC8qKiBMb2FkZWQgaW1hZ2UgVVJMICovXG4gIGltYWdlVXJsOiBTYWZlU3R5bGU7XG5cbiAgLyoqIEN1c3RvbSBsb2FkZXIgdGVtcGxhdGUgKi9cbiAgQElucHV0KCkgbG9hZGluZ0ljb246IHN0cmluZztcbiAgLyoqIEN1c3RvbSBsb2FkZXIgc2FmZSB0ZW1wbGF0ZSAqL1xuICBsb2FkZXJUZW1wbGF0ZTogU2FmZUh0bWw7XG5cbiAgLyoqIEN1c3RvbSBlcnJvciB0ZW1wbGF0ZSAqL1xuICBASW5wdXQoKSBsb2FkaW5nRXJyb3I6IHN0cmluZztcbiAgLyoqIEN1c3RvbSBlcnJvciBzYWZlIHRlbXBsYXRlICovXG4gIGVycm9yVGVtcGxhdGU6IFNhZmVIdG1sO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGFuIGVycm9yIG9jY3VycyAqL1xuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xuICAvKiogbG9hZGluZyBlcnJvciAqL1xuICBsb2FkRXJyb3I6IEVycm9yO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZy1pbWFnZS1sb2FkZWQnKSBnZXQgaW1hZ2VMb2FkU3VjY2VzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmltYWdlVXJsO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5nLWltYWdlLWVycm9yJykgZ2V0IGltYWdlTG9hZEZhaWxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmxvYWRFcnJvcjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nSWNvbikge1xuICAgICAgdGhpcy5sb2FkZXJUZW1wbGF0ZSA9IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLmxvYWRpbmdJY29uKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubG9hZGluZ0Vycm9yKSB7XG4gICAgICB0aGlzLmVycm9yVGVtcGxhdGUgPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5sb2FkaW5nRXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3N0YXRlLmNvbXBsZXRlKCk7XG4gIH1cblxuICBvblByb2dyZXNzKHtsb2FkZWQsIHRvdGFsfTogeyBsb2FkZWQ6IG51bWJlciwgdG90YWw6IG51bWJlciB9KSB7XG4gICAgdGhpcy5wcm9ncmVzcyA9IGxvYWRlZCAqIDEwMCAvIHRvdGFsO1xuICB9XG5cbiAgb25Mb2FkZWQoYmxvYlVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5pbWFnZVVybCA9IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHVybCgke2Jsb2JVcmx9KWApO1xuICAgIHRoaXMuX3N0YXRlLm5leHQoJ3N1Y2Nlc3MnKTtcbiAgfVxuXG4gIG9uRXJyb3IoZXJyOiBFcnJvcikge1xuICAgIHRoaXMubG9hZEVycm9yID0gZXJyO1xuICAgIHRoaXMuX3N0YXRlLm5leHQoJ2ZhaWxlZCcpO1xuICAgIHRoaXMuZXJyb3IuZW1pdChlcnIpO1xuICB9XG5cbn1cbiJdfQ==