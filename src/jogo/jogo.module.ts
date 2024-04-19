import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Jogos } from "./entities/jogo.entity";
import { JogosService } from "./services/jogos.service";
import { JogosController } from "./controllers/jogos.controller";


@Module({
    imports: [TypeOrmModule.forFeature([Jogos])],
    providers: [JogosService],
    controllers: [JogosController],
    exports: [TypeOrmModule]
})

export class JogosModule {}