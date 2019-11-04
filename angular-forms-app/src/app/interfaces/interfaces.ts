export interface Usuario {
    nombrecompleto: {
        nombre: string,
        apellido: string
    };
    correo: string;
    pasatiempos: Array<string>;
    nacionalidad: string;
}