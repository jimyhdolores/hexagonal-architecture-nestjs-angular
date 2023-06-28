import { Component } from '@angular/core';
import { ProductsPageComponent } from './ui/products-page/products-page.component';

@Component({
	selector: 'app-root',
	standalone: true,
	template: `<app-products-page></app-products-page>`,
	imports: [ProductsPageComponent]
})
export class AppComponent {}
