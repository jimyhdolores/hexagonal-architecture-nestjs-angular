import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IDomainRequestProduct, IDomainResponse, IDomainResponseProduct } from '../domain/product.model';
import { IApiResponse, IApiResponseProduct } from './models/produc-api.model';
import { IProductApiService } from './product-api.interface';

@Injectable()
export class ProductApiService implements IProductApiService {
	private _httpClient = inject(HttpClient);
	private readonly URL_PRODUCTS = environment.api + '/product';

	getProducts(): Observable<IDomainResponseProduct[]> {
		return this._httpClient.get<IApiResponseProduct[]>(this.URL_PRODUCTS).pipe(
			map((response) =>
				response.map((productApi) => ({
					productId: productApi.productId,
					description: productApi.description,
					price: productApi.price
				}))
			)
		);
	}

	save(newProduct: IDomainRequestProduct): Observable<IDomainResponse> {
		return this._httpClient
			.post<IApiResponse>(this.URL_PRODUCTS, newProduct)
			.pipe(map((response) => ({ message: response.message, code: response.code })));
	}
}
