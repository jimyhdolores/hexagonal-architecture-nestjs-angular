import { Inject, Injectable } from '@nestjs/common';
import { IOrmProductRepository } from '../../../commons/domain/repository/orm-product.repositor.interface';
import { OrmProductRepository } from '../../../commons/domain/repository/orm-product.repository';
import { IProductRepositoryModel, ISaveProductRepositoryModel } from '../models/product-repository.model';
import { ICrudProductRepository } from './product.interface';
@Injectable()
export class ProductRepository implements ICrudProductRepository {
	constructor(
		@Inject(OrmProductRepository)
		private readonly ormProductRepository: IOrmProductRepository
	) {}

	async getAllProducts(): Promise<IProductRepositoryModel[]> {
		const allProducts = await this.ormProductRepository.getAllProducts();
		return allProducts.map((product) => ({
			productId: product.productId,
			description: product.description,
			price: product.price
		}));
	}

	async saveProducts(newProduct: ISaveProductRepositoryModel): Promise<void> {
		await this.ormProductRepository.saveProduct(newProduct);
	}
}
