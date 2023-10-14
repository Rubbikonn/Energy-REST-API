import { User } from "src/user/entities/user.entity";
import { UserFuelOrganaizer } from "../entities/user-fuel-orzanaizer.entity";
import { CreateFoodCategory } from "src/nutrition/entities/create-food-category.entity";

export interface existentFoodItem {
    foodItemId: number,
    userId: User,
    foodCategoryId: CreateFoodCategory,
    foodItemName: string,
    kCalQuantity: number,
    fatQuantity: number,
    proteinQuantity: number,
    carbohydQuantity: number,
    unit: number,
    portionSize: number,
    manufacturer: string,
    userFuelOrganaizer?: UserFuelOrganaizer[];
}