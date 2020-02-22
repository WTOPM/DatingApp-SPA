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
var TapClick = /** @class */ (function () {
    function TapClick(_el) {
        this._el = _el;
        this.clickListener = Subscription.EMPTY;
        this.tapClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TapClick.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.activateClickEvent();
    };
    /**
     * @return {?}
     */
    TapClick.prototype.activateClickEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof Hammer !== 'undefined') {
            // Use Hammer.js tap event
            this._hammer = new Hammer(this._el.nativeElement);
            this._hammer.on('tap', function () {
                if (!_this.tapClickDisabled) {
                    _this.tapClick.emit(null);
                }
            });
        }
        else {
            // Use normal click event
            this.clickListener = fromEvent(this._el.nativeElement, 'click').pipe(filter(function () { return !_this.tapClickDisabled; }), tap(function () { return _this.tapClick.emit(null); })).subscribe();
        }
    };
    /**
     * @return {?}
     */
    TapClick.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._hammer) {
            this._hammer.destroy();
        }
        this.clickListener.unsubscribe();
    };
    TapClick.decorators = [
        { type: Directive, args: [{
                    selector: '[tapClick]'
                },] }
    ];
    /** @nocollapse */
    TapClick.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    TapClick.propDecorators = {
        tapClickDisabled: [{ type: Input }],
        tapClick: [{ type: Output }]
    };
    return TapClick;
}());
export { TapClick };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFwLWNsaWNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy90YXAtY2xpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTzdDO0lBVUUsa0JBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBSm5DLGtCQUFhLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUV6QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUd4QyxDQUFDOzs7O0lBRUQsMkJBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELHFDQUFrQjs7O0lBQWxCO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDakMsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzFCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMxQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLHlCQUF5QjtZQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ2xFLE1BQU0sQ0FBQyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQXRCLENBQXNCLENBQUMsRUFDcEMsR0FBRyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUNwQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7O0lBRUQsOEJBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQVhxRCxVQUFVOzs7bUNBZ0I3RCxLQUFLOzJCQUNMLE1BQU07O0lBaUNULGVBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXRDWSxRQUFROzs7Ozs7SUFFbkIsMkJBQXFCOztJQUNyQixpQ0FBbUM7O0lBQ25DLG9DQUFtQzs7SUFDbkMsNEJBQXdDOzs7OztJQUU1Qix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZGVjbGFyZSBjb25zdCBIYW1tZXI6IGFueTtcblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSB1c2VzIHRhcCBldmVudCBpZiBIYW1tZXJKUyBpcyBsb2FkZWQsIG90aGVyd2lzZSBpdCBmYWxscyBiYWNrIHRvIG5vcm1hbCBjbGljayBldmVudFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGFwQ2xpY2tdJ1xufSlcbmV4cG9ydCBjbGFzcyBUYXBDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9oYW1tZXI6IGFueTtcbiAgY2xpY2tMaXN0ZW5lciA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgQElucHV0KCkgdGFwQ2xpY2tEaXNhYmxlZDogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHRhcENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2YXRlQ2xpY2tFdmVudCgpO1xuICB9XG5cbiAgYWN0aXZhdGVDbGlja0V2ZW50KCkge1xuICAgIGlmICh0eXBlb2YgSGFtbWVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVXNlIEhhbW1lci5qcyB0YXAgZXZlbnRcbiAgICAgIHRoaXMuX2hhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLl9oYW1tZXIub24oJ3RhcCcsICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcENsaWNrRGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLnRhcENsaWNrLmVtaXQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2Ugbm9ybWFsIGNsaWNrIGV2ZW50XG4gICAgICB0aGlzLmNsaWNrTGlzdGVuZXIgPSBmcm9tRXZlbnQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NsaWNrJykucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+ICF0aGlzLnRhcENsaWNrRGlzYWJsZWQpLFxuICAgICAgICB0YXAoKCkgPT4gdGhpcy50YXBDbGljay5lbWl0KG51bGwpKVxuICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5faGFtbWVyKSB7XG4gICAgICB0aGlzLl9oYW1tZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLmNsaWNrTGlzdGVuZXIudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19