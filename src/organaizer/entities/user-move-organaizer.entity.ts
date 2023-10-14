import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";
import { 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity()
export class UserMoveOrganaizer {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    @PrimaryGeneratedColumn({ name: 'move_log_id' })
    moveLogId: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    userId: User;

    @ApiProperty({example: 'Утреняя пробежка', description: "Наименование активности"})
    @Column({ name: 'movement_description' })
    movementDescription: string;

    @ApiProperty({example: 'True', description: "Текущий статус (выполнено или нет)"})
    @Column({ name: 'completion_status', default: false })
    completionStatus: boolean;

    @ApiProperty({example: '2017-06-01', description: "Установленная дата для этого события"})
    @Column({ name: 'date' })
    date: string;
};