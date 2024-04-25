import { IsNotEmpty } from "class-validator";
import { Categorias } from "src/categoria/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_jogos"})
export class Jogos{
    
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({type: "decimal", precision: 10, scale: 2})
    preco: number;
    
    @Column({length: 1000})
    foto: string;

    @ManyToOne(() => Categorias, (categoria) => categoria.jogo,{
        onDelete: "CASCADE"
    })
    categoria: Categorias;

    @ManyToOne(() => Usuario, (usuario) => usuario.jogo,{
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}
