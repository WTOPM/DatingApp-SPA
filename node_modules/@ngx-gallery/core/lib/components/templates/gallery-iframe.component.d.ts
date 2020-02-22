import { OnInit, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
export declare class GalleryIframeComponent implements OnInit {
    private _sanitizer;
    iframeSrc: SafeResourceUrl;
    src: string;
    pauseVideo: boolean;
    iframe: ElementRef;
    constructor(_sanitizer: DomSanitizer);
    ngOnInit(): void;
}
