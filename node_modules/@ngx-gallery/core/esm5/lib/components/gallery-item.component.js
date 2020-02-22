/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, HostBinding, Output, EventEmitter } from '@angular/core';
import { LoadingStrategy, GalleryItemType } from '../models/constants';
var GalleryItemComponent = /** @class */ (function () {
    function GalleryItemComponent() {
        this.Types = GalleryItemType;
        /**
         * Stream that emits when an error occurs
         */
        this.error = new EventEmitter();
    }
    Object.defineProperty(GalleryItemComponent.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.index === this.currIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryItemComponent.prototype, "load", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.config.loadingStrategy) {
                case LoadingStrategy.Preload:
                    return true;
                case LoadingStrategy.Lazy:
                    return this.currIndex === this.index;
                default:
                    return this.currIndex === this.index || this.currIndex === this.index - 1 || this.currIndex === this.index + 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    GalleryItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <ng-container *ngIf=\"load\" [ngSwitch]=\"type\">\n\n      <ng-container *ngSwitchCase=\"Types.Image\">\n\n        <gallery-image [src]=\"data.src\"\n                       [loadingIcon]=\"config.loadingIcon\"\n                       [loadingError]=\"config.loadingError\"\n                       (error)=\"error.emit($event)\"></gallery-image>\n\n        <div class=\"g-template g-item-template\">\n          <ng-container *ngTemplateOutlet=\"config.itemTemplate;\n          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }\">\n          </ng-container>\n        </div>\n\n      </ng-container>\n\n      <gallery-video *ngSwitchCase=\"Types.Video\"\n                     [src]=\"data.src\"\n                     [poster]=\"data.poster\"\n                     [pause]=\"currIndex !== index\"\n                     (error)=\"error.emit($event)\"></gallery-video>\n\n      <gallery-iframe *ngSwitchCase=\"Types.Youtube\"\n                      [src]=\"data.src\"\n                      [pause]=\"currIndex !== index\"></gallery-iframe>\n\n      <gallery-iframe *ngSwitchCase=\"Types.Iframe\"\n                      [src]=\"data.src\"></gallery-iframe>\n\n      <ng-container *ngSwitchDefault>\n\n        <div class=\"g-template g-item-template\">\n          <ng-container *ngTemplateOutlet=\"config.itemTemplate;\n          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }\">\n          </ng-container>\n        </div>\n\n      </ng-container>\n\n    </ng-container>\n  "
                }] }
    ];
    GalleryItemComponent.propDecorators = {
        config: [{ type: Input }],
        index: [{ type: Input }],
        currIndex: [{ type: Input }],
        type: [{ type: Input }],
        data: [{ type: Input }],
        error: [{ type: Output }],
        isActive: [{ type: HostBinding, args: ['class.g-active-item',] }]
    };
    return GalleryItemComponent;
}());
export { GalleryItemComponent };
if (false) {
    /** @type {?} */
    GalleryItemComponent.prototype.Types;
    /**
     * Gallery config
     * @type {?}
     */
    GalleryItemComponent.prototype.config;
    /**
     * Item's index in the gallery
     * @type {?}
     */
    GalleryItemComponent.prototype.index;
    /**
     * Gallery current index
     * @type {?}
     */
    GalleryItemComponent.prototype.currIndex;
    /**
     * Item's type 'image', 'video', 'youtube', 'iframe'
     * @type {?}
     */
    GalleryItemComponent.prototype.type;
    /**
     * Item's data, this object contains the data required to display the content (e.g. src path)
     * @type {?}
     */
    GalleryItemComponent.prototype.data;
    /**
     * Stream that emits when an error occurs
     * @type {?}
     */
    GalleryItemComponent.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RTtJQUFBO1FBaURXLFVBQUssR0FBRyxlQUFlLENBQUM7Ozs7UUFrQnZCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBaUI5QyxDQUFDO0lBZkMsc0JBQXdDLDBDQUFROzs7O1FBQWhEO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzQ0FBSTs7OztRQUFSO1lBQ0UsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtnQkFDbkMsS0FBSyxlQUFlLENBQUMsT0FBTztvQkFDMUIsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsS0FBSyxlQUFlLENBQUMsSUFBSTtvQkFDdkIsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZDO29CQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUNsSDtRQUNILENBQUM7OztPQUFBOztnQkFsRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDBoREEwQ1Q7aUJBQ0Y7Ozt5QkFNRSxLQUFLO3dCQUdMLEtBQUs7NEJBR0wsS0FBSzt1QkFHTCxLQUFLO3VCQUdMLEtBQUs7d0JBR0wsTUFBTTsyQkFFTixXQUFXLFNBQUMscUJBQXFCOztJQWVwQywyQkFBQztDQUFBLEFBcEZELElBb0ZDO1NBckNZLG9CQUFvQjs7O0lBRS9CLHFDQUFpQzs7Ozs7SUFHakMsc0NBQStCOzs7OztJQUcvQixxQ0FBdUI7Ozs7O0lBR3ZCLHlDQUEyQjs7Ozs7SUFHM0Isb0NBQXNCOzs7OztJQUd0QixvQ0FBbUI7Ozs7O0lBR25CLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBIb3N0QmluZGluZywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdhbGxlcnlDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnLm1vZGVsJztcbmltcG9ydCB7IExvYWRpbmdTdHJhdGVneSwgR2FsbGVyeUl0ZW1UeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2NvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dhbGxlcnktaXRlbScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsb2FkXCIgW25nU3dpdGNoXT1cInR5cGVcIj5cblxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiVHlwZXMuSW1hZ2VcIj5cblxuICAgICAgICA8Z2FsbGVyeS1pbWFnZSBbc3JjXT1cImRhdGEuc3JjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2xvYWRpbmdJY29uXT1cImNvbmZpZy5sb2FkaW5nSWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtsb2FkaW5nRXJyb3JdPVwiY29uZmlnLmxvYWRpbmdFcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJlcnJvci5lbWl0KCRldmVudClcIj48L2dhbGxlcnktaW1hZ2U+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImctdGVtcGxhdGUgZy1pdGVtLXRlbXBsYXRlXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbmZpZy5pdGVtVGVtcGxhdGU7XG4gICAgICAgICAgY29udGV4dDogeyBpbmRleDogdGhpcy5pbmRleCwgY3VyckluZGV4OiB0aGlzLmN1cnJJbmRleCwgdHlwZTogdGhpcy50eXBlLCBkYXRhOiB0aGlzLmRhdGEgfVwiPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDxnYWxsZXJ5LXZpZGVvICpuZ1N3aXRjaENhc2U9XCJUeXBlcy5WaWRlb1wiXG4gICAgICAgICAgICAgICAgICAgICBbc3JjXT1cImRhdGEuc3JjXCJcbiAgICAgICAgICAgICAgICAgICAgIFtwb3N0ZXJdPVwiZGF0YS5wb3N0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgW3BhdXNlXT1cImN1cnJJbmRleCAhPT0gaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgKGVycm9yKT1cImVycm9yLmVtaXQoJGV2ZW50KVwiPjwvZ2FsbGVyeS12aWRlbz5cblxuICAgICAgPGdhbGxlcnktaWZyYW1lICpuZ1N3aXRjaENhc2U9XCJUeXBlcy5Zb3V0dWJlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cImRhdGEuc3JjXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcGF1c2VdPVwiY3VyckluZGV4ICE9PSBpbmRleFwiPjwvZ2FsbGVyeS1pZnJhbWU+XG5cbiAgICAgIDxnYWxsZXJ5LWlmcmFtZSAqbmdTd2l0Y2hDYXNlPVwiVHlwZXMuSWZyYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cImRhdGEuc3JjXCI+PC9nYWxsZXJ5LWlmcmFtZT5cblxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnLXRlbXBsYXRlIGctaXRlbS10ZW1wbGF0ZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb25maWcuaXRlbVRlbXBsYXRlO1xuICAgICAgICAgIGNvbnRleHQ6IHsgaW5kZXg6IHRoaXMuaW5kZXgsIGN1cnJJbmRleDogdGhpcy5jdXJySW5kZXgsIHR5cGU6IHRoaXMudHlwZSwgZGF0YTogdGhpcy5kYXRhIH1cIj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeUl0ZW1Db21wb25lbnQge1xuXG4gIHJlYWRvbmx5IFR5cGVzID0gR2FsbGVyeUl0ZW1UeXBlO1xuXG4gIC8qKiBHYWxsZXJ5IGNvbmZpZyAqL1xuICBASW5wdXQoKSBjb25maWc6IEdhbGxlcnlDb25maWc7XG5cbiAgLyoqIEl0ZW0ncyBpbmRleCBpbiB0aGUgZ2FsbGVyeSAqL1xuICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gIC8qKiBHYWxsZXJ5IGN1cnJlbnQgaW5kZXggKi9cbiAgQElucHV0KCkgY3VyckluZGV4OiBudW1iZXI7XG5cbiAgLyoqIEl0ZW0ncyB0eXBlICdpbWFnZScsICd2aWRlbycsICd5b3V0dWJlJywgJ2lmcmFtZScgKi9cbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG4gIC8qKiBJdGVtJ3MgZGF0YSwgdGhpcyBvYmplY3QgY29udGFpbnMgdGhlIGRhdGEgcmVxdWlyZWQgdG8gZGlzcGxheSB0aGUgY29udGVudCAoZS5nLiBzcmMgcGF0aCkgKi9cbiAgQElucHV0KCkgZGF0YTogYW55O1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGFuIGVycm9yIG9jY3VycyAqL1xuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZy1hY3RpdmUtaXRlbScpIGdldCBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleCA9PT0gdGhpcy5jdXJySW5kZXg7XG4gIH1cblxuICBnZXQgbG9hZCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnLmxvYWRpbmdTdHJhdGVneSkge1xuICAgICAgY2FzZSBMb2FkaW5nU3RyYXRlZ3kuUHJlbG9hZDpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlIExvYWRpbmdTdHJhdGVneS5MYXp5OlxuICAgICAgICByZXR1cm4gdGhpcy5jdXJySW5kZXggPT09IHRoaXMuaW5kZXg7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5jdXJySW5kZXggPT09IHRoaXMuaW5kZXggfHwgdGhpcy5jdXJySW5kZXggPT09IHRoaXMuaW5kZXggLSAxIHx8IHRoaXMuY3VyckluZGV4ID09PSB0aGlzLmluZGV4ICsgMTtcbiAgICB9XG4gIH1cblxufVxuIl19