import { 
    Column, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { UserEvaluativePoints } from "./user-evaluative-points.entity";
import { UserPeronalStrength } from "./user-personal-strength.entity";
import { UserHealthVision } from "./user-health-vision.entity";

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

    @OneToMany(() => UserPeronalStrength, (userPeronalStrength) => userPeronalStrength.user, {
       onDelete: 'CASCADE'
    })
    userPersonalStrength: UserPeronalStrength[];

    @OneToMany(() => UserHealthVision, (userHealthVision) => userHealthVision.user, {
        onDelete: 'CASCADE'
    })
    userHealthVision: UserHealthVision[];
}
