import { User } from "./user.entity";
import { 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity()
export class UserHealthVision {
    @PrimaryGeneratedColumn({ name: 'vision_item_id' })
    id: number;

    @Column({ name: 'vision_item_title' })
    title: string;

    @Column({ name: 'vision_item_value' })
    value: string;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    user: User
}
