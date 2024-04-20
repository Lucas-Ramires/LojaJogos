import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categorias } from "./entities/categoria.entity";
import { CategoriaController } from "./controller/categoria.controller";
import { CategoriaService } from "./services/categoria.service";


@Module({
    imports:[TypeOrmModule.forFeature([Categorias])],
    controllers: [CategoriaController],
    providers: [CategoriaService],
    exports: [TypeOrmModule]
})
export class CategoriaModule{};