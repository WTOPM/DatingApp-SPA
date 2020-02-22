/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GALLERY_CONFIG } from './models/config.model';
import { GalleryComponent } from './components/gallery.component';
import { GalleryNavComponent } from './components/gallery-nav.component';
import { GalleryCoreComponent } from './components/gallery-core.component';
import { GalleryDotsComponent } from './components/gallery-dots.component';
import { GalleryThumbsComponent } from './components/gallery-thumbs.component';
import { GallerySliderComponent } from './components/gallery-slider.component';
import { GalleryCounterComponent } from './components/gallery-counter.component';
import { GalleryItemComponent } from './components/gallery-item.component';
import { GalleryThumbComponent } from './components/gallery-thumb.component';
import { GalleryImageComponent } from './components/templates/gallery-image.component';
import { GalleryVideoComponent } from './components/templates/gallery-video.component';
import { GalleryIframeComponent } from './components/templates/gallery-iframe.component';
import { LazyImage } from './directives/lazy-image';
import { TapClick } from './directives/tap-click';
var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    GalleryModule.withConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: GalleryModule,
            providers: [
                {
                    provide: GALLERY_CONFIG,
                    useValue: config
                }
            ]
        };
    };
    GalleryModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule
                    ],
                    declarations: [
                        GalleryComponent,
                        GalleryNavComponent,
                        GalleryDotsComponent,
                        GalleryCoreComponent,
                        GallerySliderComponent,
                        GalleryCounterComponent,
                        GalleryThumbsComponent,
                        GalleryThumbComponent,
                        GalleryItemComponent,
                        GalleryImageComponent,
                        GalleryVideoComponent,
                        GalleryIframeComponent,
                        LazyImage,
                        TapClick
                    ],
                    exports: [
                        GalleryComponent,
                        LazyImage,
                        TapClick,
                    ]
                },] }
    ];
    return GalleryModule;
}());
export { GalleryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9nYWxsZXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBcUIsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRSxPQUFPLEVBQWlCLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEQ7SUFBQTtJQXdDQSxDQUFDOzs7OztJQVpRLHdCQUFVOzs7O0lBQWpCLFVBQWtCLE1BQXFCO1FBRXJDLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXZDRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUN0QixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsU0FBUzt3QkFDVCxRQUFRO3FCQUNUO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLFNBQVM7d0JBQ1QsUUFBUTtxQkFDVDtpQkFDRjs7SUFjRCxvQkFBQztDQUFBLEFBeENELElBd0NDO1NBYlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEdhbGxlcnlDb25maWcsIEdBTExFUllfQ09ORklHIH0gZnJvbSAnLi9tb2RlbHMvY29uZmlnLm1vZGVsJztcblxuaW1wb3J0IHsgR2FsbGVyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYWxsZXJ5TmF2Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYWxsZXJ5Q29yZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LWNvcmUuY29tcG9uZW50JztcbmltcG9ydCB7IEdhbGxlcnlEb3RzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktZG90cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeVRodW1ic0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LXRodW1icy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeVNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LXNsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeUNvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS1jb3VudGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEdhbGxlcnlJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeVRodW1iQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktdGh1bWIuY29tcG9uZW50JztcbmltcG9ydCB7IEdhbGxlcnlJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeVZpZGVvQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LXZpZGVvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYWxsZXJ5SWZyYW1lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LWlmcmFtZS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBMYXp5SW1hZ2UgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbGF6eS1pbWFnZSc7XG5pbXBvcnQgeyBUYXBDbGljayB9IGZyb20gJy4vZGlyZWN0aXZlcy90YXAtY2xpY2snO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgR2FsbGVyeUNvbXBvbmVudCxcbiAgICBHYWxsZXJ5TmF2Q29tcG9uZW50LFxuICAgIEdhbGxlcnlEb3RzQ29tcG9uZW50LFxuICAgIEdhbGxlcnlDb3JlQ29tcG9uZW50LFxuICAgIEdhbGxlcnlTbGlkZXJDb21wb25lbnQsXG4gICAgR2FsbGVyeUNvdW50ZXJDb21wb25lbnQsXG4gICAgR2FsbGVyeVRodW1ic0NvbXBvbmVudCxcbiAgICBHYWxsZXJ5VGh1bWJDb21wb25lbnQsXG4gICAgR2FsbGVyeUl0ZW1Db21wb25lbnQsXG4gICAgR2FsbGVyeUltYWdlQ29tcG9uZW50LFxuICAgIEdhbGxlcnlWaWRlb0NvbXBvbmVudCxcbiAgICBHYWxsZXJ5SWZyYW1lQ29tcG9uZW50LFxuICAgIExhenlJbWFnZSxcbiAgICBUYXBDbGlja1xuICBdLFxuICBleHBvcnRzOiBbXG4gICAgR2FsbGVyeUNvbXBvbmVudCxcbiAgICBMYXp5SW1hZ2UsXG4gICAgVGFwQ2xpY2ssXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeU1vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogR2FsbGVyeUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBHYWxsZXJ5TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBHQUxMRVJZX0NPTkZJRyxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=