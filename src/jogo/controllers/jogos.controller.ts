import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { JogosService } from "../services/jogos.service";
import { Jogos } from "../entities/jogo.entity";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";

    
@UseGuards(JwtAuthGuard)
@Controller("/jogos")
export class JogosController{
    constructor(private readonly jogosService: JogosService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Jogos[]>{
        return this.jogosService.findAll();
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id : number): Promise<Jogos>{
        return this.jogosService.findById(id);
    }
    
    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome : string): Promise<Jogos[]>{
        return this.jogosService.findByNome(nome);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() jogo:Jogos): Promise<Jogos>{
        return this.jogosService.create(jogo);
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() jogo: Jogos): Promise<Jogos>{
        return this.jogosService.update(jogo);
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe)id: number){
        return this.jogosService.delete(id);
    }
}    