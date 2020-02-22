/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
export class GalleryDotsComponent {
    constructor() {
        this.action = new EventEmitter();
    }
}
GalleryDotsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-dots',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="g-dot"
         *ngFor="let item of state.items; let i = index"
         [class.g-dot-active]="i === state.currIndex"
         [style.width.px]="config?.dotsSize"
         [style.height.px]="config?.dotsSize"
         (tapClick)="action.emit(i)">
      <div class="g-dot-inner"></div>
    </div>
  `
            }] }
];
GalleryDotsComponent.propDecorators = {
    state: [{ type: Input }],
    config: [{ type: Input }],
    action: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    GalleryDotsComponent.prototype.state;
    /** @type {?} */
    GalleryDotsComponent.prototype.config;
    /** @type {?} */
    GalleryDotsComponent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1kb3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ2FsbGVyeS1kb3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtCaEcsTUFBTSxPQUFPLG9CQUFvQjtJQWRqQztRQWlCWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUNoRCxDQUFDOzs7WUFsQkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDthQUNGOzs7b0JBRUUsS0FBSztxQkFDTCxLQUFLO3FCQUNMLE1BQU07Ozs7SUFGUCxxQ0FBNkI7O0lBQzdCLHNDQUErQjs7SUFDL0Isc0NBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHYWxsZXJ5U3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvZ2FsbGVyeS5tb2RlbCc7XG5pbXBvcnQgeyBHYWxsZXJ5Q29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dhbGxlcnktZG90cycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJnLWRvdFwiXG4gICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdGF0ZS5pdGVtczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICBbY2xhc3MuZy1kb3QtYWN0aXZlXT1cImkgPT09IHN0YXRlLmN1cnJJbmRleFwiXG4gICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwiY29uZmlnPy5kb3RzU2l6ZVwiXG4gICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cImNvbmZpZz8uZG90c1NpemVcIlxuICAgICAgICAgKHRhcENsaWNrKT1cImFjdGlvbi5lbWl0KGkpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZy1kb3QtaW5uZXJcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5RG90c0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHN0YXRlOiBHYWxsZXJ5U3RhdGU7XG4gIEBJbnB1dCgpIGNvbmZpZzogR2FsbGVyeUNvbmZpZztcbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xufVxuIl19