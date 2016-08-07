"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./content/home/home.component');
var news_component_1 = require('./content/news/news.component');
var contacts_component_1 = require('./content/contacts/contacts.component');
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'news', component: news_component_1.NewsComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map