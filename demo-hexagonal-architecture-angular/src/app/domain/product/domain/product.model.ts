export interface IDomainRequestProduct {
	description: string;
	price: number;
}

export interface IDomainResponseProduct extends IDomainRequestProduct {
	productId: number;
}

export interface IDomainResponse {
	message: string;
	code: number;
}
