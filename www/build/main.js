webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slider_slider__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__camera_camera__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tabs = [
            { root: __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], tabTitle: 'Home', tabIcon: 'home' },
            { root: __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */], tabTitle: 'About', tabIcon: 'information-circle' },
            { root: __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */], tabTitle: 'Contact', tabIcon: 'contacts' },
            { root: __WEBPACK_IMPORTED_MODULE_4__slider_slider__["a" /* SliderPage */], tabTitle: 'Slider', tabIcon: 'apps' },
            { root: __WEBPACK_IMPORTED_MODULE_5__camera_camera__["a" /* CameraPage */], tabTitle: 'Camera', tabIcon: 'camera' },
        ];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\learning\ionic\ionic3-camera-image-filter\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n   \n  <ion-tab [root]="tab.root" [tabTitle]="tab.tabTitle" [tabIcon]="tab.tabIcon" *ngFor="let tab of tabs"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"C:\learning\ionic\ionic3-camera-image-filter\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\learning\ionic\ionic3-camera-image-filter\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button full color="primary">Take Snap</button>\n</ion-content>\n'/*ion-inline-end:"C:\learning\ionic\ionic3-camera-image-filter\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\learning\ionic\ionic3-camera-image-filter\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\learning\ionic\ionic3-camera-image-filter\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\learning\ionic\ionic3-camera-image-filter\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\learning\ionic\ionic3-camera-image-filter\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SliderPage = (function () {
    function SliderPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SliderPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    return SliderPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Slides */])
], SliderPage.prototype, "slides", void 0);
SliderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-slider',template:/*ion-inline-start:"C:\learning\ionic\ionic3-camera-image-filter\src\pages\slider\slider.html"*/'<ion-slides>\n\n  <ion-slide>\n\n    <h1>Slide 1</h1>\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <h1>Slide 2</h1>\n\n  </ion-slide>\n\n  <ion-slide>\n\n    <h1>Slide 3</h1>\n\n  </ion-slide>\n\n</ion-slides>'/*ion-inline-end:"C:\learning\ionic\ionic3-camera-image-filter\src\pages\slider\slider.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], SliderPage);

//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_library__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CameraPage = (function () {
    function CameraPage(navCtrl, camera, alertCtrl, photoLibrary, document) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.photoLibrary = photoLibrary;
        this.document = document;
        this.filter = 1;
        this.filters = {
            blur: { name: 'blur', max: '10', min: '0', value: 0, map: "px" },
            opacity: { name: 'opacity', max: 100, min: 1, value: '100', map: "%" },
            grayscale: { name: 'grayscale', max: 100, min: 0, value: 0, map: "%" },
            brightness: { name: 'brightness', max: 500, min: 25, value: 100, map: "%" },
            sepia: { name: 'sepia', max: '100', min: '0', value: '0', map: "%" }
        };
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: true,
            mediaType: this.camera.MediaType.PICTURE
        };
    }
    CameraPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.image = new Image();
        this.image.src = 'assets/camera.jpg';
        this.canvasContext = this.getCanvas();
        this.image.onload = function () { return _this.canvasContext.drawImage(_this.image, 0, 0, 400, 400); };
    };
    CameraPage.prototype.getSnap = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            //console.log(imageData);
            // this.showAlert("",imageData);
            _this.image.src = base64Image;
        }, function (err) {
            // Handle error
            _this.showAlert('Error', 'failed to click image');
        });
    };
    CameraPage.prototype.showAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title || "Alert",
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    CameraPage.prototype.applyFilterFromJs = function (filterProp, event) {
        switch (filterProp.name) {
            case "blur":
                this.filters.blur.value = event.value;
                break;
            case "opacity":
                this.filters.opacity.value = event.value;
                break;
            case "grayscale":
                this.filters.grayscale.value = event.value;
                break;
            case "brightness":
                this.filters.brightness.value = event.value;
                break;
            case "sepia":
                this.filters.sepia.value = event.value;
                break;
            default:
                break;
        }
        this.canvasContext.filter = "\n    blur(" + this.filters.blur.value + this.filters.blur.map + ")\n    opacity(" + this.filters.opacity.value + this.filters.opacity.map + ")\n    grayscale(" + this.filters.grayscale.value + this.filters.grayscale.map + ")\n    brightness(" + this.filters.brightness.value + this.filters.brightness.map + ")\n    sepia(" + this.filters.sepia.value + this.filters.sepia.map + ")\n  ";
        this.canvasContext.drawImage(this.image, 0, 0, 400, 400);
    };
    CameraPage.prototype.getCanvas = function () {
        var canvas = this.document.getElementById('canvas');
        var context = canvas.getContext('2d');
        return context;
    };
    CameraPage.prototype.save = function () {
        var album = 'MyAppName';
        var image = this.canvasContext.toDataURL();
        this.photoLibrary.saveImage(image, album);
    };
    return CameraPage;
}());
CameraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-camera',template:/*ion-inline-start:"C:\learning\ionic\ionic3-camera-image-filter\src\pages\camera\camera.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Camera\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button full color="primary" (click)="getSnap()">Take Snap</button>\n    <button ion-button full  (click)="save()">Save</button>\n    <div class="center">\n    <canvas id="canvas"></canvas>\n    </div>\n    <ion-list  no-lines>\n    <div *ngFor="let filterProp of filters|keys">\n      <h3>{{filterProp.value.name | uppercase}}</h3>\n  <ion-range [min]="filterProp.value.min" [(ngModel)]="filterProp.value.value" [max]="filterProp.value.max" \n      (ionChange)="applyFilterFromJs(filterProp.value,$event)">\n       <ion-label range-left>{{filterProp.value.min}}</ion-label>\n      <ion-label range-right>{{filterProp.value.max}}</ion-label>\n  </ion-range>\n</div>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\learning\ionic\ionic3-camera-image-filter\src\pages\camera\camera.html"*/
    }),
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_library__["a" /* PhotoLibrary */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_library__["a" /* PhotoLibrary */]) === "function" && _d || Object, Object])
], CameraPage);

var _a, _b, _c, _d;
//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_slider_slider__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_camera_camera__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_keys_pipe__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_photo_library__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_slider_slider__["a" /* SliderPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_camera_camera__["a" /* CameraPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pipes_keys_pipe__["a" /* KeysPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_slider_slider__["a" /* SliderPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_camera_camera__["a" /* CameraPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_photo_library__["a" /* PhotoLibrary */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\learning\ionic\ionic3-camera-image-filter\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\learning\ionic\ionic3-camera-image-filter\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'keys' })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map