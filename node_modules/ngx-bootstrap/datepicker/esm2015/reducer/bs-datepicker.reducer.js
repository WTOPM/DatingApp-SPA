/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:max-file-line-count
import { initialDatepickerState } from './bs-datepicker.state';
import { BsDatepickerActions } from './bs-datepicker.actions';
import { calcDaysCalendar } from '../engine/calc-days-calendar';
import { formatDaysCalendar } from '../engine/format-days-calendar';
import { flagDaysCalendar } from '../engine/flag-days-calendar';
import { setFullDate, shiftDate, isArray, isDateValid, startOf, getLocale, isAfter, isBefore } from 'ngx-bootstrap/chronos';
import { canSwitchMode } from '../engine/view-mode';
import { formatMonthsCalendar } from '../engine/format-months-calendar';
import { flagMonthsCalendar } from '../engine/flag-months-calendar';
import { formatYearsCalendar, initialYearShift, yearsPerCalendar } from '../engine/format-years-calendar';
import { flagYearsCalendar } from '../engine/flag-years-calendar';
import { getYearsCalendarInitialDate } from '../utils/bs-calendar-utils';
/* tslint:disable-next-line: cyclomatic-complexity */
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function bsDatepickerReducer(state = initialDatepickerState, action) {
    switch (action.type) {
        case BsDatepickerActions.CALCULATE: {
            return calculateReducer(state);
        }
        case BsDatepickerActions.FORMAT: {
            return formatReducer(state, action);
        }
        case BsDatepickerActions.FLAG: {
            return flagReducer(state, action);
        }
        case BsDatepickerActions.NAVIGATE_OFFSET: {
            return navigateOffsetReducer(state, action);
        }
        case BsDatepickerActions.NAVIGATE_TO: {
            /** @type {?} */
            const payload = action.payload;
            /** @type {?} */
            const date = setFullDate(state.view.date, payload.unit);
            /** @type {?} */
            let newState;
            /** @type {?} */
            let mode;
            if (canSwitchMode(payload.viewMode, state.minMode)) {
                mode = payload.viewMode;
                newState = { view: { date, mode } };
            }
            else {
                mode = state.view.mode;
                newState = { selectedDate: date, view: { date, mode } };
            }
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.CHANGE_VIEWMODE: {
            if (!canSwitchMode(action.payload, state.minMode)) {
                return state;
            }
            /** @type {?} */
            const date = state.view.date;
            /** @type {?} */
            const mode = action.payload;
            /** @type {?} */
            const newState = { view: { date, mode } };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.HOVER: {
            return Object.assign({}, state, { hoveredDate: action.payload });
        }
        case BsDatepickerActions.SELECT: {
            /** @type {?} */
            const newState = {
                selectedDate: action.payload,
                view: state.view
            };
            /** @type {?} */
            const mode = state.view.mode;
            /** @type {?} */
            const _date = action.payload || state.view.date;
            /** @type {?} */
            const date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode, date };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SET_OPTIONS: {
            /** @type {?} */
            const newState = action.payload;
            // preserve view mode
            /** @type {?} */
            const mode = newState.minMode ? newState.minMode : state.view.mode;
            /** @type {?} */
            const _viewDate = isDateValid(newState.value) && newState.value
                || isArray(newState.value) && isDateValid(newState.value[0]) && newState.value[0]
                || state.view.date;
            /** @type {?} */
            const date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
            newState.view = { mode, date };
            // update selected value
            if (newState.value) {
                // if new value is array we work with date range
                if (isArray(newState.value)) {
                    newState.selectedRange = newState.value;
                }
                // if new value is a date -> datepicker
                if (newState.value instanceof Date) {
                    newState.selectedDate = newState.value;
                }
                // provided value is not supported :)
                // need to report it somehow
            }
            return Object.assign({}, state, newState);
        }
        // date range picker
        case BsDatepickerActions.SELECT_RANGE: {
            /** @type {?} */
            const newState = {
                selectedRange: action.payload,
                view: state.view
            };
            /** @type {?} */
            const mode = state.view.mode;
            /** @type {?} */
            const _date = action.payload && action.payload[0] || state.view.date;
            /** @type {?} */
            const date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode, date };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SET_MIN_DATE: {
            return Object.assign({}, state, {
                minDate: action.payload
            });
        }
        case BsDatepickerActions.SET_MAX_DATE: {
            return Object.assign({}, state, {
                maxDate: action.payload
            });
        }
        case BsDatepickerActions.SET_IS_DISABLED: {
            return Object.assign({}, state, {
                isDisabled: action.payload
            });
        }
        case BsDatepickerActions.SET_DATE_CUSTOM_CLASSES: {
            return Object.assign({}, state, {
                dateCustomClasses: action.payload
            });
        }
        default:
            return state;
    }
}
/**
 * @param {?} state
 * @return {?}
 */
function calculateReducer(state) {
    // how many calendars
    /** @type {?} */
    const displayMonths = state.displayMonths;
    // use selected date on initial rendering if set
    /** @type {?} */
    let viewDate = state.view.date;
    if (state.view.mode === 'day') {
        if (state.showPreviousMonth && state.selectedRange.length === 0) {
            viewDate = shiftDate(viewDate, { month: -1 });
        }
        state.monthViewOptions.firstDayOfWeek = getLocale(state.locale).firstDayOfWeek();
        /** @type {?} */
        const monthsModel = new Array(displayMonths);
        for (let monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
            viewDate = shiftDate(viewDate, { month: 1 });
        }
        return Object.assign({}, state, { monthsModel });
    }
    if (state.view.mode === 'month') {
        /** @type {?} */
        const monthsCalendar = new Array(displayMonths);
        for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar });
    }
    if (state.view.mode === 'year') {
        /** @type {?} */
        const yearsCalendarModel = new Array(displayMonths);
        for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state), state.minMode === 'year' ? getYearsCalendarInitialDate(state, calendarIndex) : undefined);
            viewDate = shiftDate(viewDate, { year: yearsPerCalendar });
        }
        return Object.assign({}, state, { yearsCalendarModel });
    }
    return state;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function formatReducer(state, action) {
    if (state.view.mode === 'day') {
        /** @type {?} */
        const formattedMonths = state.monthsModel.map((/**
         * @param {?} month
         * @param {?} monthIndex
         * @return {?}
         */
        (month, monthIndex) => formatDaysCalendar(month, getFormatOptions(state), monthIndex)));
        return Object.assign({}, state, { formattedMonths });
    }
    // how many calendars
    /** @type {?} */
    const displayMonths = state.displayMonths;
    // check initial rendering
    // use selected date on initial rendering if set
    /** @type {?} */
    let viewDate = state.view.date;
    if (state.view.mode === 'month') {
        /** @type {?} */
        const monthsCalendar = new Array(displayMonths);
        for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar });
    }
    if (state.view.mode === 'year') {
        /** @type {?} */
        const yearsCalendarModel = new Array(displayMonths);
        for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 16 });
        }
        return Object.assign({}, state, { yearsCalendarModel });
    }
    return state;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function flagReducer(state, action) {
    if (state.view.mode === 'day') {
        /** @type {?} */
        const flaggedMonths = state.formattedMonths.map((/**
         * @param {?} formattedMonth
         * @param {?} monthIndex
         * @return {?}
         */
        (formattedMonth, monthIndex) => flagDaysCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            daysDisabled: state.daysDisabled,
            datesDisabled: state.datesDisabled,
            hoveredDate: state.hoveredDate,
            selectedDate: state.selectedDate,
            selectedRange: state.selectedRange,
            displayMonths: state.displayMonths,
            dateCustomClasses: state.dateCustomClasses,
            monthIndex
        })));
        return Object.assign({}, state, { flaggedMonths });
    }
    if (state.view.mode === 'month') {
        /** @type {?} */
        const flaggedMonthsCalendar = state.monthsCalendar.map((/**
         * @param {?} formattedMonth
         * @param {?} monthIndex
         * @return {?}
         */
        (formattedMonth, monthIndex) => flagMonthsCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            hoveredMonth: state.hoveredMonth,
            selectedDate: state.selectedDate,
            displayMonths: state.displayMonths,
            monthIndex
        })));
        return Object.assign({}, state, { flaggedMonthsCalendar });
    }
    if (state.view.mode === 'year') {
        /** @type {?} */
        const yearsCalendarFlagged = state.yearsCalendarModel.map((/**
         * @param {?} formattedMonth
         * @param {?} yearIndex
         * @return {?}
         */
        (formattedMonth, yearIndex) => flagYearsCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            hoveredYear: state.hoveredYear,
            selectedDate: state.selectedDate,
            displayMonths: state.displayMonths,
            yearIndex
        })));
        return Object.assign({}, state, { yearsCalendarFlagged });
    }
    return state;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function navigateOffsetReducer(state, action) {
    /** @type {?} */
    const newState = {
        view: {
            mode: state.view.mode,
            date: shiftViewDate(state, action)
        }
    };
    return Object.assign({}, state, newState);
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function shiftViewDate(state, action) {
    if (state.view.mode === 'year' && state.minMode === 'year') {
        /** @type {?} */
        const initialDate = getYearsCalendarInitialDate(state, 0);
        /** @type {?} */
        const middleDate = shiftDate(initialDate, { year: -initialYearShift });
        return shiftDate(middleDate, action.payload);
    }
    return shiftDate(startOf(state.view.date, 'month'), action.payload);
}
/**
 * @param {?} state
 * @return {?}
 */
function getFormatOptions(state) {
    return {
        locale: state.locale,
        monthTitle: state.monthTitle,
        yearTitle: state.yearTitle,
        dayLabel: state.dayLabel,
        monthLabel: state.monthLabel,
        yearLabel: state.yearLabel,
        weekNumbers: state.weekNumbers
    };
}
/**
 * if view date is provided (bsValue|ngModel) it should be shown
 * if view date is not provider:
 * if minDate>currentDate (default view value), show minDate
 * if maxDate<currentDate(default view value) show maxDate
 * @param {?} viewDate
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
function getViewDate(viewDate, minDate, maxDate) {
    /** @type {?} */
    const _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
    if (minDate && isAfter(minDate, _date, 'day')) {
        return minDate;
    }
    if (maxDate && isBefore(maxDate, _date, 'day')) {
        return maxDate;
    }
    return _date;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci9icy1kYXRlcGlja2VyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXFCLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsT0FBTyxFQUNQLFdBQVcsRUFDWCxPQUFPLEVBQ1AsU0FBUyxFQUNULE9BQU8sRUFDUCxRQUFRLEVBQ1QsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFbEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7QUFJekUsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEtBQUssR0FBRyxzQkFBc0IsRUFDOUIsTUFBYztJQUNoRCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FB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LEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0RSxDQUFDOzs7OztBQUVELFNBQVMsZ0JBQWdCLENBQUMsS0FBd0I7SUFDaEQsT0FBTztRQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtRQUVwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7UUFDNUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1FBRTFCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtRQUN4QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7UUFDNUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1FBRTFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztLQUMvQixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7QUFRRCxTQUFTLFdBQVcsQ0FBQyxRQUF1QixFQUFFLE9BQWEsRUFBRSxPQUFhOztVQUNsRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO0lBRTlELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzdDLE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0lBRUQsSUFBSSxPQUFPLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDOUMsT0FBTyxPQUFPLENBQUM7S0FDaEI7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdGF0ZSwgaW5pdGlhbERhdGVwaWNrZXJTdGF0ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5zdGF0ZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xuaW1wb3J0IHsgY2FsY0RheXNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9jYWxjLWRheXMtY2FsZW5kYXInO1xuaW1wb3J0IHsgZm9ybWF0RGF5c0NhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2Zvcm1hdC1kYXlzLWNhbGVuZGFyJztcbmltcG9ydCB7IGZsYWdEYXlzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvZmxhZy1kYXlzLWNhbGVuZGFyJztcbmltcG9ydCB7XG4gIHNldEZ1bGxEYXRlLFxuICBzaGlmdERhdGUsXG4gIGlzQXJyYXksXG4gIGlzRGF0ZVZhbGlkLFxuICBzdGFydE9mLFxuICBnZXRMb2NhbGUsXG4gIGlzQWZ0ZXIsXG4gIGlzQmVmb3JlXG59IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBjYW5Td2l0Y2hNb2RlIH0gZnJvbSAnLi4vZW5naW5lL3ZpZXctbW9kZSc7XG5pbXBvcnQgeyBmb3JtYXRNb250aHNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyJztcbmltcG9ydCB7IGZsYWdNb250aHNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mbGFnLW1vbnRocy1jYWxlbmRhcic7XG5pbXBvcnQgeyBmb3JtYXRZZWFyc0NhbGVuZGFyLCBpbml0aWFsWWVhclNoaWZ0LCB5ZWFyc1BlckNhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhcic7XG5pbXBvcnQgeyBmbGFnWWVhcnNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mbGFnLXllYXJzLWNhbGVuZGFyJztcbmltcG9ydCB7IEJzVmlld05hdmlnYXRpb25FdmVudCwgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsIEJzRGF0ZXBpY2tlclZpZXdNb2RlIH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IGdldFllYXJzQ2FsZW5kYXJJbml0aWFsRGF0ZSB9IGZyb20gJy4uL3V0aWxzL2JzLWNhbGVuZGFyLXV0aWxzJztcblxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGN5Y2xvbWF0aWMtY29tcGxleGl0eSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJzRGF0ZXBpY2tlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsRGF0ZXBpY2tlclN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBBY3Rpb24pOiBCc0RhdGVwaWNrZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuQ0FMQ1VMQVRFOiB7XG4gICAgICByZXR1cm4gY2FsY3VsYXRlUmVkdWNlcihzdGF0ZSk7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkZPUk1BVDoge1xuICAgICAgcmV0dXJuIGZvcm1hdFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkZMQUc6IHtcbiAgICAgIHJldHVybiBmbGFnUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuTkFWSUdBVEVfT0ZGU0VUOiB7XG4gICAgICByZXR1cm4gbmF2aWdhdGVPZmZzZXRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgIH1cblxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5OQVZJR0FURV9UTzoge1xuICAgICAgY29uc3QgcGF5bG9hZDogQnNWaWV3TmF2aWdhdGlvbkV2ZW50ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIGNvbnN0IGRhdGUgPSBzZXRGdWxsRGF0ZShzdGF0ZS52aWV3LmRhdGUsIHBheWxvYWQudW5pdCk7XG4gICAgICBsZXQgbmV3U3RhdGU7XG4gICAgICBsZXQgbW9kZTogQnNEYXRlcGlja2VyVmlld01vZGU7XG4gICAgICBpZiAoY2FuU3dpdGNoTW9kZShwYXlsb2FkLnZpZXdNb2RlLCBzdGF0ZS5taW5Nb2RlKSkge1xuICAgICAgICBtb2RlID0gcGF5bG9hZC52aWV3TW9kZTtcbiAgICAgICAgbmV3U3RhdGUgPSB7IHZpZXc6IHsgZGF0ZSwgbW9kZSB9IH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb2RlID0gc3RhdGUudmlldy5tb2RlO1xuICAgICAgICBuZXdTdGF0ZSA9IHsgc2VsZWN0ZWREYXRlOiBkYXRlLCB2aWV3OiB7IGRhdGUsIG1vZGUgfSB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuQ0hBTkdFX1ZJRVdNT0RFOiB7XG4gICAgICBpZiAoIWNhblN3aXRjaE1vZGUoYWN0aW9uLnBheWxvYWQsIHN0YXRlLm1pbk1vZGUpKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGUgPSBzdGF0ZS52aWV3LmRhdGU7XG4gICAgICBjb25zdCBtb2RlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgdmlldzogeyBkYXRlLCBtb2RlIH0gfTtcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkhPVkVSOiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgaG92ZXJlZERhdGU6IGFjdGlvbi5wYXlsb2FkIH0pO1xuICAgIH1cblxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1Q6IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICBzZWxlY3RlZERhdGU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB2aWV3OiBzdGF0ZS52aWV3XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBtb2RlID0gc3RhdGUudmlldy5tb2RlO1xuICAgICAgY29uc3QgX2RhdGUgPSBhY3Rpb24ucGF5bG9hZCB8fCBzdGF0ZS52aWV3LmRhdGU7XG4gICAgICBjb25zdCBkYXRlID0gZ2V0Vmlld0RhdGUoX2RhdGUsIHN0YXRlLm1pbkRhdGUsIHN0YXRlLm1heERhdGUpO1xuICAgICAgbmV3U3RhdGUudmlldyA9IHsgbW9kZSwgZGF0ZSB9O1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX09QVElPTlM6IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAvLyBwcmVzZXJ2ZSB2aWV3IG1vZGVcbiAgICAgIGNvbnN0IG1vZGUgPSBuZXdTdGF0ZS5taW5Nb2RlID8gbmV3U3RhdGUubWluTW9kZSA6IHN0YXRlLnZpZXcubW9kZTtcbiAgICAgIGNvbnN0IF92aWV3RGF0ZSA9IGlzRGF0ZVZhbGlkKG5ld1N0YXRlLnZhbHVlKSAmJiBuZXdTdGF0ZS52YWx1ZVxuICAgICAgICB8fCBpc0FycmF5KG5ld1N0YXRlLnZhbHVlKSAmJiBpc0RhdGVWYWxpZChuZXdTdGF0ZS52YWx1ZVswXSkgJiYgbmV3U3RhdGUudmFsdWVbMF1cbiAgICAgICAgfHwgc3RhdGUudmlldy5kYXRlO1xuICAgICAgY29uc3QgZGF0ZSA9IGdldFZpZXdEYXRlKF92aWV3RGF0ZSwgbmV3U3RhdGUubWluRGF0ZSwgbmV3U3RhdGUubWF4RGF0ZSk7XG4gICAgICBuZXdTdGF0ZS52aWV3ID0geyBtb2RlLCBkYXRlIH07XG4gICAgICAvLyB1cGRhdGUgc2VsZWN0ZWQgdmFsdWVcbiAgICAgIGlmIChuZXdTdGF0ZS52YWx1ZSkge1xuICAgICAgICAvLyBpZiBuZXcgdmFsdWUgaXMgYXJyYXkgd2Ugd29yayB3aXRoIGRhdGUgcmFuZ2VcbiAgICAgICAgaWYgKGlzQXJyYXkobmV3U3RhdGUudmFsdWUpKSB7XG4gICAgICAgICAgbmV3U3RhdGUuc2VsZWN0ZWRSYW5nZSA9IG5ld1N0YXRlLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbmV3IHZhbHVlIGlzIGEgZGF0ZSAtPiBkYXRlcGlja2VyXG4gICAgICAgIGlmIChuZXdTdGF0ZS52YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5zZWxlY3RlZERhdGUgPSBuZXdTdGF0ZS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByb3ZpZGVkIHZhbHVlIGlzIG5vdCBzdXBwb3J0ZWQgOilcbiAgICAgICAgLy8gbmVlZCB0byByZXBvcnQgaXQgc29tZWhvd1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICAvLyBkYXRlIHJhbmdlIHBpY2tlclxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1RfUkFOR0U6IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICBzZWxlY3RlZFJhbmdlOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgdmlldzogc3RhdGUudmlld1xuICAgICAgfTtcblxuICAgICAgY29uc3QgbW9kZSA9IHN0YXRlLnZpZXcubW9kZTtcbiAgICAgIGNvbnN0IF9kYXRlID0gYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWRbMF0gfHwgc3RhdGUudmlldy5kYXRlO1xuICAgICAgY29uc3QgZGF0ZSA9IGdldFZpZXdEYXRlKF9kYXRlLCBzdGF0ZS5taW5EYXRlLCBzdGF0ZS5tYXhEYXRlKTtcbiAgICAgIG5ld1N0YXRlLnZpZXcgPSB7IG1vZGUsIGRhdGUgfTtcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9NSU5fREFURToge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1pbkRhdGU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KTtcbiAgICB9XG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9NQVhfREFURToge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1heERhdGU6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KTtcbiAgICB9XG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9JU19ESVNBQkxFRDoge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRGlzYWJsZWQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KTtcbiAgICB9XG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9EQVRFX0NVU1RPTV9DTEFTU0VTOiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0ZUN1c3RvbUNsYXNzZXM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVJlZHVjZXIoc3RhdGU6IEJzRGF0ZXBpY2tlclN0YXRlKTogQnNEYXRlcGlja2VyU3RhdGUge1xuICAvLyBob3cgbWFueSBjYWxlbmRhcnNcbiAgY29uc3QgZGlzcGxheU1vbnRocyA9IHN0YXRlLmRpc3BsYXlNb250aHM7XG4gIC8vIHVzZSBzZWxlY3RlZCBkYXRlIG9uIGluaXRpYWwgcmVuZGVyaW5nIGlmIHNldFxuICBsZXQgdmlld0RhdGUgPSBzdGF0ZS52aWV3LmRhdGU7XG5cbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ2RheScpIHtcbiAgICBpZiAoc3RhdGUuc2hvd1ByZXZpb3VzTW9udGggJiYgc3RhdGUuc2VsZWN0ZWRSYW5nZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IG1vbnRoOiAtMSB9KTtcbiAgICB9XG5cbiAgICBzdGF0ZS5tb250aFZpZXdPcHRpb25zLmZpcnN0RGF5T2ZXZWVrID0gZ2V0TG9jYWxlKHN0YXRlLmxvY2FsZSkuZmlyc3REYXlPZldlZWsoKTtcbiAgICBjb25zdCBtb250aHNNb2RlbCA9IG5ldyBBcnJheShkaXNwbGF5TW9udGhzKTtcbiAgICBmb3IgKGxldCBtb250aEluZGV4ID0gMDsgbW9udGhJbmRleCA8IGRpc3BsYXlNb250aHM7IG1vbnRoSW5kZXgrKykge1xuICAgICAgLy8gdG9kbzogZm9yIHVubGlua2VkIGNhbGVuZGFycyBpdCB3aWxsIGJlIGhhcmRlclxuICAgICAgbW9udGhzTW9kZWxbbW9udGhJbmRleF0gPSBjYWxjRGF5c0NhbGVuZGFyKFxuICAgICAgICB2aWV3RGF0ZSxcbiAgICAgICAgc3RhdGUubW9udGhWaWV3T3B0aW9uc1xuICAgICAgKTtcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IG1vbnRoOiAxIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBtb250aHNNb2RlbCB9KTtcbiAgfVxuXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICdtb250aCcpIHtcbiAgICBjb25zdCBtb250aHNDYWxlbmRhciA9IG5ldyBBcnJheShkaXNwbGF5TW9udGhzKTtcbiAgICBmb3IgKFxuICAgICAgbGV0IGNhbGVuZGFySW5kZXggPSAwO1xuICAgICAgY2FsZW5kYXJJbmRleCA8IGRpc3BsYXlNb250aHM7XG4gICAgICBjYWxlbmRhckluZGV4KytcbiAgICApIHtcbiAgICAgIC8vIHRvZG86IGZvciB1bmxpbmtlZCBjYWxlbmRhcnMgaXQgd2lsbCBiZSBoYXJkZXJcbiAgICAgIG1vbnRoc0NhbGVuZGFyW2NhbGVuZGFySW5kZXhdID0gZm9ybWF0TW9udGhzQ2FsZW5kYXIoXG4gICAgICAgIHZpZXdEYXRlLFxuICAgICAgICBnZXRGb3JtYXRPcHRpb25zKHN0YXRlKVxuICAgICAgKTtcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IDEgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IG1vbnRoc0NhbGVuZGFyIH0pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ3llYXInKSB7XG4gICAgY29uc3QgeWVhcnNDYWxlbmRhck1vZGVsID0gbmV3IEFycmF5KGRpc3BsYXlNb250aHMpO1xuXG4gICAgZm9yIChcbiAgICAgIGxldCBjYWxlbmRhckluZGV4ID0gMDtcbiAgICAgIGNhbGVuZGFySW5kZXggPCBkaXNwbGF5TW9udGhzO1xuICAgICAgY2FsZW5kYXJJbmRleCsrXG4gICAgKSB7XG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXG4gICAgICB5ZWFyc0NhbGVuZGFyTW9kZWxbY2FsZW5kYXJJbmRleF0gPSBmb3JtYXRZZWFyc0NhbGVuZGFyKFxuICAgICAgICB2aWV3RGF0ZSxcbiAgICAgICAgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSksXG4gICAgICAgIHN0YXRlLm1pbk1vZGUgPT09ICd5ZWFyJyA/IGdldFllYXJzQ2FsZW5kYXJJbml0aWFsRGF0ZShzdGF0ZSwgY2FsZW5kYXJJbmRleCkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgICB2aWV3RGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiB5ZWFyc1BlckNhbGVuZGFyIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB5ZWFyc0NhbGVuZGFyTW9kZWwgfSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFJlZHVjZXIoc3RhdGU6IEJzRGF0ZXBpY2tlclN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IEFjdGlvbik6IEJzRGF0ZXBpY2tlclN0YXRlIHtcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ2RheScpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWRNb250aHMgPSBzdGF0ZS5tb250aHNNb2RlbC5tYXAoKG1vbnRoLCBtb250aEluZGV4KSA9PlxuICAgICAgZm9ybWF0RGF5c0NhbGVuZGFyKG1vbnRoLCBnZXRGb3JtYXRPcHRpb25zKHN0YXRlKSwgbW9udGhJbmRleClcbiAgICApO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGZvcm1hdHRlZE1vbnRocyB9KTtcbiAgfVxuXG4gIC8vIGhvdyBtYW55IGNhbGVuZGFyc1xuICBjb25zdCBkaXNwbGF5TW9udGhzID0gc3RhdGUuZGlzcGxheU1vbnRocztcbiAgLy8gY2hlY2sgaW5pdGlhbCByZW5kZXJpbmdcbiAgLy8gdXNlIHNlbGVjdGVkIGRhdGUgb24gaW5pdGlhbCByZW5kZXJpbmcgaWYgc2V0XG4gIGxldCB2aWV3RGF0ZSA9IHN0YXRlLnZpZXcuZGF0ZTtcblxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAnbW9udGgnKSB7XG4gICAgY29uc3QgbW9udGhzQ2FsZW5kYXIgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XG4gICAgZm9yIChcbiAgICAgIGxldCBjYWxlbmRhckluZGV4ID0gMDtcbiAgICAgIGNhbGVuZGFySW5kZXggPCBkaXNwbGF5TW9udGhzO1xuICAgICAgY2FsZW5kYXJJbmRleCsrXG4gICAgKSB7XG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXG4gICAgICBtb250aHNDYWxlbmRhcltjYWxlbmRhckluZGV4XSA9IGZvcm1hdE1vbnRoc0NhbGVuZGFyKFxuICAgICAgICB2aWV3RGF0ZSxcbiAgICAgICAgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSlcbiAgICAgICk7XG4gICAgICB2aWV3RGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiAxIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBtb250aHNDYWxlbmRhciB9KTtcbiAgfVxuXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICd5ZWFyJykge1xuICAgIGNvbnN0IHllYXJzQ2FsZW5kYXJNb2RlbCA9IG5ldyBBcnJheShkaXNwbGF5TW9udGhzKTtcbiAgICBmb3IgKFxuICAgICAgbGV0IGNhbGVuZGFySW5kZXggPSAwO1xuICAgICAgY2FsZW5kYXJJbmRleCA8IGRpc3BsYXlNb250aHM7XG4gICAgICBjYWxlbmRhckluZGV4KytcbiAgICApIHtcbiAgICAgIC8vIHRvZG86IGZvciB1bmxpbmtlZCBjYWxlbmRhcnMgaXQgd2lsbCBiZSBoYXJkZXJcbiAgICAgIHllYXJzQ2FsZW5kYXJNb2RlbFtjYWxlbmRhckluZGV4XSA9IGZvcm1hdFllYXJzQ2FsZW5kYXIoXG4gICAgICAgIHZpZXdEYXRlLFxuICAgICAgICBnZXRGb3JtYXRPcHRpb25zKHN0YXRlKVxuICAgICAgKTtcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IDE2IH0pO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB5ZWFyc0NhbGVuZGFyTW9kZWwgfSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGZsYWdSZWR1Y2VyKHN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogQWN0aW9uKTogQnNEYXRlcGlja2VyU3RhdGUge1xuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAnZGF5Jykge1xuICAgIGNvbnN0IGZsYWdnZWRNb250aHMgPSBzdGF0ZS5mb3JtYXR0ZWRNb250aHMubWFwKFxuICAgICAgKGZvcm1hdHRlZE1vbnRoLCBtb250aEluZGV4KSA9PlxuICAgICAgICBmbGFnRGF5c0NhbGVuZGFyKGZvcm1hdHRlZE1vbnRoLCB7XG4gICAgICAgICAgaXNEaXNhYmxlZDogc3RhdGUuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtaW5EYXRlOiBzdGF0ZS5taW5EYXRlLFxuICAgICAgICAgIG1heERhdGU6IHN0YXRlLm1heERhdGUsXG4gICAgICAgICAgZGF5c0Rpc2FibGVkOiBzdGF0ZS5kYXlzRGlzYWJsZWQsXG4gICAgICAgICAgZGF0ZXNEaXNhYmxlZDogc3RhdGUuZGF0ZXNEaXNhYmxlZCxcbiAgICAgICAgICBob3ZlcmVkRGF0ZTogc3RhdGUuaG92ZXJlZERhdGUsXG4gICAgICAgICAgc2VsZWN0ZWREYXRlOiBzdGF0ZS5zZWxlY3RlZERhdGUsXG4gICAgICAgICAgc2VsZWN0ZWRSYW5nZTogc3RhdGUuc2VsZWN0ZWRSYW5nZSxcbiAgICAgICAgICBkaXNwbGF5TW9udGhzOiBzdGF0ZS5kaXNwbGF5TW9udGhzLFxuICAgICAgICAgIGRhdGVDdXN0b21DbGFzc2VzOiBzdGF0ZS5kYXRlQ3VzdG9tQ2xhc3NlcyxcbiAgICAgICAgICBtb250aEluZGV4XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBmbGFnZ2VkTW9udGhzIH0pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ21vbnRoJykge1xuICAgIGNvbnN0IGZsYWdnZWRNb250aHNDYWxlbmRhciA9IHN0YXRlLm1vbnRoc0NhbGVuZGFyLm1hcChcbiAgICAgIChmb3JtYXR0ZWRNb250aCwgbW9udGhJbmRleCkgPT5cbiAgICAgICAgZmxhZ01vbnRoc0NhbGVuZGFyKGZvcm1hdHRlZE1vbnRoLCB7XG4gICAgICAgICAgaXNEaXNhYmxlZDogc3RhdGUuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtaW5EYXRlOiBzdGF0ZS5taW5EYXRlLFxuICAgICAgICAgIG1heERhdGU6IHN0YXRlLm1heERhdGUsXG4gICAgICAgICAgaG92ZXJlZE1vbnRoOiBzdGF0ZS5ob3ZlcmVkTW9udGgsXG4gICAgICAgICAgc2VsZWN0ZWREYXRlOiBzdGF0ZS5zZWxlY3RlZERhdGUsXG4gICAgICAgICAgZGlzcGxheU1vbnRoczogc3RhdGUuZGlzcGxheU1vbnRocyxcbiAgICAgICAgICBtb250aEluZGV4XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBmbGFnZ2VkTW9udGhzQ2FsZW5kYXIgfSk7XG4gIH1cblxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAneWVhcicpIHtcbiAgICBjb25zdCB5ZWFyc0NhbGVuZGFyRmxhZ2dlZCA9IHN0YXRlLnllYXJzQ2FsZW5kYXJNb2RlbC5tYXAoXG4gICAgICAoZm9ybWF0dGVkTW9udGgsIHllYXJJbmRleCkgPT5cbiAgICAgICAgZmxhZ1llYXJzQ2FsZW5kYXIoZm9ybWF0dGVkTW9udGgsIHtcbiAgICAgICAgICBpc0Rpc2FibGVkOiBzdGF0ZS5pc0Rpc2FibGVkLFxuICAgICAgICAgIG1pbkRhdGU6IHN0YXRlLm1pbkRhdGUsXG4gICAgICAgICAgbWF4RGF0ZTogc3RhdGUubWF4RGF0ZSxcbiAgICAgICAgICBob3ZlcmVkWWVhcjogc3RhdGUuaG92ZXJlZFllYXIsXG4gICAgICAgICAgc2VsZWN0ZWREYXRlOiBzdGF0ZS5zZWxlY3RlZERhdGUsXG4gICAgICAgICAgZGlzcGxheU1vbnRoczogc3RhdGUuZGlzcGxheU1vbnRocyxcbiAgICAgICAgICB5ZWFySW5kZXhcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHllYXJzQ2FsZW5kYXJGbGFnZ2VkIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBuYXZpZ2F0ZU9mZnNldFJlZHVjZXIoc3RhdGU6IEJzRGF0ZXBpY2tlclN0YXRlLCBhY3Rpb246IEFjdGlvbik6IEJzRGF0ZXBpY2tlclN0YXRlIHtcbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgdmlldzoge1xuICAgICAgbW9kZTogc3RhdGUudmlldy5tb2RlLFxuICAgICAgZGF0ZTogc2hpZnRWaWV3RGF0ZShzdGF0ZSwgYWN0aW9uKVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcbn1cblxuZnVuY3Rpb24gc2hpZnRWaWV3RGF0ZShzdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUsIGFjdGlvbjogQWN0aW9uKTogRGF0ZSB7XG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICd5ZWFyJyAmJiBzdGF0ZS5taW5Nb2RlID09PSAneWVhcicpIHtcbiAgICBjb25zdCBpbml0aWFsRGF0ZSA9IGdldFllYXJzQ2FsZW5kYXJJbml0aWFsRGF0ZShzdGF0ZSwgMCk7XG4gICAgY29uc3QgbWlkZGxlRGF0ZSA9IHNoaWZ0RGF0ZShpbml0aWFsRGF0ZSwgeyB5ZWFyOiAtaW5pdGlhbFllYXJTaGlmdCB9KTtcblxuICAgIHJldHVybiBzaGlmdERhdGUobWlkZGxlRGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xuICB9XG5cbiAgcmV0dXJuIHNoaWZ0RGF0ZShzdGFydE9mKHN0YXRlLnZpZXcuZGF0ZSwgJ21vbnRoJyksIGFjdGlvbi5wYXlsb2FkKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUpOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgbG9jYWxlOiBzdGF0ZS5sb2NhbGUsXG5cbiAgICBtb250aFRpdGxlOiBzdGF0ZS5tb250aFRpdGxlLFxuICAgIHllYXJUaXRsZTogc3RhdGUueWVhclRpdGxlLFxuXG4gICAgZGF5TGFiZWw6IHN0YXRlLmRheUxhYmVsLFxuICAgIG1vbnRoTGFiZWw6IHN0YXRlLm1vbnRoTGFiZWwsXG4gICAgeWVhckxhYmVsOiBzdGF0ZS55ZWFyTGFiZWwsXG5cbiAgICB3ZWVrTnVtYmVyczogc3RhdGUud2Vla051bWJlcnNcbiAgfTtcbn1cblxuLyoqXG4gKiBpZiB2aWV3IGRhdGUgaXMgcHJvdmlkZWQgKGJzVmFsdWV8bmdNb2RlbCkgaXQgc2hvdWxkIGJlIHNob3duXG4gKiBpZiB2aWV3IGRhdGUgaXMgbm90IHByb3ZpZGVyOlxuICogaWYgbWluRGF0ZT5jdXJyZW50RGF0ZSAoZGVmYXVsdCB2aWV3IHZhbHVlKSwgc2hvdyBtaW5EYXRlXG4gKiBpZiBtYXhEYXRlPGN1cnJlbnREYXRlKGRlZmF1bHQgdmlldyB2YWx1ZSkgc2hvdyBtYXhEYXRlXG4gKi9cbmZ1bmN0aW9uIGdldFZpZXdEYXRlKHZpZXdEYXRlOiBEYXRlIHwgRGF0ZVtdLCBtaW5EYXRlOiBEYXRlLCBtYXhEYXRlOiBEYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gQXJyYXkuaXNBcnJheSh2aWV3RGF0ZSkgPyB2aWV3RGF0ZVswXSA6IHZpZXdEYXRlO1xuXG4gIGlmIChtaW5EYXRlICYmIGlzQWZ0ZXIobWluRGF0ZSwgX2RhdGUsICdkYXknKSkge1xuICAgIHJldHVybiBtaW5EYXRlO1xuICB9XG5cbiAgaWYgKG1heERhdGUgJiYgaXNCZWZvcmUobWF4RGF0ZSwgX2RhdGUsICdkYXknKSkge1xuICAgIHJldHVybiBtYXhEYXRlO1xuICB9XG5cbiAgcmV0dXJuIF9kYXRlO1xufVxuIl19