(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@angular/common/http'), require('@angular/platform-browser'), require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ngx-gallery/core', ['exports', '@angular/animations', '@angular/common/http', '@angular/platform-browser', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global['ngx-gallery'] = global['ngx-gallery'] || {}, global['ngx-gallery'].core = {}),global.ng.animations,global.ng.common.http,global.ng.platformBrowser,global.ng.common,global.ng.core,global.rxjs,global.rxjs.operators));
}(this, (function (exports,animations,http,platformBrowser,common,i0,rxjs,operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var GalleryAction = {
        INITIALIZED: 'initialized',
        ITEMS_CHANGED: 'itemsChanged',
        INDEX_CHANGED: 'indexChanged',
        PLAY: 'play',
        STOP: 'stop',
    };
    /** @enum {string} */
    var ImageSize = {
        Cover: 'cover',
        Contain: 'contain',
    };
    /** @enum {string} */
    var LoadingStrategy = {
        Preload: 'preload',
        Lazy: 'lazy',
        Default: 'default',
    };
    /** @enum {string} */
    var ThumbnailsPosition = {
        Top: 'top',
        Left: 'left',
        Right: 'right',
        Bottom: 'bottom',
    };
    /** @enum {string} */
    var ImageLoaderMode = {
        Determinate: 'determinate',
        Indeterminate: 'indeterminate',
    };
    /** @enum {string} */
    var DotsPosition = {
        Top: 'top',
        Bottom: 'bottom',
    };
    /** @enum {string} */
    var CounterPosition = {
        Top: 'top',
        Bottom: 'bottom',
    };
    /** @enum {string} */
    var ThumbnailsMode = {
        Free: 'free',
        Strict: 'strict',
    };
    /** @enum {string} */
    var SlidingDirection = {
        Horizontal: 'horizontal',
        Vertical: 'vertical',
    };
    /** @enum {string} */
    var GalleryItemType = {
        Image: 'image',
        Video: 'video',
        Youtube: 'youtube',
        Iframe: 'iframe',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Initial state
     * @type {?}
     */
    var defaultState = {
        action: GalleryAction.INITIALIZED,
        isPlaying: false,
        hasNext: false,
        hasPrev: false,
        currIndex: 0,
        items: []
    };
    /** @type {?} */
    var defaultConfig = {
        nav: true,
        loop: true,
        zoomOut: 0,
        dots: false,
        thumb: true,
        dotsSize: 30,
        counter: true,
        gestures: true,
        autoPlay: false,
        thumbWidth: 120,
        thumbHeight: 90,
        panSensitivity: 25,
        disableThumb: false,
        playerInterval: 3000,
        imageSize: ImageSize.Contain,
        thumbMode: ThumbnailsMode.Strict,
        dotsPosition: DotsPosition.Bottom,
        counterPosition: CounterPosition.Top,
        thumbPosition: ThumbnailsPosition.Bottom,
        loadingStrategy: LoadingStrategy.Default,
        slidingDirection: SlidingDirection.Horizontal,
        navIcon: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg width=\"512px\" height=\"512px\" enable-background=\"new 0 0 240.823 240.823\" version=\"1.1\" viewBox=\"0 0 240.823 240.823\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m183.19 111.82l-108.3-108.26c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.3-108.26c4.68-4.691 4.68-12.511-0.012-17.19z\" fill=\"#fff\"/></svg>",
        loadingIcon: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg stroke=\"#fff\" viewBox=\"0 0 44 44\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\" stroke-width=\"2\"><circle cx=\"22\" cy=\"22\" r=\"1\"><animate attributeName=\"r\" begin=\"0s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.165, 0.84, 0.44, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 20\"/><animate attributeName=\"stroke-opacity\" begin=\"0s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.3, 0.61, 0.355, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 0\"/></circle><circle cx=\"22\" cy=\"22\" r=\"1\"><animate attributeName=\"r\" begin=\"-0.9s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.165, 0.84, 0.44, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 20\"/><animate attributeName=\"stroke-opacity\" begin=\"-0.9s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.3, 0.61, 0.355, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 0\"/></circle></g></svg>"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImageItem = /** @class */ (function () {
        function ImageItem(data) {
            this.data = data;
            this.type = GalleryItemType.Image;
        }
        return ImageItem;
    }());
    var VideoItem = /** @class */ (function () {
        function VideoItem(data) {
            this.data = data;
            this.type = GalleryItemType.Video;
        }
        return VideoItem;
    }());
    var IframeItem = /** @class */ (function () {
        function IframeItem(data) {
            this.data = data;
            this.type = GalleryItemType.Iframe;
        }
        return IframeItem;
    }());
    var YoutubeItem = /** @class */ (function () {
        function YoutubeItem(data) {
            this.data = {
                src: "//youtube.com/embed/" + data.src + "?wmode=transparent",
                thumb: data.thumb ? data.thumb : "//img.youtube.com/vi/" + data.src + "/default.jpg"
            };
            this.type = GalleryItemType.Youtube;
        }
        return YoutubeItem;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var filterActions = function (actions) {
        return operators.filter(function (state) { return actions.indexOf(state.action) > -1; });
    };
    var GalleryRef = /** @class */ (function () {
        function GalleryRef(config, deleteInstance) {
            this.deleteInstance = deleteInstance;
            /**
             * Stream that emits on item click
             */
            this.itemClick = new rxjs.Subject();
            /**
             * Stream that emits on thumbnail click
             */
            this.thumbClick = new rxjs.Subject();
            /**
             * Stream that emits on an error occurs
             */
            this.error = new rxjs.Subject();
            this._state = new rxjs.BehaviorSubject(defaultState);
            this._config = new rxjs.BehaviorSubject(config);
            this.state = this._state.asObservable();
            this.config = this._config.asObservable();
        }
        Object.defineProperty(GalleryRef.prototype, "initialized", {
            /** Stream that emits when gallery is initialized/reset */
            get: /**
             * Stream that emits when gallery is initialized/reset
             * @return {?}
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
                return this.playerActions.pipe(operators.switchMap(function (e) {
                    return e.isPlaying ? rxjs.of({}).pipe(operators.delay(_this._config.value.playerInterval), operators.tap(function () { return _this.next(); })) : rxjs.EMPTY;
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
                this._state.next(__assign({}, this._state.value, state));
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
                this._config.next(__assign({}, this._config.value, config));
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
                var items = __spread(this._state.value.items, [item]);
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
                var items = __spread(this._state.value.items.slice(0, i), this._state.value.items.slice(i + 1, this._state.value.items.length));
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var GALLERY_CONFIG = new i0.InjectionToken('galleryConfig');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Gallery = /** @class */ (function () {
        function Gallery(config) {
            /**
             * Store gallery instances
             */
            this._instances = new Map();
            this.config = config ? __assign({}, defaultConfig, config) : defaultConfig;
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
                if (id === void 0) {
                    id = 'root';
                }
                if (this._instances.has(id)) {
                    /** @type {?} */
                    var galleryRef = this._instances.get(id);
                    if (config) {
                        galleryRef.setConfig(__assign({}, this.config, config));
                    }
                    return galleryRef;
                }
                else {
                    return this._instances.set(id, new GalleryRef(__assign({}, this.config, config), this.deleteInstance(id))).get(id);
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        Gallery.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [GALLERY_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ Gallery.ngInjectableDef = i0.defineInjectable({ factory: function Gallery_Factory() { return new Gallery(i0.inject(GALLERY_CONFIG, 8)); }, token: Gallery, providedIn: "root" });
        return Gallery;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GalleryComponent = /** @class */ (function () {
        function GalleryComponent(_gallery) {
            this._gallery = _gallery;
            this.nav = this._gallery.config.nav;
            this.dots = this._gallery.config.dots;
            this.loop = this._gallery.config.loop;
            this.thumb = this._gallery.config.thumb;
            this.zoomOut = this._gallery.config.zoomOut;
            this.counter = this._gallery.config.counter;
            this.dotsSize = this._gallery.config.dotsSize;
            this.autoPlay = this._gallery.config.autoPlay;
            this.gestures = this._gallery.config.gestures;
            this.thumbWidth = this._gallery.config.thumbWidth;
            this.thumbHeight = this._gallery.config.thumbHeight;
            this.disableThumb = this._gallery.config.disableThumb;
            this.panSensitivity = this._gallery.config.panSensitivity;
            this.playerInterval = this._gallery.config.playerInterval;
            this.itemTemplate = this._gallery.config.itemTemplate;
            this.thumbTemplate = this._gallery.config.thumbTemplate;
            this.thumbMode = this._gallery.config.thumbMode;
            this.imageSize = this._gallery.config.imageSize;
            this.dotsPosition = this._gallery.config.dotsPosition;
            this.counterPosition = this._gallery.config.counterPosition;
            this.slidingDirection = this._gallery.config.slidingDirection;
            this.loadingStrategy = this._gallery.config.loadingStrategy;
            this.thumbPosition = this._gallery.config.thumbPosition;
            // Inputs used by the lightbox
            /**
             * Destroy gallery ref on component destroy event
             */
            this.destroyRef = true;
            /**
             * Skip initializing the config with components inputs (Lightbox mode)
             */
            this.skipInitConfig = false;
            this.itemClick = new i0.EventEmitter();
            this.thumbClick = new i0.EventEmitter();
            this.playingChange = new i0.EventEmitter();
            this.indexChange = new i0.EventEmitter();
            this.itemsChange = new i0.EventEmitter();
            this.error = new i0.EventEmitter();
            this._itemClick$ = rxjs.Subscription.EMPTY;
            this._thumbClick$ = rxjs.Subscription.EMPTY;
            this._itemChange$ = rxjs.Subscription.EMPTY;
            this._indexChange$ = rxjs.Subscription.EMPTY;
            this._playingChange$ = rxjs.Subscription.EMPTY;
            this._playerListener$ = rxjs.Subscription.EMPTY;
        }
        /**
         * @private
         * @return {?}
         */
        GalleryComponent.prototype.getConfig = /**
         * @private
         * @return {?}
         */
            function () {
                return {
                    nav: this.nav,
                    dots: this.dots,
                    loop: this.loop,
                    thumb: this.thumb,
                    zoomOut: this.zoomOut,
                    counter: this.counter,
                    autoPlay: this.autoPlay,
                    gestures: this.gestures,
                    dotsSize: this.dotsSize,
                    imageSize: this.imageSize,
                    thumbMode: this.thumbMode,
                    thumbWidth: this.thumbWidth,
                    thumbHeight: this.thumbHeight,
                    disableThumb: this.disableThumb,
                    dotsPosition: this.dotsPosition,
                    itemTemplate: this.itemTemplate,
                    thumbTemplate: this.thumbTemplate,
                    thumbPosition: this.thumbPosition,
                    panSensitivity: this.panSensitivity,
                    playerInterval: this.playerInterval,
                    counterPosition: this.counterPosition,
                    loadingStrategy: this.loadingStrategy,
                    slidingDirection: this.slidingDirection
                };
            };
        /**
         * @param {?} i
         * @return {?}
         */
        GalleryComponent.prototype.onAction = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                switch (i) {
                    case 'next':
                        this.galleryRef.next();
                        break;
                    case 'prev':
                        this.galleryRef.prev();
                        break;
                    default:
                        this.galleryRef.set(( /** @type {?} */(i)));
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        GalleryComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (this.galleryRef) {
                    this.galleryRef.setConfig(this.getConfig());
                    if (changes.items && changes.items.currentValue !== changes.items.previousValue) {
                        this.load(this.items);
                    }
                }
            };
        /**
         * @return {?}
         */
        GalleryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // Get gallery instance by id
                if (this.skipInitConfig) {
                    this.galleryRef = this._gallery.ref(this.id);
                }
                else {
                    this.galleryRef = this._gallery.ref(this.id, this.getConfig());
                }
                // Load gallery items
                this.load(this.items);
                // Activate player listener
                this._playerListener$ = this.galleryRef.activatePlayer().subscribe();
                // Subscribes to events on demand
                if (this.indexChange.observers.length) {
                    this._indexChange$ = this.galleryRef.indexChanged.subscribe(function (state) { return _this.indexChange.emit(state); });
                }
                if (this.itemsChange.observers.length) {
                    this._itemChange$ = this.galleryRef.itemsChanged.subscribe(function (state) { return _this.itemsChange.emit(state); });
                }
                if (this.playingChange.observers.length) {
                    this._playingChange$ = this.galleryRef.playingChanged.subscribe(function (state) { return _this.playingChange.emit(state); });
                }
                // Start playing if auto-play is set to true
                if (this.autoPlay) {
                    this.play();
                }
            };
        /**
         * @return {?}
         */
        GalleryComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._itemClick$.unsubscribe();
                this._thumbClick$.unsubscribe();
                this._itemChange$.unsubscribe();
                this._indexChange$.unsubscribe();
                this._playingChange$.unsubscribe();
                this._playerListener$.unsubscribe();
                if (this.destroyRef) {
                    this.galleryRef.destroy();
                }
            };
        /**
         * @param {?} i
         * @return {?}
         */
        GalleryComponent.prototype.onItemClick = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.itemClick.emit(i);
                this.galleryRef.itemClick.next(i);
            };
        /**
         * @param {?} i
         * @return {?}
         */
        GalleryComponent.prototype.onThumbClick = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.galleryRef.set(i);
                this.thumbClick.emit(i);
                this.galleryRef.thumbClick.next(i);
            };
        /**
         * @param {?} err
         * @return {?}
         */
        GalleryComponent.prototype.onError = /**
         * @param {?} err
         * @return {?}
         */
            function (err) {
                this.error.emit(err);
                this.galleryRef.error.next(err);
            };
        /**
         * @param {?} items
         * @return {?}
         */
        GalleryComponent.prototype.load = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                this.galleryRef.load(items);
            };
        /**
         * @param {?} item
         * @param {?=} active
         * @return {?}
         */
        GalleryComponent.prototype.add = /**
         * @param {?} item
         * @param {?=} active
         * @return {?}
         */
            function (item, active) {
                this.galleryRef.add(item, active);
            };
        /**
         * @param {?} data
         * @param {?=} active
         * @return {?}
         */
        GalleryComponent.prototype.addImage = /**
         * @param {?} data
         * @param {?=} active
         * @return {?}
         */
            function (data, active) {
                this.add(new ImageItem(data), active);
            };
        /**
         * @param {?} data
         * @param {?=} active
         * @return {?}
         */
        GalleryComponent.prototype.addVideo = /**
         * @param {?} data
         * @param {?=} active
         * @return {?}
         */
            function (data, active) {
                this.add(new VideoItem(data), active);
            };
        /**
         * @param {?} data
         * @param {?=} active
         * @return {?}
         */
        GalleryComponent.prototype.addIframe = /**
         * @param {?} data
         * @param {?=} active
         * @return {?}
         */
            function (data, active) {
                this.add(new IframeItem(data), active);
            };
        /**
         * @param {?} data
         * @param {?=} active
         * @return {?}
         */
        GalleryComponent.prototype.addYoutube = /**
         * @param {?} data
         * @param {?=} active
         * @return {?}
         */
            function (data, active) {
                this.add(new YoutubeItem(data), active);
            };
        /**
         * @param {?} i
         * @return {?}
         */
        GalleryComponent.prototype.remove = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.galleryRef.remove(i);
            };
        /**
         * @return {?}
         */
        GalleryComponent.prototype.next = /**
         * @return {?}
         */
            function () {
                this.galleryRef.next();
            };
        /**
         * @return {?}
         */
        GalleryComponent.prototype.prev = /**
         * @return {?}
         */
            function () {
                this.galleryRef.prev();
            };
        /**
         * @param {?} i
         * @return {?}
         */
        GalleryComponent.prototype.set = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.galleryRef.set(i);
            };
        /**
         * @return {?}
         */
        GalleryComponent.prototype.reset = /**
         * @return {?}
         */
            function () {
                this.galleryRef.reset();
            };
        /**
         * @param {?=} interval
         * @return {?}
         */
        GalleryComponent.prototype.play = /**
         * @param {?=} interval
         * @return {?}
         */
            function (interval) {
                this.galleryRef.play(interval);
            };
        /**
         * @return {?}
         */
        GalleryComponent.prototype.stop = /**
         * @return {?}
         */
            function () {
                this.galleryRef.stop();
            };
        GalleryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gallery',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <gallery-core [state]=\"galleryRef.state | async\"\n                  [config]=\"galleryRef.config | async\"\n                  (action)=\"onAction($event)\"\n                  (itemClick)=\"onItemClick($event)\"\n                  (thumbClick)=\"onThumbClick($event)\"\n                  (error)=\"onError($event)\"></gallery-core>\n    <ng-content></ng-content>\n  ",
                        styles: ["::ng-deep gallery-core[dotsPosition=top] gallery-dots{top:0}::ng-deep gallery-core[dotsPosition=bottom] gallery-dots{bottom:0}::ng-deep gallery-dots{margin:7px;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}::ng-deep .g-dot{cursor:pointer;z-index:20}::ng-deep .g-dot:hover .g-dot-inner{opacity:1}::ng-deep .g-dot-active .g-dot-inner{opacity:1;-webkit-transform:scale(1.5)!important;transform:scale(1.5)!important}::ng-deep .g-dot-inner{background-color:#fff;opacity:.6;width:30%;height:30%;border-radius:50%;box-shadow:0 0 1px #000;transition:.2s}::ng-deep .g-dot,::ng-deep .g-dot-inner,::ng-deep gallery-dots{display:flex;justify-content:center;align-items:center}::ng-deep .g-nav-next,::ng-deep .g-nav-prev{position:absolute;top:50%;width:30px;height:40px;cursor:pointer;z-index:999}::ng-deep .g-nav-next{right:.5em;-webkit-transform:translateY(-50%) perspective(1px);transform:translateY(-50%) perspective(1px)}::ng-deep .g-nav-prev{left:.5em;-webkit-transform:translateY(-50%) perspective(1px) scale(-1,-1);transform:translateY(-50%) perspective(1px) scale(-1,-1)}@media only screen and (max-width:480px){::ng-deep .g-nav-next{right:.2em}::ng-deep .g-nav-prev{left:.2em}}::ng-deep .g-items-container{height:100%}::ng-deep .g-slider{position:absolute;transition:transform .4s cubic-bezier(.5,0,.5,1);transition:transform .4s cubic-bezier(.5,0,.5,1),-webkit-transform .4s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-core[slidingDirection=horizontal] .g-slider{flex-direction:row}::ng-deep gallery-core[slidingDirection=vertical] .g-slider{flex-direction:column}::ng-deep gallery-thumbs{display:block;z-index:1;overflow:unset}::ng-deep .g-thumbs-container{position:relative;z-index:206;width:100%;height:100%;left:0;top:0;display:flex;overflow:unset}::ng-deep gallery-core[disableThumb=true] gallery-thumb{cursor:default}::ng-deep gallery-core[thumbPosition=bottom] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=top] gallery-thumbs .g-slider{flex-direction:row;top:0;left:50%}::ng-deep gallery-core[thumbPosition=bottom] gallery-thumb,::ng-deep gallery-core[thumbPosition=top] gallery-thumb{padding:1px 0 1px 1px}::ng-deep gallery-core[thumbPosition=left] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=right] gallery-thumbs .g-slider{flex-direction:column;top:50%;left:0}::ng-deep gallery-core[thumbPosition=left] gallery-thumb,::ng-deep gallery-core[thumbPosition=right] gallery-thumb{padding:0 1px 1px}::ng-deep gallery-core[thumbPosition=top]{flex-direction:column}::ng-deep gallery-core[thumbPosition=left]{flex-direction:row}::ng-deep gallery-core[thumbPosition=right]{flex-direction:row-reverse}::ng-deep gallery-core[thumbPosition=bottom]{flex-direction:column-reverse}::ng-deep gallery-thumb.g-active-thumb .g-thumb-loading{background-color:#464646}::ng-deep .g-thumb-loading{position:relative;overflow:hidden;height:100%;background-color:#262626}::ng-deep .g-thumb-loading::before{content:\"\";position:absolute;top:0;right:0;bottom:0;left:50%;z-index:1;width:500%;margin-left:-250%;-webkit-animation:.8s linear infinite phAnimation;animation:.8s linear infinite phAnimation;background:linear-gradient(to right,rgba(255,255,255,0) 46%,rgba(255,255,255,.35) 50%,rgba(255,255,255,0) 54%) 50% 50%}@-webkit-keyframes phAnimation{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}100%{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}@keyframes phAnimation{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}100%{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}::ng-deep gallery-core[counterPosition=top] .g-counter{top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}::ng-deep gallery-core[counterPosition=bottom] .g-counter{bottom:0;border-top-left-radius:4px;border-top-right-radius:4px}::ng-deep .g-counter{z-index:50;position:absolute;left:50%;-webkit-transform:translateX(-50%) perspective(1px);transform:translateX(-50%) perspective(1px);font-size:12px;padding:4px 10px;color:#fff;background-color:rgba(0,0,0,.5)}::ng-deep gallery[gallerize] gallery-item{cursor:pointer}::ng-deep gallery-item,::ng-deep gallery-thumb{position:relative;height:100%;width:100%;display:block;overflow:hidden}::ng-deep gallery-item h2,::ng-deep gallery-item h4,::ng-deep gallery-thumb h2,::ng-deep gallery-thumb h4{color:coral;margin:0}::ng-deep gallery-item h2,::ng-deep gallery-thumb h2{font-size:3.5em;margin-bottom:.3em}::ng-deep gallery-item h4,::ng-deep gallery-thumb h4{font-size:1.6em}::ng-deep gallery-item{z-index:10}::ng-deep gallery-item iframe,::ng-deep gallery-item video{position:absolute;width:100%;height:100%}::ng-deep gallery-thumb{opacity:.5;cursor:pointer;transition:opacity .3s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-thumb.g-active-thumb{opacity:1}::ng-deep .g-image-item{background-position:center center;background-repeat:no-repeat;background-size:cover;width:100%;height:100%}::ng-deep .g-image-error-message,::ng-deep .g-template{position:absolute;z-index:10;left:0;top:0;right:0;bottom:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}::ng-deep .g-loading{position:absolute;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);left:50%;top:50%;width:80px;height:80px}::ng-deep gallery-core[imageSize=contain] gallery-slider .g-image-item{background-size:contain}::ng-deep gallery-image{display:flex;justify-content:center;align-items:center;height:100%}::ng-deep gallery{position:relative;z-index:1;overflow:hidden;display:block;height:500px;background-color:#000}::ng-deep gallery *{box-sizing:border-box}::ng-deep gallery,::ng-deep gallery-core{position:relative;overflow:hidden}::ng-deep .g-box,::ng-deep .g-slider,::ng-deep gallery-core{display:flex;height:100%;width:100%}::ng-deep gallery[fluid]{-webkit-transform:translateX(-50vw);transform:translateX(-50vw);width:100vw;left:50%}::ng-deep gallery[fluid][fluid=false]{-webkit-transform:none;transform:none;width:initial;left:initial}::ng-deep .g-no-transition{transition:unset!important}::ng-deep .g-box,::ng-deep gallery-slider{overflow:hidden;position:relative;display:flex;flex-direction:column;flex:1;order:1;height:100%}::ng-deep .g-btn-close svg,::ng-deep gallery-nav svg{width:100%;height:100%;-webkit-filter:drop-shadow(0 0 1px #000);filter:drop-shadow(0 0 1px #000);transition:opacity .2s linear;opacity:.6}::ng-deep .g-btn-close svg:hover,::ng-deep gallery-nav svg:hover{opacity:1}"]
                    }] }
        ];
        /** @nocollapse */
        GalleryComponent.ctorParameters = function () {
            return [
                { type: Gallery }
            ];
        };
        GalleryComponent.propDecorators = {
            id: [{ type: i0.Input }],
            items: [{ type: i0.Input }],
            nav: [{ type: i0.Input }],
            dots: [{ type: i0.Input }],
            loop: [{ type: i0.Input }],
            thumb: [{ type: i0.Input }],
            zoomOut: [{ type: i0.Input }],
            counter: [{ type: i0.Input }],
            dotsSize: [{ type: i0.Input }],
            autoPlay: [{ type: i0.Input }],
            gestures: [{ type: i0.Input }],
            thumbWidth: [{ type: i0.Input }],
            thumbHeight: [{ type: i0.Input }],
            disableThumb: [{ type: i0.Input }],
            panSensitivity: [{ type: i0.Input }],
            playerInterval: [{ type: i0.Input }],
            itemTemplate: [{ type: i0.Input }],
            thumbTemplate: [{ type: i0.Input }],
            thumbMode: [{ type: i0.Input }],
            imageSize: [{ type: i0.Input }],
            dotsPosition: [{ type: i0.Input }],
            counterPosition: [{ type: i0.Input }],
            slidingDirection: [{ type: i0.Input }],
            loadingStrategy: [{ type: i0.Input }],
            thumbPosition: [{ type: i0.Input }],
            destroyRef: [{ type: i0.Input }],
            skipInitConfig: [{ type: i0.Input }],
            itemClick: [{ type: i0.Output }],
            thumbClick: [{ type: i0.Output }],
            playingChange: [{ type: i0.Output }],
            indexChange: [{ type: i0.Output }],
            itemsChange: [{ type: i0.Output }],
            error: [{ type: i0.Output }]
        };
        return GalleryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GalleryIframeComponent = /** @class */ (function () {
        function GalleryIframeComponent(_sanitizer) {
            this._sanitizer = _sanitizer;
        }
        Object.defineProperty(GalleryIframeComponent.prototype, "pauseVideo", {
            set: /**
             * @param {?} shouldPause
             * @return {?}
             */ function (shouldPause) {
                /** @type {?} */
                var iframe = this.iframe.nativeElement;
                if (shouldPause) {
                    /** @type {?} */
                    var src = iframe.src;
                    iframe.src = src;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        GalleryIframeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.iframeSrc = this._sanitizer.bypassSecurityTrustResourceUrl(this.src);
            };
        GalleryIframeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gallery-iframe',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <iframe #iframe\n            frameborder=\"0\"\n            allowfullscreen\n            [src]=\"iframeSrc\">\n    </iframe>\n  "
                    }] }
        ];
        /** @nocollapse */
        GalleryIframeComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        GalleryIframeComponent.propDecorators = {
            src: [{ type: i0.Input }],
            pauseVideo: [{ type: i0.Input, args: ['pause',] }],
            iframe: [{ type: i0.ViewChild, args: ['iframe',] }]
        };
        return GalleryIframeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GalleryImageComponent = /** @class */ (function () {
        function GalleryImageComponent(_sanitizer) {
            this._sanitizer = _sanitizer;
            /**
             * Stream that emits the state
             */
            this._state = new rxjs.BehaviorSubject('loading');
            this.state = this._state.asObservable();
            /**
             * Progress value
             */
            this.progress = 0;
            /**
             * Stream that emits when an error occurs
             */
            this.error = new i0.EventEmitter();
        }
        Object.defineProperty(GalleryImageComponent.prototype, "imageLoadSuccess", {
            get: /**
             * @return {?}
             */ function () {
                return !!this.imageUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GalleryImageComponent.prototype, "imageLoadFailed", {
            get: /**
             * @return {?}
             */ function () {
                return !!this.loadError;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        GalleryImageComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.loadingIcon) {
                    this.loaderTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingIcon);
                }
                if (this.loadingError) {
                    this.errorTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingError);
                }
            };
        /**
         * @return {?}
         */
        GalleryImageComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._state.complete();
            };
        /**
         * @param {?} __0
         * @return {?}
         */
        GalleryImageComponent.prototype.onProgress = /**
         * @param {?} __0
         * @return {?}
         */
            function (_a) {
                var loaded = _a.loaded, total = _a.total;
                this.progress = loaded * 100 / total;
            };
        /**
         * @param {?} blobUrl
         * @return {?}
         */
        GalleryImageComponent.prototype.onLoaded = /**
         * @param {?} blobUrl
         * @return {?}
         */
            function (blobUrl) {
                this.imageUrl = this._sanitizer.bypassSecurityTrustStyle("url(" + blobUrl + ")");
                this._state.next('success');
            };
        /**
         * @param {?} err
         * @return {?}
         */
        GalleryImageComponent.prototype.onError = /**
         * @param {?} err
         * @return {?}
         */
            function (err) {
                this.loadError = err;
                this._state.next('failed');
                this.error.emit(err);
            };
        GalleryImageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gallery-image',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        animations: [
                            animations.trigger('fadeIn', [
                                animations.transition(':enter', [
                                    animations.style({ opacity: 0 }),
                                    animations.animate('300ms ease-in', animations.style({ opacity: 1 }))
                                ])
                            ])
                        ],
                        template: "\n    <ng-container [lazyImage]=\"src\"\n                  (progress)=\"onProgress($event)\"\n                  (loaded)=\"onLoaded($event)\"\n                  (error)=\"onError($event)\"\n                  [ngSwitch]=\"state | async\">\n\n      <div *ngSwitchCase=\"'success'\"\n           @fadeIn\n           class=\"g-image-item\"\n           [style.backgroundImage]=\"imageUrl\">\n      </div>\n\n      <div *ngSwitchCase=\"'failed'\"\n           class=\"g-image-error-message\">\n        <div *ngIf=\"errorTemplate; else defaultError\"\n             [innerHTML]=\"errorTemplate\"></div>\n        <ng-template #defaultError>\n          <ng-container *ngIf=\"isThumbnail; else isLarge\">\n            <h4>\u26A0</h4>\n          </ng-container>\n          <ng-template #isLarge>\n            <h2>\u26A0</h2>\n            <p>Unable to load the image!</p>\n          </ng-template>\n        </ng-template>\n      </div>\n\n      <ng-container *ngSwitchCase=\"'loading'\">\n        <div *ngIf=\"loaderTemplate; else defaultLoader\"\n             class=\"g-loading\"\n             [innerHTML]=\"loaderTemplate\">\n        </div>\n        <ng-template #defaultLoader>\n          <div *ngIf=\"isThumbnail\" class=\"g-thumb-loading\"></div>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        GalleryImageComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        GalleryImageComponent.propDecorators = {
            isThumbnail: [{ type: i0.Input }],
            src: [{ type: i0.Input }],
            loadingIcon: [{ type: i0.Input }],
            loadingError: [{ type: i0.Input }],
            error: [{ type: i0.Output }],
            imageLoadSuccess: [{ type: i0.HostBinding, args: ['class.g-image-loaded',] }],
            imageLoadFailed: [{ type: i0.HostBinding, args: ['class.g-image-error',] }]
        };
        return GalleryImageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GalleryVideoComponent = /** @class */ (function () {
        function GalleryVideoComponent() {
            /**
             * Stream that emits when an error occurs
             */
            this.error = new i0.EventEmitter();
        }
        Object.defineProperty(GalleryVideoComponent.prototype, "pauseVideo", {
            set: /**
             * @param {?} shouldPause
             * @return {?}
             */ function (shouldPause) {
                /** @type {?} */
                var video = this.video.nativeElement;
                if (shouldPause && !video.paused) {
                    video.pause();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        GalleryVideoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.src instanceof Array) {
                    // If video has multiple sources
                    this.videoSources = __spread(this.src);
                }
                else {
                    this.videoSources = [{ url: this.src }];
                }
            };
        GalleryVideoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gallery-video',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <video #video controls poster=\"{{poster}}\" (error)=\"error.emit($event)\">\n      <source *ngFor=\"let src of videoSources\" src=\"{{src?.url}}\" type=\"{{src?.type}}\"/>\n    </video>\n  "
                    }] }
        ];
        GalleryVideoComponent.propDecorators = {
            src: [{ type: i0.Input }],
            poster: [{ type: i0.Input }],
            pauseVideo: [{ type: i0.Input, args: ['pause',] }],
            error: [{ type: i0.Output }],
            video: [{ type: i0.ViewChild, args: ['video',] }]
        };
        return GalleryVideoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GalleryNavComponent = /** @class */ (function () {
        function GalleryNavComponent(_sanitizer) {
            this._sanitizer = _sanitizer;
            this.action = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        GalleryNavComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.navIcon = this._sanitizer.bypassSecurityTrustHtml(this.config.navIcon);
            };
        GalleryNavComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gallery-nav',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <i *ngIf=\"config.loop || state.hasPrev\"\n       class=\"g-nav-prev\"\n       aria-label=\"Previous\"\n       (tapClick)=\"action.emit('prev')\"\n       [innerHtml]=\"navIcon\"></i>\n\n    <i *ngIf=\"config.loop || state.hasNext\"\n       class=\"g-nav-next\"\n       aria-label=\"Next\"\n       (tapClick)=\"action.emit('next')\"\n       [innerHtml]=\"navIcon\"></i>\n  "
                    }] }
        ];
        /** @nocollapse */
        GalleryNavComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        GalleryNavComponent.propDecorators = {
            state: [{ type: i0.Input }],
            config: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return GalleryNavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GalleryCoreComponent = /** @class */ (function () {
        function GalleryCoreComponent() {
            this.action = new i0.EventEmitter();
            this.itemClick = new i0.EventEmitter();
            this.thumbClick = new i0.EventEmitter();
            this.error = new i0.EventEmitter();
        }
        Object.defineProperty(GalleryCoreComponent.prototype, "thumbPosition", {
            /** Set thumbnails position */
            get: /**
             * Set thumbnails position
             * @return {?}
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
             */ function () {
                return this.config.counterPosition;
            },
            enumerable: true,
            configurable: true
        });
        GalleryCoreComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gallery-core',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <gallery-thumbs *ngIf=\"config.thumb\"\n                    [state]=\"state\"\n                    [config]=\"config\"\n                    (action)=\"action.emit($event)\"\n                    (thumbClick)=\"thumbClick.emit($event)\">\n    </gallery-thumbs>\n    <div class=\"g-box\">\n      <gallery-slider [state]=\"state\"\n                      [config]=\"config\"\n                      (action)=\"action.emit($event)\"\n                      (itemClick)=\"itemClick.emit($event)\"\n                      (error)=\"error.emit($event)\">\n\n        <gallery-nav *ngIf=\"config.nav && state.items.length > 1\"\n                     [state]=\"state\"\n                     [config]=\"config\"\n                     (action)=\"action.emit($event)\">\n        </gallery-nav>\n\n      </gallery-slider>\n\n      <gallery-dots *ngIf=\"config.dots\"\n                    [state]=\"state\"\n                    [config]=\"config\"\n                    (action)=\"action.emit($event)\">\n      </gallery-dots>\n\n      <gallery-counter *ngIf=\"config.counter\"\n                       [state]=\"state\">\n      </gallery-counter>\n    </div>\n  "
                    }] }
        ];
        GalleryCoreComponent.propDecorators = {
            state: [{ type: i0.Input }],
            config: [{ type: i0.Input }],
            action: [{ type: i0.Output }],
            itemClick: [{ type: i0.Output }],
            thumbClick: [{ type: i0.Output }],
            error: [{ type: i0.Output }],
            thumbPosition: [{ type: i0.HostBinding, args: ['attr.thumbPosition',] }],
            slidingDirection: [{ type: i0.HostBinding, args: ['attr.slidingDirection',] }],
            disableThumb: [{ type: i0.HostBinding, args: ['attr.disableThumb',] }],
            imageSize: [{ type: i0.HostBinding, args: ['attr.imageSize',] }],
            dotsPosition: [{ type: i0.HostBinding, args: ['attr.dotsPosition',] }],
            counterPosition: [{ type: i0.HostBinding, args: ['attr.counterPosition',] }]
        };
        return GalleryCoreComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GalleryDotsComponent = /** @class */ (function () {
        function GalleryDotsComponent() {
            this.action = new i0.EventEmitter();
        }
        GalleryDotsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gallery-dots',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <div class=\"g-dot\"\n         *ngFor=\"let item of state.items; let i = index\"\n         [class.g-dot-active]=\"i === state.currIndex\"\n         [style.width.px]=\"config?.dotsSize\"\n         [style.height.px]=\"config?.dotsSize\"\n         (tapClick)=\"action.emit(i)\">\n      <div class=\"g-dot-inner\"></div>\n    </div>\n  "
                    }] }
        ];
        GalleryDotsComponent.propDecorators = {
            state: [{ type: i0.Input }],
            config: [{ type: i0.Input }],
            action: [{ type: i0.Output }]
        };
        return GalleryDotsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GalleryThumbsComponent = /** @class */ (function () {
        function GalleryThumbsComponent(_el, _zone) {
            var _this = this;
            this._el = _el;
            this._zone = _zone;
            /**
             * Sliding worker
             */
            this._slidingWorker$ = new rxjs.BehaviorSubject({ value: 0, active: false });
            /**
             * Current slider position in free sliding mode
             */
            this._freeModeCurrentOffset = 0;
            /**
             * Stream that emits when the active item should change
             */
            this.action = new i0.EventEmitter();
            /**
             * Stream that emits when thumb is clicked
             */
            this.thumbClick = new i0.EventEmitter();
            /**
             * Stream that emits when an error occurs
             */
            this.error = new i0.EventEmitter();
            // Activate sliding worker
            this.sliderState$ = this._slidingWorker$.pipe(operators.map(function (state) {
                return ({
                    style: _this.getSliderStyles(state),
                    active: state.active
                });
            }));
        }
        /**
         * @return {?}
         */
        GalleryThumbsComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                // Refresh the slider
                this.updateSlider({ value: 0, active: false });
                this._freeModeCurrentOffset = 0;
            };
        /**
         * @return {?}
         */
        GalleryThumbsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.config.gestures && !this.config.disableThumb && typeof Hammer !== 'undefined') {
                    /** @type {?} */
                    var direction = void 0;
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
                    this._hammer.get('pan').set({ direction: direction });
                    this._zone.runOutsideAngular(function () {
                        // Move the slider
                        switch (_this.config.thumbMode) {
                            case ThumbnailsMode.Strict:
                                _this._hammer.on('pan', function (e) { return _this.strictMode(e); });
                                break;
                            case ThumbnailsMode.Free:
                                _this._hammer.on('pan', function (e) { return _this.freeMode(e); });
                        }
                    });
                }
            };
        /**
         * @return {?}
         */
        GalleryThumbsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._hammer) {
                    this._hammer.destroy();
                }
            };
        /**
         * Sliding strict mode
         */
        /**
         * Sliding strict mode
         * @private
         * @param {?} e
         * @return {?}
         */
        GalleryThumbsComponent.prototype.strictMode = /**
         * Sliding strict mode
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
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
            };
        /**
         * Sliding free mode
         */
        /**
         * Sliding free mode
         * @private
         * @param {?} e
         * @return {?}
         */
        GalleryThumbsComponent.prototype.freeMode = /**
         * Sliding free mode
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
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
            };
        /**
         * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
         */
        /**
         * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
         * @private
         * @param {?} delta
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
        GalleryThumbsComponent.prototype.minFreeScrollExceeded = /**
         * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
         * @private
         * @param {?} delta
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
            function (delta, width, height) {
                return -(this._freeModeCurrentOffset + delta - width / 2) > (this.state.items.length - this.state.currIndex) * height;
            };
        /**
         * Check if the maximum free scroll is exceeded (used in Top, Right directions)
         */
        /**
         * Check if the maximum free scroll is exceeded (used in Top, Right directions)
         * @private
         * @param {?} delta
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
        GalleryThumbsComponent.prototype.maxFreeScrollExceeded = /**
         * Check if the maximum free scroll is exceeded (used in Top, Right directions)
         * @private
         * @param {?} delta
         * @param {?} width
         * @param {?} height
         * @return {?}
         */
            function (delta, width, height) {
                return this._freeModeCurrentOffset + delta > (this.state.currIndex * width) + (height / 2);
            };
        /**
         * Convert sliding state to styles
         */
        /**
         * Convert sliding state to styles
         * @private
         * @param {?} state
         * @return {?}
         */
        GalleryThumbsComponent.prototype.getSliderStyles = /**
         * Convert sliding state to styles
         * @private
         * @param {?} state
         * @return {?}
         */
            function (state) {
                /** @type {?} */
                var value;
                switch (this.config.thumbPosition) {
                    case ThumbnailsPosition.Top:
                    case ThumbnailsPosition.Bottom:
                        this.width = '100%';
                        this.height = this.config.thumbHeight + 'px';
                        value = -(this.state.currIndex * this.config.thumbWidth) - (this.config.thumbWidth / 2 - state.value);
                        return {
                            transform: "translate3d(" + value + "px, 0, 0)",
                            width: this.state.items.length * this.config.thumbWidth + 'px',
                            height: '100%'
                        };
                    case ThumbnailsPosition.Left:
                    case ThumbnailsPosition.Right:
                        this.width = this.config.thumbWidth + 'px';
                        this.height = '100%';
                        value = -(this.state.currIndex * this.config.thumbHeight) - (this.config.thumbHeight / 2 - state.value);
                        return {
                            transform: "translate3d(0, " + value + "px, 0)",
                            width: '100%',
                            height: this.state.items.length * this.config.thumbHeight + 'px'
                        };
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        GalleryThumbsComponent.prototype.verticalPan = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
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
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        GalleryThumbsComponent.prototype.horizontalPan = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
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
            };
        /**
         * @private
         * @return {?}
         */
        GalleryThumbsComponent.prototype.next = /**
         * @private
         * @return {?}
         */
            function () {
                this.action.emit('next');
            };
        /**
         * @private
         * @return {?}
         */
        GalleryThumbsComponent.prototype.prev = /**
         * @private
         * @return {?}
         */
            function () {
                this.action.emit('prev');
            };
        /**
         * @private
         * @param {?} state
         * @return {?}
         */
        GalleryThumbsComponent.prototype.updateSlider = /**
         * @private
         * @param {?} state
         * @return {?}
         */
            function (state) {
                /** @type {?} */
                var newState = __assign({}, this._slidingWorker$.value, state);
                this._slidingWorker$.next(newState);
            };
        GalleryThumbsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gallery-thumbs',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <div *ngIf=\"sliderState$ | async; let sliderState\"\n         class=\"g-thumbs-container\">\n      <div class=\"g-slider\"\n           [class.g-no-transition]=\"sliderState.active\"\n           [ngStyle]=\"sliderState.style\">\n\n        <gallery-thumb *ngFor=\"let item of state.items;let i = index\"\n                       [type]=\"item.type\"\n                       [config]=\"config\"\n                       [data]=\"item.data\"\n                       [currIndex]=\"state.currIndex\"\n                       [index]=\"i\"\n                       [tapClickDisabled]=\"config.disableThumb\"\n                       (tapClick)=\"thumbClick.emit(i)\"\n                       (error)=\"error.emit({itemIndex: i, error: $event})\"></gallery-thumb>\n      </div>\n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        GalleryThumbsComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.NgZone }
            ];
        };
        GalleryThumbsComponent.propDecorators = {
            state: [{ type: i0.Input }],
            config: [{ type: i0.Input }],
            action: [{ type: i0.Output }],
            thumbClick: [{ type: i0.Output }],
            error: [{ type: i0.Output }],
            height: [{ type: i0.HostBinding, args: ['style.height',] }],
            width: [{ type: i0.HostBinding, args: ['style.width',] }]
        };
        return GalleryThumbsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GallerySliderComponent = /** @class */ (function () {
        function GallerySliderComponent(_el, _zone, platform) {
            var _this = this;
            this._el = _el;
            this._zone = _zone;
            this.platform = platform;
            /**
             * Sliding worker
             */
            this._slidingWorker$ = new rxjs.BehaviorSubject({ value: 0, active: false });
            /**
             * Stream that emits when the active item should change
             */
            this.action = new i0.EventEmitter();
            /**
             * Stream that emits when item is clicked
             */
            this.itemClick = new i0.EventEmitter();
            /**
             * Stream that emits when an error occurs
             */
            this.error = new i0.EventEmitter();
            // Activate sliding worker
            this.sliderState$ = this._slidingWorker$.pipe(operators.map(function (state) {
                return ({
                    style: _this.getSliderStyles(state),
                    active: state.active
                });
            }));
        }
        Object.defineProperty(GallerySliderComponent.prototype, "zoom", {
            /** Item zoom */
            get: /**
             * Item zoom
             * @return {?}
             */ function () {
                return { transform: "perspective(50px) translate3d(0, 0, " + -this.config.zoomOut + "px)" };
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        GallerySliderComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                // Refresh the slider
                this.updateSlider({ value: 0, active: false });
            };
        /**
         * @return {?}
         */
        GallerySliderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.config.gestures && typeof Hammer !== 'undefined') {
                    /** @type {?} */
                    var direction = this.config.slidingDirection === SlidingDirection.Horizontal
                        ? Hammer.DIRECTION_HORIZONTAL
                        : Hammer.DIRECTION_VERTICAL;
                    // Activate gestures
                    this._hammer = new Hammer(this._el.nativeElement);
                    this._hammer.get('pan').set({ direction: direction });
                    this._zone.runOutsideAngular(function () {
                        // Move the slider
                        _this._hammer.on('pan', function (e) {
                            switch (_this.config.slidingDirection) {
                                case SlidingDirection.Horizontal:
                                    _this.updateSlider({ value: e.deltaX, active: true });
                                    if (e.isFinal) {
                                        _this.updateSlider({ value: 0, active: false });
                                        _this.horizontalPan(e);
                                    }
                                    break;
                                case SlidingDirection.Vertical:
                                    _this.updateSlider({ value: e.deltaY, active: true });
                                    if (e.isFinal) {
                                        _this.updateSlider({ value: 0, active: false });
                                        _this.verticalPan(e);
                                    }
                            }
                        });
                    });
                }
                // Rearrange slider on window resize
                if (common.isPlatformBrowser(this.platform)) {
                    this._resizeSub$ = rxjs.fromEvent(window, 'resize').pipe(operators.debounceTime(200), operators.tap(function () { return _this.updateSlider(_this._slidingWorker$.value); })).subscribe();
                }
                setTimeout(function () { return _this.updateSlider({ value: 0, active: false }); });
            };
        /**
         * @return {?}
         */
        GallerySliderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._hammer) {
                    this._hammer.destroy();
                }
                if (this._resizeSub$) {
                    this._resizeSub$.unsubscribe();
                }
                this._slidingWorker$.complete();
            };
        /**
         * Convert sliding state to styles
         */
        /**
         * Convert sliding state to styles
         * @private
         * @param {?} state
         * @return {?}
         */
        GallerySliderComponent.prototype.getSliderStyles = /**
         * Convert sliding state to styles
         * @private
         * @param {?} state
         * @return {?}
         */
            function (state) {
                switch (this.config.slidingDirection) {
                    case SlidingDirection.Horizontal:
                        return {
                            transform: "translate3d(" + (-(this.state.currIndex * this._el.nativeElement.offsetWidth) + state.value) + "px, 0, 0)",
                            width: "calc(100% * " + this.state.items.length + ")",
                            height: '100%'
                        };
                    case SlidingDirection.Vertical:
                        return {
                            transform: "translate3d(0, " + (-(this.state.currIndex * this._el.nativeElement.offsetHeight) + state.value) + "px, 0)",
                            width: '100%',
                            height: "calc(100% * " + this.state.items.length + ")",
                        };
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        GallerySliderComponent.prototype.verticalPan = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
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
                    if (e.deltaY / 2 <= -this._el.nativeElement.offsetHeight * this.state.items.length / this.config.panSensitivity) {
                        this.next();
                    }
                    else if (e.deltaY / 2 >= this._el.nativeElement.offsetHeight * this.state.items.length / this.config.panSensitivity) {
                        this.prev();
                    }
                    else {
                        this.action.emit(this.state.currIndex);
                    }
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        GallerySliderComponent.prototype.horizontalPan = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
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
                    if (e.deltaX / 2 <= -this._el.nativeElement.offsetWidth * this.state.items.length / this.config.panSensitivity) {
                        this.next();
                    }
                    else if (e.deltaX / 2 >= this._el.nativeElement.offsetWidth * this.state.items.length / this.config.panSensitivity) {
                        this.prev();
                    }
                    else {
                        this.action.emit(this.state.currIndex);
                    }
                }
            };
        /**
         * @private
         * @return {?}
         */
        GallerySliderComponent.prototype.next = /**
         * @private
         * @return {?}
         */
            function () {
                this.action.emit('next');
            };
        /**
         * @private
         * @return {?}
         */
        GallerySliderComponent.prototype.prev = /**
         * @private
         * @return {?}
         */
            function () {
                this.action.emit('prev');
            };
        /**
         * @private
         * @param {?} state
         * @return {?}
         */
        GallerySliderComponent.prototype.updateSlider = /**
         * @private
         * @param {?} state
         * @return {?}
         */
            function (state) {
                /** @type {?} */
                var newState = __assign({}, this._slidingWorker$.value, state);
                this._slidingWorker$.next(newState);
            };
        GallerySliderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gallery-slider',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <div *ngIf=\"sliderState$ | async; let sliderState\"\n         class=\"g-items-container\"\n         [ngStyle]=\"zoom\">\n\n      <div class=\"g-slider\"\n           [class.g-no-transition]=\"sliderState.active\"\n           [ngStyle]=\"sliderState.style\">\n\n        <gallery-item *ngFor=\"let item of state.items; let i = index\"\n                      [type]=\"item.type\"\n                      [config]=\"config\"\n                      [data]=\"item.data\"\n                      [currIndex]=\"state.currIndex\"\n                      [index]=\"i\"\n                      (tapClick)=\"itemClick.emit(i)\"\n                      (error)=\"error.emit({itemIndex: i, error: $event})\">\n        </gallery-item>\n\n      </div>\n    </div>\n    <ng-content></ng-content>\n  "
                    }] }
        ];
        /** @nocollapse */
        GallerySliderComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.NgZone },
                { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        GallerySliderComponent.propDecorators = {
            state: [{ type: i0.Input }],
            config: [{ type: i0.Input }],
            action: [{ type: i0.Output }],
            itemClick: [{ type: i0.Output }],
            error: [{ type: i0.Output }]
        };
        return GallerySliderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GalleryCounterComponent = /** @class */ (function () {
        function GalleryCounterComponent() {
        }
        GalleryCounterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gallery-counter',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <div class=\"g-counter\">{{(state.currIndex + 1) + '/' + state.items.length}}</div>\n  "
                    }] }
        ];
        GalleryCounterComponent.propDecorators = {
            state: [{ type: i0.Input }]
        };
        return GalleryCounterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GalleryItemComponent = /** @class */ (function () {
        function GalleryItemComponent() {
            this.Types = GalleryItemType;
            /**
             * Stream that emits when an error occurs
             */
            this.error = new i0.EventEmitter();
        }
        Object.defineProperty(GalleryItemComponent.prototype, "isActive", {
            get: /**
             * @return {?}
             */ function () {
                return this.index === this.currIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GalleryItemComponent.prototype, "load", {
            get: /**
             * @return {?}
             */ function () {
                switch (this.config.loadingStrategy) {
                    case LoadingStrategy.Preload:
                        return true;
                    case LoadingStrategy.Lazy:
                        return this.currIndex === this.index;
                    default:
                        return this.currIndex === this.index || this.currIndex === this.index - 1 || this.currIndex === this.index + 1;
                }
            },
            enumerable: true,
            configurable: true
        });
        GalleryItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gallery-item',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <ng-container *ngIf=\"load\" [ngSwitch]=\"type\">\n\n      <ng-container *ngSwitchCase=\"Types.Image\">\n\n        <gallery-image [src]=\"data.src\"\n                       [loadingIcon]=\"config.loadingIcon\"\n                       [loadingError]=\"config.loadingError\"\n                       (error)=\"error.emit($event)\"></gallery-image>\n\n        <div class=\"g-template g-item-template\">\n          <ng-container *ngTemplateOutlet=\"config.itemTemplate;\n          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }\">\n          </ng-container>\n        </div>\n\n      </ng-container>\n\n      <gallery-video *ngSwitchCase=\"Types.Video\"\n                     [src]=\"data.src\"\n                     [poster]=\"data.poster\"\n                     [pause]=\"currIndex !== index\"\n                     (error)=\"error.emit($event)\"></gallery-video>\n\n      <gallery-iframe *ngSwitchCase=\"Types.Youtube\"\n                      [src]=\"data.src\"\n                      [pause]=\"currIndex !== index\"></gallery-iframe>\n\n      <gallery-iframe *ngSwitchCase=\"Types.Iframe\"\n                      [src]=\"data.src\"></gallery-iframe>\n\n      <ng-container *ngSwitchDefault>\n\n        <div class=\"g-template g-item-template\">\n          <ng-container *ngTemplateOutlet=\"config.itemTemplate;\n          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }\">\n          </ng-container>\n        </div>\n\n      </ng-container>\n\n    </ng-container>\n  "
                    }] }
        ];
        GalleryItemComponent.propDecorators = {
            config: [{ type: i0.Input }],
            index: [{ type: i0.Input }],
            currIndex: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            data: [{ type: i0.Input }],
            error: [{ type: i0.Output }],
            isActive: [{ type: i0.HostBinding, args: ['class.g-active-item',] }]
        };
        return GalleryItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GalleryThumbComponent = /** @class */ (function () {
        function GalleryThumbComponent() {
            this.error = new i0.EventEmitter();
        }
        Object.defineProperty(GalleryThumbComponent.prototype, "isActive", {
            get: /**
             * @return {?}
             */ function () {
                return this.index === this.currIndex;
            },
            enumerable: true,
            configurable: true
        });
        GalleryThumbComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gallery-thumb',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <gallery-image [src]=\"data.thumb\" \n                   mode=\"indeterminate\"\n                   [isThumbnail]=\"true\" \n                   [loadingIcon]=\"config.thumbLoadingIcon\"\n                   [loadingError]=\"config.thumbLoadingError \"\n                   (error)=\"error.emit($event)\"></gallery-image>\n\n    <div *ngIf=\"config.thumbTemplate\" class=\"g-template g-thumb-template\">\n      <ng-container\n        *ngTemplateOutlet=\"config.thumbTemplate; context: { index: this.index, type: this.type, data: this.data }\">\n      </ng-container>\n    </div>\n  "
                    }] }
        ];
        GalleryThumbComponent.propDecorators = {
            config: [{ type: i0.Input }],
            index: [{ type: i0.Input }],
            currIndex: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            data: [{ type: i0.Input }],
            error: [{ type: i0.Output }],
            isActive: [{ type: i0.HostBinding, args: ['class.g-active-thumb',] }]
        };
        return GalleryThumbComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LazyImage = /** @class */ (function () {
        function LazyImage(document) {
            var _this = this;
            this.document = document;
            this._imageLoader$ = new rxjs.Subject();
            this._loaderSub$ = rxjs.Subscription.EMPTY;
            this.loaded = new i0.EventEmitter();
            this.error = new i0.EventEmitter();
            this._loaderSub$ = this._imageLoader$.pipe(operators.switchMap(function (imageSrc) { return _this.nativeLoader(imageSrc); })).subscribe();
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
                var loadSuccess = rxjs.fromEvent(img, 'load').pipe(operators.tap(function () { return _this.loaded.emit(url); }));
                // Image load failed
                /** @type {?} */
                var loadError = rxjs.fromEvent(img, 'error').pipe(operators.tap(function () { return _this.error.emit(new Error("[lazyImage]: The image " + url + " did not load")); }));
                return rxjs.zip(loadSuccess, loadError);
            };
        LazyImage.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[lazyImage]'
                    },] }
        ];
        /** @nocollapse */
        LazyImage.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        LazyImage.propDecorators = {
            src: [{ type: i0.Input, args: ['lazyImage',] }],
            loaded: [{ type: i0.Output }],
            error: [{ type: i0.Output }]
        };
        return LazyImage;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * This directive uses tap event if HammerJS is loaded, otherwise it falls back to normal click event
     */
    var TapClick = /** @class */ (function () {
        function TapClick(_el) {
            this._el = _el;
            this.clickListener = rxjs.Subscription.EMPTY;
            this.tapClick = new i0.EventEmitter();
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
                    this.clickListener = rxjs.fromEvent(this._el.nativeElement, 'click').pipe(operators.filter(function () { return !_this.tapClickDisabled; }), operators.tap(function () { return _this.tapClick.emit(null); })).subscribe();
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
            { type: i0.Directive, args: [{
                        selector: '[tapClick]'
                    },] }
        ];
        /** @nocollapse */
        TapClick.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        TapClick.propDecorators = {
            tapClickDisabled: [{ type: i0.Input }],
            tapClick: [{ type: i0.Output }]
        };
        return TapClick;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GalleryModule = /** @class */ (function () {
        function GalleryModule() {
        }
        /**
         * @param {?} config
         * @return {?}
         */
        GalleryModule.withConfig = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: GalleryModule,
                    providers: [
                        {
                            provide: GALLERY_CONFIG,
                            useValue: config
                        }
                    ]
                };
            };
        GalleryModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            http.HttpClientModule
                        ],
                        declarations: [
                            GalleryComponent,
                            GalleryNavComponent,
                            GalleryDotsComponent,
                            GalleryCoreComponent,
                            GallerySliderComponent,
                            GalleryCounterComponent,
                            GalleryThumbsComponent,
                            GalleryThumbComponent,
                            GalleryItemComponent,
                            GalleryImageComponent,
                            GalleryVideoComponent,
                            GalleryIframeComponent,
                            LazyImage,
                            TapClick
                        ],
                        exports: [
                            GalleryComponent,
                            LazyImage,
                            TapClick,
                        ]
                    },] }
        ];
        return GalleryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Gallery = Gallery;
    exports.GalleryRef = GalleryRef;
    exports.GalleryComponent = GalleryComponent;
    exports.ImageItem = ImageItem;
    exports.VideoItem = VideoItem;
    exports.IframeItem = IframeItem;
    exports.YoutubeItem = YoutubeItem;
    exports.GalleryIframeComponent = GalleryIframeComponent;
    exports.GalleryImageComponent = GalleryImageComponent;
    exports.GalleryVideoComponent = GalleryVideoComponent;
    exports.GALLERY_CONFIG = GALLERY_CONFIG;
    exports.GalleryAction = GalleryAction;
    exports.ImageSize = ImageSize;
    exports.LoadingStrategy = LoadingStrategy;
    exports.ThumbnailsPosition = ThumbnailsPosition;
    exports.ImageLoaderMode = ImageLoaderMode;
    exports.DotsPosition = DotsPosition;
    exports.CounterPosition = CounterPosition;
    exports.ThumbnailsMode = ThumbnailsMode;
    exports.SlidingDirection = SlidingDirection;
    exports.GalleryItemType = GalleryItemType;
    exports.GalleryModule = GalleryModule;
    exports.ɵc = GalleryCoreComponent;
    exports.ɵe = GalleryCounterComponent;
    exports.ɵb = GalleryDotsComponent;
    exports.ɵh = GalleryItemComponent;
    exports.ɵa = GalleryNavComponent;
    exports.ɵd = GallerySliderComponent;
    exports.ɵg = GalleryThumbComponent;
    exports.ɵf = GalleryThumbsComponent;
    exports.ɵi = LazyImage;
    exports.ɵj = TapClick;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-gallery-core.umd.js.map