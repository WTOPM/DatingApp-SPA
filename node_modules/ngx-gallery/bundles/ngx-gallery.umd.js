(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
	(factory((global['ngx-gallery'] = {}),global.core,global.common,global.platformBrowser));
}(this, (function (exports,core,common,platformBrowser) { 'use strict';

class NgxGalleryActionComponent {
    constructor() {
        this.disabled = false;
        this.titleText = '';
        this.onClick = new core.EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleClick(event) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }
        event.stopPropagation();
        event.preventDefault();
    }
}
NgxGalleryActionComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-gallery-action',
                template: `
        <div class="ngx-gallery-icon" [class.ngx-gallery-icon-disabled]="disabled"
            aria-hidden="true"
            title="{{ titleText }}"
            (click)="handleClick($event)">
                <i class="ngx-gallery-icon-content {{ icon }}"></i>
        </div>`,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            },] },
];
/**
 * @nocollapse
 */
NgxGalleryActionComponent.ctorParameters = () => [];
NgxGalleryActionComponent.propDecorators = {
    'icon': [{ type: core.Input },],
    'disabled': [{ type: core.Input },],
    'titleText': [{ type: core.Input },],
    'onClick': [{ type: core.Output },],
};

class NgxGalleryArrowsComponent {
    constructor() {
        this.onPrevClick = new core.EventEmitter();
        this.onNextClick = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    handlePrevClick() {
        this.onPrevClick.emit();
    }
    /**
     * @return {?}
     */
    handleNextClick() {
        this.onNextClick.emit();
    }
}
NgxGalleryArrowsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-gallery-arrows',
                template: `
        <div class="ngx-gallery-arrow-wrapper ngx-gallery-arrow-left">
            <div class="ngx-gallery-icon ngx-gallery-arrow" aria-hidden="true" (click)="handlePrevClick()" [class.ngx-gallery-disabled]="prevDisabled">
                <i class="ngx-gallery-icon-content {{arrowPrevIcon}}"></i>
            </div>
        </div>
        <div class="ngx-gallery-arrow-wrapper ngx-gallery-arrow-right">
            <div class="ngx-gallery-icon ngx-gallery-arrow" aria-hidden="true" (click)="handleNextClick()" [class.ngx-gallery-disabled]="nextDisabled">
                <i class="ngx-gallery-icon-content {{arrowNextIcon}}"></i>
            </div>
        </div>
    `,
                styles: [".ngx-gallery-arrow-wrapper { position: absolute; height: 100%; width: 1px; display: table; z-index: 2000; table-layout: fixed; } .ngx-gallery-arrow-left { left: 0px; } .ngx-gallery-arrow-right { right: 0px; } .ngx-gallery-arrow { top: 50%; transform: translateY(-50%); cursor: pointer; } .ngx-gallery-arrow.ngx-gallery-disabled { opacity: 0.6; cursor: default; } .ngx-gallery-arrow-left .ngx-gallery-arrow { left: 10px; } .ngx-gallery-arrow-right .ngx-gallery-arrow { right: 10px; } "]
            },] },
];
/**
 * @nocollapse
 */
NgxGalleryArrowsComponent.ctorParameters = () => [];
NgxGalleryArrowsComponent.propDecorators = {
    'prevDisabled': [{ type: core.Input },],
    'nextDisabled': [{ type: core.Input },],
    'arrowPrevIcon': [{ type: core.Input },],
    'arrowNextIcon': [{ type: core.Input },],
    'onPrevClick': [{ type: core.Output },],
    'onNextClick': [{ type: core.Output },],
};

class NgxGalleryBulletsComponent {
    constructor() {
        this.active = 0;
        this.onChange = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    getBullets() {
        return Array(this.count);
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    handleChange(event, index) {
        this.onChange.emit(index);
    }
}
NgxGalleryBulletsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-gallery-bullets',
                template: `
        <div class="ngx-gallery-bullet" *ngFor="let bullet of getBullets(); let i = index;" (click)="handleChange($event, i)" [ngClass]="{ 'ngx-gallery-active': i == active }"></div>
    `,
                styles: [":host { position: absolute; z-index: 2000; display: inline-flex; left: 50%; transform: translateX(-50%); bottom: 0px; padding: 10px; } .ngx-gallery-bullet { width: 10px; height: 10px; border-radius: 50%; cursor: pointer; background: white; } .ngx-gallery-bullet:not(:first-child) { margin-left: 5px; } .ngx-gallery-bullet:hover, .ngx-gallery-bullet.ngx-gallery-active { background: black; } "]
            },] },
];
/**
 * @nocollapse
 */
NgxGalleryBulletsComponent.ctorParameters = () => [];
NgxGalleryBulletsComponent.propDecorators = {
    'count': [{ type: core.Input },],
    'active': [{ type: core.Input },],
    'onChange': [{ type: core.Output },],
};

