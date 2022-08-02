import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeDirectivesDirective } from './some-directives.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [SomeDirectivesDirective],
  exports: [SomeDirectivesDirective],
})
export class SomeDirectivesModule {}
