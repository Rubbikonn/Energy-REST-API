import { 
    Column, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { UserEvaluativePoints } from "./user-evaluative-points.entity";
import { UserPersonalStrength } from "./user-personal-strength.entity";
import { UserHealthVision } from "./user-health-vision.entity";
import { NewFoodItem } from "src/nutrition/entities/new-food-item.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn({ name: 'user_id' })
    id: number;

    @Column({ name: 'user_login' })
    login: string;

    @Column({ name: 'user_role' })
    role: string;

    @Column({ name: 'user_password' })
    password: string;

    @OneToMany(() => UserEvaluativePoints, (userEvaluativePoints) => userEvaluativePoints.userId, {
        onDelete: 'CASCADE'
    })
    userEvaluativePoints: UserEvaluativePoints[];

    @OneToMany(() => UserPersonalStrength, (userPeronalStrength) => userPeronalStrength.userId, {
       onDelete: 'CASCADE'
    })
    userPersonalStrength: UserPersonalStrength[];

    @OneToMany(() => UserHealthVision, (userHealthVision) => userHealthVision.userId, {
        onDelete: 'CASCADE'
    })
    userHealthVision: UserHealthVision[];

    @OneToMany(() => NewFoodItem, (newFoodItem) => newFoodItem.userId, {
        onDelete: 'CASCADE'
    })
    newFoodItem: NewFoodItem[];
};
