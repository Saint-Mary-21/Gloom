import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNumber, IsString } from "class-validator";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { User } from "src/users/entities/user.entity";

export class CreateProfessionalDto {

  @ApiProperty()
  @IsString()
  professionallicense: string;

  @ApiProperty()
  @IsNumber()
  tinnumber: number;

  @ApiProperty()
  @IsString()
  skill: string;

  @ApiProperty()
  userid: CreateUserDto;

}
 