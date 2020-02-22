/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
/**
 * This directive uses tap event if HammerJS is loaded, otherwise it falls back to normal click event
 */
export class TapClick {
    /**
     * @param {?} _el
     */
    constructor(_el) {
        this._el = _el;
        this.clickListener = Subscription.EMPTY;
        this.tapClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.activateClickEvent();
    }
    /**
     * @return {?}
     */
    activateClickEvent() {
        if (typeof Hammer !== 'undefined') {
            // Use Hammer.js tap event
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.on('tap', () => {
                if (!this.tapClickDisabled) {
                    this.tapClick.emit(null);
                }
            });
        }
        else {
            // Use normal click event
            this.clickListener = fromEvent(this._el.nativeElement, 'click').pipe(filter(() => !this.tapClickDisabled), tap(() => this.tapClick.emit(null))).subscribe();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._hammer) {
            this._hammer.destroy();
        }
        this.clickListener.unsubscribe();
    }
}
TapClick.decorators = [
    { type: Directive, args: [{
                selector: '[tapClick]'
            },] }
];
/** @nocollapse */
TapClick.ctorParameters = () => [
    { type: ElementRef }
];
TapClick.propDecorators = {
    tapClickDisabled: [{ type: Input }],
    tapClick: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TapClick.prototype._hammer;
    /** @type {?} */
    TapClick.prototype.clickListener;
    /** @type {?} */
    TapClick.prototype.tapClickDisabled;
    /** @type {?} */
    TapClick.prototype.tapClick;
    /**
     * @type {?}
     * @private
     */
    TapClick.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFwLWNsaWNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90YXAtY2xpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBVTdDLE1BQU0sT0FBTyxRQUFROzs7O0lBT25CLFlBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBSm5DLGtCQUFhLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUV6QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUd4QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDakMsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCx5QkFBeUI7WUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNsRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFDcEMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3BDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFYcUQsVUFBVTs7OytCQWdCN0QsS0FBSzt1QkFDTCxNQUFNOzs7Ozs7O0lBSFAsMkJBQXFCOztJQUNyQixpQ0FBbUM7O0lBQ25DLG9DQUFtQzs7SUFDbkMsNEJBQXdDOzs7OztJQUU1Qix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZGVjbGFyZSBjb25zdCBIYW1tZXI6IGFueTtcblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSB1c2VzIHRhcCBldmVudCBpZiBIYW1tZXJKUyBpcyBsb2FkZWQsIG90aGVyd2lzZSBpdCBmYWxscyBiYWNrIHRvIG5vcm1hbCBjbGljayBldmVudFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGFwQ2xpY2tdJ1xufSlcbmV4cG9ydCBjbGFzcyBUYXBDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9oYW1tZXI6IGFueTtcbiAgY2xpY2tMaXN0ZW5lciA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgQElucHV0KCkgdGFwQ2xpY2tEaXNhYmxlZDogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHRhcENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2YXRlQ2xpY2tFdmVudCgpO1xuICB9XG5cbiAgYWN0aXZhdGVDbGlja0V2ZW50KCkge1xuICAgIGlmICh0eXBlb2YgSGFtbWVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVXNlIEhhbW1lci5qcyB0YXAgZXZlbnRcbiAgICAgIHRoaXMuX2hhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLl9oYW1tZXIub24oJ3RhcCcsICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcENsaWNrRGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLnRhcENsaWNrLmVtaXQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2Ugbm9ybWFsIGNsaWNrIGV2ZW50XG4gICAgICB0aGlzLmNsaWNrTGlzdGVuZXIgPSBmcm9tRXZlbnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NsaWNrJykucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+ICF0aGlzLnRhcENsaWNrRGlzYWJsZWQpLFxuICAgICAgICB0YXAoKCkgPT4gdGhpcy50YXBDbGljay5lbWl0KG51bGwpKVxuICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5faGFtbWVyKSB7XG4gICAgICB0aGlzLl9oYW1tZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmNsaWNrTGlzdGVuZXIudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19