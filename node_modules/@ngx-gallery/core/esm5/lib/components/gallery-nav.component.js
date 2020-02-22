/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var GalleryNavComponent = /** @class */ (function () {
    function GalleryNavComponent(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    GalleryNavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.navIcon = this._sanitizer.bypassSecurityTrustHtml(this.config.navIcon);
    };
    GalleryNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-nav',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <i *ngIf=\"config.loop || state.hasPrev\"\n       class=\"g-nav-prev\"\n       aria-label=\"Previous\"\n       (tapClick)=\"action.emit('prev')\"\n       [innerHtml]=\"navIcon\"></i>\n\n    <i *ngIf=\"config.loop || state.hasNext\"\n       class=\"g-nav-next\"\n       aria-label=\"Next\"\n       (tapClick)=\"action.emit('next')\"\n       [innerHtml]=\"navIcon\"></i>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryNavComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    GalleryNavComponent.propDecorators = {
        state: [{ type: Input }],
        config: [{ type: Input }],
        action: [{ type: Output }]
    };
    return GalleryNavComponent;
}());
export { GalleryNavComponent };
if (false) {
    /** @type {?} */
    GalleryNavComponent.prototype.navIcon;
    /** @type {?} */
    GalleryNavComponent.prototype.state;
    /** @type {?} */
    GalleryNavComponent.prototype.config;
    /** @type {?} */
    GalleryNavComponent.prototype.action;
    /**
     * @type {?}
     * @private
     */
    GalleryNavComponent.prototype._sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nYWxsZXJ5LW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBSW5FO0lBd0JFLDZCQUFvQixVQUF3QjtRQUF4QixlQUFVLEdBQVYsVUFBVSxDQUFjO1FBRmxDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBRzlDLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RSxDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDRYQVlUO2lCQUNGOzs7O2dCQXBCUSxZQUFZOzs7d0JBd0JsQixLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsTUFBTTs7SUFRVCwwQkFBQztDQUFBLEFBOUJELElBOEJDO1NBYlksbUJBQW1COzs7SUFFOUIsc0NBQWtCOztJQUNsQixvQ0FBNkI7O0lBQzdCLHFDQUErQjs7SUFDL0IscUNBQThDOzs7OztJQUVsQyx5Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgR2FsbGVyeVN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL2dhbGxlcnkubW9kZWwnO1xuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LW5hdicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpICpuZ0lmPVwiY29uZmlnLmxvb3AgfHwgc3RhdGUuaGFzUHJldlwiXG4gICAgICAgY2xhc3M9XCJnLW5hdi1wcmV2XCJcbiAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIlxuICAgICAgICh0YXBDbGljayk9XCJhY3Rpb24uZW1pdCgncHJldicpXCJcbiAgICAgICBbaW5uZXJIdG1sXT1cIm5hdkljb25cIj48L2k+XG5cbiAgICA8aSAqbmdJZj1cImNvbmZpZy5sb29wIHx8IHN0YXRlLmhhc05leHRcIlxuICAgICAgIGNsYXNzPVwiZy1uYXYtbmV4dFwiXG4gICAgICAgYXJpYS1sYWJlbD1cIk5leHRcIlxuICAgICAgICh0YXBDbGljayk9XCJhY3Rpb24uZW1pdCgnbmV4dCcpXCJcbiAgICAgICBbaW5uZXJIdG1sXT1cIm5hdkljb25cIj48L2k+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeU5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbmF2SWNvbjogU2FmZUh0bWw7XG4gIEBJbnB1dCgpIHN0YXRlOiBHYWxsZXJ5U3RhdGU7XG4gIEBJbnB1dCgpIGNvbmZpZzogR2FsbGVyeUNvbmZpZztcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5hdkljb24gPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5jb25maWcubmF2SWNvbik7XG4gIH1cbn1cbiJdfQ==