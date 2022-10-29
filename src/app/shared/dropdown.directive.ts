import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropDoenDirective {
    @HostBinding('class.open')  isOpen = false;
    //this will toggle dropdown when we click on the dropdown
   /* @HostListener('click') toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen;
    }*/

    //this will toggle dropdown when we click anywhere in the DOM
    @HostListener('document:click', ['$event']) closeWHenCLickedinDom(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}
}