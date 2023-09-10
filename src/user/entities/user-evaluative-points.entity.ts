import { 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserEvaluativePoints {
    @PrimaryGeneratedColumn({ name: 'point_id' })
    id: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    user: User

    @Column({ name: 'point_title' })
    title: string;

    @Column({ name: 'point_value' })
    value: string;
}