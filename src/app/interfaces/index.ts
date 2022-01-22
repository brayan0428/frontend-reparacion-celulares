export interface Cliente {
  id: number;
  nombre: string;
  telefono: string;
  celular: string;
  direccion: string;
  email: string;
}

export interface Telefono {
  id: number;
  marca: string;
  ano: string;
  id_cliente: number;
  cliente: Cliente;
}

export interface Reparacion {
  id: number;
  id_telefono: number;
  descripcion: string;
  valor: string;
  fecha: string;
  telefono: Telefono;
}
