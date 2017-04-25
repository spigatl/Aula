import { NgModule } from '@angular/core';
import { conta } from './conta';

@NgModule({
  declarations: [
    conta,
  ],
  exports: [
    conta,
  ]
})
export class ContaModule {}
