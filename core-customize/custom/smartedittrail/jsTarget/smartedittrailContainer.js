/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./jsTarget/web/features/smartedittrailContainer/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../modules/npm-ancillary/npmancillary/resources/npm/node_modules/@angular/common/fesm5/http.js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** delegated ./Users/i330786/hybris/list/2011.7-smcheck/hybris/bin/modules/npm-ancillary/npmancillary/resources/npm/node_modules/@angular/common/fesm5/http.js from dll-reference vendor_chunk ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_chunk */ "dll-reference vendor_chunk"))(244);

/***/ }),

/***/ "../../modules/npm-ancillary/npmancillary/resources/npm/node_modules/@angular/core/fesm5/core.js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** delegated ./Users/i330786/hybris/list/2011.7-smcheck/hybris/bin/modules/npm-ancillary/npmancillary/resources/npm/node_modules/@angular/core/fesm5/core.js from dll-reference vendor_chunk ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: ɵangular_packages_core_core_q, ɵangular_packages_core_core_n, ɵangular_packages_core_core_o, ɵangular_packages_core_core_p, ɵangular_packages_core_core_r, ɵangular_packages_core_core_f, ɵangular_packages_core_core_l, ɵangular_packages_core_core_m, ɵangular_packages_core_core_k, ɵangular_packages_core_core_j, ɵangular_packages_core_core_b, ɵangular_packages_core_core_a, ɵangular_packages_core_core_c, ɵangular_packages_core_core_d, ɵangular_packages_core_core_e, ɵangular_packages_core_core_i, ɵangular_packages_core_core_s, ɵangular_packages_core_core_u, ɵangular_packages_core_core_t, ɵangular_packages_core_core_x, ɵangular_packages_core_core_v, ɵangular_packages_core_core_w, ɵangular_packages_core_core_ba, ɵangular_packages_core_core_bb, ɵangular_packages_core_core_bc, ɵangular_packages_core_core_bd, ɵangular_packages_core_core_be, ɵangular_packages_core_core_bm, ɵangular_packages_core_core_bl, ɵangular_packages_core_core_g, ɵangular_packages_core_core_h, ɵangular_packages_core_core_bg, ɵangular_packages_core_core_bk, ɵangular_packages_core_core_bh, ɵangular_packages_core_core_bi, ɵangular_packages_core_core_bn, ɵangular_packages_core_core_y, ɵangular_packages_core_core_z, createPlatform, assertPlatform, destroyPlatform, getPlatform, PlatformRef, ApplicationRef, createPlatformFactory, NgProbeToken, enableProdMode, isDevMode, APP_ID, PACKAGE_ROOT_URL, PLATFORM_INITIALIZER, PLATFORM_ID, APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, ApplicationInitStatus, DebugElement, DebugEventListener, DebugNode, asNativeElements, getDebugNode, Testability, TestabilityRegistry, setTestabilityGetter, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, MissingTranslationStrategy, ApplicationModule, wtfCreateScope, wtfLeave, wtfStartTimeRange, wtfEndTimeRange, Type, EventEmitter, ErrorHandler, Sanitizer, SecurityContext, Attribute, ANALYZE_FOR_ENTRY_COMPONENTS, ContentChild, ContentChildren, Query, ViewChild, ViewChildren, Component, Directive, HostBinding, HostListener, Input, Output, Pipe, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ViewEncapsulation, Version, VERSION, InjectFlags, ɵɵdefineInjectable, defineInjectable, ɵɵdefineInjector, forwardRef, resolveForwardRef, Injectable, Injector, ɵɵinject, inject, INJECTOR, ReflectiveInjector, ResolvedReflectiveFactory, ReflectiveKey, InjectionToken, Inject, Optional, Self, SkipSelf, Host, ɵ0, ɵ1, NgZone, ɵNoopNgZone, RenderComponentType, Renderer, Renderer2, RendererFactory2, RendererStyleFlags2, RootRenderer, COMPILER_OPTIONS, Compiler, CompilerFactory, ModuleWithComponentFactories, ComponentFactory, ɵComponentFactory, ComponentRef, ComponentFactoryResolver, ElementRef, NgModuleFactory, NgModuleRef, NgModuleFactoryLoader, getModuleFactory, QueryList, SystemJsNgModuleLoader, SystemJsNgModuleLoaderConfig, TemplateRef, ViewContainerRef, EmbeddedViewRef, ViewRef, ChangeDetectionStrategy, ChangeDetectorRef, DefaultIterableDiffer, IterableDiffers, KeyValueDiffers, SimpleChange, WrappedValue, platformCore, ɵALLOW_MULTIPLE_PLATFORMS, ɵAPP_ID_RANDOM_PROVIDER, ɵdefaultIterableDiffers, ɵdefaultKeyValueDiffers, ɵdevModeEqual, ɵisListLikeIterable, ɵChangeDetectorStatus, ɵisDefaultChangeDetectionStrategy, ɵConsole, ɵsetCurrentInjector, ɵgetInjectableDef, ɵAPP_ROOT, ɵDEFAULT_LOCALE_ID, ɵivyEnabled, ɵCodegenComponentFactoryResolver, ɵclearResolutionOfComponentResourcesQueue, ɵresolveComponentResources, ɵReflectionCapabilities, ɵRenderDebugInfo, ɵ_sanitizeHtml, ɵ_sanitizeStyle, ɵ_sanitizeUrl, ɵglobal, ɵlooseIdentical, ɵstringify, ɵmakeDecorator, ɵisObservable, ɵisPromise, ɵclearOverrides, ɵinitServicesIfNeeded, ɵoverrideComponentView, ɵoverrideProvider, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, ɵgetLocalePluralCase, ɵfindLocaleData, ɵLOCALE_DATA, ɵLocaleDataIndex, ɵɵattribute, ɵɵattributeInterpolate1, ɵɵattributeInterpolate2, ɵɵattributeInterpolate3, ɵɵattributeInterpolate4, ɵɵattributeInterpolate5, ɵɵattributeInterpolate6, ɵɵattributeInterpolate7, ɵɵattributeInterpolate8, ɵɵattributeInterpolateV, ɵɵdefineBase, ɵɵdefineComponent, ɵɵdefineDirective, ɵɵdefinePipe, ɵɵdefineNgModule, ɵdetectChanges, ɵrenderComponent, ɵRender3ComponentFactory, ɵRender3ComponentRef, ɵɵdirectiveInject, ɵɵinjectAttribute, ɵɵinjectPipeChangeDetectorRef, ɵɵgetFactoryOf, ɵɵgetInheritedFactory, ɵɵsetComponentScope, ɵɵsetNgModuleScope, ɵɵtemplateRefExtractor, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵLifecycleHooksFeature, ɵRender3NgModuleRef, ɵmarkDirty, ɵNgModuleFactory, ɵNO_CHANGE, ɵɵcontainer, ɵɵnextContext, ɵɵelementStart, ɵɵnamespaceHTML, ɵɵnamespaceMathML, ɵɵnamespaceSVG, ɵɵelement, ɵɵlistener, ɵɵtext, ɵɵtextInterpolate, ɵɵtextInterpolate1, ɵɵtextInterpolate2, ɵɵtextInterpolate3, ɵɵtextInterpolate4, ɵɵtextInterpolate5, ɵɵtextInterpolate6, ɵɵtextInterpolate7, ɵɵtextInterpolate8, ɵɵtextInterpolateV, ɵɵembeddedViewStart, ɵɵprojection, ɵɵpipeBind1, ɵɵpipeBind2, ɵɵpipeBind3, ɵɵpipeBind4, ɵɵpipeBindV, ɵɵpureFunction0, ɵɵpureFunction1, ɵɵpureFunction2, ɵɵpureFunction3, ɵɵpureFunction4, ɵɵpureFunction5, ɵɵpureFunction6, ɵɵpureFunction7, ɵɵpureFunction8, ɵɵpureFunctionV, ɵɵgetCurrentView, ɵgetDirectives, ɵgetHostElement, ɵɵrestoreView, ɵɵcontainerRefreshStart, ɵɵcontainerRefreshEnd, ɵɵqueryRefresh, ɵɵviewQuery, ɵɵstaticViewQuery, ɵɵstaticContentQuery, ɵɵloadViewQuery, ɵɵcontentQuery, ɵɵloadContentQuery, ɵɵelementEnd, ɵɵhostProperty, ɵɵproperty, ɵɵpropertyInterpolate, ɵɵpropertyInterpolate1, ɵɵpropertyInterpolate2, ɵɵpropertyInterpolate3, ɵɵpropertyInterpolate4, ɵɵpropertyInterpolate5, ɵɵpropertyInterpolate6, ɵɵpropertyInterpolate7, ɵɵpropertyInterpolate8, ɵɵpropertyInterpolateV, ɵɵupdateSyntheticHostBinding, ɵɵcomponentHostSyntheticListener, ɵɵprojectionDef, ɵɵreference, ɵɵenableBindings, ɵɵdisableBindings, ɵɵallocHostVars, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵelementContainer, ɵɵstyling, ɵɵstyleMap, ɵɵstyleSanitizer, ɵɵclassMap, ɵɵclassMapInterpolate1, ɵɵclassMapInterpolate2, ɵɵclassMapInterpolate3, ɵɵclassMapInterpolate4, ɵɵclassMapInterpolate5, ɵɵclassMapInterpolate6, ɵɵclassMapInterpolate7, ɵɵclassMapInterpolate8, ɵɵclassMapInterpolateV, ɵɵstyleProp, ɵɵstylePropInterpolate1, ɵɵstylePropInterpolate2, ɵɵstylePropInterpolate3, ɵɵstylePropInterpolate4, ɵɵstylePropInterpolate5, ɵɵstylePropInterpolate6, ɵɵstylePropInterpolate7, ɵɵstylePropInterpolate8, ɵɵstylePropInterpolateV, ɵɵstylingApply, ɵɵclassProp, ɵɵelementHostAttrs, ɵɵselect, ɵɵtextBinding, ɵɵtemplate, ɵɵembeddedViewEnd, ɵstore, ɵɵload, ɵɵpipe, ɵwhenRendered, ɵɵi18n, ɵɵi18nAttributes, ɵɵi18nExp, ɵɵi18nStart, ɵɵi18nEnd, ɵɵi18nApply, ɵɵi18nPostprocess, ɵi18nConfigureLocalize, ɵɵi18nLocalize, ɵsetLocaleId, ɵsetClassMetadata, ɵɵresolveWindow, ɵɵresolveDocument, ɵɵresolveBody, ɵcompileComponent, ɵcompileDirective, ɵcompileNgModule, ɵcompileNgModuleDefs, ɵpatchComponentDefWithScope, ɵresetCompiledComponents, ɵflushModuleScopingQueueAsMuchAsPossible, ɵtransitiveScopesFor, ɵcompilePipe, ɵɵsanitizeHtml, ɵɵsanitizeStyle, ɵɵdefaultStyleSanitizer, ɵɵsanitizeScript, ɵɵsanitizeUrl, ɵɵsanitizeResourceUrl, ɵɵsanitizeUrlOrResourceUrl, ɵbypassSanitizationTrustHtml, ɵbypassSanitizationTrustStyle, ɵbypassSanitizationTrustScript, ɵbypassSanitizationTrustUrl, ɵbypassSanitizationTrustResourceUrl, ɵgetLContext, ɵNG_ELEMENT_ID, ɵNG_COMPONENT_DEF, ɵNG_DIRECTIVE_DEF, ɵNG_PIPE_DEF, ɵNG_MODULE_DEF, ɵNG_BASE_DEF, ɵNG_INJECTABLE_DEF, ɵNG_INJECTOR_DEF, ɵcompileNgModuleFactory__POST_R3__, ɵisBoundToModule__POST_R3__, ɵSWITCH_COMPILE_COMPONENT__POST_R3__, ɵSWITCH_COMPILE_DIRECTIVE__POST_R3__, ɵSWITCH_COMPILE_PIPE__POST_R3__, ɵSWITCH_COMPILE_NGMODULE__POST_R3__, ɵgetDebugNode__POST_R3__, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__, ɵSWITCH_IVY_ENABLED__POST_R3__, ɵSWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__, ɵCompiler_compileModuleSync__POST_R3__, ɵCompiler_compileModuleAsync__POST_R3__, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__, ɵSWITCH_ELEMENT_REF_FACTORY__POST_R3__, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__, ɵSWITCH_RENDERER2_FACTORY__POST_R3__, ɵgetModuleFactory__POST_R3__, ɵregisterNgModuleType, ɵpublishGlobalUtil, ɵpublishDefaultGlobalUtils, ɵcreateInjector, ɵINJECTOR_IMPL__POST_R3__, ɵregisterModuleFactory, ɵEMPTY_ARRAY, ɵEMPTY_MAP, ɵand, ɵccf, ɵcmf, ɵcrt, ɵdid, ɵeld, ɵgetComponentViewDefinitionFactory, ɵinlineInterpolate, ɵinterpolate, ɵmod, ɵmpd, ɵncd, ɵnov, ɵpid, ɵprd, ɵpad, ɵpod, ɵppd, ɵqud, ɵted, ɵunv, ɵvid */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_chunk */ "dll-reference vendor_chunk"))(1);

