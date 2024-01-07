// app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { GmailService } from './gmail.service';


@Controller('api/gmail')
export class GmailController {
  constructor(private readonly gmailService: GmailService) {}

  @Get()
  async sendEmail() {
    try {
      await this.gmailService.sendMail(
        'tdhuy.it@gmail.com',
        'Yêu cầu xác nhận bằng email OTP',
        './reset-password',
        {
         username:"Trần Đình Huy",
         otpCode: "0563"
        }
      );
      return { message: 'Email sent successfully!' };
    } catch (error) {
      return `Failed to send email: ${error.message}`;
    }
  }
}
