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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_list_sortable_directive__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_list_order_by_pipe_pipe__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/order-by-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_heading_widget_heading_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-heading/widget-heading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_new_widget_new_header_widget_new_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-header/widget-new-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_new_widget_new_image_widget_new_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-image/widget-new-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_new_widget_new_youtube_widget_new_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-youtube/widget-new-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_edit_widget_edit_header_widget_edit_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-header/widget-edit-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_widget_widget_edit_widget_edit_image_widget_edit_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-image/widget-edit-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_widget_widget_edit_widget_edit_youtube_widget_edit_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-youtube/widget-edit-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_widget_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_SafePipe__ = __webpack_require__("../../../../../src/app/services/SafePipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_widget_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_widget_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_widget_widget_new_widget_new_text_widget_new_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-text/widget-new-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_widget_widget_edit_widget_edit_text_widget_edit_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-text/widget-edit-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_widget_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_widget_widget_new_widget_new_html_widget_new_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-html/widget-new-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_widget_widget_edit_widget_edit_html_widget_edit_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-html/widget-edit-html.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// declarations


















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
            __WEBPACK_IMPORTED_MODULE_35__components_widget_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_widget_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_heading_widget_heading_component__["a" /* WidgetHeadingComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_widget_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_new_widget_new_header_widget_new_header_component__["a" /* WidgetNewHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_new_widget_new_image_widget_new_image_component__["a" /* WidgetNewImageComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_new_widget_new_youtube_widget_new_youtube_component__["a" /* WidgetNewYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_widget_widget_new_widget_new_text_widget_new_text_component__["a" /* WidgetNewTextComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_widget_widget_new_widget_new_html_widget_new_html_component__["a" /* WidgetNewHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_widget_widget_edit_widget_edit_header_widget_edit_header_component__["a" /* WidgetEditHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_widget_widget_edit_widget_edit_image_widget_edit_image_component__["a" /* WidgetEditImageComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_widget_widget_edit_widget_edit_youtube_widget_edit_youtube_component__["a" /* WidgetEditYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_widget_widget_edit_widget_edit_text_widget_edit_text_component__["a" /* WidgetEditTextComponent */],
            __WEBPACK_IMPORTED_MODULE_36__services_SafePipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_37__components_widget_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_list_sortable_directive__["a" /* SortableDirective */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_list_order_by_pipe_pipe__["a" /* OrderByPipe */],
            __WEBPACK_IMPORTED_MODULE_45__components_widget_widget_edit_widget_edit_html_widget_edit_html_component__["a" /* WidgetEditHtmlComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_21__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_20__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_22_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_23__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_24__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_25__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_26__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_27__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_41__services_shared_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_42__services_authentication_service_client__["a" /* AuthenticationService */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_new_widget_new_text_widget_new_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-text/widget-new-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_new_widget_new_html_widget_new_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-html/widget-new-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_edit_header_widget_edit_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-header/widget-edit-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_image_widget_edit_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-image/widget-edit-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_youtube_widget_edit_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-youtube/widget-edit-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_edit_text_widget_edit_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-text/widget-edit-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_edit_html_widget_edit_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-html/widget-edit-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__ = __webpack_require__("../../../../../src/app/services/authentication.service.client.ts");























// import {WidgetYoutubeComponent} from "./components/widget/widget-edit/widget-youtube/widget-youtube.component";
var APP_ROUTES = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    // {path: 'profile/:userId', component: ProfileComponent},
    { path: 'profile/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    // {path: 'profile/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent},
    { path: 'profile/website/:wid/page/:pid/widget/header', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_new_widget_new_header_widget_new_header_component__["a" /* WidgetNewHeaderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget/image', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_new_widget_new_image_widget_new_image_component__["a" /* WidgetNewImageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget/youtube', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_new_widget_new_youtube_widget_new_youtube_component__["a" /* WidgetNewYoutubeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget/text', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_new_widget_new_text_widget_new_text_component__["a" /* WidgetNewTextComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget/html', component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_new_widget_new_html_widget_new_html_component__["a" /* WidgetNewHtmlComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget/:wgid/header', component: __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_edit_header_widget_edit_header_component__["a" /* WidgetEditHeaderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget/:wgid/image', component: __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_edit_image_widget_edit_image_component__["a" /* WidgetEditImageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget/:wgid/youtube',
        component: __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_youtube_widget_edit_youtube_component__["a" /* WidgetEditYoutubeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget/:wgid/text', component: __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_edit_text_widget_edit_text_component__["a" /* WidgetEditTextComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
    { path: 'profile/website/:wid/page/:pid/widget/:wgid/html', component: __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_edit_html_widget_edit_html_component__["a" /* WidgetEditHtmlComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_authentication_service_client__["a" /* AuthenticationService */]] },
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

module.exports = "\n<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page\"\n         class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Edit Page</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 \">\n      <a class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"\n                (click)=\"updatePage(pagename.value, pagetitle.value)\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"page-content\">\n  <ul>\n    <li class=\"page-content-title page-li\">\n      <p class=\"pull-left menu-p\">Name</p>\n    </li>\n    <li>\n      <input placeholder=\"Page Name\"\n             #pagename\n             class=\"page-content-input form-control\">\n    </li>\n    <li class=\"page-content-title page-li\">\n      <p class=\"pull-left menu-p\">Title</p>\n    </li>\n    <li>\n      <input placeholder=\"Page Title\"\n             #pagetitle\n             class=\"page-content-input form-control\">\n    </li>\n    <li>\n      <a (click)=\"deletePage()\"\n        class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function PageEditComponent(_pageService, activatedRoute, sharedService, router) {
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
        this.pages = [{}];
    }
    PageEditComponent.prototype.updatePage = function (pagename, pagetitle) {
        var _this = this;
        if (pagename.length === 0) {
            alert('miss page name');
            return;
        }
        var page = { '_id': this.pageId, 'name': pagename, 'websiteId': this.websiteId, 'description': '' };
        this._pageService.updatePage(this.pageId, page)
            .subscribe(function (newpage) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this._pageService.deletePage(this.pageId)
            .subscribe(function (newpage) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PageEditComponent);

var _a, _b, _c, _d;
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

module.exports = "\n<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/website\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Pages</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"new\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-plus pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"page-content\">\n  <!--<ul class=\"page-ul\">-->\n    <!--<li class=\"menu\">-->\n      <!--<a >-->\n        <!--<p class=\"pull-left menu-p\">Blog Post</p>-->\n      <!--</a>-->\n      <!--<a href=\"page-edit.html\">-->\n        <!--<span class=\"menu-btn pull-right glyphicon glyphicon-cog\"></span>-->\n      <!--</a>-->\n    <!--</li>-->\n    <!--<li class=\"menu\">-->\n      <!--<a href=\"../widget/widget-list.html\">-->\n        <!--<p class=\"pull-left menu-p\">Blogs</p>-->\n      <!--</a>-->\n      <!--<a href=\"page-edit.html\">-->\n        <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n      <!--</a>-->\n    <!--</li>-->\n    <!--<li class=\"menu\">-->\n      <!--<a href=\"../widget/widget-list.html\">-->\n        <!--<p class=\"pull-left menu-p\">Home</p>-->\n      <!--</a>-->\n      <!--<a href=\"page-edit.html\">-->\n        <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n      <!--</a>-->\n    <!--</li>-->\n    <!--<li class=\"menu\">-->\n      <!--<a href=\"../widget/widget-list.html\">-->\n        <!--<p class=\"pull-left menu-p\">About</p>-->\n      <!--</a>-->\n      <!--<a href=\"page-edit.html\">-->\n        <!--<button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>-->\n      <!--</a>-->\n    <!--</li>-->\n  <!--</ul>-->\n\n  <ul class=\"page-ul\" *ngFor=\"let page of pages\">\n    <li class=\"menu\">\n      <a routerLink=\"{{page['_id']}}/widget\">\n        <p class=\"pull-left menu-p\">{{page['name']}}</p>\n      </a>\n      <a routerLink=\"{{page['_id']}}\">\n        <button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function PageListComponent(_pageService, activatedRoute, sharedService, router) {
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
        this.pages = [{}];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PageListComponent);

var _a, _b, _c, _d;
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

module.exports = "\n<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>New Page</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a>\n        <button\n          (click)=\"createPage(pagename.value, pagetitle.value)\"\n          class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"page-content\">\n  <ul>\n    <li class=\"page-content-title page-li\">\n      <p class=\"pull-left menu-p\">Name</p>\n    </li>\n    <input placeholder=\"Page Name\"\n           #pagename\n           type=\"text\"\n           class=\"page-content-input form-control\">\n    <li class=\"page-content-title page-li\">\n      <p class=\"pull-left menu-p\">Title</p>\n    </li>\n    <input placeholder=\"Page Title\"\n           #pagetitle\n           type=\"text\"\n           class=\"page-content-input form-control\">\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function PageNewComponent(sharedService, _pageService, activatedRoute, router) {
        this.sharedService = sharedService;
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pages = [{}];
    }
    PageNewComponent.prototype.createPage = function (pagename, pagetitle) {
        var _this = this;
        if (pagename.length === 0) {
            alert('miss page name');
            return;
        }
        var page = { 'name': pagename, 'websiteId': this.websiteId, 'description': 'new', 'title': pagetitle };
        this._pageService.createPage(this.websiteId, page)
            .subscribe(function (pages) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page']);
        });
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
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

module.exports = "<div class=\"container main\" id=\"main\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n\n  <form #f=\"ngForm\">\n\n    <input\n      placeholder=\"username\"\n      name=\"username\"\n      type=\"text\"\n      class=\"form-control\"\n\n      required\n      #username/>\n    <!--[(ngModel)]=\"username\"-->\n\n    <!--<span class=\"help-block\" ng-if=\"!username.valid && username.touched\">-->\n      <!--Please enter username!-->\n    <!--</span> -->\n\n    <span><br></span>\n    <input\n\n      name= \"password\"\n      placeholder=\"password\"\n      #password\n      type=\"password\"\n      class=\"form-control\"/>\n    <!--[(ngModel)]=\"password\"-->\n    <span><br></span>\n    <button class=\"btn btn-primary btn-block\"\n            (click)=\"login(username.value, password.value)\"\n            [disabled]=\"!f.valid\">Login</button>\n    <!--(click)=\"login(username.value, password.value)\"-->\n    <button\n      routerLink=\"/register\"\n      class=\"btn btn-success btn-block\">\n        Register\n    </button>\n    <button class=\"btn btn-primary btn-block\"\n            (click)=\"login_facebook()\"\n            type=\"button\">\n      <span class=\"fa fa-facebook\"></span>\n      Facebook\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        if (username.length === 0 || password.length === 0) {
            alert('missed username or password');
            return;
        }
        this.userService
            .login(username, password)
            .subscribe(function (user) {
            // server will record the user
            _this.sharedService.user = user;
            _this.router.navigate(['/profile']);
        });
    };
    LoginComponent.prototype.login_facebook = function () {
        var _this = this;
        this.userService
            .login_facebook()
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.router.navigate(['/profile']);
        });
    };
    // function: login
    // login(username: String, password: String) {
    //   // if (username.length === 0 || password.length === 0) {
    //   //   alert('missed username or password');
    //   // } else {
    //     // const user: User = this.userService.findUserByCredentials(username, password);
    //   console.log(username);
    //     this.userService.findUserByCredentials(username, password)
    //       .subscribe((user: User) => {
    //         console.log('user:');
    //         console.log(user);
    //         if (user) {
    //           this.router.navigate(['/profile', user._id]);
    //         }else {
    //           this.errorFlag = true;
    //           this.errorMsg = 'Error';
    //           alert('wrong username or password');
    //         }
    //         // if (user) {
    //         //   this.user = user;
    //         // }
    //         // if (this.user) {
    //         //   this.router.navigate(['profile', this.user._id]);
    //         //   return;
    //         // }
    //
    //       });
    //   // }
    // }
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
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

