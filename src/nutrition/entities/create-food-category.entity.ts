import { ApiProperty } from "@nestjs/swagger";
import { 
    Column,
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { NewFoodItem } from "./new-food-item.entity";

@Entity()
export class CreateFoodCategory {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    @PrimaryGeneratedColumn({ name: 'food_category_id' })
    food_category_id: number;

    @ApiProperty({example: 'Feel best', description: "Уникальная категория для каждого продукта питания"})
    @Column({ name: 'food_category_title' })
    food_category_title: string; 

    @OneToMany(() => NewFoodItem, (newFoodItem) => newFoodItem.food_item_id, {
        onDelete: 'CASCADE'
    })
    newFoodItem: NewFoodItem[];
 
};
