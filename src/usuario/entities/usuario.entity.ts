import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Jogos } from "src/jogo/entities/jogo.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity({ name: "tb_usuarios" })
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    public id: number

    @IsNotEmpty()
    @ApiProperty()
    @Column({ length: 255, nullable: false })
    public nome: string

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    @Column({ length: 255, nullable: false })
    public usuario: string

    @MinLength(8)
    @IsNotEmpty()
    @ApiProperty()
    @Column({ length: 255, nullable: false })
    public senha: string

    @Column({ length: 5000 })
    @ApiProperty()
    public foto: string

    @ApiProperty()
    @OneToMany(() => Jogos, (jogo) => jogo.usuario)
    jogo: Jogos[]

}