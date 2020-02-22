import { __decorate } from "tslib";
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
let CustomHammerConfig = class CustomHammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = {
            pinch: { enable: false },
            rotate: { enable: false }
        };
    }
};
CustomHammerConfig = __decorate([
    Injectable()
], CustomHammerConfig);
export { CustomHammerConfig };
let NgxGalleryModule = class NgxGalleryModule {
};
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
export { NgxGalleryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtvbGtvdi9uZ3gtZ2FsbGVyeS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZ2FsbGVyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLDJEQUEyRCxDQUFDO0FBQ3hHLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUdyRixJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFtQixTQUFRLG1CQUFtQjtJQUEzRDs7UUFDRSxjQUFTLEdBQUc7WUFDVixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ3hCLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7U0FDbkIsQ0FBQztJQUNYLENBQUM7Q0FBQSxDQUFBO0FBTFksa0JBQWtCO0lBRDlCLFVBQVUsRUFBRTtHQUNBLGtCQUFrQixDQUs5QjtTQUxZLGtCQUFrQjtBQXdCL0IsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7Q0FDNUIsQ0FBQTtBQURZLGdCQUFnQjtJQWhCNUIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4Qix5QkFBeUI7WUFDekIsNkJBQTZCO1lBQzdCLDBCQUEwQjtZQUMxQix5QkFBeUI7WUFDekIsMEJBQTBCO1NBQzNCO1FBQ0QsT0FBTyxFQUFFLENBQUUsWUFBWSxDQUFDO1FBQ3hCLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQzlCLFNBQVMsRUFBRTtZQUNULEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTtTQUNqRTtLQUNGLENBQUM7R0FDVyxnQkFBZ0IsQ0FDNUI7U0FEWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ3hHYWxsZXJ5Q29tcG9uZW50fSBmcm9tICcuL25neC1nYWxsZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQge05neEdhbGxlcnlJbWFnZUNvbXBvbmVudH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1pbWFnZS9uZ3gtZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hHYWxsZXJ5QXJyb3dzQ29tcG9uZW50fSBmcm9tICcuL25neC1nYWxsZXJ5LWFycm93cy9uZ3gtZ2FsbGVyeS1hcnJvd3MuY29tcG9uZW50JztcbmltcG9ydCB7Tmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnR9IGZyb20gJy4vbmd4LWdhbGxlcnktdGh1bWJuYWlscy9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzLmNvbXBvbmVudCc7XG5pbXBvcnQge05neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50fSBmcm9tICcuL25neC1nYWxsZXJ5LXByZXZpZXcvbmd4LWdhbGxlcnktcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hHYWxsZXJ5QWN0aW9uQ29tcG9uZW50fSBmcm9tICcuL25neC1nYWxsZXJ5LWFjdGlvbi9uZ3gtZ2FsbGVyeS1hY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7Tmd4R2FsbGVyeUJ1bGxldHNDb21wb25lbnR9IGZyb20gJy4vbmd4LWdhbGxlcnktYnVsbGV0cy9uZ3gtZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SEFNTUVSX0dFU1RVUkVfQ09ORklHLCBIYW1tZXJHZXN0dXJlQ29uZmlnfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbUhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcgIHtcbiAgb3ZlcnJpZGVzID0ge1xuICAgIHBpbmNoOiB7IGVuYWJsZTogZmFsc2UgfSxcbiAgICByb3RhdGU6IHsgZW5hYmxlOiBmYWxzZSB9XG4gIH0gYXMgYW55O1xufVxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5neEdhbGxlcnlDb21wb25lbnQsXG4gICAgTmd4R2FsbGVyeUltYWdlQ29tcG9uZW50LFxuICAgIE5neEdhbGxlcnlBcnJvd3NDb21wb25lbnQsXG4gICAgTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQsXG4gICAgTmd4R2FsbGVyeVByZXZpZXdDb21wb25lbnQsXG4gICAgTmd4R2FsbGVyeUFjdGlvbkNvbXBvbmVudCxcbiAgICBOZ3hHYWxsZXJ5QnVsbGV0c0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtOZ3hHYWxsZXJ5Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBDdXN0b21IYW1tZXJDb25maWcgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlNb2R1bGUge1xufVxuIl19