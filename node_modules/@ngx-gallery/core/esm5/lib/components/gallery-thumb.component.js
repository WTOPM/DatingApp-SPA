/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, HostBinding, Output, EventEmitter } from '@angular/core';
var GalleryThumbComponent = /** @class */ (function () {
    function GalleryThumbComponent() {
        this.error = new EventEmitter();
    }
    Object.defineProperty(GalleryThumbComponent.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.index === this.currIndex;
        },
        enumerable: true,
        configurable: true
    });
    GalleryThumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-thumb',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <gallery-image [src]=\"data.thumb\" \n                   mode=\"indeterminate\"\n                   [isThumbnail]=\"true\" \n                   [loadingIcon]=\"config.thumbLoadingIcon\"\n                   [loadingError]=\"config.thumbLoadingError \"\n                   (error)=\"error.emit($event)\"></gallery-image>\n\n    <div *ngIf=\"config.thumbTemplate\" class=\"g-template g-thumb-template\">\n      <ng-container\n        *ngTemplateOutlet=\"config.thumbTemplate; context: { index: this.index, type: this.type, data: this.data }\">\n      </ng-container>\n    </div>\n  "
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
    return GalleryThumbComponent;
}());
export { GalleryThumbComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS10aHVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dhbGxlcnktdGh1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3RztJQUFBO1FBa0NZLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBTTlDLENBQUM7SUFKQyxzQkFBeUMsMkNBQVE7Ozs7UUFBakQ7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwya0JBYVQ7aUJBQ0Y7Ozt5QkFHRSxLQUFLO3dCQUdMLEtBQUs7NEJBR0wsS0FBSzt1QkFHTCxLQUFLO3VCQUdMLEtBQUs7d0JBRUwsTUFBTTsyQkFFTixXQUFXLFNBQUMsc0JBQXNCOztJQUlyQyw0QkFBQztDQUFBLEFBeENELElBd0NDO1NBdEJZLHFCQUFxQjs7O0lBRWhDLHVDQUErQjs7Ozs7SUFHL0Isc0NBQXVCOzs7OztJQUd2QiwwQ0FBMkI7Ozs7O0lBRzNCLHFDQUFzQjs7Ozs7SUFHdEIscUNBQW1COztJQUVuQixzQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSG9zdEJpbmRpbmcsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHYWxsZXJ5Q29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dhbGxlcnktdGh1bWInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Z2FsbGVyeS1pbWFnZSBbc3JjXT1cImRhdGEudGh1bWJcIiBcbiAgICAgICAgICAgICAgICAgICBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgW2lzVGh1bWJuYWlsXT1cInRydWVcIiBcbiAgICAgICAgICAgICAgICAgICBbbG9hZGluZ0ljb25dPVwiY29uZmlnLnRodW1iTG9hZGluZ0ljb25cIlxuICAgICAgICAgICAgICAgICAgIFtsb2FkaW5nRXJyb3JdPVwiY29uZmlnLnRodW1iTG9hZGluZ0Vycm9yIFwiXG4gICAgICAgICAgICAgICAgICAgKGVycm9yKT1cImVycm9yLmVtaXQoJGV2ZW50KVwiPjwvZ2FsbGVyeS1pbWFnZT5cblxuICAgIDxkaXYgKm5nSWY9XCJjb25maWcudGh1bWJUZW1wbGF0ZVwiIGNsYXNzPVwiZy10ZW1wbGF0ZSBnLXRodW1iLXRlbXBsYXRlXCI+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29uZmlnLnRodW1iVGVtcGxhdGU7IGNvbnRleHQ6IHsgaW5kZXg6IHRoaXMuaW5kZXgsIHR5cGU6IHRoaXMudHlwZSwgZGF0YTogdGhpcy5kYXRhIH1cIj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlUaHVtYkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY29uZmlnOiBHYWxsZXJ5Q29uZmlnO1xuXG4gIC8qKiBJdGVtJ3MgaW5kZXggaW4gdGhlIGdhbGxlcnkgKi9cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcblxuICAvKiogR2FsbGVyeSBjdXJyZW50IGluZGV4ICovXG4gIEBJbnB1dCgpIGN1cnJJbmRleDogbnVtYmVyO1xuXG4gIC8qKiBJdGVtJ3MgdHlwZSAnaW1hZ2UnLCAndmlkZW8nLCAneW91dHViZScsICdpZnJhbWUnICovXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcblxuICAvKiogSXRlbSdzIGRhdGEsIHRoaXMgb2JqZWN0IGNvbnRhaW5zIHRoZSBkYXRhIHJlcXVpcmVkIHRvIGRpc3BsYXkgdGhlIGNvbnRlbnQgKGUuZy4gc3JjIHBhdGgpICovXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcblxuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZy1hY3RpdmUtdGh1bWInKSBnZXQgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXggPT09IHRoaXMuY3VyckluZGV4O1xuICB9XG5cbn1cbiJdfQ==