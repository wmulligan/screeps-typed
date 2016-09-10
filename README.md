# screeps-typed

Based on https://github.com/screepers/Screeps-Typescript-Declarations, but heavily modified to support:
- TypeScript 2.0 Strict Nulls
- Full support to extend builtin classes
- Better usage of generics to avoid casting
- Added CPU cost to all method documentation
- More types for better error checking

## Install

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
```ts
declare namespace NodeJS {
  interface Global {
    TERRAIN_PLAIN: TerrainType;
    TERRAIN_SPAWN: TerrainType;
    TERRAIN_WALL: TerrainType;
  }
}

global.TERRAIN_PLAIN = 'plain'; // tslint:disable-line
global.TERRAIN_SWAMP = 'swamp'; // tslint:disable-line
global.TERRAIN_WALL = 'wall'; // tslint:disable-line
```

## How To

#### Extending Builtin Classes

Use interface merging to add your new properties and methods:
```ts
interface Creep {
  role: string;

  init(role: string): void;
  run(): void;
}
```

Then in another file, you can define the new methods:
```ts
Creep.prototype.init = function (this: Creep, role: string) {
  this.role = role;
  this.run();
};
```
or
```ts
class MyCreep extends Creep {
  init(role: string) {
    this.role = role;
    this.run();
  }
}
safeExtendPrototype(Creep, MyCreep);

function safeExtendPrototype(extended: any, extender: any) {
  let properties: string[] = Object.getOwnPropertyNames(extender.prototype);
  for (let i in properties) {
    if (!extended.prototype.hasOwnProperty(properties[i])) {
      Object.defineProperty(
        extended.prototype,
        properties[i],
        Object.getOwnPropertyDescriptor(extender.prototype, properties[i]));
    }
  }
}
```
