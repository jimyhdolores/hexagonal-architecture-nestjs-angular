export interface IApiRequestProduct {
	readonly description: string;
	readonly price: number;
}

export interface IApiResponseProduct extends IApiRequestProduct {
	readonly productId: number;
}

export interface IApiResponse {
	readonly message: string;
	readonly code: number;
}
