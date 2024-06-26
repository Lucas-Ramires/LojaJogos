import { ApiProperty } from "@nestjs/swagger";
import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Jogos } from "src/jogo/entities/jogo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_categorias"})
export class Categorias{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    @ApiProperty()
    tipo: string

    @ApiProperty()
    @OneToMany(() => Jogos, (jogo) => jogo.categoria)
    jogo: Jogos[] 
}