module.exports = "\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a class=\"navbar-link\"\n         (click)=\"updateUser(email.value, firstname.value, lastname.value)\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        id=\"username\"\n        #username\n        placeholder=\"alice\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" #email id=\"email\" placeholder=\"username@hotmail.com\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input type=\"text\" class=\"form-control\" #firstname id=\"first-name\" placeholder=\"firstname\">\n    </div>\n  </form>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" #lastname id=\"last-name\" placeholder=\"lastname\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block\"\n     routerLink=\"website\">Websites</a>\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"logout()\">Logout</a>\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"deleteUser()\">Delete User</a>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a>\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function ProfileComponent(userService, activatedRoute, sharedService, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
        this.user = {};
    }
    // updateUser(email: String, firstName: String, lastName: String) {
    //   const newUser = this.user;
    //
    //   newUser.firstname = firstName;
    //   newUser.lastname = lastName;
    //   newUser.email = email;
    //
    //   this.userService.updateUser(newUser)
    //     .subscribe((status) => {
    //       console.log(status);
    //     });
    // }
    ProfileComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser(this.user['_id'])
            .subscribe(function (user) {
            _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.updateUser = function (email, firstName, lastName) {
        var updatedUser = {
            _id: this.user['_id'],
            username: this.username,
            firstname: firstName,
            lastname: lastName,
            email: email
        };
        this.userService.updateUser(updatedUser)
            .subscribe(function (status) {
            console.log(status);
            console.log(updatedUser);
        });
        // this.userService.updateUser(updatedUser)
        //   .subscribe(
        //     (user: any) => {
        //       this.userService.findUserById(updatedUser._id)
        //         .subscribe(
        //           (user: any) => {
        //             localStorage.setItem('user', JSON.stringify(user));
        //             this.ngOnInit();
        //           }
        //         )
        //     },
        //   );
    };
    ProfileComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        console.log(this.user);
        this.username = this.user['username'];
        this.firstname = this.user['firstname'];
        this.lastname = this.user['lastname'];
        this.email = this.user['email'];
        this.userId = this.user['_id'];
        console.log(this.userId);
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            console.log(_this.userId);
        });
        this.getUser();
        // this.userService.findUserById(this.userId)
        //   .subscribe((user: User) => {
        //     console.log(user);
        //     this.user = user;
        //     this.username = user.username;
        //     console.log(this.username);
        //   });
        // this.paramSubscriptions = this.activatedRoute.params
        //   .subscribe(params => {
        //     this.user = this.sharedService.user || {};
        //   });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
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

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n  <input placeholder=\"username\"\n         type=\"text\"\n         name=\"username\"\n         #username\n         class=\"form-control\"/>\n  <!--[(ngModel)]=\"username\"-->\n  <br>\n  <input placeholder=\"password\"\n         type=\"password\"\n         name=\"password\"\n         #password\n         class=\"form-control\"/>\n  <!--[(ngModel)]=\"password\"-->\n\n  <input placeholder=\"verify password\"\n         type=\"password\"\n         name=\"verifypassword\"\n         #verifypassword\n         class=\"form-control\"/>\n  <br>\n  <a\n    (click)=\"register(username.value, password.value, verifypassword.value)\"\n    class=\"btn btn-primary btn-block\"\n    >Register</a>\n  <!--(click)=\"registered(username.value, password.value, verifypassword.value)\"-->\n\n  <a\n    routerLink=\"/login\"\n    class=\"btn btn-danger btn-block\"\n    routerLink=\"/login\" >Cancel</a>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    RegisterComponent.prototype.register = function (username, password, verifypassword) {
        var _this = this;
        if (username.length === 0 || password.length === 0 || verifypassword.length === 0) {
            alert('missed information!');
        }
        else if (!(password === verifypassword)) {
            alert('password not equal!');
        }
        this.userService
            .register(username, password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.router.navigate(['/profile']);
        });
    };
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
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

