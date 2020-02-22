import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
let NgxGalleryActionComponent = class NgxGalleryActionComponent {
    constructor() {
        this.disabled = false;
        this.titleText = '';
        this.closeClick = new EventEmitter();
    }
    ngOnInit() {
    }
    handleClick(event) {
        if (!this.disabled) {
            this.closeClick.emit(event);
        }
        event.stopPropagation();
        event.preventDefault();
    }
};
__decorate([
    Input()
], NgxGalleryActionComponent.prototype, "icon", void 0);
__decorate([
    Input()
], NgxGalleryActionComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], NgxGalleryActionComponent.prototype, "titleText", void 0);
__decorate([
    Output()
], NgxGalleryActionComponent.prototype, "closeClick", void 0);
NgxGalleryActionComponent = __decorate([
    Component({
        selector: 'ngx-gallery-action',
        template: "<div class=\"ngx-gallery-icon\" [class.ngx-gallery-icon-disabled]=\"disabled\"\n     aria-hidden=\"true\"\n     title=\"{{ titleText }}\"\n     (click)=\"handleClick($event)\">\n  <i class=\"ngx-gallery-icon-content {{ icon }}\"></i>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".ngx-gallery-icon{color:#fff;z-index:2000;display:inline-block;position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}.ngx-gallery-icon .ngx-gallery-icon-content{display:block}"]
    })
], NgxGalleryActionComponent);
export { NgxGalleryActionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brb2xrb3Yvbmd4LWdhbGxlcnkvIiwic291cmNlcyI6WyJsaWIvbmd4LWdhbGxlcnktYWN0aW9uL25neC1nYWxsZXJ5LWFjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFRdEcsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFPcEM7UUFMUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFFZCxlQUFVLEdBQXdCLElBQUksWUFBWSxFQUFFLENBQUM7SUFHL0QsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVk7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFFRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRixDQUFBO0FBcEJVO0lBQVIsS0FBSyxFQUFFO3VEQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7MkRBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOzREQUFnQjtBQUVkO0lBQVQsTUFBTSxFQUFFOzZEQUFzRDtBQUxwRCx5QkFBeUI7SUFOckMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QiwrUEFBa0Q7UUFFbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7R0FDVyx5QkFBeUIsQ0FxQnJDO1NBckJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZ2FsbGVyeS1hY3Rpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWdhbGxlcnktYWN0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWdhbGxlcnktYWN0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlBY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQvKiwgQWZ0ZXJWaWV3SW5pdCovIHtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZVRleHQgPSAnJztcblxuICBAT3V0cHV0KCkgY2xvc2VDbGljazogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsb3NlQ2xpY2suZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuIl19