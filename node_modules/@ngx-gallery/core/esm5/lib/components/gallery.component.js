/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, TemplateRef, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gallery } from '../services/gallery.service';
import { IframeItem, ImageItem, VideoItem, YoutubeItem } from './templates/items.model';
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
        this.itemClick = new EventEmitter();
        this.thumbClick = new EventEmitter();
        this.playingChange = new EventEmitter();
        this.indexChange = new EventEmitter();
        this.itemsChange = new EventEmitter();
        this.error = new EventEmitter();
        this._itemClick$ = Subscription.EMPTY;
        this._thumbClick$ = Subscription.EMPTY;
        this._itemChange$ = Subscription.EMPTY;
        this._indexChange$ = Subscription.EMPTY;
        this._playingChange$ = Subscription.EMPTY;
        this._playerListener$ = Subscription.EMPTY;
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
                this.galleryRef.set((/** @type {?} */ (i)));
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
        { type: Component, args: [{
                    selector: 'gallery',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <gallery-core [state]=\"galleryRef.state | async\"\n                  [config]=\"galleryRef.config | async\"\n                  (action)=\"onAction($event)\"\n                  (itemClick)=\"onItemClick($event)\"\n                  (thumbClick)=\"onThumbClick($event)\"\n                  (error)=\"onError($event)\"></gallery-core>\n    <ng-content></ng-content>\n  ",
                    styles: ["::ng-deep gallery-core[dotsPosition=top] gallery-dots{top:0}::ng-deep gallery-core[dotsPosition=bottom] gallery-dots{bottom:0}::ng-deep gallery-dots{margin:7px;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}::ng-deep .g-dot{cursor:pointer;z-index:20}::ng-deep .g-dot:hover .g-dot-inner{opacity:1}::ng-deep .g-dot-active .g-dot-inner{opacity:1;-webkit-transform:scale(1.5)!important;transform:scale(1.5)!important}::ng-deep .g-dot-inner{background-color:#fff;opacity:.6;width:30%;height:30%;border-radius:50%;box-shadow:0 0 1px #000;transition:.2s}::ng-deep .g-dot,::ng-deep .g-dot-inner,::ng-deep gallery-dots{display:flex;justify-content:center;align-items:center}::ng-deep .g-nav-next,::ng-deep .g-nav-prev{position:absolute;top:50%;width:30px;height:40px;cursor:pointer;z-index:999}::ng-deep .g-nav-next{right:.5em;-webkit-transform:translateY(-50%) perspective(1px);transform:translateY(-50%) perspective(1px)}::ng-deep .g-nav-prev{left:.5em;-webkit-transform:translateY(-50%) perspective(1px) scale(-1,-1);transform:translateY(-50%) perspective(1px) scale(-1,-1)}@media only screen and (max-width:480px){::ng-deep .g-nav-next{right:.2em}::ng-deep .g-nav-prev{left:.2em}}::ng-deep .g-items-container{height:100%}::ng-deep .g-slider{position:absolute;transition:transform .4s cubic-bezier(.5,0,.5,1);transition:transform .4s cubic-bezier(.5,0,.5,1),-webkit-transform .4s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-core[slidingDirection=horizontal] .g-slider{flex-direction:row}::ng-deep gallery-core[slidingDirection=vertical] .g-slider{flex-direction:column}::ng-deep gallery-thumbs{display:block;z-index:1;overflow:unset}::ng-deep .g-thumbs-container{position:relative;z-index:206;width:100%;height:100%;left:0;top:0;display:flex;overflow:unset}::ng-deep gallery-core[disableThumb=true] gallery-thumb{cursor:default}::ng-deep gallery-core[thumbPosition=bottom] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=top] gallery-thumbs .g-slider{flex-direction:row;top:0;left:50%}::ng-deep gallery-core[thumbPosition=bottom] gallery-thumb,::ng-deep gallery-core[thumbPosition=top] gallery-thumb{padding:1px 0 1px 1px}::ng-deep gallery-core[thumbPosition=left] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=right] gallery-thumbs .g-slider{flex-direction:column;top:50%;left:0}::ng-deep gallery-core[thumbPosition=left] gallery-thumb,::ng-deep gallery-core[thumbPosition=right] gallery-thumb{padding:0 1px 1px}::ng-deep gallery-core[thumbPosition=top]{flex-direction:column}::ng-deep gallery-core[thumbPosition=left]{flex-direction:row}::ng-deep gallery-core[thumbPosition=right]{flex-direction:row-reverse}::ng-deep gallery-core[thumbPosition=bottom]{flex-direction:column-reverse}::ng-deep gallery-thumb.g-active-thumb .g-thumb-loading{background-color:#464646}::ng-deep .g-thumb-loading{position:relative;overflow:hidden;height:100%;background-color:#262626}::ng-deep .g-thumb-loading::before{content:\"\";position:absolute;top:0;right:0;bottom:0;left:50%;z-index:1;width:500%;margin-left:-250%;-webkit-animation:.8s linear infinite phAnimation;animation:.8s linear infinite phAnimation;background:linear-gradient(to right,rgba(255,255,255,0) 46%,rgba(255,255,255,.35) 50%,rgba(255,255,255,0) 54%) 50% 50%}@-webkit-keyframes phAnimation{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}100%{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}@keyframes phAnimation{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}100%{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}::ng-deep gallery-core[counterPosition=top] .g-counter{top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}::ng-deep gallery-core[counterPosition=bottom] .g-counter{bottom:0;border-top-left-radius:4px;border-top-right-radius:4px}::ng-deep .g-counter{z-index:50;position:absolute;left:50%;-webkit-transform:translateX(-50%) perspective(1px);transform:translateX(-50%) perspective(1px);font-size:12px;padding:4px 10px;color:#fff;background-color:rgba(0,0,0,.5)}::ng-deep gallery[gallerize] gallery-item{cursor:pointer}::ng-deep gallery-item,::ng-deep gallery-thumb{position:relative;height:100%;width:100%;display:block;overflow:hidden}::ng-deep gallery-item h2,::ng-deep gallery-item h4,::ng-deep gallery-thumb h2,::ng-deep gallery-thumb h4{color:coral;margin:0}::ng-deep gallery-item h2,::ng-deep gallery-thumb h2{font-size:3.5em;margin-bottom:.3em}::ng-deep gallery-item h4,::ng-deep gallery-thumb h4{font-size:1.6em}::ng-deep gallery-item{z-index:10}::ng-deep gallery-item iframe,::ng-deep gallery-item video{position:absolute;width:100%;height:100%}::ng-deep gallery-thumb{opacity:.5;cursor:pointer;transition:opacity .3s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-thumb.g-active-thumb{opacity:1}::ng-deep .g-image-item{background-position:center center;background-repeat:no-repeat;background-size:cover;width:100%;height:100%}::ng-deep .g-image-error-message,::ng-deep .g-template{position:absolute;z-index:10;left:0;top:0;right:0;bottom:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}::ng-deep .g-loading{position:absolute;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);left:50%;top:50%;width:80px;height:80px}::ng-deep gallery-core[imageSize=contain] gallery-slider .g-image-item{background-size:contain}::ng-deep gallery-image{display:flex;justify-content:center;align-items:center;height:100%}::ng-deep gallery{position:relative;z-index:1;overflow:hidden;display:block;height:500px;background-color:#000}::ng-deep gallery *{box-sizing:border-box}::ng-deep gallery,::ng-deep gallery-core{position:relative;overflow:hidden}::ng-deep .g-box,::ng-deep .g-slider,::ng-deep gallery-core{display:flex;height:100%;width:100%}::ng-deep gallery[fluid]{-webkit-transform:translateX(-50vw);transform:translateX(-50vw);width:100vw;left:50%}::ng-deep gallery[fluid][fluid=false]{-webkit-transform:none;transform:none;width:initial;left:initial}::ng-deep .g-no-transition{transition:unset!important}::ng-deep .g-box,::ng-deep gallery-slider{overflow:hidden;position:relative;display:flex;flex-direction:column;flex:1;order:1;height:100%}::ng-deep .g-btn-close svg,::ng-deep gallery-nav svg{width:100%;height:100%;-webkit-filter:drop-shadow(0 0 1px #000);filter:drop-shadow(0 0 1px #000);transition:opacity .2s linear;opacity:.6}::ng-deep .g-btn-close svg:hover,::ng-deep gallery-nav svg:hover{opacity:1}"]
                }] }
    ];
    /** @nocollapse */
    GalleryComponent.ctorParameters = function () { return [
        { type: Gallery }
    ]; };
    GalleryComponent.propDecorators = {
        id: [{ type: Input }],
        items: [{ type: Input }],
        nav: [{ type: Input }],
        dots: [{ type: Input }],
        loop: [{ type: Input }],
        thumb: [{ type: Input }],
        zoomOut: [{ type: Input }],
        counter: [{ type: Input }],
        dotsSize: [{ type: Input }],
        autoPlay: [{ type: Input }],
        gestures: [{ type: Input }],
        thumbWidth: [{ type: Input }],
        thumbHeight: [{ type: Input }],
        disableThumb: [{ type: Input }],
        panSensitivity: [{ type: Input }],
        playerInterval: [{ type: Input }],
        itemTemplate: [{ type: Input }],
        thumbTemplate: [{ type: Input }],
        thumbMode: [{ type: Input }],
        imageSize: [{ type: Input }],
        dotsPosition: [{ type: Input }],
        counterPosition: [{ type: Input }],
        slidingDirection: [{ type: Input }],
        loadingStrategy: [{ type: Input }],
        thumbPosition: [{ type: Input }],
        destroyRef: [{ type: Input }],
        skipInitConfig: [{ type: Input }],
        itemClick: [{ type: Output }],
        thumbClick: [{ type: Output }],
        playingChange: [{ type: Output }],
        indexChange: [{ type: Output }],
        itemsChange: [{ type: Output }],
        error: [{ type: Output }]
    };
    return GalleryComponent;
}());
export { GalleryComponent };
if (false) {
    /** @type {?} */
    GalleryComponent.prototype.galleryRef;
    /** @type {?} */
    GalleryComponent.prototype.id;
    /** @type {?} */
    GalleryComponent.prototype.items;
    /** @type {?} */
    GalleryComponent.prototype.nav;
    /** @type {?} */
    GalleryComponent.prototype.dots;
    /** @type {?} */
    GalleryComponent.prototype.loop;
    /** @type {?} */
    GalleryComponent.prototype.thumb;
    /** @type {?} */
    GalleryComponent.prototype.zoomOut;
    /** @type {?} */
    GalleryComponent.prototype.counter;
    /** @type {?} */
    GalleryComponent.prototype.dotsSize;
    /** @type {?} */
    GalleryComponent.prototype.autoPlay;
    /** @type {?} */
    GalleryComponent.prototype.gestures;
    /** @type {?} */
    GalleryComponent.prototype.thumbWidth;
    /** @type {?} */
    GalleryComponent.prototype.thumbHeight;
    /** @type {?} */
    GalleryComponent.prototype.disableThumb;
    /** @type {?} */
    GalleryComponent.prototype.panSensitivity;
    /** @type {?} */
    GalleryComponent.prototype.playerInterval;
    /** @type {?} */
    GalleryComponent.prototype.itemTemplate;
    /** @type {?} */
    GalleryComponent.prototype.thumbTemplate;
    /** @type {?} */
    GalleryComponent.prototype.thumbMode;
    /** @type {?} */
    GalleryComponent.prototype.imageSize;
    /** @type {?} */
    GalleryComponent.prototype.dotsPosition;
    /** @type {?} */
    GalleryComponent.prototype.counterPosition;
    /** @type {?} */
    GalleryComponent.prototype.slidingDirection;
    /** @type {?} */
    GalleryComponent.prototype.loadingStrategy;
    /** @type {?} */
    GalleryComponent.prototype.thumbPosition;
    /**
     * Destroy gallery ref on component destroy event
     * @type {?}
     */
    GalleryComponent.prototype.destroyRef;
    /**
     * Skip initializing the config with components inputs (Lightbox mode)
     * @type {?}
     */
    GalleryComponent.prototype.skipInitConfig;
    /** @type {?} */
    GalleryComponent.prototype.itemClick;
    /** @type {?} */
    GalleryComponent.prototype.thumbClick;
    /** @type {?} */
    GalleryComponent.prototype.playingChange;
    /** @type {?} */
    GalleryComponent.prototype.indexChange;
    /** @type {?} */
    GalleryComponent.prototype.itemsChange;
    /** @type {?} */
    GalleryComponent.prototype.error;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._itemClick$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._thumbClick$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._itemChange$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._indexChange$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._playingChange$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._playerListener$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._gallery;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dhbGxlcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBS04sV0FBVyxFQUNYLFlBQVksRUFDWix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBb0IsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RjtJQWlFRSwwQkFBb0IsUUFBaUI7UUFBakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQTlDNUIsUUFBRyxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN4QyxTQUFJLEdBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzFDLFNBQUksR0FBWSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDMUMsVUFBSyxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM1QyxZQUFPLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9DLFlBQU8sR0FBWSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDaEQsYUFBUSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqRCxhQUFRLEdBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMs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bnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3Vic2NyaXB0aW9uTGlrZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR2FsbGVyeSB9IGZyb20gJy4uL3NlcnZpY2VzL2dhbGxlcnkuc2VydmljZSc7XG5pbXBvcnQgeyBHYWxsZXJ5UmVmIH0gZnJvbSAnLi4vc2VydmljZXMvZ2FsbGVyeS1yZWYnO1xuaW1wb3J0IHsgR2FsbGVyeUVycm9yLCBHYWxsZXJ5SXRlbSwgR2FsbGVyeVN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL2dhbGxlcnkubW9kZWwnO1xuaW1wb3J0IHsgSWZyYW1lSXRlbSwgSW1hZ2VJdGVtLCBWaWRlb0l0ZW0sIFlvdXR1YmVJdGVtIH0gZnJvbSAnLi90ZW1wbGF0ZXMvaXRlbXMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlVXJsczogWycuLi9zdHlsZXMvZ2FsbGVyeS5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGdhbGxlcnktY29yZSBbc3RhdGVdPVwiZ2FsbGVyeVJlZi5zdGF0ZSB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiZ2FsbGVyeVJlZi5jb25maWcgfCBhc3luY1wiXG4gICAgICAgICAgICAgICAgICAoYWN0aW9uKT1cIm9uQWN0aW9uKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgKGl0ZW1DbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICh0aHVtYkNsaWNrKT1cIm9uVGh1bWJDbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJvbkVycm9yKCRldmVudClcIj48L2dhbGxlcnktY29yZT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgR2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIGdhbGxlcnlSZWY6IEdhbGxlcnlSZWY7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGl0ZW1zOiBHYWxsZXJ5SXRlbSBbXTtcbiAgQElucHV0KCkgbmF2OiBib29sZWFuID0gdGhpcy5fZ2FsbGVyeS5jb25maWcubmF2O1xuICBASW5wdXQoKSBkb3RzOiBib29sZWFuID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuZG90cztcbiAgQElucHV0KCkgbG9vcDogYm9vbGVhbiA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLmxvb3A7XG4gIEBJbnB1dCgpIHRodW1iOiBib29sZWFuID0gdGhpcy5fZ2FsbGVyeS5jb25maWcudGh1bWI7XG4gIEBJbnB1dCgpIHpvb21PdXQ6IG51bWJlciA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLnpvb21PdXQ7XG4gIEBJbnB1dCgpIGNvdW50ZXI6IGJvb2xlYW4gPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy5jb3VudGVyO1xuICBASW5wdXQoKSBkb3RzU2l6ZTogbnVtYmVyID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuZG90c1NpemU7XG4gIEBJbnB1dCgpIGF1dG9QbGF5OiBib29sZWFuID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuYXV0b1BsYXk7XG4gIEBJbnB1dCgpIGdlc3R1cmVzOiBib29sZWFuID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuZ2VzdHVyZXM7XG4gIEBJbnB1dCgpIHRodW1iV2lkdGg6IG51bWJlciA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLnRodW1iV2lkdGg7XG4gIEBJbnB1dCgpIHRodW1iSGVpZ2h0OiBudW1iZXIgPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy50aHVtYkhlaWdodDtcbiAgQElucHV0KCkgZGlzYWJsZVRodW1iOiBib29sZWFuID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuZGlzYWJsZVRodW1iO1xuICBASW5wdXQoKSBwYW5TZW5zaXRpdml0eTogbnVtYmVyID0gdGhpcy5fZ2FsbGVyeS5jb25maWcucGFuU2Vuc2l0aXZpdHk7XG4gIEBJbnB1dCgpIHBsYXllckludGVydmFsOiBudW1iZXIgPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy5wbGF5ZXJJbnRlcnZhbDtcbiAgQElucHV0KCkgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuaXRlbVRlbXBsYXRlO1xuICBASW5wdXQoKSB0aHVtYlRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gdGhpcy5fZ2FsbGVyeS5jb25maWcudGh1bWJUZW1wbGF0ZTtcbiAgQElucHV0KCkgdGh1bWJNb2RlOiAnc3RyaWN0JyB8ICdmcmVlJyA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLnRodW1iTW9kZTtcbiAgQElucHV0KCkgaW1hZ2VTaXplOiAnY292ZXInIHwgJ2NvbnRhaW4nID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuaW1hZ2VTaXplO1xuICBASW5wdXQoKSBkb3RzUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy5kb3RzUG9zaXRpb247XG4gIEBJbnB1dCgpIGNvdW50ZXJQb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLmNvdW50ZXJQb3NpdGlvbjtcbiAgQElucHV0KCkgc2xpZGluZ0RpcmVjdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLnNsaWRpbmdEaXJlY3Rpb247XG4gIEBJbnB1dCgpIGxvYWRpbmdTdHJhdGVneTogJ3ByZWxvYWQnIHwgJ2xhenknIHwgJ2RlZmF1bHQnID0gdGhpcy5fZ2FsbGVyeS5jb25maWcubG9hZGluZ1N0cmF0ZWd5O1xuICBASW5wdXQoKSB0aHVtYlBvc2l0aW9uOiAndG9wJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYm90dG9tJyA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLnRodW1iUG9zaXRpb247XG5cbiAgLy8gSW5wdXRzIHVzZWQgYnkgdGhlIGxpZ2h0Ym94XG5cbiAgLyoqIERlc3Ryb3kgZ2FsbGVyeSByZWYgb24gY29tcG9uZW50IGRlc3Ryb3kgZXZlbnQgKi9cbiAgQElucHV0KCkgZGVzdHJveVJlZiA9IHRydWU7XG5cbiAgLyoqIFNraXAgaW5pdGlhbGl6aW5nIHRoZSBjb25maWcgd2l0aCBjb21wb25lbnRzIGlucHV0cyAoTGlnaHRib3ggbW9kZSkgKi9cbiAgQElucHV0KCkgc2tpcEluaXRDb25maWcgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSB0aHVtYkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBwbGF5aW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxHYWxsZXJ5U3RhdGU+KCk7XG4gIEBPdXRwdXQoKSBpbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8R2FsbGVyeVN0YXRlPigpO1xuICBAT3V0cHV0KCkgaXRlbXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEdhbGxlcnlTdGF0ZT4oKTtcbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxHYWxsZXJ5RXJyb3I+KCk7XG5cbiAgcHJpdmF0ZSBfaXRlbUNsaWNrJDogU3Vic2NyaXB0aW9uTGlrZSA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfdGh1bWJDbGljayQ6IFN1YnNjcmlwdGlvbkxpa2UgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2l0ZW1DaGFuZ2UkOiBTdWJzY3JpcHRpb25MaWtlID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9pbmRleENoYW5nZSQ6IFN1YnNjcmlwdGlvbkxpa2UgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX3BsYXlpbmdDaGFuZ2UkOiBTdWJzY3JpcHRpb25MaWtlID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9wbGF5ZXJMaXN0ZW5lciQ6IFN1YnNjcmlwdGlvbkxpa2UgPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZ2FsbGVyeTogR2FsbGVyeSkge1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hdjogdGhpcy5uYXYsXG4gICAgICBkb3RzOiB0aGlzLmRvdHMsXG4gICAgICBsb29wOiB0aGlzLmxvb3AsXG4gICAgICB0aHVtYjogdGhpcy50aHVtYixcbiAgICAgIHpvb21PdXQ6IHRoaXMuem9vbU91dCxcbiAgICAgIGNvdW50ZXI6IHRoaXMuY291bnRlcixcbiAgICAgIGF1dG9QbGF5OiB0aGlzLmF1dG9QbGF5LFxuICAgICAgZ2VzdHVyZXM6IHRoaXMuZ2VzdHVyZXMsXG4gICAgICBkb3RzU2l6ZTogdGhpcy5kb3RzU2l6ZSxcbiAgICAgIGltYWdlU2l6ZTogdGhpcy5pbWFnZVNpemUsXG4gICAgICB0aHVtYk1vZGU6IHRoaXMudGh1bWJNb2RlLFxuICAgICAgdGh1bWJXaWR0aDogdGhpcy50aHVtYldpZHRoLFxuICAgICAgdGh1bWJIZWlnaHQ6IHRoaXMudGh1bWJIZWlnaHQsXG4gICAgICBkaXNhYmxlVGh1bWI6IHRoaXMuZGlzYWJsZVRodW1iLFxuICAgICAgZG90c1Bvc2l0aW9uOiB0aGlzLmRvdHNQb3NpdGlvbixcbiAgICAgIGl0ZW1UZW1wbGF0ZTogdGhpcy5pdGVtVGVtcGxhdGUsXG4gICAgICB0aHVtYlRlbXBsYXRlOiB0aGlzLnRodW1iVGVtcGxhdGUsXG4gICAgICB0aHVtYlBvc2l0aW9uOiB0aGlzLnRodW1iUG9zaXRpb24sXG4gICAgICBwYW5TZW5zaXRpdml0eTogdGhpcy5wYW5TZW5zaXRpdml0eSxcbiAgICAgIHBsYXllckludGVydmFsOiB0aGlzLnBsYXllckludGVydmFsLFxuICAgICAgY291bnRlclBvc2l0aW9uOiB0aGlzLmNvdW50ZXJQb3NpdGlvbixcbiAgICAgIGxvYWRpbmdTdHJhdGVneTogdGhpcy5sb2FkaW5nU3RyYXRlZ3ksXG4gICAgICBzbGlkaW5nRGlyZWN0aW9uOiB0aGlzLnNsaWRpbmdEaXJlY3Rpb25cbiAgICB9O1xuICB9XG5cbiAgb25BY3Rpb24oaTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgdGhpcy5nYWxsZXJ5UmVmLm5leHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwcmV2JzpcbiAgICAgICAgdGhpcy5nYWxsZXJ5UmVmLnByZXYoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmdhbGxlcnlSZWYuc2V0KDxudW1iZXI+aSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmdhbGxlcnlSZWYpIHtcbiAgICAgIHRoaXMuZ2FsbGVyeVJlZi5zZXRDb25maWcodGhpcy5nZXRDb25maWcoKSk7XG5cbiAgICAgIGlmIChjaGFuZ2VzLml0ZW1zICYmIGNoYW5nZXMuaXRlbXMuY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzLml0ZW1zLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgdGhpcy5sb2FkKHRoaXMuaXRlbXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIEdldCBnYWxsZXJ5IGluc3RhbmNlIGJ5IGlkXG4gICAgaWYgKHRoaXMuc2tpcEluaXRDb25maWcpIHtcbiAgICAgIHRoaXMuZ2FsbGVyeVJlZiA9IHRoaXMuX2dhbGxlcnkucmVmKHRoaXMuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdhbGxlcnlSZWYgPSB0aGlzLl9nYWxsZXJ5LnJlZih0aGlzLmlkLCB0aGlzLmdldENvbmZpZygpKTtcbiAgICB9XG5cbiAgICAvLyBMb2FkIGdhbGxlcnkgaXRlbXNcbiAgICB0aGlzLmxvYWQodGhpcy5pdGVtcyk7XG5cbiAgICAvLyBBY3RpdmF0ZSBwbGF5ZXIgbGlzdGVuZXJcbiAgICB0aGlzLl9wbGF5ZXJMaXN0ZW5lciQgPSB0aGlzLmdhbGxlcnlSZWYuYWN0aXZhdGVQbGF5ZXIoKS5zdWJzY3JpYmUoKTtcblxuICAgIC8vIFN1YnNjcmliZXMgdG8gZXZlbnRzIG9uIGRlbWFuZFxuICAgIGlmICh0aGlzLmluZGV4Q2hhbmdlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2luZGV4Q2hhbmdlJCA9IHRoaXMuZ2FsbGVyeVJlZi5pbmRleENoYW5nZWQuc3Vic2NyaWJlKChzdGF0ZTogR2FsbGVyeVN0YXRlKSA9PiB0aGlzLmluZGV4Q2hhbmdlLmVtaXQoc3RhdGUpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXRlbXNDaGFuZ2Uub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5faXRlbUNoYW5nZSQgPSB0aGlzLmdhbGxlcnlSZWYuaXRlbXNDaGFuZ2VkLnN1YnNjcmliZSgoc3RhdGU6IEdhbGxlcnlTdGF0ZSkgPT4gdGhpcy5pdGVtc0NoYW5nZS5lbWl0KHN0YXRlKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnBsYXlpbmdDaGFuZ2Uub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcGxheWluZ0NoYW5nZSQgPSB0aGlzLmdhbGxlcnlSZWYucGxheWluZ0NoYW5nZWQuc3Vic2NyaWJlKChzdGF0ZTogR2FsbGVyeVN0YXRlKSA9PiB0aGlzLnBsYXlpbmdDaGFuZ2UuZW1pdChzdGF0ZSkpO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IHBsYXlpbmcgaWYgYXV0by1wbGF5IGlzIHNldCB0byB0cnVlXG4gICAgaWYgKHRoaXMuYXV0b1BsYXkpIHtcbiAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2l0ZW1DbGljayQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl90aHVtYkNsaWNrJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2l0ZW1DaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5faW5kZXhDaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fcGxheWluZ0NoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9wbGF5ZXJMaXN0ZW5lciQudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5kZXN0cm95UmVmKSB7XG4gICAgICB0aGlzLmdhbGxlcnlSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uSXRlbUNsaWNrKGk6IG51bWJlcikge1xuICAgIHRoaXMuaXRlbUNsaWNrLmVtaXQoaSk7XG4gICAgdGhpcy5nYWxsZXJ5UmVmLml0ZW1DbGljay5uZXh0KGkpO1xuICB9XG5cbiAgb25UaHVtYkNsaWNrKGk6IG51bWJlcikge1xuICAgIHRoaXMuZ2FsbGVyeVJlZi5zZXQoaSk7XG4gICAgdGhpcy50aHVtYkNsaWNrLmVtaXQoaSk7XG4gICAgdGhpcy5nYWxsZXJ5UmVmLnRodW1iQ2xpY2submV4dChpKTtcbiAgfVxuXG4gIG9uRXJyb3IoZXJyOiBHYWxsZXJ5RXJyb3IpIHtcbiAgICB0aGlzLmVycm9yLmVtaXQoZXJyKTtcbiAgICB0aGlzLmdhbGxlcnlSZWYuZXJyb3IubmV4dChlcnIpO1xuICB9XG5cbiAgbG9hZChpdGVtczogR2FsbGVyeUl0ZW1bXSkge1xuICAgIHRoaXMuZ2FsbGVyeVJlZi5sb2FkKGl0ZW1zKTtcbiAgfVxuXG4gIGFkZChpdGVtOiBHYWxsZXJ5SXRlbSwgYWN0aXZlPzogYm9vbGVhbikge1xuICAgIHRoaXMuZ2FsbGVyeVJlZi5hZGQoaXRlbSwgYWN0aXZlKTtcbiAgfVxuXG4gIGFkZEltYWdlKGRhdGE6IGFueSwgYWN0aXZlPzogYm9vbGVhbikge1xuICAgIHRoaXMuYWRkKG5ldyBJbWFnZUl0ZW0oZGF0YSksIGFjdGl2ZSk7XG4gIH1cblxuICBhZGRWaWRlbyhkYXRhOiBhbnksIGFjdGl2ZT86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFkZChuZXcgVmlkZW9JdGVtKGRhdGEpLCBhY3RpdmUpO1xuICB9XG5cbiAgYWRkSWZyYW1lKGRhdGE6IGFueSwgYWN0aXZlPzogYm9vbGVhbikge1xuICAgIHRoaXMuYWRkKG5ldyBJZnJhbWVJdGVtKGRhdGEpLCBhY3RpdmUpO1xuICB9XG5cbiAgYWRkWW91dHViZShkYXRhOiBhbnksIGFjdGl2ZT86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFkZChuZXcgWW91dHViZUl0ZW0oZGF0YSksIGFjdGl2ZSk7XG4gIH1cblxuICByZW1vdmUoaTogbnVtYmVyKSB7XG4gICAgdGhpcy5nYWxsZXJ5UmVmLnJlbW92ZShpKTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgdGhpcy5nYWxsZXJ5UmVmLm5leHQoKTtcbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgdGhpcy5nYWxsZXJ5UmVmLnByZXYoKTtcbiAgfVxuXG4gIHNldChpOiBudW1iZXIpIHtcbiAgICB0aGlzLmdhbGxlcnlSZWYuc2V0KGkpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5nYWxsZXJ5UmVmLnJlc2V0KCk7XG4gIH1cblxuICBwbGF5KGludGVydmFsPzogbnVtYmVyKSB7XG4gICAgdGhpcy5nYWxsZXJ5UmVmLnBsYXkoaW50ZXJ2YWwpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLmdhbGxlcnlSZWYuc3RvcCgpO1xuICB9XG59XG4iXX0=