import { ApiProperty } from '@nestjs/swagger';
import { 
    Column,
    Entity, 
    PrimaryGeneratedColumn 
} from 'typeorm';

@Entity()
export class FoodItem {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    @PrimaryGeneratedColumn({ name: 'food_category_id' })
    food_item_id: number;

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
};