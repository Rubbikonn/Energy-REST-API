import { User } from "./user.entity";
import { 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity()
export class UserPeronalStrength {
    @PrimaryGeneratedColumn({ name: 'strength_id' })
    id: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    user: User

    @Column({ name: 'strength_title' })
    title: string;

    @Column({ name: 'strength_value' })
    value: string;
}