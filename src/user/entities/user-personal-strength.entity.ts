import { 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { User } from "./user.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class UserPersonalStrength {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    @PrimaryGeneratedColumn({ name: 'strength_id' })
    strength_id: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    user_id: User

    @ApiProperty({example: 'Courage', description: "Название показателя, обозначающего личную сильную сторону пользователя"})
    @Column({ name: 'strength_title' })
    strength_title: string;

    @ApiProperty({example: '4', description: "Значение показателя, обозначающего личную сильную сторону пользователя"})
    @Column({ name: 'strength_value' })
    strength_value: string;
};