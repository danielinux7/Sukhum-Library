"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var header_component_1 = require('./header/header.component');
var nav_component_1 = require('./nav/nav.component');
var content_component_1 = require('./content/content.component');
var footer_component_1 = require('./footer/footer.component');
var AppComponent = (function () {
    function AppComponent(translate) {
        this.userLang = 'en';
        var userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(ru|en|tr|ar)/gi.test(userLang) ? userLang : 'en';
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // Use Russian for now for release 0.1.0
        userLang = 'ru';
        translate.currentLang = userLang;
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(userLang);
        this.userLang = userLang;
    }
    AppComponent.prototype.ngOnInit = function () {
        $('.v4-tease').remove().insertAfter('.bg');
        if (this.userLang === 'ar') {
            this.setRTL();
        }
    };
    AppComponent.prototype.setRTL = function () {
        $('lib-content') !== undefined && $('lib-content').addClass('rtl-dir');
        $('.app-rtl') !== undefined && $('.app-rtl').addClass('rtl-rotate');
        $('.app-rtl .search') !== undefined && $('.app-rtl .search').addClass('rtl-dir');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'lib-app',
            templateUrl: './src/app/app.component.html',
            styleUrls: ['./src/app/app.component.css'],
            pipes: [ng2_translate_1.TranslatePipe],
            directives: [header_component_1.HeaderComponent, nav_component_1.NavComponent, content_component_1.ContentComponent, footer_component_1.FooterComponent],
            providers: [ng2_translate_1.TranslateService]
        }), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map