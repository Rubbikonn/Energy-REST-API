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

    @Column({ name: 'user_password' })
    password: string;

    @OneToMany(() => UserEvaluativePoints, (userEvaluativePoints) => userEvaluativePoints.user_id, {
        onDelete: 'CASCADE'
    })
    userEvaluativePoints: UserEvaluativePoints[];

    @OneToMany(() => UserPersonalStrength, (userPeronalStrength) => userPeronalStrength.user_id, {
       onDelete: 'CASCADE'
    })
    userPersonalStrength: UserPersonalStrength[];

    @OneToMany(() => UserHealthVision, (userHealthVision) => userHealthVision.user_id, {
        onDelete: 'CASCADE'
    })
    userHealthVision: UserHealthVision[];

    @OneToMany(() => NewFoodItem, (newFoodItem) => newFoodItem.user_id, {
        onDelete: 'CASCADE'
    })
    newFoodItem: NewFoodItem[];
};
