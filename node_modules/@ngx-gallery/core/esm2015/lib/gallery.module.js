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
export class GalleryModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: GalleryModule,
            providers: [
                {
                    provide: GALLERY_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9nYWxsZXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBcUIsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRSxPQUFPLEVBQWlCLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUE2QmxELE1BQU0sT0FBTyxhQUFhOzs7OztJQUN4QixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQXFCO1FBRXJDLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXZDRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIscUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLHNCQUFzQjtvQkFDdEIsU0FBUztvQkFDVCxRQUFRO2lCQUNUO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLFNBQVM7b0JBQ1QsUUFBUTtpQkFDVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZywgR0FMTEVSWV9DT05GSUcgfSBmcm9tICcuL21vZGVscy9jb25maWcubW9kZWwnO1xuXG5pbXBvcnQgeyBHYWxsZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEdhbGxlcnlOYXZDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IEdhbGxlcnlDb3JlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktY29yZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeURvdHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS1kb3RzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYWxsZXJ5VGh1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktdGh1bWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYWxsZXJ5U2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktc2xpZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYWxsZXJ5Q291bnRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LWNvdW50ZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgR2FsbGVyeUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYWxsZXJ5VGh1bWJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS10aHVtYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FsbGVyeUltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LWltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHYWxsZXJ5VmlkZW9Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVtcGxhdGVzL2dhbGxlcnktdmlkZW8uY29tcG9uZW50JztcbmltcG9ydCB7IEdhbGxlcnlJZnJhbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVtcGxhdGVzL2dhbGxlcnktaWZyYW1lLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IExhenlJbWFnZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9sYXp5LWltYWdlJztcbmltcG9ydCB7IFRhcENsaWNrIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RhcC1jbGljayc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBHYWxsZXJ5Q29tcG9uZW50LFxuICAgIEdhbGxlcnlOYXZDb21wb25lbnQsXG4gICAgR2FsbGVyeURvdHNDb21wb25lbnQsXG4gICAgR2FsbGVyeUNvcmVDb21wb25lbnQsXG4gICAgR2FsbGVyeVNsaWRlckNvbXBvbmVudCxcbiAgICBHYWxsZXJ5Q291bnRlckNvbXBvbmVudCxcbiAgICBHYWxsZXJ5VGh1bWJzQ29tcG9uZW50LFxuICAgIEdhbGxlcnlUaHVtYkNvbXBvbmVudCxcbiAgICBHYWxsZXJ5SXRlbUNvbXBvbmVudCxcbiAgICBHYWxsZXJ5SW1hZ2VDb21wb25lbnQsXG4gICAgR2FsbGVyeVZpZGVvQ29tcG9uZW50LFxuICAgIEdhbGxlcnlJZnJhbWVDb21wb25lbnQsXG4gICAgTGF6eUltYWdlLFxuICAgIFRhcENsaWNrXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBHYWxsZXJ5Q29tcG9uZW50LFxuICAgIExhenlJbWFnZSxcbiAgICBUYXBDbGljayxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5TW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBHYWxsZXJ5Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEdhbGxlcnlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEdBTExFUllfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==