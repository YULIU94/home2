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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_heading_widget_heading_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-heading/widget-heading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_new_widget_new_header_widget_new_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-header/widget-new-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_new_widget_new_image_widget_new_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-image/widget-new-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_new_widget_new_youtube_widget_new_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-youtube/widget-new-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_edit_header_widget_edit_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-header/widget-edit-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_edit_image_widget_edit_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-image/widget-edit-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_edit_widget_edit_youtube_widget_edit_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-youtube/widget-edit-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_widget_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_SafePipe__ = __webpack_require__("../../../../../src/app/services/SafePipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_widget_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_widget_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_widget_widget_new_widget_new_text_widget_new_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-text/widget-new-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_widget_widget_edit_widget_edit_text_widget_edit_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-text/widget-edit-text.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import





// providers


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_widget_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_widget_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_heading_widget_heading_component__["a" /* WidgetHeadingComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_new_widget_new_header_widget_new_header_component__["a" /* WidgetNewHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_new_widget_new_image_widget_new_image_component__["a" /* WidgetNewImageComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_new_widget_new_youtube_widget_new_youtube_component__["a" /* WidgetNewYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_widget_widget_new_widget_new_text_widget_new_text_component__["a" /* WidgetNewTextComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_edit_header_widget_edit_header_component__["a" /* WidgetEditHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_edit_image_widget_edit_image_component__["a" /* WidgetEditImageComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_edit_widget_edit_youtube_widget_edit_youtube_component__["a" /* WidgetEditYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_widget_widget_edit_widget_edit_text_widget_edit_text_component__["a" /* WidgetEditTextComponent */],
            __WEBPACK_IMPORTED_MODULE_34__services_SafePipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_35__components_widget_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_19__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_20_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_22__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_23__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_24__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_25__services_flickr_service_client__["a" /* FlickrService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_new_widget_new_image_widget_new_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-image/widget-new-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_new_widget_new_header_widget_new_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-header/widget-new-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_new_widget_new_youtube_widget_new_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-youtube/widget-new-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_edit_header_widget_edit_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-header/widget-edit-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_edit_image_widget_edit_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-image/widget-edit-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_edit_youtube_widget_edit_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-youtube/widget-edit-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_new_widget_new_text_widget_new_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-text/widget-new-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_text_widget_edit_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-text/widget-edit-text.component.ts");




















// import {WidgetYoutubeComponent} from "./components/widget/widget-edit/widget-youtube/widget-youtube.component";
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
    // {path: 'profile/:userId/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent},
    { path: 'profile/:userId/website/:wid/page/:pid/widget/header', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_new_widget_new_header_widget_new_header_component__["a" /* WidgetNewHeaderComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/image', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_new_widget_new_image_widget_new_image_component__["a" /* WidgetNewImageComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/youtube', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_new_widget_new_youtube_widget_new_youtube_component__["a" /* WidgetNewYoutubeComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/text', component: __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_new_widget_new_text_widget_new_text_component__["a" /* WidgetNewTextComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/:wgid/header', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_edit_header_widget_edit_header_component__["a" /* WidgetEditHeaderComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/:wgid/image', component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_edit_image_widget_edit_image_component__["a" /* WidgetEditImageComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/:wgid/youtube', component: __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_edit_youtube_widget_edit_youtube_component__["a" /* WidgetEditYoutubeComponent */] },
    { path: 'profile/:userId/website/:wid/page/:pid/widget/:wgid/text', component: __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_text_widget_edit_text_component__["a" /* WidgetEditTextComponent */] },
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

