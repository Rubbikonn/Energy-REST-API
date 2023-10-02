import { ApiProperty } from "@nestjs/swagger";
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
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    @PrimaryGeneratedColumn({ name: 'vision_item_id' })
    visionId: number;

    @ApiProperty({example: 'What do I want?', description: "Описание личного видения пользователем его целей и желаемого результата"})
    @Column({ name: 'vision_item_title' })
    visionTitle: string;

    @ApiProperty({example: 'I want to be healthy', description: "Значение личного видения пользователя его целей и желаемого результата"})
    @Column({ name: 'vision_item_value' })
    visionValue: string;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    userId: User
};
