import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    page: string = 'recipe';
    @Output() pageFired = new EventEmitter<string>();

    onShoppingHeaderClick() {
        this.page = 'shopping';
        this.pageFired.emit(this.page);
    }

    onRecipesHeaderClick() {
        this.page = 'recipe';
        this.pageFired.emit(this.page);
    }
}