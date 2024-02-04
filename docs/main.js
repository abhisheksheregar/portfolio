"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 2899:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9058);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 8641:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 500);
/* harmony import */ var driver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! driver.js */ 6574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9058);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5518);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ 9900);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 4130);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8274);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 4313);
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage/homepage.component */ 8728);










//import "driver.js/dist/driver.css";
class AppComponent {
  constructor(dialog, overlay) {
    this.dialog = dialog;
    this.overlay = overlay;
    this.title = 'portfolio';
    this.className = '';
    this.toggleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(false);
  }
  ngOnInit() {
    this.toggleControl.valueChanges.subscribe(darkMode => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      console.log(this.className);
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
    const driverObj = (0,driver_js__WEBPACK_IMPORTED_MODULE_0__.driver)({
      showProgress: true,
      steps: [{
        element: '.homecard',
        popover: {
          title: 'Welcome. Thanks for coming. Here is a short tour of my profile',
          side: 'top',
          align: 'end'
        }
      }, {
        element: '.ToggleBtn',
        popover: {
          title: 'Here you can switch between dark and light theme'
        }
      }, {
        element: '.container-fluid',
        popover: {
          title: 'My Skill Set',
          description: 'You can scroll the slider to see more'
        }
      }, {
        element: '.aboutme',
        popover: {
          title: 'My Professional Work Experience'
        }
      }, {
        element: '.projects',
        popover: {
          title: 'Some of my works',
          description: 'You can click on the "click to view" to view more'
        }
      }, {
        element: '.educational1',
        popover: {
          title: 'Qualifications',
          side: 'left',
          align: 'start'
        }
      }, {
        element: '.skills1',
        popover: {
          title: 'Certifications ',
          side: 'top',
          align: 'end'
        }
      }, {
        element: '.thanks',
        popover: {
          title: 'Thank you!',
          description: 'Once again thank you for showing interest in my profile.'
        }
      }]
    });
    driverObj.drive();
    const container = document.getElementById("main");
    container.scroll(0, 0);
  }
  showDialog() {}
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayContainer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    hostVars: 2,
    hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.className);
      }
    },
    decls: 9,
    vars: 1,
    consts: [[1, "mat-app-background"], [2, "position", "absolute", "right", "0"], [1, "ToggleBtn", 3, "formControl"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div")(2, "span", 1)(3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "brightness_5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-slide-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "bedtime");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-homepage");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.toggleControl);
      }
    },
    dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__.HomepageComponent],
    styles: [".ts[_ngcontent-%COMP%] {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnRze1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3574:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 2454);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 2899);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 8641);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 6290);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 4130);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 500);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8274);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 8433);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 6318);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 4313);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 5518);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 3660);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 4694);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 7258);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 4304);
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ 8728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9058);


















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__.HomepageComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule]
  });
})();

/***/ }),

/***/ 8728:
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageComponent: () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typewriter-effect/dist/core */ 4863);
/* harmony import */ var typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9058);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 500);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 6318);




