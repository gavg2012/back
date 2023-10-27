import { Column, Entity } from "typeorm";

@Entity()
export class Categories {
    //@PrimaryGeneratedColumn()
    @Column({ primary: true, generated: true})
    _id: number;

    @Column({type: "text", nullable: true})
    title: string;
    
    @Column({nullable: true})
    status: number;
}
