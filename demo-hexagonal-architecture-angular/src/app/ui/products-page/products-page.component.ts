import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs';
import { ProductUseCaseService } from '../../domain/product/application/product-use-case.service';
import { IDomainRequestProduct } from '../../domain/product/domain/product.model';

@Component({
	selector: 'app-products-page',
	standalone: true,
	imports: [
		MatFormFieldModule,
		MatListModule,
		MatButtonModule,
		MatInputModule,
		ReactiveFormsModule,
		MatProgressSpinnerModule,
		NgIf,
		NgFor
	],
	templateUrl: './products-page.component.html',
	styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
	private _formBuilder = inject(FormBuilder);
	private _productUseCaseService = inject(ProductUseCaseService);

	formProduct = this._formBuilder.nonNullable.group({
		description: ['', Validators.required],
		price: [0, Validators.required]
	});

	listProducts: IDomainRequestProduct[] = [];
	showSpinner = true;

	ngOnInit(): void {
		this._loadProducts();
	}

	saveProduct() {
		if (this.formProduct.valid) {
			this._productUseCaseService.saveProduct(this.formProduct.getRawValue()).subscribe({
				next: () => {
					console.info('Producto guardado!!!');
					this._loadProducts();
				}
			});
		}
	}

	private _loadProducts(): void {
		this._productUseCaseService
			.getProducts()
			.pipe(finalize(() => (this.showSpinner = false)))
			.subscribe({
				next: (response) => {
					this.listProducts = response;
				}
			});
	}
}
