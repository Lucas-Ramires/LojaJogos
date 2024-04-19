import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Jogos } from "./entities/jogo.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Jogos])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})

export class JogosModule { }