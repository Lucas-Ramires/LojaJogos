import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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


}
