(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ "./src/app/pages/portfolio/portfolio.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/resume/resume.component */ "./src/app/pages/resume/resume.component.ts");
/* harmony import */ var _pages_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/skill/skill.component */ "./src/app/pages/skill/skill.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var app_routes = [
    { path: '', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'resume', component: _pages_resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"] },
    { path: 'portfolio', component: _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"] },
    { path: 'skill', component: _pages_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__["SkillComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(app_routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portafolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.keys.ts":
/*!*****************************!*\
  !*** ./src/app/app.keys.ts ***!
  \*****************************/
/*! exports provided: googleMapsKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleMapsKey", function() { return googleMapsKey; });
var googleMapsKey = 'AIzaSyCOO3IRsJ_GVkfnYLS6StWhEjZcas7E0vk';


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.keys */ "./src/app/app.keys.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_skill_skill_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/skill/skill.component */ "./src/app/pages/skill/skill.component.ts");
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ "./src/app/pages/portfolio/portfolio.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_resume_resume_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/resume/resume.component */ "./src/app/pages/resume/resume.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//routes

// Keys

//Dependecies










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _pages_skill_skill_component__WEBPACK_IMPORTED_MODULE_10__["SkillComponent"],
                _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _pages_resume_resume_component__WEBPACK_IMPORTED_MODULE_13__["ResumeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4__["RoundProgressModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: _app_keys__WEBPACK_IMPORTED_MODULE_3__["googleMapsKey"]
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* About Person area css\r\n============================================================================================ */\r\n.about_person_area {\r\n    background: #fff;\r\n    margin-top: 60px;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n  }\r\n.about_person_area .person_img {\r\n    max-width: 400px;\r\n  }\r\n.about_person_area .person_img img {\r\n    max-width: 386px;\r\n    margin-top: 18%;\r\n  }\r\n.about_person_area .person_img .download_btn {\r\n    margin-top: 66px;\r\n  }\r\n.about_person_area .person_details {\r\n    margin-left: -30px;\r\n  }\r\n.about_person_area .person_details h3 {\r\n    font-size: 36px;\r\n    color: #333333;\r\n    text-transform: uppercase;\r\n    font-family: \"Raleway\", sans-serif;\r\n    font-weight: bold;\r\n    padding-bottom: 10px;\r\n  }\r\n.about_person_area .person_details h3 span {\r\n    color: #fec608;\r\n  }\r\n.about_person_area .person_details h4 {\r\n    font-size: 18px;\r\n    font-family: \"Raleway\", sans-serif;\r\n    font-weight: bold;\r\n    color: #666666;\r\n    padding-bottom: 15px;\r\n  }\r\n.about_person_area .person_details p {\r\n    font-size: 19px;\r\n    line-height: 24px;\r\n    color: #333333;\r\n    font-family: \"Raleway\", sans-serif;\r\n    font-weight: 400;\r\n  }\r\n.about_person_area .person_details .person_information {\r\n    padding: 15px 0px 25px 0px;\r\n  }\r\n.about_person_area .person_details .person_information ul {\r\n    display: inline-block;\r\n  }\r\n.about_person_area .person_details .person_information ul li a {\r\n    font-size: 13px;\r\n    line-height: 26px;\r\n    color: #333333;\r\n    font-family: \"Raleway\", sans-serif;\r\n  }\r\n.about_person_area .person_details .person_information ul + ul {\r\n    padding-left: 55px;\r\n  }\r\n.about_person_area .person_details .person_information ul + ul li a {\r\n    font-size: 13px;\r\n    line-height: 26px;\r\n    color: #666666;\r\n    font-family: \"Raleway\", sans-serif;\r\n  }\r\n.social_icon li {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n  }\r\n.social_icon li a {\r\n    height: 40px;\r\n    width: 40px;\r\n    text-align: center;\r\n    border: 1px solid #677fb5;\r\n    display: block;\r\n    line-height: 40px;\r\n    font-size: 18px;\r\n    border-radius: 5px;\r\n    transition: all 400ms linear 0s;\r\n    color: #677fb5;\r\n  }\r\n.social_icon li:nth-child(2) a {\r\n    color: #70c2e9;\r\n    border-color: #70c2e9;\r\n  }\r\n.social_icon li:nth-child(2):hover a {\r\n    background: #70c2e9;\r\n  }\r\n.social_icon li:nth-child(3) a {\r\n    color: #895a4d;\r\n    border-color: #895a4d;\r\n  }\r\n.social_icon li:nth-child(3):hover a {\r\n    background: #895a4d;\r\n  }\r\n.social_icon li:nth-child(4) a {\r\n    color: #d34836;\r\n    border-color: #d34836;\r\n  }\r\n.social_icon li:nth-child(4):hover a {\r\n    background: #d34836;\r\n  }\r\n.social_icon li:nth-child(5) a {\r\n    color: #007ab9;\r\n    border-color: #007ab9;\r\n  }\r\n.social_icon li:nth-child(5):hover a {\r\n    background: #007ab9;\r\n  }\r\n.social_icon li:nth-child(6) a {\r\n    color: #d8545d;\r\n    border-color: #d8545d;\r\n  }\r\n.social_icon li:nth-child(6):hover a {\r\n    background: #d8545d;\r\n  }\r\n.social_icon li:nth-child(7) a {\r\n    color: #5ecbf3;\r\n    border-color: #5ecbf3;\r\n  }\r\n.social_icon li:nth-child(7):hover a {\r\n    background: #5ecbf3;\r\n  }\r\n.social_icon li:nth-child(8) a {\r\n    color: #ff3ba4;\r\n    border-color: #ff3ba4;\r\n  }\r\n.social_icon li:nth-child(8):hover a {\r\n    background: #ff3ba4;\r\n  }\r\n.social_icon li:last-child {\r\n    margin-right: 0px;\r\n  }\r\n.social_icon li:last-child a {\r\n    color: #faaa5e;\r\n    border-color: #faaa5e;\r\n  }\r\n.social_icon li:last-child:hover a {\r\n    background: #faaa5e;\r\n  }\r\n.social_icon li:hover a {\r\n    background: #677fb5;\r\n    color: #fff;\r\n  }\r\n/* End About Person area css\r\n  ============================================================================================ */\r\n/*---------------------------------------------------- */\r\n/*----------------------------------------------------*/\r\n/* Download BTN area css\r\n  ============================================================================================ */\r\n.download_btn {\r\n    display: block;\r\n    background: #fec608;\r\n    text-align: center;\r\n    line-height: 33px;\r\n    border-radius: 20px;\r\n    color: #222222;\r\n    font-size: 21px;\r\n    font-weight: 700;\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n.download_btn span {\r\n    display: inline-block;\r\n    width: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    height: 100%;\r\n    transition: all 400ms linear 0s;\r\n  }\r\n.download_btn:before {\r\n    content: \"\\f019\";\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    line-height: 40px;\r\n    font-size: 18px;\r\n    color: #222222;\r\n    top: -100%;\r\n    left: 0px;\r\n    font-family: FontAwesome;\r\n    transition: all 200ms ease-in;\r\n  }\r\n.download_btn:hover span {\r\n    -webkit-transform: translateY(300%);\r\n    transform: translateY(300%);\r\n  }\r\n.download_btn:hover:before {\r\n    top: 0px;\r\n  }\r\n.contact_btn {\r\n    max-width: 140px;\r\n    display: block;\r\n    line-height: 40px;\r\n    color: #fff;\r\n    font-family: \"Raleway\", sans-serif;\r\n    box-shadow: none !important;\r\n    outline: none !important;\r\n    border: none;\r\n    border-radius: 0px;\r\n    background: #fec608;\r\n    width: 100%;\r\n    padding: 0px;\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n.contact_btn span {\r\n    display: inline-block;\r\n    width: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    height: 100%;\r\n    transition: all 400ms linear 0s;\r\n  }\r\n.contact_btn:before {\r\n    content: \"\\f1d8\";\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    line-height: 40px;\r\n    font-size: 18px;\r\n    color: #fff;\r\n    top: -100%;\r\n    left: 0px;\r\n    font-family: FontAwesome;\r\n    transition: all 200ms ease-in;\r\n  }\r\n.contact_btn:focus {\r\n    background: #fec608;\r\n  }\r\n.contact_btn:hover {\r\n    background: #fec608;\r\n  }\r\n.contact_btn:hover span {\r\n    -webkit-transform: translateY(300%);\r\n    transform: translateY(300%);\r\n  }\r\n.contact_btn:hover:before {\r\n    top: 0px;\r\n  }\r\n/* End Download BTN area css\r\n  ============================================================================================ */\r\n/*---------------------------------------------------- */\r\n.wrapp-image{\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin-bottom: 44px;\r\n}\r\n.img-about{\r\n    -webkit-transform: rotate(270deg);\r\n            transform: rotate(270deg);\r\n    border-radius: 21px;\r\n}\r\n.biography{\r\n    border-bottom-left-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n    border:1px solid #EEEEEE;\r\n    position: relative;\r\n}\r\n.biography::after{\r\n    content: \"\";\r\n    border-bottom: 1px solid #EEEEEE;\r\n    position: absolute;\r\n    bottom: -3px;\r\n    width: 100%;\r\n    border-radius: 10px;\r\n    height: 20px;\r\n}\r\n.myphoto{\r\n    position: relative;\r\n    background-size: contain;\r\n}\r\n.myphoto img{\r\n    position: relative;\r\n    z-index: -1;\r\n}\r\n.biography ul{\r\n    padding:25px 20px 30px;\r\n}\r\n.biography ul li{\r\n    padding:5px 0;\r\n    font-size: 16px;\r\n    border-bottom:1px solid #EEEEEE;\r\n}\r\n.biography ul li:last-child{\r\n    border-bottom:0;\r\n}\r\nul.list-check li:before {\r\n    content: \"\\F00C\";\r\n    font-family: fontawesome;\r\n    color: #68c3a3;\r\n    margin-right: 10px;\r\n}"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about_person_area pad\" id=\"about\">\r\n\r\n    <div class=\"main_title \" style=\"padding: 0px 0px !important; margin-top: -46px;\">\r\n        <h2 class=\"title-skill\">About me</h2>\r\n    </div>\r\n    <div style=\"display: flex;\r\n    flex-direction: column;\">\r\n        <div class=\"wrapp-image\">\r\n            <div>\r\n                <div class=\"person_img\">\r\n                    <img class=\"img-about\" src=\"assets/img/member/david-zuluaga.jpg\" alt=\"\">\r\n                    <a class=\"download_btn\" target=\"_self\" href=\"assets/CV_David_Zuluaga.pdf\" download=\"CV-David_zuluaga.pdf\"><span>Download\r\n                            Resume</span></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row person_details\">\r\n                <h3>Hi I'm <span>David Fernando Zuluaga</span></h3>\r\n                <h4>Fullstack Developer</h4>\r\n                <p>My name is {{information.name}}. I am {{information.age}} years old. Software Engineer with 1+ years in\r\n                    software development with knowledge in Front-End Technologies such as HTML5, CSS3, JavaScript and React,\r\n                    and in Backend technologies such as Python, Django rest framework and PostgrestSQL, I also have experience\r\n                    in Database design and Service Oriented Architectures. Other skills include team work and learning by\r\n                    myself. Also, I am passionate about implementing new technologies and writing coding.</p>\r\n                <br><br>\r\n\r\n                <div class=\"col-md-6\">\r\n                    <ul class=\"list-check\">\r\n                        <li>Software Engineer</li>\r\n                        <li>UI Programming</li>\r\n                        <li>BackEnd Programming</li>\r\n                        <li>Service Oriented Architectures</li>\r\n                        <li>Data Base Design</li>\r\n                        <li>DevOps Culture</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <ul class=\"list-check\">\r\n                        <li>Software Engineer</li>\r\n                        <li>UI Programming</li>\r\n                        <li>BackEnd Programming</li>\r\n                        <li>Service Oriented Architectures</li>\r\n                        <li>Data Base Design</li>\r\n                        <li>DevOps Culture</li>\r\n                    </ul>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.information = {
            name: 'David Fernando Zuluaga',
            age: '26',
            city: 'Santuario-Antioquia',
            nationality: 'Colombian',
            email: 'zuluaaristi@gamil.com'
        };
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*common-btn*/\r\n.btn{\r\n    border: 0;\r\n    border-bottom: 3px solid;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    line-height: 28px;\r\n    padding: 9px 22px;\r\n}\r\n/*large-btn*/\r\n.btn-lg,\r\n.btn-group-lg>.btn {\r\n    padding: 14px 20px;\r\n    font-size: 14px;\r\n    border-radius: 4px;\r\n}\r\n/*btn-primary*/\r\n.btn-primary{\r\n    background-color:#68c3a3;\r\n    border-color: rgba(51, 51, 51, 0.15);\r\n}\r\n.btn-primary:hover,\r\n.btn-primary:focus,\r\n.btn-primary.focus,\r\n.btn-primary:active,\r\n.btn-primary.active,\r\n.open>.dropdown-toggle.btn-primary {\r\n    color: #fff;\r\n    background-color: #4eb28f;\r\n    border-color: #4eb28f;\r\n}\r\n/*btn-info*/\r\n.btn-info{\r\n    background-color:#52b3d9;\r\n    border-color: rgba(51, 51, 51, 0.15);\r\n}\r\n.btn-info:hover,\r\n.btn-info:focus,\r\n.btn-info.focus,\r\n.btn-info:active,\r\n.btn-info.active,\r\n.open>.dropdown-toggle.btn-info {\r\n    color: #fff;\r\n    background-color: #4aa0c2;\r\n    border-color: #4aa0c2;\r\n}\r\n/* === Contact Section === */\r\n.contact-section  {\r\n\r\n}\r\n.contact-section strong {\r\n    display: block;\r\n    text-transform: uppercase;\r\n}\r\n.contact-form strong {\r\n    margin-bottom: 40px;\r\n}\r\n.contact-form textarea.form-control {\r\n    height: 115px;\r\n}\r\n.contact-form .btn {\r\n    margin-top: 15px;\r\n}\r\n.contact-section div > i{\r\n    float: left;\r\n    font-size: 45px;\r\n    margin-right: 20px;\r\n}\r\n.contact-section address,\r\n.contact-section .contact-number {\r\n    overflow: hidden;\r\n    line-height: 30px;\r\n    font-weight: 400;\r\n    margin-bottom: 45px\r\n}\r\n/*MAP*/\r\n.location-map {\r\n    padding: 4px;\r\n    border: 1px solid #eee;\r\n    border-bottom: 3px double #eee;\r\n}\r\nagm-map {\r\n    height: 350px;\r\n}\r\n.buttons-wrapper{\r\n    display: flex;\r\n    margin-bottom: 45px;\r\n}"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Contact Section -->\r\n<section id=\"contact\" class=\"contact-section section-padding animated bounceInLeft\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"main_title\">\r\n            <h2 class=\"title-skill\">CONTACT</h2>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <!-- No contact form for MVP -->\r\n            <div class=\"col-md-12\">\r\n                <div class=\"row center-md text-center\">\r\n                    <div class=\"col-md-4\">\r\n                        <i class=\"fa fa-map-marker\"></i>\r\n\r\n                        <address>\r\n                            <strong>City/Country</strong>\r\n                            {{city}}, {{country}}<br>\r\n                        </address>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <i class=\"fa fa-envelope-o\"></i>\r\n                        <div class=\"contact-number\">\r\n                            <strong>Email</strong>\r\n                            <a [href]=\"'mailto:' + email\">{{email}}</a>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <i class=\"fa fa-skype\"></i>\r\n                        <div class=\"contact-number\">\r\n                            <strong>Skype</strong>\r\n                            {{skype}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"location-map\">\r\n                            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [minZoom]=\"minZoom\">\r\n                                <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n                            </agm-map>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div><!-- /.row -->\r\n    </div><!-- /.container -->\r\n</section><!-- End Contact Section -->"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.latitude = 3.404913;
        this.longitude = -76.524231;
        this.minZoom = 14;
        this.city = 'Cali';
        this.country = 'Colombia';
        this.email = 'zuluaaristi@gmail.com';
        this.skype = '@david_fza';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/portfolio/portfolio.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* Portfolio css\r\n============================================================================================ */\r\n.portfolio_area .porfolio_menu {\r\n    text-align: center;\r\n  }\r\n.portfolio_area .porfolio_menu .causes_filter {\r\n    text-align: center;\r\n    border-bottom: 5px solid #fff;\r\n    display: inline-block;\r\n    border-radius: 2.5px;\r\n  }\r\n.portfolio_area .porfolio_menu .causes_filter li {\r\n    display: inline-block;\r\n    margin-right: 45px;\r\n  }\r\n.portfolio_area .porfolio_menu .causes_filter li a {\r\n    font-size: 18px;\r\n    color: #222222;\r\n    font-family: \"Raleway\", sans-serif;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    line-height: 36px;\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n.portfolio_area .porfolio_menu .causes_filter li a:before {\r\n    content: \"\";\r\n    height: 5px;\r\n    background: #fec608;\r\n    width: 100%;\r\n    position: absolute;\r\n    left: 0px;\r\n    bottom: -5px;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    transition: all 400ms linear 0s;\r\n  }\r\n.portfolio_area .porfolio_menu .causes_filter li:hover a:before, .portfolio_area .porfolio_menu .causes_filter li.active a:before {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n.portfolio_area .porfolio_menu .causes_filter li:first-child a:before {\r\n    border-bottom-left-radius: 2.5px;\r\n    border-top-left-radius: 2.5px;\r\n  }\r\n.portfolio_area .porfolio_menu .causes_filter li:last-child {\r\n    margin-right: 0px;\r\n  }\r\n.portfolio_area .porfolio_menu .causes_filter li:last-child a:before {\r\n    border-bottom-right-radius: 2.5px;\r\n    border-top-right-radius: 2.5px;\r\n  }\r\n.portfolio_area .portfolio_list_inner .portfolio_item {\r\n    margin-top: 40px;\r\n  }\r\n.portfolio_area .portfolio_list_inner .portfolio_item .portfolio_img {\r\n    position: relative;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n  }\r\n.portfolio_area .portfolio_list_inner .portfolio_item .portfolio_img:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    -webkit-transform-origin: 0 50%;\r\n    transform-origin: 0 50%;\r\n    transition-property: -webkit-transform;\r\n    transition-property: transform;\r\n    transition-property: transform, -webkit-transform;\r\n    transition-timing-function: ease-out;\r\n    transition-duration: 0.3s;\r\n  }\r\n.portfolio_area .portfolio_list_inner .portfolio_item .portfolio_img img {\r\n    max-width: 100%;\r\n  }\r\n.portfolio_area .portfolio_list_inner .portfolio_item .portfolio_title {\r\n    text-align: center;\r\n    background: #fff;\r\n    transition: all 400ms linear 0s;\r\n  }\r\n.portfolio_area .portfolio_list_inner .portfolio_item .portfolio_title h4 {\r\n    font-size: 16px;\r\n    font-family: \"Raleway\", sans-serif;\r\n    font-weight: bold;\r\n    color: #333333;\r\n    text-transform: uppercase;\r\n    padding: 18px 0px 10px 0px;\r\n  }\r\n.portfolio_area .portfolio_list_inner .portfolio_item .portfolio_title h5 {\r\n    font-size: 14px;\r\n    font-family: \"Raleway\", sans-serif;\r\n    color: #666666;\r\n    padding-bottom: 18px;\r\n  }\r\n.portfolio_area .portfolio_list_inner .portfolio_item:hover .portfolio_img:before {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n  }\r\n.portfolio_area .portfolio_list_inner .portfolio_item:hover .portfolio_title {\r\n    background: #fec608;\r\n  }\r\n.portfolio_area .portfolio_list_inner .portfolio_item:hover .portfolio_title h4 {\r\n    color: #fff;\r\n  }\r\n.portfolio_area .portfolio_list_inner .portfolio_item:hover .portfolio_title h5 {\r\n    color: #fff;\r\n  }\r\n/* End Portfolio css\r\n  ============================================================================================ */"

/***/ }),

/***/ "./src/app/pages/portfolio/portfolio.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"portfolio_area pad\" id=\"portfolio\">\r\n    <div class=\"main_title\">\r\n        <h2>Portfolio</h2>\r\n    </div>\r\n    <div class=\"porfolio_menu\">\r\n        <ul class=\"causes_filter\">\r\n            <li class=\"active\" data-filter=\"*\"><a href=\"\">All</a></li>\r\n            <li data-filter=\".photo\"><a href=\"\">Photography</a></li>\r\n            <li data-filter=\".design\"><a href=\"\">Design</a></li>\r\n            <li data-filter=\".marketing\"><a href=\"\">Marketing</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"portfolio_list_inner\">\r\n            <div class=\"col-md-4 photo marketing\">\r\n                <div class=\"portfolio_item\">\r\n                    <div class=\"portfolio_img\">\r\n                        <img src=\"assets/images/cier-sur.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"portfolio_title\">\r\n                        <a href=\"#\"><h4>Dreams visualization</h4></a>\r\n                        <h5>Photography</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4 design\">\r\n                <div class=\"portfolio_item\">\r\n                    <div class=\"portfolio_img\">\r\n                        <img src=\"assets/images/medellin.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"portfolio_title\">\r\n                        <a href=\"#\"><h4>Dreams visualization</h4></a>\r\n                        <h5>Photography</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4 photo marketing\">\r\n                <div class=\"portfolio_item\">\r\n                    <div class=\"portfolio_img\">\r\n                        <img src=\"assets/img/portfolio/portfolio-3.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"portfolio_title\">\r\n                        <a href=\"#\"><h4>Dreams visualization</h4></a>\r\n                        <h5>Photography</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4 design marketing\">\r\n                <div class=\"portfolio_item\">\r\n                    <div class=\"portfolio_img\">\r\n                        <img src=\"assets/img/portfolio/portfolio-4.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"portfolio_title\">\r\n                        <a href=\"#\"><h4>Dreams visualization</h4></a>\r\n                        <h5>Photography</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4 photo\">\r\n                <div class=\"portfolio_item\">\r\n                    <div class=\"portfolio_img\">\r\n                        <img src=\"assets/images/gimnasio.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"portfolio_title\">\r\n                        <a href=\"#\"><h4>Dreams visualization</h4></a>\r\n                        <h5>Photography</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4 marketing\">\r\n                <div class=\"portfolio_item\">\r\n                    <div class=\"portfolio_img\">\r\n                        <img src=\"assets/img/portfolio/portfolio-6.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"portfolio_title\">\r\n                        <a href=\"#\"><h4>Dreams visualization</h4></a>\r\n                        <h5>Photography</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/portfolio/portfolio.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.ts ***!
  \********************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/pages/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/pages/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/pages/resume/resume.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/resume/resume.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.education-color{\r\n    background: #efefef;\r\n}\r\n\r\n/* Resume prueba */\r\n\r\n.resume-title h3{\r\n    text-align: center;\r\n}\r\n\r\n.resume-section > div > div{\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.resume-section > div > div:nth-of-type(2){\r\n    margin-bottom: 0;\r\n}\r\n\r\n.resume-title{\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.timeline {\r\n    position: relative;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.resume{\r\n    position: relative;\r\n}\r\n\r\n.resume:before{\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -8px;\r\n    width: 10px;\r\n    height: 10px;\r\n    background-color: #e1e1e1;\r\n    left: 50%;\r\n    margin-left: -6px;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n}\r\n\r\n.resume:after{\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: -8px;\r\n    width: 10px;\r\n    height: 10px;\r\n    background-color: #e1e1e1;\r\n    left: 50%;\r\n    margin-left: -6px;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n}\r\n\r\n.timeline:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 2px;\r\n    margin-left: -1.5px;\r\n    background-color: #e1e1e1;\r\n}\r\n\r\n.timeline>li {\r\n    position: relative;\r\n    margin-bottom: 50px;\r\n    min-height: 50px;\r\n}\r\n\r\n.timeline>li:before,\r\n.timeline>li:after {\r\n    content: \" \";\r\n    display: table;\r\n}\r\n\r\n.timeline>li:after {\r\n    clear: both;\r\n}\r\n\r\n.timeline>li .timeline-panel {\r\n    float: left;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.timeline-content{\r\n    padding:5px 20px 0 20px;\r\n}\r\n\r\n.timeline>li .timeline-panel:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0;\r\n}\r\n\r\n.timeline>li .timeline-panel:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0;\r\n}\r\n\r\n.timeline>li .posted-date {\r\n    position: relative;\r\n    text-align: center;\r\n    background-color: #fff;\r\n    left: 20px;\r\n}\r\n\r\n.timeline>li .posted-date .month {\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n    font-weight: 700;\r\n    display: block;\r\n    color: #2c3e50;\r\n    top: 0;\r\n    float: left;\r\n}\r\n\r\n.timeline>li.timeline-inverted>.timeline-panel {\r\n    float: right;\r\n    text-align: left;\r\n}\r\n\r\n.timeline>li.timeline-inverted>.timeline-panel:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0;\r\n}\r\n\r\n.timeline>li.timeline-inverted>.timeline-panel:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0;\r\n}\r\n\r\n.timeline>li:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.timeline-heading h3 {\r\n    font-size: 20px;\r\n    line-height: 28px;\r\n}\r\n\r\n.timeline-heading span{\r\n    display: block;\r\n    font-weight: 700;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n@media(min-width:992px) {\r\n.timeline:before {\r\n    left: 50%;\r\n}\r\n\r\n.timeline>li {\r\n    margin-bottom: 15px;\r\n    min-height: 100px;\r\n}\r\n\r\n.timeline>li .posted-date {\r\n    position: absolute;\r\n    text-align: center;\r\n    background-color: #fff;\r\n}\r\n\r\n.timeline>li .timeline-panel {\r\n    float: left;\r\n    width: 43%;\r\n    text-align: right;\r\n    border: 1px solid #eee;\r\n    position: relative;\r\n}\r\n\r\n.timeline-content{\r\n    position: relative;\r\n    padding: 24px;\r\n    background-color: #fff;\r\n    transition: all 400ms;\r\n}\r\n\r\n.timeline-content::after{\r\n    border: 1px solid #eee;\r\n    width: 100%;\r\n    position: absolute;\r\n    content: \"\";\r\n    bottom: -3px;\r\n    height:10px;\r\n    left: 0;\r\n    z-index: -1;\r\n}\r\n\r\n.timeline>li .timeline-content:hover {\r\n    background: #68c3a3;\r\n    color: #fff;\r\n}\r\n\r\n.timeline>li .timeline-panel::before,\r\n.timeline>li.timeline-inverted .timeline-panel::before {\r\n    content: \"\";\r\n    top: 25px;\r\n    position: absolute;\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n}\r\n.timeline>li .timeline-panel::before {\r\n    left: 100%;\r\n    border-left: 12px solid #ECECEC;\r\n    transition: all 400ms;\r\n}\r\n.timeline>li .timeline-panel:hover::before {\r\n    border-left: 12px solid #68c3a3;\r\n}\r\n\r\n.timeline>li.timeline-inverted .timeline-panel::before {\r\n    right: 100%;\r\n    border-right: 12px solid #ECECEC;\r\n    transition: all 400ms;\r\n}\r\n.timeline>li.timeline-inverted .timeline-panel:hover::before {\r\n    border-right: 12px solid #68c3a3;\r\n    border-left: 0;\r\n}\r\n\r\n.timeline>li .timeline-panel::after,\r\n.timeline>li.timeline-inverted .timeline-panel::after {\r\n    content: \"\";\r\n    top: 25px;\r\n    position: absolute;\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n}\r\n.timeline>li .timeline-panel::after {\r\n    left: 100%;\r\n    margin-left: -2px;\r\n    border-left: 12px solid #FFFFFF;\r\n    transition: all 400ms;\r\n}\r\n.timeline>li .timeline-panel:hover::after {\r\n    border-left: 12px solid #68c3a3;\r\n}\r\n\r\n.timeline>li.timeline-inverted .timeline-panel::after {\r\n    right: 100%;\r\n    margin-right:-2px;\r\n    border-right: 12px solid #FFFFFF;\r\n    transition: all 400ms;\r\n}\r\n.timeline>li.timeline-inverted .timeline-panel:hover::after {\r\n    border-right: 12px solid #68c3a3;\r\n    border-left: 0;\r\n}\r\n\r\n.timeline>li .posted-date {\r\n    left: 50%;\r\n    width: 120px;\r\n    margin-left: -60px;\r\n    margin-top: 28px;\r\n}\r\n.timeline>li .posted-date .month {\r\n    float: none;\r\n}\r\n\r\n\r\n}"

/***/ }),

/***/ "./src/app/pages/resume/resume.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/resume/resume.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"resume\" class=\"resume-section section-padding animated bounceInLeft\">\r\n    <div class=\"container\">\r\n        <div class=\"main_title\">\r\n            <h2>Resume</h2>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\" style=\"margin-top: -72px;\">\r\n                <div class=\"resume-title\">\r\n                    <h3>EXPERIENCE</h3>\r\n                </div>\r\n                <div class=\"resume\">\r\n                    <ul class=\"timeline\">\r\n                        <li [ngClass]=\"{'timeline-inverted': i % 2 !== 0}\" class=\"timeline-inverted\" *ngFor=\"let element of experience; let i = index\">\r\n                            <div class=\"posted-date\">\r\n                                <span class=\"month\">{{element.date}}</span>\r\n                            </div><!-- /posted-date -->\r\n\r\n                            <div class=\"timeline-panel wow fadeInUp\">\r\n                                <div class=\"timeline-content\">\r\n                                    <div class=\"timeline-heading\">\r\n                                        <h3>{{element.title}}</h3>\r\n                                        <span>{{element.company}}</span>\r\n                                    </div><!-- /timeline-heading -->\r\n\r\n                                    <div class=\"timeline-body\">\r\n                                        <p>\r\n                                            <span *ngFor=\"let descriptionElement of element.description\">\r\n                                                - {{descriptionElement}} <br/>\r\n                                            </span>\r\n                                        </p>\r\n                                    </div><!-- /timeline-body -->\r\n                                </div> <!-- /timeline-content -->\r\n                            </div> <!-- /timeline-panel -->\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div><!-- /row -->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\" style=\"margin-top: 46px;\">\r\n                <div class=\"resume-title\">\r\n                    <h3>EDUCATION</h3>\r\n                </div>\r\n                <div class=\"resume\">\r\n                    <ul class=\"timeline\">\r\n                        <li [ngClass]=\"{'timeline-inverted': i % 2 !== 0}\" class=\"timeline-inverted\" *ngFor=\"let element of education; let i = index\">\r\n                            <div class=\"posted-date\">\r\n                                <span class=\"month\">{{element.date}}</span>\r\n                            </div><!-- /posted-date -->\r\n\r\n                            <div class=\"timeline-panel wow fadeInUp\">\r\n                                <div class=\"timeline-content\">\r\n                                    <div class=\"timeline-heading\">\r\n                                        <h3>{{element.title}}</h3>\r\n                                        <span>{{element.company}}</span>\r\n                                    </div><!-- /timeline-heading -->\r\n\r\n                                    <div class=\"timeline-body\">\r\n                                        <p>\r\n                                            <span *ngFor=\"let descriptionElement of element.description\">\r\n                                                - {{descriptionElement}} <br/>\r\n                                            </span>\r\n                                        </p>\r\n                                    </div><!-- /timeline-body -->\r\n                                </div> <!-- /timeline-content -->\r\n                            </div><!-- /timeline-panel -->\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div><!-- /row -->\r\n    </div><!-- /.container -->\r\n</section><!-- End Resume Section -->"

/***/ }),

/***/ "./src/app/pages/resume/resume.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/resume/resume.component.ts ***!
  \**************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
        this.experience = [
            {
                date: 'Feb 18 - Jul 18',
                title: 'Fulltack Developer',
                company: 'CIER Sur(Univalle), Cali, Colombia',
                description: [
                    'Project GIMNASIO DE HABILIDADES',
                    'Back stack: Python, Django rest framework for the manage of API, PostgrestSQL, Postman',
                    'Front stack: Frontend: React, CSS3, Javascript with interfaces responsives and adaptatives with Flexbox and @media'
                ]
            },
            {
                date: 'Nov 17 - Feb 18',
                title: 'Frontend Developer',
                company: 'CIER Sur(Univalle), Cali, Colombia',
                description: [
                    'Project OBJETOS VIRTUALES DE APRENDIZAJE PARA EDUCACIÓN SUPERIOR',
                    'Technologies and skills: HTMl5, CSS3 with interfaces responsives and adaptatives with Flexbox and @media, Jquery and JavaScript.'
                ]
            },
            {
                date: 'Dec 15 - May 16',
                title: 'Software Engineer',
                company: 'Banco de occidente, Cali, Colombia',
                description: [
                    'Project UNIFICACION PSP-OCCIRED',
                    'Managing services with SOAP UI, Managing of data base ORACLE, and control of logs of data through ESB(Bus enterprise service).',
                ]
            },
            {
                date: 'Jun 15-Dec 15',
                title: 'Software tester',
                company: 'Banco de occidente, Cali, Colombia',
                description: [
                    'Project SISTEMA DE CARTERA FACTORING',
                    'Evaluating the quality of the product. Identifying the scope of the test. Design and performing of test cases.',
                    'Analyse of test results. Conducting time estimation on assigned projects.',
                    'Elaboration and evaluation of a the test plan and a test strategy for the project.',
                    'Recording and tracking identified issues.'
                ]
            }
        ];
        this.education = [
            {
                date: 'Aug 13 - Dec 17',
                title: 'B.Sc Computer Science',
                company: 'Universidad del Valle, Cali, Colombia',
                description: ['Degree Project: Herramienta web para visualización de material educativo, en el aula de clase y evaluación continua',
                    'Back Stack: Django, Django-channels, Django-tenant, PostgreSQL,',
                    'front Stack: Bootstrap, JavaScript, CSS3, Html',
                    'The application allows teacher to evaluate students performance on real time. '
                ]
            },
            {
                date: 'Feb 09 - Mar 13',
                title: 'Tech, Technologist in systems information',
                company: 'Universidad del valle, Buenaventura, Colombia',
                description: ['Monitor in the computer sales']
            }
        ];
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/pages/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/pages/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/pages/skill/skill.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/skill/skill.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* === Skill Section === */\r\n\r\n.title-skill{\r\n    color: black !important;\r\n    border: 1px solid #c1c1c1;\r\n}\r\n\r\n.skills-section {\r\n    background: white;\r\n    color: black;\r\n    padding-bottom: 8%;\r\n}\r\n\r\n.skills-section .section-title{\r\n    color: #fff;\r\n    margin-bottom: 110px;\r\n}\r\n\r\n.skills-section .section-title h2{\r\n    color: #fff;\r\n}\r\n\r\n.skill-title {\r\n    width: 25%;\r\n    float: left;\r\n}\r\n\r\n.skill-title h3{\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    margin-top: 1px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n/* progress-bar */\r\n\r\n.skill-progress {\r\n    position: relative;\r\n}\r\n\r\n.skill-progress span{\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n\r\n.progress {\r\n    height: 20px;\r\n    margin-bottom: 40px;\r\n    background-color: #3a4149;\r\n    border-radius: 3px;\r\n    box-shadow: none;\r\n    width: 75%;\r\n}\r\n\r\n.progress-bar {\r\n    background-color: #52b3d9;\r\n}\r\n\r\n.progress-bar span{\r\n    position: absolute;\r\n    top: -20px;\r\n    right: 15px;\r\n}\r\n\r\n.progress-bar p {\r\n    position: relative;\r\n    top: 0px;\r\n    z-index: 1;\r\n    width:400px;\r\n}\r\n\r\n.progress .progress-bar.six-sec-ease-in-out {\r\n  transition:  width 2s ease-in-out;\r\n}\r\n\r\n.skill-chart h3 {\r\n    margin-top: 20px;\r\n}\r\n\r\n.our-progress{\r\n    margin:10px 0 30px;\r\n}\r\n\r\n.progress-percent{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.our-progress h3{\r\n    font-weight: 400;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n/* === Chart CSS  === */\r\n\r\n.chart, round-progress {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 140px;\r\n    height: 140px;\r\n    margin: 10px auto;\r\n    text-align: center;\r\n}\r\n\r\n.chart canvas, round-progress {\r\n    position:absolute;\r\n    top:0;\r\n    left:0;\r\n}\r\n\r\n.percent {\r\n    display: inline-block;\r\n    margin: auto;\r\n    margin-top: 60px;\r\n    margin-left: 10px;\r\n    z-index: 2;\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n}\r\n\r\n.percent:after {\r\n    content: '%';\r\n}\r\n\r\n.chart-text span {\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    text-transform: capitalize;\r\n    display: block;\r\n    margin-top: 70px;\r\n}\r\n\r\n/*.percent:after {content: '%';margin-left: 0.1em;font-size: .8em;}*/\r\n\r\n.angular{margin-top:100px;}\r\n\r\n.angular .chart {margin-top:0;}\r\n\r\n.chart .chart-text h3{font-size:22px;}"

/***/ }),

/***/ "./src/app/pages/skill/skill.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/skill/skill.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"skills\" class=\"skills-section section-padding animated bounceInLeft\">\r\n    <div class=\"container\">\r\n        <div class=\"main_title\">\r\n            <h2 class=\"title-skill\">Development skills</h2>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"skill-progress\">\r\n                    <div class=\"skill-title\">\r\n                        <h3>FrontEnd</h3>\r\n                    </div>\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar six-sec-ease-in-out\" role=\"progressbar\" [style.width]=\"devSkills.frontEnd\"><span>{{devSkills.frontEnd}}</span>\r\n                            <p><strong>Angular, TS, React, CSS3, HTML5, Bootstrap, Jquery </strong></p>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <!-- /.progress -->\r\n                </div>\r\n                <!-- /.skill-progress -->\r\n\r\n                <div class=\"skill-progress\">\r\n                    <div class=\"skill-title\">\r\n                        <h3>BackEnd</h3>\r\n                    </div>\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar six-sec-ease-in-out\" role=\"progressbar\" [style.width]=\"devSkills.backEnd\" aria-valuenow=\"80\" aria-valuemin=\"0\"\r\n                            aria-valuemax=\"100\"><span>{{devSkills.backEnd}}</span>\r\n                            <p><strong>Python (Django), Java, C++, Node.js</strong></p>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.progress -->\r\n                </div>\r\n                <!-- /.skill-progress -->\r\n            </div>\r\n            <!-- /.col-md-6 -->\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"skill-progress\">\r\n                    <div class=\"skill-title\">\r\n                        <h3>Database</h3>\r\n                    </div>\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar six-sec-ease-in-out\" role=\"progressbar\" [style.width]=\"devSkills.dataBase\" aria-valuenow=\"95\" aria-valuemin=\"0\"\r\n                            aria-valuemax=\"100\"><span>{{devSkills.dataBase}}</span>\r\n                            <p><strong>PostgreSQL, MySQL, Oracle</strong></p>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.progress -->\r\n                </div>\r\n                <!-- /.skill-progress -->\r\n                <div class=\"skill-progress\">\r\n                    <div class=\"skill-title\">\r\n                        <h3>Source Control</h3>\r\n                    </div>\r\n                    <div class=\"progress\">\r\n                        <div class=\"progress-bar six-sec-ease-in-out\" role=\"progressbar\" [style.width]=\"devSkills.sourceControl\" aria-valuenow=\"75\"\r\n                            aria-valuemin=\"0\" aria-valuemax=\"100\"><span>{{devSkills.sourceControl}}</span>\r\n                            <p><strong>Git, Github, Bitbucket</strong></p>\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.progress -->\r\n                </div>\r\n            </div>\r\n            <!-- /.col-md-6 -->\r\n        </div>\r\n        <!-- /.row -->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <div class=\"skill-chart text-center\">\r\n                    <h3>Personal skills</h3>\r\n                </div>\r\n                <div class=\"row more-skill text-center\">\r\n                    <div class=\"col-xs-12 col-sm-4 col-md-3\">\r\n                        <div class=\"chart\">\r\n                            <span class=\"percent\">{{circularData.leadership}}</span>\r\n                            <round-progress [current]=\"circularData.leadership\" [max]=\"circularConfig.max\" [color]=\"circularConfig.color\" [background]=\"circularConfig.background\"\r\n                                [responsive]=\"circularConfig.responsive\" [radius]=\"circularConfig.radius\">\r\n                            </round-progress>\r\n                            <div class=\"chart-text\">\r\n                                <span>Leadership</span>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-4 col-md-3\">\r\n                        <div class=\"chart\" data-percent=\"23\" data-color=\"2ecc71\">\r\n                            <span class=\"percent\">{{circularData.creativity}}</span>\r\n                            <round-progress [current]=\"circularData.creativity\" [max]=\"circularConfig.max\" [color]=\"circularConfig.color\" [background]=\"circularConfig.background\"\r\n                                [responsive]=\"circularConfig.responsive\" [radius]=\"circularConfig.radius\">\r\n                            </round-progress>\r\n                            <div class=\"chart-text\">\r\n                                <span>Creativity</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-4 col-md-3\">\r\n                        <div class=\"chart\" data-percent=\"68\" data-color=\"3498db\">\r\n                            <span class=\"percent\">{{circularData.confidence}}</span>\r\n                            <round-progress [current]=\"circularData.confidence\" [max]=\"circularConfig.max\" [color]=\"circularConfig.color\" [background]=\"circularConfig.background\"\r\n                                [responsive]=\"circularConfig.responsive\" [radius]=\"circularConfig.radius\">\r\n                            </round-progress>\r\n                            <div class=\"chart-text\">\r\n                                <span>Confidence</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-4 col-md-3\">\r\n                        <div class=\"chart\" data-percent=\"68\" data-color=\"3498db\">\r\n                            <span class=\"percent\">{{circularData.communication}}</span>\r\n                            <round-progress [current]=\"circularData.communication\" [max]=\"circularConfig.max\" [color]=\"circularConfig.color\" [background]=\"circularConfig.background\"\r\n                                [responsive]=\"circularConfig.responsive\" [radius]=\"circularConfig.radius\">\r\n                            </round-progress>\r\n                            <div class=\"chart-text\">\r\n                                <span>Communication</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"skill-chart text-center\">\r\n                    <h3>Languages</h3>\r\n                </div>\r\n                <div class=\"row more-skill text-center\">\r\n                    <div class=\"col-xs-12 col-sm-4 col-md-6\">\r\n                        <div class=\"chart\" data-percent=\"68\" data-color=\"3498db\">\r\n                            <span class=\"percent\">{{circularData.english}}</span>\r\n                            <round-progress [current]=\"circularData.english\" [max]=\"circularConfig.max\" [color]=\"circularConfig.color\" [background]=\"circularConfig.background\"\r\n                                [responsive]=\"circularConfig.responsive\" [radius]=\"circularConfig.radius\">\r\n                            </round-progress>\r\n                            <div class=\"chart-text\">\r\n                                <span>English <br/><small>(Fluent)</small></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-4 col-md-6\">\r\n                        <div class=\"chart\" data-percent=\"68\" data-color=\"3498db\">\r\n                            <span class=\"percent\">{{circularData.spanish}}</span>\r\n                            <round-progress [current]=\"circularData.spanish\" [max]=\"circularConfig.max\" [color]=\"circularConfig.color\" [background]=\"circularConfig.background\"\r\n                                [responsive]=\"circularConfig.responsive\" [radius]=\"circularConfig.radius\">\r\n                            </round-progress>\r\n                            <div class=\"chart-text\">\r\n                                <span>Spanish <br/><small>(Native)</small></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- /.container -->\r\n</section>\r\n<!-- End Skills Section -->"

/***/ }),

