import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appImprovedHighlight]'
})
export class ImprovedHighlightDirective implements OnInit {

    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
    }

    @HostListener('mouseenter') mouseOver(eventData: Event) {
        this.backgroundColor = 'blue';
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        this.backgroundColor = 'transparent';
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    }

}
