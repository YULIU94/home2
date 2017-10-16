webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main{\n  background-color: #6c757d;\n}\n\n#main{\n  background-color: #468CC8;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* Routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_21__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_22__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_23__services_widget_service_client__["a" /* WidgetService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");













var APP_ROUTES = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile/:userId', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'profile/:userId/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'profile/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'profile/:userId/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'profile/:userId/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'profile/:userId/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a href=\"page-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Edit Page</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 \">\n      <a href=\"page-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-plus pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"page-content\">\n  <ul>\n    <li class=\"page-content-title page-li\">\n      <p class=\"pull-left menu-p\">Name</p>\n    </li>\n    <li>\n      <input placeholder=\"Page Name\" class=\"page-content-input form-control\">\n    </li>\n    <li class=\"page-content-title page-li\">\n      <p class=\"pull-left menu-p\">Title</p>\n    </li>\n    <li>\n      <input placeholder=\"Page Title\" class=\"page-content-input form-control\">\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a href=\"../user/profile.html\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageEditComponent = (function () {
    function PageEditComponent() {
    }
    PageEditComponent.prototype.ngOnInit = function () {
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageEditComponent);

//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a (click)=\"toWebsiteList()\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Pages</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a (click)=\"toNewPage()\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-plus pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"page-content\">\n  <ul class=\"page-ul\">\n    <li class=\"menu\">\n      <a >\n        <p class=\"pull-left menu-p\">Blog Post</p>\n      </a>\n      <a href=\"page-edit.html\">\n        <span class=\"menu-btn pull-right glyphicon glyphicon-cog\"></span>\n      </a>\n    </li>\n    <li class=\"menu\">\n      <a href=\"../widget/widget-list.html\">\n        <p class=\"pull-left menu-p\">Blogs</p>\n      </a>\n      <a href=\"page-edit.html\">\n        <button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>\n      </a>\n    </li>\n    <li class=\"menu\">\n      <a href=\"../widget/widget-list.html\">\n        <p class=\"pull-left menu-p\">Home</p>\n      </a>\n      <a href=\"page-edit.html\">\n        <button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>\n      </a>\n    </li>\n    <li class=\"menu\">\n      <a href=\"../widget/widget-list.html\">\n        <p class=\"pull-left menu-p\">About</p>\n      </a>\n      <a href=\"page-edit.html\">\n        <button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a href=\"../user/profile.html\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [{}];
    }
    PageListComponent.prototype.findPage = function (website) {
        console.log(this.websites);
        console.log(website['_id']);
        if (website) {
            this.router.navigate(['profile', this.userId, 'website', website['_id'], 'page']);
        }
    };
    PageListComponent.prototype.findEditWebsite = function (website) {
        if (website) {
            this.router.navigate(['profile', this.userId, 'website', website['_id']]);
        }
    };
    // Navigation of user
    PageListComponent.prototype.toProfile = function () {
        this.router.navigate(['profile', this.userId]);
    };
    // Navigation of website
    PageListComponent.prototype.toWebsiteList = function () {
        this.router.navigate(['profile', this.userId, 'website']);
    };
    PageListComponent.prototype.toNewWebsite = function () {
        this.router.navigate(['profile', this.userId, 'website', 'new']);
    };
    // Navigation of page
    PageListComponent.prototype.toNewPage = function () {
        this.router.navigate(['profile', this.userId, 'website', this.websiteId, 'page', 'new']);
    };
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
        });
        this.websites = this._websiteService.findWebsitesByUser(this.userId);
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PageListComponent);

var _a, _b, _c;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a href=\"page-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>New Page</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a href=\"page-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-plus pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"page-content\">\n  <ul>\n    <li class=\"page-content-title page-li\">\n      <p class=\"pull-left menu-p\">Name</p>\n    </li>\n    <input placeholder=\"Page Name\"\n           type=\"text\"\n           class=\"page-content-input form-control\">\n    <li class=\"page-content-title page-li\">\n      <p class=\"pull-left menu-p\">Title</p>\n    </li>\n    <input placeholder=\"Page Title\"\n           type=\"text\"\n           class=\"page-content-input form-control\">\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a href=\"../user/profile.html\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNewComponent = (function () {
    function PageNewComponent() {
    }
    PageNewComponent.prototype.ngOnInit = function () {
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNewComponent);

