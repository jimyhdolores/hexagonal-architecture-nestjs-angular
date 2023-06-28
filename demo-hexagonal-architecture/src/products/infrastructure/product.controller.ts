import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { IResponse, IUseCaseProductService } from '../application/produc-use-case.interface';
import { ProductUseCaseService } from '../application/product-use-case.service';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
	constructor(@Inject(ProductUseCaseService) private readonly _productService: IUseCaseProductService) {}

	@Get()
	getProducts(): Promise<ProductDto[]> {
		return this._productService.getAllProducts();
	}

	@Post()
	saveProduct(@Body() product: ProductDto): Promise<IResponse> {
		return this._productService.saveProducts(product);
	}
}
