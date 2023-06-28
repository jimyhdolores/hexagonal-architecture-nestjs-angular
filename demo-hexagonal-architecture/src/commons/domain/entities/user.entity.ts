import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
	@PrimaryGeneratedColumn('increment')
	userId: number;

	@Column()
	name: string;

	@Column()
	lastName: string;
}
