export type EstadoTarea = "Pendiente"|"En proceso" |"Completada";
export interface Tarea {
    id: number,
    titulo: string,
    descripcion: string,
    estado: EstadoTarea
} 