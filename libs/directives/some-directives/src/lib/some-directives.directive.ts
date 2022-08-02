import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { DeviceHelper } from '@nx-reproduce/helpers/device-helper';

@Directive({
  selector: '[tssSomeDirectives]',
})
export class SomeDirectivesDirective {
  /** PRIVATE PROPERTIES */
  private _tssTouchScreen!: boolean;
  private hadElse = false;

  /** SETTER */
  @Input() public set tssSomeDirectives(_: null) {
    this._tssTouchScreen = true;
    this.updateView();
  }

  @Input() public set tssSomeDirectivesElse(templateRef: TemplateRef<unknown>) {
    this.hadElse = true;
    this.elseThenTemplateRef = templateRef;
    this.updateView();
  }

  /** CONSTRUCTOR */
  constructor(
    private readonly thenTemplateRef: TemplateRef<unknown>,
    private readonly viewContainerRef: ViewContainerRef,
    private elseThenTemplateRef: TemplateRef<unknown>
  ) {}

  private updateView(): void {
    this.viewContainerRef.clear();
    if (this._tssTouchScreen && DeviceHelper.isTouchDevice()) {
      this.viewContainerRef.createEmbeddedView(this.thenTemplateRef);
    } else if (this.hadElse) {
      this.viewContainerRef.createEmbeddedView(this.elseThenTemplateRef);
    }
  }
}
