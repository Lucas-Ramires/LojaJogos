import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CategoriaService } from "../services/categoria.service";
import { Categorias } from "../entities/categoria.entity";


@Controller('/categorias')
export class CategoriaController{
    constructor(private readonly categoriaService: CategoriaService){ }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categorias[]>{
        return this.categoriaService.findAll();
    }
    @Get('/tipo/:tipo')
  @HttpCode(HttpStatus.OK)
  findByTipo(@Param('tipo') tipo: string): Promise<Categorias[]> {
    return this.categoriaService.findByTipo(tipo);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categorias: Categorias): Promise<Categorias> {
    return this.categoriaService.create(categorias);
  }
  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() categorias: Categorias): Promise<Categorias> {
    return this.categoriaService.update(categorias);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriaService.delete(id);
  }
}
