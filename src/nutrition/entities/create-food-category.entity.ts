import { ApiProperty } from "@nestjs/swagger";
import { 
    Column,
    Entity, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { NewFoodItem } from "./new-food-item.entity";
import { UserFuelOrganaizer } from "src/organaizer/entities/user-fuel-orzanaizer.entity";

@Entity()
export class CreateFoodCategory {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    @PrimaryGeneratedColumn({ name: 'food_category_id' })
    foodCategoryId: number;

    @ApiProperty({example: 'Feel best', description: "Уникальная категория для каждого продукта питания"})
    @Column({ name: 'food_category_title' })
    foodCategoryTitle: string; 

    @OneToMany(() => NewFoodItem, (newFoodItem) => newFoodItem.foodItemId, {
        onDelete: 'CASCADE'
    })
    newFoodItem: NewFoodItem[];

    // @ManyToOne(() => UserFuelOrganaizer, (userFuelOrganaizer) => userFuelOrganaizer.fuelLogId)
    // userFuelOrganaizer: UserFuelOrganaizer[];
};