module.exports = "\n<div class=\"container-fluid\">\n  <!--Nav Bar-->\n  <div class=\"nav-bar\">\n    <div class=\"container-fluid nav-container\">\n      <div class=\"row nav-row\">\n        <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs nav-left\">\n          <div class=\"row\">\n            <div class=\"nav-left-left pull-left col-xs-2 \" href=\"website-ulist.html\">\n              <a routerLink=\"/profile/website\">\n                <button class=\"glyphicon glyphicon-chevron-left nav-back pull-left website-nav-btn\" >\n                </button>\n              </a>\n            </div>\n            <div class=\"nav-left-center col-xs-8\">\n              <p class=\"nav-p\">Websites</p>\n            </div>\n            <div class=\"nav-left-right col-xs-2\">\n              <a routerLink=\"/profile/website/new\">\n                <button class=\"glyphicon glyphicon-plus nav-plus\" >\n                </button>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-8 col-md-8 col-lg-8 hidden-xs nav-right\">\n          <div class=\"row\">\n            <div class=\"col-xs-11 nav-right-left\">\n              <p class=\"nav-p \">Edit Website</p>\n            </div>\n            <div class=\"col-xs-1  nav-right-right nav-ok\">\n              <a>\n                <button\n                  (click)=\"updateWebsite(websitename.value, websitedescription.toString())\"\n                  class=\"glyphicon glyphicon-ok btn-white\">\n                </button>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 visible-xs nav-full\">\n          <div class=\"row\">\n            <div class=\"nav-left-left pull-left col-xs-2 \" href=\"website-ulist.html\">\n              <a routerLink=\"/profile/website\">\n                <button class=\"glyphicon glyphicon-chevron-left nav-back\" >\n                </button>\n              </a>\n            </div>\n            <div class=\"nav-left-center col-xs-8\">\n              <p class=\"nav-p\">Websites</p>\n            </div>\n            <div class=\"nav-left-right col-xs-2 nav-ok\">\n              <button\n                (click)=\"updateWebsite(websitename.value, websitedescription.toString())\"\n                class=\"glyphicon glyphicon-ok nav-ok-btn\" >\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--Contnet-->\n  <div class=\"content container-fluid\">\n    <div class=\"row\">\n      <div class=\"content-left hidden-xs col-sm-4 col-md-4 col-lg-4\">\n        <div class=\"website-content\" *ngFor=\"let website of websites\">\n          <ul>\n            <li class=\"menu\">\n              <a routerLink=\"/profile/{{userId}}/website/{{website['_id']}}/page\">\n                <button >\n                  {{website['name']}}\n                </button>\n              </a>\n              <a routerLink=\"/profile/{{userId}}/website/{{website['_id']}}\" >\n                <button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"content-right col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"content-title\">Website Name</p>\n        <input placeholder=\"Blogger\"\n               type=\"text\"\n               #websitename\n               class=\"form-control\">\n        <p class=\"content-title\">Website Description</p>\n        <textarea type=\"text\"\n                  #websitedescription\n                  class=\"form-control input-description\" rows=\"5\" placeholder=\"Description\"></textarea>\n        <a class=\"btn btn-block btn-delete\" (click)=\"deleteWebsite()\">Delete</a>\n      </div>\n    </div>\n  </div>\n\n  <!--Bottom Bar-->\n  <div class=\"bottom\">\n    <button class=\"nav-btn glyphicon glyphicon-user pull-right\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\"></a>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WebsiteEditComponent(_websiteService, activatedRoute, sharedService, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
        this.websites = [];
    }
    WebsiteEditComponent.prototype.updateWebsite = function (name, description) {
        var _this = this;
        if (name.length === 0) {
            alert('miss website name');
            return;
        }
        var newWebsite = new __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__["a" /* Website */](this.website._id, name, this.website.developerId, description);
        this._websiteService.updateWebsite(this.userId, newWebsite, this.websiteId)
            .subscribe(function (websites) {
            _this.router.navigate(['profile', 'website']);
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this._websiteService.deleteWebsite(this.userId, this.websiteId)
            .subscribe(function (website) {
            _this.router.navigate(['profile', 'website']);
        });
    };
    WebsiteEditComponent.prototype.getUser = function () {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
        console.log(this.userId);
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.activatedRoute.params
            .subscribe(function (params) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d;
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

module.exports = "\n<!--Navigation Bar-->\n<div class=\"nav-bar\">\n  <div class=\"container-fluid nav-container\">\n    <div class=\"row nav-row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 nav-full\">\n        <div class=\"row\">\n          <div class=\"nav-left-left pull-left\">\n            <a routerLink=\"/profile\">\n              <button class=\"glyphicon glyphicon-chevron-left nav-back pull-left website-nav-btn\">\n              </button>\n            </a>\n          </div>\n          <div class=\"nav-left-center col-xs-10\">\n            <p class=\"nav-p\">Websites</p>\n          </div>\n          <div class=\"nav-left-right nav-ok pull-right\" >\n            <a routerLink=\"new\">\n              <button class=\"glyphicon glyphicon-plus nav-plus pull-right website-nav-btn\" >\n              </button>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Content-->\n<div class=\"content website-content\">\n  <div >\n    <ul *ngFor=\"let website of websites\">\n      <li class=\"menu\">\n        <button (click)=\"findPage(website)\">\n          {{website['name']}}\n        </button>\n        <a (click)=\"findEditWebsite(website)\" >\n          <button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"bottom\">\n  <a routerLink=\"/profile\">\n    <button class=\"nav-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WebsiteListComponent(_websiteService, activatedRoute, sharedService, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
        this.websites = [];
    }
    WebsiteListComponent.prototype.findPage = function (website) {
        if (website) {
            this.router.navigate(['profile', 'website', website['_id'], 'page']);
        }
    };
    WebsiteListComponent.prototype.findEditWebsite = function (website) {
        if (website) {
            this.router.navigate(['profile', 'website', website['_id']]);
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
        // this.activatedRoute.params
        //   .subscribe(
        //     (params: any) => {
        //       this.userId = params['userId'];
        //       console.log(params);
        //     }
        //   );
        this.userId = this.sharedService.user['_id'];
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WebsiteListComponent);

var _a, _b, _c, _d;
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

module.exports = "\n<div class=\"container-fluid\">\n  <!--Nav Bar-->\n  <div class=\"nav-bar\">\n    <div class=\"container-fluid nav-container\">\n      <div class=\"row nav-row\">\n        <div class=\"col-sm-4 col-md-4 col-lg-4 hidden-xs nav-left\">\n          <div class=\"row\">\n            <div class=\"nav-left-left pull-left col-xs-2 \" href=\"website-ulist.html\">\n              <a routerLink=\"/profile/website\">\n                <button class=\"glyphicon glyphicon-chevron-left nav-back pull-left website-nav-btn\" >\n                </button>\n              </a>\n            </div>\n            <div class=\"nav-left-center col-xs-8\">\n              <p class=\"nav-p\">Websites</p>\n            </div>\n            <div class=\"nav-left-right col-xs-2\">\n              <a routerLink=\"/profile/website/new\">\n                <button class=\"glyphicon glyphicon-plus nav-plus\" >\n                </button>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-8 col-md-8 col-lg-8 hidden-xs nav-right\">\n          <div class=\"row\">\n            <div class=\"col-xs-11 nav-right-left\">\n              <p class=\"nav-p \">Edit Website</p>\n            </div>\n            <div class=\"col-xs-1  nav-right-right nav-ok\">\n              <a>\n                <button class=\"glyphicon glyphicon-ok btn-white\"\n                        (click)=\"createWebsite(websitename.value, websitedescription.toString())\">\n                </button>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 visible-xs nav-full\">\n          <div class=\"row\">\n            <div class=\"nav-left-left pull-left col-xs-2 \" href=\"website-ulist.html\">\n              <a routerLink=\"/profile/website\">\n                <button class=\"glyphicon glyphicon-chevron-left nav-back\" >\n                </button>\n              </a>\n            </div>\n            <div class=\"nav-left-center col-xs-8\">\n              <p class=\"nav-p\">Websites</p>\n            </div>\n            <div class=\"nav-left-right col-xs-2 nav-ok\">\n              <!--(click)=\"saveNewWebsite(websitename.value, websitedescription)\"-->\n              <button\n                (click)=\"createWebsite(websitename.value, websitedescription.toString())\"\n                 class=\"glyphicon glyphicon-ok nav-ok-btn\">\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--Contnet-->\n  <div class=\"content container-fluid\">\n    <div class=\"row\">\n      <div class=\"content-left hidden-xs col-sm-4 col-md-4 col-lg-4\">\n        <div class=\"website-content\">\n          <ul>\n            <li class=\"menu\" *ngFor=\"let website of websites\">\n              <button (click)=\"findPage(website)\">\n                {{website['name']}}\n              </button>\n              <a (click)=\"findEditWebsite(website)\" >\n                <button class=\"menu-btn pull-right glyphicon glyphicon-cog\"></button>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"content-right col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n        <p class=\"content-title\">Website Name</p>\n        <input placeholder=\"Blogger\"\n               type=\"text\"\n               #websitename\n               class=\"form-control\">\n        <p class=\"content-title\">Website Description</p>\n        <textarea type=\"text\"\n                  class=\"form-control input-description\"\n                  [(ngModel)] = 'websiteDescription'\n                  #websitedescription\n                  placeholder=\"Description\" rows=\"5\"></textarea>\n      </div>\n    </div>\n  </div>\n\n  <!--Bottom Bar-->\n  <div class=\"bottom\">\n    <a routerLink=\"/profile/{{userId}}\">\n      <button class=\"nav-btn glyphicon glyphicon-user pull-right\"></button>\n    </a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WebsiteNewComponent(_websiteService, activatedRoute, sharedService, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
        this.websites = [{}];
    }
    WebsiteNewComponent.prototype.createWebsite = function (websitename, websitedescription) {
        var _this = this;
        if (websitename.length === 0) {
            alert('miss website name');
            return;
        }
        var website = new __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__["a" /* Website */]('', websitename, this.userId, this.websiteDescription);
        this._websiteService.createWebsite(this.userId, website)
            .subscribe(function (websites) {
            // this.websites = websites;
            _this.router.navigate(['profile', 'website']);
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
        // this.activatedRoute.params
        //   .subscribe(
        //     (params: any) => {
        //       this.userId = params['userId'];
        //     }
        //   );
        this.userId = this.sharedService.user['_id'];
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d;
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

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 nav-row\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-10 col-sm-10 col-md-10 col-lg-10 nav-row\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Choose Widget</b>\n      </p>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget/header\">\n        <p>Header</p>\n      </a>\n    </li>\n    <!--<li class=\"widget-li\">-->\n      <!--<a href=\"widget-header.html\">-->\n        <!--<p>Label</p>-->\n      <!--</a>-->\n    <!--</li>-->\n    <li class=\"widget-li\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget/html\">\n        <p>HTML</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget/text\">\n        <p>Text Input</p>\n      </a>\n    </li>\n    <!--<li class=\"widget-li\">-->\n      <!--<a href=\"widget-header.html\">-->\n        <!--<p>Link</p>-->\n      <!--</a>-->\n    <!--</li>-->\n    <!--<li class=\"widget-li\">-->\n      <!--<a href=\"widget-header.html\">-->\n        <!--<p>Button</p>-->\n      <!--</a>-->\n    <!--</li>-->\n    <li class=\"widget-li\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget/image\">\n        <p>Image</p>\n      </a>\n    </li>\n    <li class=\"widget-li\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget/youtube\">\n        <p>Youtube</p>\n      </a>\n    </li>\n    <!--<li class=\"widget-li\">-->\n      <!--<a href=\"widget-header.html\">-->\n        <!--<p>Data Table</p>-->\n      <!--</a>-->\n    <!--</li>-->\n    <!--<li class=\"widget-li\">-->\n      <!--<a href=\"widget-header.html\">-->\n        <!--<p>Repeater</p>-->\n      <!--</a>-->\n    <!--</li>-->\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

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

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\" (click)=\"saveWidget(name.value, text.value, size.value)\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input\n        #name\n        class=\"widget-input form-control\"\n        type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <!--<input class=\"widget-input form-control\"-->\n             <!--#text-->\n             <!--type=\"text\"-->\n             <!--placeholder=\"US Senate Reaches Compromise\">-->\n\n      <quill-editor\n        (change)=\"onContentChanged($event)\"\n        [(ngModel)]=\"widget.text\" #text> </quill-editor> <!--[(ngModel)]=\"widget.text\"   name=\"text\"-->\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Size</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #size\n             type=\"text\"\n             placeholder=\"3\">\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\" (click)=\"deleteWidget()\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-header/widget-edit-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetEditHeaderComponent(widgetService, activatedRoute, sharedService, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
    }
    WidgetEditHeaderComponent.prototype.saveWidget = function (name, text, size) {
        var _this = this;
        if (name.length === 0) {
            alert('miss widget name');
            return;
        }
        if (size.length === 0) {
            size = 3;
        }
        var newWidget = { 'widgetId': this.widgetId, 'name': name, 'text': this.text, 'size': size };
        this.widgetService.updateWidgetHeader(this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetEditHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widget) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetEditHeaderComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        this.text = text;
    };
    WidgetEditHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetEditHeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-edit-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-html/widget-edit-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-html/widget-edit-html.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\" (click)=\"saveWidget(name.value, text.value)\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input\n        #name\n        class=\"widget-input form-control\"\n        type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <!--<input class=\"widget-input form-control\"-->\n      <!--#text-->\n      <!--type=\"text\"-->\n      <!--placeholder=\"US Senate Reaches Compromise\">-->\n\n      <quill-editor\n        (change)=\"onContentChanged($event)\"\n        [(ngModel)]=\"widget.text\" #text> </quill-editor> <!--[(ngModel)]=\"widget.text\"   name=\"text\"-->\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Size</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #size\n             type=\"text\"\n             placeholder=\"3\">\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\" (click)=\"deleteWidget()\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-html/widget-edit-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetEditHtmlComponent = (function () {
    function WidgetEditHtmlComponent(widgetService, activatedRoute, sharedService, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
    }
    WidgetEditHtmlComponent.prototype.saveWidget = function (name, text) {
        var _this = this;
        if (name.length === 0) {
            alert('miss widget name');
            return;
        }
        var newWidget = { 'widgetId': this.widgetId, 'name': name, 'text': this.text, 'size': '' };
        this.widgetService.updateWidgetHeader(this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetEditHtmlComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        this.text = text;
    };
    WidgetEditHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widget) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetEditHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this.widget = this.widgetService.findWidgetById(this.widgetId);
    };
    return WidgetEditHtmlComponent;
}());
WidgetEditHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-html/widget-edit-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit-html/widget-edit-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetEditHtmlComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-edit-html.component.js.map

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

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 nav-right\">\n      <a  class=\"navbar-link\" (click)=\"saveWidget(name.value, text.value, url.value)\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input\"\n             #name\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input\"\n             #text\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>URL</span>\n      </div>\n      <input class=\"widget-input\"\n             #url\n             placeholder=\"https://github.com/joelgrus/data-science-from-scratch/blob/master/code/plot_state_borders.py\"\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Width</span>\n      </div>\n      <input class=\"widget-input\"\n             type=\"text\"\n             placeholder=\"100%\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Upload</span>\n      </div>\n      <input class=\"widget-input\"\n             type=\"text\"\n             placeholder=\"No file chosen\">\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-primary\">Upload image</a>\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n  <app-flickr-image-search></app-flickr-image-search>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-image/widget-edit-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetEditImageComponent(widgetService, activatedRoute, sharedService, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
    }
    WidgetEditImageComponent.prototype.saveWidget = function (name, text, url) {
        var _this = this;
        if (name.length === 0) {
            alert('miss widget name');
            return;
        }
        var newWidget = { 'widgetId': this.widgetId, 'name': name, 'text': text, 'url': url };
        this.widgetService.updateWidgetImage(this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetEditImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetEditImageComponent);

var _a, _b, _c, _d;
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

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\" (click)=\"saveWidget(name.value, rows.value, text.value, placeholder.value, formatted.checked)\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input\n        #name\n        class=\"widget-input form-control\"\n        type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>rows</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #rows\n             type=\"number\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input form-control\"\n      #text\n      type=\"text\"\n      placeholder=\"Text\">\n\n      <!--<quill-editor-->\n        <!--(change)=\"onContentChanged($event)\"-->\n        <!--[(ngModel)]=\"widget.text\" #text> </quill-editor> &lt;!&ndash;[(ngModel)]=\"widget.text\"   name=\"text\"&ndash;&gt;-->\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>PlaceHolder</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             #placeholder\n             placeholder=\"placeholder\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Formatted</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"checkbox\"\n             #formatted>\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\" (click)=\"deleteWidget()\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-text/widget-edit-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetEditTextComponent(widgetService, activatedRoute, sharedService, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
    }
    WidgetEditTextComponent.prototype.saveWidget = function (name, rows, text, placeholder, formatted) {
        var _this = this;
        if (name.length === 0) {
            alert('miss widget name');
            return;
        }
        var newWidget = { 'name': name, 'widgetId': this.widgetId, 'type': this.widget.type, 'rows': rows, 'text': text,
            'placeholder': placeholder, 'formatted': formatted };
        this.widgetService.updateWidgetTextInput(this.widgetId, newWidget)
            .subscribe(function (widget) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetEditTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widget) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetEditTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetEditTextComponent);

var _a, _b, _c, _d;
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

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widget Edit</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a href=\"widget-list.html\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>URL</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             placeholder=\"https://github.com\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Width</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\">\n    </li>\n    <li>\n      <a class=\"btn btn-block btn-delete\">Delete</a>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a href=\"../user/profile.html\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit-youtube/widget-edit-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetEditYoutubeComponent(widgetService, activatedRoute, sharedService, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
    }
    WidgetEditYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetEditYoutubeComponent);

