/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject, Subject, of, EMPTY } from 'rxjs';
import { delay, filter, switchMap, tap } from 'rxjs/operators';
import { defaultState } from '../utils/gallery.default';
import { GalleryAction } from '../models/constants';
import { IframeItem, ImageItem, VideoItem, YoutubeItem } from '../components/templates/items.model';
/** @type {?} */
const filterActions = (actions) => {
    return filter((state) => actions.indexOf(state.action) > -1);
};
const ɵ0 = filterActions;
export class GalleryRef {
    /**
     * @param {?} config
     * @param {?} deleteInstance
     */
    constructor(config, deleteInstance) {
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
    /**
     * Stream that emits when gallery is initialized/reset
     * @return {?}
     */
    get initialized() {
        return this.state.pipe(filterActions([GalleryAction.INITIALIZED]));
    }
    /**
     * Stream that emits when items is changed (items loaded, item added, item removed)
     * @return {?}
     */
    get itemsChanged() {
        return this.state.pipe(filterActions([GalleryAction.ITEMS_CHANGED]));
    }
    /**
     * Stream that emits when current item is changed
     * @return {?}
     */
    get indexChanged() {
        return this.state.pipe(filterActions([GalleryAction.INDEX_CHANGED]));
    }
    /**
     * Stream that emits when the player should start or stop
     * @return {?}
     */
    get playingChanged() {
        return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP]));
    }
    /**
     * Stream that emits when the player should start or stop
     * @private
     * @return {?}
     */
    get playerActions() {
        return this.state.pipe(filterActions([GalleryAction.PLAY, GalleryAction.STOP, GalleryAction.INDEX_CHANGED]));
    }
    /**
     * Activate player actions listener
     * @return {?}
     */
    activatePlayer() {
        return this.playerActions.pipe(switchMap((e) => e.isPlaying ? of({}).pipe(delay(this._config.value.playerInterval), tap(() => this.next())) : EMPTY));
    }
    /**
     * Set gallery state
     * @private
     * @param {?} state
     * @return {?}
     */
    setState(state) {
        this._state.next(Object.assign({}, this._state.value, state));
    }
    /**
     * Set gallery config
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        this._config.next(Object.assign({}, this._config.value, config));
    }
    /**
     * Add gallery item
     * @param {?} item - Gallery item object
     * @param {?=} active - Set the new item as current slide
     * @return {?}
     */
    add(item, active) {
        /** @type {?} */
        const items = [...this._state.value.items, item];
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items: items,
            hasNext: items.length > 1,
            currIndex: active ? items.length - 1 : this._state.value.currIndex
        });
    }
    /**
     * Add image item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    addImage(data, active) {
        this.add(new ImageItem(data), active);
    }
    /**
     * Add video item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    addVideo(data, active) {
        this.add(new VideoItem(data), active);
    }
    /**
     * Add iframe item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    addIframe(data, active) {
        this.add(new IframeItem(data), active);
    }
    /**
     * Add youtube item
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    addYoutube(data, active) {
        this.add(new YoutubeItem(data), active);
    }
    /**
     * Remove gallery item
     * @param {?} i - Item index
     * @return {?}
     */
    remove(i) {
        /** @type {?} */
        const items = [
            ...this._state.value.items.slice(0, i),
            ...this._state.value.items.slice(i + 1, this._state.value.items.length)
        ];
        this.setState({
            action: GalleryAction.ITEMS_CHANGED,
            items: items,
            hasNext: items.length > 1,
            hasPrev: i > 0
        });
    }
    /**
     * Load items and reset the state
     * @param {?} items - Gallery images data
     * @return {?}
     */
    load(items) {
        if (items) {
            this.setState({
                action: GalleryAction.ITEMS_CHANGED,
                items: items,
                hasNext: items.length > 1,
                hasPrev: false
            });
        }
    }
    /**
     * Set active item
     * @param {?} i - Active Index
     * @return {?}
     */
    set(i) {
        if (i !== this._state.value.currIndex) {
            this.setState({
                action: GalleryAction.INDEX_CHANGED,
                currIndex: i,
                hasNext: i < this._state.value.items.length - 1,
                hasPrev: i > 0
            });
        }
    }
    /**
     * Next item
     * @return {?}
     */
    next() {
        if (this._state.value.hasNext) {
            this.set(this._state.value.currIndex + 1);
        }
        else if (this._config.value.loop) {
            this.set(0);
        }
    }
    /**
     * Prev item
     * @return {?}
     */
    prev() {
        if (this._state.value.hasPrev) {
            this.set(this._state.value.currIndex - 1);
        }
        else if (this._config.value.loop) {
            this.set(this._state.value.items.length - 1);
        }
    }
    /**
     * Start gallery player
     * @param {?=} interval
     * @return {?}
     */
    play(interval) {
        if (interval) {
            this.setConfig({ playerInterval: interval });
        }
        this.setState({ action: GalleryAction.PLAY, isPlaying: true });
    }
    /**
     * Stop gallery player
     * @return {?}
     */
    stop() {
        this.setState({ action: GalleryAction.STOP, isPlaying: false });
    }
    /**
     * Reset gallery to initial state
     * @return {?}
     */
    reset() {
        this.setState(defaultState);
    }
    /**
     * Destroy gallery
     * @return {?}
     */
    destroy() {
        this._state.complete();
        this._config.complete();
        this.itemClick.complete();
        this.thumbClick.complete();
        this.deleteInstance();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1yZWYuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9nYWxsZXJ5LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQWMsRUFBRSxFQUFFLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7O01BRTlGLGFBQWEsR0FBRyxDQUFDLE9BQWlCLEVBQUUsRUFBRTtJQUMxQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0UsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sVUFBVTs7Ozs7SUFrRHJCLFlBQVksTUFBcUIsRUFBVSxjQUF3QjtRQUF4QixtQkFBYyxHQUFkLGNBQWMsQ0FBVTs7OztRQXpDMUQsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7Ozs7UUFHbEMsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7Ozs7UUFHbkMsVUFBSyxHQUFHLElBQUksT0FBTyxFQUFnQixDQUFDO1FBb0MzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBZSxDQUFlLFlBQVksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFl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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QsIE9ic2VydmFibGUsIG9mLCBFTVBUWX0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSwgZmlsdGVyLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlZmF1bHRTdGF0ZSB9IGZyb20gJy4uL3V0aWxzL2dhbGxlcnkuZGVmYXVsdCc7XG5pbXBvcnQgeyBHYWxsZXJ5RXJyb3IsIEdhbGxlcnlJdGVtLCBHYWxsZXJ5U3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvZ2FsbGVyeS5tb2RlbCc7XG5pbXBvcnQgeyBHYWxsZXJ5Q29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZy5tb2RlbCc7XG5pbXBvcnQgeyBHYWxsZXJ5QWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBJZnJhbWVJdGVtLCBJbWFnZUl0ZW0sIFZpZGVvSXRlbSwgWW91dHViZUl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL3RlbXBsYXRlcy9pdGVtcy5tb2RlbCc7XG5cbmNvbnN0IGZpbHRlckFjdGlvbnMgPSAoYWN0aW9uczogc3RyaW5nW10pID0+IHtcbiAgcmV0dXJuIGZpbHRlcigoc3RhdGU6IEdhbGxlcnlTdGF0ZSkgPT4gYWN0aW9ucy5pbmRleE9mKHN0YXRlLmFjdGlvbikgPiAtMSk7XG59O1xuXG5leHBvcnQgY2xhc3MgR2FsbGVyeVJlZiB7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIGdhbGxlcnkgc3RhdGUgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhdGU6IEJlaGF2aW9yU3ViamVjdDxHYWxsZXJ5U3RhdGU+O1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBnYWxsZXJ5IGNvbmZpZyAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9jb25maWc6IEJlaGF2aW9yU3ViamVjdDxHYWxsZXJ5Q29uZmlnPjtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgb24gaXRlbSBjbGljayAqL1xuICByZWFkb25seSBpdGVtQ2xpY2sgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIG9uIHRodW1ibmFpbCBjbGljayAqL1xuICByZWFkb25seSB0aHVtYkNsaWNrID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyBvbiBhbiBlcnJvciBvY2N1cnMgKi9cbiAgcmVhZG9ubHkgZXJyb3IgPSBuZXcgU3ViamVjdDxHYWxsZXJ5RXJyb3I+KCk7XG5cbiAgLyoqIEdhbGxlcnkgRXZlbnRzICovXG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIGdhbGxlcnkgc3RhdGUgKi9cbiAgcmVhZG9ubHkgc3RhdGU6IE9ic2VydmFibGU8R2FsbGVyeVN0YXRlPjtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgZ2FsbGVyeSBjb25maWcgKi9cbiAgcmVhZG9ubHkgY29uZmlnOiBPYnNlcnZhYmxlPEdhbGxlcnlDb25maWc+O1xuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGdhbGxlcnkgaXMgaW5pdGlhbGl6ZWQvcmVzZXQgKi9cbiAgZ2V0IGluaXRpYWxpemVkKCk6IE9ic2VydmFibGU8R2FsbGVyeVN0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucGlwZShmaWx0ZXJBY3Rpb25zKFtHYWxsZXJ5QWN0aW9uLklOSVRJQUxJWkVEXSkpO1xuICB9XG5cbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gaXRlbXMgaXMgY2hhbmdlZCAoaXRlbXMgbG9hZGVkLCBpdGVtIGFkZGVkLCBpdGVtIHJlbW92ZWQpICovXG4gIGdldCBpdGVtc0NoYW5nZWQoKTogT2JzZXJ2YWJsZTxHYWxsZXJ5U3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5waXBlKGZpbHRlckFjdGlvbnMoW0dhbGxlcnlBY3Rpb24uSVRFTVNfQ0hBTkdFRF0pKTtcbiAgfVxuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGN1cnJlbnQgaXRlbSBpcyBjaGFuZ2VkICovXG4gIGdldCBpbmRleENoYW5nZWQoKTogT2JzZXJ2YWJsZTxHYWxsZXJ5U3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5waXBlKGZpbHRlckFjdGlvbnMoW0dhbGxlcnlBY3Rpb24uSU5ERVhfQ0hBTkdFRF0pKTtcbiAgfVxuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHRoZSBwbGF5ZXIgc2hvdWxkIHN0YXJ0IG9yIHN0b3AgKi9cbiAgZ2V0IHBsYXlpbmdDaGFuZ2VkKCk6IE9ic2VydmFibGU8R2FsbGVyeVN0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUucGlwZShmaWx0ZXJBY3Rpb25zKFtHYWxsZXJ5QWN0aW9uLlBMQVksIEdhbGxlcnlBY3Rpb24uU1RPUF0pKTtcbiAgfVxuXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIHRoZSBwbGF5ZXIgc2hvdWxkIHN0YXJ0IG9yIHN0b3AgKi9cbiAgcHJpdmF0ZSBnZXQgcGxheWVyQWN0aW9ucygpOiBPYnNlcnZhYmxlPEdhbGxlcnlTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnBpcGUoZmlsdGVyQWN0aW9ucyhbR2FsbGVyeUFjdGlvbi5QTEFZLCBHYWxsZXJ5QWN0aW9uLlNUT1AsIEdhbGxlcnlBY3Rpb24uSU5ERVhfQ0hBTkdFRF0pKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogR2FsbGVyeUNvbmZpZywgcHJpdmF0ZSBkZWxldGVJbnN0YW5jZTogRnVuY3Rpb24pIHtcbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R2FsbGVyeVN0YXRlPihkZWZhdWx0U3RhdGUpO1xuICAgIHRoaXMuX2NvbmZpZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R2FsbGVyeUNvbmZpZz4oY29uZmlnKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5fc3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLl9jb25maWcuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGUgcGxheWVyIGFjdGlvbnMgbGlzdGVuZXJcbiAgICovXG4gIGFjdGl2YXRlUGxheWVyKCk6IE9ic2VydmFibGU8R2FsbGVyeVN0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyQWN0aW9ucy5waXBlKFxuICAgICAgc3dpdGNoTWFwKChlOiBHYWxsZXJ5U3RhdGUpID0+XG4gICAgICAgIGUuaXNQbGF5aW5nID8gb2Yoe30pLnBpcGUoXG4gICAgICAgICAgZGVsYXkodGhpcy5fY29uZmlnLnZhbHVlLnBsYXllckludGVydmFsKSxcbiAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5uZXh0KCkpXG4gICAgICAgICkgOiBFTVBUWVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGdhbGxlcnkgc3RhdGVcbiAgICogQHBhcmFtIHN0YXRlXG4gICAqL1xuICBwcml2YXRlIHNldFN0YXRlKHN0YXRlOiBHYWxsZXJ5U3RhdGUpIHtcbiAgICB0aGlzLl9zdGF0ZS5uZXh0KHsuLi50aGlzLl9zdGF0ZS52YWx1ZSwgLi4uc3RhdGV9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZ2FsbGVyeSBjb25maWdcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKi9cbiAgc2V0Q29uZmlnKGNvbmZpZzogR2FsbGVyeUNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZy5uZXh0KHsuLi50aGlzLl9jb25maWcudmFsdWUsIC4uLmNvbmZpZ30pO1xuICB9XG5cbiAgLyoqIEFkZCBnYWxsZXJ5IGl0ZW1cbiAgICogQHBhcmFtIGl0ZW0gLSBHYWxsZXJ5IGl0ZW0gb2JqZWN0XG4gICAqIEBwYXJhbSBhY3RpdmUgLSBTZXQgdGhlIG5ldyBpdGVtIGFzIGN1cnJlbnQgc2xpZGVcbiAgICovXG4gIGFkZChpdGVtOiBHYWxsZXJ5SXRlbSwgYWN0aXZlPzogYm9vbGVhbikge1xuXG4gICAgY29uc3QgaXRlbXMgPSBbLi4udGhpcy5fc3RhdGUudmFsdWUuaXRlbXMsIGl0ZW1dO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aW9uOiBHYWxsZXJ5QWN0aW9uLklURU1TX0NIQU5HRUQsXG4gICAgICBpdGVtczogaXRlbXMsXG4gICAgICBoYXNOZXh0OiBpdGVtcy5sZW5ndGggPiAxLFxuICAgICAgY3VyckluZGV4OiBhY3RpdmUgPyBpdGVtcy5sZW5ndGggLSAxIDogdGhpcy5fc3RhdGUudmFsdWUuY3VyckluZGV4XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGltYWdlIGl0ZW1cbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHBhcmFtIGFjdGl2ZVxuICAgKi9cbiAgYWRkSW1hZ2UoZGF0YTogYW55LCBhY3RpdmU/OiBib29sZWFuKSB7XG4gICAgdGhpcy5hZGQobmV3IEltYWdlSXRlbShkYXRhKSwgYWN0aXZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdmlkZW8gaXRlbVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gYWN0aXZlXG4gICAqL1xuICBhZGRWaWRlbyhkYXRhOiBhbnksIGFjdGl2ZT86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFkZChuZXcgVmlkZW9JdGVtKGRhdGEpLCBhY3RpdmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBpZnJhbWUgaXRlbVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gYWN0aXZlXG4gICAqL1xuICBhZGRJZnJhbWUoZGF0YTogYW55LCBhY3RpdmU/OiBib29sZWFuKSB7XG4gICAgdGhpcy5hZGQobmV3IElmcmFtZUl0ZW0oZGF0YSksIGFjdGl2ZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHlvdXR1YmUgaXRlbVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gYWN0aXZlXG4gICAqL1xuICBhZGRZb3V0dWJlKGRhdGE6IGFueSwgYWN0aXZlPzogYm9vbGVhbikge1xuICAgIHRoaXMuYWRkKG5ldyBZb3V0dWJlSXRlbShkYXRhKSwgYWN0aXZlKTtcbiAgfVxuXG4gIC8qKiBSZW1vdmUgZ2FsbGVyeSBpdGVtXG4gICAqIEBwYXJhbSBpIC0gSXRlbSBpbmRleFxuICAgKi9cbiAgcmVtb3ZlKGk6IG51bWJlcikge1xuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgLi4udGhpcy5fc3RhdGUudmFsdWUuaXRlbXMuc2xpY2UoMCwgaSksXG4gICAgICAuLi50aGlzLl9zdGF0ZS52YWx1ZS5pdGVtcy5zbGljZShpICsgMSwgdGhpcy5fc3RhdGUudmFsdWUuaXRlbXMubGVuZ3RoKVxuICAgIF07XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3Rpb246IEdhbGxlcnlBY3Rpb24uSVRFTVNfQ0hBTkdFRCxcbiAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgIGhhc05leHQ6IGl0ZW1zLmxlbmd0aCA+IDEsXG4gICAgICBoYXNQcmV2OiBpID4gMFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgaXRlbXMgYW5kIHJlc2V0IHRoZSBzdGF0ZVxuICAgKiBAcGFyYW0gaXRlbXMgLSBHYWxsZXJ5IGltYWdlcyBkYXRhXG4gICAqL1xuICBsb2FkKGl0ZW1zOiBHYWxsZXJ5SXRlbVtdKSB7XG4gICAgaWYgKGl0ZW1zKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aW9uOiBHYWxsZXJ5QWN0aW9uLklURU1TX0NIQU5HRUQsXG4gICAgICAgIGl0ZW1zOiBpdGVtcyxcbiAgICAgICAgaGFzTmV4dDogaXRlbXMubGVuZ3RoID4gMSxcbiAgICAgICAgaGFzUHJldjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYWN0aXZlIGl0ZW1cbiAgICogQHBhcmFtIGkgLSBBY3RpdmUgSW5kZXhcbiAgICovXG4gIHNldChpOiBudW1iZXIpIHtcbiAgICBpZiAoaSAhPT0gdGhpcy5fc3RhdGUudmFsdWUuY3VyckluZGV4KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aW9uOiBHYWxsZXJ5QWN0aW9uLklOREVYX0NIQU5HRUQsXG4gICAgICAgIGN1cnJJbmRleDogaSxcbiAgICAgICAgaGFzTmV4dDogaSA8IHRoaXMuX3N0YXRlLnZhbHVlLml0ZW1zLmxlbmd0aCAtIDEsXG4gICAgICAgIGhhc1ByZXY6IGkgPiAwXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTmV4dCBpdGVtXG4gICAqL1xuICBuZXh0KCkge1xuICAgIGlmICh0aGlzLl9zdGF0ZS52YWx1ZS5oYXNOZXh0KSB7XG4gICAgICB0aGlzLnNldCh0aGlzLl9zdGF0ZS52YWx1ZS5jdXJySW5kZXggKyAxKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy52YWx1ZS5sb29wKSB7XG4gICAgICB0aGlzLnNldCgwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJldiBpdGVtXG4gICAqL1xuICBwcmV2KCkge1xuICAgIGlmICh0aGlzLl9zdGF0ZS52YWx1ZS5oYXNQcmV2KSB7XG4gICAgICB0aGlzLnNldCh0aGlzLl9zdGF0ZS52YWx1ZS5jdXJySW5kZXggLSAxKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy52YWx1ZS5sb29wKSB7XG4gICAgICB0aGlzLnNldCh0aGlzLl9zdGF0ZS52YWx1ZS5pdGVtcy5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgZ2FsbGVyeSBwbGF5ZXJcbiAgICogQHBhcmFtIGludGVydmFsXG4gICAqL1xuICBwbGF5KGludGVydmFsPzogbnVtYmVyKSB7XG4gICAgaWYgKGludGVydmFsKSB7XG4gICAgICB0aGlzLnNldENvbmZpZyh7cGxheWVySW50ZXJ2YWw6IGludGVydmFsfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGlvbjogR2FsbGVyeUFjdGlvbi5QTEFZLCBpc1BsYXlpbmc6IHRydWV9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGdhbGxlcnkgcGxheWVyXG4gICAqL1xuICBzdG9wKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGlvbjogR2FsbGVyeUFjdGlvbi5TVE9QLCBpc1BsYXlpbmc6IGZhbHNlfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgZ2FsbGVyeSB0byBpbml0aWFsIHN0YXRlXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKGRlZmF1bHRTdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSBnYWxsZXJ5XG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuX3N0YXRlLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fY29uZmlnLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5pdGVtQ2xpY2suY29tcGxldGUoKTtcbiAgICB0aGlzLnRodW1iQ2xpY2suY29tcGxldGUoKTtcbiAgICB0aGlzLmRlbGV0ZUluc3RhbmNlKCk7XG4gIH1cblxufVxuIl19