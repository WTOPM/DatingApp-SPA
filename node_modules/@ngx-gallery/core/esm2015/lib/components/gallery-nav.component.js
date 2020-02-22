/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class GalleryNavComponent {
    /**
     * @param {?} _sanitizer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.action = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.navIcon = this._sanitizer.bypassSecurityTrustHtml(this.config.navIcon);
    }
}
GalleryNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-nav',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i *ngIf="config.loop || state.hasPrev"
       class="g-nav-prev"
       aria-label="Previous"
       (tapClick)="action.emit('prev')"
       [innerHtml]="navIcon"></i>

    <i *ngIf="config.loop || state.hasNext"
       class="g-nav-next"
       aria-label="Next"
       (tapClick)="action.emit('next')"
       [innerHtml]="navIcon"></i>
  `
            }] }
];
/** @nocollapse */
GalleryNavComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
GalleryNavComponent.propDecorators = {
    state: [{ type: Input }],
    config: [{ type: Input }],
    action: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nYWxsZXJ5LW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBcUJuRSxNQUFNLE9BQU8sbUJBQW1COzs7O0lBTzlCLFlBQW9CLFVBQXdCO1FBQXhCLGVBQVUsR0FBVixVQUFVLENBQWM7UUFGbEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFHOUMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDthQUNGOzs7O1lBcEJRLFlBQVk7OztvQkF3QmxCLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxNQUFNOzs7O0lBSFAsc0NBQWtCOztJQUNsQixvQ0FBNkI7O0lBQzdCLHFDQUErQjs7SUFDL0IscUNBQThDOzs7OztJQUVsQyx5Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgR2FsbGVyeVN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL2dhbGxlcnkubW9kZWwnO1xuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LW5hdicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpICpuZ0lmPVwiY29uZmlnLmxvb3AgfHwgc3RhdGUuaGFzUHJldlwiXG4gICAgICAgY2xhc3M9XCJnLW5hdi1wcmV2XCJcbiAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIlxuICAgICAgICh0YXBDbGljayk9XCJhY3Rpb24uZW1pdCgncHJldicpXCJcbiAgICAgICBbaW5uZXJIdG1sXT1cIm5hdkljb25cIj48L2k+XG5cbiAgICA8aSAqbmdJZj1cImNvbmZpZy5sb29wIHx8IHN0YXRlLmhhc05leHRcIlxuICAgICAgIGNsYXNzPVwiZy1uYXYtbmV4dFwiXG4gICAgICAgYXJpYS1sYWJlbD1cIk5leHRcIlxuICAgICAgICh0YXBDbGljayk9XCJhY3Rpb24uZW1pdCgnbmV4dCcpXCJcbiAgICAgICBbaW5uZXJIdG1sXT1cIm5hdkljb25cIj48L2k+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeU5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbmF2SWNvbjogU2FmZUh0bWw7XG4gIEBJbnB1dCgpIHN0YXRlOiBHYWxsZXJ5U3RhdGU7XG4gIEBJbnB1dCgpIGNvbmZpZzogR2FsbGVyeUNvbmZpZztcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5hdkljb24gPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5jb25maWcubmF2SWNvbik7XG4gIH1cbn1cbiJdfQ==