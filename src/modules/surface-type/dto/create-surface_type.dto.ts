import { IsNotEmpty } from "class-validator";

export class CreateSurfaceTypeDto {
  @IsNotEmpty()
  readonly name: string
}
