import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { JogosService } from "../services/jogos.service";
import { Jogos } from "../entities/jogo.entity";

    

@Controller("/jogos")
export class JogosController{
    constructor(private readonly jogosService: JogosService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Jogos[]>{
        return this.jogosService.findAll();
    }
}
    