import { Column, Entity } from "typeorm";

@Entity()
export class Book {
    //@PrimaryGeneratedColumn()
    @Column({ primary: true, generated: true})
    _id: number;

    @Column({nullable: true})
    title: string;
    
    @Column({nullable: true})
    isbn: string;
    
    @Column({nullable: true})
    pageCount: number;
    
    @Column({nullable: true})
    publishedDate: Date;
    
    @Column({nullable: true})
    thumbnailUrl: string;
    
    @Column({type: "text", nullable: true})
    shortDescription: string;
    
    @Column({type: "text", nullable: true})
    longDescription: string;
    
    @Column({nullable: true})
    status: string;

    @Column("simple-array", {nullable: true})
    authors: string[];

    @Column("timestamp", { default: () => "CURRENT_TIMESTAMP()", onUpdate: "CURRENT_TIMESTAMP()"})
    deletedAt: Date;
}
