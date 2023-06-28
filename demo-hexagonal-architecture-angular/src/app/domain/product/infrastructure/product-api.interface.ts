import { Observable } from 'rxjs';
import { IDomainRequestProduct, IDomainResponse } from '../domain/product.model';

export interface IProductApiService {
	getProducts(): Observable<IDomainRequestProduct[]>;
	save(newProduct: IDomainRequestProduct): Observable<IDomainResponse>;
}
