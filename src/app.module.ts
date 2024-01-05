import { Logtail } from '@logtail/node';
import { LogtailTransport } from '@logtail/winston';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import * as winston from 'winston';
import 'winston-daily-rotate-file';
import { AuthModule } from './modules/auth/auth.module';
import { CompanyModule } from './modules/company/company.module';
import { DistrictsModule } from './modules/districts/districts.module';
import { ReportFormatsModule } from './modules/report-format/report-formats.module';
import { ReportModule } from './modules/report/report.module';
import { SpaceFormatsModule } from './modules/space-format/space-formats.module';
import { SpaceTypeModule } from './modules/space-type/space-type.module';
import { SpacesModule } from './modules/spaces/spaces.module';
import { SurfaceTypeModule } from './modules/surface-type/surface-type.module';
import { SurfacesModule } from './modules/surfaces/surfaces.module';
import { UsersModule } from './modules/users/users.module';
import { LoggerMiddleware } from './shared/middlewares/logger.middleware';
import { WardsModule } from './modules/wards/wards.module';
import { SpaceEditRequestsModule } from './modules/space-edit-requests/space-edit-requests.module';
import { SurfaceEditRequestsModule } from './modules/surface-edit-requests/surface-edit-requests.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
    DistrictsModule,
    SurfaceTypeModule,
    SpaceTypeModule,
    SpaceFormatsModule,
    CompanyModule,
    ReportFormatsModule,
    ReportModule,
    UsersModule,
    AuthModule,
    SurfacesModule,
    SpacesModule,
    WardsModule,
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('Ads Management', {
              colors: true,
              prettyPrint: true,
            }),
          ),
        }),
        new winston.transports.DailyRotateFile({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('Ads Management', {
              colors: true,
              prettyPrint: true,
            }),
          ),
          dirname: 'logs',
          filename: 'application-%DATE%.log',
          handleExceptions: true,
          json: false,
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '2d',
        }),
        // new LogtailTransport(new Logtail(process.env.LOGTAIL_TOKEN)),
      ],
      exitOnError: false,
    }),
    SpaceEditRequestsModule,
    SurfaceEditRequestsModule,
    ContractsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/'),
      serveRoot: '/public',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
