import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  private hasView: boolean = false;

  @Input('appIf')
  set condition(value: boolean) {
    if (value && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.template);
      this.hasView = true;
    } else if (!value && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(
    private template: TemplateRef<any>, 
    private viewContainer: ViewContainerRef
  ) { }

}
