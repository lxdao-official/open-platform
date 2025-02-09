import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetPoolDetailsDto {
  @ApiProperty({
    description: 'lxdao project id',
    required: true,
  })
  @IsNotEmpty({ message: 'projectId is required' })
  @IsString()
  projectId: string;

  @ApiProperty({
    description:
      'timestamp, only support 10 digits for seconds like 1735660800, 13 digits for milliseconds like 1735660800000',
    required: true,
  })
  @IsNotEmpty({ message: 'timestampGte is required' })
  @IsString()
  timestampGte: string;
}
