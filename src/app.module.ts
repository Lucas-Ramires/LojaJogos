import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jogos } from './jogo/entities/jogo.entity';
import { JogosModule } from './jogo/jogo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_lojajogos',
      entities: [Jogos],
      synchronize: true,
    }),
    JogosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
