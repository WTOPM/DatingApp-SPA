import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
var NgxGalleryActionComponent = /** @class */ (function () {
    function NgxGalleryActionComponent() {
        this.disabled = false;
        this.titleText = '';
        this.closeClick = new EventEmitter();
    }
    NgxGalleryActionComponent.prototype.ngOnInit = function () {
    };
    NgxGalleryActionComponent.prototype.handleClick = function (event) {
        if (!this.disabled) {
            this.closeClick.emit(event);
        }
        event.stopPropagation();
        event.preventDefault();
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
    return NgxGalleryActionComponent;
}());
export { NgxGalleryActionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brb2xrb3Yvbmd4LWdhbGxlcnkvIiwic291cmNlcyI6WyJsaWIvbmd4LWdhbGxlcnktYWN0aW9uL25neC1nYWxsZXJ5LWFjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFRdEc7SUFPRTtRQUxTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVkLGVBQVUsR0FBd0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUcvRCxDQUFDO0lBRUQsNENBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCwrQ0FBVyxHQUFYLFVBQVksS0FBWTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtRQUVELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQW5CUTtRQUFSLEtBQUssRUFBRTsyREFBYztJQUNiO1FBQVIsS0FBSyxFQUFFOytEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTtnRUFBZ0I7SUFFZDtRQUFULE1BQU0sRUFBRTtpRUFBc0Q7SUFMcEQseUJBQXlCO1FBTnJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsK1BBQWtEO1lBRWxELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDO09BQ1cseUJBQXlCLENBcUJyQztJQUFELGdDQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FyQlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1nYWxsZXJ5LWFjdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ2FsbGVyeS1hY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZ2FsbGVyeS1hY3Rpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTmd4R2FsbGVyeUFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdC8qLCBBZnRlclZpZXdJbml0Ki8ge1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpdGxlVGV4dCA9ICcnO1xuXG4gIEBPdXRwdXQoKSBjbG9zZUNsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudDogRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VDbGljay5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG4iXX0=