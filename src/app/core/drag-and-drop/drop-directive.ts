import {Directive, ElementRef, Input} from '@angular/core';
import {ComponentBase} from "../../components/common/component-base";

require("./drag-and-drop.scss");

@Directive({selector: '[ct-drop-enabled]'})
export class DropDirective extends ComponentBase {

    @Input('ct-drop-enabled') set dropEnabled(enabled: boolean) {
        if (enabled) {
            this.el.setAttribute("ct-droppable", '');
        } else {
            this.el.removeAttribute("ct-droppable");
        }
    }

    public el: Element;

    constructor(el: ElementRef) {
        super();
        this.el = el.nativeElement;
    }
}