module.exports = "\n<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\"\n         class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Edit Page</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 \">\n      <a class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"\n                (click)=\"updatePage(pagename.value, pagetitle.value)\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"page-content\">\n  <ul>\n    <li class=\"page-content-title page-li\">\n      <p class=\"pull-left menu-p\">Name</p>\n    </li>\n    <li>\n      <input placeholder=\"Page Name\"\n             #pagename\n             class=\"page-content-input form-control\">\n    </li>\n    <li class=\"page-content-title page-li\">\n      <p class=\"pull-left menu-p\">Title</p>\n    </li>\n    <li>\n      <input placeholder=\"Page Title\"\n             #pagetitle\n             class=\"page-content-input form-control\">\n    </li>\n    <li>\n      <a (click)=\"deletePage()\"\n        class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
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
    function PageEditComponent(_pageService, activatedRoute, router) {
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pages = [{}];
    }
    PageEditComponent.prototype.updatePage = function (pagename, pagetitle) {
        var _this = this;
        var page = { '_id': this.pageId, 'name': pagename, 'websiteId': this.websiteId, 'description': '' };
        this._pageService.updatePage(this.pageId, page)
            .subscribe(function (newpage) {
            _this.router.navigate(['profile', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this._pageService.deletePage(this.pageId)
            .subscribe(function (newpage) {
            _this.router.navigate(['profile', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this._pageService.findAllPagesForWebsite(this.websiteId)
            .subscribe(function (pages) {
            _this.pages = pages;
            console.log(pages);
        });
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
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

module.exports = "\n<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/{{userId}}/website\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Pages</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"new\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-plus pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"page-content\">\n  <!--<ul class=\"page-ul\">-->\n    <!--<li class=\"menu\">-->\n      <!--<a >-->\n        <!--<p class=\"pull-left menu-p\">Blog Post</p>-->\n      <!--</a>-->\n      <!--<a href=\"page-edit.html\">-->\n        <!--<span class=\"menu-btn pull-right glyphicon glyphicon-cog\"></span>-->\n      <!--</a>-->\n    <!--</li>-->\n    <!--<li class=\"menu\">-->\n      <!--<a href=\"../widget/widget-list.html\">-->\n        <!--<p class=\"pull-left menu-p\">Blogs</p>-->\n      <!--</a>-->\n      <!--<a href=\"page-edit.html\">-->\n        <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n      <!--</a>-->\n    <!--</li>-->\n    <!--<li class=\"menu\">-->\n      <!--<a href=\"../widget/widget-list.html\">-->\n        <!--<p class=\"pull-left menu-p\">Home</p>-->\n      <!--</a>-->\n      <!--<a href=\"page-edit.html\">-->\n        <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n      <!--</a>-->\n    <!--</li>-->\n    <!--<li class=\"menu\">-->\n      <!--<a href=\"../widget/widget-list.html\">-->\n        <!--<p class=\"pull-left menu-p\">About</p>-->\n      <!--</a>-->\n      <!--<a href=\"page-edit.html\">-->\n        <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n      <!--</a>-->\n    <!--</li>-->\n  <!--</ul>-->\n\n  <ul class=\"page-ul\" *ngFor=\"let page of pages\">\n    <li class=\"menu\">\n      <a routerLink=\"{{page['_id']}}/widget\">\n        <p class=\"pull-left menu-p\">{{page['name']}}</p>\n      </a>\n      <a routerLink=\"{{page['_id']}}\">\n        <button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
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
    function PageListComponent(_pageService, activatedRoute, router) {
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pages = [{}];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
        });
        this._pageService.findAllPagesForWebsite(this.websiteId)
            .subscribe(function (pages) {
            _this.pages = pages;
            console.log(pages);
        });
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
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

module.exports = "\n<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>New Page</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a>\n        <button\n          (click)=\"createPage(pagename.value, pagetitle.value)\"\n          class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"page-content\">\n  <ul>\n    <li class=\"page-content-title page-li\">\n      <p class=\"pull-left menu-p\">Name</p>\n    </li>\n    <input placeholder=\"Page Name\"\n           #pagename\n           type=\"text\"\n           class=\"page-content-input form-control\">\n    <li class=\"page-content-title page-li\">\n      <p class=\"pull-left menu-p\">Title</p>\n    </li>\n    <input placeholder=\"Page Title\"\n           #pagetitle\n           type=\"text\"\n           class=\"page-content-input form-control\">\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
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
    function PageNewComponent(_websiteService, _pageService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pages = [{}];
    }
    PageNewComponent.prototype.createPage = function (pagename, pagetitle) {
        var _this = this;
        var page = { 'name': pagename, 'websiteId': this.websiteId, 'description': 'new', 'title': pagetitle };
        this._pageService.createPage(this.websiteId, page)
            .subscribe(function (pages) {
            _this.router.navigate(['profile', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
        });
        this._pageService.findAllPagesForWebsite(this.websiteId)
            .subscribe(function (pages) {
            _this.pages = pages;
            console.log(pages);
        });
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PageNewComponent);

var _a, _b, _c, _d;
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

module.exports = "<div class=\"container main\" id=\"main\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n\n  <form #f=\"ngForm\">\n\n    <input\n      placeholder=\"username\"\n      name=\"username\"\n      type=\"text\"\n      class=\"form-control\"\n      ngModel\n      required\n      #username/>\n\n    <!--<span class=\"help-block\" ng-if=\"!username.valid && username.touched\">-->\n      <!--Please enter username!-->\n    <!--</span> -->\n\n    <span><br></span>\n    <input\n      name= \"password\"\n      placeholder=\"password\"\n      #password\n           type=\"password\"\n           class=\"form-control\"/>\n    <span><br></span>\n    <button class=\"btn btn-primary btn-block\"\n            (click)=\"login(username.value, password.value)\"\n            [disabled]=\"!f.valid\">Login</button>\n    <button\n      routerLink=\"/register\"\n      class=\"btn btn-success btn-block\">\n        Register\n    </button>\n  </form>\n</div>\n"

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
        var _this = this;
        // if (username.length === 0 || password.length === 0) {
        //   alert('missed username or password');
        // } else {
        // const user: User = this.userService.findUserByCredentials(username, password);
        console.log(username);
        this.userService.findUserByCredentials(username, password)
            .subscribe(function (user) {
            console.log('user:');
            console.log(user);
            if (user) {
                _this.router.navigate(['/profile', user._id]);
            }
            else {
                _this.errorFlag = true;
                _this.errorMsg = 'Error';
                alert('wrong username or password');
            }
            // if (user) {
            //   this.user = user;
            // }
            // if (this.user) {
            //   this.router.navigate(['profile', this.user._id]);
            //   return;
            // }
        });
        // }
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

module.exports = "\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a class=\"navbar-link\"\n         (click)=\"updateUser(email.value, firstname.value, lastname.value)\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"username\"\n        #username\n        placeholder=\"alice\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" #email id=\"email\" placeholder=\"username@hotmail.com\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\" class=\"form-control\" #firstname id=\"first-name\" placeholder=\"firstname\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" #lastname id=\"last-name\" placeholder=\"lastname\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block\"\n     routerLink=\"website\">Websites</a>\n  <a class=\"btn btn-danger btn-block \"\n     routerLink=\"/login\">Logout</a>\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"deleteUser()\">Delete User</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a>\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

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
    }
    ProfileComponent.prototype.updateUser = function (email, firstName, lastName) {
        var newUser = this.user;
        newUser.firstname = firstName;
        newUser.lastname = lastName;
        newUser.email = email;
        this.userService.updateUser(newUser)
            .subscribe(function (status) {
            console.log(status);
        });
    };
    ProfileComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser(this.userId)
            .subscribe(function (user) {
            _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            console.log(_this.userId);
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            console.log(user);
            _this.user = user;
            _this.username = user.username;
            console.log(_this.username);
        });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
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



var RegisterComponent = (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.registered = function (username, password, verifypassword) {
        var _this = this;
        this.username = username;
        this.password = password;
        if (username.length === 0 || password.length === 0 || verifypassword.length === 0) {
            alert('missed information!');
        }
        else if (!(password === verifypassword)) {
            alert('password not equal!');
        }
        else {
            this.userService.findUserByUsername(username)
                .subscribe(function (user) {
                console.log('user:');
                console.log(user);
                if (user) {
                    alert('user exists!!!');
                }
                else if (user === null) {
                    alert('successfully registered!');
                    // randomly assign userid
                    var newUser = {
                        username: _this.username,
                        password: _this.password
                    };
                    _this.userService.createUser(newUser)
                        .subscribe(function (userFromServer) {
                        console.log(userFromServer);
                    });
                    console.log('newuser:' + newUser);
                    _this.router.navigate(['/login']);
                }
            });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
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

module.exports = "\n<div class=\"container-fluid\">\n  <!--Nav Bar-->\n  <div class=\"nav-bar\">\n    <div class=\"container-fluid nav-container\">\n      <div class=\"row nav-row\">\n        <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs nav-left\">\n          <div class=\"row\">\n            <div class=\"nav-left-left pull-left col-xs-2 \" href=\"website-ulist.html\">\n              <a routerLink=\"/profile/{{userId}}/website\">\n                <button class=\"glyphicon glyphicon-chevron-left nav-back pull-left website-nav-btn\" >\n                </button>\n              </a>\n            </div>\n            <div class=\"nav-left-center col-xs-8\">\n              <p class=\"nav-p\">Websites</p>\n            </div>\n            <div class=\"nav-left-right col-xs-2\">\n              <a routerLink=\"/profile/{{userId}}/website/new\">\n                <button class=\"glyphicon glyphicon-plus nav-plus\" >\n                </button>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-8 col-md-8 col-lg-8 hidden-xs nav-right\">\n          <div class=\"row\">\n            <div class=\"col-xs-11 nav-right-left\">\n              <p class=\"nav-p \">Edit Website</p>\n            </div>\n            <div class=\"col-xs-1  nav-right-right nav-ok\">\n              <a>\n                <button\n                  (click)=\"updateWebsite(websitename.value, websitedescription.toString())\"\n                  class=\"glyphicon glyphicon-ok btn-white\">\n                </button>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 visible-xs nav-full\">\n          <div class=\"row\">\n            <div class=\"nav-left-left pull-left col-xs-2 \" href=\"website-ulist.html\">\n              <a routerLink=\"/profile/{{userId}}/website\">\n                <button class=\"glyphicon glyphicon-chevron-left nav-back\" >\n                </button>\n              </a>\n            </div>\n            <div class=\"nav-left-center col-xs-8\">\n              <p class=\"nav-p\">Websites</p>\n            </div>\n            <div class=\"nav-left-right col-xs-2 nav-ok\">\n              <button\n                (click)=\"updateWebsite(websitename.value, websitedescription.toString())\"\n                class=\"glyphicon glyphicon-ok nav-ok-btn\" >\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--Contnet-->\n  <div class=\"content container-fluid\">\n    <div class=\"row\">\n      <div class=\"content-left hidden-xs col-sm-4 col-md-4 col-lg-4\">\n        <div class=\"website-content\" *ngFor=\"let website of websites\">\n          <ul>\n            <li class=\"menu\">\n              <a routerLink=\"/profile/{{userId}}/website/{{website['_id']}}/page\">\n                <button >\n                  {{website['name']}}\n                </button>\n              </a>\n              <a routerLink=\"/profile/{{userId}}/website/{{website['_id']}}\" >\n                <button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"content-right col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"content-title\">Website Name</p>\n        <input placeholder=\"Blogger\"\n               type=\"text\"\n               #websitename\n               class=\"form-control\">\n        <p class=\"content-title\">Website Description</p>\n        <textarea type=\"text\"\n                  #websitedescription\n                  class=\"form-control input-description\" rows=\"5\" placeholder=\"Description\"></textarea>\n        <a class=\"btn btn-block btn-delete\" (click)=\"deleteWebsite()\">Delete</a>\n      </div>\n    </div>\n  </div>\n\n  <!--Bottom Bar-->\n  <div class=\"bottom\">\n    <button class=\"nav-btn glyphicon glyphicon-user pull-right\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\"></a>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
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
        this.websites = [];
    }
    WebsiteEditComponent.prototype.updateWebsite = function (name, description) {
        var _this = this;
        var newWebsite = new __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__["a" /* Website */](this.website._id, name, this.website.developerId, description);
        this._websiteService.updateWebsite(this.userId, newWebsite, this.websiteId)
            .subscribe(function (websites) {
            _this.router.navigate(['profile', _this.userId, 'website']);
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this._websiteService.deleteWebsite(this.userId, this.websiteId)
            .subscribe(function (website) {
            _this.router.navigate(['profile', _this.userId, 'website']);
        });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            console.log(_this.userId);
            console.log(_this.websiteId);
        });
        this._websiteService.findWebsiteById(this.userId, this.websiteId)
            .subscribe(function (website) {
            _this.website = website;
            console.log(_this.website);
        });
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

module.exports = "\n<!--Navigation Bar-->\n<div class=\"nav-bar\">\n  <div class=\"container-fluid nav-container\">\n    <div class=\"row nav-row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 nav-full\">\n        <div class=\"row\">\n          <div class=\"nav-left-left pull-left\">\n            <a routerLink=\"/profile/{{userId}}\">\n              <button class=\"glyphicon glyphicon-chevron-left nav-back pull-left website-nav-btn\">\n              </button>\n            </a>\n          </div>\n          <div class=\"nav-left-center col-xs-10\">\n            <p class=\"nav-p\">Websites</p>\n          </div>\n          <div class=\"nav-left-right nav-ok pull-right\" >\n            <a routerLink=\"new\">\n              <button class=\"glyphicon glyphicon-plus nav-plus pull-right website-nav-btn\" >\n              </button>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Content-->\n<div class=\"content website-content\">\n  <div >\n    <ul *ngFor=\"let website of websites\">\n      <li class=\"menu\">\n        <button (click)=\"findPage(website)\">\n          {{website['name']}}\n        </button>\n        <a (click)=\"findEditWebsite(website)\" >\n          <button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"bottom\">\n  <a routerLink=\"/profile/{{userId}}\">\n    <button class=\"nav-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

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
        this.websites = [];
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
    WebsiteListComponent.prototype.selectWebsite = function (websiteId) {
        var _this = this;
        this._websiteService.findWebsiteById(this.userId, websiteId)
            .subscribe(function (website) {
            _this.websiteName = website.name;
        });
    };
    WebsiteListComponent.prototype.deleteWebsite = function (websiteId) {
        var _this = this;
        this._websiteService.deleteWebsite(this.userId, websiteId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            console.log(params);
        });
        this._websiteService.findWebsitesForUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
            console.log(_this.websites);
        });
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

module.exports = "\n<div class=\"container-fluid\">\n  <!--Nav Bar-->\n  <div class=\"nav-bar\">\n    <div class=\"container-fluid nav-container\">\n      <div class=\"row nav-row\">\n        <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs nav-left\">\n          <div class=\"row\">\n            <div class=\"nav-left-left pull-left col-xs-2 \" href=\"website-ulist.html\">\n              <a routerLink=\"/profile/{{userId}}/website\">\n                <button class=\"glyphicon glyphicon-chevron-left nav-back pull-left website-nav-btn\" >\n                </button>\n              </a>\n            </div>\n            <div class=\"nav-left-center col-xs-8\">\n              <p class=\"nav-p\">Websites</p>\n            </div>\n            <div class=\"nav-left-right col-xs-2\">\n              <a routerLink=\"/profile/{{userId}}/website/new\">\n                <button class=\"glyphicon glyphicon-plus nav-plus\" >\n                </button>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-8 col-md-8 col-lg-8 hidden-xs nav-right\">\n          <div class=\"row\">\n            <div class=\"col-xs-11 nav-right-left\">\n              <p class=\"nav-p \">Edit Website</p>\n            </div>\n            <div class=\"col-xs-1  nav-right-right nav-ok\">\n              <a>\n                <button class=\"glyphicon glyphicon-ok btn-white\"\n                        (click)=\"createWebsite(websitename.value, websitedescription.toString())\">\n                </button>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 visible-xs nav-full\">\n          <div class=\"row\">\n            <div class=\"nav-left-left pull-left col-xs-2 \" href=\"website-ulist.html\">\n              <a routerLink=\"/profile/{{userId}}/website\">\n                <button class=\"glyphicon glyphicon-chevron-left nav-back\" >\n                </button>\n              </a>\n            </div>\n            <div class=\"nav-left-center col-xs-8\">\n              <p class=\"nav-p\">Websites</p>\n            </div>\n            <div class=\"nav-left-right col-xs-2 nav-ok\">\n              <!--(click)=\"saveNewWebsite(websitename.value, websitedescription)\"-->\n              <button\n                (click)=\"createWebsite(websitename.value, websitedescription.toString())\"\n                 class=\"glyphicon glyphicon-ok nav-ok-btn\">\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--Contnet-->\n  <div class=\"content container-fluid\">\n    <div class=\"row\">\n      <div class=\"content-left hidden-xs col-sm-4 col-md-4 col-lg-4\">\n        <div class=\"website-content\">\n          <!--<ul>-->\n            <!--<li class=\"menu\">-->\n              <!--<div class=\"row\">-->\n                <!--<a href=\"../page/page-list.html\">-->\n                  <!--<p class=\"pull-left menu-p\">Address Book App</p>-->\n                <!--</a>-->\n                <!--<a href=\"website-edit.html\">-->\n                  <!--<span class=\"menu-btn pull-right glyphicon glyphicon-cog\"></span>-->\n                <!--</a>-->\n              <!--</div>-->\n            <!--</li>-->\n            <!--<li class=\"menu\">-->\n              <!--<a href=\"../page/page-list.html\">-->\n                <!--<p class=\"pull-left menu-p\">Blogger</p>-->\n              <!--</a>-->\n              <!--<a href=\"website-edit.html\">-->\n                <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n              <!--</a>-->\n            <!--</li>-->\n            <!--<li class=\"menu\">-->\n              <!--<a href=\"../page/page-list.html\">-->\n                <!--<p class=\"pull-left menu-p\">Blogging App</p>-->\n              <!--</a>-->\n              <!--<a href=\"website-edit.html\">-->\n                <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n              <!--</a>-->\n            <!--</li>-->\n            <!--<li class=\"menu\">-->\n              <!--<a href=\"../page/page-list.html\">-->\n                <!--<p class=\"pull-left menu-p\">Script Testing App</p>-->\n              <!--</a>-->\n              <!--<a href=\"website-edit.html\">-->\n                <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n              <!--</a>-->\n            <!--</li>-->\n          <!--</ul>-->\n          <ul>\n            <li class=\"menu\" *ngFor=\"let website of websites\">\n              <button (click)=\"findPage(website)\">\n                {{website['name']}}\n              </button>\n              <a (click)=\"findEditWebsite(website)\" >\n                <button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"content-right col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"content-title\">Website Name</p>\n        <input placeholder=\"Blogger\"\n               type=\"text\"\n               #websitename\n               class=\"form-control\">\n        <p class=\"content-title\">Website Description</p>\n        <textarea type=\"text\"\n                  class=\"form-control input-description\"\n                  [(ngModel)] = 'websiteDescription'\n                  #websitedescription\n                  placeholder=\"Description\" rows=\"5\"></textarea>\n      </div>\n    </div>\n  </div>\n\n  <!--Bottom Bar-->\n  <div class=\"bottom\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <button class=\"nav-btn glyphicon glyphicon-user pull-right\"></button>\n    </a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
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
    WebsiteNewComponent.prototype.createWebsite = function (websitename, websitedescription) {
        var _this = this;
        var website = new __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__["a" /* Website */]('', websitename, this.userId, this.websiteDescription);
        this._websiteService.createWebsite(this.userId, website)
            .subscribe(function (websites) {
            // this.websites = websites;
            _this.router.navigate(['profile', _this.userId, 'website']);
        });
    };
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

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 nav-row\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10 nav-row\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Choose Widget</b>\n      </p>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/header\">\n        <p>Header</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>Label</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>HTML</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/text\">\n        <p>Text Input</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>Link</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>Button</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/image\">\n        <p>Image</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/youtube\">\n        <p>Youtube</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>Data Table</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a href=\"widget-header.html\">\n        <p>Repeater</p>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetChooserComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            console.log(params);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetChooserComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-header/widget-edit-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-header/widget-edit-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\" (click)=\"saveWidget(name.value, text.value, size.value)\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input\n        #name\n        class=\"widget-input form-control\"\n        type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <!--<input class=\"widget-input form-control\"-->\n             <!--#text-->\n             <!--type=\"text\"-->\n             <!--placeholder=\"US Senate Reaches Compromise\">-->\n\n      <quill-editor\n        (change)=\"onContentChanged($event)\"\n        [(ngModel)]=\"widget.text\" #text> </quill-editor> <!--[(ngModel)]=\"widget.text\"   name=\"text\"-->\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Size</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #size\n             type=\"text\"\n             placeholder=\"3\">\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\" (click)=\"deleteWidget()\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-header/widget-edit-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditHeaderComponent = (function () {
    function WidgetEditHeaderComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.text = String;
    }
    WidgetEditHeaderComponent.prototype.saveWidget = function (name, text, size) {
        var _this = this;
        var newWidget = { 'widgetId': this.widgetId, 'type': this.widget.type, 'size': size, 'text': this.text };
        this.widgetService.updateWidgetTextInput(this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.router.navigate(['profile', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetEditHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widget) {
            _this.router.navigate(['profile', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetEditHeaderComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        this.text = text;
    };
    WidgetEditHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
    };
    return WidgetEditHeaderComponent;
}());
WidgetEditHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-header/widget-edit-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-header/widget-edit-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetEditHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-edit-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-image/widget-edit-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-image/widget-edit-image.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 nav-right\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input\" type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input\" type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>URL</span>\n      </div>\n      <input class=\"widget-input\"\n             placeholder=\"https://github.com/joelgrus/data-science-from-scratch/blob/master/code/plot_state_borders.py\"\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Width</span>\n      </div>\n      <input class=\"widget-input\"\n             type=\"text\"\n             placeholder=\"100%\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Upload</span>\n      </div>\n      <input class=\"widget-input\"\n             type=\"text\"\n             placeholder=\"No file chosen\">\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-primary\">Upload image</a>\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a href=\"../user/profile.html\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-image/widget-edit-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditImageComponent = (function () {
    function WidgetEditImageComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetEditImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
    };
    return WidgetEditImageComponent;
}());
WidgetEditImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-image/widget-edit-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-image/widget-edit-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetEditImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-edit-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-text/widget-edit-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-text/widget-edit-text.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\" (click)=\"saveWidget(name.value, rows.value, text.value, placeholder.value, formatted.checked)\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input\n        #name\n        class=\"widget-input form-control\"\n        type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>rows</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #rows\n             type=\"number\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input form-control\"\n      #text\n      type=\"text\"\n      placeholder=\"Text\">\n\n      <!--<quill-editor-->\n        <!--(change)=\"onContentChanged($event)\"-->\n        <!--[(ngModel)]=\"widget.text\" #text> </quill-editor> &lt;!&ndash;[(ngModel)]=\"widget.text\"   name=\"text\"&ndash;&gt;-->\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>PlaceHolder</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             #placeholder\n             placeholder=\"placeholder\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Formatted</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"checkbox\"\n             #formatted>\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\" (click)=\"deleteWidget()\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-text/widget-edit-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditTextComponent = (function () {
    function WidgetEditTextComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetEditTextComponent.prototype.saveWidget = function (name, rows, text, placeholder, formatted) {
        var _this = this;
        var newWidget = { 'name': name, 'widgetId': this.widgetId, 'type': this.widget.type, 'rows': rows, 'text': text,
            'placeholder': placeholder, 'formatted': formatted };
        this.widgetService.updateWidgetTextInput(this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.router.navigate(['profile', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetEditTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widget) {
            _this.router.navigate(['profile', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetEditTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
    };
    return WidgetEditTextComponent;
}());
WidgetEditTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-text/widget-edit-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-text/widget-edit-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetEditTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-edit-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-youtube/widget-edit-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-youtube/widget-edit-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>URL</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             placeholder=\"https://github.com\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Width</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\">\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a href=\"../user/profile.html\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-youtube/widget-edit-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditYoutubeComponent = (function () {
    function WidgetEditYoutubeComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetEditYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
    };
    return WidgetEditYoutubeComponent;
}());
WidgetEditYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-youtube/widget-edit-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-youtube/widget-edit-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetEditYoutubeComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-edit-youtube.component.js.map

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

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 nav-row\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10 nav-row\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Choose Widget</b>\n      </p>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <label>type</label>\n      <input\n        placeholder=\"type\"\n        type=\"text\"\n        class=\"form-control\"\n        #type/>\n    </li>\n    <li class=\"widget-li\">\n      <label>size</label>\n      <input\n        placeholder=\"size\"\n        type=\"text\"\n        class=\"form-control\"\n        #size/>\n    </li>\n    <li class=\"widget-li\">\n      <label>text</label>\n      <input\n        placeholder=\"text\"\n        type=\"text\"\n        class=\"form-control\"\n        #text/>\n    </li>\n    <li class=\"widget-li\">\n      <label>src</label>\n      <input\n        placeholder=\"src\"\n        type=\"text\"\n        class=\"form-control\"\n        #src/>\n    </li>\n    <li class=\"widget-li\">\n      <button class=\"btn btn-primary btn-block\">\n        Edit\n      </button>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetEditComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetEditComponent);

var _a, _b, _c;
// createWidget(type, size, text, src) {
//   const widget = {'_id': '', 'type': type, 'size': size, 'text': text, 'src': src, pageId: this.pageId};
//   this.widgetService.createWidget(this.pageId, widget)
//     .subscribe((pages) => {
//       this.router.navigate(['profile', this.userId, 'website', this.websiteId, 'page']);
//     });
// }
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

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             placeholder=\"US Senate Reaches Compromise\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Size</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             placeholder=\"3\">\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetHeaderComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.createWidget = function (type, size, text, src) {
        var _this = this;
        var widget = { '_id': '', 'type': type, 'size': size, 'text': text, 'src': src, pageId: this.pageId };
        this.widgetService.createWidget(this.pageId, widget)
            .subscribe(function (pages) {
            _this.router.navigate(['profile', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            console.log(params);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-heading/widget-heading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-heading/widget-heading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-header\">\n  <p>{{widget.text}}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-heading/widget-heading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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




var WidgetHeadingComponent = (function () {
    function WidgetHeadingComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetHeadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['wgid'];
        });
    };
    return WidgetHeadingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]) === "function" && _a || Object)
], WidgetHeadingComponent.prototype, "widget", void 0);
WidgetHeadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-heading',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-heading/widget-heading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-heading/widget-heading.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetHeadingComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-heading.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\n  <input title=\"searchFlickr\"\n         [(ngModel)]=\"searchText\"\n         type=\"text\"\n         placeholder=\"Search on Flickr\"\n         class=\"form-control\">\n  <span class=\"input-group-btn\">\n         <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n </span>\n</div>\n\n<div class=\"row\">\n  <div *ngFor = \"let pic of photos['photo']\"\n       class=\"col-xs-4\">\n    <img    (click)=\"selectPhoto(pic)\"\n            width=\"100%\"\n            [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n    <p></p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(flickrService, widgetService) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.photos = {};
    }
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            console.log(data);
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            console.log(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = {
            websiteId: this.websiteId,
            pageId: this.pageId,
            url: url
        };
    };
    return FlickrImageSearchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], FlickrImageSearchComponent.prototype, "searchText", void 0);
FlickrImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object])
], FlickrImageSearchComponent);