//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\" id=\"main\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <input\n      placeholder=\"username\"\n      name=\"username\"\n      type=\"text\"\n      class=\"form-control\"\n      ngModel\n      required\n      #username/>\n\n    <!--<span class=\"help-block\" ng-if=\"!username.valid && username.touched\">-->\n      <!--Please enter username!-->\n    <!--</span>-->\n    <span><br></span>\n    <input\n      name= \"password\"\n      placeholder=\"password\"\n      #password\n           type=\"password\"\n           class=\"form-control\"/>\n    <span><br></span>\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            (click)=\"login(username.value, password.value)\"\n            [disabled]=\"!f.valid\">Login</button>\n    <button\n      routerLink=\"/register\"\n      class=\"btn btn-success btn-block\">\n        Register\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    // userService: UserService;
    // router: Router;
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    // function: login
    LoginComponent.prototype.login = function (username, password) {
        console.log('login' + username);
        console.log(password);
        if (username.length === 0 || password.length === 0) {
            alert('missed username or password');
        }
        else {
            var user = this.userService.findUserByCredentials(username, password);
            if (user) {
                this.router.navigate(['profile', user._id]);
            }
            else {
                this.errorFlag = true;
                this.errorMsg = 'Error';
                alert('wrong username or password');
            }
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.errorFlag = false;
        this.errorMsg = '';
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"username\"\n        #username\n        placeholder=\"alice\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"alice.wonderland@unicorn.com\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block\"\n     routerLink=\"website\">Websites</a>\n  <a class=\"btn btn-danger btn-block \"\n     routerLink=\"/login\">Logout</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute, websiteService, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.websiteService = websiteService;
        this.router = router;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            console.log(_this.userId);
        });
        this.user = this.userService.findUserById(this.userId);
        this.username = this.user['username'];
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n  <input placeholder=\"username\"\n         type=\"text\"\n         name=\"username\"\n         #username\n         class=\"form-control\"/>\n  <br>\n  <input placeholder=\"password\"\n         type=\"password\"\n         name=\"password\"\n         #password\n         class=\"form-control\"/>\n  <input placeholder=\"verify password\"\n         type=\"password\"\n         name=\"verifypassword\"\n         #verifypassword\n         class=\"form-control\"/>\n  <br>\n  <a\n    (click)=\"registered(username.value, password.value, verifypassword.value)\"\n    class=\"btn btn-primary btn-block\"\n    >Register</a>\n\n  <a\n    routerLink=\"/login\"\n    class=\"btn btn-danger btn-block\"\n    routerLink=\"/login\" >Cancel</a>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.registered = function (username, password, verifypassword) {
        alert(username);
        alert(password);
        if (username.length === 0 || password.length === 0 || verifypassword.length === 0) {
            alert('missed information!');
        }
        else if (!(password === verifypassword)) {
            alert('password not equal!');
        }
        else {
            this.user = this.userService.findUserByCredentials(username, password);
            if (this.user) {
                alert('user exists!');
            }
            else {
                alert('successfully registered!');
                var newUser = new __WEBPACK_IMPORTED_MODULE_1__models_user_model_client__["a" /* User */](1, username, password);
                this.userService.createUser(newUser);
                this.router.navigate(['/login']);
            }
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <!--Nav Bar-->\n  <div class=\"nav-bar\">\n    <div class=\"container-fluid nav-container\">\n      <div class=\"row nav-row\">\n        <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs nav-left\">\n          <div class=\"row\">\n            <div class=\"nav-left-left pull-left col-xs-2 \" href=\"website-ulist.html\">\n              <a (click)=\"toWebsiteList()\">\n                <button class=\"glyphicon glyphicon-chevron-left nav-back pull-left website-nav-btn\" >\n                </button>\n              </a>\n            </div>\n            <div class=\"nav-left-center col-xs-8\">\n              <p class=\"nav-p\">Websites</p>\n            </div>\n            <div class=\"nav-left-right col-xs-2\">\n              <a routerLink=\"/profile/{{userId}}/website/new\">\n                <button class=\"glyphicon glyphicon-plus nav-plus\" >\n                </button>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-8 col-md-8 col-lg-8 hidden-xs nav-right\">\n          <div class=\"row\">\n            <div class=\"col-xs-11 nav-right-left\">\n              <p class=\"nav-p \">Edit Website</p>\n            </div>\n            <div class=\"col-xs-1  nav-right-right nav-ok\">\n              <a routerLink=\"/profile/{{userId}}/website\">\n                <button class=\"glyphicon glyphicon-ok btn-white\">\n                </button>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 visible-xs nav-full\">\n          <div class=\"row\">\n            <div class=\"nav-left-left pull-left col-xs-2 \" href=\"website-ulist.html\">\n              <a routerLink=\"/profile/{{userId}}/website\">\n                <button class=\"glyphicon glyphicon-chevron-left nav-back\" >\n                </button>\n              </a>\n            </div>\n            <div class=\"nav-left-center col-xs-8\">\n              <p class=\"nav-p\">Websites</p>\n            </div>\n            <div class=\"nav-left-right col-xs-2 nav-ok\">\n              <button class=\"glyphicon glyphicon-ok nav-ok-btn\" routerLink=\"/profile/{{userId}}/website\">\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--Contnet-->\n  <div class=\"content container-fluid\">\n    <div class=\"row\">\n      <div class=\"content-left hidden-xs col-sm-4 col-md-4 col-lg-4\">\n        <div class=\"website-content\" *ngFor=\"let website of websites\">\n          <!--<ul>-->\n            <!--<li class=\"menu\">-->\n              <!--<div class=\"row\">-->\n                <!--<a href=\"../page/page-list.html\">-->\n                  <!--<p class=\"pull-left menu-p\">Address Book App</p>-->\n                <!--</a>-->\n                <!--<a href=\"website-edit.html\">-->\n                  <!--<span class=\"menu-btn pull-right glyphicon glyphicon-cog\"></span>-->\n                <!--</a>-->\n              <!--</div>-->\n            <!--</li>-->\n            <!--<li class=\"menu\">-->\n              <!--<a href=\"../page/page-list.html\">-->\n                <!--<p class=\"pull-left menu-p\">Blogger</p>-->\n              <!--</a>-->\n              <!--<a href=\"website-edit.html\">-->\n                <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n              <!--</a>-->\n            <!--</li>-->\n            <!--<li class=\"menu\">-->\n              <!--<a href=\"../page/page-list.html\">-->\n                <!--<p class=\"pull-left menu-p\">Blogging App</p>-->\n              <!--</a>-->\n              <!--<a href=\"website-edit.html\">-->\n                <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n              <!--</a>-->\n            <!--</li>-->\n            <!--<li class=\"menu\">-->\n              <!--<a href=\"../page/page-list.html\">-->\n                <!--<p class=\"pull-left menu-p\">Script Testing App</p>-->\n              <!--</a>-->\n              <!--<a href=\"website-edit.html\">-->\n                <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n              <!--</a>-->\n            <!--</li>-->\n          <!--</ul>-->\n          <ul>\n            <li class=\"menu\">\n              <button (click)=\"findPage(website)\">\n                {{website['name']}}\n              </button>\n              <a (click)=\"findEditWebsite(website)\" >\n                <button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"content-right col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"content-title\">Website Name</p>\n        <input placeholder=\"Blogger\"\n               type=\"text\"\n               class=\"form-control\">\n        <p class=\"content-title\">Website Description</p>\n        <textarea type=\"text\"\n                  class=\"form-control input-description\" rows=\"5\" placeholder=\"Description\"></textarea>\n        <a class=\"btn btn-block btn-delete\" (click)=\"deleteWebsite()\">Delete</a>\n      </div>\n    </div>\n  </div>\n\n  <!--Bottom Bar-->\n  <div class=\"bottom\">\n    <button class=\"nav-btn glyphicon glyphicon-user pull-right\">\n      <a (click)=\"toProfile()\" class=\"navbar-link\"></a>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [{}];
    }
    WebsiteEditComponent.prototype.findPage = function (website) {
        console.log(this.websites);
        console.log(website['_id']);
        if (website) {
            this.router.navigate(['profile', this.userId, 'website', website['_id'], 'page']);
        }
    };
    WebsiteEditComponent.prototype.findEditWebsite = function (website) {
        if (website) {
            this.router.navigate(['profile', this.userId, 'website', website['_id']]);
        }
    };
    WebsiteEditComponent.prototype.toWebsiteList = function () {
        this.router.navigate(['profile', this.userId, 'website']);
    };
    WebsiteEditComponent.prototype.toProfile = function () {
        this.router.navigate(['profile', this.userId]);
    };
    WebsiteEditComponent.prototype.toNewWebsite = function () {
        this.router.navigate(['profile', this.userId, 'website', 'new']);
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        this._websiteService.deleteWebsite(this.websiteId);
        this.router.navigate(['profile', this.userId, 'website']);
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
        });
        this.websites = this._websiteService.findWebsitesByUser(this.userId);
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Navigation Bar-->\n<div class=\"nav-bar\">\n  <div class=\"container-fluid nav-container\">\n    <div class=\"row nav-row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 nav-full\">\n        <div class=\"row\">\n          <div class=\"nav-left-left pull-left\">\n            <a routerLink=\"/profile/{{userId}}\">\n              <button class=\"glyphicon glyphicon-chevron-left nav-back pull-left website-nav-btn\">\n              </button>\n            </a>\n          </div>\n          <div class=\"nav-left-center col-xs-10\">\n            <p class=\"nav-p\">Websites</p>\n          </div>\n          <div class=\"nav-left-right nav-ok pull-right\" >\n            <a routerLink=\"new\">\n              <button class=\"glyphicon glyphicon-plus nav-plus pull-right website-nav-btn\" >\n              </button>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Content-->\n<div class=\"content website-content\">\n  <!--<ul>-->\n    <!--<li class=\"menu\">-->\n      <!--<div class=\"row\">-->\n        <!--<a href=\"../page/page-list.html\">-->\n          <!--<p class=\"pull-left menu-p\">Address Book App</p>-->\n        <!--</a>-->\n        <!--<a href=\"website-edit.html\">-->\n          <!--<span class=\"menu-btn pull-right glyphicon glyphicon-cog\"></span>-->\n        <!--</a>-->\n      <!--</div>-->\n    <!--</li>-->\n    <!--<li class=\"menu\">-->\n      <!--<a href=\"../page/page-list.html\">-->\n        <!--<p class=\"pull-left menu-p\">Blogger</p>-->\n      <!--</a>-->\n      <!--<a href=\"website-edit.html\">-->\n        <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n      <!--</a>-->\n    <!--</li>-->\n    <!--<li class=\"menu\">-->\n      <!--<a href=\"../page/page-list.html\">-->\n        <!--<p class=\"pull-left menu-p\">Blogging App</p>-->\n      <!--</a>-->\n      <!--<a href=\"website-edit.html\">-->\n        <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n      <!--</a>-->\n    <!--</li>-->\n    <!--<li class=\"menu\">-->\n      <!--<a href=\"../page/page-list.html\">-->\n        <!--<p class=\"pull-left menu-p\">Script Testing App</p>-->\n      <!--</a>-->\n      <!--<a href=\"website-edit.html\">-->\n        <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n      <!--</a>-->\n    <!--</li>-->\n  <!--</ul>-->\n  <div >\n    <ul *ngFor=\"let website of websites\">\n      <li class=\"menu\">\n        <button (click)=\"findPage(website)\">\n          {{website['name']}}\n        </button>\n        <a (click)=\"findEditWebsite(website)\" >\n          <button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"bottom\">\n  <a (click)=\"toProfile()\">\n    <button class=\"nav-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = (function () {
    function WebsiteListComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [{}];
    }
    WebsiteListComponent.prototype.findPage = function (website) {
        if (website) {
            this.router.navigate(['profile', this.userId, 'website', website['_id'], 'page']);
        }
    };
    WebsiteListComponent.prototype.findEditWebsite = function (website) {
        if (website) {
            this.router.navigate(['profile', this.userId, 'website', website['_id']]);
        }
    };
    WebsiteListComponent.prototype.toProfile = function () {
        this.router.navigate(['profile', this.userId]);
    };
    WebsiteListComponent.prototype.toNewWebsite = function () {
        this.router.navigate(['profile', this.userId, 'website', 'new']);
    };
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            console.log(params);
        });
        this.websites = this._websiteService.findWebsitesByUser(this.userId);
        console.log(this.websites);
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WebsiteListComponent);

