import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appImprovedHighlight]'
})
export class ImprovedHighlightDirective implements OnInit {

    @Input('default-colour') defaultColour: string = 'transparent';
    @Input('highlight-colour') highlightColour: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColour: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.backgroundColour = this.defaultColour;
    }

    @HostListener('mouseenter') mouseOver(eventData: Event) {
        this.backgroundColour = this.highlightColour;
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        this.backgroundColour = this.defaultColour;
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    }

}