var _a, _b, _c, _d;
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

module.exports = "<div class=\"widget-header\">\n  <div [ngSwitch]=\"widget.size\">\n    <h1 *ngSwitchCase=\"1\">{{widget.text}}</h1>\n    <h2 *ngSwitchCase=\"2\">{{widget.text}}</h2>\n    <h3 *ngSwitchCase=\"3\">{{widget.text}}</h3>\n    <h4 *ngSwitchCase=\"4\">{{widget.text}}</h4>\n    <h5 *ngSwitchCase=\"5\">{{widget.text}}</h5>\n    <h6 *ngSwitchCase=\"6\">{{widget.text}}</h6>\n  </div>\n  <!--{{widget.text}}-->\n</div>\n"

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

/***/ "../../../../../src/app/components/widget/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-header\">\n  {{widget.text}}\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
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




var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['wgid'];
        });
    };
    return WidgetHtmlComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]) === "function" && _a || Object)
], WidgetHtmlComponent.prototype, "widget", void 0);
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetHtmlComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-html.component.js.map

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

module.exports = "<div class=\"input-group\">\n  <input title=\"searchFlickr\"\n         [(ngModel)]=\"searchText\"\n         type=\"text\"\n         placeholder=\"Search on Flickr\"\n         class=\"form-control\">\n  <span class=\"input-group-btn\">\n         <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n </span>\n</div>\n\n<div *ngIf=\"valid; else templateSelectPhoto\">\n  <div class=\"row\">\n    <div *ngFor = \"let pic of photos['photo']\"\n         class=\"col-xs-4\">\n      <img    (click)=\"createPhoto(pic)\"\n              width=\"100%\"\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n      <p></p>\n    </div>\n  </div>\n</div>\n\n<ng-template #templateSelectPhoto>\n  <div class=\"row\">\n    <div *ngFor = \"let pic of photos['photo']\"\n         class=\"col-xs-4\">\n      <img    (click)=\"selectPhoto(pic)\"\n              width=\"100%\"\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n      <p></p>\n    </div>\n  </div>\n</ng-template>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
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
    function FlickrImageSearchComponent(flickrService, widgetService, router, activatedRoute) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
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
    FlickrImageSearchComponent.prototype.createPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = {
            '_id': '',
            'type': 2,
            'size': '',
            'text': '',
            'url': url,
            'pageId': this.pageId,
        };
        console.log('start');
        this.widgetService
            .createWidget(this.pageId, widget)
            .subscribe(function (data) {
            var result = data;
            if (result) {
                _this.router.navigate(['/profile/' + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget/']);
                // window.location.reload();
            }
            else {
                console.log('error');
            }
            console.log('end');
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = {
            '_id': '',
            'type': 2,
            'size': '',
            'text': '',
            'url': url,
            'pageId': this.pageId,
        };
        this.widgetService
            .updateWidgetImage(this.widgetId, widget)
            .subscribe(function (data) {
            var result = data;
            if (result) {
                _this.router.navigate(['/profile/' + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget/']);
            }
            else {
                console.log('error');
            }
            console.log('photos');
        });
    };
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            console.log(_this.widgetId);
            if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isUndefined"])(_this.widgetId)) {
                _this.valid = true;
            }
            else {
                _this.valid = false;
            }
        });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], FlickrImageSearchComponent);

