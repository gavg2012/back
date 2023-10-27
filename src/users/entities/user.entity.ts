import { Column, Entity } from "typeorm";

@Entity()
export class User {
    @Column({ primary: true, generated: true })
    _id: number;
    
    @Column({ type: "text", nullable: false })
    name: string;
    
    @Column({ length: 50, unique: true, nullable: false })
    email: string;
    
    @Column({ type: "text", nullable: false })
    password: string;

    @Column({ default: 'user' })
    role: string;

    @Column("timestamp", { default: () => "CURRENT_TIMESTAMP()", onUpdate: "CURRENT_TIMESTAMP()"})
    deletedAt: Date;
}
