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
export class UserEvaluativePoints {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    @PrimaryGeneratedColumn({ name: 'point_id' })
    point_id: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    user_id: User

    @ApiProperty({example: 'Systolic blood pressure', description: "Название оценочного показателя"})
    @Column({ name: 'point_title' })
    point_title: string;

    @ApiProperty({example: 120, description: "Значение оценочного показателя"})
    @Column({ name: 'point_value' })
    point_value: number;
};