var _a, _b, _c, _d;
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

module.exports = "<div class=\"widget-image\">\n  <img [src]=\"widget.url | safe\">\n</div>\n\n"

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

/***/ "../../../../../src/app/components/widget/widget-list/order-by-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a.position < b.position) {
                return -1;
            }
            else if (a.position > b.position) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'orderBy'
    })
], OrderByPipe);

//# sourceMappingURL=order-by-pipe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
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

var SortableDirective = (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); // this will emit an event for the parent component or the directive calling component
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    return SortableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SortableDirective.prototype, "newIndexes", void 0);
SortableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSortable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], SortableDirective);

var _a;
//# sourceMappingURL=sortable.directive.js.map

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

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>Widgets</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"new\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-plus pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n  <!--| orderBy-->\n  <ul class=\"widget-ul\" *ngFor=\"let widget of widgets\">\n    <div [ngSwitch] = \"widget.type\" >\n\n    <li class=\"widget-li\" >\n      <div class=\"widget-toolbar\">\n        <a *ngSwitchCase=\"1\" routerLink=\"{{widget._id}}/header\" >\n          <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n        </a>\n        <a *ngSwitchCase=\"2\" routerLink=\"{{widget._id}}/image\" >\n          <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n        </a>\n        <a *ngSwitchCase=\"3\" routerLink=\"{{widget._id}}/youtube\" >\n          <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n        </a>\n        <a *ngSwitchCase=\"4\" routerLink=\"{{widget._id}}/text\" >\n          <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n        </a>\n        <a *ngSwitchCase=\"5\" routerLink=\"{{widget._id}}/html\" >\n          <button class=\"widget-toolbar-btn glyphicon glyphicon-cog\"></button>\n        </a>\n        <button class=\"widget-toolbar-btn glyphicon glyphicon-align-justify\"></button>\n      </div>\n      <app-widget-heading *ngSwitchCase='1' [widget]=\"widget\"></app-widget-heading>\n      <!--<app-flickr-image-search *ngSwitchCase=\"2\" ></app-flickr-image-search>-->\n      <app-widget-image *ngSwitchCase='2' [widget]=\"widget\"></app-widget-image>\n      <app-widget-youtube *ngSwitchCase=\"3\" [widget]=\"widget\"></app-widget-youtube>\n      <app-widget-text *ngSwitchCase=\"4\" [widget]=\"widget\"></app-widget-text>\n      <app-widget-html *ngSwitchCase=\"5\" [widget]=\"widget\"></app-widget-html>\n    </li>\n    </div>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <button class=\"widget-bottom-left-btn glyphicon glyphicon-play pull-left\">\n    <a routerLink=\"/profile\" class=\"navbar-link\"></a>\n  </button>\n  <button class=\"widget-bottom-left-btn glyphicon glyphicon-eye-open pull-left\">\n    <a routerLink=\"/profile\" class=\"navbar-link\"></a>\n  </button>\n\n  <a routerLink=\"/profile\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetListComponent(widgetService, activatedRoute, sharedService, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
    }
    // receiving the emitted event
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        // call widget service function to update widget as per index
        console.log(indexes.startIndex);
        console.log(indexes.endIndex);
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe(function (data) { return console.log(data); });
        console.log(this.widgets);
    };
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.widgetService.findAllwidgetsForPage(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            console.log(_this.widgets);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetListComponent);

