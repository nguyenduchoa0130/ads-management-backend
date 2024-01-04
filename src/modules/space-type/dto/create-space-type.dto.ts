import { IsNotEmpty } from "class-validator";

export class CreateSpaceTypeDto {

  @IsNotEmpty()
  name: string;

}
