export interface Encargo {
    titulo: string;
    precio: number;
    listo: boolean;
    nota?: string;
}

function total(precios: number[]): number {
    let suma: number = 0;
    for (const precio of precios) {
        suma = suma + precio;
    }
    //return "listo";
    return suma;
}
function describir(encargo: Encargo): string {
    const estado = encargo.listo ? "listo" : "pendiente";
    return encargo.titulo + ": " + encargo.precio + " (" + estado + ") ";
}
const precios: number[] = [45000, 12000, 8000];
const marco: Encargo = {
    titulo: "Marco de ventana",
    precio: 45000,
    listo: false,
};
console.log(total(precios));
console.log(describir(marco));
