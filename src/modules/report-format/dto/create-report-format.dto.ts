import { IsNotEmpty } from "class-validator";

export class CreateReportFormatDto {
  @IsNotEmpty()
  name: string
}