var _a, _b, _c;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <!--Nav Bar-->\n  <div class=\"nav-bar\">\n    <div class=\"container-fluid nav-container\">\n      <div class=\"row nav-row\">\n        <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs nav-left\">\n          <div class=\"row\">\n            <div class=\"nav-left-left pull-left col-xs-2 \" href=\"website-ulist.html\">\n              <a routerLink=\"/profile/{{userId}}/website\">\n                <button class=\"glyphicon glyphicon-chevron-left nav-back pull-left website-nav-btn\" >\n                </button>\n              </a>\n            </div>\n            <div class=\"nav-left-center col-xs-8\">\n              <p class=\"nav-p\">Websites</p>\n            </div>\n            <div class=\"nav-left-right col-xs-2\">\n              <a routerLink=\"/profile/{{userId}}/website/new\">\n                <button class=\"glyphicon glyphicon-plus nav-plus\" >\n                </button>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-8 col-md-8 col-lg-8 hidden-xs nav-right\">\n          <div class=\"row\">\n            <div class=\"col-xs-11 nav-right-left\">\n              <p class=\"nav-p \">Edit Website</p>\n            </div>\n            <div class=\"col-xs-1  nav-right-right nav-ok\">\n              <a routerLink=\"/profile/{{userId}}/website\">\n                <button class=\"glyphicon glyphicon-ok btn-white\">\n                </button>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 visible-xs nav-full\">\n          <div class=\"row\">\n            <div class=\"nav-left-left pull-left col-xs-2 \" href=\"website-ulist.html\">\n              <a routerLink=\"/profile/{{userId}}/website\">\n                <button class=\"glyphicon glyphicon-chevron-left nav-back\" >\n                </button>\n              </a>\n            </div>\n            <div class=\"nav-left-center col-xs-8\">\n              <p class=\"nav-p\">Websites</p>\n            </div>\n            <div class=\"nav-left-right col-xs-2 nav-ok\">\n              <button\n                (click)=\"saveNewWebsite(websitename.value, websitedescription)\"\n                class=\"glyphicon glyphicon-ok nav-ok-btn\"\n                 routerLink=\"/profile/{{userId}}/website\">\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--Contnet-->\n  <div class=\"content container-fluid\">\n    <div class=\"row\">\n      <div class=\"content-left hidden-xs col-sm-4 col-md-4 col-lg-4\">\n        <div class=\"website-content\">\n          <!--<ul>-->\n            <!--<li class=\"menu\">-->\n              <!--<div class=\"row\">-->\n                <!--<a href=\"../page/page-list.html\">-->\n                  <!--<p class=\"pull-left menu-p\">Address Book App</p>-->\n                <!--</a>-->\n                <!--<a href=\"website-edit.html\">-->\n                  <!--<span class=\"menu-btn pull-right glyphicon glyphicon-cog\"></span>-->\n                <!--</a>-->\n              <!--</div>-->\n            <!--</li>-->\n            <!--<li class=\"menu\">-->\n              <!--<a href=\"../page/page-list.html\">-->\n                <!--<p class=\"pull-left menu-p\">Blogger</p>-->\n              <!--</a>-->\n              <!--<a href=\"website-edit.html\">-->\n                <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n              <!--</a>-->\n            <!--</li>-->\n            <!--<li class=\"menu\">-->\n              <!--<a href=\"../page/page-list.html\">-->\n                <!--<p class=\"pull-left menu-p\">Blogging App</p>-->\n              <!--</a>-->\n              <!--<a href=\"website-edit.html\">-->\n                <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n              <!--</a>-->\n            <!--</li>-->\n            <!--<li class=\"menu\">-->\n              <!--<a href=\"../page/page-list.html\">-->\n                <!--<p class=\"pull-left menu-p\">Script Testing App</p>-->\n              <!--</a>-->\n              <!--<a href=\"website-edit.html\">-->\n                <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n              <!--</a>-->\n            <!--</li>-->\n          <!--</ul>-->\n          <ul>\n            <li class=\"menu\" *ngFor=\"let website of websites\">\n              <button (click)=\"findPage(website)\">\n                {{website['name']}}\n              </button>\n              <a (click)=\"findEditWebsite(website)\" >\n                <button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"content-right col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"content-title\">Website Name</p>\n        <input placeholder=\"Blogger\"\n               type=\"text\"\n               #websitename\n               class=\"form-control\">\n        <p class=\"content-title\">Website Description</p>\n        <textarea type=\"text\"\n                  class=\"form-control input-description\"\n                  #websitedescription\n                  placeholder=\"Description\" rows=\"5\"></textarea>\n      </div>\n    </div>\n  </div>\n\n  <!--Bottom Bar-->\n  <div class=\"bottom\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <button class=\"nav-btn glyphicon glyphicon-user pull-right\"></button>\n    </a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [{}];
    }
    WebsiteNewComponent.prototype.findPage = function (website) {
        console.log(this.websites);
        console.log(website['_id']);
        if (website) {
            this.router.navigate(['profile', this.userId, 'website', website['_id'], 'page']);
        }
    };
    WebsiteNewComponent.prototype.findEditWebsite = function (website) {
        if (website) {
            this.router.navigate(['profile', this.userId, 'website', website['_id']]);
        }
    };
    WebsiteNewComponent.prototype.saveNewWebsite = function (websitename, websitedescription) {
        var website = { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' };
        website['_id'] = Math.random().toString();
        website['name'] = websitename;
        website['developerId'] = this.userId.toString();
        website['description'] = websitedescription;
        console.log(website);
        this._websiteService.createWebsite(website['_id'], website);
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WebsiteNewComponent);

var _a, _b, _c;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 nav-row\">\n      <a (click)=\"toWidgetList()\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10 nav-row\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Choose Widget</b>\n      </p>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <a href=\"widget-heading.html\">\n        <p>Header</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>Label</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>HTML</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>Text Input</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>Link</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>Button</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>Image</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>Youtube</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>Data Table</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>Repeater</p>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a (click)=\"toProfile()\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetChooserComponent.prototype.toWebsiteList = function () {
        this.router.navigate(['profile', this.userId, 'website']);
    };
    WidgetChooserComponent.prototype.toWidgetList = function () {
        console.log(this.websiteId);
        console.log(this.websiteId);
        console.log(this.pageId);
        this.router.navigate(['profile', this.userId, 'website', this.websiteId, 'page', this.pageId]);
    };
    WidgetChooserComponent.prototype.toProfile = function () {
        this.router.navigate(['profile', this.userId]);
    };
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetChooserComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetEditComponent.prototype.toWebsiteList = function () {
        this.router.navigate(['profile', this.userId, 'website']);
    };
    WidgetEditComponent.prototype.toProfile = function () {
        this.router.navigate(['profile', this.userId]);
    };
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetEditComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             placeholder=\"US Senate Reaches Compromise\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Size</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             placeholder=\"3\">\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a href=\"../user/profile.html\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.toWebsiteList = function () {
        this.router.navigate(['profile', this.userId, 'website']);
    };
    WidgetHeaderComponent.prototype.toProfile = function () {
        this.router.navigate(['profile', this.userId]);
    };
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 nav-right\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input\" type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input\" type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>URL</span>\n      </div>\n      <input class=\"widget-input\"\n             placeholder=\"https://github.com/joelgrus/data-science-from-scratch/blob/master/code/plot_state_borders.py\"\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Width</span>\n      </div>\n      <input class=\"widget-input\"\n             type=\"text\"\n             placeholder=\"100%\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Upload</span>\n      </div>\n      <input class=\"widget-input\"\n             type=\"text\"\n             placeholder=\"No file chosen\">\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-primary\">Upload image</a>\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a href=\"../user/profile.html\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetImageComponent = (function () {
    function WidgetImageComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetImageComponent.prototype.toWebsiteList = function () {
        this.router.navigate(['profile', this.userId, 'website']);
    };
    WidgetImageComponent.prototype.toProfile = function () {
        this.router.navigate(['profile', this.userId]);
    };
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>URL</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             placeholder=\"https://github.com\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Width</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\">\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a href=\"../user/profile.html\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent() {
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetYoutubeComponent);