/***/ }),

/***/ "../../modules/npm-ancillary/npmancillary/resources/npm/node_modules/@angular/platform-browser/fesm5/platform-browser.js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** delegated ./Users/i330786/hybris/list/2011.7-smcheck/hybris/bin/modules/npm-ancillary/npmancillary/resources/npm/node_modules/@angular/platform-browser/fesm5/platform-browser.js from dll-reference vendor_chunk ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: ɵangular_packages_platform_browser_platform_browser_c, ɵangular_packages_platform_browser_platform_browser_b, ɵangular_packages_platform_browser_platform_browser_a, ɵangular_packages_platform_browser_platform_browser_l, ɵangular_packages_platform_browser_platform_browser_d, ɵangular_packages_platform_browser_platform_browser_i, ɵangular_packages_platform_browser_platform_browser_h, ɵangular_packages_platform_browser_platform_browser_e, ɵangular_packages_platform_browser_platform_browser_f, ɵangular_packages_platform_browser_platform_browser_k, ɵangular_packages_platform_browser_platform_browser_j, ɵangular_packages_platform_browser_platform_browser_g, BrowserModule, platformBrowser, Meta, Title, disableDebugTools, enableDebugTools, BrowserTransferStateModule, TransferState, makeStateKey, By, EVENT_MANAGER_PLUGINS, EventManager, HAMMER_GESTURE_CONFIG, HAMMER_LOADER, HammerGestureConfig, DomSanitizer, VERSION, ɵELEMENT_PROBE_PROVIDERS__POST_R3__, ɵBROWSER_SANITIZATION_PROVIDERS, ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS, ɵinitDomAdapter, ɵBrowserDomAdapter, ɵBrowserPlatformLocation, ɵTRANSITION_ID, ɵBrowserGetTestability, ɵescapeHtml, ɵELEMENT_PROBE_PROVIDERS, ɵDomAdapter, ɵgetDOM, ɵsetRootDomAdapter, ɵDomRendererFactory2, ɵNAMESPACE_URIS, ɵflattenStyles, ɵshimContentAttribute, ɵshimHostAttribute, ɵDomEventsPlugin, ɵHammerGesturesPlugin, ɵKeyEventsPlugin, ɵDomSharedStylesHost, ɵSharedStylesHost, ɵDomSanitizerImpl */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_chunk */ "dll-reference vendor_chunk"))(32);

/***/ }),

/***/ "../../modules/npm-ancillary/npmancillary/resources/npm/node_modules/@angular/upgrade/fesm5/static.js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** delegated ./Users/i330786/hybris/list/2011.7-smcheck/hybris/bin/modules/npm-ancillary/npmancillary/resources/npm/node_modules/@angular/upgrade/fesm5/static.js from dll-reference vendor_chunk ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: ɵangular_packages_upgrade_static_static_e, ɵangular_packages_upgrade_static_static_c, ɵangular_packages_upgrade_static_static_a, ɵangular_packages_upgrade_static_static_d, ɵangular_packages_upgrade_static_static_b, getAngularJSGlobal, getAngularLib, setAngularJSGlobal, setAngularLib, downgradeComponent, downgradeInjectable, VERSION, downgradeModule, UpgradeComponent, UpgradeModule */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_chunk */ "dll-reference vendor_chunk"))(246);

/***/ }),

/***/ "../../modules/npm-ancillary/npmancillary/resources/npm/node_modules/tslib/tslib.es6.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** delegated ./Users/i330786/hybris/list/2011.7-smcheck/hybris/bin/modules/npm-ancillary/npmancillary/resources/npm/node_modules/tslib/tslib.es6.js from dll-reference vendor_chunk ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_chunk */ "dll-reference vendor_chunk"))(0);

/***/ }),

/***/ "../../modules/smartedit/smartedit/smartedit-build/lib/smarteditcommons/src/index.js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** delegated ./Users/i330786/hybris/list/2011.7-smcheck/hybris/bin/modules/smartedit/smartedit/smartedit-build/lib/smarteditcommons/src/index.js from dll-reference smarteditcommons ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference smarteditcommons */ "dll-reference smarteditcommons"))(1);

/***/ }),

/***/ "./jsTarget/web/features/smartedittrailContainer sync recursive \\.js$":
/*!******************************************************************!*\
  !*** ./jsTarget/web/features/smartedittrailContainer sync \.js$ ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./abAnalyticsToolbarItem/abAnalyticsToolbarItem.js": "./jsTarget/web/features/smartedittrailContainer/abAnalyticsToolbarItem/abAnalyticsToolbarItem.js",
	"./templates.js": "./jsTarget/web/features/smartedittrailContainer/templates.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./jsTarget/web/features/smartedittrailContainer sync recursive \\.js$";

/***/ }),

/***/ "./jsTarget/web/features/smartedittrailContainer/DummyInterceptor.ts":
/*!***************************************************************************!*\
  !*** ./jsTarget/web/features/smartedittrailContainer/DummyInterceptor.ts ***!
  \***************************************************************************/
