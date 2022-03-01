import {
    Directive,
    OnInit,
    ElementRef,
    Renderer2,
    HostListener,
    HostBinding,
    Input
} from '@angular/core';
import { NgModuleResolver } from '@angular/compiler';

@Directive({
    selector :'[appBetterHighlightDirective]'
})

export class BetterHighlightDirective implements OnInit{
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string;
    constructor(private elRef:ElementRef,private renderer:Renderer2){}

    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'brown');
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
        // this.backgroundColor = 'blue';
        this.backgroundColor = this.highlightColor;
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
        // this.backgroundColor = 'transparent';
        this.backgroundColor = this.defaultColor;
    }
}