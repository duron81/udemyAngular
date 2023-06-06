import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @Input('') className: string = 'open';

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
    // constructor(private elementRef: ElementRef) {}

    // @HostBinding('class.open') isOpen = false;

    // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    //     this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    // }

    @HostListener('click') onClick(event: Event) {
        // if (this.elementRef.nativeElement.contains(event.target)) {
        //     this.toggleClass();
        // }
        this.toggleClass();
    }

    private toggleClass () {
        if (this.className) {
            const element = this.elementRef.nativeElement;
            const classList = element.classList;
            if (classList.contains(this.className)){
                this.renderer.removeClass(this.elementRef.nativeElement, this.className);
            } else {
                this.renderer.addClass(this.elementRef.nativeElement, this.className);
            }
        }
    }
}