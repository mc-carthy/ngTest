import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appImprovedHighlight]'
})
export class ImprovedHighlightDirective implements OnInit {


    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
    }

    @HostListener('mouseenter') mouseOver(eventData: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    }

}
