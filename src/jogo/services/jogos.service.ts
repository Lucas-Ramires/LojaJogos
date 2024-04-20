import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Jogos } from "../entities/jogo.entity";
import { DeleteResult, ILike, Repository } from "typeorm";



@Injectable()
export class JogosService{
    constructor(
        @InjectRepository(Jogos)
        private jogosRepository: Repository<Jogos>
    ) { }
    
    async findAll(): Promise<Jogos[]>{
        return await this.jogosRepository.find();
    }
    async findById(id: number): Promise<Jogos>{
        let jogo = await this.jogosRepository.findOne({
            where:{
                id
            }
        });
        if(!jogo)
        throw new HttpException('Jogo não encontrado!', HttpStatus.NOT_FOUND);

        return jogo;
    }
    async findByNome (nome: string): Promise<Jogos[]>{
        return await this.jogosRepository.find({
            where:{
                nome: ILike(`%${nome}%`)
            }
        })
    }
    async create(jogo: Jogos): Promise<Jogos>{
        return await this.jogosRepository.save(jogo);
    }
    async update(jogo: Jogos): Promise<Jogos>{
        let buscaJogo: Jogos = await this.findById(jogo.id)
        if(!buscaJogo || !jogo.id)
            throw new HttpException('Jogo não encontrado!', HttpStatus.NOT_FOUND)
        return await this.jogosRepository.save(jogo);
    }
    async delete(id: number): Promise<DeleteResult> {
        let buscaJogo: Jogos = await this.findById(id);
        if (!buscaJogo)
            throw new HttpException('Jogo não foi encontrado!', HttpStatus.NOT_FOUND)
        return await this.jogosRepository.delete(id);
    }

}

