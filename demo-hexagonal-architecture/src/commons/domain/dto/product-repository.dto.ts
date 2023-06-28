export interface IProductRepositoryDto {
	description: string;
	price: number;
}

export interface IGetProductRepositoryDto extends IProductRepositoryDto {
	productId: number;
}
