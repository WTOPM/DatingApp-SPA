/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Subject, Subscription, zip, fromEvent } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
export class LazyImage {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        this._imageLoader$ = new Subject();
        this._loaderSub$ = Subscription.EMPTY;
        this.loaded = new EventEmitter();
        this.error = new EventEmitter();
        this._loaderSub$ = this._imageLoader$.pipe(switchMap((imageSrc) => this.nativeLoader(imageSrc))).subscribe();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['src'] && changes['src'].previousValue !== changes['src'].currentValue) {
            this.loadImage(this.src);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._loaderSub$.unsubscribe();
        this._imageLoader$.complete();
    }
    /**
     * @param {?} imagePath
     * @return {?}
     */
    loadImage(imagePath) {
        this._imageLoader$.next(imagePath);
    }
    /**
     * Native image loader, does not emit progress
     * @param {?} url
     * @return {?}
     */
    nativeLoader(url) {
        /** @type {?} */
        const img = this.document.createElement('img');
        // Stop previously loading
        img.src = url;
        // Image load success
        /** @type {?} */
        const loadSuccess = fromEvent(img, 'load').pipe(tap(() => this.loaded.emit(url)));
        // Image load failed
        /** @type {?} */
        const loadError = fromEvent(img, 'error').pipe(tap(() => this.error.emit(new Error(`[lazyImage]: The image ${url} did not load`))));
        return zip(loadSuccess, loadError);
    }
}
LazyImage.decorators = [
    { type: Directive, args: [{
                selector: '[lazyImage]'
            },] }
];
/** @nocollapse */
LazyImage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
LazyImage.propDecorators = {
    src: [{ type: Input, args: ['lazyImage',] }],
    loaded: [{ type: Output }],
    error: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1pbWFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbGF6eS1pbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUF1QyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxPQUFPLEVBQWMsWUFBWSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLM0MsTUFBTSxPQUFPLFNBQVM7Ozs7SUFVcEIsWUFBc0MsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7UUFSM0Msa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ3RDLGdCQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUkvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNwQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUcxQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUN4QyxTQUFTLENBQUMsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQzdELENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQ2xGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsU0FBaUI7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBTUQsWUFBWSxDQUFDLEdBQVc7O2NBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDOUMsMEJBQTBCO1FBQzFCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOzs7Y0FFUixXQUFXLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzdDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNqQzs7O2NBRUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsMEJBQTBCLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUNwRjtRQUNELE9BQU8sR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2FBQ3hCOzs7OzRDQVdjLE1BQU0sU0FBQyxRQUFROzs7a0JBTDNCLEtBQUssU0FBQyxXQUFXO3FCQUVqQixNQUFNO29CQUNOLE1BQU07Ozs7Ozs7SUFOUCxrQ0FBOEM7Ozs7O0lBQzlDLGdDQUF5Qzs7SUFFekMsd0JBQWdDOztJQUVoQywyQkFBOEM7O0lBQzlDLDBCQUE0Qzs7Ozs7SUFFaEMsNkJBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgemlwLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbGF6eUltYWdlXSdcbn0pXG5leHBvcnQgY2xhc3MgTGF6eUltYWdlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2ltYWdlTG9hZGVyJCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfbG9hZGVyU3ViJCA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICBASW5wdXQoJ2xhenlJbWFnZScpIHNyYzogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcbiAgICB0aGlzLl9sb2FkZXJTdWIkID0gdGhpcy5faW1hZ2VMb2FkZXIkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGltYWdlU3JjOiBzdHJpbmcpID0+IHRoaXMubmF0aXZlTG9hZGVyKGltYWdlU3JjKSlcbiAgICApLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydzcmMnXSAmJiBjaGFuZ2VzWydzcmMnXS5wcmV2aW91c1ZhbHVlICE9PSBjaGFuZ2VzWydzcmMnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMubG9hZEltYWdlKHRoaXMuc3JjKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9sb2FkZXJTdWIkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5faW1hZ2VMb2FkZXIkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBsb2FkSW1hZ2UoaW1hZ2VQYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbWFnZUxvYWRlciQubmV4dChpbWFnZVBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdGl2ZSBpbWFnZSBsb2FkZXIsIGRvZXMgbm90IGVtaXQgcHJvZ3Jlc3NcbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgbmF0aXZlTG9hZGVyKHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIC8vIFN0b3AgcHJldmlvdXNseSBsb2FkaW5nXG4gICAgaW1nLnNyYyA9IHVybDtcbiAgICAvLyBJbWFnZSBsb2FkIHN1Y2Nlc3NcbiAgICBjb25zdCBsb2FkU3VjY2VzcyA9IGZyb21FdmVudChpbWcsICdsb2FkJykucGlwZShcbiAgICAgIHRhcCgoKSA9PiB0aGlzLmxvYWRlZC5lbWl0KHVybCkpXG4gICAgKTtcbiAgICAvLyBJbWFnZSBsb2FkIGZhaWxlZFxuICAgIGNvbnN0IGxvYWRFcnJvciA9IGZyb21FdmVudChpbWcsICdlcnJvcicpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4gdGhpcy5lcnJvci5lbWl0KG5ldyBFcnJvcihgW2xhenlJbWFnZV06IFRoZSBpbWFnZSAke3VybH0gZGlkIG5vdCBsb2FkYCkpKVxuICAgICk7XG4gICAgcmV0dXJuIHppcChsb2FkU3VjY2VzcywgbG9hZEVycm9yKTtcbiAgfVxuXG59XG4iXX0=