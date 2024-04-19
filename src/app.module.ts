import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jogos } from './jogo/entities/jogo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'kutum@12',
      database: 'db_lojajogos',
      entities: [Jogos],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
