import { ApiProperty } from "@nestjs/swagger";
import { 
    IsBoolean, 
    IsDate, 
    IsNotEmpty, 
    IsString 
} from "class-validator";

export class UserFuelOrganaizerDto {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    fuelLogId: number;

    @ApiProperty({example: 'Завтрак', description: "Наименование приёма пищи"})
    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения' })
    @IsString()
    mealTime: string;

    @ApiProperty({example: 'true', description: "Съедено или же нет (true/false)"})
    @IsBoolean()
    eatenStatus: boolean;

    @ApiProperty({example: 'Кружка 350 мл', description: "Установленная упаковка/посуда/сервировка для данной порции"})
    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения' })
    @IsString()
    serving: string;
};