var _a, _b, _c, _d;
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

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget/new\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>New Header</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\">\n        <button\n          (click)=\"createHeader(name.value, text.value, size.value)\"\n          class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #name\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <!--<input class=\"widget-input form-control\"-->\n             <!--type=\"text\"-->\n             <!--#text-->\n             <!--placeholder=\"US Senate Reaches Compromise\">-->\n      <quill-editor (change)=\"onContentChanged($event)\" #text> </quill-editor>\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Size</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             #size\n             placeholder=\"3\">\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-header/widget-new-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetNewHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetNewHeaderComponent(widgetService, activatedRoute, sharedService, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
    }
    WidgetNewHeaderComponent.prototype.createHeader = function (name, text, size) {
        var _this = this;
        if (name.length === 0) {
            alert('miss header name');
            return;
        }
        if (size.length === 0) {
            size = 3;
        }
        var widget = { '_id': '', 'type': 1, 'size': size, 'text': this.text, 'src': '', pageId: this.pageId };
        this.widgetService.createWidget(this.pageId, widget)
            .subscribe(function (pages) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetNewHeaderComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        this.text = text;
    };
    WidgetNewHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetNewHeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-new-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-html/widget-new-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-html/widget-new-html.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget/new\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>New Header</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\">\n        <button\n          (click)=\"createHtml(name.value, text.value)\"\n          class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #name\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <quill-editor (change)=\"onContentChanged($event)\" #text> </quill-editor>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-html/widget-new-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetNewHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetNewHtmlComponent = (function () {
    function WidgetNewHtmlComponent(widgetService, activatedRoute, sharedService, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
    }
    WidgetNewHtmlComponent.prototype.createHtml = function (name, text) {
        var _this = this;
        if (name.length === 0) {
            alert('miss header name');
            return;
        }
        var widget = { '_id': '', 'type': 5, 'size': '', 'text': this.text, 'src': '', pageId: this.pageId };
        this.widgetService.createWidget(this.pageId, widget)
            .subscribe(function (pages) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetNewHtmlComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        this.text = text;
    };
    WidgetNewHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    return WidgetNewHtmlComponent;
}());
WidgetNewHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-new-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-html/widget-new-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-new/widget-new-html/widget-new-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetNewHtmlComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-new-html.component.js.map

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

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget/new\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>New Image</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\">\n        <button\n          (click)=\"createImage(name.value, text.value, url.value, width.value)\"\n          class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input\"\n             #name\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input\"\n             #text\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>URL</span>\n      </div>\n      <input class=\"widget-input\"\n             #url\n             placeholder=\"https://github.com/joelgrus/data-science-from-scratch/blob/master/code/plot_state_borders.py\"\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Width</span>\n      </div>\n      <input class=\"widget-input\"\n             #width\n             type=\"text\"\n             placeholder=\"100%\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Upload</span>\n      </div>\n      <form    ngNoForm    action=\"http://localhost:3100/api/upload\"   method=\"post\"   enctype=\"multipart/form-data\">\n        <input      name=\" myFile \"         type=\"file\"   class=\"form-control\"/>\n        <input      name=\" widgetId \"   value=\"{{widgetId}}\"         style=\"display:   none\"/>\n        <input      name=\" websiteId \"   value=\"{{websiteId}}\"         style=\"display:   none\"/>\n        <input      name=\" pageId \"   value=\"{{pageId}}\"         style=\"display:   none\"/>\n        <input      name=\" userId \"   value=\"{{userId}}\"         style=\"display:   none\"/>\n        <button   type=\"submit\"   class=\"btn   btn-block   btn-primary\" >Upload   Image</button>\n        <br/>\n      </form>\n    </li>\n    <!--<li>-->\n      <!--<button   type=\"submit\"   class=\"btn   btn-block   btn-primary\">Upload   Image</button>-->\n    <!--</li>-->\n  </ul>\n  <app-flickr-image-search></app-flickr-image-search>\n\n</div>\n\n\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-image/widget-new-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetNewImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetNewImageComponent(widgetService, activatedRoute, router, sharedService, http) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.http = http;
    }
    WidgetNewImageComponent.prototype.createImage = function (name, text, url, width) {
        var _this = this;
        if (name.length === 0) {
            alert('miss image name');
            return;
        }
        var widget = { '_id': '', 'type': 2, 'size': '', 'text': text, 'url': url, 'pageId': this.pageId };
        this.widgetService.createWidget(this.pageId, widget)
            .subscribe(function (pages) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetNewImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseUrl = 'http://localhost:3100';
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = '123';
        });
        this.http.get('http://localhost:3100/api/uploads')
            .map(function (response) {
            return response.json();
        })
            .subscribe(function (files) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _e || Object])
], WidgetNewImageComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "\n<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget/new\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>New Text Input</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\">\n        <button\n          (click)=\"createTextInput(name.value, text.value, placeholder.value, rows.value, formatted.checked)\"\n          class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #name\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>rows</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #rows\n             type=\"number\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input form-control\"\n      type=\"text\"\n      #text\n      placeholder=\"US Senate Reaches Compromise\">\n      <!--<quill-editor (change)=\"onContentChanged($event)\"> </quill-editor>-->\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>PlaceHolder</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             #placeholder\n             placeholder=\"placeholder\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Formatted</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"checkbox\"\n             #formatted>\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-text/widget-new-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetNewTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetNewTextComponent(widgetService, activatedRoute, sharedService, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
    }
    WidgetNewTextComponent.prototype.createTextInput = function (name, text, placeholder, rows, formatted) {
        var _this = this;
        if (name.length === 0) {
            alert('miss input name');
            return;
        }
        var widget = { '_id': '', 'type': 4, 'placeholder': placeholder, 'text': text, 'src': '', pageId: this.pageId,
            'rows': rows, 'formatted': formatted };
        this.widgetService.createWidget(this.pageId, widget)
            .subscribe(function (pages) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetNewTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetNewTextComponent);

var _a, _b, _c, _d;
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

module.exports = "<!--Nav Bar-->\n<div class=\"page-nav container-fluid nav-container\">\n  <div class=\"row nav-row\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a routerLink=\"/profile/website/{{websiteId}}/page/{{pageId}}/widget/new\" class=\"navbar-link\">\n        <button class=\"page-nav-btn glyphicon glyphicon-chevron-left pull-left\"></button>\n      </a>\n    </div>\n    <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n      <p class=\"page-nav-p pull-left\">\n        <b>New Youtube</b>\n      </p>\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n      <a class=\"navbar-link\">\n        <button\n          (click)=\"createYoutube(name.value, text.value, url.value, width.value)\"\n          class=\"page-nav-btn glyphicon glyphicon-ok pull-right\"></button>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!--Content-->\n<div class=\"widget-content\">\n  <ul class=\"widget-ul\">\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Name</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #name\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Text</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #text\n             type=\"text\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>URL</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             type=\"text\"\n             #url\n             placeholder=\"https://github.com\">\n    </li>\n    <li class=\"widget-li\">\n      <div class=\"widget-input-title\">\n        <span>Width</span>\n      </div>\n      <input class=\"widget-input form-control\"\n             #width\n             type=\"text\">\n    </li>\n  </ul>\n</div>\n\n<!--Bottom Bar-->\n<div class=\"page-bottom\">\n  <a routerLink=\"/profile/{{userId}}\" class=\"navbar-link\">\n    <button class=\"page-bottom-btn glyphicon glyphicon-user pull-right\"></button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-new/widget-new-youtube/widget-new-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetNewYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
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
    function WidgetNewYoutubeComponent(widgetService, activatedRoute, sharedService, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
    }
    WidgetNewYoutubeComponent.prototype.createYoutube = function (name, text, url, width) {
        var _this = this;
        if (name.length === 0) {
            alert('miss widget name');
            return;
        }
        url = url.replace('watch?v=', 'embed/');
        var widget = { 'type': 3, 'size': '', 'text': text, 'url': url, pageId: this.pageId };
        this.widgetService.createWidget(this.pageId, widget)
            .subscribe(function (pages) {
            _this.router.navigate(['profile', 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetNewYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user['_id'];
        this.activatedRoute.params
            .subscribe(function (params) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WidgetNewYoutubeComponent);

var _a, _b, _c, _d;
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

module.exports = "\n  <div class=\"widget-youtube\">\n    <p>{{widget.text}}</p>\n    <iframe [src] = 'widget.url | safe'></iframe>\n  </div>\n\n"

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

/***/ "../../../../../src/app/services/authentication.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(userService) {
        this.userService = userService;
    }
    AuthenticationService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.client.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // pages = [];
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseUrl + 'api/website/' + websiteId + '/page';
        return this.http.post(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findAllPagesForWebsite = function (websiteId) {
        var url = this.baseUrl + 'api/website/' + websiteId + '/page';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + 'api/page/' + pageId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.baseUrl + 'api/page/' + pageId;
        return this.http.put(url, page)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + 'api/page/' + pageId;
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

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        // user = '';
        this.user = {};
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function UserService(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById
        };
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + 'api/user';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + 'api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + 'api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + 'api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (user) {
        var url = this.baseUrl + 'api/user/' + user._id;
        return this.http.put(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + 'api/user/' + userId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = this.baseUrl + 'api/login';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login_facebook = function () {
        var url = this.baseUrl + 'facebook/login';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.register = function (username, password) {
        var url = this.baseUrl + 'api/register';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + 'api/logout', '', this.options)
            .map(function (res) {
            var data = res;
            return res;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        var url = this.baseUrl + 'api/loggedIn';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_service_client__["a" /* SharedService */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__website_mock_client__ = __webpack_require__("../../../../../src/app/services/website.mock.client.ts");
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
        this.websites = __WEBPACK_IMPORTED_MODULE_4__website_mock_client__["a" /* WEBSITES */];
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.baseUrl + 'api/user/' + userId + '/website';
        return this.http.post(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsitesForUser = function (userId) {
        var url = this.baseUrl + 'api/user/' + userId + '/website';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findAllWebsites = function () {
        return this.http.get(this.baseUrl + 'api/website')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WebsiteService.prototype.findWebsiteById = function (userId, websiteId) {
        var url = this.baseUrl + 'api/user/' + userId + '/website/' + websiteId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (userId, newWebsite, websiteId) {
        var url = this.baseUrl + 'api/user/' + userId + '/website/' + websiteId;
        return this.http.put(url, newWebsite)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (userId, websiteId) {
        var url = this.baseUrl + 'api/user/' + userId + '/website/' + websiteId;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {WIDGETS} from '../models/widget.mock.client';
var WidgetService = (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.baseUrl + 'api/page/' + pageId + '/widget';
        return this.http.post(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findAllwidgetsForPage = function (pageId) {
        var url = this.baseUrl + 'api/page/' + pageId + '/widget';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + 'api/widget/' + widgetId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + 'api/widget/' + widgetId;
        return this.http.put(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.updateWidgetImage = function (widgetId, widget) {
        var url = this.baseUrl + 'api/widget/' + widgetId + '/image';
        return this.http.put(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.updateWidgetHeader = function (widgetId, widget) {
        var url = this.baseUrl + 'api/widget/' + widgetId + '/header';
        return this.http.put(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.updateWidgetTextInput = function (widgetId, widget) {
        var url = this.baseUrl + 'api/widget/' + widgetId + '/textinput';
        return this.http.put(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + 'api/widget/' + widgetId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + 'api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '')
            .map(function (res) {
            var data = res;
            return data;
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