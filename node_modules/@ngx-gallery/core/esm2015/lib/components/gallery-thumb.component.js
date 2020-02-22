/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, HostBinding, Output, EventEmitter } from '@angular/core';
export class GalleryThumbComponent {
    constructor() {
        this.error = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.index === this.currIndex;
    }
}
GalleryThumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-thumb',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <gallery-image [src]="data.thumb" 
                   mode="indeterminate"
                   [isThumbnail]="true" 
                   [loadingIcon]="config.thumbLoadingIcon"
                   [loadingError]="config.thumbLoadingError "
                   (error)="error.emit($event)"></gallery-image>

    <div *ngIf="config.thumbTemplate" class="g-template g-thumb-template">
      <ng-container
        *ngTemplateOutlet="config.thumbTemplate; context: { index: this.index, type: this.type, data: this.data }">
      </ng-container>
    </div>
  `
            }] }
];
GalleryThumbComponent.propDecorators = {
    config: [{ type: Input }],
    index: [{ type: Input }],
    currIndex: [{ type: Input }],
    type: [{ type: Input }],
    data: [{ type: Input }],
    error: [{ type: Output }],
    isActive: [{ type: HostBinding, args: ['class.g-active-thumb',] }]
};
if (false) {
    /** @type {?} */
    GalleryThumbComponent.prototype.config;
    /**
     * Item's index in the gallery
     * @type {?}
     */
    GalleryThumbComponent.prototype.index;
    /**
     * Gallery current index
     * @type {?}
     */
    GalleryThumbComponent.prototype.currIndex;
    /**
     * Item's type 'image', 'video', 'youtube', 'iframe'
     * @type {?}
     */
    GalleryThumbComponent.prototype.type;
    /**
     * Item's data, this object contains the data required to display the content (e.g. src path)
     * @type {?}
     */
    GalleryThumbComponent.prototype.data;
    /** @type {?} */
    GalleryThumbComponent.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS10aHVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dhbGxlcnktdGh1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXFCN0csTUFBTSxPQUFPLHFCQUFxQjtJQWxCbEM7UUFrQ1ksVUFBSyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFNOUMsQ0FBQzs7OztJQUpDLElBQXlDLFFBQVE7UUFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkMsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUO2FBQ0Y7OztxQkFHRSxLQUFLO29CQUdMLEtBQUs7d0JBR0wsS0FBSzttQkFHTCxLQUFLO21CQUdMLEtBQUs7b0JBRUwsTUFBTTt1QkFFTixXQUFXLFNBQUMsc0JBQXNCOzs7O0lBaEJuQyx1Q0FBK0I7Ozs7O0lBRy9CLHNDQUF1Qjs7Ozs7SUFHdkIsMENBQTJCOzs7OztJQUczQixxQ0FBc0I7Ozs7O0lBR3RCLHFDQUFtQjs7SUFFbkIsc0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEhvc3RCaW5kaW5nLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LXRodW1iJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGdhbGxlcnktaW1hZ2UgW3NyY109XCJkYXRhLnRodW1iXCIgXG4gICAgICAgICAgICAgICAgICAgbW9kZT1cImluZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgICAgICAgICAgIFtpc1RodW1ibmFpbF09XCJ0cnVlXCIgXG4gICAgICAgICAgICAgICAgICAgW2xvYWRpbmdJY29uXT1cImNvbmZpZy50aHVtYkxvYWRpbmdJY29uXCJcbiAgICAgICAgICAgICAgICAgICBbbG9hZGluZ0Vycm9yXT1cImNvbmZpZy50aHVtYkxvYWRpbmdFcnJvciBcIlxuICAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJlcnJvci5lbWl0KCRldmVudClcIj48L2dhbGxlcnktaW1hZ2U+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnLnRodW1iVGVtcGxhdGVcIiBjbGFzcz1cImctdGVtcGxhdGUgZy10aHVtYi10ZW1wbGF0ZVwiPlxuICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cImNvbmZpZy50aHVtYlRlbXBsYXRlOyBjb250ZXh0OiB7IGluZGV4OiB0aGlzLmluZGV4LCB0eXBlOiB0aGlzLnR5cGUsIGRhdGE6IHRoaXMuZGF0YSB9XCI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5VGh1bWJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGNvbmZpZzogR2FsbGVyeUNvbmZpZztcblxuICAvKiogSXRlbSdzIGluZGV4IGluIHRoZSBnYWxsZXJ5ICovXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgLyoqIEdhbGxlcnkgY3VycmVudCBpbmRleCAqL1xuICBASW5wdXQoKSBjdXJySW5kZXg6IG51bWJlcjtcblxuICAvKiogSXRlbSdzIHR5cGUgJ2ltYWdlJywgJ3ZpZGVvJywgJ3lvdXR1YmUnLCAnaWZyYW1lJyAqL1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG5cbiAgLyoqIEl0ZW0ncyBkYXRhLCB0aGlzIG9iamVjdCBjb250YWlucyB0aGUgZGF0YSByZXF1aXJlZCB0byBkaXNwbGF5IHRoZSBjb250ZW50IChlLmcuIHNyYyBwYXRoKSAqL1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG5cbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmctYWN0aXZlLXRodW1iJykgZ2V0IGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4ID09PSB0aGlzLmN1cnJJbmRleDtcbiAgfVxuXG59XG4iXX0=