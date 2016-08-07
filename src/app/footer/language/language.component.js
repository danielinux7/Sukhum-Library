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
var LanguageComponent = (function () {
    function LanguageComponent(translate) {
        this.translate = translate;
        this.lang = '';
        this.code = '';
        this.translate = translate;
        var selectedCode = translate.currentLang;
        if (selectedCode === 'en') {
            this.lang = 'english';
            this.code = selectedCode;
        }
        else if (selectedCode === 'ru') {
            this.lang = 'russian';
            this.code = selectedCode;
        }
        else if (selectedCode === 'ab') {
            this.lang = 'abkhaz';
            this.code = selectedCode;
        }
        else if (selectedCode === 'tr') {
            this.lang = 'turkish';
            this.code = selectedCode;
        }
        else if (selectedCode === 'ar') {
            this.lang = 'arabic';
            this.code = selectedCode;
        }
    }
    LanguageComponent.prototype.ngOnInit = function () {
        $('.active')[0] !== undefined && $('.active')[0].removeAttribute('class', 'active');
        $('#' + this.code).closest('li').addClass('active');
    };
    LanguageComponent.prototype.selectLang = function (event) {
        $('.active')[0] !== undefined && $('.active')[0].removeAttribute('class', 'active');
        $(event.target).closest('li').addClass('active');
        $(event.target).closest('a');
        var selectedCode = '';
        selectedCode = $(event.target).closest('a').attr('id');
        if (selectedCode !== this.code) {
            if (selectedCode === 'en') {
                this.lang = 'english';
                this.code = selectedCode;
                this.setLTR();
            }
            if (selectedCode === 'ru') {
                this.lang = 'russian';
                this.code = selectedCode;
                this.setLTR();
            }
            if (selectedCode === 'ab') {
                this.lang = 'abkhaz';
                this.code = selectedCode;
                this.setLTR();
            }
            if (selectedCode === 'tr') {
                this.lang = 'turkish';
                this.code = selectedCode;
                this.setLTR();
            }
            if (selectedCode === 'ar') {
                this.lang = 'arabic';
                this.code = selectedCode;
                this.setRTL();
            }
        }
        this.translate.resetLang(this.code);
        this.translate.use(this.code);
    };
    LanguageComponent.prototype.setRTL = function () {
        $('lib-content') !== undefined && $('lib-content').addClass('rtl-dir');
        $('.app-rtl') !== undefined && $('.app-rtl').addClass('rtl-rotate');
        $('.app-rtl .search') !== undefined && $('.app-rtl .search').addClass('rtl-dir');
    };
    LanguageComponent.prototype.setLTR = function () {
        $('lib-content') !== undefined && $('lib-content').removeClass('rtl-dir');
        $('.app-rtl') !== undefined && $('.app-rtl').removeClass('rtl-rotate');
        $('.app-rtl .search') !== undefined && $('.app-rtl .search').removeClass('rtl-dir');
    };
    LanguageComponent = __decorate([
        core_1.Component({
            selector: 'lib-language',
            templateUrl: './src/app/footer/language/language.component.html',
            styleUrls: ['./src/app/footer/language/language.component.css'],
            pipes: [ng2_translate_1.TranslatePipe],
        }), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
    ], LanguageComponent);
    return LanguageComponent;
}());
exports.LanguageComponent = LanguageComponent;
//# sourceMappingURL=language.component.js.map