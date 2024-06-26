export class Tarea {
    constructor(nombre) {
        this.id = window.self.crypto.randomUUID();
        this.nombre = nombre
    }
}