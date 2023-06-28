import { Module } from '@nestjs/common';
import { CONFIG_DATABASE } from './commons/infrastructure/config-database';
import { ProductsModule } from './products/products.module';

@Module({
	imports: [CONFIG_DATABASE(), ProductsModule]
})
export class AppModule {}
