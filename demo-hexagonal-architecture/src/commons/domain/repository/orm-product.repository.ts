import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { IGetProductRepositoryDto, IProductRepositoryDto } from '../dto/product-repository.dto';
import { ProductEntity } from '../entities/product.entity';
import { IOrmProductRepository } from './orm-product.repositor.interface';
@Injectable()
export class OrmProductRepository extends Repository<ProductEntity> implements IOrmProductRepository {
	constructor(dataSource: DataSource) {
		super(ProductEntity, dataSource.createEntityManager());
	}

	async saveProduct(newProduct: IProductRepositoryDto): Promise<void> {
		await this.save(newProduct);
	}

	async getAllProducts(): Promise<IGetProductRepositoryDto[]> {
		//TODO
		return await this.find();
	}
}
