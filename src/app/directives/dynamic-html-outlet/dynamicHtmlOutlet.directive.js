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
function createComponentFactory(resolver, metadata) {
    var cmpClass = (function () {
        function DynamicComponent() {
        }
        return DynamicComponent;
    }());
    var decoratedCmp = core_1.Component(metadata)(cmpClass);
    return resolver.resolveComponent(decoratedCmp);
}
exports.createComponentFactory = createComponentFactory;
var DynamicHTMLOutlet = (function () {
    function DynamicHTMLOutlet(vcRef, resolver) {
        this.vcRef = vcRef;
        this.resolver = resolver;
    }
    DynamicHTMLOutlet.prototype.ngOnChanges = function () {
        var _this = this;
        if (!this.src)
            return;
        $('dynamic-html') && $('dynamic-html').remove();
        var metadata = new core_1.ComponentMetadata({
            selector: 'dynamic-html',
            template: this.src,
        });
        createComponentFactory(this.resolver, metadata)
            .then(function (factory) {
            var injector = core_1.ReflectiveInjector.fromResolvedProviders([], _this.vcRef.parentInjector);
            _this.vcRef.createComponent(factory, 0, injector, []);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DynamicHTMLOutlet.prototype, "src", void 0);
    DynamicHTMLOutlet = __decorate([
        core_1.Directive({
            selector: 'dynamic-html-outlet',
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentResolver])
    ], DynamicHTMLOutlet);
    return DynamicHTMLOutlet;
}());
exports.DynamicHTMLOutlet = DynamicHTMLOutlet;
//# sourceMappingURL=dynamicHtmlOutlet.directive.js.map