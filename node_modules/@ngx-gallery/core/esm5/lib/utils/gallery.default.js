/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ImageSize, GalleryAction, ThumbnailsMode, LoadingStrategy, SlidingDirection, ThumbnailsPosition, DotsPosition, CounterPosition } from '../models/constants';
/**
 * Initial state
 * @type {?}
 */
export var defaultState = {
    action: GalleryAction.INITIALIZED,
    isPlaying: false,
    hasNext: false,
    hasPrev: false,
    currIndex: 0,
    items: []
};
/** @type {?} */
export var defaultConfig = {
    nav: true,
    loop: true,
    zoomOut: 0,
    dots: false,
    thumb: true,
    dotsSize: 30,
    counter: true,
    gestures: true,
    autoPlay: false,
    thumbWidth: 120,
    thumbHeight: 90,
    panSensitivity: 25,
    disableThumb: false,
    playerInterval: 3000,
    imageSize: ImageSize.Contain,
    thumbMode: ThumbnailsMode.Strict,
    dotsPosition: DotsPosition.Bottom,
    counterPosition: CounterPosition.Top,
    thumbPosition: ThumbnailsPosition.Bottom,
    loadingStrategy: LoadingStrategy.Default,
    slidingDirection: SlidingDirection.Horizontal,
    navIcon: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg width=\"512px\" height=\"512px\" enable-background=\"new 0 0 240.823 240.823\" version=\"1.1\" viewBox=\"0 0 240.823 240.823\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m183.19 111.82l-108.3-108.26c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.3-108.26c4.68-4.691 4.68-12.511-0.012-17.19z\" fill=\"#fff\"/></svg>",
    loadingIcon: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg stroke=\"#fff\" viewBox=\"0 0 44 44\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\" stroke-width=\"2\"><circle cx=\"22\" cy=\"22\" r=\"1\"><animate attributeName=\"r\" begin=\"0s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.165, 0.84, 0.44, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 20\"/><animate attributeName=\"stroke-opacity\" begin=\"0s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.3, 0.61, 0.355, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 0\"/></circle><circle cx=\"22\" cy=\"22\" r=\"1\"><animate attributeName=\"r\" begin=\"-0.9s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.165, 0.84, 0.44, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 20\"/><animate attributeName=\"stroke-opacity\" begin=\"-0.9s\" calcMode=\"spline\" dur=\"1.8s\" keySplines=\"0.3, 0.61, 0.355, 1\" keyTimes=\"0; 1\" repeatCount=\"indefinite\" values=\"1; 0\"/></circle></g></svg>"
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5kZWZhdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZ2FsbGVyeS5kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGFBQWEsRUFDYixjQUFjLEVBQ2QsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixrQkFBa0IsRUFFbEIsWUFBWSxFQUNaLGVBQWUsRUFDaEIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFLN0IsTUFBTSxLQUFPLFlBQVksR0FBaUI7SUFDeEMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxXQUFXO0lBQ2pDLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLE9BQU8sRUFBRSxLQUFLO0lBQ2QsT0FBTyxFQUFFLEtBQUs7SUFDZCxTQUFTLEVBQUUsQ0FBQztJQUNaLEtBQUssRUFBRSxFQUFFO0NBQ1Y7O0FBRUQsTUFBTSxLQUFPLGFBQWEsR0FBa0I7SUFDMUMsR0FBRyxFQUFFLElBQUk7SUFDVCxJQUFJLEVBQUUsSUFBSTtJQUNWLE9BQU8sRUFBRSxDQUFDO0lBQ1YsSUFBSSxFQUFFLEtBQUs7SUFDWCxLQUFLLEVBQUUsSUFBSTtJQUNYLFFBQVEsRUFBRSxFQUFFO0lBQ1osT0FBTyxFQUFFLElBQUk7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxLQUFLO0lBQ2YsVUFBVSxFQUFFLEdBQUc7SUFDZixXQUFXLEVBQUUsRUFBRTtJQUNmLGNBQWMsRUFBRSxFQUFFO0lBQ2xCLFlBQVksRUFBRSxLQUFLO0lBQ25CLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTztJQUM1QixTQUFTLEVBQUUsY0FBYyxDQUFDLE1BQU07SUFDaEMsWUFBWSxFQUFFLFlBQVksQ0FBQyxNQUFNO0lBQ2pDLGVBQWUsRUFBRSxlQUFlLENBQUMsR0FBRztJQUNwQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsTUFBTTtJQUN4QyxlQUFlLEVBQUUsZUFBZSxDQUFDLE9BQU87SUFDeEMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsVUFBVTtJQUM3QyxPQUFPLEVBQUUsMmZBQXFlO0lBQzllLFdBQVcsRUFBRSw4K0JBQWs1QjtDQUNoNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbWFnZVNpemUsXG4gIEdhbGxlcnlBY3Rpb24sXG4gIFRodW1ibmFpbHNNb2RlLFxuICBMb2FkaW5nU3RyYXRlZ3ksXG4gIFNsaWRpbmdEaXJlY3Rpb24sXG4gIFRodW1ibmFpbHNQb3NpdGlvbixcbiAgSW1hZ2VMb2FkZXJNb2RlLFxuICBEb3RzUG9zaXRpb24sXG4gIENvdW50ZXJQb3NpdGlvblxufSBmcm9tICcuLi9tb2RlbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IEdhbGxlcnlTdGF0ZSB9IGZyb20gJy4uL21vZGVscy9nYWxsZXJ5Lm1vZGVsJztcbmltcG9ydCB7IEdhbGxlcnlDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnLm1vZGVsJztcblxuLyoqIEluaXRpYWwgc3RhdGUgKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdGU6IEdhbGxlcnlTdGF0ZSA9IHtcbiAgYWN0aW9uOiBHYWxsZXJ5QWN0aW9uLklOSVRJQUxJWkVELFxuICBpc1BsYXlpbmc6IGZhbHNlLFxuICBoYXNOZXh0OiBmYWxzZSxcbiAgaGFzUHJldjogZmFsc2UsXG4gIGN1cnJJbmRleDogMCxcbiAgaXRlbXM6IFtdXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbmZpZzogR2FsbGVyeUNvbmZpZyA9IHtcbiAgbmF2OiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICB6b29tT3V0OiAwLFxuICBkb3RzOiBmYWxzZSxcbiAgdGh1bWI6IHRydWUsXG4gIGRvdHNTaXplOiAzMCxcbiAgY291bnRlcjogdHJ1ZSxcbiAgZ2VzdHVyZXM6IHRydWUsXG4gIGF1dG9QbGF5OiBmYWxzZSxcbiAgdGh1bWJXaWR0aDogMTIwLFxuICB0aHVtYkhlaWdodDogOTAsXG4gIHBhblNlbnNpdGl2aXR5OiAyNSxcbiAgZGlzYWJsZVRodW1iOiBmYWxzZSxcbiAgcGxheWVySW50ZXJ2YWw6IDMwMDAsXG4gIGltYWdlU2l6ZTogSW1hZ2VTaXplLkNvbnRhaW4sXG4gIHRodW1iTW9kZTogVGh1bWJuYWlsc01vZGUuU3RyaWN0LFxuICBkb3RzUG9zaXRpb246IERvdHNQb3NpdGlvbi5Cb3R0b20sXG4gIGNvdW50ZXJQb3NpdGlvbjogQ291bnRlclBvc2l0aW9uLlRvcCxcbiAgdGh1bWJQb3NpdGlvbjogVGh1bWJuYWlsc1Bvc2l0aW9uLkJvdHRvbSxcbiAgbG9hZGluZ1N0cmF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3kuRGVmYXVsdCxcbiAgc2xpZGluZ0RpcmVjdGlvbjogU2xpZGluZ0RpcmVjdGlvbi5Ib3Jpem9udGFsLFxuICBuYXZJY29uOiBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHN2ZyB3aWR0aD1cIjUxMnB4XCIgaGVpZ2h0PVwiNTEycHhcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMjQwLjgyMyAyNDAuODIzXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMjQwLjgyMyAyNDAuODIzXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm0xODMuMTkgMTExLjgybC0xMDguMy0xMDguMjZjLTQuNzUyLTQuNzQtMTIuNDUxLTQuNzQtMTcuMjE1IDAtNC43NTIgNC43NC00Ljc1MiAxMi40MzkgMCAxNy4xNzlsOTkuNzA3IDk5LjY3MS05OS42OTUgOTkuNjcxYy00Ljc1MiA0Ljc0LTQuNzUyIDEyLjQzOSAwIDE3LjE5MSA0Ljc1MiA0Ljc0IDEyLjQ2MyA0Ljc0IDE3LjIxNSAwbDEwOC4zLTEwOC4yNmM0LjY4LTQuNjkxIDQuNjgtMTIuNTExLTAuMDEyLTE3LjE5elwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPmAsXG4gIGxvYWRpbmdJY29uOiBgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+PHN2ZyBzdHJva2U9XCIjZmZmXCIgdmlld0JveD1cIjAgMCA0NCA0NFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2Utd2lkdGg9XCIyXCI+PGNpcmNsZSBjeD1cIjIyXCIgY3k9XCIyMlwiIHI9XCIxXCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiBiZWdpbj1cIjBzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBkdXI9XCIxLjhzXCIga2V5U3BsaW5lcz1cIjAuMTY1LCAwLjg0LCAwLjQ0LCAxXCIga2V5VGltZXM9XCIwOyAxXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgdmFsdWVzPVwiMTsgMjBcIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInN0cm9rZS1vcGFjaXR5XCIgYmVnaW49XCIwc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIgZHVyPVwiMS44c1wiIGtleVNwbGluZXM9XCIwLjMsIDAuNjEsIDAuMzU1LCAxXCIga2V5VGltZXM9XCIwOyAxXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgdmFsdWVzPVwiMTsgMFwiLz48L2NpcmNsZT48Y2lyY2xlIGN4PVwiMjJcIiBjeT1cIjIyXCIgcj1cIjFcIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIGJlZ2luPVwiLTAuOXNcIiBjYWxjTW9kZT1cInNwbGluZVwiIGR1cj1cIjEuOHNcIiBrZXlTcGxpbmVzPVwiMC4xNjUsIDAuODQsIDAuNDQsIDFcIiBrZXlUaW1lcz1cIjA7IDFcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiB2YWx1ZXM9XCIxOyAyMFwiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwic3Ryb2tlLW9wYWNpdHlcIiBiZWdpbj1cIi0wLjlzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBkdXI9XCIxLjhzXCIga2V5U3BsaW5lcz1cIjAuMywgMC42MSwgMC4zNTUsIDFcIiBrZXlUaW1lcz1cIjA7IDFcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiB2YWx1ZXM9XCIxOyAwXCIvPjwvY2lyY2xlPjwvZz48L3N2Zz5gXG59O1xuIl19