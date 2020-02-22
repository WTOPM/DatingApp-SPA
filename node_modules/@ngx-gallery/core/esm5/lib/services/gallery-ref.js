/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject, Subject, of, EMPTY } from 'rxjs';
import { delay, filter, switchMap, tap } from 'rxjs/operators';
import { defaultState } from '../utils/gallery.default';
import { GalleryAction } from '../models/constants';
import { IframeItem, ImageItem, VideoItem, YoutubeItem } from '../components/templates/items.model';
/** @type {?} */
var filterActions = function (actions) {
    return filter(function (state) { return actions.indexOf(state.action) > -1; });
};
var ɵ0 = filterActions;
var GalleryRef = /** @class */ (function () {
    function GalleryRef(config, deleteInstance) {
        this.deleteInstance = deleteInstance;
        /**
         * Stream that emits on item click
         */
        this.itemClick = new Subject();
        /**
         * Stream that emits on thumbnail click
         */
        this.thumbClick = new Subject();
        /**
         * Stream that emits on an error occurs
         */
        this.error = new Subject();
        this._state = new BehaviorSubject(defaultState);
        this._config = new BehaviorSubject(config);
        this.state = this._state.asObservable();
        this.config = this._config.asObservable();
    }
    Object.defineProperty(GalleryRef.prototype, "initialized", {
        /** Stream that emits when gallery is initialized/reset */
        get: /**
         * Stream that emits when gallery is initialized/reset
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.INITIALIZED]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "itemsChanged", {
        /** Stream that emits when items is changed (items loaded, item added, item removed) */
        get: /**
         * Stream that emits when items is changed (items loaded, item added, item removed)
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.ITEMS_CHANGED]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "indexChanged", {
        /** Stream that emits when current item is changed */
        get: /**
         * Stream that emits when current item is changed
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.INDEX_CHANGED]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "playingChanged", {
        /** Stream that emits when the player should start or stop */
        get: /**
         * Stream that emits when the player should start or stop
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryRef.prototype, "playerActions", {
        /** Stream that emits when the player should start or stop */
        get: /**
         * Stream that emits when the player should start or stop
         * @private
         * @return {?}
         */
        function () {
            return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP, GalleryAction.INDEX_CHANGED]));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Activate player actions listener
     */
    /**
     * Activate player actions listener
     * @return {?}
     */
    GalleryRef.prototype.activatePlayer = /**
     * Activate player actions listener
     * @return {?}
     */
    function () {
        var _this = this;
        return this.playerActions.pipe(switchMap(function (e) {
            return e.isPlaying ? of({}).pipe(delay(_this._config.value.playerInterval), tap(function () { return _this.next(); })) : EMPTY;
        }));
    };
    /**
     * Set gallery state
     * @param state
     */
    /**
     * Set gallery state
     * @private
     * @param {?} state
     * @return {?}
     */
    GalleryRef.prototype.setState = /**
     * Set gallery state
     * @private
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this._state.next(tslib_1.__assign({}, this._state.value, state));
    };
    /**
     * Set gallery config
     * @param config
     */
    /**
     * Set gallery config
     * @param {?} config
     * @return {?}
     */
    GalleryRef.prototype.setConfig = /**
     * Set gallery config
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this._config.next(tslib_1.__assign({}, this._config.value, config));
    };
    /** Add gallery item
     * @param item - Gallery item object
     * @param active - Set the new item as current slide
     */
    /**
     * Add gallery item
     * @param {?} item - Gallery item object
     * @param {?=} active - Set the new item as current slide
     * @return {?}
     */
    GalleryRef.prototype.add = /**
     * Add gallery item
     * @param {?} item - Gallery item object
     * @param {?=} active - Set the new item as current slide
     * @return {?}
     */
    function (item, active) {
        /** @type {?} */
        var items = tslib_1.__spread(this._state.value.items, [item]);
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items: items,
            hasNext: items.length > 1,
            currIndex: active ? items.length - 1 : this._state.value.currIndex
        });
    };
    /**
     * Add image item
     * @param data
     * @param active
     */
    /**
     * Add image item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addImage = /**
     * Add image item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new ImageItem(data), active);
    };
    /**
     * Add video item
     * @param data
     * @param active
     */
    /**
     * Add video item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addVideo = /**
     * Add video item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new VideoItem(data), active);
    };
    /**
     * Add iframe item
     * @param data
     * @param active
     */
    /**
     * Add iframe item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addIframe = /**
     * Add iframe item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new IframeItem(data), active);
    };
    /**
     * Add youtube item
     * @param data
     * @param active
     */
    /**
     * Add youtube item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    GalleryRef.prototype.addYoutube = /**
     * Add youtube item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    function (data, active) {
        this.add(new YoutubeItem(data), active);
    };
    /** Remove gallery item
     * @param i - Item index
     */
    /**
     * Remove gallery item
     * @param {?} i - Item index
     * @return {?}
     */
    GalleryRef.prototype.remove = /**
     * Remove gallery item
     * @param {?} i - Item index
     * @return {?}
     */
    function (i) {
        /** @type {?} */
        var items = tslib_1.__spread(this._state.value.items.slice(0, i), this._state.value.items.slice(i + 1, this._state.value.items.length));
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items: items,
            hasNext: items.length > 1,
            hasPrev: i > 0
        });
    };
    /**
     * Load items and reset the state
     * @param items - Gallery images data
     */
    /**
     * Load items and reset the state
     * @param {?} items - Gallery images data
     * @return {?}
     */
    GalleryRef.prototype.load = /**
     * Load items and reset the state
     * @param {?} items - Gallery images data
     * @return {?}
     */
    function (items) {
        if (items) {
            this.setState({
                action: GalleryAction.ITEMS_CHANGED,
                items: items,
                hasNext: items.length > 1,
                hasPrev: false
            });
        }
    };
    /**
     * Set active item
     * @param i - Active Index
     */
    /**
     * Set active item
     * @param {?} i - Active Index
     * @return {?}
     */
    GalleryRef.prototype.set = /**
     * Set active item
     * @param {?} i - Active Index
     * @return {?}
     */
    function (i) {
        if (i !== this._state.value.currIndex) {
            this.setState({
                action: GalleryAction.INDEX_CHANGED,
                currIndex: i,
                hasNext: i < this._state.value.items.length - 1,
                hasPrev: i > 0
            });
        }
    };
    /**
     * Next item
     */
    /**
     * Next item
     * @return {?}
     */
    GalleryRef.prototype.next = /**
     * Next item
     * @return {?}
     */
    function () {
        if (this._state.value.hasNext) {
            this.set(this._state.value.currIndex + 1);
        }
        else if (this._config.value.loop) {
            this.set(0);
        }
    };
    /**
     * Prev item
     */
    /**
     * Prev item
     * @return {?}
     */
    GalleryRef.prototype.prev = /**
     * Prev item
     * @return {?}
     */
    function () {
        if (this._state.value.hasPrev) {
            this.set(this._state.value.currIndex - 1);
        }
        else if (this._config.value.loop) {
            this.set(this._state.value.items.length - 1);
        }
    };
    /**
     * Start gallery player
     * @param interval
     */
    /**
     * Start gallery player
     * @param {?=} interval
     * @return {?}
     */
    GalleryRef.prototype.play = /**
     * Start gallery player
     * @param {?=} interval
     * @return {?}
     */
    function (interval) {
        if (interval) {
            this.setConfig({ playerInterval: interval });
        }
        this.setState({ action: GalleryAction.PLAY, isPlaying: true });
    };
    /**
     * Stop gallery player
     */
    /**
     * Stop gallery player
     * @return {?}
     */
    GalleryRef.prototype.stop = /**
     * Stop gallery player
     * @return {?}
     */
    function () {
        this.setState({ action: GalleryAction.STOP, isPlaying: false });
    };
    /**
     * Reset gallery to initial state
     */
    /**
     * Reset gallery to initial state
     * @return {?}
     */
    GalleryRef.prototype.reset = /**
     * Reset gallery to initial state
     * @return {?}
     */
    function () {
        this.setState(defaultState);
    };
    /**
     * Destroy gallery
     */
    /**
     * Destroy gallery
     * @return {?}
     */
    GalleryRef.prototype.destroy = /**
     * Destroy gallery
     * @return {?}
     */
    function () {
        this._state.complete();
        this._config.complete();
        this.itemClick.complete();
        this.thumbClick.complete();
        this.deleteInstance();
    };
    return GalleryRef;
}());
export { GalleryRef };
if (false) {
    /**
     * Stream that emits gallery state
     * @type {?}
     * @private
     */
    GalleryRef.prototype._state;
    /**
     * Stream that emits gallery config
     * @type {?}
     * @private
     */
    GalleryRef.prototype._config;
    /**
     * Stream that emits on item click
     * @type {?}
     */
    GalleryRef.prototype.itemClick;
    /**
     * Stream that emits on thumbnail click
     * @type {?}
     */
    GalleryRef.prototype.thumbClick;
    /**
     * Stream that emits on an error occurs
     * @type {?}
     */
    GalleryRef.prototype.error;
    /**
     * Stream that emits gallery state
     * @type {?}
     */
    GalleryRef.prototype.state;
    /**
     * Stream that emits gallery config
     * @type {?}
     */
    GalleryRef.prototype.config;
    /**
     * @type {?}
     * @private
     */
    GalleryRef.prototype.deleteInstance;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZWYuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9nYWxsZXJ5LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDdEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUd4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztJQUU5RixhQUFhLEdBQUcsVUFBQyxPQUFpQjtJQUN0QyxPQUFPLE1BQU0sQ0FBQyxVQUFDLEtBQW1CLElBQUssT0FBQSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO0FBQzdFLENBQUM7O0FBRUQ7SUFrREUsb0JBQVksTUFBcUIsRUFBVSxjQUF3QjtRQUF4QixtQkFBYyxHQUFkLGNBQWMsQ0FBVTs7OztRQXpDMUQsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7Ozs7UUFHbEMsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7Ozs7UUFHbkMsVUFBSyxHQUFHLElBQUksT0FBTyxFQUFnQixDQUFDO1FBb0MzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBZSxDQUFlLFlBQVksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQWdCLE1BQU0sQ0FBQyxDQUFD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QztJQUNoRSxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMEJBQUs7Ozs7SUFBTDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDRCQUFPOzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUgsaUJBQUM7QUFBRCxDQUFDLEFBbFBELElBa1BDOzs7Ozs7OztJQS9PQyw0QkFBdUQ7Ozs7OztJQUd2RCw2QkFBeUQ7Ozs7O0lBR3pELCtCQUEyQzs7Ozs7SUFHM0MsZ0NBQTRDOzs7OztJQUc1QywyQkFBNkM7Ozs7O0lBSzdDLDJCQUF5Qzs7Ozs7SUFHekMsNEJBQTJDOzs7OztJQTJCUixvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QsIE9ic2VydmFibGUsIG9mLCBFTVBUWX0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSwgZmlsdGVyLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlZmF1bHRTdGF0ZSB9IGZyb20gJy4uL3V0aWxzL2dhbGxlcnkuZGVmYXVsdCc7XG5pbXBvcnQgeyBHYWxsZXJ5RXJyb3IsIEdhbGxlcnlJdGVtLCBHYWxsZXJ5U3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvZ2FsbGVyeS5tb2RlbCc7XG5pbXBvcnQgeyBHYWxsZXJ5Q29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZy5tb2RlbCc7XG5pbXBvcnQgeyBHYWxsZXJ5QWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBJZnJhbWVJdGVtLCBJbWFnZUl0ZW0sIFZpZGVvSXRlbSwgWW91dHViZUl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL3RlbXBsYXRlcy9pdGVtcy5tb2RlbCc7XG5cbmNvbnN0IGZpbHRlckFjdGlvbnMgPSAoYWN0aW9uczogc3RyaW5nW10pID0+IHtcbiAgcmV0dXJuIGZpbHRlcigoc3RhdGU6IEdhbGxlcnlTdGF0ZSkgPT4gYWN0aW9ucy5pbmRleE9mKHN0YXRlLmFjdGlvbikgPiAtMSk7XG59O1xuXG5leHBvcnQgY2xhc3MgR2FsbGVyeVJlZiB7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIGdhbGxlcnkgc3RhdGUgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhdGU6IEJlaGF2aW9yU3ViamVjdDxHYWxsZXJ5U3RhdGU+O1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBnYWxsZXJ5IGNvbmZpZyAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9jb25maWc6IEJlaGF2aW9yU3ViamVjdDxHYWxsZXJ5Q29uZmlnPjtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgb24gaXRlbSBjbGljayAqL1xuICByZWFkb25seSBpdGVtQ2xpY2sgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIG9uIHRodW1ibmFpbCBjbGljayAqL1xuICByZWFkb25seSB0aHVtYkNsaWNrID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBvbiBhbiBlcnJvciBvY2N1cnMgKi9cbiAgcmVhZG9ubHkgZXJyb3IgPSBuZXcgU3ViamVjdDxHYWxsZXJ5RXJyb3I+KCk7XG5cbiAgLyoqIEdhbGxlcnkgRXZlbnRzICovXG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIGdhbGxlcnkgc3RhdGUgKi9cbiAgcmVhZG9ubHkgc3RhdGU6IE9ic2VydmFibGU8R2FsbGVyeVN0YXRlPjtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgZ2FsbGVyeSBjb25maWcgKi9cbiAgcmVhZG9ubHkgY29uZmlnOiBPYnNlcnZhYmxlPEdhbGxlcnlDb25maWc+O1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGdhbGxlcnkgaXMgaW5pdGlhbGl6ZWQvcmVzZXQgKi9cbiAgZ2V0IGluaXRpYWxpemVkKCk6IE9ic2VydmFibGU8R2FsbGVyeVN0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucGlwZShmaWx0ZXJBY3Rpb25zKFtHYWxsZXJ5QWN0aW9uLklOSVRJQUxJWkVEXSkpO1xuICB9XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gaXRlbXMgaXMgY2hhbmdlZCAoaXRlbXMgbG9hZGVkLCBpdGVtIGFkZGVkLCBpdGVtIHJlbW92ZWQpICovXG4gIGdldCBpdGVtc0NoYW5nZWQoKTogT2JzZXJ2YWJsZTxHYWxsZXJ5U3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5waXBlKGZpbHRlckFjdGlvbnMoW0dhbGxlcnlBY3Rpb24uSVRFTVNfQ0hBTkdFRF0pKTtcbiAgfVxuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGN1cnJlbnQgaXRlbSBpcyBjaGFuZ2VkICovXG4gIGdldCBpbmRleENoYW5nZWQoKTogT2JzZXJ2YWJsZTxHYWxsZXJ5U3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5waXBlKGZpbHRlckFjdGlvbnMoW0dhbGxlcnlBY3Rpb24uSU5ERVhfQ0hBTkdFRF0pKTtcbiAgfVxuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHRoZSBwbGF5ZXIgc2hvdWxkIHN0YXJ0IG9yIHN0b3AgKi9cbiAgZ2V0IHBsYXlpbmdDaGFuZ2VkKCk6IE9ic2VydmFibGU8R2FsbGVyeVN0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucGlwZShmaWx0ZXJBY3Rpb25zKFtHYWxsZXJ5QWN0aW9uLlBMQVksIEdhbGxlcnlBY3Rpb24uU1RPUF0pKTtcbiAgfVxuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHRoZSBwbGF5ZXIgc2hvdWxkIHN0YXJ0IG9yIHN0b3AgKi9cbiAgcHJpdmF0ZSBnZXQgcGxheWVyQWN0aW9ucygpOiBPYnNlcnZhYmxlPEdhbGxlcnlTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnBpcGUoZmlsdGVyQWN0aW9ucyhbR2FsbGVyeUFjdGlvbi5QTEFZLCBHYWxsZXJ5QWN0aW9uLlNUT1AsIEdhbGxlcnlBY3Rpb24uSU5ERVhfQ0hBTkdFRF0pKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogR2FsbGVyeUNvbmZpZywgcHJpdmF0ZSBkZWxldGVJbnN0YW5jZTogRnVuY3Rpb24pIHtcbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R2FsbGVyeVN0YXRlPihkZWZhdWx0U3RhdGUpO1xuICAgIHRoaXMuX2NvbmZpZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R2FsbGVyeUNvbmZpZz4oY29uZmlnKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5fc3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLl9jb25maWcuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGUgcGxheWVyIGFjdGlvbnMgbGlzdGVuZXJcbiAgICovXG4gIGFjdGl2YXRlUGxheWVyKCk6IE9ic2VydmFibGU8R2FsbGVyeVN0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyQWN0aW9ucy5waXBlKFxuICAgICAgc3dpdGNoTWFwKChlOiBHYWxsZXJ5U3RhdGUpID0+XG4gICAgICAgIGUuaXNQbGF5aW5nID8gb2Yoe30pLnBpcGUoXG4gICAgICAgICAgZGVsYXkodGhpcy5fY29uZmlnLnZhbHVlLnBsYXllckludGVydmFsKSxcbiAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5uZXh0KCkpXG4gICAgICAgICkgOiBFTVBUWVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGdhbGxlcnkgc3RhdGVcbiAgICogQHBhcmFtIHN0YXRlXG4gICAqL1xuICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBHYWxsZXJ5U3RhdGUpIHtcbiAgICB0aGlzLl9zdGF0ZS5uZXh0KHsuLi50aGlzLl9zdGF0ZS52YWx1ZSwgLi4uc3RhdGV9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZ2FsbGVyeSBjb25maWdcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKi9cbiAgc2V0Q29uZmlnKGNvbmZpZzogR2FsbGVyeUNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZy5uZXh0KHsuLi50aGlzLl9jb25maWcudmFsdWUsIC4uLmNvbmZpZ30pO1xuICB9XG5cbiAgLyoqIEFkZCBnYWxsZXJ5IGl0ZW1cbiAgICogQHBhcmFtIGl0ZW0gLSBHYWxsZXJ5IGl0ZW0gb2JqZWN0XG4gICAqIEBwYXJhbSBhY3RpdmUgLSBTZXQgdGhlIG5ldyBpdGVtIGFzIGN1cnJlbnQgc2xpZGVcbiAgICovXG4gIGFkZChpdGVtOiBHYWxsZXJ5SXRlbSwgYWN0aXZlPzogYm9vbGVhbikge1xuXG4gICAgY29uc3QgaXRlbXMgPSBbLi4udGhpcy5fc3RhdGUudmFsdWUuaXRlbXMsIGl0ZW1dO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aW9uOiBHYWxsZXJ5QWN0aW9uLklURU1TX0NIQU5HRUQsXG4gICAgICBpdGVtczogaXRlbXMsXG4gICAgICBoYXNOZXh0OiBpdGVtcy5sZW5ndGggPiAxLFxuICAgICAgY3VyckluZGV4OiBhY3RpdmUgPyBpdGVtcy5sZW5ndGggLSAxIDogdGhpcy5fc3RhdGUudmFsdWUuY3VyckluZGV4XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGltYWdlIGl0ZW1cbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHBhcmFtIGFjdGl2ZVxuICAgKi9cbiAgYWRkSW1hZ2UoZGF0YTogYW55LCBhY3RpdmU/OiBib29sZWFuKSB7XG4gICAgdGhpcy5hZGQobmV3IEltYWdlSXRlbShkYXRhKSwgYWN0aXZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdmlkZW8gaXRlbVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gYWN0aXZlXG4gICAqL1xuICBhZGRWaWRlbyhkYXRhOiBhbnksIGFjdGl2ZT86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFkZChuZXcgVmlkZW9JdGVtKGRhdGEpLCBhY3RpdmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBpZnJhbWUgaXRlbVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gYWN0aXZlXG4gICAqL1xuICBhZGRJZnJhbWUoZGF0YTogYW55LCBhY3RpdmU/OiBib29sZWFuKSB7XG4gICAgdGhpcy5hZGQobmV3IElmcmFtZUl0ZW0oZGF0YSksIGFjdGl2ZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHlvdXR1YmUgaXRlbVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gYWN0aXZlXG4gICAqL1xuICBhZGRZb3V0dWJlKGRhdGE6IGFueSwgYWN0aXZlPzogYm9vbGVhbikge1xuICAgIHRoaXMuYWRkKG5ldyBZb3V0dWJlSXRlbShkYXRhKSwgYWN0aXZlKTtcbiAgfVxuXG4gIC8qKiBSZW1vdmUgZ2FsbGVyeSBpdGVtXG4gICAqIEBwYXJhbSBpIC0gSXRlbSBpbmRleFxuICAgKi9cbiAgcmVtb3ZlKGk6IG51bWJlcikge1xuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgLi4udGhpcy5fc3RhdGUudmFsdWUuaXRlbXMuc2xpY2UoMCwgaSksXG4gICAgICAuLi50aGlzLl9zdGF0ZS52YWx1ZS5pdGVtcy5zbGljZShpICsgMSwgdGhpcy5fc3RhdGUudmFsdWUuaXRlbXMubGVuZ3RoKVxuICAgIF07XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3Rpb246IEdhbGxlcnlBY3Rpb24uSVRFTVNfQ0hBTkdFRCxcbiAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgIGhhc05leHQ6IGl0ZW1zLmxlbmd0aCA+IDEsXG4gICAgICBoYXNQcmV2OiBpID4gMFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgaXRlbXMgYW5kIHJlc2V0IHRoZSBzdGF0ZVxuICAgKiBAcGFyYW0gaXRlbXMgLSBHYWxsZXJ5IGltYWdlcyBkYXRhXG4gICAqL1xuICBsb2FkKGl0ZW1zOiBHYWxsZXJ5SXRlbVtdKSB7XG4gICAgaWYgKGl0ZW1zKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aW9uOiBHYWxsZXJ5QWN0aW9uLklURU1TX0NIQU5HRUQsXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgICAgaGFzTmV4dDogaXRlbXMubGVuZ3RoID4gMSxcbiAgICAgICAgaGFzUHJldjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYWN0aXZlIGl0ZW1cbiAgICogQHBhcmFtIGkgLSBBY3RpdmUgSW5kZXhcbiAgICovXG4gIHNldChpOiBudW1iZXIpIHtcbiAgICBpZiAoaSAhPT0gdGhpcy5fc3RhdGUudmFsdWUuY3VyckluZGV4KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aW9uOiBHYWxsZXJ5QWN0aW9uLklOREVYX0NIQU5HRUQsXG4gICAgICAgIGN1cnJJbmRleDogaSxcbiAgICAgICAgaGFzTmV4dDogaSA8IHRoaXMuX3N0YXRlLnZhbHVlLml0ZW1zLmxlbmd0aCAtIDEsXG4gICAgICAgIGhhc1ByZXY6IGkgPiAwXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTmV4dCBpdGVtXG4gICAqL1xuICBuZXh0KCkge1xuICAgIGlmICh0aGlzLl9zdGF0ZS52YWx1ZS5oYXNOZXh0KSB7XG4gICAgICB0aGlzLnNldCh0aGlzLl9zdGF0ZS52YWx1ZS5jdXJySW5kZXggKyAxKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy52YWx1ZS5sb29wKSB7XG4gICAgICB0aGlzLnNldCgwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJldiBpdGVtXG4gICAqL1xuICBwcmV2KCkge1xuICAgIGlmICh0aGlzLl9zdGF0ZS52YWx1ZS5oYXNQcmV2KSB7XG4gICAgICB0aGlzLnNldCh0aGlzLl9zdGF0ZS52YWx1ZS5jdXJySW5kZXggLSAxKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy52YWx1ZS5sb29wKSB7XG4gICAgICB0aGlzLnNldCh0aGlzLl9zdGF0ZS52YWx1ZS5pdGVtcy5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgZ2FsbGVyeSBwbGF5ZXJcbiAgICogQHBhcmFtIGludGVydmFsXG4gICAqL1xuICBwbGF5KGludGVydmFsPzogbnVtYmVyKSB7XG4gICAgaWYgKGludGVydmFsKSB7XG4gICAgICB0aGlzLnNldENvbmZpZyh7cGxheWVySW50ZXJ2YWw6IGludGVydmFsfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGlvbjogR2FsbGVyeUFjdGlvbi5QTEFZLCBpc1BsYXlpbmc6IHRydWV9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGdhbGxlcnkgcGxheWVyXG4gICAqL1xuICBzdG9wKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGlvbjogR2FsbGVyeUFjdGlvbi5TVE9QLCBpc1BsYXlpbmc6IGZhbHNlfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgZ2FsbGVyeSB0byBpbml0aWFsIHN0YXRlXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKGRlZmF1bHRTdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSBnYWxsZXJ5XG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuX3N0YXRlLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fY29uZmlnLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5pdGVtQ2xpY2suY29tcGxldGUoKTtcbiAgICB0aGlzLnRodW1iQ2xpY2suY29tcGxldGUoKTtcbiAgICB0aGlzLmRlbGV0ZUluc3RhbmNlKCk7XG4gIH1cblxufVxuIl19