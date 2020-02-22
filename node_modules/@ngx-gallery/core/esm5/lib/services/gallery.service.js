/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { GalleryRef } from './gallery-ref';
import { GALLERY_CONFIG } from '../models/config.model';
import { defaultConfig } from '../utils/gallery.default';
import * as i0 from "@angular/core";
import * as i1 from "../models/config.model";
var Gallery = /** @class */ (function () {
    function Gallery(config) {
        /**
         * Store gallery instances
         */
        this._instances = new Map();
        this.config = config ? tslib_1.__assign({}, defaultConfig, config) : defaultConfig;
    }
    /**
     * Get or create gallery by ID
     * @param id
     * @param config
     */
    /**
     * Get or create gallery by ID
     * @param {?=} id
     * @param {?=} config
     * @return {?}
     */
    Gallery.prototype.ref = /**
     * Get or create gallery by ID
     * @param {?=} id
     * @param {?=} config
     * @return {?}
     */
    function (id, config) {
        if (id === void 0) { id = 'root'; }
        if (this._instances.has(id)) {
            /** @type {?} */
            var galleryRef = this._instances.get(id);
            if (config) {
                galleryRef.setConfig(tslib_1.__assign({}, this.config, config));
            }
            return galleryRef;
        }
        else {
            return this._instances.set(id, new GalleryRef(tslib_1.__assign({}, this.config, config), this.deleteInstance(id))).get(id);
        }
    };
    /**
     * Destroy all gallery instances
     */
    /**
     * Destroy all gallery instances
     * @return {?}
     */
    Gallery.prototype.destroyAll = /**
     * Destroy all gallery instances
     * @return {?}
     */
    function () {
        this._instances.forEach(function (ref) { return ref.destroy(); });
    };
    /**
     * Reset all gallery instances
     */
    /**
     * Reset all gallery instances
     * @return {?}
     */
    Gallery.prototype.resetAll = /**
     * Reset all gallery instances
     * @return {?}
     */
    function () {
        this._instances.forEach(function (ref) { return ref.reset(); });
    };
    /**
     * A destroyer function for each gallery instance
     */
    /**
     * A destroyer function for each gallery instance
     * @private
     * @param {?} id
     * @return {?}
     */
    Gallery.prototype.deleteInstance = /**
     * A destroyer function for each gallery instance
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        return function () {
            if (_this._instances.has(id)) {
                _this._instances.delete(id);
            }
        };
    };
    Gallery.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Gallery.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GALLERY_CONFIG,] }] }
    ]; };
    /** @nocollapse */ Gallery.ngInjectableDef = i0.defineInjectable({ factory: function Gallery_Factory() { return new Gallery(i0.inject(i1.GALLERY_CONFIG, 8)); }, token: Gallery, providedIn: "root" });
    return Gallery;
}());
export { Gallery };
if (false) {
    /**
     * Store gallery instances
     * @type {?}
     * @private
     */
    Gallery.prototype._instances;
    /**
     * Global config
     * @type {?}
     */
    Gallery.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2FsbGVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFpQixjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUV6RDtJQVdFLGlCQUFnRCxNQUFxQjs7OztRQUxwRCxlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUM7UUFNMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxzQkFBSyxhQUFhLEVBQUssTUFBTSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxxQkFBRzs7Ozs7O0lBQUgsVUFBSSxFQUFXLEVBQUUsTUFBc0I7UUFBbkMsbUJBQUEsRUFBQSxXQUFXO1FBQ2IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTs7Z0JBQ3JCLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDMUMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsVUFBVSxDQUFDLFNBQVMsc0JBQUssSUFBSSxDQUFDLE1BQU0sRUFBSyxNQUFNLEVBQUUsQ0FBQzthQUNuRDtZQUNELE9BQU8sVUFBVSxDQUFDO1NBQ25CO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLFVBQVUsc0JBQUssSUFBSSxDQUFDLE1BQU0sRUFBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlHO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDRCQUFVOzs7O0lBQVY7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQWUsSUFBSyxPQUFBLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBYixDQUFhLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsMEJBQVE7Ozs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBZSxJQUFLLE9BQUEsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNLLGdDQUFjOzs7Ozs7SUFBdEIsVUFBdUIsRUFBVTtRQUFqQyxpQkFNQztRQUxDLE9BQU87WUFDTCxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMzQixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQXZERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dEQVNjLFFBQVEsWUFBSSxNQUFNLFNBQUMsY0FBYzs7O2tCQWpCaEQ7Q0ErREMsQUF6REQsSUF5REM7U0F0RFksT0FBTzs7Ozs7OztJQUdsQiw2QkFBNEQ7Ozs7O0lBRzVELHlCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2FsbGVyeVJlZiB9IGZyb20gJy4vZ2FsbGVyeS1yZWYnO1xuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZywgR0FMTEVSWV9DT05GSUcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnLm1vZGVsJztcbmltcG9ydCB7IGRlZmF1bHRDb25maWcgfSBmcm9tICcuLi91dGlscy9nYWxsZXJ5LmRlZmF1bHQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5IHtcblxuICAvKiogU3RvcmUgZ2FsbGVyeSBpbnN0YW5jZXMgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfaW5zdGFuY2VzID0gbmV3IE1hcDxzdHJpbmcsIEdhbGxlcnlSZWY+KCk7XG5cbiAgLyoqIEdsb2JhbCBjb25maWcgKi9cbiAgY29uZmlnOiBHYWxsZXJ5Q29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoR0FMTEVSWV9DT05GSUcpIGNvbmZpZzogR2FsbGVyeUNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnID8gey4uLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZ30gOiBkZWZhdWx0Q29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvciBjcmVhdGUgZ2FsbGVyeSBieSBJRFxuICAgKiBAcGFyYW0gaWRcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKi9cbiAgcmVmKGlkID0gJ3Jvb3QnLCBjb25maWc/OiBHYWxsZXJ5Q29uZmlnKTogR2FsbGVyeVJlZiB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlcy5oYXMoaWQpKSB7XG4gICAgICBjb25zdCBnYWxsZXJ5UmVmID0gdGhpcy5faW5zdGFuY2VzLmdldChpZCk7XG4gICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgIGdhbGxlcnlSZWYuc2V0Q29uZmlnKHsuLi50aGlzLmNvbmZpZywgLi4uY29uZmlnfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2FsbGVyeVJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlcy5zZXQoaWQsIG5ldyBHYWxsZXJ5UmVmKHsuLi50aGlzLmNvbmZpZywgLi4uY29uZmlnfSwgdGhpcy5kZWxldGVJbnN0YW5jZShpZCkpKS5nZXQoaWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGFsbCBnYWxsZXJ5IGluc3RhbmNlc1xuICAgKi9cbiAgZGVzdHJveUFsbCgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZXMuZm9yRWFjaCgocmVmOiBHYWxsZXJ5UmVmKSA9PiByZWYuZGVzdHJveSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBhbGwgZ2FsbGVyeSBpbnN0YW5jZXNcbiAgICovXG4gIHJlc2V0QWxsKCkge1xuICAgIHRoaXMuX2luc3RhbmNlcy5mb3JFYWNoKChyZWY6IEdhbGxlcnlSZWYpID0+IHJlZi5yZXNldCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGRlc3Ryb3llciBmdW5jdGlvbiBmb3IgZWFjaCBnYWxsZXJ5IGluc3RhbmNlXG4gICAqL1xuICBwcml2YXRlIGRlbGV0ZUluc3RhbmNlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2luc3RhbmNlcy5oYXMoaWQpKSB7XG4gICAgICAgIHRoaXMuX2luc3RhbmNlcy5kZWxldGUoaWQpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxufVxuIl19