import { OnDestroy, OnInit, ElementRef, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
/**
 * This directive uses tap event if HammerJS is loaded, otherwise it falls back to normal click event
 */
export declare class TapClick implements OnInit, OnDestroy {
    private _el;
    private _hammer;
    clickListener: Subscription;
    tapClickDisabled: boolean;
    tapClick: EventEmitter<{}>;
    constructor(_el: ElementRef);
    ngOnInit(): void;
    activateClickEvent(): void;
    ngOnDestroy(): void;
}
