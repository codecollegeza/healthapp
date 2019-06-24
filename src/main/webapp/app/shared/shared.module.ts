import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Healthapp1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Healthapp1SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Healthapp1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Healthapp1SharedModule {
  static forRoot() {
    return {
      ngModule: Healthapp1SharedModule
    };
  }
}