class NgxGalleryHelperService {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.swipeHandlers = new Map();
    }
    /**
     * @param {?} status
     * @param {?} element
     * @param {?} id
     * @param {?} nextHandler
     * @param {?} prevHandler
     * @return {?}
     */
    manageSwipe(status, element, id, nextHandler, prevHandler) {
        const /** @type {?} */ handlers = this.getSwipeHandlers(id);
        // swipeleft and swiperight are available only if hammerjs is included
        try {
            if (status && !handlers) {
                this.swipeHandlers.set(id, [
                    this.renderer.listen(element.nativeElement, 'swipeleft', () => nextHandler()),
                    this.renderer.listen(element.nativeElement, 'swiperight', () => prevHandler())
                ]);
            }
            else if (!status && handlers) {
                handlers.map((handler) => handler());
                this.removeSwipeHandlers(id);
            }
        }
        catch (e) { }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    validateUrl(url) {
        if (url.replace) {
            return url.replace(new RegExp(' ', 'g'), '%20')
                .replace(new RegExp('\'', 'g'), '%27');
        }
        else {
            return url;
        }
    }
    /**
     * @param {?} image
     * @return {?}
     */
    getBackgroundUrl(image) {
        return 'url(\'' + this.validateUrl(image) + '\')';
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getSwipeHandlers(id) {
        return this.swipeHandlers.get(id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    removeSwipeHandlers(id) {
        this.swipeHandlers.delete(id);
    }
}
NgxGalleryHelperService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
NgxGalleryHelperService.ctorParameters = () => [
    { type: core.Renderer, },
];

class NgxGalleryAnimation {
}
NgxGalleryAnimation.Fade = 'fade';
NgxGalleryAnimation.Slide = 'slide';
NgxGalleryAnimation.Rotate = 'rotate';
NgxGalleryAnimation.Zoom = 'zoom';

class NgxGalleryImageComponent {
    /**
     * @param {?} sanitization
     * @param {?} elementRef
     * @param {?} helperService
     */
    constructor(sanitization, elementRef, helperService) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.onClick = new core.EventEmitter();
        this.onActiveChange = new core.EventEmitter();
        this.canChangeImage = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
        }
        if (this.autoPlay) {
            this.startAutoPlay();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'image', () => this.showNext(), () => this.showPrev());
        }
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        if (this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
        }
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        if (this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
        }
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    reset(index) {
        this.selectedIndex = index;
    }
    /**
     * @return {?}
     */
    getImages() {
        if (!this.images) {
            return [];
        }
        if (this.lazyLoading) {
            let /** @type {?} */ indexes = [this.selectedIndex];
            let /** @type {?} */ prevIndex = this.selectedIndex - 1;
            if (prevIndex === -1 && this.infinityMove) {
                indexes.push(this.images.length - 1);
            }
            else if (prevIndex >= 0) {
                indexes.push(prevIndex);
            }
            let /** @type {?} */ nextIndex = this.selectedIndex + 1;
            if (nextIndex == this.images.length && this.infinityMove) {
                indexes.push(0);
            }
            else if (nextIndex < this.images.length) {
                indexes.push(nextIndex);
            }
            return this.images.filter((img, i) => indexes.indexOf(i) != -1);
        }
        else {
            return this.images;
        }
    }
    /**
     * @return {?}
     */
    startAutoPlay() {
        this.stopAutoPlay();
        this.timer = setInterval(() => {
            if (!this.showNext()) {
                this.selectedIndex = -1;
                this.showNext();
            }
        }, this.autoPlayInterval);
    }
    /**
     * @return {?}
     */
    stopAutoPlay() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    handleClick(event, index) {
        if (this.clickable) {
            this.onClick.emit(index);
            event.stopPropagation();
            event.preventDefault();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    show(index) {
        this.selectedIndex = index;
        this.onActiveChange.emit(this.selectedIndex);
        this.setChangeTimeout();
    }
    /**
     * @return {?}
     */
    showNext() {
        if (this.canShowNext() && this.canChangeImage) {
            this.selectedIndex++;
            if (this.selectedIndex === this.images.length) {
                this.selectedIndex = 0;
            }
            this.onActiveChange.emit(this.selectedIndex);
            this.setChangeTimeout();
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    showPrev() {
        if (this.canShowPrev() && this.canChangeImage) {
            this.selectedIndex--;
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.images.length - 1;
            }
            this.onActiveChange.emit(this.selectedIndex);
            this.setChangeTimeout();
        }
    }
    /**
     * @return {?}
     */
    setChangeTimeout() {
        this.canChangeImage = false;
        let /** @type {?} */ timeout = 1000;
        if (this.animation === NgxGalleryAnimation.Slide
            || this.animation === NgxGalleryAnimation.Fade) {
            timeout = 500;
        }
        setTimeout(() => {
            this.canChangeImage = true;
        }, timeout);
    }
    /**
     * @return {?}
     */
    canShowNext() {
        if (this.images) {
            return this.infinityMove || this.selectedIndex < this.images.length - 1
                ? true : false;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    canShowPrev() {
        if (this.images) {
            return this.infinityMove || this.selectedIndex > 0 ? true : false;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} image
     * @return {?}
     */
    getSafeUrl(image) {
        return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
    }
}
NgxGalleryImageComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-gallery-image',
                template: `
        <div class="ngx-gallery-image-wrapper ngx-gallery-animation-{{animation}} ngx-gallery-image-size-{{size}}">
            <div class="ngx-gallery-image" *ngFor="let image of getImages(); let i = index;" [ngClass]="{ 'ngx-gallery-active': selectedIndex == image.index, 'ngx-gallery-inactive-left': selectedIndex > image.index, 'ngx-gallery-inactive-right': selectedIndex < image.index, 'ngx-gallery-clickable': clickable }" [style.background-image]="getSafeUrl(image.src)" (click)="handleClick($event, image.index)">
                <div class="ngx-gallery-icons-wrapper">
                    <ngx-gallery-action *ngFor="let action of actions" [icon]="action.icon" [disabled]="action.disabled" [titleText]="action.titleText" (onClick)="action.onClick($event, image.index)"></ngx-gallery-action>
                </div>
                <div class="ngx-gallery-image-text" *ngIf="showDescription && descriptions[image.index]" [innerHTML]="descriptions[image.index]" (click)="$event.stopPropagation()"></div>
            </div>
        </div>
        <ngx-gallery-bullets *ngIf="bullets" [count]="images.length" [active]="selectedIndex" (onChange)="show($event)"></ngx-gallery-bullets>
        <ngx-gallery-arrows class="ngx-gallery-image-size-{{size}}" *ngIf="arrows" (onPrevClick)="showPrev()" (onNextClick)="showNext()" [prevDisabled]="!canShowPrev()" [nextDisabled]="!canShowNext()" [arrowPrevIcon]="arrowPrevIcon" [arrowNextIcon]="arrowNextIcon"></ngx-gallery-arrows>
    `,
                styles: [":host { width: 100%; display: inline-block; position: relative; } .ngx-gallery-image-wrapper { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; overflow: hidden; } .ngx-gallery-image { background-position: center; background-repeat: no-repeat; height: 100%; width: 100%; position: absolute; top: 0px; } .ngx-gallery-image.ngx-gallery-active { z-index: 1000; } .ngx-gallery-image-size-cover .ngx-gallery-image { background-size: cover; } .ngx-gallery-image-size-contain .ngx-gallery-image { background-size: contain; } .ngx-gallery-animation-fade .ngx-gallery-image { left: 0px; opacity: 0; transition: 0.5s ease-in-out; } .ngx-gallery-animation-fade .ngx-gallery-image.ngx-gallery-active { opacity: 1; } .ngx-gallery-animation-slide .ngx-gallery-image { transition: 0.5s ease-in-out; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-active { left: 0px; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-left { left: -100%; } .ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-right { left: 100%; } .ngx-gallery-animation-rotate .ngx-gallery-image { transition: 1s ease; transform: scale(3.5, 3.5) rotate(90deg); left: 0px; opacity: 0; } .ngx-gallery-animation-rotate .ngx-gallery-image.ngx-gallery-active { transform: scale(1, 1) rotate(0deg); opacity: 1; } .ngx-gallery-animation-zoom .ngx-gallery-image { transition: 1s ease; transform: scale(2.5, 2.5); left: 0px; opacity: 0; } .ngx-gallery-animation-zoom .ngx-gallery-image.ngx-gallery-active { transform: scale(1, 1); opacity: 1; } .ngx-gallery-image-text { width: 100%; background: rgba(0, 0, 0, 0.7); padding: 10px; text-align: center; color: white; font-size: 16px; position: absolute; bottom: 0px; z-index: 10; } "]
            },] },
];
/**
 * @nocollapse
 */
NgxGalleryImageComponent.ctorParameters = () => [
    { type: platformBrowser.DomSanitizer, },
    { type: core.ElementRef, },
    { type: NgxGalleryHelperService, },
];
NgxGalleryImageComponent.propDecorators = {
    'images': [{ type: core.Input },],
    'clickable': [{ type: core.Input },],
    'selectedIndex': [{ type: core.Input },],
    'arrows': [{ type: core.Input },],
    'arrowsAutoHide': [{ type: core.Input },],
    'swipe': [{ type: core.Input },],
    'animation': [{ type: core.Input },],
    'size': [{ type: core.Input },],
    'arrowPrevIcon': [{ type: core.Input },],
    'arrowNextIcon': [{ type: core.Input },],
    'autoPlay': [{ type: core.Input },],
    'autoPlayInterval': [{ type: core.Input },],
    'autoPlayPauseOnHover': [{ type: core.Input },],
    'infinityMove': [{ type: core.Input },],
    'lazyLoading': [{ type: core.Input },],
    'actions': [{ type: core.Input },],
    'descriptions': [{ type: core.Input },],
    'showDescription': [{ type: core.Input },],
    'bullets': [{ type: core.Input },],
    'onClick': [{ type: core.Output },],
    'onActiveChange': [{ type: core.Output },],
    'onMouseEnter': [{ type: core.HostListener, args: ['mouseenter',] },],
    'onMouseLeave': [{ type: core.HostListener, args: ['mouseleave',] },],
};

class NgxGalleryOrder {
}
NgxGalleryOrder.Column = 1;
NgxGalleryOrder.Row = 2;
NgxGalleryOrder.Page = 3;

class NgxGalleryThumbnailsComponent {
    /**
     * @param {?} sanitization
     * @param {?} elementRef
     * @param {?} helperService
     */
    constructor(sanitization, elementRef, helperService) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.minStopIndex = 0;
        this.onActiveChange = new core.EventEmitter();
        this.index = 0;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['selectedIndex']) {
            this.validateIndex();
        }
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'thumbnails', () => this.moveRight(), () => this.moveLeft());
        }
        if (this.images) {
            this.remainingCountValue = this.images.length - (this.rows * this.columns);
        }
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        this.mouseenter = true;
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        this.mouseenter = false;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    reset(index) {
        this.selectedIndex = index;
        this.setDefaultPosition();
        this.index = 0;
        this.validateIndex();
    }
    /**
     * @return {?}
     */
    getImages() {
        if (!this.images) {
            return [];
        }
        if (this.remainingCount) {
            return this.images.slice(0, this.rows * this.columns);
        }
        else if (this.lazyLoading && this.order != NgxGalleryOrder.Row) {
            let /** @type {?} */ stopIndex = 0;
            if (this.order === NgxGalleryOrder.Column) {
                stopIndex = (this.index + this.columns + this.moveSize) * this.rows;
            }
            else if (this.order === NgxGalleryOrder.Page) {
                stopIndex = this.index + ((this.columns * this.rows) * 2);
            }
            if (stopIndex <= this.minStopIndex) {
                stopIndex = this.minStopIndex;
            }
            else {
                this.minStopIndex = stopIndex;
            }
            return this.images.slice(0, stopIndex);
        }
        else {
            return this.images;
        }
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    handleClick(event, index) {
        if (!this.hasLink(index)) {
            this.selectedIndex = index;
            this.onActiveChange.emit(index);
            event.stopPropagation();
            event.preventDefault();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    hasLink(index) {
        if (this.links && this.links.length && this.links[index])
            return true;
    }
    /**
     * @return {?}
     */
    moveRight() {
        if (this.canMoveRight()) {
            this.index += this.moveSize;
            let /** @type {?} */ maxIndex = this.getMaxIndex() - this.columns;
            if (this.index > maxIndex) {
                this.index = maxIndex;
            }
            this.setThumbnailsPosition();
        }
    }
    /**
     * @return {?}
     */
    moveLeft() {
        if (this.canMoveLeft()) {
            this.index -= this.moveSize;
            if (this.index < 0) {
                this.index = 0;
            }
            this.setThumbnailsPosition();
        }
    }
    /**
     * @return {?}
     */
    canMoveRight() {
        return this.index + this.columns < this.getMaxIndex() ? true : false;
    }
    /**
     * @return {?}
     */
    canMoveLeft() {
        return this.index !== 0 ? true : false;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getThumbnailLeft(index) {
        let /** @type {?} */ calculatedIndex;
        if (this.order === NgxGalleryOrder.Column) {
            calculatedIndex = Math.floor(index / this.rows);
        }
        else if (this.order === NgxGalleryOrder.Page) {
            calculatedIndex = (index % this.columns) + (Math.floor(index / (this.rows * this.columns)) * this.columns);
        }
        else if (this.order == NgxGalleryOrder.Row && this.remainingCount) {
            calculatedIndex = index % this.columns;
        }
        else {
            calculatedIndex = index % Math.ceil(this.images.length / this.rows);
        }
        return this.getThumbnailPosition(calculatedIndex, this.columns);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getThumbnailTop(index) {
        let /** @type {?} */ calculatedIndex;
        if (this.order === NgxGalleryOrder.Column) {
            calculatedIndex = index % this.rows;
        }
        else if (this.order === NgxGalleryOrder.Page) {
            calculatedIndex = Math.floor(index / this.columns) - (Math.floor(index / (this.rows * this.columns)) * this.rows);
        }
        else if (this.order == NgxGalleryOrder.Row && this.remainingCount) {
            calculatedIndex = Math.floor(index / this.columns);
        }
        else {
            calculatedIndex = Math.floor(index / Math.ceil(this.images.length / this.rows));
        }
        return this.getThumbnailPosition(calculatedIndex, this.rows);
    }
    /**
     * @return {?}
     */
    getThumbnailWidth() {
        return this.getThumbnailDimension(this.columns);
    }
    /**
     * @return {?}
     */
    getThumbnailHeight() {
        return this.getThumbnailDimension(this.rows);
    }
    /**
     * @return {?}
     */
    setThumbnailsPosition() {
        this.thumbnailsLeft = -((100 / this.columns) * this.index) + '%';
        this.thumbnailsMarginLeft = -((this.margin - (((this.columns - 1)
            * this.margin) / this.columns)) * this.index) + 'px';
    }
    /**
     * @return {?}
     */
    setDefaultPosition() {
        this.thumbnailsLeft = '0px';
        this.thumbnailsMarginLeft = '0px';
    }
    /**
     * @return {?}
     */
    canShowArrows() {
        if (this.remainingCount) {
            return false;
        }
        else if (this.arrows && this.images && this.images.length > this.getVisibleCount()
            && (!this.arrowsAutoHide || this.mouseenter)) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    validateIndex() {
        if (this.images) {
            let /** @type {?} */ newIndex;
            if (this.order === NgxGalleryOrder.Column) {
                newIndex = Math.floor(this.selectedIndex / this.rows);
            }
            else {
                newIndex = this.selectedIndex % Math.ceil(this.images.length / this.rows);
            }
            if (this.remainingCount) {
                newIndex = 0;
            }
            if (newIndex < this.index || newIndex >= this.index + this.columns) {
                const /** @type {?} */ maxIndex = this.getMaxIndex() - this.columns;
                this.index = newIndex > maxIndex ? maxIndex : newIndex;
                this.setThumbnailsPosition();
            }
        }
    }
    /**
     * @param {?} image
     * @return {?}
     */
    getSafeUrl(image) {
        return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
    }
    /**
     * @param {?} index
     * @param {?} count
     * @return {?}
     */
    getThumbnailPosition(index, count) {
        return this.getSafeStyle('calc(' + ((100 / count) * index) + '% + '
            + ((this.margin - (((count - 1) * this.margin) / count)) * index) + 'px)');
    }
    /**
     * @param {?} count
     * @return {?}
     */
    getThumbnailDimension(count) {
        if (this.margin !== 0) {
            return this.getSafeStyle('calc(' + (100 / count) + '% - '
                + (((count - 1) * this.margin) / count) + 'px)');
        }
        else {
            return this.getSafeStyle('calc(' + (100 / count) + '% + 1px)');
        }
    }
    /**
     * @return {?}
     */
    getMaxIndex() {
        if (this.order == NgxGalleryOrder.Page) {
            let /** @type {?} */ maxIndex = (Math.floor(this.images.length / this.getVisibleCount()) * this.columns);
            if (this.images.length % this.getVisibleCount() > this.columns) {
                maxIndex += this.columns;
            }
            else {
                maxIndex += this.images.length % this.getVisibleCount();
            }
            return maxIndex;
        }
        else {
            return Math.ceil(this.images.length / this.rows);
        }
    }
    /**
     * @return {?}
     */
    getVisibleCount() {
        return this.columns * this.rows;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getSafeStyle(value) {
        return this.sanitization.bypassSecurityTrustStyle(value);
    }
}
NgxGalleryThumbnailsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-gallery-thumbnails',
                template: `
    <div class="ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-{{size}}">
        <div class="ngx-gallery-thumbnails" [style.transform]="'translateX(' + thumbnailsLeft + ')'" [style.marginLeft]="thumbnailsMarginLeft">
            <a [href]="hasLink(i) ? links[i] : '#'" [target]="linkTarget" class="ngx-gallery-thumbnail" *ngFor="let image of getImages(); let i = index;" [style.background-image]="getSafeUrl(image)" (click)="handleClick($event, i)" [style.width]="getThumbnailWidth()" [style.height]="getThumbnailHeight()" [style.left]="getThumbnailLeft(i)" [style.top]="getThumbnailTop(i)" [ngClass]="{ 'ngx-gallery-active': i == selectedIndex, 'ngx-gallery-clickable': clickable }" [attr.aria-label]="labels[i]">
                <div class="ngx-gallery-icons-wrapper">
                    <ngx-gallery-action *ngFor="let action of actions" [icon]="action.icon" [disabled]="action.disabled" [titleText]="action.titleText" (onClick)="action.onClick($event, i)"></ngx-gallery-action>
                </div>
                <div class="ngx-gallery-remaining-count-overlay" *ngIf="remainingCount && remainingCountValue && (i == (rows * columns) - 1)">
                    <span class="ngx-gallery-remaining-count">+{{remainingCountValue}}</span>
                </div>
            </a>
        </div>
    </div>
    <ngx-gallery-arrows *ngIf="canShowArrows()" (onPrevClick)="moveLeft()" (onNextClick)="moveRight()" [prevDisabled]="!canMoveLeft()" [nextDisabled]="!canMoveRight()" [arrowPrevIcon]="arrowPrevIcon" [arrowNextIcon]="arrowNextIcon"></ngx-gallery-arrows>
    `,
                styles: [":host { width: 100%; display: inline-block; position: relative; } .ngx-gallery-thumbnails-wrapper { width: 100%; height: 100%; position: absolute; overflow: hidden; } .ngx-gallery-thumbnails { height: 100%; width: 100%; position: absolute; left: 0px; transform: translateX(0); transition: transform 0.5s ease-in-out; will-change: transform; } .ngx-gallery-thumbnails .ngx-gallery-thumbnail { position: absolute; height: 100%; background-position: center; background-repeat: no-repeat; text-decoration: none; } .ngx-gallery-thumbnail-size-cover .ngx-gallery-thumbnails .ngx-gallery-thumbnail { background-size: cover; } .ngx-gallery-thumbnail-size-contain .ngx-gallery-thumbnails .ngx-gallery-thumbnail { background-size: contain; } .ngx-gallery-remaining-count-overlay { width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; background-color: rgba(0, 0, 0, 0.4); } .ngx-gallery-remaining-count { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 30px; } "]
            },] },
];
/**
 * @nocollapse
 */
NgxGalleryThumbnailsComponent.ctorParameters = () => [
    { type: platformBrowser.DomSanitizer, },
    { type: core.ElementRef, },
    { type: NgxGalleryHelperService, },
];
NgxGalleryThumbnailsComponent.propDecorators = {
    'images': [{ type: core.Input },],
    'links': [{ type: core.Input },],
    'labels': [{ type: core.Input },],
    'linkTarget': [{ type: core.Input },],
    'columns': [{ type: core.Input },],
    'rows': [{ type: core.Input },],
    'arrows': [{ type: core.Input },],
    'arrowsAutoHide': [{ type: core.Input },],
    'margin': [{ type: core.Input },],
    'selectedIndex': [{ type: core.Input },],
    'clickable': [{ type: core.Input },],
    'swipe': [{ type: core.Input },],
    'size': [{ type: core.Input },],
    'arrowPrevIcon': [{ type: core.Input },],
    'arrowNextIcon': [{ type: core.Input },],
    'moveSize': [{ type: core.Input },],
    'order': [{ type: core.Input },],
    'remainingCount': [{ type: core.Input },],
    'lazyLoading': [{ type: core.Input },],
    'actions': [{ type: core.Input },],
    'onActiveChange': [{ type: core.Output },],
    'onMouseEnter': [{ type: core.HostListener, args: ['mouseenter',] },],
    'onMouseLeave': [{ type: core.HostListener, args: ['mouseleave',] },],
};

class NgxGalleryPreviewComponent {
    /**
     * @param {?} sanitization
     * @param {?} elementRef
     * @param {?} helperService
     * @param {?} renderer
     * @param {?} changeDetectorRef
     */
    constructor(sanitization, elementRef, helperService, renderer, changeDetectorRef) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.showSpinner = false;
        this.positionLeft = 0;
        this.positionTop = 0;
        this.zoomValue = 1;
        this.loading = false;
        this.rotateValue = 0;
        this.index = 0;
        this.onOpen = new core.EventEmitter();
        this.onClose = new core.EventEmitter();
        this.onActiveChange = new core.EventEmitter();
        this.isOpen = false;
        this.initialX = 0;
        this.initialY = 0;
        this.initialLeft = 0;
        this.initialTop = 0;
        this.isMove = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'preview', () => this.showNext(), () => this.showPrev());
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.keyDownListener) {
            this.keyDownListener();
        }
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        if (this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
        }
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        if (this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (this.isOpen) {
            if (this.keyboardNavigation) {
                if (this.isKeyboardPrev(e)) {
                    this.showPrev();
                }
                else if (this.isKeyboardNext(e)) {
                    this.showNext();
                }
            }
            if (this.closeOnEsc && this.isKeyboardEsc(e)) {
                this.close();
            }
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    open(index) {
        this.onOpen.emit();
        this.index = index;
        this.isOpen = true;
        this.show(true);
        if (this.forceFullscreen) {
            this.manageFullscreen();
        }
        this.keyDownListener = this.renderer.listenGlobal("window", "keydown", (e) => this.onKeyDown(e));
    }
    /**
     * @return {?}
     */
    close() {
        this.isOpen = false;
        this.closeFullscreen();
        this.onClose.emit();
        this.stopAutoPlay();
        if (this.keyDownListener) {
            this.keyDownListener();
        }
    }
    /**
     * @return {?}
     */
    imageMouseEnter() {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    }
    /**
     * @return {?}
     */
    imageMouseLeave() {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    }
    /**
     * @return {?}
     */
    startAutoPlay() {
        if (this.autoPlay) {
            this.stopAutoPlay();
            this.timer = setTimeout(() => {
                if (!this.showNext()) {
                    this.index = -1;
                    this.showNext();
                }
            }, this.autoPlayInterval);
        }
    }
    /**
     * @return {?}
     */
    stopAutoPlay() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    showAtIndex(index) {
        this.index = index;
        this.show();
    }
    /**
     * @return {?}
     */
    showNext() {
        if (this.canShowNext()) {
            this.index++;
            if (this.index === this.images.length) {
                this.index = 0;
            }
            this.show();
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    showPrev() {
        if (this.canShowPrev()) {
            this.index--;
            if (this.index < 0) {
                this.index = this.images.length - 1;
            }
            this.show();
        }
    }
    /**
     * @return {?}
     */
    canShowNext() {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index < this.images.length - 1 ? true : false;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    canShowPrev() {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index > 0 ? true : false;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    manageFullscreen() {
        if (this.fullscreen || this.forceFullscreen) {
            const /** @type {?} */ doc = (document);
            if (!doc.fullscreenElement && !doc.mozFullScreenElement
                && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                this.openFullscreen();
            }
            else {
                this.closeFullscreen();
            }
        }
    }
    /**
     * @param {?} image
     * @return {?}
     */
    getSafeUrl(image) {
        return image.substr(0, 10) === 'data:image' ?
            image : this.sanitization.bypassSecurityTrustUrl(image);
    }
    /**
     * @return {?}
     */
    zoomIn() {
        if (this.canZoomIn()) {
            this.zoomValue += this.zoomStep;
            if (this.zoomValue > this.zoomMax) {
                this.zoomValue = this.zoomMax;
            }
        }
    }
    /**
     * @return {?}
     */
    zoomOut() {
        if (this.canZoomOut()) {
            this.zoomValue -= this.zoomStep;
            if (this.zoomValue < this.zoomMin) {
                this.zoomValue = this.zoomMin;
            }
            if (this.zoomValue <= 1) {
                this.resetPosition();
            }
        }
    }
    /**
     * @return {?}
     */
    rotateLeft() {
        this.rotateValue -= 90;
    }
    /**
     * @return {?}
     */
    rotateRight() {
        this.rotateValue += 90;
    }
    /**
     * @return {?}
     */
    getTransform() {
        return this.sanitization.bypassSecurityTrustStyle('scale(' + this.zoomValue + ') rotate(' + this.rotateValue + 'deg)');
    }
    /**
     * @return {?}
     */
    canZoomIn() {
        return this.zoomValue < this.zoomMax ? true : false;
    }
    /**
     * @return {?}
     */
    canZoomOut() {
        return this.zoomValue > this.zoomMin ? true : false;
    }
    /**
     * @return {?}
     */
    canDragOnZoom() {
        return this.zoom && this.zoomValue > 1;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    mouseDownHandler(e) {
        if (this.canDragOnZoom()) {
            this.initialX = this.getClientX(e);
            this.initialY = this.getClientY(e);
            this.initialLeft = this.positionLeft;
            this.initialTop = this.positionTop;
            this.isMove = true;
            e.preventDefault();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    mouseUpHandler(e) {
        this.isMove = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    mouseMoveHandler(e) {
        if (this.isMove) {
            this.positionLeft = this.initialLeft + (this.getClientX(e) - this.initialX);
            this.positionTop = this.initialTop + (this.getClientY(e) - this.initialY);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    getClientX(e) {
        return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    getClientY(e) {
        return e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
    }
    /**
     * @return {?}
     */
    resetPosition() {
        if (this.zoom) {
            this.positionLeft = 0;
            this.positionTop = 0;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    isKeyboardNext(e) {
        return e.keyCode === 39 ? true : false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    isKeyboardPrev(e) {
        return e.keyCode === 37 ? true : false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    isKeyboardEsc(e) {
        return e.keyCode === 27 ? true : false;
    }
    /**
     * @return {?}
     */
    openFullscreen() {
        const /** @type {?} */ element = (document.documentElement);
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    }
    /**
     * @return {?}
     */
    closeFullscreen() {
        if (this.isFullscreen()) {
            const /** @type {?} */ doc = (document);
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            }
            else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();
            }
            else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            }
            else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            }
        }
    }
    /**
     * @return {?}
     */
    isFullscreen() {
        const /** @type {?} */ doc = (document);
        return doc.fullscreenElement || doc.webkitFullscreenElement
            || doc.mozFullScreenElement || doc.msFullscreenElement;
    }
    /**
     * @param {?=} first
     * @return {?}
     */
    show(first = false) {
        this.loading = true;
        this.stopAutoPlay();
        this.onActiveChange.emit(this.index);
        if (first || !this.animation) {
            this._show();
        }
        else {
            setTimeout(() => this._show(), 600);
        }
    }
    /**
     * @return {?}
     */
    _show() {
        this.zoomValue = 1;
        this.rotateValue = 0;
        this.resetPosition();
        this.src = this.getSafeUrl(/** @type {?} */ (this.images[this.index]));
        this.srcIndex = this.index;
        this.description = this.descriptions[this.index];
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
            if (this.isLoaded(this.previewImage.nativeElement)) {
                this.loading = false;
                this.startAutoPlay();
                this.changeDetectorRef.markForCheck();
            }
            else {
                setTimeout(() => {
                    if (this.loading) {
                        this.showSpinner = true;
                        this.changeDetectorRef.markForCheck();
                    }
                });
                this.previewImage.nativeElement.onload = () => {
                    this.loading = false;
                    this.showSpinner = false;
                    this.previewImage.nativeElement.onload = null;
                    this.startAutoPlay();
                    this.changeDetectorRef.markForCheck();
                };
            }
        });
    }
    /**
     * @param {?} img
     * @return {?}
     */
    isLoaded(img) {
        if (!img.complete) {
            return false;
        }
        if (typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0) {
            return false;
        }
        return true;
    }
}
NgxGalleryPreviewComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-gallery-preview',
                template: `
        <ngx-gallery-arrows *ngIf="arrows" (onPrevClick)="showPrev()" (onNextClick)="showNext()" [prevDisabled]="!canShowPrev()" [nextDisabled]="!canShowNext()" [arrowPrevIcon]="arrowPrevIcon" [arrowNextIcon]="arrowNextIcon"></ngx-gallery-arrows>
        <div class="ngx-gallery-preview-top">
            <div class="ngx-gallery-preview-icons">
                <ngx-gallery-action *ngFor="let action of actions" [icon]="action.icon" [disabled]="action.disabled" [titleText]="action.titleText" (onClick)="action.onClick($event, index)"></ngx-gallery-action>
                <a *ngIf="download && src" [href]="src" class="ngx-gallery-icon" aria-hidden="true" download>
                    <i class="ngx-gallery-icon-content {{ downloadIcon }}"></i>
                </a>
                <ngx-gallery-action *ngIf="zoom" [icon]="zoomOutIcon" [disabled]="!canZoomOut()" (onClick)="zoomOut()"></ngx-gallery-action>
                <ngx-gallery-action *ngIf="zoom" [icon]="zoomInIcon" [disabled]="!canZoomIn()" (onClick)="zoomIn()"></ngx-gallery-action>
                <ngx-gallery-action *ngIf="rotate" [icon]="rotateLeftIcon" (onClick)="rotateLeft()"></ngx-gallery-action>
                <ngx-gallery-action *ngIf="rotate" [icon]="rotateRightIcon" (onClick)="rotateRight()"></ngx-gallery-action>
                <ngx-gallery-action *ngIf="fullscreen" [icon]="'ngx-gallery-fullscreen ' + fullscreenIcon" (onClick)="manageFullscreen()"></ngx-gallery-action>
                <ngx-gallery-action [icon]="'ngx-gallery-close ' + closeIcon" (onClick)="close()"></ngx-gallery-action>
            </div>
        </div>
        <div class="ngx-spinner-wrapper ngx-gallery-center" [class.ngx-gallery-active]="showSpinner">
            <i class="ngx-gallery-icon ngx-gallery-spinner {{spinnerIcon}}" aria-hidden="true"></i>
        </div>
        <div class="ngx-gallery-preview-wrapper" (click)="closeOnClick && close()" (mouseup)="mouseUpHandler($event)" (mousemove)="mouseMoveHandler($event)" (touchend)="mouseUpHandler($event)" (touchmove)="mouseMoveHandler($event)">
            <div class="ngx-gallery-preview-img-wrapper">
                <img *ngIf="src" #previewImage class="ngx-gallery-preview-img ngx-gallery-center" [src]="src" (click)="$event.stopPropagation()" (mouseenter)="imageMouseEnter()" (mouseleave)="imageMouseLeave()" (mousedown)="mouseDownHandler($event)" (touchstart)="mouseDownHandler($event)" [class.ngx-gallery-active]="!loading" [class.animation]="animation" [class.ngx-gallery-grab]="canDragOnZoom()" [style.transform]="getTransform()" [style.left]="positionLeft + 'px'" [style.top]="positionTop + 'px'"/>
                <ngx-gallery-bullets *ngIf="bullets" [count]="images.length" [active]="index" (onChange)="showAtIndex($event)"></ngx-gallery-bullets>
            </div>
            <div class="ngx-gallery-preview-text" *ngIf="showDescription && description" [innerHTML]="description" (click)="$event.stopPropagation()"></div>
        </div>
    `,
                styles: [":host(.ngx-gallery-active) { width: 100%; height: 100%; position: fixed; left: 0; top: 0; background: rgba(0, 0, 0, 0.7); z-index: 10000; display: inline-block; } :host { display: none; } :host /deep/ .ngx-gallery-arrow { font-size: 50px; } :host /deep/ ngx-gallery-bullets { height: 5%; align-items: center; padding: 0px; } .ngx-gallery-preview-img { opacity: 0; max-width: 90%; max-height: 90%; user-select: none; transition: transform .5s; } .ngx-gallery-preview-img.animation { transition: opacity 0.5s linear, transform .5s; } .ngx-gallery-preview-img.ngx-gallery-active { opacity: 1; } .ngx-gallery-preview-img.ngx-gallery-grab { cursor: grab; cursor: -webkit-grab; } .ngx-gallery-icon.ngx-gallery-spinner { font-size: 50px; left: 0; display: inline-block; } :host /deep/ .ngx-gallery-preview-top { position: absolute; width: 100%; user-select: none; } :host /deep/ .ngx-gallery-preview-icons { float: right; } :host /deep/ .ngx-gallery-preview-icons .ngx-gallery-icon { position: relative; margin-right: 10px; margin-top: 10px; font-size: 25px; cursor: pointer; text-decoration: none; } :host /deep/ .ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled { cursor: default; opacity: 0.4; } .ngx-spinner-wrapper { width: 50px; height: 50px; display: none; } .ngx-spinner-wrapper.ngx-gallery-active { display: inline-block; } .ngx-gallery-center { position: absolute; left: 0; right: 0; bottom: 0; margin: auto; top: 0; } .ngx-gallery-preview-text { width: 100%; background: rgba(0, 0, 0, 0.7); padding: 10px; text-align: center; color: white; font-size: 16px; flex: 0 1 auto; z-index: 10; } .ngx-gallery-preview-wrapper { width: 100%; height: 100%; display: flex; flex-flow: column; } .ngx-gallery-preview-img-wrapper { flex: 1 1 auto; position: relative; } "]
            },] },
];
/**
 * @nocollapse
 */
NgxGalleryPreviewComponent.ctorParameters = () => [
    { type: platformBrowser.DomSanitizer, },
    { type: core.ElementRef, },
    { type: NgxGalleryHelperService, },
    { type: core.Renderer, },
    { type: core.ChangeDetectorRef, },
];
NgxGalleryPreviewComponent.propDecorators = {
    'images': [{ type: core.Input },],
    'descriptions': [{ type: core.Input },],
    'showDescription': [{ type: core.Input },],
    'arrows': [{ type: core.Input },],
    'arrowsAutoHide': [{ type: core.Input },],
    'swipe': [{ type: core.Input },],
    'fullscreen': [{ type: core.Input },],
    'forceFullscreen': [{ type: core.Input },],
    'closeOnClick': [{ type: core.Input },],
    'closeOnEsc': [{ type: core.Input },],
    'keyboardNavigation': [{ type: core.Input },],
    'arrowPrevIcon': [{ type: core.Input },],
    'arrowNextIcon': [{ type: core.Input },],
    'closeIcon': [{ type: core.Input },],
    'fullscreenIcon': [{ type: core.Input },],
    'spinnerIcon': [{ type: core.Input },],
    'autoPlay': [{ type: core.Input },],
    'autoPlayInterval': [{ type: core.Input },],
    'autoPlayPauseOnHover': [{ type: core.Input },],
    'infinityMove': [{ type: core.Input },],
    'zoom': [{ type: core.Input },],
    'zoomStep': [{ type: core.Input },],
    'zoomMax': [{ type: core.Input },],
    'zoomMin': [{ type: core.Input },],
    'zoomInIcon': [{ type: core.Input },],
    'zoomOutIcon': [{ type: core.Input },],
    'animation': [{ type: core.Input },],
    'actions': [{ type: core.Input },],
    'rotate': [{ type: core.Input },],
    'rotateLeftIcon': [{ type: core.Input },],
    'rotateRightIcon': [{ type: core.Input },],
    'download': [{ type: core.Input },],
    'downloadIcon': [{ type: core.Input },],
    'bullets': [{ type: core.Input },],
    'onOpen': [{ type: core.Output },],
    'onClose': [{ type: core.Output },],
    'onActiveChange': [{ type: core.Output },],
    'previewImage': [{ type: core.ViewChild, args: ['previewImage',] },],
    'onMouseEnter': [{ type: core.HostListener, args: ['mouseenter',] },],
    'onMouseLeave': [{ type: core.HostListener, args: ['mouseleave',] },],
};

class NgxGalleryImageSize {
}
NgxGalleryImageSize.Cover = 'cover';
NgxGalleryImageSize.Contain = 'contain';

class NgxGalleryLayout {
}
NgxGalleryLayout.ThumbnailsTop = 'thumbnails-top';
NgxGalleryLayout.ThumbnailsBottom = 'thumbnails-bottom';

class NgxGalleryAction {
    /**
     * @param {?} action
     */
    constructor(action) {
        this.icon = action.icon;
        this.disabled = action.disabled ? action.disabled : false;
        this.titleText = action.titleText ? action.titleText : '';
        this.onClick = action.onClick;
    }
}

class NgxGalleryOptions {
    /**
     * @param {?} obj
     */
    constructor(obj) {
        const preventDefaults = obj.breakpoint === undefined ? false : true;
        function use(source, defaultValue) {
            return obj && (source !== undefined || preventDefaults) ? source : defaultValue;
        }
        this.breakpoint = use(obj.breakpoint, undefined);
        this.width = use(obj.width, '500px');
        this.height = use(obj.height, '400px');
        this.fullWidth = use(obj.fullWidth, false);
        this.layout = use(obj.layout, NgxGalleryLayout.ThumbnailsBottom);
        this.startIndex = use(obj.startIndex, 0);
        this.linkTarget = use(obj.linkTarget, '_blank');
        this.lazyLoading = use(obj.lazyLoading, true);
        this.image = use(obj.image, true);
        this.imagePercent = use(obj.imagePercent, 75);
        this.imageArrows = use(obj.imageArrows, true);
        this.imageArrowsAutoHide = use(obj.imageArrowsAutoHide, false);
        this.imageSwipe = use(obj.imageSwipe, false);
        this.imageAnimation = use(obj.imageAnimation, NgxGalleryAnimation.Fade);
        this.imageSize = use(obj.imageSize, NgxGalleryImageSize.Cover);
        this.imageAutoPlay = use(obj.imageAutoPlay, false);
        this.imageAutoPlayInterval = use(obj.imageAutoPlayInterval, 2000);
        this.imageAutoPlayPauseOnHover = use(obj.imageAutoPlayPauseOnHover, false);
        this.imageInfinityMove = use(obj.imageInfinityMove, false);
        if (obj && obj.imageActions && obj.imageActions.length) {
            obj.imageActions = obj.imageActions.map(action => new NgxGalleryAction(action));
        }
        this.imageActions = use(obj.imageActions, []);
        this.imageDescription = use(obj.imageDescription, false);
        this.imageBullets = use(obj.imageBullets, false);
        this.thumbnails = use(obj.thumbnails, true);
        this.thumbnailsColumns = use(obj.thumbnailsColumns, 4);
        this.thumbnailsRows = use(obj.thumbnailsRows, 1);
        this.thumbnailsPercent = use(obj.thumbnailsPercent, 25);
        this.thumbnailsMargin = use(obj.thumbnailsMargin, 10);
        this.thumbnailsArrows = use(obj.thumbnailsArrows, true);
        this.thumbnailsArrowsAutoHide = use(obj.thumbnailsArrowsAutoHide, false);
        this.thumbnailsSwipe = use(obj.thumbnailsSwipe, false);
        this.thumbnailsMoveSize = use(obj.thumbnailsMoveSize, 1);
        this.thumbnailsOrder = use(obj.thumbnailsOrder, NgxGalleryOrder.Column);
        this.thumbnailsRemainingCount = use(obj.thumbnailsRemainingCount, false);
        this.thumbnailsAsLinks = use(obj.thumbnailsAsLinks, false);
        this.thumbnailsAutoHide = use(obj.thumbnailsAutoHide, false);
        this.thumbnailMargin = use(obj.thumbnailMargin, 10);
        this.thumbnailSize = use(obj.thumbnailSize, NgxGalleryImageSize.Cover);
        if (obj && obj.thumbnailActions && obj.thumbnailActions.length) {
            obj.thumbnailActions = obj.thumbnailActions.map(action => new NgxGalleryAction(action));
        }
        this.thumbnailActions = use(obj.thumbnailActions, []);
        this.preview = use(obj.preview, true);
        this.previewDescription = use(obj.previewDescription, true);
        this.previewArrows = use(obj.previewArrows, true);
        this.previewArrowsAutoHide = use(obj.previewArrowsAutoHide, false);
        this.previewSwipe = use(obj.previewSwipe, false);
        this.previewFullscreen = use(obj.previewFullscreen, false);
        this.previewForceFullscreen = use(obj.previewForceFullscreen, false);
        this.previewCloseOnClick = use(obj.previewCloseOnClick, false);
        this.previewCloseOnEsc = use(obj.previewCloseOnEsc, false);
        this.previewKeyboardNavigation = use(obj.previewKeyboardNavigation, false);
        this.previewAnimation = use(obj.previewAnimation, true);
        this.previewAutoPlay = use(obj.previewAutoPlay, false);
        this.previewAutoPlayInterval = use(obj.previewAutoPlayInterval, 2000);
        this.previewAutoPlayPauseOnHover = use(obj.previewAutoPlayPauseOnHover, false);
        this.previewInfinityMove = use(obj.previewInfinityMove, false);
        this.previewZoom = use(obj.previewZoom, false);
        this.previewZoomStep = use(obj.previewZoomStep, 0.1);
        this.previewZoomMax = use(obj.previewZoomMax, 2);
        this.previewZoomMin = use(obj.previewZoomMin, 0.5);
        this.previewRotate = use(obj.previewRotate, false);
        this.previewDownload = use(obj.previewDownload, false);
        this.previewCustom = use(obj.previewCustom, undefined);
        this.previewBullets = use(obj.previewBullets, false);
        this.arrowPrevIcon = use(obj.arrowPrevIcon, 'fa fa-arrow-circle-left');
        this.arrowNextIcon = use(obj.arrowNextIcon, 'fa fa-arrow-circle-right');
        this.closeIcon = use(obj.closeIcon, 'fa fa-times-circle');
        this.fullscreenIcon = use(obj.fullscreenIcon, 'fa fa-arrows-alt');
        this.spinnerIcon = use(obj.spinnerIcon, 'fa fa-spinner fa-pulse fa-3x fa-fw');
        this.zoomInIcon = use(obj.zoomInIcon, 'fa fa-search-plus');
        this.zoomOutIcon = use(obj.zoomOutIcon, 'fa fa-search-minus');
        this.rotateLeftIcon = use(obj.rotateLeftIcon, 'fa fa-undo');
        this.rotateRightIcon = use(obj.rotateRightIcon, 'fa fa-repeat');
        this.downloadIcon = use(obj.downloadIcon, 'fa fa-arrow-circle-down');
        if (obj && obj.actions && obj.actions.length) {
            obj.actions = obj.actions.map(action => new NgxGalleryAction(action));
        }
        this.actions = use(obj.actions, []);
    }
}

class NgxGalleryOrderedImage {
    /**
     * @param {?} obj
     */
    constructor(obj) {
        this.src = obj.src;
        this.index = obj.index;
    }
}

class NgxGalleryComponent {
    /**
     * @param {?} myElement
     */
    constructor(myElement) {
        this.myElement = myElement;
        this.imagesReady = new core.EventEmitter();
        this.change = new core.EventEmitter();
        this.previewOpen = new core.EventEmitter();
        this.previewClose = new core.EventEmitter();
        this.previewChange = new core.EventEmitter();
        this.oldImagesLength = 0;
        this.selectedIndex = 0;
        this.breakpoint = undefined;
        this.prevBreakpoint = undefined;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.options = this.options.map((opt) => new NgxGalleryOptions(opt));
        this.sortOptions();
        this.setBreakpoint();
        this.setOptions();
        this.checkFullWidth();
        if (this.currentOptions) {
            this.selectedIndex = /** @type {?} */ (this.currentOptions.startIndex);
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.images !== undefined && (this.images.length !== this.oldImagesLength)
            || (this.images !== this.oldImages)) {
            this.oldImagesLength = this.images.length;
            this.oldImages = this.images;
            this.setOptions();
            this.setImages();
            if (this.images && this.images.length) {
                this.imagesReady.emit();
            }
            if (this.image) {
                this.image.reset(/** @type {?} */ (this.currentOptions.startIndex));
            }
            if (this.currentOptions.thumbnailsAutoHide && this.currentOptions.thumbnails
                && this.images.length <= 1) {
                this.currentOptions.thumbnails = false;
                this.currentOptions.imageArrows = false;
            }
            this.resetThumbnails();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.checkFullWidth();
    }
    /**
     * @return {?}
     */
    onResize() {
        this.setBreakpoint();
        if (this.prevBreakpoint !== this.breakpoint) {
            this.setOptions();
            this.resetThumbnails();
        }
        if (this.currentOptions && this.currentOptions.fullWidth) {
            if (this.fullWidthTimeout) {
                clearTimeout(this.fullWidthTimeout);
            }
            this.fullWidthTimeout = setTimeout(() => {
                this.checkFullWidth();
            }, 200);
        }
    }
    /**
     * @return {?}
     */
    getImageHeight() {
        return (this.currentOptions && this.currentOptions.thumbnails) ?
            this.currentOptions.imagePercent + '%' : '100%';
    }
    /**
     * @return {?}
     */
    getThumbnailsHeight() {
        if (this.currentOptions && this.currentOptions.image) {
            return 'calc(' + this.currentOptions.thumbnailsPercent + '% - '
                + this.currentOptions.thumbnailsMargin + 'px)';
        }
        else {
            return '100%';
        }
    }
    /**
     * @return {?}
     */
    getThumbnailsMarginTop() {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsBottom) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    }
    /**
     * @return {?}
     */
    getThumbnailsMarginBottom() {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsTop) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    openPreview(index) {
        if (this.currentOptions.previewCustom) {
            this.currentOptions.previewCustom(index);
        }
        else {
            this.previewEnabled = true;
            this.preview.open(index);
        }
    }
    /**
     * @return {?}
     */
    onPreviewOpen() {
        this.previewOpen.emit();
        if (this.image && this.image.autoPlay) {
            this.image.stopAutoPlay();
        }
    }
    /**
     * @return {?}
     */
    onPreviewClose() {
        this.previewEnabled = false;
        this.previewClose.emit();
        if (this.image && this.image.autoPlay) {
            this.image.startAutoPlay();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectFromImage(index) {
        this.select(index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectFromThumbnails(index) {
        this.select(index);
        if (this.currentOptions && this.currentOptions.thumbnails && this.currentOptions.preview
            && (!this.currentOptions.image || this.currentOptions.thumbnailsRemainingCount)) {
            this.openPreview(this.selectedIndex);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    show(index) {
        this.select(index);
    }
    /**
     * @return {?}
     */
    showNext() {
        this.image.showNext();
    }
    /**
     * @return {?}
     */
    showPrev() {
        this.image.showPrev();
    }
    /**
     * @return {?}
     */
    canShowNext() {
        if (this.images && this.currentOptions) {
            return (this.currentOptions.imageInfinityMove || this.selectedIndex < this.images.length - 1)
                ? true : false;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    canShowPrev() {
        if (this.images && this.currentOptions) {
            return (this.currentOptions.imageInfinityMove || this.selectedIndex > 0) ? true : false;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    previewSelect(index) {
        this.previewChange.emit({ index, image: this.images[index] });
    }
    /**
     * @return {?}
     */
    moveThumbnailsRight() {
        this.thubmnails.moveRight();
    }
    /**
     * @return {?}
     */
    moveThumbnailsLeft() {
        this.thubmnails.moveLeft();
    }
    /**
     * @return {?}
     */
    canMoveThumbnailsRight() {
        return this.thubmnails.canMoveRight();
    }
    /**
     * @return {?}
     */
    canMoveThumbnailsLeft() {
        return this.thubmnails.canMoveLeft();
    }
    /**
     * @return {?}
     */
    resetThumbnails() {
        if (this.thubmnails) {
            this.thubmnails.reset(/** @type {?} */ (this.currentOptions.startIndex));
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    select(index) {
        this.selectedIndex = index;
        this.change.emit({
            index,
            image: this.images[index]
        });
    }
    /**
     * @return {?}
     */
    checkFullWidth() {
        if (this.currentOptions && this.currentOptions.fullWidth) {
            this.width = document.body.clientWidth + 'px';
            this.left = (-(document.body.clientWidth -
                this.myElement.nativeElement.parentNode.innerWidth) / 2) + 'px';
        }
    }
    /**
     * @return {?}
     */
    setImages() {
        this.smallImages = this.images.map((img) => /** @type {?} */ (img.small));
        this.mediumImages = this.images.map((img, i) => new NgxGalleryOrderedImage({
            src: img.medium,
            index: i
        }));
        this.bigImages = this.images.map((img) => /** @type {?} */ (img.big));
        this.descriptions = this.images.map((img) => /** @type {?} */ (img.description));
        this.links = this.images.map((img) => /** @type {?} */ (img.url));
        this.labels = this.images.map((img) => /** @type {?} */ (img.label));
    }
    /**
     * @return {?}
     */
    setBreakpoint() {
        this.prevBreakpoint = this.breakpoint;
        let /** @type {?} */ breakpoints;
        if (typeof window !== 'undefined') {
            breakpoints = this.options.filter((opt) => opt.breakpoint >= window.innerWidth)
                .map((opt) => opt.breakpoint);
        }
        if (breakpoints && breakpoints.length) {
            this.breakpoint = breakpoints.pop();
        }
        else {
            this.breakpoint = undefined;
        }
    }
    /**
     * @return {?}
     */
    sortOptions() {
        this.options = [
            ...this.options.filter((a) => a.breakpoint === undefined),
            ...this.options
                .filter((a) => a.breakpoint !== undefined)
                .sort((a, b) => b.breakpoint - a.breakpoint)
        ];
    }
    /**
     * @return {?}
     */
    setOptions() {
        this.currentOptions = new NgxGalleryOptions({});
        this.options
            .filter((opt) => opt.breakpoint === undefined || opt.breakpoint >= this.breakpoint)
            .map((opt) => this.combineOptions(this.currentOptions, opt));
        this.width = /** @type {?} */ (this.currentOptions.width);
        this.height = /** @type {?} */ (this.currentOptions.height);
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    combineOptions(first, second) {
        Object.keys(second).map((val) => first[val] = second[val] !== undefined ? second[val] : first[val]);
    }
}
NgxGalleryComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ngx-gallery',
                template: `
    <div class="ngx-gallery-layout {{currentOptions?.layout}}">
        <ngx-gallery-image *ngIf="currentOptions?.image" [style.height]="getImageHeight()" [images]="mediumImages" [clickable]="currentOptions?.preview" [selectedIndex]="selectedIndex" [arrows]="currentOptions?.imageArrows" [arrowsAutoHide]="currentOptions?.imageArrowsAutoHide" [arrowPrevIcon]="currentOptions?.arrowPrevIcon" [arrowNextIcon]="currentOptions?.arrowNextIcon" [swipe]="currentOptions?.imageSwipe" [animation]="currentOptions?.imageAnimation" [size]="currentOptions?.imageSize" [autoPlay]="currentOptions?.imageAutoPlay" [autoPlayInterval]="currentOptions?.imageAutoPlayInterval" [autoPlayPauseOnHover]="currentOptions?.imageAutoPlayPauseOnHover" [infinityMove]="currentOptions?.imageInfinityMove"  [lazyLoading]="currentOptions?.lazyLoading" [actions]="currentOptions?.imageActions" [descriptions]="descriptions" [showDescription]="currentOptions?.imageDescription" [bullets]="currentOptions?.imageBullets" (onClick)="openPreview($event)" (onActiveChange)="selectFromImage($event)"></ngx-gallery-image>

        <ngx-gallery-thumbnails *ngIf="currentOptions?.thumbnails" [style.marginTop]="getThumbnailsMarginTop()" [style.marginBottom]="getThumbnailsMarginBottom()" [style.height]="getThumbnailsHeight()" [images]="smallImages" [links]="currentOptions?.thumbnailsAsLinks ? links : []" [labels]="labels" [linkTarget]="currentOptions?.linkTarget" [selectedIndex]="selectedIndex" [columns]="currentOptions?.thumbnailsColumns" [rows]="currentOptions?.thumbnailsRows" [margin]="currentOptions?.thumbnailMargin" [arrows]="currentOptions?.thumbnailsArrows" [arrowsAutoHide]="currentOptions?.thumbnailsArrowsAutoHide" [arrowPrevIcon]="currentOptions?.arrowPrevIcon" [arrowNextIcon]="currentOptions?.arrowNextIcon" [clickable]="currentOptions?.image || currentOptions?.preview" [swipe]="currentOptions?.thumbnailsSwipe" [size]="currentOptions?.thumbnailSize" [moveSize]="currentOptions?.thumbnailsMoveSize" [order]="currentOptions?.thumbnailsOrder" [remainingCount]="currentOptions?.thumbnailsRemainingCount" [lazyLoading]="currentOptions?.lazyLoading" [actions]="currentOptions?.thumbnailActions"  (onActiveChange)="selectFromThumbnails($event)"></ngx-gallery-thumbnails>

        <ngx-gallery-preview [images]="bigImages" [descriptions]="descriptions" [showDescription]="currentOptions?.previewDescription" [arrowPrevIcon]="currentOptions?.arrowPrevIcon" [arrowNextIcon]="currentOptions?.arrowNextIcon" [closeIcon]="currentOptions?.closeIcon" [fullscreenIcon]="currentOptions?.fullscreenIcon" [spinnerIcon]="currentOptions?.spinnerIcon" [arrows]="currentOptions?.previewArrows" [arrowsAutoHide]="currentOptions?.previewArrowsAutoHide" [swipe]="currentOptions?.previewSwipe" [fullscreen]="currentOptions?.previewFullscreen" [forceFullscreen]="currentOptions?.previewForceFullscreen" [closeOnClick]="currentOptions?.previewCloseOnClick" [closeOnEsc]="currentOptions?.previewCloseOnEsc" [keyboardNavigation]="currentOptions?.previewKeyboardNavigation" [animation]="currentOptions?.previewAnimation" [autoPlay]="currentOptions?.previewAutoPlay" [autoPlayInterval]="currentOptions?.previewAutoPlayInterval" [autoPlayPauseOnHover]="currentOptions?.previewAutoPlayPauseOnHover" [infinityMove]="currentOptions?.previewInfinityMove" [zoom]="currentOptions?.previewZoom" [zoomStep]="currentOptions?.previewZoomStep" [zoomMax]="currentOptions?.previewZoomMax" [zoomMin]="currentOptions?.previewZoomMin" [zoomInIcon]="currentOptions?.zoomInIcon" [zoomOutIcon]="currentOptions?.zoomOutIcon" [actions]="currentOptions?.actions" [rotate]="currentOptions?.previewRotate" [rotateLeftIcon]="currentOptions?.rotateLeftIcon" [rotateRightIcon]="currentOptions?.rotateRightIcon" [download]="currentOptions?.previewDownload" [downloadIcon]="currentOptions?.downloadIcon" [bullets]="currentOptions?.previewBullets" (onClose)="onPreviewClose()" (onOpen)="onPreviewOpen()" (onActiveChange)="previewSelect($event)" [class.ngx-gallery-active]="previewEnabled"></ngx-gallery-preview>
    </div>
    `,
                styles: [":host { display: inline-block; } :host > * { float: left; } :host /deep/ * { box-sizing: border-box; } :host /deep/ .ngx-gallery-icon { color: white; font-size: 25px; position: absolute; z-index: 2000; display: inline-block; } :host /deep/ .ngx-gallery-icon .ngx-gallery-icon-content { display: block; } :host /deep/ .ngx-gallery-clickable { cursor: pointer; } :host /deep/ .ngx-gallery-icons-wrapper .ngx-gallery-icon { position: relative; margin-right: 5px; margin-top: 5px; font-size: 20px; cursor: pointer; } :host /deep/ .ngx-gallery-icons-wrapper { float: right; } :host .ngx-gallery-layout { width: 100%; height: 100%; display: flex; flex-direction: column; } :host .ngx-gallery-layout.thumbnails-top ngx-gallery-image { order: 2; } :host .ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails { order: 1; } :host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-image { order: 1; } :host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails { order: 2; } "],
                providers: [NgxGalleryHelperService]
            },] },
];
/**
 * @nocollapse
 */
NgxGalleryComponent.ctorParameters = () => [
    { type: core.ElementRef, },
];
NgxGalleryComponent.propDecorators = {
    'options': [{ type: core.Input },],
    'images': [{ type: core.Input },],
    'imagesReady': [{ type: core.Output },],
    'change': [{ type: core.Output },],
    'previewOpen': [{ type: core.Output },],
    'previewClose': [{ type: core.Output },],
    'previewChange': [{ type: core.Output },],
    'preview': [{ type: core.ViewChild, args: [NgxGalleryPreviewComponent,] },],
    'image': [{ type: core.ViewChild, args: [NgxGalleryImageComponent,] },],
    'thubmnails': [{ type: core.ViewChild, args: [NgxGalleryThumbnailsComponent,] },],
    'width': [{ type: core.HostBinding, args: ['style.width',] },],
    'height': [{ type: core.HostBinding, args: ['style.height',] },],
    'left': [{ type: core.HostBinding, args: ['style.left',] },],
    'onResize': [{ type: core.HostListener, args: ['window:resize',] },],
};

class NgxGalleryImage {
    /**
     * @param {?} obj
     */
    constructor(obj) {
        this.small = obj.small;
        this.medium = obj.medium;
        this.big = obj.big;
        this.description = obj.description;
        this.url = obj.url;
        this.label = obj.label;
    }
}

class CustomHammerConfig extends platformBrowser.HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = ({
            'pinch': { enable: false },
            'rotate': { enable: false }
        });
    }
}
class NgxGalleryModule {
}
NgxGalleryModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    NgxGalleryActionComponent,
                    NgxGalleryArrowsComponent,
                    NgxGalleryBulletsComponent,
                    NgxGalleryImageComponent,
                    NgxGalleryThumbnailsComponent,
                    NgxGalleryPreviewComponent,
                    NgxGalleryComponent
                ],
                exports: [
                    NgxGalleryComponent
                ],
                providers: [
                    { provide: platformBrowser.HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
                ]
            },] },
];
/**
 * @nocollapse
 */
NgxGalleryModule.ctorParameters = () => [];

exports.CustomHammerConfig = CustomHammerConfig;
exports.NgxGalleryModule = NgxGalleryModule;
exports.NgxGalleryComponent = NgxGalleryComponent;
exports.NgxGalleryActionComponent = NgxGalleryActionComponent;
exports.NgxGalleryImageComponent = NgxGalleryImageComponent;
exports.NgxGalleryThumbnailsComponent = NgxGalleryThumbnailsComponent;
exports.NgxGalleryPreviewComponent = NgxGalleryPreviewComponent;
exports.NgxGalleryArrowsComponent = NgxGalleryArrowsComponent;
exports.NgxGalleryBulletsComponent = NgxGalleryBulletsComponent;
exports.NgxGalleryOptions = NgxGalleryOptions;
exports.NgxGalleryImage = NgxGalleryImage;
exports.NgxGalleryAnimation = NgxGalleryAnimation;
exports.NgxGalleryHelperService = NgxGalleryHelperService;
exports.NgxGalleryImageSize = NgxGalleryImageSize;
exports.NgxGalleryLayout = NgxGalleryLayout;
exports.NgxGalleryOrder = NgxGalleryOrder;
exports.NgxGalleryOrderedImage = NgxGalleryOrderedImage;
exports.NgxGalleryAction = NgxGalleryAction;

Object.defineProperty(exports, '__esModule', { value: true });

})));
