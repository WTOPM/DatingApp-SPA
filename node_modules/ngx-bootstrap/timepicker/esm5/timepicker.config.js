/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Provides default configuration values for timepicker
 */
var TimepickerConfig = /** @class */ (function () {
    function TimepickerConfig() {
        /**
         * hours change step
         */
        this.hourStep = 1;
        /**
         * hours change step
         */
        this.minuteStep = 5;
        /**
         * seconds changes step
         */
        this.secondsStep = 10;
        /**
         * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
         */
        this.showMeridian = true;
        /**
         * meridian labels based on locale
         */
        this.meridians = ['AM', 'PM'];
        /**
         * if true hours and minutes fields will be readonly
         */
        this.readonlyInput = false;
        /**
         * if true hours and minutes fields will be disabled
         */
        this.disabled = false;
        /**
         * if true scroll inside hours and minutes inputs will change time
         */
        this.mousewheel = true;
        /**
         * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
         */
        this.arrowkeys = true;
        /**
         * if true spinner arrows above and below the inputs will be shown
         */
        this.showSpinners = true;
        /**
         * show seconds in timepicker
         */
        this.showSeconds = false;
        /**
         * show minutes in timepicker
         */
        this.showMinutes = true;
        /**
         * placeholder for hours field in timepicker
         */
        this.hoursPlaceholder = 'HH';
        /**
         * placeholder for minutes field in timepicker
         */
        this.minutesPlaceholder = 'MM';
        /**
         * placeholder for seconds field in timepicker
         */
        this.secondsPlaceholder = 'SS';
    }
    TimepickerConfig.decorators = [
        { type: Injectable }
    ];
    return TimepickerConfig;
}());
export { TimepickerConfig };
if (false) {
    /**
     * hours change step
     * @type {?}
     */
    TimepickerConfig.prototype.hourStep;
    /**
     * hours change step
     * @type {?}
     */
    TimepickerConfig.prototype.minuteStep;
    /**
     * seconds changes step
     * @type {?}
     */
    TimepickerConfig.prototype.secondsStep;
    /**
     * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
     * @type {?}
     */
    TimepickerConfig.prototype.showMeridian;
    /**
     * meridian labels based on locale
     * @type {?}
     */
    TimepickerConfig.prototype.meridians;
    /**
     * if true hours and minutes fields will be readonly
     * @type {?}
     */
    TimepickerConfig.prototype.readonlyInput;
    /**
     * if true hours and minutes fields will be disabled
     * @type {?}
     */
    TimepickerConfig.prototype.disabled;
    /**
     * if true scroll inside hours and minutes inputs will change time
     * @type {?}
     */
    TimepickerConfig.prototype.mousewheel;
    /**
     * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
     * @type {?}
     */
    TimepickerConfig.prototype.arrowkeys;
    /**
     * if true spinner arrows above and below the inputs will be shown
     * @type {?}
     */
    TimepickerConfig.prototype.showSpinners;
    /**
     * show seconds in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.showSeconds;
    /**
     * show minutes in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.showMinutes;
    /**
     * minimum time user can select
     * @type {?}
     */
    TimepickerConfig.prototype.min;
    /**
     * maximum time user can select
     * @type {?}
     */
    TimepickerConfig.prototype.max;
    /**
     * placeholder for hours field in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.hoursPlaceholder;
    /**
     * placeholder for minutes field in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.minutesPlaceholder;
    /**
     * placeholder for seconds field in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.secondsPlaceholder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvIiwic291cmNlcyI6WyJ0aW1lcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUczQztJQUFBOzs7O1FBR0UsYUFBUSxHQUFHLENBQUMsQ0FBQzs7OztRQUViLGVBQVUsR0FBRyxDQUFDLENBQUM7Ozs7UUFFZixnQkFBVyxHQUFHLEVBQUUsQ0FBQzs7OztRQUVqQixpQkFBWSxHQUFHLElBQUksQ0FBQzs7OztRQUVwQixjQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7UUFFekIsa0JBQWEsR0FBRyxLQUFLLENBQUM7Ozs7UUFFdEIsYUFBUSxHQUFHLEtBQUssQ0FBQzs7OztRQUVqQixlQUFVLEdBQUcsSUFBSSxDQUFDOzs7O1FBRWxCLGNBQVMsR0FBRyxJQUFJLENBQUM7Ozs7UUFFakIsaUJBQVksR0FBRyxJQUFJLENBQUM7Ozs7UUFFcEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7Ozs7UUFFcEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7Ozs7UUFNbkIscUJBQWdCLEdBQUcsSUFBSSxDQUFDOzs7O1FBRXhCLHVCQUFrQixHQUFHLElBQUksQ0FBQzs7OztRQUUxQix1QkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7Z0JBcENBLFVBQVU7O0lBb0NYLHVCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FuQ1ksZ0JBQWdCOzs7Ozs7SUFFM0Isb0NBQWE7Ozs7O0lBRWIsc0NBQWU7Ozs7O0lBRWYsdUNBQWlCOzs7OztJQUVqQix3Q0FBb0I7Ozs7O0lBRXBCLHFDQUF5Qjs7Ozs7SUFFekIseUNBQXNCOzs7OztJQUV0QixvQ0FBaUI7Ozs7O0lBRWpCLHNDQUFrQjs7Ozs7SUFFbEIscUNBQWlCOzs7OztJQUVqQix3Q0FBb0I7Ozs7O0lBRXBCLHVDQUFvQjs7Ozs7SUFFcEIsdUNBQW1COzs7OztJQUVuQiwrQkFBVTs7Ozs7SUFFViwrQkFBVTs7Ozs7SUFFViw0Q0FBd0I7Ozs7O0lBRXhCLDhDQUEwQjs7Ozs7SUFFMUIsOENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogUHJvdmlkZXMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHZhbHVlcyBmb3IgdGltZXBpY2tlciAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJDb25maWcge1xuICAvKiogaG91cnMgY2hhbmdlIHN0ZXAgKi9cbiAgaG91clN0ZXAgPSAxO1xuICAvKiogaG91cnMgY2hhbmdlIHN0ZXAgKi9cbiAgbWludXRlU3RlcCA9IDU7XG4gIC8qKiBzZWNvbmRzIGNoYW5nZXMgc3RlcCAqL1xuICBzZWNvbmRzU3RlcCA9IDEwO1xuICAvKiogaWYgdHJ1ZSB3b3JrcyBpbiAxMkggbW9kZSBhbmQgZGlzcGxheXMgQU0vUE0uIElmIGZhbHNlIHdvcmtzIGluIDI0SCBtb2RlIGFuZCBoaWRlcyBBTS9QTSAqL1xuICBzaG93TWVyaWRpYW4gPSB0cnVlO1xuICAvKiogbWVyaWRpYW4gbGFiZWxzIGJhc2VkIG9uIGxvY2FsZSAqL1xuICBtZXJpZGlhbnMgPSBbJ0FNJywgJ1BNJ107XG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIHJlYWRvbmx5ICovXG4gIHJlYWRvbmx5SW5wdXQgPSBmYWxzZTtcbiAgLyoqIGlmIHRydWUgaG91cnMgYW5kIG1pbnV0ZXMgZmllbGRzIHdpbGwgYmUgZGlzYWJsZWQgKi9cbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgLyoqIGlmIHRydWUgc2Nyb2xsIGluc2lkZSBob3VycyBhbmQgbWludXRlcyBpbnB1dHMgd2lsbCBjaGFuZ2UgdGltZSAqL1xuICBtb3VzZXdoZWVsID0gdHJ1ZTtcbiAgLyoqIGlmIHRydWUgdGhlIHZhbHVlcyBvZiBob3VycyBhbmQgbWludXRlcyBjYW4gYmUgY2hhbmdlZCB1c2luZyB0aGUgdXAvZG93biBhcnJvdyBrZXlzIG9uIHRoZSBrZXlib2FyZCAqL1xuICBhcnJvd2tleXMgPSB0cnVlO1xuICAvKiogaWYgdHJ1ZSBzcGlubmVyIGFycm93cyBhYm92ZSBhbmQgYmVsb3cgdGhlIGlucHV0cyB3aWxsIGJlIHNob3duICovXG4gIHNob3dTcGlubmVycyA9IHRydWU7XG4gIC8qKiBzaG93IHNlY29uZHMgaW4gdGltZXBpY2tlciAqL1xuICBzaG93U2Vjb25kcyA9IGZhbHNlO1xuICAvKiogc2hvdyBtaW51dGVzIGluIHRpbWVwaWNrZXIgKi9cbiAgc2hvd01pbnV0ZXMgPSB0cnVlO1xuICAvKiogbWluaW11bSB0aW1lIHVzZXIgY2FuIHNlbGVjdCAqL1xuICBtaW46IERhdGU7XG4gIC8qKiBtYXhpbXVtIHRpbWUgdXNlciBjYW4gc2VsZWN0ICovXG4gIG1heDogRGF0ZTtcbiAgLyoqIHBsYWNlaG9sZGVyIGZvciBob3VycyBmaWVsZCBpbiB0aW1lcGlja2VyICovXG4gIGhvdXJzUGxhY2Vob2xkZXIgPSAnSEgnO1xuICAvKiogcGxhY2Vob2xkZXIgZm9yIG1pbnV0ZXMgZmllbGQgaW4gdGltZXBpY2tlciAqL1xuICBtaW51dGVzUGxhY2Vob2xkZXIgPSAnTU0nO1xuICAvKiogcGxhY2Vob2xkZXIgZm9yIHNlY29uZHMgZmllbGQgaW4gdGltZXBpY2tlciAqL1xuICBzZWNvbmRzUGxhY2Vob2xkZXIgPSAnU1MnO1xufVxuIl19