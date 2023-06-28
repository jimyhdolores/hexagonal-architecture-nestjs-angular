import { IGetProductRepositoryDto, IProductRepositoryDto } from '../dto/product-repository.dto';

export interface IOrmProductRepository {
	getAllProducts(): Promise<IGetProductRepositoryDto[]>;
	saveProduct(newProduct: IProductRepositoryDto): Promise<void>;
}
