import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({
    description: 'it should be between 3 to 10 characters',
    example: 'Milad',
    nullable: true,
  })
  @IsString()
  @Length(3, 10)
  @IsOptional()
  firstName: string;

  @ApiProperty({
    description: 'it should be between 2 to 20 characters',
    example: 'Taghizadeh',
    nullable: true,
  })
  @IsString()
  @Length(3, 10)
  @IsOptional()
  lastName: string;

  @ApiProperty({
    description: 'it should be a valid phone number',
    example: '+989123456789',
    nullable: false,
  })
  @IsNotEmpty()
  @IsPhoneNumber('IR')
  @IsString()
  @Length(10, 13)
  phone: string;

  @ApiProperty({
    description: 'it should be between 5 to 100 characters',
    example: 'Taghizadeh',
    nullable: true,
  })
  @IsString()
  @Length(5, 100)
  @IsOptional()
  address: string;

  @ApiProperty({
    description: 'it should be Male or Female',
    example: 'Male',
    nullable: true,
  })
  @IsBoolean()
  @IsOptional()
  gender: boolean;

  @ApiProperty({
    description: 'it should be a valid email address',
    example: 'milad@hotmail.com',
    nullable: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'it should be a valid date format',
    example: '2024/03/03',
    nullable: true,
  })
  @IsDate()
  birthDate: string;
}
