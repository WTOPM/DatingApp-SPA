import { OnDestroy, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
export declare class LazyImage implements OnChanges, OnDestroy {
    private document;
    private _imageLoader$;
    private _loaderSub$;
    src: string;
    loaded: EventEmitter<string>;
    error: EventEmitter<Error>;
    constructor(document: any);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    loadImage(imagePath: string): void;
    /**
     * Native image loader, does not emit progress
     * @param url
     */
    nativeLoader(url: string): Observable<any>;
}
