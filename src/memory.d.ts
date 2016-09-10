declare const Memory: Memory;

interface Memory {

  creeps: {[creepName: string]: CreepMemory};

  flags: {[flagName: string]: FlagMemory};

  rooms: {[roomName: string]: RoomMemory};

  spawns: {[spawnName: string]: SpawnMemory};

}

interface CreepMemory {
}

interface FlagMemory {
}

interface RoomMemory {
}

interface SpawnMemory {
}
