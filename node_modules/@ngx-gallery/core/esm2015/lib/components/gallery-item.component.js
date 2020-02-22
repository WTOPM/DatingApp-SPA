/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, HostBinding, Output, EventEmitter } from '@angular/core';
import { LoadingStrategy, GalleryItemType } from '../models/constants';
export class GalleryItemComponent {
    constructor() {
        this.Types = GalleryItemType;
        /**
         * Stream that emits when an error occurs
         */
        this.error = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.index === this.currIndex;
    }
    /**
     * @return {?}
     */
    get load() {
        switch (this.config.loadingStrategy) {
            case LoadingStrategy.Preload:
                return true;
            case LoadingStrategy.Lazy:
                return this.currIndex === this.index;
            default:
                return this.currIndex === this.index || this.currIndex === this.index - 1 || this.currIndex === this.index + 1;
        }
    }
}
GalleryItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="load" [ngSwitch]="type">

      <ng-container *ngSwitchCase="Types.Image">

        <gallery-image [src]="data.src"
                       [loadingIcon]="config.loadingIcon"
                       [loadingError]="config.loadingError"
                       (error)="error.emit($event)"></gallery-image>

        <div class="g-template g-item-template">
          <ng-container *ngTemplateOutlet="config.itemTemplate;
          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }">
          </ng-container>
        </div>

      </ng-container>

      <gallery-video *ngSwitchCase="Types.Video"
                     [src]="data.src"
                     [poster]="data.poster"
                     [pause]="currIndex !== index"
                     (error)="error.emit($event)"></gallery-video>

      <gallery-iframe *ngSwitchCase="Types.Youtube"
                      [src]="data.src"
                      [pause]="currIndex !== index"></gallery-iframe>

      <gallery-iframe *ngSwitchCase="Types.Iframe"
                      [src]="data.src"></gallery-iframe>

      <ng-container *ngSwitchDefault>

        <div class="g-template g-item-template">
          <ng-container *ngTemplateOutlet="config.itemTemplate;
          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }">
          </ng-container>
        </div>

      </ng-container>

    </ng-container>
  `
            }] }
];
GalleryItemComponent.propDecorators = {
    config: [{ type: Input }],
    index: [{ type: Input }],
    currIndex: [{ type: Input }],
    type: [{ type: Input }],
    data: [{ type: Input }],
    error: [{ type: Output }],
    isActive: [{ type: HostBinding, args: ['class.g-active-item',] }]
};
if (false) {
    /** @type {?} */
    GalleryItemComponent.prototype.Types;
    /**
     * Gallery config
     * @type {?}
     */
    GalleryItemComponent.prototype.config;
    /**
     * Item's index in the gallery
     * @type {?}
     */
    GalleryItemComponent.prototype.index;
    /**
     * Gallery current index
     * @type {?}
     */
    GalleryItemComponent.prototype.currIndex;
    /**
     * Item's type 'image', 'video', 'youtube', 'iframe'
     * @type {?}
     */
    GalleryItemComponent.prototype.type;
    /**
     * Item's data, this object contains the data required to display the content (e.g. src path)
     * @type {?}
     */
    GalleryItemComponent.prototype.data;
    /**
     * Stream that emits when an error occurs
     * @type {?}
     */
    GalleryItemComponent.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWlEdkUsTUFBTSxPQUFPLG9CQUFvQjtJQS9DakM7UUFpRFcsVUFBSyxHQUFHLGVBQWUsQ0FBQzs7OztRQWtCdkIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFpQjlDLENBQUM7Ozs7SUFmQyxJQUF3QyxRQUFRO1FBQzlDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFO1lBQ25DLEtBQUssZUFBZSxDQUFDLE9BQU87Z0JBQzFCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxlQUFlLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdkM7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ2xIO0lBQ0gsQ0FBQzs7O1lBbEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENUO2FBQ0Y7OztxQkFNRSxLQUFLO29CQUdMLEtBQUs7d0JBR0wsS0FBSzttQkFHTCxLQUFLO21CQUdMLEtBQUs7b0JBR0wsTUFBTTt1QkFFTixXQUFXLFNBQUMscUJBQXFCOzs7O0lBcEJsQyxxQ0FBaUM7Ozs7O0lBR2pDLHNDQUErQjs7Ozs7SUFHL0IscUNBQXVCOzs7OztJQUd2Qix5Q0FBMkI7Ozs7O0lBRzNCLG9DQUFzQjs7Ozs7SUFHdEIsb0NBQW1COzs7OztJQUduQixxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSG9zdEJpbmRpbmcsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHYWxsZXJ5Q29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbmZpZy5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkaW5nU3RyYXRlZ3ksIEdhbGxlcnlJdGVtVHlwZSB9IGZyb20gJy4uL21vZGVscy9jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LWl0ZW0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibG9hZFwiIFtuZ1N3aXRjaF09XCJ0eXBlXCI+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlR5cGVzLkltYWdlXCI+XG5cbiAgICAgICAgPGdhbGxlcnktaW1hZ2UgW3NyY109XCJkYXRhLnNyY1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFtsb2FkaW5nSWNvbl09XCJjb25maWcubG9hZGluZ0ljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICBbbG9hZGluZ0Vycm9yXT1cImNvbmZpZy5sb2FkaW5nRXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPVwiZXJyb3IuZW1pdCgkZXZlbnQpXCI+PC9nYWxsZXJ5LWltYWdlPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnLXRlbXBsYXRlIGctaXRlbS10ZW1wbGF0ZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb25maWcuaXRlbVRlbXBsYXRlO1xuICAgICAgICAgIGNvbnRleHQ6IHsgaW5kZXg6IHRoaXMuaW5kZXgsIGN1cnJJbmRleDogdGhpcy5jdXJySW5kZXgsIHR5cGU6IHRoaXMudHlwZSwgZGF0YTogdGhpcy5kYXRhIH1cIj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8Z2FsbGVyeS12aWRlbyAqbmdTd2l0Y2hDYXNlPVwiVHlwZXMuVmlkZW9cIlxuICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJkYXRhLnNyY1wiXG4gICAgICAgICAgICAgICAgICAgICBbcG9zdGVyXT1cImRhdGEucG9zdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgIFtwYXVzZV09XCJjdXJySW5kZXggIT09IGluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJlcnJvci5lbWl0KCRldmVudClcIj48L2dhbGxlcnktdmlkZW8+XG5cbiAgICAgIDxnYWxsZXJ5LWlmcmFtZSAqbmdTd2l0Y2hDYXNlPVwiVHlwZXMuWW91dHViZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJkYXRhLnNyY1wiXG4gICAgICAgICAgICAgICAgICAgICAgW3BhdXNlXT1cImN1cnJJbmRleCAhPT0gaW5kZXhcIj48L2dhbGxlcnktaWZyYW1lPlxuXG4gICAgICA8Z2FsbGVyeS1pZnJhbWUgKm5nU3dpdGNoQ2FzZT1cIlR5cGVzLklmcmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJkYXRhLnNyY1wiPjwvZ2FsbGVyeS1pZnJhbWU+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZy10ZW1wbGF0ZSBnLWl0ZW0tdGVtcGxhdGVcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29uZmlnLml0ZW1UZW1wbGF0ZTtcbiAgICAgICAgICBjb250ZXh0OiB7IGluZGV4OiB0aGlzLmluZGV4LCBjdXJySW5kZXg6IHRoaXMuY3VyckluZGV4LCB0eXBlOiB0aGlzLnR5cGUsIGRhdGE6IHRoaXMuZGF0YSB9XCI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwvbmctY29udGFpbmVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEdhbGxlcnlJdGVtQ29tcG9uZW50IHtcblxuICByZWFkb25seSBUeXBlcyA9IEdhbGxlcnlJdGVtVHlwZTtcblxuICAvKiogR2FsbGVyeSBjb25maWcgKi9cbiAgQElucHV0KCkgY29uZmlnOiBHYWxsZXJ5Q29uZmlnO1xuXG4gIC8qKiBJdGVtJ3MgaW5kZXggaW4gdGhlIGdhbGxlcnkgKi9cbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcblxuICAvKiogR2FsbGVyeSBjdXJyZW50IGluZGV4ICovXG4gIEBJbnB1dCgpIGN1cnJJbmRleDogbnVtYmVyO1xuXG4gIC8qKiBJdGVtJ3MgdHlwZSAnaW1hZ2UnLCAndmlkZW8nLCAneW91dHViZScsICdpZnJhbWUnICovXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcblxuICAvKiogSXRlbSdzIGRhdGEsIHRoaXMgb2JqZWN0IGNvbnRhaW5zIHRoZSBkYXRhIHJlcXVpcmVkIHRvIGRpc3BsYXkgdGhlIGNvbnRlbnQgKGUuZy4gc3JjIHBhdGgpICovXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBhbiBlcnJvciBvY2N1cnMgKi9cbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmctYWN0aXZlLWl0ZW0nKSBnZXQgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXggPT09IHRoaXMuY3VyckluZGV4O1xuICB9XG5cbiAgZ2V0IGxvYWQoKSB7XG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZy5sb2FkaW5nU3RyYXRlZ3kpIHtcbiAgICAgIGNhc2UgTG9hZGluZ1N0cmF0ZWd5LlByZWxvYWQ6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSBMb2FkaW5nU3RyYXRlZ3kuTGF6eTpcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VyckluZGV4ID09PSB0aGlzLmluZGV4O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VyckluZGV4ID09PSB0aGlzLmluZGV4IHx8IHRoaXMuY3VyckluZGV4ID09PSB0aGlzLmluZGV4IC0gMSB8fCB0aGlzLmN1cnJJbmRleCA9PT0gdGhpcy5pbmRleCArIDE7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==