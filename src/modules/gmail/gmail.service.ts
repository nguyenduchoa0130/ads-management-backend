// gmail.service.ts
import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import { google } from 'googleapis';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { Options } from 'nodemailer/lib/smtp-transport';

@Injectable()
export class GmailService {
  private readonly oauth2Client;

  constructor(private readonly configService: ConfigService,
    private readonly mailerService: MailerService) {

  }

  public async sendMail(to: string, subject: string, template: string, context: {}) {
    await this.setTransport();
    console.log(context);
    this.mailerService
      .sendMail({
        transporterName: 'gmail',
        to: to, // list of receivers
        from: 'yukihuy9999@gmail.com', // sender address
        subject: subject, // Subject line
        template: template,
        context: context,
        
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  private async setTransport() {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      this.configService.get('CLIENT_ID'),
      this.configService.get('CLIENT_SECRET'),
      'https://developers.google.com/oauthplayground',
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });


    const accessToken: string = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject('Failed to create access token');
          console.log(err);
        }
        resolve(token);
      });
    });

    const config: Options = {
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: this.configService.get('EMAIL'),
        clientId: this.configService.get('CLIENT_ID'),
        clientSecret: this.configService.get('CLIENT_SECRET'),
        accessToken,
      },
    };
    this.mailerService.addTransporter('gmail', config);
  }


}
