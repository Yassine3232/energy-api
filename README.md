# energy-api

API NestJS pour la collecte et l’interprétation de données énergétiques. Ce premier incrément met en place l’architecture initiale : préfixe global `/api`, route de santé, et gestion des bâtiments en mémoire.

## Prérequis

- Node.js
- npm
- Git

Les dépendances se installent avec :

```bash
npm install
```

## Démarrage

```bash
npm run start:dev
```

L’API écoute sur le port `3000` par défaut, ou sur `PORT` si cette variable d’environnement est définie.

## Endpoints

| Méthode | Endpoint | Code | Résultat |
| --- | --- | --- | --- |
| `GET` | `/api/health` | `200` | État de l’API |
| `GET` | `/api/buildings` | `200` | Liste de tous les bâtiments |
| `POST` | `/api/buildings` | `201` | Crée et retourne un bâtiment |
| `GET` | `/api/buildings/:id` | `200` / `404` | Un bâtiment, ou une erreur s’il n’existe pas |

Exemple de création :

```bash
curl -i -X POST http://localhost:3000/api/buildings \
  -H "Content-Type: application/json" \
  -d "{
    \"name\": \"Pavillon principal\",
    \"address\": \"7000, rue Marie-Victorin\",
    \"yearBuilt\": 2005
  }"
```

## Stockage temporaire

Les bâtiments sont conservés en mémoire dans le service. Ils disparaissent au redémarrage de l’application. Aucune base de données n’est utilisée à cette étape.

## Structure

```
src/
├── main.ts
├── app.module.ts
├── health/
│   ├── health.controller.ts
│   └── health.module.ts
└── buildings/
    ├── dto/
    │   └── create-building.dto.ts
    ├── entities/
    │   └── building.entity.ts
    ├── buildings.controller.ts
    ├── buildings.module.ts
    └── buildings.service.ts
```
