export interface Encargo {
    titulo: string;
    precio: number;
    listo: boolean;
    nota?: string;
}

class EncargoRegistrado implements Encargo {
    public titulo: string;
    precio: number;
    listo: boolean;
    nota?: string;
    protected codigo: string;
    private notaInterna: string;

    constructor(titulo: string, precio: number) {
        this.titulo = titulo;
        this.precio = precio;
        this.listo = false;
        this.codigo = "T-1";
        this.notaInterna = "taller";
    }
    marcarListo(): void {
        this.listo = true;
    }
    describir(): void {
        console.log(this.titulo + " listo=" + this.listo);
    }
}
class EncargoUrgente extends EncargoRegistrado {
    constructor(titulo: string, precio: number) {
        super(titulo, precio);
        this.codigo = "URG-1";
    }
    leerCodigo(): string {
        return this.codigo;
    }
}

const marco = new EncargoRegistrado("Marco de ventana", 45000);
const puerta = new EncargoRegistrado("Puerta de closet", 120000);
const urgente = new EncargoUrgente("Marco de ventana", 45000);
marco.marcarListo();

marco.describir();
puerta.describir();
console.log(urgente.leerCodigo());