/*! exports provided: DummyInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyInterceptor", function() { return DummyInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../modules/npm-ancillary/npmancillary/resources/npm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../modules/npm-ancillary/npmancillary/resources/npm/node_modules/@angular/core/fesm5/core.js");

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

var DummyInterceptor = /** @class */ (function () {
    function DummyInterceptor() {
    }
    DummyInterceptor.prototype.intercept = function (request, next) {
        console.log('DummyInterceptor - request url:', request.url);
        return next.handle(request);
    };
    DummyInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], /* @ngInject */ DummyInterceptor);
    return DummyInterceptor;
}());



/***/ }),

/***/ "./jsTarget/web/features/smartedittrailContainer/abAnalyticsToolbarItem/abAnalyticsToolbarItem.js":
/*!********************************************************************************************************!*\
  !*** ./jsTarget/web/features/smartedittrailContainer/abAnalyticsToolbarItem/abAnalyticsToolbarItem.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
angular
    .module('abAnalyticsToolbarItemModule', ['smartedittrailContainerTemplates'])
    .component('abAnalyticsToolbarItem', {
        templateUrl: 'abAnalyticsToolbarItemTemplate.html'
    });


/***/ }),

/***/ "./jsTarget/web/features/smartedittrailContainer/forcedImports.ts":
/*!************************************************************************!*\
  !*** ./jsTarget/web/features/smartedittrailContainer/forcedImports.ts ***!
  \************************************************************************/
/*! exports provided: doImport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doImport", function() { return doImport; });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
function importAll(requireContext) {
    requireContext.keys().forEach(function (key) {
        requireContext(key);
    });
}
function doImport() {
    importAll(__webpack_require__("./jsTarget/web/features/smartedittrailcommons sync recursive \\.js$"));
    importAll(__webpack_require__("./jsTarget/web/features/smartedittrailContainer sync recursive \\.js$"));
}


/***/ }),

/***/ "./jsTarget/web/features/smartedittrailContainer/index.ts":
/*!****************************************************************!*\
  !*** ./jsTarget/web/features/smartedittrailContainer/index.ts ***!
  \****************************************************************/
/*! exports provided: SmartedittrailContainer, SmartedittrailContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _legacysmartedittrailcontainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacysmartedittrailcontainer */ "./jsTarget/web/features/smartedittrailContainer/legacysmartedittrailcontainer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SmartedittrailContainer", function() { return _legacysmartedittrailcontainer__WEBPACK_IMPORTED_MODULE_0__["SmartedittrailContainer"]; });

/* harmony import */ var _smartedittrailcontainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smartedittrailcontainer */ "./jsTarget/web/features/smartedittrailContainer/smartedittrailcontainer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SmartedittrailContainerModule", function() { return _smartedittrailcontainer__WEBPACK_IMPORTED_MODULE_1__["SmartedittrailContainerModule"]; });

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */




/***/ }),

/***/ "./jsTarget/web/features/smartedittrailContainer/legacysmartedittrailcontainer.ts":
/*!****************************************************************************************!*\
  !*** ./jsTarget/web/features/smartedittrailContainer/legacysmartedittrailcontainer.ts ***!
  \****************************************************************************************/
