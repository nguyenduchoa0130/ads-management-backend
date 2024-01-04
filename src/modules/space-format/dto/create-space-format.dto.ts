import { IsNotEmpty } from "class-validator";

export class CreateSpaceFormatDto {
  @IsNotEmpty()
  readonly name: string;
}
