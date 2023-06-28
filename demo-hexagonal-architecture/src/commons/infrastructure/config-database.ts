import { TypeOrmModule } from '@nestjs/typeorm';
export const CONFIG_DATABASE = () =>
	TypeOrmModule.forRoot({
		type: 'mysql',
		host: 'localhost',
		port: 3306,
		username: 'root',
		password: 'root',
		database: 'ecommerce',
		autoLoadEntities: true
	});
