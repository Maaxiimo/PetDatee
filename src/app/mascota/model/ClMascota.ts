// export class ClProducto {
//   id: number;
//   nombre: string;
//   descripcion: string;
//   precio: number;
//   cantidad: number;
//   fecha: Date;
//     constructor(values: Object= {}){
//         Object.assign(this, values);
//     }
// }
export class ClProducto {
    // si no Inicializo los valores, da Error
    // Por eso es el constructor por obligación
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    fecha: Date;
    rut: string;
    enfermedad: boolean;
    fono: number;
    categoria: boolean;
    raza: boolean;
    vacunas: boolean;
    edad: number;
    genero: boolean;
    estado: boolean;
    lote: number;
    fechavv: string;
    fechann: string;
    peso: string;
    altura: string;
    horainicio: number;
    horatermino: number;
    direccion: string;

  
    // si no Inicializo los valores, da Error
      constructor(obj: any){
          this.id = obj && obj.id || null
          this.nombre = obj && obj.nombre || null
          this.descripcion = obj && obj.descripcion || null
          this.precio = obj && obj.precio || null
          this.cantidad = obj && obj.cantidad || null
          this.fecha = obj && obj.fecha || null
          this.rut = obj && obj.rut || null
          this.enfermedad = obj && obj.enfermedad || null
          this.fono = obj && obj.fono || null
          this.categoria = obj && obj.categoria || null
          this.raza = obj && obj.raza || null
          this.vacunas = obj && obj.vacunas || null
          this.edad = obj && obj.edad || null
          this.genero = obj && obj.genero || null
          this.estado = obj && obj.estado || null
          this.lote = obj && obj.lote || null
          this.fechavv = obj && obj.fechavv || null
          this.fechann = obj && obj.fechann || null
          this.peso = obj && obj.peso || null
          this.altura = obj && obj.altura || null
          this.horainicio = obj && obj.horainicio || null
          this.horatermino = obj && obj.horatermino || null
          this.direccion = obj && obj.direccion || null

      }
  }
  