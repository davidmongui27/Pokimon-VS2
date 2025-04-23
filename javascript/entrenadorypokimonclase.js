export class Pokimon {
    constructor(nombre, tipo, ataque, defensa, habilidad, evolucion) {
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.tipo = tipo;
        this.habilidad = habilidad;
        this.evolucion = evolucion;
    }
}

export class Entrenador {
    constructor(nombre, edad, ciudadpokimon, genero, nivel = 1) {
        this.nombre = nombre;
        this.edad = edad;
        this.nivel = nivel;
        this.ciudadpokimon = ciudadpokimon;
        this.genero = genero 
        this.pokimones = [];
    }

    agregarPokimon(pokimon) {
        this.pokimones.push(pokimon);
    }
}
