import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jogos } from './jogo/entities/jogo.entity';
import { JogosModule } from './jogo/jogo.module';
import { CategoriaModule } from './categoria/categoria.module';
import { Categorias } from './categoria/entities/categoria.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'kutum@12',
      database: 'db_lojajogos',
      entities: [Jogos, Categorias],
      synchronize: true,
      logging: true,
    }),
    JogosModule,
    CategoriaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
