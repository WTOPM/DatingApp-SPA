/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { GalleryRef } from './gallery-ref';
import { GALLERY_CONFIG } from '../models/config.model';
import { defaultConfig } from '../utils/gallery.default';
import * as i0 from "@angular/core";
import * as i1 from "../models/config.model";
export class Gallery {
    /**
     * @param {?} config
     */
    constructor(config) {
        /**
         * Store gallery instances
         */
        this._instances = new Map();
        this.config = config ? Object.assign({}, defaultConfig, config) : defaultConfig;
    }
    /**
     * Get or create gallery by ID
     * @param {?=} id
     * @param {?=} config
     * @return {?}
     */
    ref(id = 'root', config) {
        if (this._instances.has(id)) {
            /** @type {?} */
            const galleryRef = this._instances.get(id);
            if (config) {
                galleryRef.setConfig(Object.assign({}, this.config, config));
            }
            return galleryRef;
        }
        else {
            return this._instances.set(id, new GalleryRef(Object.assign({}, this.config, config), this.deleteInstance(id))).get(id);
        }
    }
    /**
     * Destroy all gallery instances
     * @return {?}
     */
    destroyAll() {
        this._instances.forEach((ref) => ref.destroy());
    }
    /**
     * Reset all gallery instances
     * @return {?}
     */
    resetAll() {
        this._instances.forEach((ref) => ref.reset());
    }
    /**
     * A destroyer function for each gallery instance
     * @private
     * @param {?} id
     * @return {?}
     */
    deleteInstance(id) {
        return () => {
            if (this._instances.has(id)) {
                this._instances.delete(id);
            }
        };
    }
}
Gallery.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Gallery.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GALLERY_CONFIG,] }] }
];
/** @nocollapse */ Gallery.ngInjectableDef = i0.defineInjectable({ factory: function Gallery_Factory() { return new Gallery(i0.inject(i1.GALLERY_CONFIG, 8)); }, token: Gallery, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2FsbGVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWlCLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBS3pELE1BQU0sT0FBTyxPQUFPOzs7O0lBUWxCLFlBQWdELE1BQXFCOzs7O1FBTHBELGVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztRQU0xRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLG1CQUFLLGFBQWEsRUFBSyxNQUFNLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7O0lBT0QsR0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLEVBQUUsTUFBc0I7UUFDckMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTs7a0JBQ3JCLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDMUMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsVUFBVSxDQUFDLFNBQVMsbUJBQUssSUFBSSxDQUFDLE1BQU0sRUFBSyxNQUFNLEVBQUUsQ0FBQzthQUNuRDtZQUNELE9BQU8sVUFBVSxDQUFDO1NBQ25CO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLFVBQVUsbUJBQUssSUFBSSxDQUFDLE1BQU0sRUFBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlHO0lBQ0gsQ0FBQzs7Ozs7SUFLRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFlLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBS0QsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBZSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7O0lBS08sY0FBYyxDQUFDLEVBQVU7UUFDL0IsT0FBTyxHQUFHLEVBQUU7WUFDVixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7OztZQXZERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7NENBU2MsUUFBUSxZQUFJLE1BQU0sU0FBQyxjQUFjOzs7Ozs7Ozs7SUFMOUMsNkJBQTREOzs7OztJQUc1RCx5QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhbGxlcnlSZWYgfSBmcm9tICcuL2dhbGxlcnktcmVmJztcbmltcG9ydCB7IEdhbGxlcnlDb25maWcsIEdBTExFUllfQ09ORklHIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZy5tb2RlbCc7XG5pbXBvcnQgeyBkZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vdXRpbHMvZ2FsbGVyeS5kZWZhdWx0JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeSB7XG5cbiAgLyoqIFN0b3JlIGdhbGxlcnkgaW5zdGFuY2VzICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2luc3RhbmNlcyA9IG5ldyBNYXA8c3RyaW5nLCBHYWxsZXJ5UmVmPigpO1xuXG4gIC8qKiBHbG9iYWwgY29uZmlnICovXG4gIGNvbmZpZzogR2FsbGVyeUNvbmZpZztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KEdBTExFUllfQ09ORklHKSBjb25maWc6IEdhbGxlcnlDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyA/IHsuLi5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWd9IDogZGVmYXVsdENvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3IgY3JlYXRlIGdhbGxlcnkgYnkgSURcbiAgICogQHBhcmFtIGlkXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIHJlZihpZCA9ICdyb290JywgY29uZmlnPzogR2FsbGVyeUNvbmZpZyk6IEdhbGxlcnlSZWYge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZXMuaGFzKGlkKSkge1xuICAgICAgY29uc3QgZ2FsbGVyeVJlZiA9IHRoaXMuX2luc3RhbmNlcy5nZXQoaWQpO1xuICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICBnYWxsZXJ5UmVmLnNldENvbmZpZyh7Li4udGhpcy5jb25maWcsIC4uLmNvbmZpZ30pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGdhbGxlcnlSZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZXMuc2V0KGlkLCBuZXcgR2FsbGVyeVJlZih7Li4udGhpcy5jb25maWcsIC4uLmNvbmZpZ30sIHRoaXMuZGVsZXRlSW5zdGFuY2UoaWQpKSkuZ2V0KGlkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSBhbGwgZ2FsbGVyeSBpbnN0YW5jZXNcbiAgICovXG4gIGRlc3Ryb3lBbGwoKSB7XG4gICAgdGhpcy5faW5zdGFuY2VzLmZvckVhY2goKHJlZjogR2FsbGVyeVJlZikgPT4gcmVmLmRlc3Ryb3koKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgYWxsIGdhbGxlcnkgaW5zdGFuY2VzXG4gICAqL1xuICByZXNldEFsbCgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZXMuZm9yRWFjaCgocmVmOiBHYWxsZXJ5UmVmKSA9PiByZWYucmVzZXQoKSk7XG4gIH1cblxuICAvKipcbiAgICogQSBkZXN0cm95ZXIgZnVuY3Rpb24gZm9yIGVhY2ggZ2FsbGVyeSBpbnN0YW5jZVxuICAgKi9cbiAgcHJpdmF0ZSBkZWxldGVJbnN0YW5jZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pbnN0YW5jZXMuaGFzKGlkKSkge1xuICAgICAgICB0aGlzLl9pbnN0YW5jZXMuZGVsZXRlKGlkKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==