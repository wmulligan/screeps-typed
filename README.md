# screeps-typed

#### Step 1
If you use [typings](https://github.com/typings/typings), add this to your typings.json:
```json
{
  "globalDependencies": {
    "screeps-typed": "github:wmulligan/screeps-typed#master"
  }
}
```

#### Step 2

Add these missing globals to your code:
```js
declare namespace NodeJS {
  interface Global {
    TERRAIN_PLAIN: TerrainType;
    TERRAIN_SPAWN: TerrainType;
    TERRAIN_WALL: TerrainType;
  }
}

global.TERRAIN_PLAIN = 'plain'; // tslint:disable-line
global.TERRAIN_SPAWN = 'swamp'; // tslint:disable-line
global.TERRAIN_WALL = 'wall'; // tslint:disable-line
```

## How To

#### Extending Builtin Classes

Use interface merging to add your new properties and methods:
```
interface Creep {
  role: string;

  init(role: string): void;
  run(): void;
}
```

Then in another file, you can define the new methods:
```js
Creep.prototype.init = function (this: Creep, role: string) {
  this.role = role;
  this.run();
};
```