/*! exports provided: SmartedittrailContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartedittrailContainer", function() { return SmartedittrailContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../modules/npm-ancillary/npmancillary/resources/npm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _forcedImports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forcedImports */ "./jsTarget/web/features/smartedittrailContainer/forcedImports.ts");
/* harmony import */ var smarteditcommons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smarteditcommons */ "../../modules/smartedit/smartedit/smartedit-build/lib/smarteditcommons/src/index.js");
/* harmony import */ var smarteditcommons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smarteditcommons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _trailPage_trailPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trailPage/trailPage */ "./jsTarget/web/features/smartedittrailContainer/trailPage/trailPage.ts");

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */

Object(_forcedImports__WEBPACK_IMPORTED_MODULE_1__["doImport"])();


/**
 * @ngdoc overview
 * @name smartedittrailContainer
 * @description
 * Placeholder for documentation
 */
var SmartedittrailContainer = /** @class */ (function () {
    function SmartedittrailContainer() {
    }
    SmartedittrailContainer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(smarteditcommons__WEBPACK_IMPORTED_MODULE_2__["SeModule"])({
            imports: ['smarteditServicesModule', 'abAnalyticsToolbarItemModule', _trailPage_trailPage__WEBPACK_IMPORTED_MODULE_3__["trailPageModule"].name],
            config: ["$routeProvider", function ($routeProvider) {
                'ngInject';
                smarteditcommons__WEBPACK_IMPORTED_MODULE_2__["SeRouteService"].init($routeProvider);
                smarteditcommons__WEBPACK_IMPORTED_MODULE_2__["SeRouteService"].provideLegacyRoute({
                    path: '/trail',
                    route: {
                        template: '<trail-page></trail-page>'
                    },
                    priority: 1,
                    titleI18nKey: 'Trail Page'
                });
            }],
            initialize: ["featureService", function (featureService) {
                'ngInject';
                ////////////////////////////////////////////////////
                // Create Toolbar Item
                ////////////////////////////////////////////////////
                // Create the toolbar item as a feature.
                featureService.addToolbarItem({
                    toolbarId: 'smartEditPerspectiveToolbar',
                    key: 'abAnalyticsToolbarItem',
                    type: 'HYBRID_ACTION',
                    nameI18nKey: 'ab.analytics.toolbar.item.name',
                    priority: 2,
                    section: 'left',
                    iconClassName: 'icon-message-information se-toolbar-menu-ddlb--button__icon',
                    include: 'abAnalyticsToolbarItemWrapperTemplate.html'
                });
            }]
        })
    ], /* @ngInject */ SmartedittrailContainer);
    return SmartedittrailContainer;
}());



/***/ }),

/***/ "./jsTarget/web/features/smartedittrailContainer/smartedittrailcontainer.ts":
/*!**********************************************************************************!*\
  !*** ./jsTarget/web/features/smartedittrailContainer/smartedittrailcontainer.ts ***!
  \**********************************************************************************/
/*! exports provided: SmartedittrailContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartedittrailContainerModule", function() { return SmartedittrailContainerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../modules/npm-ancillary/npmancillary/resources/npm/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../modules/npm-ancillary/npmancillary/resources/npm/node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/upgrade/static */ "../../modules/npm-ancillary/npmancillary/resources/npm/node_modules/@angular/upgrade/fesm5/static.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../modules/npm-ancillary/npmancillary/resources/npm/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../modules/npm-ancillary/npmancillary/resources/npm/node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var smarteditcommons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! smarteditcommons */ "../../modules/smartedit/smartedit/smartedit-build/lib/smarteditcommons/src/index.js");
/* harmony import */ var smarteditcommons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(smarteditcommons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _DummyInterceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DummyInterceptor */ "./jsTarget/web/features/smartedittrailContainer/DummyInterceptor.ts");

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */






var SmartedittrailContainerModule = /** @class */ (function () {
    function SmartedittrailContainerModule() {
    }
    SmartedittrailContainerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(smarteditcommons__WEBPACK_IMPORTED_MODULE_5__["SeEntryModule"])('smartedittrailContainer'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__["UpgradeModule"]],
            declarations: [],
            entryComponents: [],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _DummyInterceptor__WEBPACK_IMPORTED_MODULE_6__["DummyInterceptor"],
                    multi: true
                }
            ]
        })
    ], SmartedittrailContainerModule);
    return SmartedittrailContainerModule;
}());



