import { OnInit, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GalleryState } from '../models/gallery.model';
import { GalleryConfig } from '../models/config.model';
export declare class GalleryNavComponent implements OnInit {
    private _sanitizer;
    navIcon: SafeHtml;
    state: GalleryState;
    config: GalleryConfig;
    action: EventEmitter<string>;
    constructor(_sanitizer: DomSanitizer);
    ngOnInit(): void;
}
