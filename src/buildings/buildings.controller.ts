import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { Building } from './entities/building.entity';
import { CreateBuildingDto } from './dto/create-building.dto';

@Controller('buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}

  @Get()
  findAll(): Building[] {
    let tousLesBatiments = this.buildingsService.findAll();
    return tousLesBatiments;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Building {
    let unBatiment = this.buildingsService.findOne(id);
    return unBatiment;
  }

  @Post()
  create(@Body() donneesRecues: CreateBuildingDto): Building {
    let nouveauBatiment = this.buildingsService.create(donneesRecues);
    return nouveauBatiment;
  }
}
