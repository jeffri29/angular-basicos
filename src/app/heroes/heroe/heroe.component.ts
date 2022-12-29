import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    nombre: string = 'Jeffri';
    edad: number = 29;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad} - ${this.nombreCapitalizado}`;
    }

    cambiarNombre(): void{
        this.nombre = 'Juana Matos';
    }

    cambiarEdad(): void{
        this.edad = 22;
    }

    
}