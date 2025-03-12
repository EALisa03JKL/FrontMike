import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// 🔹 Interfaz para definir la estructura del usuario
interface Usuario {
  username: string;
  password: string;
  nombreCompleto: string;
  estado: string;
  rol: string;
  numeroEmpleado?: string;
  materiasImparte?: string[];
  numeroCuenta?: string;
  carrerasAsignadas?: string[];
  editando?: boolean;
}

// 🔹 Interfaz específica para Jefes de Grupo
interface JefeDeGrupo {
  nombre: string;
  carrerasAsignadas: string[];
}
@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})



export class AdminPanelComponent {
  
  // 🔹 Secciones del Panel
  seccionActiva = 'usuarios';

  // 🔹 Gestión de Usuarios
  usuarios: Usuario[] = [
    { 
      username: 'admin', 
      password: '1234', 
      nombreCompleto: 'Juan Pérez López', 
      estado: 'Activo', 
      rol: 'Administrador',
      editando: false
    },
    { 
      username: 'profesor01',
      password: 'abcd',
      nombreCompleto: 'María García',
      estado: 'Activo',
      rol: 'Profesor',
      numeroEmpleado: 'P001',
      materiasImparte: ['Matemáticas', 'Física'],
      editando: false
    },
    {
      username: 'jefe01',
      password: '5678',
      nombreCompleto: 'Carlos Méndez',
      estado: 'Activo',
      rol: 'Jefe de Grupo',
      numeroCuenta: 'CU123456',
      carrerasAsignadas: ['Ingeniería en Software', 'Geodesia'],
      editando: false
    }
  ];

  // 🔹 Estructura del nuevo usuario para agregar
  nuevoUsuario: Usuario = {
    username: '',
    password: '',
    nombreCompleto: '',
    estado: 'Activo',
    rol: '',
    numeroEmpleado: '',
    materiasImparte: [],
    numeroCuenta: '',
    carrerasAsignadas: [],
    editando: false
  };

  // 🔹 Gestión de Materias
  materias = ['Innovación de Procesos con NTIC', 'Grafos', 'Mecánica de Suelos'];
  nuevaMateria = '';

  // 🔹 Gestión de Maestros
  maestros = [
    { nombre: 'José Mendívil', numeroEmpleado: '001', materias: ['Innovación de Procesos con NTIC'] }
  ];
  nuevoMaestro = { nombre: '', numeroEmpleado: '', materias: [] };

  // 🔹 Gestión de Jefes de Grupo
  carreras = ['Ingeniería en Software', 'Geodesia'];
  jefesGrupo: JefeDeGrupo[] = [
    { nombre: 'Carlos Pérez', carrerasAsignadas: ['Ingeniería en Software'] }
  ];

  // 🔹 Gestión de Asistencias
  asistencias = [
    { maestro: 'José Mendívil', fecha: '2024-03-12', estado: 'Presente' },
    { maestro: 'María López', fecha: '2024-03-12', estado: 'Ausente' }
  ];

  // 🔹 Mapa para almacenar temporalmente el respaldo de cada usuario en edición
  private backupData = new Map<string, Usuario>();

  // 🔹 Métodos para cambiar de sección
  cambiarSeccion(seccion: string) {
    this.seccionActiva = seccion;
  }

  // 🔹 Método para agregar datos según la sección activa
  agregarDato() {
    if (this.seccionActiva === 'usuarios') {
      const nuevoUsuarioCopia = { ...this.nuevoUsuario };

      if (nuevoUsuarioCopia.rol !== 'Profesor') {
        nuevoUsuarioCopia.numeroEmpleado = '';
        nuevoUsuarioCopia.materiasImparte = [];
      }

      if (nuevoUsuarioCopia.rol !== 'Jefe de Grupo') {
        nuevoUsuarioCopia.numeroCuenta = '';
        nuevoUsuarioCopia.carrerasAsignadas = [];
      }

      this.usuarios.push(nuevoUsuarioCopia);
      this.resetearNuevoUsuario();
    }

    if (this.seccionActiva === 'materias') {
      if (this.nuevaMateria.trim()) {
        this.materias.push(this.nuevaMateria);
        this.nuevaMateria = ''; // Limpiar campo
      }
    }

    if (this.seccionActiva === 'maestros') {
      const nuevoMaestroCopia = { ...this.nuevoMaestro };
      this.maestros.push(nuevoMaestroCopia);
      this.nuevoMaestro = { nombre: '', numeroEmpleado: '', materias: [] };
    }

    if (this.seccionActiva === 'jefes') {
      const nuevoJefe: JefeDeGrupo = {
        nombre: this.nuevoUsuario.nombreCompleto,
        carrerasAsignadas: this.nuevoUsuario.carrerasAsignadas || []
      };
      this.jefesGrupo.push(nuevoJefe);
    }
  }

  // 🔹 Activar el modo edición en un usuario
  activarEdicion(usuario: Usuario) {
    usuario.editando = true;
    this.backupData.set(usuario.username, { ...usuario }); // Se crea un respaldo en el mapa
  }

  // 🔹 Guardar los cambios del usuario
  guardarCambios(usuario: Usuario) {
    usuario.editando = false;
    this.backupData.delete(usuario.username); // Eliminar respaldo tras guardar
  }

  // 🔹 Cancelar edición y restaurar datos originales
  cancelarEdicion(usuario: Usuario) {
    const backup = this.backupData.get(usuario.username);
    if (backup) {
      Object.assign(usuario, backup);  // Restaurar datos originales
    }
    usuario.editando = false;
    this.backupData.delete(usuario.username);
  }

  // 🔹 Mostrar campos adicionales en cada usuario individualmente
  mostrarDetalles: { [key: string]: boolean } = {};

  toggleDetalles(username: string) {
    this.mostrarDetalles[username] = !this.mostrarDetalles[username];
  }

  eliminarUsuario(index: number) {
    this.usuarios.splice(index, 1);
  }

  resetearNuevoUsuario() {
    this.nuevoUsuario = {
      username: '',
      password: '',
      nombreCompleto: '',
      estado: 'Activo',
      rol: '',
      numeroEmpleado: '',
      materiasImparte: [],
      numeroCuenta: '',
      carrerasAsignadas: [],
      editando: false
    };
  }

  
}
