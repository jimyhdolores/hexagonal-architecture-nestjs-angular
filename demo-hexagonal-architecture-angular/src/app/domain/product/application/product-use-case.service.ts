import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDomainRequestProduct, IDomainResponse } from '../domain/product.model';
import { IProductApiService } from '../infrastructure/product-api.interface';
import { HTTP_PRODUCT_SERVICE } from '../infrastructure/providers/product-api.provider';

@Injectable({ providedIn: 'root' })
export class ProductUseCaseService {
	constructor(@Inject(HTTP_PRODUCT_SERVICE) private _productApiService: IProductApiService) {}

	getProducts(): Observable<IDomainRequestProduct[]> {
		//TODO: aplicar logica
		return this._productApiService.getProducts();
	}

	saveProduct(newProduct: IDomainRequestProduct): Observable<IDomainResponse> {
		return this._productApiService.save(newProduct);
	}
}
