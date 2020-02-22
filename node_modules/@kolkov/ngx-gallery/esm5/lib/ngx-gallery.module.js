import { __decorate, __extends } from "tslib";
import { NgModule, Injectable } from '@angular/core';
import { NgxGalleryComponent } from './ngx-gallery.component';
import { NgxGalleryImageComponent } from './ngx-gallery-image/ngx-gallery-image.component';
import { NgxGalleryArrowsComponent } from './ngx-gallery-arrows/ngx-gallery-arrows.component';
import { NgxGalleryThumbnailsComponent } from './ngx-gallery-thumbnails/ngx-gallery-thumbnails.component';
import { NgxGalleryPreviewComponent } from './ngx-gallery-preview/ngx-gallery-preview.component';
import { NgxGalleryActionComponent } from './ngx-gallery-action/ngx-gallery-action.component';
import { NgxGalleryBulletsComponent } from './ngx-gallery-bullets/ngx-gallery-bullets.component';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
var CustomHammerConfig = /** @class */ (function (_super) {
    __extends(CustomHammerConfig, _super);
    function CustomHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
        return _this;
    }
    CustomHammerConfig = __decorate([
        Injectable()
    ], CustomHammerConfig);
    return CustomHammerConfig;
}(HammerGestureConfig));
export { CustomHammerConfig };
var NgxGalleryModule = /** @class */ (function () {
    function NgxGalleryModule() {
    }
    NgxGalleryModule = __decorate([
        NgModule({
            declarations: [
                NgxGalleryComponent,
                NgxGalleryImageComponent,
                NgxGalleryArrowsComponent,
                NgxGalleryThumbnailsComponent,
                NgxGalleryPreviewComponent,
                NgxGalleryActionComponent,
                NgxGalleryBulletsComponent
            ],
            imports: [CommonModule],
            exports: [NgxGalleryComponent],
            providers: [
                { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
            ]
        })
    ], NgxGalleryModule);
    return NgxGalleryModule;
}());
export { NgxGalleryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtvbGtvdi9uZ3gtZ2FsbGVyeS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZ2FsbGVyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLDJEQUEyRCxDQUFDO0FBQ3hHLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUdyRjtJQUF3QyxzQ0FBbUI7SUFBM0Q7UUFBQSxxRUFLQztRQUpDLGVBQVMsR0FBRztZQUNWLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDeEIsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtTQUNuQixDQUFDOztJQUNYLENBQUM7SUFMWSxrQkFBa0I7UUFEOUIsVUFBVSxFQUFFO09BQ0Esa0JBQWtCLENBSzlCO0lBQUQseUJBQUM7Q0FBQSxBQUxELENBQXdDLG1CQUFtQixHQUsxRDtTQUxZLGtCQUFrQjtBQXdCL0I7SUFBQTtJQUNBLENBQUM7SUFEWSxnQkFBZ0I7UUFoQjVCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixtQkFBbUI7Z0JBQ25CLHdCQUF3QjtnQkFDeEIseUJBQXlCO2dCQUN6Qiw2QkFBNkI7Z0JBQzdCLDBCQUEwQjtnQkFDMUIseUJBQXlCO2dCQUN6QiwwQkFBMEI7YUFDM0I7WUFDRCxPQUFPLEVBQUUsQ0FBRSxZQUFZLENBQUM7WUFDeEIsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDOUIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTthQUNqRTtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FDNUI7SUFBRCx1QkFBQztDQUFBLEFBREQsSUFDQztTQURZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05neEdhbGxlcnlDb21wb25lbnR9IGZyb20gJy4vbmd4LWdhbGxlcnkuY29tcG9uZW50JztcbmltcG9ydCB7Tmd4R2FsbGVyeUltYWdlQ29tcG9uZW50fSBmcm9tICcuL25neC1nYWxsZXJ5LWltYWdlL25neC1nYWxsZXJ5LWltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQge05neEdhbGxlcnlBcnJvd3NDb21wb25lbnR9IGZyb20gJy4vbmd4LWdhbGxlcnktYXJyb3dzL25neC1nYWxsZXJ5LWFycm93cy5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzL25neC1nYWxsZXJ5LXRodW1ibmFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7Tmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnR9IGZyb20gJy4vbmd4LWdhbGxlcnktcHJldmlldy9uZ3gtZ2FsbGVyeS1wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQge05neEdhbGxlcnlBY3Rpb25Db21wb25lbnR9IGZyb20gJy4vbmd4LWdhbGxlcnktYWN0aW9uL25neC1nYWxsZXJ5LWFjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hHYWxsZXJ5QnVsbGV0c0NvbXBvbmVudH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1idWxsZXRzL25neC1nYWxsZXJ5LWJ1bGxldHMuY29tcG9uZW50JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtIQU1NRVJfR0VTVFVSRV9DT05GSUcsIEhhbW1lckdlc3R1cmVDb25maWd9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VzdG9tSGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyAge1xuICBvdmVycmlkZXMgPSB7XG4gICAgcGluY2g6IHsgZW5hYmxlOiBmYWxzZSB9LFxuICAgIHJvdGF0ZTogeyBlbmFibGU6IGZhbHNlIH1cbiAgfSBhcyBhbnk7XG59XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmd4R2FsbGVyeUNvbXBvbmVudCxcbiAgICBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQsXG4gICAgTmd4R2FsbGVyeUFycm93c0NvbXBvbmVudCxcbiAgICBOZ3hHYWxsZXJ5VGh1bWJuYWlsc0NvbXBvbmVudCxcbiAgICBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudCxcbiAgICBOZ3hHYWxsZXJ5QWN0aW9uQ29tcG9uZW50LFxuICAgIE5neEdhbGxlcnlCdWxsZXRzQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW05neEdhbGxlcnlDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRywgdXNlQ2xhc3M6IEN1c3RvbUhhbW1lckNvbmZpZyB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4R2FsbGVyeU1vZHVsZSB7XG59XG4iXX0=