var _a, _b;
//# sourceMappingURL=flickr-image-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-image\">\n  <img [src]=\"widget.url | safe\">\n  <app-flickr-image-search></app-flickr-image-search>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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




var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.websiteId = params['wid'];
        });
    };
    return WidgetImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]) === "function" && _a || Object)
], WidgetImageComponent.prototype, "widget", void 0);
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

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

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widgets</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"new\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-plus pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\" >\n  <ul class=\"widget-ul\" *ngFor=\"let widget of widgets\" [ngSwitch]=\"widget.type\">\n    <li class=\"widget-li\" >\n      <div class=\"widget-toolbar\">\n        <a *ngSwitchCase=\"1\" routerLink=\"{{widget._id}}/header\" >\n          <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n        </a>\n        <a *ngSwitchCase=\"2\" routerLink=\"{{widget._id}}/image\" >\n          <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n        </a>\n        <a *ngSwitchCase=\"3\" routerLink=\"{{widget._id}}/youtube\" >\n          <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n        </a>\n        <a *ngSwitchCase=\"4\" routerLink=\"{{widget._id}}/text\" >\n          <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n        </a>\n        <button class=\"widget-toolbar-btn glyphicon glyphicon-align-justify\"></button>\n      </div>\n      <app-widget-heading *ngSwitchCase='1' [widget]=\"widget\"></app-widget-heading>\n      <!--<app-flickr-image-search *ngSwitchCase=\"2\" ></app-flickr-image-search>-->\n      <app-widget-image *ngSwitchCase='2' [widget]=\"widget\"></app-widget-image>\n      <app-widget-youtube *ngSwitchCase=\"3\" [widget]=\"widget\"></app-widget-youtube>\n      <app-widget-text *ngSwitchCase=\"4\" [widget]=\"widget\"></app-widget-text>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <button class=\"widget-bottom-left-btn glyphicon glyphicon-play pull-left\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\"></a>\n  </button>\n  <button class=\"widget-bottom-left-btn glyphicon glyphicon-eye-open pull-left\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\"></a>\n  </button>\n\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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
    function WidgetListComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            console.log(params);
        });
        this.widgetService.findAllwidgetsForPage(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetListComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-header/widget-new-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-header/widget-new-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\">\n        <button\n          (click)=\"createHeader(name.value, text.value, size.value)\"\n          class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #name\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <!--<input class=\"widget-input form-control\"-->\n             <!--type=\"text\"-->\n             <!--#text-->\n             <!--placeholder=\"US Senate Reaches Compromise\">-->\n      <quill-editor (change)=\"onContentChanged($event)\"> </quill-editor>\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Size</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             #size\n             placeholder=\"3\">\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-header/widget-new-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetNewHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetNewHeaderComponent = (function () {
    function WidgetNewHeaderComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetNewHeaderComponent.prototype.createHeader = function (name, text, size) {
        var _this = this;
        var widget = { '_id': '', 'type': 1, 'size': size, 'text': this.text, 'src': '', pageId: this.pageId };
        this.widgetService.createWidget(this.pageId, widget)
            .subscribe(function (pages) {
            _this.router.navigate(['profile', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetNewHeaderComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        this.text = text;
    };
    WidgetNewHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    return WidgetNewHeaderComponent;
}());
WidgetNewHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-new-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-header/widget-new-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-header/widget-new-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetNewHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-new-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-image/widget-new-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-image/widget-new-image.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\">\n        <button\n          (click)=\"createImage(name.value, text.value, url.value, width.value)\"\n          class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input\"\n             #name\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input\"\n             #text\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>URL</span>\n      </div>\n      <input class=\"widget-input\"\n             #url\n             placeholder=\"https://github.com/joelgrus/data-science-from-scratch/blob/master/code/plot_state_borders.py\"\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Width</span>\n      </div>\n      <input class=\"widget-input\"\n             #width\n             type=\"text\"\n             placeholder=\"100%\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Upload</span>\n      </div>\n      <form    ngNoForm    action=\"http://localhost:3100/api/upload\"   method=\"post\"   enctype=\"multipart/form-data\">\n        <input      name=\" myFile \"         type=\"file\"   class=\"form-control\"/>\n        <input      name=\" widgetId \"   value=\"{{widgetId}}\"         style=\"display:   none\"/>\n        <input      name=\" websiteId \"   value=\"{{websiteId}}\"         style=\"display:   none\"/>\n        <input      name=\" pageId \"   value=\"{{pageId}}\"         style=\"display:   none\"/>\n        <input      name=\" userId \"   value=\"{{userId}}\"         style=\"display:   none\"/>\n        <button   type=\"submit\"   class=\"btn   btn-block   btn-primary\" >Upload   Image</button>\n        <br/>\n      </form>\n    </li>\n    <!--<li>-->\n      <!--<button   type=\"submit\"   class=\"btn   btn-block   btn-primary\">Upload   Image</button>-->\n    <!--</li>-->\n    <li>\n      <a class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n\n</div>\n\n\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-image/widget-new-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetNewImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetNewImageComponent = (function () {
    function WidgetNewImageComponent(widgetService, activatedRoute, router, http) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.http = http;
    }
    WidgetNewImageComponent.prototype.createImage = function (name, text, url, width) {
        var _this = this;
        var widget = { '_id': '', 'type': 2, 'size': '', 'text': text, 'url': url, 'pageId': this.pageId };
        this.widgetService.createWidget(this.pageId, widget)
            .subscribe(function (pages) {
            _this.router.navigate(['profile', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetNewImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseUrl = 'http://localhost:3100';
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = '123';
        });
        this.http.get('http://localhost:3100/api/uploads')
            .map(function (response) {
            return response.json();
        })
            .subscribe(function (files) {
            _this.router.navigate(['profile', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetNewImageComponent;
}());
WidgetNewImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-new-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-image/widget-new-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-image/widget-new-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _d || Object])
], WidgetNewImageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-new-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-text/widget-new-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-text/widget-new-text.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Text Input</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\">\n        <button\n          (click)=\"createTextInput(name.value, text.value, placeholder.value, rows.value, formatted.checked)\"\n          class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #name\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>rows</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #rows\n             type=\"number\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input form-control\"\n      type=\"text\"\n      #text\n      placeholder=\"US Senate Reaches Compromise\">\n      <!--<quill-editor (change)=\"onContentChanged($event)\"> </quill-editor>-->\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>PlaceHolder</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             #placeholder\n             placeholder=\"placeholder\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Formatted</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"checkbox\"\n             #formatted>\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-text/widget-new-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetNewTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetNewTextComponent = (function () {
    function WidgetNewTextComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetNewTextComponent.prototype.createTextInput = function (name, text, placeholder, rows, formatted) {
        var _this = this;
        console.log(rows);
        console.log(formatted);
        var widget = { '_id': '', 'type': 4, 'placeholder': placeholder, 'text': text, 'src': '', pageId: this.pageId,
            'rows': rows, 'formatted': formatted };
        this.widgetService.createWidget(this.pageId, widget)
            .subscribe(function (pages) {
            _this.router.navigate(['profile', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetNewTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    return WidgetNewTextComponent;
}());
WidgetNewTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-new-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-text/widget-new-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-text/widget-new-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetNewTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-new-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-youtube/widget-new-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-youtube/widget-new-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\">\n        <button\n          (click)=\"createYoutube(name.value, text.value, url.value, width.value)\"\n          class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #name\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #text\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>URL</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             #url\n             placeholder=\"https://github.com\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Width</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #width\n             type=\"text\">\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-youtube/widget-new-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetNewYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetNewYoutubeComponent = (function () {
    function WidgetNewYoutubeComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetNewYoutubeComponent.prototype.createYoutube = function (name, text, url, width) {
        var _this = this;
        url = url.replace('watch?v=', 'embed/');
        var widget = { 'type': 3, 'size': '', 'text': text, 'url': url, pageId: this.pageId };
        this.widgetService.createWidget(this.pageId, widget)
            .subscribe(function (pages) {
            _this.router.navigate(['profile', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetNewYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    return WidgetNewYoutubeComponent;
}());
WidgetNewYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-new-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-youtube/widget-new-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-youtube/widget-new-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetNewYoutubeComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-new-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-textInput\">\n  <div   *ngIf=\"widget.formatted\">\n    <quill-editor   [(ngModel)]=\"widget.text\"   name=\"text\"></quill-editor>\n  </div>\n\n  <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n         placeholder=\"{{widget.placeholder}}\"\n         class=\"form-control\"/>\n\n  <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n            rows=\"{{widget.rows}}\"\n            placeholder=\"{{widget.placeholder}}\"\n            class=\"form-control\">{{widget.text}}</textarea>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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




var WidgetTextComponent = (function () {
    function WidgetTextComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['wgid'];
        });
    };
    return WidgetTextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]) === "function" && _a || Object)
], WidgetTextComponent.prototype, "widget", void 0);
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"widget-youtube\">\n    <p>{{widget.url}}</p>\n    <iframe [src] = 'widget.url | safe'></iframe>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
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




var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['wgid'];
        });
    };
    return WidgetYoutubeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]) === "function" && _a || Object)
], WidgetYoutubeComponent.prototype, "widget", void 0);
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = (function () {
    function Website(id, name, developerId, description) {
        this._id = id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());

//# sourceMappingURL=website.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = (function () {
    function Widget(id, type, size, text, url) {
        this._id = id;
        this.type = type;
        this.size = size;
        this.text = text;
        this.url = url;
    }
    return Widget;
}());

