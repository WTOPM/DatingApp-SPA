import { OnDestroy, OnInit, OnChanges, NgZone, ElementRef, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryConfig } from '../models/config.model';
import { GalleryState, GalleryError } from '../models/gallery.model';
import { SliderState } from '../models/slider.model';
export declare class GalleryThumbsComponent implements OnInit, OnChanges, OnDestroy {
    private _el;
    private _zone;
    /** Sliding worker */
    private readonly _slidingWorker$;
    /** HammerJS instance */
    private _hammer;
    /** Current slider position in free sliding mode */
    private _freeModeCurrentOffset;
    /** Stream that emits sliding state */
    sliderState$: Observable<SliderState>;
    /** Gallery state */
    state: GalleryState;
    /** Gallery config */
    config: GalleryConfig;
    /** Stream that emits when the active item should change */
    action: EventEmitter<string | number>;
    /** Stream that emits when thumb is clicked */
    thumbClick: EventEmitter<number>;
    /** Stream that emits when an error occurs */
    error: EventEmitter<GalleryError>;
    /** Host height */
    height: string;
    /** Host width */
    width: string;
    constructor(_el: ElementRef, _zone: NgZone);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Sliding strict mode
     */
    private strictMode;
    /**
     * Sliding free mode
     */
    private freeMode;
    /**
     * Check if the minimum free scroll is exceeded (used in Bottom, Left directions)
     */
    private minFreeScrollExceeded;
    /**
     * Check if the maximum free scroll is exceeded (used in Top, Right directions)
     */
    private maxFreeScrollExceeded;
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
