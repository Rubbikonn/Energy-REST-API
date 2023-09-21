import { 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserPersonalStrength {
    @PrimaryGeneratedColumn({ name: 'strength_id' })
    strength_id: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    user_id: User

    @Column({ name: 'strength_title' })
    strength_title: string;

    @Column({ name: 'strength_value' })
    strength_value: string;
}