//import "driver.js/dist/driver.css";
class HomepageComponent {
  ngAfterViewInit() {
    var app = document.querySelector('.tw');
    console.log(app);
    var typewriter = new (typewriter_effect_dist_core__WEBPACK_IMPORTED_MODULE_0___default())(app, {
      loop: true,
      delay: 100
    });
    typewriter.pauseFor(500).typeString(' I am a <span style="color: #27ae60;">Software</span>').pauseFor(800).deleteChars(8).typeString(' <span style="color: #27ae60;">MEAN stack</span>').pauseFor(800).deleteChars(10).typeString(' <span style="color: #27ae60;">Web</span>').pauseFor(800).deleteChars(3).typeString(' <span style="color: #27ae60;">Hybrid mobile app</span> developer').pauseFor(800).start();
  }
  constructor(fb) {
    this.fb = fb;
    this.rating3 = 0;
    this.form = this.fb.group({
      rating: [5]
    });
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function HomepageComponent_Factory(t) {
    return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HomepageComponent,
    selectors: [["app-homepage"]],
    decls: 115,
    vars: 0,
    consts: [["id", "main", 1, "mat-app-background", "content", 2, "margin", "1rem"], [1, "row"], [1, "col-lg-12"], ["appearance", "outlined", 1, "homecard"], ["align", "center"], [1, "tw"], [1, "container-fluid"], [1, "row", "flex-row", "flex-nowrap", 2, "overflow-x", "scroll"], ["appearance", "outlined", 2, "border", "1px solid black", "margin-right", "10px"], [2, "height", "150px", "width", "150px !important"], ["width", "150px", "height", "150px", "src", "assets/angular.png"], ["width", "150px", "height", "150px", "src", "assets/nodejs.png"], ["width", "150px", "height", "150px", "src", "assets/html5.png"], ["width", "150px", "height", "150px", "src", "assets/javascript.png"], ["width", "150px", "height", "150px", "src", "assets/ionic.png"], ["width", "150px", "height", "150px", "src", "assets/sql.png"], ["width", "150px", "height", "150px", "src", "assets/amazon.png"], ["width", "150px", "height", "150px", "src", "assets/java.png"], ["width", "150px", "height", "150px", "src", "assets/mongo.png"], ["width", "150px", "height", "150px", "src", "assets/net.png"], [1, "col-lg-9"], ["appearance", "outlined", 1, "aboutme"], [2, "margin", "0px !important"], [1, "row", "no-gutters", 2, "margin-top", "2rem"], ["appearance", "outlined", 1, "projects"], ["href", "https://ieeexplore.ieee.org/document/8537290"], ["href", "https://www.npmjs.com/package/csvtoxlsxconverter"], [1, "col-lg-3"], [1, "educational1"], ["appearance", "outlined", 1, "educational"], [2, "margin-bottom", "1rem !important"], [1, "subtext"], [1, "row", "no-gutters", 2, "margin-top", "2rem", "margin-bottom", "2rem"], [1, "col-lg-12", "skills1"], ["appearance", "outlined", 1, "skills"]],
    template: function HomepageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-card", 3)(4, "div", 4)(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Hi ! I am Abhishek Sheregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "My Skill Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "mat-card", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card", 8)(16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-card", 8)(19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-card", 8)(22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-card", 8)(25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-card", 8)(28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-card", 8)(31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-card", 8)(34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-card", 8)(37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-card", 8)(40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 1)(43, "div", 20)(44, "div")(45, "mat-card", 21)(46, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Industry Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div")(49, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Capgemini");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Professional 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "December 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br")(57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div")(59, "h3", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Wipro Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Project Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "April 2019 - December 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br")(67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 23)(69, "div", 2)(70, "mat-card", 24)(71, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Research Papers/ Open Source Contribution");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Secure Approach for Encrypting Data IEEE Conference");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Successfully published a research paper on Modified RSA algorithm at IEEE conference ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Click to View");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "br")(81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "CSV TO XLSX Converter NPM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Successfully deployed CSV TO XLSX Converter package to NPM repository ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Click to View");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 27)(89, "div", 28)(90, "mat-card", 29)(91, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Educational Qualifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 30)(94, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "BE in Computer Engineering 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Mumbai University");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 30)(99, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "HSC Science 2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Maharashtra State Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 30)(104, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "SSC 2012");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Maharashtra State Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 32)(109, "div", 33)(110, "mat-card", 34)(111, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Microsoft AZ-900 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard],
    styles: [".carosselimg[_ngcontent-%COMP%] {\n  height: 250px;\n  overflow-y: hidden !important;\n  width: 150%;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.educational[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  height: 360px;\n  border: 1px solid black;\n}\n\n.homecard[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 200px;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.subtext[_ngcontent-%COMP%] {\n  line-height: 12px;\n}\n\n.skills[_ngcontent-%COMP%] {\n  height: 255px;\n  border: 1px solid black;\n}\n\n.content[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n\n.aboutme[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  height: 360px;\n  border: 1px solid black;\n}\n\n.projects[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: auto;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.tw[_ngcontent-%COMP%] {\n  font-family: \"Nanum Myeongjo\", serif;\n  font-size: 5rem;\n}\n\n.headertxt[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n@media (max-width: 769px) {\n  .tw[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .headertxt[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px !important;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBQ0Q7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFFSSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFLQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtBQUZKOztBQUlBO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBRUU7RUFDRTtJQUNFLGVBQUE7RUFDSjtFQUNFO0lBQ0UsZUFBQTtFQUNKO0FBQ0Y7QUFFRTtFQUNFLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxvREFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLG9EQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3NzZWxpbWd7XHJcbiBoZWlnaHQ6MjUwcHg7ICAgXHJcbiBvdmVyZmxvdy15OiBoaWRkZW4gICFpbXBvcnRhbnQ7XHJcbiB3aWR0aDogMTUwJTtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW17XHJcbiAgICB3aWR0aDogMTAwJTsgIFxyXG4gICBcclxufVxyXG5cclxuLmVkdWNhdGlvbmFse1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIGhlaWdodDogMzYwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uaG9tZWNhcmR7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWx7XHJcbiAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5zdWJ0ZXh0e1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5za2lsbHN7XHJcbiAgICBoZWlnaHQ6IDI1NXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hYm91dG1le1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIGhlaWdodDogMzYwcHg7O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0c3tcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxufVxyXG5cclxubWF0LWNhcmR7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi50d3tcclxuICAgIGZvbnQtZmFtaWx5OiAnTmFudW0gTXllb25nam8nLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTo1cmVtO1xyXG4gIH1cclxuICAuaGVhZGVydHh0e1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY5cHgpe1xyXG4gICAgLnR3e1xyXG4gICAgICBmb250LXNpemU6MnJlbTtcclxuICAgIH1cclxuICAgIC5oZWFkZXJ0eHR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDNweCAhaW1wb3J0YW50O1xyXG59XHJcbiBcclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIFxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjUpOyBcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 108:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 6792:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9058);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 3574);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 108);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6792)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map