//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a href=\"../page/page-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widgets</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a href=\"widget-chooser.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-plus pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-toolbar\">\n        <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n        <button class=\"widget-toolbar-btn glyphicon glyphicon-align-justify\"></button>\n      </div>\n      <div class=\"widget-header\">\n        <p>Joshua</p>\n      </div>\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-toolbar\">\n        <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n        <button class=\"widget-toolbar-btn glyphicon glyphicon-align-justify\"></button>\n      </div>\n      <div class=\"widget-image\">\n        <img src=\"http://res.cloudinary.com/db2iplwjn/image/upload/v1506282955/821027_jay2yb.png\">\n      </div>\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-toolbar\">\n        <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n        <button class=\"widget-toolbar-btn glyphicon glyphicon-align-justify\"></button>\n      </div>\n      <div class=\"widget-youtube\">\n        <iframe src=\"https://www.youtube.com/embed/YZg92Q12-iU\"></iframe>\n      </div>\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-toolbar\">\n        <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n        <button class=\"widget-toolbar-btn glyphicon glyphicon-align-justify\"></button>\n      </div>\n      <div class=\"widget-youtube\">\n        <iframe src=\"https://www.youtube.com/embed/YZg92Q12-iU\"></iframe>\n      </div>\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-toolbar\">\n        <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n        <button class=\"widget-toolbar-btn glyphicon glyphicon-align-justify\"></button>\n      </div>\n      <div class=\"widget-youtube\">\n        <iframe src=\"https://www.youtube.com/embed/YZg92Q12-iU\"></iframe>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <button class=\"widget-bottom-left-btn glyphicon glyphicon-play pull-left\">\n    <a href=\"profile.html\" class=\"navbar-link\"></a>\n  </button>\n  <button class=\"widget-bottom-left-btn glyphicon glyphicon-eye-open pull-left\">\n    <a href=\"profile.html\" class=\"navbar-link\"></a>\n  </button>\n\n  <a href=\"../user/profile.html\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = (function () {
    function WidgetListComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetListComponent.prototype.toWebsiteList = function () {
        this.router.navigate(['profile', this.userId, 'website']);
    };
    WidgetListComponent.prototype.toProfile = function () {
        this.router.navigate(['profile', this.userId]);
    };
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetListComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    // email: String;
    // address; String;
    // constructor(_id, username, password) {
    //   this._id = _id;
    //   this.username = username;
    //   this.password = password;
    // }
    function User(_id, username, password) {
        this._id = _id;
        this.username = username;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageService = (function () {
    function PageService() {
        this.pages = [
            { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
        ];
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page.websiteId = websiteId;
        this.pages.push(page);
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i].websiteId = websiteId) {
                return this.pages[i];
            }
        }
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id = pageId) {
                return this.pages[i];
            }
        }
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id = pageId) {
                this.pages[i] = page;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id = pageId) {
                this.pages.splice(i, 1);
            }
        }
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageService);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService() {
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById
        };
        this.users = [
            new __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__["a" /* User */]('123', 'alice', 'alice'),
            new __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__["a" /* User */]('234', 'bob', 'bob'),
            new __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__["a" /* User */]('345', 'charlie', 'charlie'),
            new __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__["a" /* User */]('456', 'jannunzi', 'jannunzi')
        ];
    }
    UserService.prototype.createUser = function (user) {
        user._id = Math.random();
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        console.log('service' + username);
        console.log(password);
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username && this.users[x].password === password) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users[x] = user;
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                this.users.splice(x, 1);
            }
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebsiteService = (function () {
    function WebsiteService() {
        this.websites = [
            { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' }
        ];
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === userId) {
                console.log('id exists');
                return;
            }
            else {
                this.websites.push(website);
                return;
            }
        }
    };
    WebsiteService.prototype.findWebsiteByUser = function (userId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                return this.websites[x];
            }
        }
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var sites = [{}];
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                sites.push(this.websites[x]);
            }
        }
        sites.splice(0, 1);
        return sites;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                return this.websites[x];
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites[x] = website;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites.splice(x, 1);
            }
        }
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsiteService);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetService = (function () {
    function WidgetService() {
        this.widgets = [
            { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO' },
            { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' }, {
                '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
                'url': 'http://lorempixel.com/400/200/'
            },
            { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' },
            { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' }, {
                '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
                'url': 'https://youtu.be/AM2Ivdi9c4E'
            },
        ];
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget.pageId = pageId;
        this.widgets.push(widget);
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId = pageId) {
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id = widgetId) {
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id = widgetId) {
                this.widgets[x] = widget;
            }
        }
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id = widgetId) {
                this.widgets.splice(x, 1);
            }
        }
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetService);

//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map