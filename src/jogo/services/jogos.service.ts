import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Jogos } from "../entities/jogo.entity";
import { Repository } from "typeorm";



@Injectable()
export class JogosService{
    constructor(
        @InjectRepository(Jogos)
        private jogosRepository: Repository<Jogos>
    ) { }
    
    async findAll(): Promise<Jogos[]>{
        return await this.jogosRepository.find();
    }
}

