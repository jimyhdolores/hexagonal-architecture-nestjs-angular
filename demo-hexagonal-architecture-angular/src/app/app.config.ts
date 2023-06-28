import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PRODUCT_API_PROVIDER } from './domain/product/infrastructure/providers/product-api.provider';

export const appConfig: ApplicationConfig = {
	providers: [provideAnimations(), provideHttpClient(), PRODUCT_API_PROVIDER]
};
