import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { BuildingsModule } from './buildings/buildings.module';

@Module({
  imports: [HealthModule, BuildingsModule],
})
export class AppModule {}