/***/ "./src/app/pages/skill/skill.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/skill/skill.component.ts ***!
  \************************************************/
/*! exports provided: SkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillComponent", function() { return SkillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillComponent = /** @class */ (function () {
    function SkillComponent() {
        this.devSkills = {
            frontEnd: '60%',
            backEnd: '70%',
            sourceControl: '90%',
            dataBase: '70%',
            devOps: '10%',
            iOT: '40%'
        };
        this.circularConfig = {
            max: 100,
            color: '52b3d9',
            background: '3a4149',
            responsive: true,
            radius: 140
        };
        this.circularData = {
            leadership: 80,
            creativity: 90,
            confidence: 100,
            communication: 80,
            english: 60,
            spanish: 100
        };
    }
    SkillComponent.prototype.ngOnInit = function () {
    };
    SkillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skill',
            template: __webpack_require__(/*! ./skill.component.html */ "./src/app/pages/skill/skill.component.html"),
            styles: [__webpack_require__(/*! ./skill.component.css */ "./src/app/pages/skill/skill.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillComponent);
    return SkillComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Footer area css\r\n============================================================================================ */\r\n.footer_inner {\r\n    text-align: center;\r\n    background: #f1f1f1;\r\n    margin-top: 0px;\r\n    padding-bottom: 23px;\r\n  }\r\n.footer_inner img {\r\n    max-width: 100%;\r\n  }\r\n.footer_inner ul li a {\r\n    background: #677fb5;\r\n    color: #fff;\r\n  }\r\n.footer_inner ul li:nth-child(2) a {\r\n    background: #70c2e9;\r\n    color: #fff;\r\n  }\r\n.footer_inner ul li:nth-child(3) a {\r\n    background: #895a4d;\r\n    color: #fff;\r\n  }\r\n.footer_inner ul li:nth-child(4) a {\r\n    background: #d34836;\r\n    color: #fff;\r\n  }\r\n.footer_inner ul li:nth-child(5) a {\r\n    background: #007ab9;\r\n    color: #fff;\r\n  }\r\n.footer_inner ul li:nth-child(6) a {\r\n    background: #d8545d;\r\n    color: #fff;\r\n  }\r\n.footer_inner ul li:nth-child(7) a {\r\n    background: #5ecbf3;\r\n    color: #fff;\r\n  }\r\n.footer_inner ul li:nth-child(8) a {\r\n    background: #ff3ba4;\r\n    color: #fff;\r\n  }\r\n.footer_inner ul li:nth-child(9) a {\r\n    background: #e299c2;\r\n    color: #fff;\r\n  }\r\n.footer_inner ul li:last-child a {\r\n    background: #faaa5e;\r\n    color: #fff;\r\n  }\r\n.footer_copyright {\r\n    background: rgba(0, 0, 0, 0.7);\r\n  }\r\n.footer_copyright .pull-left h5 {\r\n    font-size: 13px;\r\n    color: #fff;\r\n    font-family: \"Raleway\", sans-serif;\r\n    line-height: 100px;\r\n  }\r\n.footer_copyright .pull-left h5 a {\r\n    font-weight: bold;\r\n    color: #fec608;\r\n  }\r\n.footer_copyright .pull-right .navbar-nav li {\r\n    margin-right: 40px;\r\n  }\r\n.footer_copyright .pull-right .navbar-nav li a {\r\n    padding: 0px;\r\n    background: transparent;\r\n    line-height: 100px;\r\n    text-transform: uppercase;\r\n    font-family: \"Raleway\", sans-serif;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    transition: all 400ms linear 0s;\r\n  }\r\n.footer_copyright .pull-right .navbar-nav li:last-child {\r\n    margin-right: 0px;\r\n  }\r\n.footer_copyright .pull-right .navbar-nav li:hover a, .footer_copyright .pull-right .navbar-nav li.active a {\r\n    color: #fec608;\r\n  }\r\n/* End Footer area css\r\n  ============================================================================================ */\r\n/*---------------------------------------------------- */\r\n.social_icon li {\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n  }\r\n.social_icon li a {\r\n    height: 40px;\r\n    width: 40px;\r\n    text-align: center;\r\n    border: 1px solid #677fb5;\r\n    display: block;\r\n    line-height: 40px;\r\n    font-size: 18px;\r\n    border-radius: 5px;\r\n    transition: all 400ms linear 0s;\r\n    color: #677fb5;\r\n  }\r\n.social_icon li:nth-child(2) a {\r\n    color: #70c2e9;\r\n    border-color: #70c2e9;\r\n  }\r\n.social_icon li:nth-child(2):hover a {\r\n    background: #70c2e9;\r\n  }\r\n.social_icon li:nth-child(3) a {\r\n    color: #895a4d;\r\n    border-color: #895a4d;\r\n  }\r\n.social_icon li:nth-child(3):hover a {\r\n    background: #895a4d;\r\n  }\r\n.social_icon li:nth-child(4) a {\r\n    color: #d34836;\r\n    border-color: #d34836;\r\n  }\r\n.social_icon li:nth-child(4):hover a {\r\n    background: #d34836;\r\n  }\r\n.social_icon li:nth-child(5) a {\r\n    color: #007ab9;\r\n    border-color: #007ab9;\r\n  }\r\n.social_icon li:nth-child(5):hover a {\r\n    background: #007ab9;\r\n  }\r\n.social_icon li:nth-child(6) a {\r\n    color: #d8545d;\r\n    border-color: #d8545d;\r\n  }\r\n.social_icon li:nth-child(6):hover a {\r\n    background: #d8545d;\r\n  }\r\n.social_icon li:nth-child(7) a {\r\n    color: #5ecbf3;\r\n    border-color: #5ecbf3;\r\n  }\r\n.social_icon li:nth-child(7):hover a {\r\n    background: #5ecbf3;\r\n  }\r\n.social_icon li:nth-child(8) a {\r\n    color: #ff3ba4;\r\n    border-color: #ff3ba4;\r\n  }\r\n.social_icon li:nth-child(8):hover a {\r\n    background: #ff3ba4;\r\n  }\r\n.social_icon li:last-child {\r\n    margin-right: 0px;\r\n  }\r\n.social_icon li:last-child a {\r\n    color: #faaa5e;\r\n    border-color: #faaa5e;\r\n  }\r\n.social_icon li:last-child:hover a {\r\n    background: #faaa5e;\r\n  }\r\n.social_icon li:hover a {\r\n    background: #677fb5;\r\n    color: #fff;\r\n  }\r\n/*----------------------------------------------------------------------------------*/\r\n.hire-section {\r\n    background: url(/../assets/images/front-end.png) no-repeat top center #68C3A3;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    color: #fff;\r\n}\r\n.hire-section-bg {\r\n    padding: 92px 0; /*Safari 5.1-6*/ /*Opera 11.1-12*/ /*Fx 3.6-15*/\r\n    \r\n    background: linear-gradient(to top, #52b3d9, rgba(82, 179, 217, 0.7)); /*Standard*/\r\n}\r\n.hire-section h2 {\r\n    font-size: 36px;\r\n    margin-bottom: 40px;\r\n}\r\n.hire-section .btn {\r\n    padding: 9px 54px;\r\n}\r\n/*btn-default*/\r\n.btn-default {\r\n    background: transparent;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n.btn-default:hover,\r\n.btn-default:focus,\r\n.btn-default.focus,\r\n.btn-default:active,\r\n.btn-default.active{\r\n    color: #52b3d9;\r\n    background-color: #fff;\r\n    border-color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hire-section text-center\" data-stellar-vertical-offset=\"50\" data-stellar-background-ratio=\"0.2\">\r\n  <div class=\"hire-section-bg\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h2>Are you interested on my profile? Take a minute and write me!</h2>\r\n          <a href=\"mailto:zuluaaristi@gmail.com?Subject=Hello!\" target=\"_top\" class=\"btn btn-default\"><strong>Send me a message\r\n              </strong></a>\r\n        </div><!-- /.col-md-12 -->\r\n      </div><!-- /.row -->\r\n    </div><!-- /.container -->\r\n  </div><!-- /.hire-section-bg -->\r\n</section><!-- End Hire Section -->\r\n\r\n<footer class=\"footer_area\">\r\n  <div class=\"footer_inner\">\r\n    <div class=\"container\">\r\n      <img src=\"assets/img/footer-logo.png\" alt=\"\">\r\n      <ul class=\"social_icon\">\r\n        <li><a href=\"www.linkedin.com/in/davidfza25\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n        <li><a href=\"https://github.com/dafer154\"><i class=\"fa fa-github\"></i></a></li>\r\n        <li><a href=\"https://twitter.com/@david_fza\"><i class=\"fa fa-twitter\"></i></a></li>\r\n        <li><a href=\"https://www.instagram.com/dafer154/\"><i class=\"fa fa-instagram\"></i></a></li>\r\n        <li><a href=\"https://www.facebook.com/David.FZA\"><i class=\"fa fa-facebook\"></i></a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer_copyright\">\r\n    <div class=\"container\">\r\n      <div class=\"pull-left\">\r\n        <h5>\r\n          <p>\r\n            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\r\n            Copyright &copy; {{anio}} All rights reserved | This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\r\n            by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a>\r\n            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\r\n          </p>\r\n        </h5>\r\n      </div>\r\n      <div class=\"pull-right\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li class=\"active\"><a routerLink=\"about\">ABOUT ME </a></li>\r\n          <li><a routerLink=\"skill\">SKILL</a></li>\r\n          <li><a routerLink=\"resume\">RESUME</a></li>\r\n          <li><a routerLink=\"portfolio\">PORTFOLIO</a></li>\r\n          <li><a routerLink=\"contact\">CONTACT</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.anio = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*---------------------------------------------------- */\r\n/*----------------------------------------------------*/\r\n/* Header Menu Area css\r\n============================================================================================ */\r\n.header_area {\r\n    background: #fec608;\r\n  }\r\n.header_area .navbar.navbar-default {\r\n    border: none;\r\n    border-radius: 0px;\r\n    background: transparent;\r\n    margin: 0px;\r\n  }\r\n.header_area .navbar.navbar-default .navbar-header .navbar-brand {\r\n    padding: 0;\r\n    display: block;\r\n    vertical-align: middle;\r\n    line-height: 76px;\r\n  }\r\n.header_area .navbar.navbar-default .navbar-header .navbar-brand img {\r\n    display: inline-block;\r\n  }\r\n.header_area .navbar.navbar-default .navbar-collapse .nav.navbar-nav li {\r\n    margin-right: 40px;\r\n  }\r\n.header_area .navbar.navbar-default .navbar-collapse .nav.navbar-nav li a {\r\n    padding: 0px;\r\n    background: transparent;\r\n    line-height: 80px;\r\n    font-family: \"Raleway\", sans-serif;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    color: #222222;\r\n    display: inline-block;\r\n    transition: all 400ms linear 0s;\r\n  }\r\n.header_area .navbar.navbar-default .navbar-collapse .nav.navbar-nav li:hover a, .header_area .navbar.navbar-default .navbar-collapse .nav.navbar-nav li.active a {\r\n    color: #fff;\r\n  }\r\n.header_area .navbar.navbar-default .navbar-collapse .nav.navbar-nav li:last-child {\r\n    margin-right: 0px;\r\n  }\r\n.header_area.stricky-fixed {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    left: 0;\r\n    z-index: 9999;\r\n  }\r\n.header_area.stricky-fixed + section, .header_area.stricky-fixed + div, .header_area.stricky-fixed + .row {\r\n    margin-top: 80px;\r\n  }\r\n/* End Header Menu Area css\r\n  ============================================================================================ */\r\n/*---------------------------------------------------- */\r\n/*----------------------------------------------------*/\r\n.image-logo{\r\n    margin-top: -30%;\r\n}\r\n/* prueba header */\r\n.header {\r\n    background-image: url(/../assets/images/developer.png);\r\n    background-position: center center;\r\n    background-repeat:  no-repeat;\r\n    background-attachment: fixed;\r\n    background-size:  cover;\r\n    background-color: #999;\r\n    text-align: center;\r\n    position: relative;\r\n    z-index: 1;\r\n    padding: 70px 0px 99px;\r\n}\r\n.header .logo img {\r\n    max-width: 100%;\r\n}\r\nimg {\r\n    vertical-align: middle;\r\n}\r\nimg {\r\n    border: 0;\r\n}\r\n.intro h1{\r\n\tfont-size: 60px;\r\n\tline-height: 80px;\r\n\tmargin-bottom: 16px;\r\n\tcolor: #52b3d9;\r\n}\r\n.intro h1 span{\r\n\tcolor: #68c3a3;\r\n}\r\n.intro p{\r\n\tcolor: #f7f7f7;\r\n\tmargin-bottom: 40px;\r\n}\r\n.intro-sub {\r\n\tcolor: #fff;\r\n\tfont-size: 24px;\r\n\tline-height: 32px;\r\n\tfont-weight: 700;\r\n\ttext-transform: uppercase;\r\n\tdisplay: block;\r\n\tmargin-bottom: 20px;\r\n}\r\n/*\r\nSOCIAL ICON\r\n-------------------------------------------*/\r\n.social-icons {\r\n    margin-top: 20px;\r\n}\r\n.social-icons a i{\r\n    position: relative;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    margin: 0 7px;\r\n    line-height: 40px;\r\n    text-align: center;\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n.social-icons a i::before {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n.social-icons a i::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    left: 0;\r\n    top: 0;\r\n    width: 40px;\r\n    height: 40px;\r\n    border: 1px solid #fff;\r\n    border-radius: 3px;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n    transition: all 300ms;\r\n}\r\n.social-icons a i:hover::after{\r\n    background: #68c3a3;\r\n    border: 1px solid transparent;\r\n    z-index: 0;\r\n}"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header_area\">\r\n    <div class=\"header\">\r\n        <section id=\"home\" class=\"tt-fullHeight animated bounceInDown\" data-stellar-vertical-offset=\"50\" data-stellar-background-ratio=\"0.2\">\r\n            <div class=\"intro\">\r\n                <div class=\"intro-sub\">Software Engineer</div>\r\n                <h1>David <span>Zuluaga</span></h1>\r\n                <p>\r\n                    <strong>\r\n                    </strong>\r\n                </p>\r\n\r\n                <div class=\"social-icons\">\r\n                    <ul class=\"list-inline\">\r\n                        <li><a href=\"www.linkedin.com/in/davidfza25\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n                        <li><a href=\"https://github.com/dafer154\"><i class=\"fa fa-github\"></i></a></li>\r\n                        <li><a href=\"https://twitter.com/@david_fza\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                        <li><a href=\"https://www.instagram.com/dafer154/\"><i class=\"fa fa-instagram\"></i></a></li>\r\n                        <li><a href=\"https://www.facebook.com/David.FZA\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                    </ul>\r\n                </div> <!-- /.social-icons -->\r\n            </div>\r\n            <div class=\"mouse-icon\">\r\n                <div class=\"wheel\"></div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n\r\n\r\n    <div class=\"container\">\r\n        <nav class=\"navbar navbar-default\">\r\n            <!-- Brand and toggle get grouped for better mobile display -->\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n                    aria-expanded=\"false\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <a class=\"navbar-brand\" routerLink=\"\"><img class=\"image-logo\" src=\"assets/img/logo.png\" alt=\"\"></a>\r\n            </div>\r\n\r\n            <!-- Collect the nav links, forms, and other content for toggling -->\r\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li class=\"active\"><a routerLink=\"about\">ABOUT ME </a></li>\r\n                    <li><a routerLink=\"skill\">SKILL</a></li>\r\n                    <li><a routerLink=\"resume\">RESUME</a></li>\r\n                    <li><a routerLink=\"portfolio\">PORTFOLIO</a></li>\r\n                    <li><a routerLink=\"contact\">CONTACT</a></li>\r\n\r\n                </ul>\r\n            </div><!-- /.navbar-collapse -->\r\n        </nav>\r\n    </div>\r\n</header>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\intel8.1UEFI\Desktop\portafolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map