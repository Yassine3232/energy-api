import { Injectable, NotFoundException } from '@nestjs/common';
import { Building } from './entities/building.entity';
import { CreateBuildingDto } from './dto/create-building.dto';

@Injectable()
export class BuildingsService {
  private listeBatiments: Building[] = [];
  private prochainNumero = 1;

  findAll(): Building[] {
    return this.listeBatiments;
  }

  findOne(id: string): Building {
    let resultat: Building | null = null;

    this.listeBatiments.map((batiment) => {
      if (batiment.id === id) {
        resultat = batiment;
      }
    });

    if (resultat === null) {
      throw new NotFoundException('Le batiment ' + id + ' n\'existe pas');
    }

    return resultat;
  }

  create(donneesRecues: CreateBuildingDto): Building {
    let identifiant = 'bld-00' + this.prochainNumero;

    let nouveauBatiment: Building = {
      id: identifiant,
      name: donneesRecues.name,
      city: donneesRecues.city,
      createdAt: new Date().toISOString(),
    };

    this.listeBatiments.push(nouveauBatiment);
    this.prochainNumero = this.prochainNumero + 1;

    return nouveauBatiment;
  }
}
