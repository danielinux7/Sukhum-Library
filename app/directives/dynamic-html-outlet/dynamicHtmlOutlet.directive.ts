import {
  Component,
  Directive,
  ComponentFactory,
  ComponentMetadata,
  ComponentResolver,
  Input,
  ReflectiveInjector,
  ViewContainerRef,

} from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';
declare var $:any;

export function createComponentFactory(resolver: ComponentResolver, metadata: ComponentMetadata): Promise<ComponentFactory<any>> {
    const cmpClass = class DynamicComponent {};
    const decoratedCmp = Component(metadata)(cmpClass);
    return resolver.resolveComponent(decoratedCmp);
}

@Directive({
    selector: 'dynamic-html-outlet',
})
export class DynamicHTMLOutlet {
  @Input() htmlPath: string;
  @Input() cssPath: string;

  constructor(private vcRef: ViewContainerRef, private resolver: ComponentResolver) {
  }

  ngOnChanges() {
    if (!this.htmlPath) return;
    $('dynamic-html') && $('dynamic-html').remove();
    const metadata = new ComponentMetadata({
        selector: 'dynamic-html',
        templateUrl: this.htmlPath +'.html',
        styleUrls:  [this.cssPath],
        pipes: [TranslatePipe]
    });
    createComponentFactory(this.resolver, metadata)
      .then(factory => {
        const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
        this.vcRef.createComponent(factory, 0, injector, []);
      });
  }
}
