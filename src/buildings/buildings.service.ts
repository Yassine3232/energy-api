import { Injectable, NotFoundException } from '@nestjs/common';
import { Building } from './entities/building.entity';
import { CreateBuildingDto } from './dto/create-building.dto';

@Injectable()
export class BuildingsService {
  private listeBatiments: Building[] = [];
  private prochainId = 1;

  findAll(): Building[] {
    return this.listeBatiments;
  }

  findOne(id: number): Building {
    let resultat: Building | null = null;

    for (let i = 0; i < this.listeBatiments.length; i++) {
      if (this.listeBatiments[i].id === id) {
        resultat = this.listeBatiments[i];
      }
    }

    if (resultat === null) {
      throw new NotFoundException('Le batiment ' + id + ' n\'existe pas');
    }

    return resultat;
  }

  create(donneesRecues: CreateBuildingDto): Building {
    let nouveauBatiment: Building = {
      id: this.prochainId,
      name: donneesRecues.name,
      address: donneesRecues.address,
      yearBuilt: donneesRecues.yearBuilt,
    };

    this.listeBatiments.push(nouveauBatiment);
    this.prochainId = this.prochainId + 1;

    return nouveauBatiment;
  }
}
