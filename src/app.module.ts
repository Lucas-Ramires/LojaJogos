import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jogos } from './jogo/entities/jogo.entity';
import { JogosModule } from './jogo/jogo.module';
import { CategoriaModule } from './categoria/categoria.module';
import { Categorias } from './categoria/entities/categoria.entity';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_lojajogos',
      entities: [Jogos, Categorias, Usuario],
      synchronize: true,
      logging: true,
    }),
    JogosModule,
    CategoriaModule,
    AuthModule,
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
