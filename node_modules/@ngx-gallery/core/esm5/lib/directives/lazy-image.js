/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Subject, Subscription, zip, fromEvent } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
var LazyImage = /** @class */ (function () {
    function LazyImage(document) {
        var _this = this;
        this.document = document;
        this._imageLoader$ = new Subject();
        this._loaderSub$ = Subscription.EMPTY;
        this.loaded = new EventEmitter();
        this.error = new EventEmitter();
        this._loaderSub$ = this._imageLoader$.pipe(switchMap(function (imageSrc) { return _this.nativeLoader(imageSrc); })).subscribe();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    LazyImage.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['src'] && changes['src'].previousValue !== changes['src'].currentValue) {
            this.loadImage(this.src);
        }
    };
    /**
     * @return {?}
     */
    LazyImage.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._loaderSub$.unsubscribe();
        this._imageLoader$.complete();
    };
    /**
     * @param {?} imagePath
     * @return {?}
     */
    LazyImage.prototype.loadImage = /**
     * @param {?} imagePath
     * @return {?}
     */
    function (imagePath) {
        this._imageLoader$.next(imagePath);
    };
    /**
     * Native image loader, does not emit progress
     * @param url
     */
    /**
     * Native image loader, does not emit progress
     * @param {?} url
     * @return {?}
     */
    LazyImage.prototype.nativeLoader = /**
     * Native image loader, does not emit progress
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        /** @type {?} */
        var img = this.document.createElement('img');
        // Stop previously loading
        img.src = url;
        // Image load success
        /** @type {?} */
        var loadSuccess = fromEvent(img, 'load').pipe(tap(function () { return _this.loaded.emit(url); }));
        // Image load failed
        /** @type {?} */
        var loadError = fromEvent(img, 'error').pipe(tap(function () { return _this.error.emit(new Error("[lazyImage]: The image " + url + " did not load")); }));
        return zip(loadSuccess, loadError);
    };
    LazyImage.decorators = [
        { type: Directive, args: [{
                    selector: '[lazyImage]'
                },] }
    ];
    /** @nocollapse */
    LazyImage.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    LazyImage.propDecorators = {
        src: [{ type: Input, args: ['lazyImage',] }],
        loaded: [{ type: Output }],
        error: [{ type: Output }]
    };
    return LazyImage;
}());
export { LazyImage };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LazyImage.prototype._imageLoader$;
    /**
     * @type {?}
     * @private
     */
    LazyImage.prototype._loaderSub$;
    /** @type {?} */
    LazyImage.prototype.src;
    /** @type {?} */
    LazyImage.prototype.loaded;
    /** @type {?} */
    LazyImage.prototype.error;
    /**
     * @type {?}
     * @private
     */
    LazyImage.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1pbWFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbGF6eS1pbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUF1QyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxPQUFPLEVBQWMsWUFBWSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0M7SUFhRSxtQkFBc0MsUUFBYTtRQUFuRCxpQkFJQztRQUpxQyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBUjNDLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFJL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDcEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFHMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLFVBQUMsUUFBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FDN0QsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELCtCQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLEVBQUU7WUFDbEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7O0lBRUQsK0JBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsNkJBQVM7Ozs7SUFBVCxVQUFVLFNBQWlCO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGdDQUFZOzs7OztJQUFaLFVBQWEsR0FBVztRQUF4QixpQkFhQzs7WUFaTyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzlDLDBCQUEwQjtRQUMxQixHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7O1lBRVIsV0FBVyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUM3QyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQ2pDOzs7WUFFSyxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzVDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsNEJBQTBCLEdBQUcsa0JBQWUsQ0FBQyxDQUFDLEVBQXhFLENBQXdFLENBQUMsQ0FDcEY7UUFDRCxPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0JBbkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Ozs7Z0RBV2MsTUFBTSxTQUFDLFFBQVE7OztzQkFMM0IsS0FBSyxTQUFDLFdBQVc7eUJBRWpCLE1BQU07d0JBQ04sTUFBTTs7SUEwQ1QsZ0JBQUM7Q0FBQSxBQXJERCxJQXFEQztTQWxEWSxTQUFTOzs7Ozs7SUFFcEIsa0NBQThDOzs7OztJQUM5QyxnQ0FBeUM7O0lBRXpDLHdCQUFnQzs7SUFFaEMsMkJBQThDOztJQUM5QywwQkFBNEM7Ozs7O0lBRWhDLDZCQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIEV2ZW50RW1pdHRlciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIHppcCwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xhenlJbWFnZV0nXG59KVxuZXhwb3J0IGNsYXNzIExhenlJbWFnZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9pbWFnZUxvYWRlciQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgX2xvYWRlclN1YiQgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgQElucHV0KCdsYXp5SW1hZ2UnKSBzcmM6IHN0cmluZztcblxuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3I+KCk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7XG4gICAgdGhpcy5fbG9hZGVyU3ViJCA9IHRoaXMuX2ltYWdlTG9hZGVyJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChpbWFnZVNyYzogc3RyaW5nKSA9PiB0aGlzLm5hdGl2ZUxvYWRlcihpbWFnZVNyYykpXG4gICAgKS5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1snc3JjJ10gJiYgY2hhbmdlc1snc3JjJ10ucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlc1snc3JjJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmxvYWRJbWFnZSh0aGlzLnNyYyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fbG9hZGVyU3ViJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2ltYWdlTG9hZGVyJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbG9hZEltYWdlKGltYWdlUGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy5faW1hZ2VMb2FkZXIkLm5leHQoaW1hZ2VQYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXRpdmUgaW1hZ2UgbG9hZGVyLCBkb2VzIG5vdCBlbWl0IHByb2dyZXNzXG4gICAqIEBwYXJhbSB1cmxcbiAgICovXG4gIG5hdGl2ZUxvYWRlcih1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgaW1nID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAvLyBTdG9wIHByZXZpb3VzbHkgbG9hZGluZ1xuICAgIGltZy5zcmMgPSB1cmw7XG4gICAgLy8gSW1hZ2UgbG9hZCBzdWNjZXNzXG4gICAgY29uc3QgbG9hZFN1Y2Nlc3MgPSBmcm9tRXZlbnQoaW1nLCAnbG9hZCcpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4gdGhpcy5sb2FkZWQuZW1pdCh1cmwpKVxuICAgICk7XG4gICAgLy8gSW1hZ2UgbG9hZCBmYWlsZWRcbiAgICBjb25zdCBsb2FkRXJyb3IgPSBmcm9tRXZlbnQoaW1nLCAnZXJyb3InKS5waXBlKFxuICAgICAgdGFwKCgpID0+IHRoaXMuZXJyb3IuZW1pdChuZXcgRXJyb3IoYFtsYXp5SW1hZ2VdOiBUaGUgaW1hZ2UgJHt1cmx9IGRpZCBub3QgbG9hZGApKSlcbiAgICApO1xuICAgIHJldHVybiB6aXAobG9hZFN1Y2Nlc3MsIGxvYWRFcnJvcik7XG4gIH1cblxufVxuIl19