import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";


@Entity("orders")
export class Order {

    @PrimaryColumn()
    id: string

    @JoinColumn()
    @ManyToOne(() => User)
    userId: string

    @Column()
    gamesId: string[]
}