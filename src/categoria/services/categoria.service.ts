import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categorias } from "../entities/categoria.entity";
import { DeleteResult, ILike, Repository } from "typeorm";


@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categorias)
        private categoriaRepository: Repository<Categorias>
    ) { }
    async findAll(): Promise<Categorias[]> {
        return await this.categoriaRepository.find({
            relations: {
                jogo: true
            }
        });
    }
    async findById(id: number): Promise<Categorias> {
        let categoria = await this.categoriaRepository.findOne({
            where: {
                id
            },
            relations: {
                jogo: true
            }
        });
        if (!categoria)
            throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND)
        return categoria;
    }

    async findByTipo(tipo : string): Promise<Categorias[]> {
        return await this.categoriaRepository.find({
            where: {
                tipo: ILike(`%${tipo}`)
            },
            relations: {
                jogo:true
            }
        })
    }
    async create(categoria: Categorias): Promise<Categorias> {
        return await this.categoriaRepository.save(categoria);
    }
    async update(categoria: Categorias): Promise<Categorias> {

        let buscaCategoria: Categorias = await this.findById(categoria.id)
        if (!buscaCategoria || !categoria.id)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND)
        return await this.categoriaRepository.save(categoria);
        
    }
    async delete(id: number): Promise<DeleteResult>{
        let buscaCategoria: Categorias = await this.findById(id);
        if (!buscaCategoria)
        throw new HttpException('Categoria não foi encontrada!', HttpStatus.NOT_FOUND)
    return await this.categoriaRepository.delete(id);
    }
}