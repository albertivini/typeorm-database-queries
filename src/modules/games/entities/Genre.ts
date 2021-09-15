import { Entity, JoinColumn, PrimaryColumn, ManyToOne, Column } from "typeorm";
import { Game } from "./Game";


@Entity("genres")
export class Genre {

    @PrimaryColumn()
    id: string

    @JoinColumn()
    @ManyToOne(() => Game)
    gameId: Game

    @Column()
    generos: string[]
}