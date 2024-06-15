import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { CategoriaService } from "../services/categoria.service";
import { Categorias } from "../entities/categoria.entity";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";

@ApiTags('Categoria')
@UseGuards(JwtAuthGuard)
@Controller('/categorias')
@ApiBearerAuth()
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
