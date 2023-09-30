import { ApiProperty } from '@nestjs/swagger';
import { 
    Column,
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn 
} from 'typeorm';
import { CreateFoodCategory } from './create-food-category.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class NewFoodItem {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    @PrimaryGeneratedColumn({ name: 'food_category_id' })
    food_item_id: number;

    @ApiProperty({type: () => User, example: 1, description: "Уникальный идентификатор пользователя"})
    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id' })
    user_id: User;

    // @ApiProperty({ type: () => Customer })

    @ApiProperty({type: () => CreateFoodCategory, example: 1, description: "Уникальный идентификатор пользователя"})
    @ManyToOne(() => CreateFoodCategory, (createFoodCategory) => createFoodCategory.food_category_id)
    @JoinColumn({ name: 'food_category_id' })
    food_category_id: CreateFoodCategory;

    @ApiProperty({example: 'Бананы', description: "Название продукта питания"})
    @Column({ name: 'food_item_name' })
    food_item_name: string;

    @ApiProperty({example: 0.089, description: "Количество киллокаллорий в данном продукте"})
    @Column("real", { name: 'kCal_quantity' })
    kCal_quantity: number;

    @ApiProperty({example: 0.3, description: "Количество грамм жира в продукте"})
    @Column("real", { name: 'fat_quantity' })
    fat_quantity: number;

    @ApiProperty({example: 1.1, description: "Количество грамм белка в продукте"})
    @Column("real", { name: 'protein_quantity' })
    protein_quantity: number;

    @ApiProperty({example: 23, description: "Количество грамм углеводов в продукте"})
    @Column("real", { name: 'carbohyd_quantity' })
    carbohyd_quantity: number;

    @ApiProperty({example: 2, description: "Количество порций"})
    @Column({ name: 'unit' })
    unit: number;

    @ApiProperty({example: 100, description: "Вес порции в граммах"})
    @Column({ name: 'portion_size' })
    portion_size: number;

    @ApiProperty({example: "ООО 'Весёлый молочник'", description: "Производитель продукта"})
    @Column({ name: 'manufacturer' })
    manufacturer: string;
};