import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
	@PrimaryGeneratedColumn('increment')
	productId: number;

	@Column()
	description: string;

	@Column()
	price: number;
}
