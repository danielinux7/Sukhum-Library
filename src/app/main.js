"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders, http_1.HTTP_PROVIDERS,
    {
        provide: ng2_translate_1.TranslateLoader,
        useFactory: function (http) { return new ng2_translate_1.TranslateStaticLoader(http, 'i18n', '.json'); },
        deps: [http_1.Http]
    },
    // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
    ng2_translate_1.TranslateService
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map