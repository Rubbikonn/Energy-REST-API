import { ApiProperty } from "@nestjs/swagger";
import { 
    IsBoolean,
    IsNotEmpty, 
    IsString 
} from "class-validator";

export class UserMoveOrganaizerDto {
    @ApiProperty({example: 1, description: "Уникальный идентификатор"})
    moveLogId: number;

    @ApiProperty({example: 'Утренняя пробежка', description: "Наименование активости"})
    @IsNotEmpty({ message:'Данное поле является обязательным для заполнения' })
    @IsString()
    movementDescription: string;

    @ApiProperty({example: 'true', description: "Выполнено или нет (true/false)"})
    @IsBoolean()
    completionStatus: boolean;
};