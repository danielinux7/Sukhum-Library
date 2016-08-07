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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var CMSService = (function () {
    function CMSService(http) {
        this.http = http;
        this.contactsUrl = 'http://localhost:2368/ghost/api/v0.1/posts/slug/contacts_ru/'; // URL to web api
    }
    CMSService.prototype.getContactsCMS = function () {
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer Q0g0yZLLEhFLFVc9SXEKXp5jbWVAvINjLappsQcnWqHoy1JltasNe6UfgpMsPzMMUhRovo58sHVvVTlwAFQ7cUoPPW2kyIpZyg2HqpRI8Y3KfftyptjleMSJmbGJOCVrBr74zbsZCKJrjbMFtvSkKjzvbQwyUzMrnFK8wqY05CcoJYvjhNIQc33N8UTVeNI3jXAa1oSf5d86SUc5PY4cPqvQ1LZzlOZ6pMp0VfHZWOSuZXqEcNHJhgEF3cjmiyZ');
        return this.http.get(this.contactsUrl, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    CMSService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    CMSService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CMSService);
    return CMSService;
}());
exports.CMSService = CMSService;
//# sourceMappingURL=cms.service.js.map