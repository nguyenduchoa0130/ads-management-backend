import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SurfaceTypeModule } from './modules/surface-type/surface-type.module';
import { SpaceTypeModule } from './modules/space-type/space-type.module';
import { SpaceFormatsModule } from './modules/space-format/space-formats.module';
import { ReportFormatsModule } from './modules/report-format/report-formats.module';
import { CompanyModule } from './modules/company/company.module';
import { ReportModule } from './modules/report/report.module';




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
    SurfaceTypeModule,
    SpaceTypeModule,
    SpaceFormatsModule,
    CompanyModule,
    ReportFormatsModule,
    ReportModule
  
    
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
