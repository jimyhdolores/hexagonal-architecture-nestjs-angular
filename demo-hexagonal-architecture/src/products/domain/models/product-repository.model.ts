export interface IProductRepositoryModel {
	productId: number;
	description: string;
	price: number;
}

export type ISaveProductRepositoryModel = Omit<IProductRepositoryModel, 'productId'>;
