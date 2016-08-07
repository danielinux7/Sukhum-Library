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
var dynamicHtmlOutlet_directive_1 = require('./../../directives/dynamic-html-outlet/dynamicHtmlOutlet.directive');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var ContactsComponent = (function () {
    function ContactsComponent(translate) {
        var _this = this;
        this.html_ru = "<div>\n  <p align=\"justify\">\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441: 384900; \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0410\u0431\u0445\u0430\u0437\u0438\u044F, \u0433. \u0421\u0443\u0445\u0443\u043C, \u0443\u043B. \u041B\u0430\u043A\u043E\u0431\u0430, \u0434. 111.<br>\n  \u0422\u0435\u043B.: </p><ul><li>+7(840) 226-64-15\n  </li><li>+7(840) 226-24-41</li>\n  <li>+7(940) 925-81-80</li>\n  <li>+7(940) 774-25-62</li></ul>\n  E-mail.: <ul><li>nbraabch@sukhum.city</li></ul>\n  \u0414\u043B\u044F \u043A\u043E\u0440\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u0438: 354000; \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0430\u044F \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u044F, \u041A\u0440\u0430\u0441\u043D\u043E\u0434\u0430\u0440\u0441\u043A\u0438\u0439 \u043A\u0440\u0430\u0439, \u0433. \u0421\u043E\u0447\u0438, \u0443\u043B. \u0412\u043E\u0440\u043E\u0432\u0441\u043A\u043E\u0433\u043E, \u0434.1, \u043F\u043E\u0447\u0442\u0430\u043C\u043F\u0442\u0430, \u0430/\u044F 964<br>\n  \u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 - \u0411\u043E\u0440\u0438\u0441 \u0428\u0430\u043B\u0438\u043A\u043E\u0432\u0438\u0447 \u0427\u043E\u043B\u0430\u0440\u0438\u044F.<p></p>\n  </div>";
        this.html_en = "<div>\n  <p align=\"justify\"> Postal Code: 384900; The Republic of Abkhazia, Sukhum, ul. Lakoba, d. 111.<br>\n  Tel.: </p><ul><li>(8-10-995)442-664-15\n  </li><li>(8-10-995)442-624-41</li></ul>\n  For correspondence: 354000; Russian Federation, Krasnodar, Sochi, UL. Vorovskogo, 1, BT, and / I 964<br>\n   Director of the National Library - Boris Shalikovich Cholariya<p></p>\n  </div>";
        this.html_ab = "<div>\n  <p align=\"justify\"> Postal Code: 384900; The Republic of Abkhazia, Sukhum, ul. Lakoba, d. 111.<br>\n  Tel.: </p><ul><li>(8-10-995)442-664-15\n  </li><li>(8-10-995)442-624-41</li></ul>\n  For correspondence: 354000; Russian Federation, Krasnodar, Sochi, UL. Vorovskogo, 1, BT, and / I 964<br>\n   Director of the National Library - Boris Shalikovich Cholariya<p></p>\n  </div>";
        this.html_tr = "<div>\n  <p align=\"justify\"> Postal Code: 384900; The Republic of Abkhazia, Sukhum, ul. Lakoba, d. 111.<br>\n  Tel.: </p><ul><li>\u0668-\u0661\u0660-\u0669\u0669\u0665 \u0661\u0665-\u0666\u0666\u0664-\u0664\u0664\u0662\n  </li><li>(8-10-995)442-624-41</li></ul>\n   \u0644\u0644\u0645\u0631\u0627\u0633\u0644\u0629: \u0663\u0665\u0664\u0660\u0660\u0660 \u0627\u0644\u0627\u062A\u062D\u0627\u062F \u0627\u0644\u0631\u0648\u0633\u064A\u060C \u0643\u0631\u0627\u0633\u0646\u062F\u0627\u0631\u060C \u0633\u0648\u062A\u0634\u064A\u060C \u0634\u0627\u0631\u0639 \u0641\u064E\u0631\u0641\u0633\u0643\u0641\u0627\u060C \u0645\u0643\u062A\u0628 \u0628\u0631\u064A\u062F \u0669\u0666\u0664<br>\n   \u0645\u062F\u064A\u0631 \u0627\u0644\u0645\u0643\u062A\u0628\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629 - \u0628\u0648\u0631\u064A\u0633 \u0634\u0627\u0644\u064A\u0643\u0648\u0641\u062A\u0634 \u0643\u0648\u0644\u0627\u0631\u064A\u0627<p></p>\n  </div>";
        this.html_ar = "<div>\n  <p align=\"justify\">\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u064A\u062F\u064A: \u0663\u0668\u0664\u0669\u0660\u0660. \u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0623\u0628\u062E\u0627\u0632\u064A\u0627\u060C \u0633\u0648\u062E\u0648\u0645\u064A\u060C \u0644\u0627\u0643\u0648\u0628\u0627 \u060C \u062F. \u0661\u0661\u0661<br>\n  \u0647\u0627\u062A\u0641: </p><ul><li>\u0668-\u0661\u0660-\u0669\u0669\u0665 \u0661\u0665-\u0666\u0666\u0664-\u0664\u0664\u0662\n  </li><li>\u0668-\u0661\u0660-\u0669\u0669\u0665 \u0661\u0665-\u0666\u0666\u0664-\u0664\u0664\u0662</li></ul>\n  \u0644\u0644\u0645\u0631\u0627\u0633\u0644\u0629: \u0663\u0665\u0664\u0660\u0660\u0660 \u0627\u0644\u0627\u062A\u062D\u0627\u062F \u0627\u0644\u0631\u0648\u0633\u064A\u060C \u0643\u0631\u0627\u0633\u0646\u062F\u0627\u0631\u060C \u0633\u0648\u062A\u0634\u064A\u060C \u0634\u0627\u0631\u0639 \u0641\u064E\u0631\u0641\u0633\u0643\u0641\u0627\u060C \u0645\u0643\u062A\u0628 \u0628\u0631\u064A\u062F \u0669\u0666\u0664<br>\n   \u0645\u062F\u064A\u0631 \u0627\u0644\u0645\u0643\u062A\u0628\u0629 \u0627\u0644\u0648\u0637\u0646\u064A\u0629 - \u0628\u0648\u0631\u064A\u0633 \u0634\u0627\u0644\u064A\u0643\u0648\u0641\u062A\u0634 \u0643\u0648\u0644\u0627\u0631\u064A\u0627<p></p>\n  </div>";
        if (translate.currentLang === 'ru') {
            this.html = this.html_ru;
        }
        else if (translate.currentLang === 'en') {
            this.html = this.html_en;
        }
        else if (translate.currentLang === 'ab') {
            this.html = this.html_ab;
        }
        else if (translate.currentLang === 'tr') {
            this.html = this.html_tr;
        }
        else if (translate.currentLang === 'ar') {
            this.html = this.html_ar;
        }
        translate.onLangChange.subscribe(function (event) {
            if (translate.currentLang === 'ru') {
                _this.html = _this.html_ru;
            }
            else if (translate.currentLang === 'en') {
                _this.html = _this.html_en;
            }
            else if (translate.currentLang === 'ab') {
                _this.html = _this.html_ab;
            }
            else if (translate.currentLang === 'tr') {
                _this.html = _this.html_tr;
            }
            else if (translate.currentLang === 'ar') {
                _this.html = _this.html_ar;
            }
        });
    }
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'lib-contacts',
            templateUrl: './src/app/content/contacts/contacts.component.html',
            styleUrls: ['./src/app/content/contacts/contacts.component.css'],
            directives: [dynamicHtmlOutlet_directive_1.DynamicHTMLOutlet]
        }), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map