/***/ }),

/***/ "./jsTarget/web/features/smartedittrailContainer/templates.js":
/*!********************************************************************!*\
  !*** ./jsTarget/web/features/smartedittrailContainer/templates.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

angular.module('smartedittrailContainerTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('web/features/smartedittrailContainer/abAnalyticsToolbarItem/abAnalyticsToolbarItemTemplate.html',
    "<h2>AB Analytics</h2>\n" +
    "<p>This is a dummy toolbar item used to demonstrate functionality.</p>\n"
  );


  $templateCache.put('web/features/smartedittrailContainer/abAnalyticsToolbarItem/abAnalyticsToolbarItemWrapperTemplate.html',
    "<ab-analytics-toolbar-item></ab-analytics-toolbar-item>\n"
  );


  $templateCache.put('web/features/smartedittrailContainer/trailPage/trailPageTemplate.html',
    "<!-- To contain the top toolbar (and make it look SmartEdit like ) -->\n" +
    "<div class=\"se-toolbar-group\">\n" +
    "    <se-toolbar data-css-class=\"se-toolbar--shell\"\n" +
    "        data-image-root=\"imageRoot\"\n" +
    "        data-toolbar-name=\"smartEditHeaderToolbar\"></se-toolbar>\n" +
    "</div>\n" +
    "\n" +
    "<!-- The actual content of the page -->\n" +
    "<div class=\"se-landing-page\">\n" +
    "    Trail Page\n" +
    "</div>\n"
  );

}]);


/***/ }),

/***/ "./jsTarget/web/features/smartedittrailContainer/trailPage/trailPage.ts":
/*!******************************************************************************!*\
  !*** ./jsTarget/web/features/smartedittrailContainer/trailPage/trailPage.ts ***!
  \******************************************************************************/
/*! exports provided: trailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trailPageModule", function() { return trailPageModule; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

// This creates an AngularJS module called trailPageModule. 
var trailPageModule = angular__WEBPACK_IMPORTED_MODULE_0__["module"]('trailPageModule', [])
    // The AngularJS recipe specifies a new component called trailPage that will display the new page. 
    // It can be used in the markup of other parts of the application using <trail-page>. 
    .component('trailPage', {
    // This property specifies the name of the file that contains the markup used to render the new page. 
    templateUrl: 'trailPageTemplate.html',
    // This property specifies the controller of the new page. It can be used to add custom behavior to the page. 
    controller: function () {
        // Fancy controller code. 
    }
});


/***/ }),

/***/ "./jsTarget/web/features/smartedittrailcommons sync recursive \\.js$":
/*!****************************************************************!*\
  !*** ./jsTarget/web/features/smartedittrailcommons sync \.js$ ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./services/abAnalyticsService.js": "./jsTarget/web/features/smartedittrailcommons/services/abAnalyticsService.js",
	"./templates.js": "./jsTarget/web/features/smartedittrailcommons/templates.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./jsTarget/web/features/smartedittrailcommons sync recursive \\.js$";

/***/ }),

/***/ "./jsTarget/web/features/smartedittrailcommons/services/abAnalyticsService.js":
/*!************************************************************************************!*\
  !*** ./jsTarget/web/features/smartedittrailcommons/services/abAnalyticsService.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
angular.module('abAnalyticsServiceModule', []).service('abAnalyticsService', ["$q", function($q) {
    /**
     * Returns the AB analytics for a specific component by ID. Asynchronous and
     * promise based to mimic a REST transaction.
     * @returns {Promise} A promise that resolves to the AB analytics for the component
     */
    this.getABAnalyticsForComponent = function() {
        return $q.when({
            aValue: 30,
            bValue: 70
        });
    };
}]);


/***/ }),

/***/ "./jsTarget/web/features/smartedittrailcommons/templates.js":
/*!******************************************************************!*\
  !*** ./jsTarget/web/features/smartedittrailcommons/templates.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "angular":
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = angular;

/***/ }),

/***/ "dll-reference smarteditcommons":
/*!***********************************!*\
  !*** external "smarteditcommons" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = smarteditcommons;

/***/ }),

/***/ "dll-reference vendor_chunk":
/*!*******************************!*\
  !*** external "vendor_chunk" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vendor_chunk;

/***/ })

/******/ });
//# sourceMappingURL=smartedittrailContainer.js.map