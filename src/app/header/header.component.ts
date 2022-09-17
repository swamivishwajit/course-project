import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() fireHeaderClicked = new EventEmitter<string>();
    onSelect(value: string) {
        this.fireHeaderClicked.emit(value);
    }

}