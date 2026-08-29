import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { Building } from './entities/building.entity';
import { CreateBuildingDto } from './dto/create-building.dto';

@Controller('buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}

  // Cette fonction retourne tous les batiments
  @Get()
  findAll(): Building[] {
    let tousLesBatiments = this.buildingsService.findAll();
    return tousLesBatiments;
  }

  // Cette fonction retourne un seul batiment selon son id
  @Get(':id')
  findOne(@Param('id') id: string): Building {
    let idNombre = Number(id);
    let unBatiment = this.buildingsService.findOne(idNombre);
    return unBatiment;
  }

  // Cette fonction cree un nouveau batiment
  @Post()
  create(@Body() donneesRecues: CreateBuildingDto): Building {
    let nouveauBatiment = this.buildingsService.create(donneesRecues);
    return nouveauBatiment;
  }
}
