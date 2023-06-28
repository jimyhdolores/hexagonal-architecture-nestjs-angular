import { Inject, Injectable } from '@nestjs/common';
import { ICrudProductRepository } from '../domain/repository/product.interface';
import { ProductRepository } from '../domain/repository/product.repository';
import { ProductDto } from '../infrastructure/dto/product.dto';
import { IResponse, IUseCaseProductService } from './produc-use-case.interface';

@Injectable()
export class ProductUseCaseService implements IUseCaseProductService {
	constructor(@Inject(ProductRepository) private readonly productRepository: ICrudProductRepository) {}

	async getAllProducts(): Promise<ProductDto[]> {
		const products = await this.productRepository.getAllProducts();
		return products.map((product) => product);
	}

	async saveProducts(newProduct: ProductDto): Promise<IResponse> {
		await this.productRepository.saveProducts(newProduct);
		return { message: 'Success', code: 200 };
	}
}
