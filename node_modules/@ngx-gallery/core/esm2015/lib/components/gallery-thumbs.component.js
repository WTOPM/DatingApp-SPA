/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, HostBinding, NgZone, ElementRef, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThumbnailsPosition, ThumbnailsMode } from '../models/constants';
export class GalleryThumbsComponent {
    /**
     * @param {?} _el
     * @param {?} _zone
     */
    constructor(_el, _zone) {
        this._el = _el;
        this._zone = _zone;
        /**
         * Sliding worker
         */
        this._slidingWorker$ = new BehaviorSubject({ value: 0, active: false });
        /**
         * Current slider position in free sliding mode
         */
        this._freeModeCurrentOffset = 0;
        /**
         * Stream that emits when the active item should change
         */
        this.action = new EventEmitter();
        /**
         * Stream that emits when thumb is clicked
         */
        this.thumbClick = new EventEmitter();
        /**
         * Stream that emits when an error occurs
         */
        this.error = new EventEmitter();
        // Activate sliding worker
        this.sliderState$ = this._slidingWorker$.pipe(map((state) => ({
            style: this.getSliderStyles(state),
            active: state.active
        })));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // Refresh the slider
        this.updateSlider({ value: 0, active: false });
        this._freeModeCurrentOffset = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.config.gestures && !this.config.disableThumb && typeof Hammer !== 'undefined') {
            /** @type {?} */
            let direction;
            switch (this.config.thumbPosition) {
                case ThumbnailsPosition.Right:
                case ThumbnailsPosition.Left:
                    direction = Hammer.DIRECTION_VERTICAL;
                    break;
                case ThumbnailsPosition.Top:
                case ThumbnailsPosition.Bottom:
                    direction = Hammer.DIRECTION_HORIZONTAL;
                    break;
            }
            // Activate gestures
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.get('pan').set({ direction });
            this._zone.runOutsideAngular(() => {
                // Move the slider
                switch (this.config.thumbMode) {
                    case ThumbnailsMode.Strict:
                        this._hammer.on('pan', (e) => this.strictMode(e));
                        break;
                    case ThumbnailsMode.Free:
                        this._hammer.on('pan', (e) => this.freeMode(e));
                }
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._hammer) {
            this._hammer.destroy();
        }
    }
    /**
     * Sliding strict mode
     * @private
     * @param {?} e
     * @return {?}
     */
    strictMode(e) {
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Right:
            case ThumbnailsPosition.Left:
                this.updateSlider({ value: e.deltaY, active: true });
                if (e.isFinal) {
                    this.updateSlider({ value: 0, active: false });
                    this.verticalPan(e);
                }
                break;
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.updateSlider({ value: e.deltaX, active: true });
                if (e.isFinal) {
                    this.updateSlider({ value: 0, active: false });
                    this.horizontalPan(e);
                }
        }
    }
    /**
     * Sliding free mode
     * @private
     * @param {?} e
     * @return {?}
     */
    freeMode(e) {
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Right:
            case ThumbnailsPosition.Left:
                this.updateSlider({ value: this._freeModeCurrentOffset + e.deltaY, active: true });
                if (e.isFinal) {
                    if (this.minFreeScrollExceeded(e.deltaY, this.config.thumbWidth, this.config.thumbHeight)) {
                        this._freeModeCurrentOffset = -(this.state.items.length - 1 - this.state.currIndex) * this.config.thumbHeight;
                    }
                    else if (this.maxFreeScrollExceeded(e.deltaY, this.config.thumbHeight, this.config.thumbWidth)) {
                        this._freeModeCurrentOffset = this.state.currIndex * this.config.thumbHeight;
                    }
                    else {
                        this._freeModeCurrentOffset += e.deltaY;
                    }
                    this.updateSlider({ value: this._freeModeCurrentOffset, active: false });
                }
                break;
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.updateSlider({ value: this._freeModeCurrentOffset + e.deltaX, active: true });
                if (e.isFinal) {
                    if (this.minFreeScrollExceeded(e.deltaX, this.config.thumbHeight, this.config.thumbWidth)) {
                        this._freeModeCurrentOffset = -(this.state.items.length - 1 - this.state.currIndex) * this.config.thumbWidth;
                    }
                    else if (this.maxFreeScrollExceeded(e.deltaX, this.config.thumbWidth, this.config.thumbHeight)) {
                        this._freeModeCurrentOffset = this.state.currIndex * this.config.thumbWidth;
                    }
                    else {
                        this._freeModeCurrentOffset += e.deltaX;
                    }
                    this.updateSlider({ value: this._freeModeCurrentOffset, active: false });
                }
        }
    }
    /**
     * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
     * @private
     * @param {?} delta
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    minFreeScrollExceeded(delta, width, height) {
        return -(this._freeModeCurrentOffset + delta - width / 2) > (this.state.items.length - this.state.currIndex) * height;
    }
    /**
     * Check if the maximum free scroll is exceeded (used in Top, Right directions)
     * @private
     * @param {?} delta
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    maxFreeScrollExceeded(delta, width, height) {
        return this._freeModeCurrentOffset + delta > (this.state.currIndex * width) + (height / 2);
    }
    /**
     * Convert sliding state to styles
     * @private
     * @param {?} state
     * @return {?}
     */
    getSliderStyles(state) {
        /** @type {?} */
        let value;
        switch (this.config.thumbPosition) {
            case ThumbnailsPosition.Top:
            case ThumbnailsPosition.Bottom:
                this.width = '100%';
                this.height = this.config.thumbHeight + 'px';
                value = -(this.state.currIndex * this.config.thumbWidth) - (this.config.thumbWidth / 2 - state.value);
                return {
                    transform: `translate3d(${value}px, 0, 0)`,
                    width: this.state.items.length * this.config.thumbWidth + 'px',
                    height: '100%'
                };
            case ThumbnailsPosition.Left:
            case ThumbnailsPosition.Right:
                this.width = this.config.thumbWidth + 'px';
                this.height = '100%';
                value = -(this.state.currIndex * this.config.thumbHeight) - (this.config.thumbHeight / 2 - state.value);
                return {
                    transform: `translate3d(0, ${value}px, 0)`,
                    width: '100%',
                    height: this.state.items.length * this.config.thumbHeight + 'px'
                };
        }
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    verticalPan(e) {
        if (!(e.direction & Hammer.DIRECTION_UP && e.offsetDirection & Hammer.DIRECTION_VERTICAL)) {
            return;
        }
        if (e.velocityY > 0.3) {
            this.prev();
        }
        else if (e.velocityY < -0.3) {
            this.next();
        }
        else {
            if (e.deltaY / 2 <= -this.config.thumbHeight * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaY / 2 >= this.config.thumbHeight * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    horizontalPan(e) {
        if (!(e.direction & Hammer.DIRECTION_HORIZONTAL && e.offsetDirection & Hammer.DIRECTION_HORIZONTAL)) {
            return;
        }
        if (e.velocityX > 0.3) {
            this.prev();
        }
        else if (e.velocityX < -0.3) {
            this.next();
        }
        else {
            if (e.deltaX / 2 <= -this.config.thumbWidth * this.state.items.length / this.config.panSensitivity) {
                this.next();
            }
            else if (e.deltaX / 2 >= this.config.thumbWidth * this.state.items.length / this.config.panSensitivity) {
                this.prev();
            }
            else {
                this.action.emit(this.state.currIndex);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    next() {
        this.action.emit('next');
    }
    /**
     * @private
     * @return {?}
     */
    prev() {
        this.action.emit('prev');
    }
    /**
     * @private
     * @param {?} state
     * @return {?}
     */
    updateSlider(state) {
        /** @type {?} */
        const newState = Object.assign({}, this._slidingWorker$.value, state);
        this._slidingWorker$.next(newState);
    }
}
GalleryThumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-thumbs',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div *ngIf="sliderState$ | async; let sliderState"
         class="g-thumbs-container">
      <div class="g-slider"
           [class.g-no-transition]="sliderState.active"
           [ngStyle]="sliderState.style">

        <gallery-thumb *ngFor="let item of state.items;let i = index"
                       [type]="item.type"
                       [config]="config"
                       [data]="item.data"
                       [currIndex]="state.currIndex"
                       [index]="i"
                       [tapClickDisabled]="config.disableThumb"
                       (tapClick)="thumbClick.emit(i)"
                       (error)="error.emit({itemIndex: i, error: $event})"></gallery-thumb>
      </div>
    </div>
  `
            }] }
];
/** @nocollapse */
GalleryThumbsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
GalleryThumbsComponent.propDecorators = {
    state: [{ type: Input }],
    config: [{ type: Input }],
    action: [{ type: Output }],
    thumbClick: [{ type: Output }],
    error: [{ type: Output }],
    height: [{ type: HostBinding, args: ['style.height',] }],
    width: [{ type: HostBinding, args: ['style.width',] }]
};
if (false) {
    /**
     * Sliding worker
     * @type {?}
     * @private
     */
    GalleryThumbsComponent.prototype._slidingWorker$;
    /**
     * HammerJS instance
     * @type {?}
     * @private
     */
    GalleryThumbsComponent.prototype._hammer;
    /**
     * Current slider position in free sliding mode
     * @type {?}
     * @private
     */
    GalleryThumbsComponent.prototype._freeModeCurrentOffset;
    /**
     * Stream that emits sliding state
     * @type {?}
     */
    GalleryThumbsComponent.prototype.sliderState$;
    /**
     * Gallery state
     * @type {?}
     */
    GalleryThumbsComponent.prototype.state;
    /**
     * Gallery config
     * @type {?}
     */
    GalleryThumbsComponent.prototype.config;
    /**
     * Stream that emits when the active item should change
     * @type {?}
     */
    GalleryThumbsComponent.prototype.action;
    /**
     * Stream that emits when thumb is clicked
     * @type {?}
     */
    GalleryThumbsComponent.prototype.thumbClick;
    /**
     * Stream that emits when an error occurs
     * @type {?}
     */
    GalleryThumbsComponent.prototype.error;
    /**
     * Host height
     * @type {?}
     */
    GalleryThumbsComponent.prototype.height;
    /**
     * Host width
     * @type {?}
     */
    GalleryThumbsComponent.prototype.width;
    /**
     * @type {?}
     * @private
     */
    GalleryThumbsComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    GalleryThumbsComponent.prototype._zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS10aHVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9nYWxsZXJ5LXRodW1icy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFJTixXQUFXLEVBQ1gsTUFBTSxFQUNOLFVBQVUsRUFDVixZQUFZLEVBQ1osdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3JDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQTRCekUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFtQ2pDLFlBQW9CLEdBQWUsRUFBVSxLQUFhO1FBQXRDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFROzs7O1FBaEN6QyxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFjLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQzs7OztRQU12RiwyQkFBc0IsR0FBRyxDQUFDLENBQUM7Ozs7UUFZekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDOzs7O1FBRzdDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDOzs7O1FBR3hDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQVVqRCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3pFLEtBQUssRUFBRSxJ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LENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBdFFGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7YUFDRjs7OztZQW5DQyxVQUFVO1lBRFYsTUFBTTs7O29CQW9ETCxLQUFLO3FCQUdMLEtBQUs7cUJBR0wsTUFBTTt5QkFHTixNQUFNO29CQUdOLE1BQU07cUJBR04sV0FBVyxTQUFDLGNBQWM7b0JBRzFCLFdBQVcsU0FBQyxhQUFhOzs7Ozs7OztJQTlCMUIsaURBQStGOzs7Ozs7SUFHL0YseUNBQXFCOzs7Ozs7SUFHckIsd0RBQW1DOzs7OztJQUduQyw4Q0FBc0M7Ozs7O0lBR3RDLHVDQUE2Qjs7Ozs7SUFHN0Isd0NBQStCOzs7OztJQUcvQix3Q0FBdUQ7Ozs7O0lBR3ZELDRDQUFrRDs7Ozs7SUFHbEQsdUNBQW1EOzs7OztJQUduRCx3Q0FBNEM7Ozs7O0lBRzVDLHVDQUEwQzs7Ozs7SUFFOUIscUNBQXVCOzs7OztJQUFFLHVDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSG9zdEJpbmRpbmcsXG4gIE5nWm9uZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcubW9kZWwnO1xuaW1wb3J0IHsgR2FsbGVyeVN0YXRlLCBHYWxsZXJ5RXJyb3IgfSBmcm9tICcuLi9tb2RlbHMvZ2FsbGVyeS5tb2RlbCc7XG5pbXBvcnQgeyBUaHVtYm5haWxzUG9zaXRpb24sIFRodW1ibmFpbHNNb2RlIH0gZnJvbSAnLi4vbW9kZWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBTbGlkZXJTdGF0ZSwgV29ya2VyU3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvc2xpZGVyLm1vZGVsJztcblxuZGVjbGFyZSBjb25zdCBIYW1tZXI6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS10aHVtYnMnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwic2xpZGVyU3RhdGUkIHwgYXN5bmM7IGxldCBzbGlkZXJTdGF0ZVwiXG4gICAgICAgICBjbGFzcz1cImctdGh1bWJzLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImctc2xpZGVyXCJcbiAgICAgICAgICAgW2NsYXNzLmctbm8tdHJhbnNpdGlvbl09XCJzbGlkZXJTdGF0ZS5hY3RpdmVcIlxuICAgICAgICAgICBbbmdTdHlsZV09XCJzbGlkZXJTdGF0ZS5zdHlsZVwiPlxuXG4gICAgICAgIDxnYWxsZXJ5LXRodW1iICpuZ0Zvcj1cImxldCBpdGVtIG9mIHN0YXRlLml0ZW1zO2xldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJpdGVtLnR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImNvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIml0ZW0uZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtjdXJySW5kZXhdPVwic3RhdGUuY3VyckluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2luZGV4XT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICBbdGFwQ2xpY2tEaXNhYmxlZF09XCJjb25maWcuZGlzYWJsZVRodW1iXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKHRhcENsaWNrKT1cInRodW1iQ2xpY2suZW1pdChpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJlcnJvci5lbWl0KHtpdGVtSW5kZXg6IGksIGVycm9yOiAkZXZlbnR9KVwiPjwvZ2FsbGVyeS10aHVtYj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlUaHVtYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAvKiogU2xpZGluZyB3b3JrZXIgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfc2xpZGluZ1dvcmtlciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFdvcmtlclN0YXRlPih7dmFsdWU6IDAsIGFjdGl2ZTogZmFsc2V9KTtcblxuICAvKiogSGFtbWVySlMgaW5zdGFuY2UgKi9cbiAgcHJpdmF0ZSBfaGFtbWVyOiBhbnk7XG5cbiAgLyoqIEN1cnJlbnQgc2xpZGVyIHBvc2l0aW9uIGluIGZyZWUgc2xpZGluZyBtb2RlICovXG4gIHByaXZhdGUgX2ZyZWVNb2RlQ3VycmVudE9mZnNldCA9IDA7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHNsaWRpbmcgc3RhdGUgKi9cbiAgc2xpZGVyU3RhdGUkOiBPYnNlcnZhYmxlPFNsaWRlclN0YXRlPjtcblxuICAvKiogR2FsbGVyeSBzdGF0ZSAqL1xuICBASW5wdXQoKSBzdGF0ZTogR2FsbGVyeVN0YXRlO1xuXG4gIC8qKiBHYWxsZXJ5IGNvbmZpZyAqL1xuICBASW5wdXQoKSBjb25maWc6IEdhbGxlcnlDb25maWc7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gdGhlIGFjdGl2ZSBpdGVtIHNob3VsZCBjaGFuZ2UgKi9cbiAgQE91dHB1dCgpIGFjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyPigpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHRodW1iIGlzIGNsaWNrZWQgKi9cbiAgQE91dHB1dCgpIHRodW1iQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBhbiBlcnJvciBvY2N1cnMgKi9cbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxHYWxsZXJ5RXJyb3I+KCk7XG5cbiAgLyoqIEhvc3QgaGVpZ2h0ICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmc7XG5cbiAgLyoqIEhvc3Qgd2lkdGggKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpIHdpZHRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3pvbmU6IE5nWm9uZSkge1xuXG4gICAgLy8gQWN0aXZhdGUgc2xpZGluZyB3b3JrZXJcbiAgICB0aGlzLnNsaWRlclN0YXRlJCA9IHRoaXMuX3NsaWRpbmdXb3JrZXIkLnBpcGUobWFwKChzdGF0ZTogV29ya2VyU3RhdGUpID0+ICh7XG4gICAgICBzdHlsZTogdGhpcy5nZXRTbGlkZXJTdHlsZXMoc3RhdGUpLFxuICAgICAgYWN0aXZlOiBzdGF0ZS5hY3RpdmVcbiAgICB9KSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgLy8gUmVmcmVzaCB0aGUgc2xpZGVyXG4gICAgdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiAwLCBhY3RpdmU6IGZhbHNlfSk7XG4gICAgdGhpcy5fZnJlZU1vZGVDdXJyZW50T2Zmc2V0ID0gMDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5nZXN0dXJlcyAmJiAhdGhpcy5jb25maWcuZGlzYWJsZVRodW1iICYmIHR5cGVvZiBIYW1tZXIgIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgIGxldCBkaXJlY3Rpb246IG51bWJlcjtcblxuICAgICAgc3dpdGNoICh0aGlzLmNvbmZpZy50aHVtYlBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgVGh1bWJuYWlsc1Bvc2l0aW9uLlJpZ2h0OlxuICAgICAgICBjYXNlIFRodW1ibmFpbHNQb3NpdGlvbi5MZWZ0OlxuICAgICAgICAgIGRpcmVjdGlvbiA9IEhhbW1lci5ESVJFQ1RJT05fVkVSVElDQUw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVGh1bWJuYWlsc1Bvc2l0aW9uLlRvcDpcbiAgICAgICAgY2FzZSBUaHVtYm5haWxzUG9zaXRpb24uQm90dG9tOlxuICAgICAgICAgIGRpcmVjdGlvbiA9IEhhbW1lci5ESVJFQ1RJT05fSE9SSVpPTlRBTDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gQWN0aXZhdGUgZ2VzdHVyZXNcbiAgICAgIHRoaXMuX2hhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLl9oYW1tZXIuZ2V0KCdwYW4nKS5zZXQoe2RpcmVjdGlvbn0pO1xuXG4gICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgLy8gTW92ZSB0aGUgc2xpZGVyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jb25maWcudGh1bWJNb2RlKSB7XG4gICAgICAgICAgY2FzZSBUaHVtYm5haWxzTW9kZS5TdHJpY3Q6XG4gICAgICAgICAgICB0aGlzLl9oYW1tZXIub24oJ3BhbicsIChlKSA9PiB0aGlzLnN0cmljdE1vZGUoZSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBUaHVtYm5haWxzTW9kZS5GcmVlOlxuICAgICAgICAgICAgdGhpcy5faGFtbWVyLm9uKCdwYW4nLCAoZSkgPT4gdGhpcy5mcmVlTW9kZShlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9oYW1tZXIpIHtcbiAgICAgIHRoaXMuX2hhbW1lci5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNsaWRpbmcgc3RyaWN0IG1vZGVcbiAgICovXG4gIHByaXZhdGUgc3RyaWN0TW9kZShlKSB7XG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZy50aHVtYlBvc2l0aW9uKSB7XG4gICAgICBjYXNlIFRodW1ibmFpbHNQb3NpdGlvbi5SaWdodDpcbiAgICAgIGNhc2UgVGh1bWJuYWlsc1Bvc2l0aW9uLkxlZnQ6XG4gICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKHt2YWx1ZTogZS5kZWx0YVksIGFjdGl2ZTogdHJ1ZX0pO1xuICAgICAgICBpZiAoZS5pc0ZpbmFsKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiAwLCBhY3RpdmU6IGZhbHNlfSk7XG4gICAgICAgICAgdGhpcy52ZXJ0aWNhbFBhbihlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVGh1bWJuYWlsc1Bvc2l0aW9uLlRvcDpcbiAgICAgIGNhc2UgVGh1bWJuYWlsc1Bvc2l0aW9uLkJvdHRvbTpcbiAgICAgICAgdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiBlLmRlbHRhWCwgYWN0aXZlOiB0cnVlfSk7XG4gICAgICAgIGlmIChlLmlzRmluYWwpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcih7dmFsdWU6IDAsIGFjdGl2ZTogZmFsc2V9KTtcbiAgICAgICAgICB0aGlzLmhvcml6b250YWxQYW4oZSk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2xpZGluZyBmcmVlIG1vZGVcbiAgICovXG4gIHByaXZhdGUgZnJlZU1vZGUoZSkge1xuICAgIHN3aXRjaCAodGhpcy5jb25maWcudGh1bWJQb3NpdGlvbikge1xuICAgICAgY2FzZSBUaHVtYm5haWxzUG9zaXRpb24uUmlnaHQ6XG4gICAgICBjYXNlIFRodW1ibmFpbHNQb3NpdGlvbi5MZWZ0OlxuICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcih7dmFsdWU6IHRoaXMuX2ZyZWVNb2RlQ3VycmVudE9mZnNldCArIGUuZGVsdGFZLCBhY3RpdmU6IHRydWV9KTtcbiAgICAgICAgaWYgKGUuaXNGaW5hbCkge1xuICAgICAgICAgIGlmICh0aGlzLm1pbkZyZWVTY3JvbGxFeGNlZWRlZChlLmRlbHRhWSwgdGhpcy5jb25maWcudGh1bWJXaWR0aCwgdGhpcy5jb25maWcudGh1bWJIZWlnaHQpKSB7XG4gICAgICAgICAgICB0aGlzLl9mcmVlTW9kZUN1cnJlbnRPZmZzZXQgPSAtKHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIC0gMSAtIHRoaXMuc3RhdGUuY3VyckluZGV4KSAqIHRoaXMuY29uZmlnLnRodW1iSGVpZ2h0O1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXhGcmVlU2Nyb2xsRXhjZWVkZWQoZS5kZWx0YVksIHRoaXMuY29uZmlnLnRodW1iSGVpZ2h0LCB0aGlzLmNvbmZpZy50aHVtYldpZHRoKSkge1xuICAgICAgICAgICAgdGhpcy5fZnJlZU1vZGVDdXJyZW50T2Zmc2V0ID0gdGhpcy5zdGF0ZS5jdXJySW5kZXggKiB0aGlzLmNvbmZpZy50aHVtYkhlaWdodDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZnJlZU1vZGVDdXJyZW50T2Zmc2V0ICs9IGUuZGVsdGFZO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcih7dmFsdWU6IHRoaXMuX2ZyZWVNb2RlQ3VycmVudE9mZnNldCwgYWN0aXZlOiBmYWxzZX0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUaHVtYm5haWxzUG9zaXRpb24uVG9wOlxuICAgICAgY2FzZSBUaHVtYm5haWxzUG9zaXRpb24uQm90dG9tOlxuICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcih7dmFsdWU6IHRoaXMuX2ZyZWVNb2RlQ3VycmVudE9mZnNldCArIGUuZGVsdGFYLCBhY3RpdmU6IHRydWV9KTtcbiAgICAgICAgaWYgKGUuaXNGaW5hbCkge1xuICAgICAgICAgIGlmICh0aGlzLm1pbkZyZWVTY3JvbGxFeGNlZWRlZChlLmRlbHRhWCwgdGhpcy5jb25maWcudGh1bWJIZWlnaHQsIHRoaXMuY29uZmlnLnRodW1iV2lkdGgpKSB7XG4gICAgICAgICAgICB0aGlzLl9mcmVlTW9kZUN1cnJlbnRPZmZzZXQgPSAtKHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIC0gMSAtIHRoaXMuc3RhdGUuY3VyckluZGV4KSAqIHRoaXMuY29uZmlnLnRodW1iV2lkdGg7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1heEZyZWVTY3JvbGxFeGNlZWRlZChlLmRlbHRhWCwgdGhpcy5jb25maWcudGh1bWJXaWR0aCwgdGhpcy5jb25maWcudGh1bWJIZWlnaHQpKSB7XG4gICAgICAgICAgICB0aGlzLl9mcmVlTW9kZUN1cnJlbnRPZmZzZXQgPSB0aGlzLnN0YXRlLmN1cnJJbmRleCAqIHRoaXMuY29uZmlnLnRodW1iV2lkdGg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ZyZWVNb2RlQ3VycmVudE9mZnNldCArPSBlLmRlbHRhWDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy51cGRhdGVTbGlkZXIoe3ZhbHVlOiB0aGlzLl9mcmVlTW9kZUN1cnJlbnRPZmZzZXQsIGFjdGl2ZTogZmFsc2V9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgbWluaW11bSBmcmVlIHNjcm9sbCBpcyBleGNlZWRlZCAodXNlZCBpbiBCb3R0b20sIExlZnQgZGlyZWN0aW9ucylcbiAgICovXG4gIHByaXZhdGUgbWluRnJlZVNjcm9sbEV4Y2VlZGVkKGRlbHRhOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIC0odGhpcy5fZnJlZU1vZGVDdXJyZW50T2Zmc2V0ICsgZGVsdGEgLSB3aWR0aCAvIDIpID4gKHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIC0gdGhpcy5zdGF0ZS5jdXJySW5kZXgpICogaGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBtYXhpbXVtIGZyZWUgc2Nyb2xsIGlzIGV4Y2VlZGVkICh1c2VkIGluIFRvcCwgUmlnaHQgZGlyZWN0aW9ucylcbiAgICovXG4gIHByaXZhdGUgbWF4RnJlZVNjcm9sbEV4Y2VlZGVkKGRlbHRhOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZyZWVNb2RlQ3VycmVudE9mZnNldCArIGRlbHRhID4gKHRoaXMuc3RhdGUuY3VyckluZGV4ICogd2lkdGgpICsgKGhlaWdodCAvIDIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgc2xpZGluZyBzdGF0ZSB0byBzdHlsZXNcbiAgICovXG4gIHByaXZhdGUgZ2V0U2xpZGVyU3R5bGVzKHN0YXRlOiBXb3JrZXJTdGF0ZSk6IGFueSB7XG4gICAgbGV0IHZhbHVlOiBudW1iZXI7XG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZy50aHVtYlBvc2l0aW9uKSB7XG4gICAgICBjYXNlIFRodW1ibmFpbHNQb3NpdGlvbi5Ub3A6XG4gICAgICBjYXNlIFRodW1ibmFpbHNQb3NpdGlvbi5Cb3R0b206XG4gICAgICAgIHRoaXMud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jb25maWcudGh1bWJIZWlnaHQgKyAncHgnO1xuICAgICAgICB2YWx1ZSA9IC0odGhpcy5zdGF0ZS5jdXJySW5kZXggKiB0aGlzLmNvbmZpZy50aHVtYldpZHRoKSAtICh0aGlzLmNvbmZpZy50aHVtYldpZHRoIC8gMiAtIHN0YXRlLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke3ZhbHVlfXB4LCAwLCAwKWAsXG4gICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoICogdGhpcy5jb25maWcudGh1bWJXaWR0aCArICdweCcsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgVGh1bWJuYWlsc1Bvc2l0aW9uLkxlZnQ6XG4gICAgICBjYXNlIFRodW1ibmFpbHNQb3NpdGlvbi5SaWdodDpcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY29uZmlnLnRodW1iV2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgdmFsdWUgPSAtKHRoaXMuc3RhdGUuY3VyckluZGV4ICogdGhpcy5jb25maWcudGh1bWJIZWlnaHQpIC0gKHRoaXMuY29uZmlnLnRodW1iSGVpZ2h0IC8gMiAtIHN0YXRlLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAke3ZhbHVlfXB4LCAwKWAsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoICogdGhpcy5jb25maWcudGh1bWJIZWlnaHQgKyAncHgnXG4gICAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB2ZXJ0aWNhbFBhbihlOiBhbnkpIHtcbiAgICBpZiAoIShlLmRpcmVjdGlvbiAmIEhhbW1lci5ESVJFQ1RJT05fVVAgJiYgZS5vZmZzZXREaXJlY3Rpb24gJiBIYW1tZXIuRElSRUNUSU9OX1ZFUlRJQ0FMKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS52ZWxvY2l0eVkgPiAwLjMpIHtcbiAgICAgIHRoaXMucHJldigpO1xuICAgIH0gZWxzZSBpZiAoZS52ZWxvY2l0eVkgPCAtMC4zKSB7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGUuZGVsdGFZIC8gMiA8PSAtdGhpcy5jb25maWcudGh1bWJIZWlnaHQgKiB0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAvIHRoaXMuY29uZmlnLnBhblNlbnNpdGl2aXR5KSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChlLmRlbHRhWSAvIDIgPj0gdGhpcy5jb25maWcudGh1bWJIZWlnaHQgKiB0aGlzLnN0YXRlLml0ZW1zLmxlbmd0aCAvIHRoaXMuY29uZmlnLnBhblNlbnNpdGl2aXR5KSB7XG4gICAgICAgIHRoaXMucHJldigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uZW1pdCh0aGlzLnN0YXRlLmN1cnJJbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBob3Jpem9udGFsUGFuKGU6IGFueSkge1xuICAgIGlmICghKGUuZGlyZWN0aW9uICYgSGFtbWVyLkRJUkVDVElPTl9IT1JJWk9OVEFMICYmIGUub2Zmc2V0RGlyZWN0aW9uICYgSGFtbWVyLkRJUkVDVElPTl9IT1JJWk9OVEFMKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS52ZWxvY2l0eVggPiAwLjMpIHtcbiAgICAgIHRoaXMucHJldigpO1xuICAgIH0gZWxzZSBpZiAoZS52ZWxvY2l0eVggPCAtMC4zKSB7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGUuZGVsdGFYIC8gMiA8PSAtdGhpcy5jb25maWcudGh1bWJXaWR0aCAqIHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIC8gdGhpcy5jb25maWcucGFuU2Vuc2l0aXZpdHkpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKGUuZGVsdGFYIC8gMiA+PSB0aGlzLmNvbmZpZy50aHVtYldpZHRoICogdGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGggLyB0aGlzLmNvbmZpZy5wYW5TZW5zaXRpdml0eSkge1xuICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLmVtaXQodGhpcy5zdGF0ZS5jdXJySW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbmV4dCgpIHtcbiAgICB0aGlzLmFjdGlvbi5lbWl0KCduZXh0Jyk7XG4gIH1cblxuICBwcml2YXRlIHByZXYoKSB7XG4gICAgdGhpcy5hY3Rpb24uZW1pdCgncHJldicpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTbGlkZXIoc3RhdGU6IFdvcmtlclN0YXRlKSB7XG4gICAgY29uc3QgbmV3U3RhdGU6IFdvcmtlclN0YXRlID0gey4uLnRoaXMuX3NsaWRpbmdXb3JrZXIkLnZhbHVlLCAuLi5zdGF0ZX07XG4gICAgdGhpcy5fc2xpZGluZ1dvcmtlciQubmV4dChuZXdTdGF0ZSk7XG4gIH1cbn1cbiJdfQ==