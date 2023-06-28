import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from '../commons/domain/entities/product.entity';
import { OrmProductRepository } from '../commons/domain/repository/orm-product.repository';
import { ProductUseCaseService } from './application/product-use-case.service';
import { ProductRepository } from './domain/repository/product.repository';
import { ProductController } from './infrastructure/product.controller';

@Module({
	controllers: [ProductController],
	providers: [ProductUseCaseService, ProductRepository, OrmProductRepository],
	imports: [TypeOrmModule.forFeature([ProductEntity])]
})
export class ProductsModule {}
