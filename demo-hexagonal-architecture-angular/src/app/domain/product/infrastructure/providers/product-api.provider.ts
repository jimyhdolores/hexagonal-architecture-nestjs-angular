import { InjectionToken, Provider } from '@angular/core';
import { IProductApiService } from '../product-api.interface';
import { ProductApiService } from '../product-api.service';
// import { ProductDelayApiService } from './product-delay-api.service';

export const HTTP_PRODUCT_SERVICE = new InjectionToken<IProductApiService>('ProductApiService');

export const PRODUCT_API_PROVIDER: Provider = { provide: HTTP_PRODUCT_SERVICE, useClass: ProductApiService };
