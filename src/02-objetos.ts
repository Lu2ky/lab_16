export interface Encargo {
    titulo: string;
    precio: number;
    listo: boolean;
    nota?: string;
}

const marco: Encargo = {
    titulo: "Marco de ventana",
    precio: 45000,
    listo: false,
    nota: "Medidas en cm",
    //cliente: "ana",
};
const puerta: Encargo = {
    titulo: "Puerta de closet",
    precio: 120000,
    listo: true,
};
/*
const incompleto: Encargo = {
    titulo: "Marco de ventana",
    listo: false,
};
*/
console.log(marco.titulo);
console.log(marco.precio);
console.log(puerta.titulo);
console.log(puerta.precio);
