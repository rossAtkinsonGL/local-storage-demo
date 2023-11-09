import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appDisableContextMenu]'
})
export class DisableContextMenuDirective {

    @HostListener('document:contextmenu', ['$event'])
    onRightClick(event: { preventDefault: () => void; }) {
        event.preventDefault();
    }

    constructor() { }
}
