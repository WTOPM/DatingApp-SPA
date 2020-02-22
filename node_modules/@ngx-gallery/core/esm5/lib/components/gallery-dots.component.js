/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
var GalleryDotsComponent = /** @class */ (function () {
    function GalleryDotsComponent() {
        this.action = new EventEmitter();
    }
    GalleryDotsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-dots',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <div class=\"g-dot\"\n         *ngFor=\"let item of state.items; let i = index\"\n         [class.g-dot-active]=\"i === state.currIndex\"\n         [style.width.px]=\"config?.dotsSize\"\n         [style.height.px]=\"config?.dotsSize\"\n         (tapClick)=\"action.emit(i)\">\n      <div class=\"g-dot-inner\"></div>\n    </div>\n  "
                }] }
    ];
    GalleryDotsComponent.propDecorators = {
        state: [{ type: Input }],
        config: [{ type: Input }],
        action: [{ type: Output }]
    };
    return GalleryDotsComponent;
}());
export { GalleryDotsComponent };
if (false) {
    /** @type {?} */
    GalleryDotsComponent.prototype.state;
    /** @type {?} */
    GalleryDotsComponent.prototype.config;
    /** @type {?} */
    GalleryDotsComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1kb3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ2FsbGVyeS1kb3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUloRztJQUFBO1FBaUJZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBQ2hELENBQUM7O2dCQWxCQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsb1ZBU1Q7aUJBQ0Y7Ozt3QkFFRSxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsTUFBTTs7SUFDVCwyQkFBQztDQUFBLEFBbEJELElBa0JDO1NBSlksb0JBQW9COzs7SUFDL0IscUNBQTZCOztJQUM3QixzQ0FBK0I7O0lBQy9CLHNDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2FsbGVyeVN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL2dhbGxlcnkubW9kZWwnO1xuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LWRvdHMnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZy1kb3RcIlxuICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3RhdGUuaXRlbXM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgW2NsYXNzLmctZG90LWFjdGl2ZV09XCJpID09PSBzdGF0ZS5jdXJySW5kZXhcIlxuICAgICAgICAgW3N0eWxlLndpZHRoLnB4XT1cImNvbmZpZz8uZG90c1NpemVcIlxuICAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJjb25maWc/LmRvdHNTaXplXCJcbiAgICAgICAgICh0YXBDbGljayk9XCJhY3Rpb24uZW1pdChpKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImctZG90LWlubmVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeURvdHNDb21wb25lbnQge1xuICBASW5wdXQoKSBzdGF0ZTogR2FsbGVyeVN0YXRlO1xuICBASW5wdXQoKSBjb25maWc6IEdhbGxlcnlDb25maWc7XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbn1cbiJdfQ==