import { 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne,  
    PrimaryGeneratedColumn 
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserEvaluativePoints {
    @PrimaryGeneratedColumn({ name: 'point_id' })
    point_id: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    user_id: User

    @Column({ name: 'point_title' })
    point_title: string;

    @Column({ name: 'point_value' })
    point_value: number;
}