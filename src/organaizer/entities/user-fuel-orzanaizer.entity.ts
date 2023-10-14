import { ApiProperty } from "@nestjs/swagger";
import { CreateFoodCategory } from "src/nutrition/entities/create-food-category.entity";
import { NewFoodItem } from "src/nutrition/entities/new-food-item.entity";
import { User } from "src/user/entities/user.entity";
import { 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne,
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity()
export class UserFuelOrganaizer {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    @PrimaryGeneratedColumn({ name: 'fuel_log_id' })
    fuelLogId: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id'})
    userId: User;
    
    @ApiProperty({example: 'Завтрак', description: "Наименование приёма пищи"})
    @Column({ name: 'meal_time' })
    mealTime: string;

    @ManyToOne(() => NewFoodItem, (newFoodItem) => newFoodItem.foodItemId, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({ name: 'food_item'})
    foodItemId: NewFoodItem;

    @ApiProperty({example: 'true', description: "Текщий статус (съедено или нет)"})
    @Column({ name: 'eaten_status', default: false })
    eatenStatus: boolean;

    @ApiProperty({example: '2017-06-01', description: "Установленная дата для этого события"})
    @Column({ name: 'date' })
    date: string;

    @ApiProperty({example: 'Кружка 350 мл', description: "Установленная упаковка/посуда/сервировка для данной порции"})
    @Column({ name: 'serving' })
    serving: string;

    @ManyToOne(() => CreateFoodCategory, (createFoodCategory) => createFoodCategory.foodCategoryId, { eager: true })
    @JoinColumn({ name: 'food_category_id' })
    foodCategoryId: CreateFoodCategory;
};

// @JoinTable({ 
//     name: 'create_food_category',
//     joinColumn: { name: 'food_category_id' }
// })

// @JoinColumn({name: 'food_category_name'})

// {
//     cascade: true,
//     eager: true
// }