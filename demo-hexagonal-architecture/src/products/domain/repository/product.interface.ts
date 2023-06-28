import { IProductRepositoryModel, ISaveProductRepositoryModel } from '../models/product-repository.model';

export interface ICrudProductRepository {
	getAllProducts(): Promise<IProductRepositoryModel[]>;
	saveProducts(newProduct: ISaveProductRepositoryModel): Promise<void>;
}
