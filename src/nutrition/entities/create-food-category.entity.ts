import { ApiProperty } from "@nestjs/swagger";
import { 
    Column,
    Entity, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity()
export class CreateFoodCategory {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    @PrimaryGeneratedColumn({ name: 'food_category_id' })
    food_category_id: number;

    @ApiProperty({example: 'Feel best', description: "Уникальная категория для каждого продукта питания"})
    @Column({ name: 'food_category_title' })
    food_category_title: string; 
};
