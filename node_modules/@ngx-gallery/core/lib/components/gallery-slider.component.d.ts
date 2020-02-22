import { OnDestroy, OnInit, OnChanges, NgZone, ElementRef, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryState, GalleryError } from '../models/gallery.model';
import { GalleryConfig } from '../models/config.model';
import { SliderState } from '../models/slider.model';
export declare class GallerySliderComponent implements OnInit, OnChanges, OnDestroy {
    private _el;
    private _zone;
    private platform;
    /** Sliding worker */
    private readonly _slidingWorker$;
    /** HammerJS instance */
    private _hammer;
    /** Stream that emits when the view is re-sized */
    private _resizeSub$;
    /** Stream that emits sliding state */
    sliderState$: Observable<SliderState>;
    /** Gallery state */
    state: GalleryState;
    /** Gallery config */
    config: GalleryConfig;
    /** Stream that emits when the active item should change */
    action: EventEmitter<string | number>;
    /** Stream that emits when item is clicked */
    itemClick: EventEmitter<number>;
    /** Stream that emits when an error occurs */
    error: EventEmitter<GalleryError>;
    /** Item zoom */
    readonly zoom: {
        transform: string;
    };
    constructor(_el: ElementRef, _zone: NgZone, platform: Object);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Convert sliding state to styles
     */
    private getSliderStyles;
    private verticalPan;
    private horizontalPan;
    private next;
    private prev;
    private updateSlider;
}