//# sourceMappingURL=widget.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/SafePipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(santinizer) {
        this.santinizer = santinizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.santinizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=SafePipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlickrService = (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '8b20a16ffcd0e29b01491639115b67d7';
        this.secret = '7daccaf4f367e9f4';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url)
            .map(function (response) {
            return response;
        });
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
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
    function PageService(http) {
        this.http = http;
        this.pages = [];
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var url = 'http://localhost:3100/api/website/' + websiteId + '/page';
        return this.http.post(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findAllPagesForWebsite = function (websiteId) {
        var url = 'http://localhost:3100/api/website/' + websiteId + '/page';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = 'http://localhost:3100/api/page/' + pageId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var url = 'http://localhost:3100/api/page/' + pageId;
        return this.http.put(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = 'http://localhost:3100/api/page/' + pageId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
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
    function UserService(http) {
        this.http = http;
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById
        };
        // this.users = [
        //   new User('123', 'alice', 'alice'),
        //   new User('234', 'bob', 'bob'),
        //   new User('345', 'charlie', 'charlie'),
        //   new User('456', 'jannunzi', 'jannunzi')
        // ];
    }
    UserService.prototype.createUser = function (user) {
        var url = 'http://localhost:3100/api/user';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = 'http://localhost:3100/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
        // for (let x = 0; x < this.users.length; x++){
        //   if (this.users[x]._id === userId) {
        //     return this.users[x];
        //   }
        // }
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = 'http://localhost:3100/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (user) {
        // for (let x = 0; x < this.users.length; x++) {
        //   if (this.users[x]._id === userId) {
        //     this.users[x] = user;
        //   }
        // }
        var url = 'http://localhost:3100/api/user/' + user._id;
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = 'http://localhost:3100/api/user/' + userId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.mock.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WEBSITES; });
var WEBSITES = [
    { _id: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },
    { _id: '234', name: 'Google', developerId: '456', description: 'Lorem' },
    { _id: '345', name: 'Wiki', developerId: '135', description: 'Lorem' },
    { _id: '456', name: 'NEU', developerId: '135', description: 'Lorem' },
    { _id: '567', name: 'NBA', developerId: '135', description: 'Lorem' },
    { _id: '678', name: 'ABC', developerId: '135', description: 'Lorem' }
];
//# sourceMappingURL=website.mock.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__website_mock_client__ = __webpack_require__("../../../../../src/app/services/website.mock.client.ts");
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
    function WebsiteService(http) {
        this.http = http;
        this.websites = __WEBPACK_IMPORTED_MODULE_3__website_mock_client__["a" /* WEBSITES */];
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = 'http://localhost:3100/api/user/' + userId + '/website';
        return this.http.post(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsitesForUser = function (userId) {
        var url = 'http://localhost:3100/api/user/' + userId + '/website';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findAllWebsites = function () {
        return this.http.get('http://localhost:3100/api/website')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.findWebsiteById = function (userId, websiteId) {
        var url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (userId, newWebsite, websiteId) {
        var url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
        return this.http.put(url, newWebsite)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (userId, websiteId) {
        var url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
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
    function WidgetService(http) {
        this.http = http;
        this.widgets = [];
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = 'http://localhost:3100/api/page/' + pageId + '/widget';
        return this.http.post(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findAllwidgetsForPage = function (pageId) {
        var url = 'http://localhost:3100/api/page/' + pageId + '/widget';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = 'http://localhost:3100/api/widget/' + widgetId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = 'http://localhost:3100/api/widget/' + widgetId;
        return this.http.put(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.updateWidgetTextInput = function (widgetId, widget) {
        var url = 'http://localhost:3100/api/widget/' + widgetId + '/textinput';
        return this.http.put(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = 'http://localhost:3100/api/widget/' + widgetId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: '/'
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