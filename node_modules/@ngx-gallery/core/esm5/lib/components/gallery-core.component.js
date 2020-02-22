/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, HostBinding, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
var GalleryCoreComponent = /** @class */ (function () {
    function GalleryCoreComponent() {
        this.action = new EventEmitter();
        this.itemClick = new EventEmitter();
        this.thumbClick = new EventEmitter();
        this.error = new EventEmitter();
    }
    Object.defineProperty(GalleryCoreComponent.prototype, "thumbPosition", {
        /** Set thumbnails position */
        get: /**
         * Set thumbnails position
         * @return {?}
         */
        function () {
            return this.config.thumbPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "slidingDirection", {
        /** Set sliding direction */
        get: /**
         * Set sliding direction
         * @return {?}
         */
        function () {
            return this.config.slidingDirection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "disableThumb", {
        /** Disable thumbnails clicks */
        get: /**
         * Disable thumbnails clicks
         * @return {?}
         */
        function () {
            return this.config.disableThumb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "imageSize", {
        /** Set gallery image size */
        get: /**
         * Set gallery image size
         * @return {?}
         */
        function () {
            return this.config.imageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "dotsPosition", {
        /** Set gallery dots position */
        get: /**
         * Set gallery dots position
         * @return {?}
         */
        function () {
            return this.config.dotsPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryCoreComponent.prototype, "counterPosition", {
        /** Set gallery counter position */
        get: /**
         * Set gallery counter position
         * @return {?}
         */
        function () {
            return this.config.counterPosition;
        },
        enumerable: true,
        configurable: true
    });
    GalleryCoreComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-core',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <gallery-thumbs *ngIf=\"config.thumb\"\n                    [state]=\"state\"\n                    [config]=\"config\"\n                    (action)=\"action.emit($event)\"\n                    (thumbClick)=\"thumbClick.emit($event)\">\n    </gallery-thumbs>\n    <div class=\"g-box\">\n      <gallery-slider [state]=\"state\"\n                      [config]=\"config\"\n                      (action)=\"action.emit($event)\"\n                      (itemClick)=\"itemClick.emit($event)\"\n                      (error)=\"error.emit($event)\">\n\n        <gallery-nav *ngIf=\"config.nav && state.items.length > 1\"\n                     [state]=\"state\"\n                     [config]=\"config\"\n                     (action)=\"action.emit($event)\">\n        </gallery-nav>\n\n      </gallery-slider>\n\n      <gallery-dots *ngIf=\"config.dots\"\n                    [state]=\"state\"\n                    [config]=\"config\"\n                    (action)=\"action.emit($event)\">\n      </gallery-dots>\n\n      <gallery-counter *ngIf=\"config.counter\"\n                       [state]=\"state\">\n      </gallery-counter>\n    </div>\n  "
                }] }
    ];
    GalleryCoreComponent.propDecorators = {
        state: [{ type: Input }],
        config: [{ type: Input }],
        action: [{ type: Output }],
        itemClick: [{ type: Output }],
        thumbClick: [{ type: Output }],
        error: [{ type: Output }],
        thumbPosition: [{ type: HostBinding, args: ['attr.thumbPosition',] }],
        slidingDirection: [{ type: HostBinding, args: ['attr.slidingDirection',] }],
        disableThumb: [{ type: HostBinding, args: ['attr.disableThumb',] }],
        imageSize: [{ type: HostBinding, args: ['attr.imageSize',] }],
        dotsPosition: [{ type: HostBinding, args: ['attr.dotsPosition',] }],
        counterPosition: [{ type: HostBinding, args: ['attr.counterPosition',] }]
    };
    return GalleryCoreComponent;
}());
export { GalleryCoreComponent };
if (false) {
    /** @type {?} */
    GalleryCoreComponent.prototype.state;
    /** @type {?} */
    GalleryCoreComponent.prototype.config;
    /** @type {?} */
    GalleryCoreComponent.prototype.action;
    /** @type {?} */
    GalleryCoreComponent.prototype.itemClick;
    /** @type {?} */
    GalleryCoreComponent.prototype.thumbClick;
    /** @type {?} */
    GalleryCoreComponent.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1jb3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ2FsbGVyeS1jb3JlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0c7SUFBQTtRQXlDWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDN0MsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDdkMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDeEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO0lBZ0NyRCxDQUFDO0lBN0JDLHNCQUF1QywrQ0FBYTtRQURwRCw4QkFBOEI7Ozs7O1FBQzlCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUdELHNCQUEwQyxrREFBZ0I7UUFEMUQsNEJBQTRCOzs7OztRQUM1QjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUdELHNCQUFzQyw4Q0FBWTtRQURsRCxnQ0FBZ0M7Ozs7O1FBQ2hDO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUdELHNCQUFtQywyQ0FBUztRQUQ1Qyw2QkFBNkI7Ozs7O1FBQzdCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUdELHNCQUFzQyw4Q0FBWTtRQURsRCxnQ0FBZ0M7Ozs7O1FBQ2hDO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUdELHNCQUF5QyxpREFBZTtRQUR4RCxtQ0FBbUM7Ozs7O1FBQ25DO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTs7Z0JBMUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSw2bkNBZ0NUO2lCQUNGOzs7d0JBR0UsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLE1BQU07NEJBQ04sTUFBTTs2QkFDTixNQUFNO3dCQUNOLE1BQU07Z0NBR04sV0FBVyxTQUFDLG9CQUFvQjttQ0FLaEMsV0FBVyxTQUFDLHVCQUF1QjsrQkFLbkMsV0FBVyxTQUFDLG1CQUFtQjs0QkFLL0IsV0FBVyxTQUFDLGdCQUFnQjsrQkFLNUIsV0FBVyxTQUFDLG1CQUFtQjtrQ0FLL0IsV0FBVyxTQUFDLHNCQUFzQjs7SUFJckMsMkJBQUM7Q0FBQSxBQTVFRCxJQTRFQztTQXZDWSxvQkFBb0I7OztJQUUvQixxQ0FBNkI7O0lBQzdCLHNDQUErQjs7SUFDL0Isc0NBQXVEOztJQUN2RCx5Q0FBaUQ7O0lBQ2pELDBDQUFrRDs7SUFDbEQscUNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2FsbGVyeUVycm9yLCBHYWxsZXJ5U3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvZ2FsbGVyeS5tb2RlbCc7XG5pbXBvcnQgeyBHYWxsZXJ5Q29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dhbGxlcnktY29yZScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxnYWxsZXJ5LXRodW1icyAqbmdJZj1cImNvbmZpZy50aHVtYlwiXG4gICAgICAgICAgICAgICAgICAgIFtzdGF0ZV09XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiY29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgKGFjdGlvbik9XCJhY3Rpb24uZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgKHRodW1iQ2xpY2spPVwidGh1bWJDbGljay5lbWl0KCRldmVudClcIj5cbiAgICA8L2dhbGxlcnktdGh1bWJzPlxuICAgIDxkaXYgY2xhc3M9XCJnLWJveFwiPlxuICAgICAgPGdhbGxlcnktc2xpZGVyIFtzdGF0ZV09XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJjb25maWdcIlxuICAgICAgICAgICAgICAgICAgICAgIChhY3Rpb24pPVwiYWN0aW9uLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGl0ZW1DbGljayk9XCJpdGVtQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPVwiZXJyb3IuZW1pdCgkZXZlbnQpXCI+XG5cbiAgICAgICAgPGdhbGxlcnktbmF2ICpuZ0lmPVwiY29uZmlnLm5hdiAmJiBzdGF0ZS5pdGVtcy5sZW5ndGggPiAxXCJcbiAgICAgICAgICAgICAgICAgICAgIFtzdGF0ZV09XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImNvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAoYWN0aW9uKT1cImFjdGlvbi5lbWl0KCRldmVudClcIj5cbiAgICAgICAgPC9nYWxsZXJ5LW5hdj5cblxuICAgICAgPC9nYWxsZXJ5LXNsaWRlcj5cblxuICAgICAgPGdhbGxlcnktZG90cyAqbmdJZj1cImNvbmZpZy5kb3RzXCJcbiAgICAgICAgICAgICAgICAgICAgW3N0YXRlXT1cInN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJjb25maWdcIlxuICAgICAgICAgICAgICAgICAgICAoYWN0aW9uKT1cImFjdGlvbi5lbWl0KCRldmVudClcIj5cbiAgICAgIDwvZ2FsbGVyeS1kb3RzPlxuXG4gICAgICA8Z2FsbGVyeS1jb3VudGVyICpuZ0lmPVwiY29uZmlnLmNvdW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICBbc3RhdGVdPVwic3RhdGVcIj5cbiAgICAgIDwvZ2FsbGVyeS1jb3VudGVyPlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlDb3JlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBzdGF0ZTogR2FsbGVyeVN0YXRlO1xuICBASW5wdXQoKSBjb25maWc6IEdhbGxlcnlDb25maWc7XG4gIEBPdXRwdXQoKSBhY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIGl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgdGh1bWJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEdhbGxlcnlFcnJvcj4oKTtcblxuICAvKiogU2V0IHRodW1ibmFpbHMgcG9zaXRpb24gKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRodW1iUG9zaXRpb24nKSBnZXQgdGh1bWJQb3NpdGlvbigpOiAndG9wJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYm90dG9tJyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnRodW1iUG9zaXRpb247XG4gIH1cblxuICAvKiogU2V0IHNsaWRpbmcgZGlyZWN0aW9uICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5zbGlkaW5nRGlyZWN0aW9uJykgZ2V0IHNsaWRpbmdEaXJlY3Rpb24oKTogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnNsaWRpbmdEaXJlY3Rpb247XG4gIH1cblxuICAvKiogRGlzYWJsZSB0aHVtYm5haWxzIGNsaWNrcyAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZVRodW1iJykgZ2V0IGRpc2FibGVUaHVtYigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZGlzYWJsZVRodW1iO1xuICB9XG5cbiAgLyoqIFNldCBnYWxsZXJ5IGltYWdlIHNpemUgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmltYWdlU2l6ZScpIGdldCBpbWFnZVNpemUoKTogJ2NvdmVyJyB8ICdjb250YWluJyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmltYWdlU2l6ZTtcbiAgfVxuXG4gIC8qKiBTZXQgZ2FsbGVyeSBkb3RzIHBvc2l0aW9uICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5kb3RzUG9zaXRpb24nKSBnZXQgZG90c1Bvc2l0aW9uKCk6ICd0b3AnIHwgJ2JvdHRvbScge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5kb3RzUG9zaXRpb247XG4gIH1cblxuICAvKiogU2V0IGdhbGxlcnkgY291bnRlciBwb3NpdGlvbiAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuY291bnRlclBvc2l0aW9uJykgZ2V0IGNvdW50ZXJQb3NpdGlvbigpOiAndG9wJyB8ICdib3R0b20nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuY291bnRlclBvc2l0aW9uO1xuICB9XG5cbn1cbiJdfQ==