import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Categorias } from "src/categoria/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_jogos"})
export class Jogos{
    
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({type: "decimal", precision: 10, scale: 2})
    preco: number;
    
    @ApiProperty()
    @Column({length: 1000})
    foto: string;

    @ApiProperty()
    @ManyToOne(() => Categorias, (categoria) => categoria.jogo,{
        onDelete: "CASCADE"
    })
    categoria: Categorias;

    @ApiProperty()
    @ManyToOne(() => Usuario, (usuario) => usuario.jogo,{
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}
