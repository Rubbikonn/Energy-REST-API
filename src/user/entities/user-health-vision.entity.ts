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
    vision_id: number;

    @Column({ name: 'vision_item_title' })
    vision_title: string;

    @Column({ name: 'vision_item_value' })
    vision_value: string;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    user_id: User
}
