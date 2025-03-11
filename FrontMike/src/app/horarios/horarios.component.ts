import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
  grupo = '';
  carrera = '';
  maestro = '';

  horarios = [
    { carrera: 'Ingeniería en Software', grupo: '4-01', aula: '101', hora: '14:00 - 15:00', materia: 'Innovación de Procesos con NTIC', maestro: 'M.I.A. José Miguel Mendívil Torres' },
    { carrera: 'Ingeniería en Software', grupo: '4-01', aula: '102', hora: '15:00 - 16:00', materia: 'Grafiación con laboratorio', maestro: 'Dr. Herman Geovany Ayala Zuñiga' },
    { carrera: 'Ingeniería Civil', grupo: '3-02', aula: '201', hora: '16:00 - 17:00', materia: 'Mecánica de Suelos', maestro: 'Ing. Roberto Fernández' },
    { carrera: 'Ingeniería Civil', grupo: '3-02', aula: '202', hora: '17:00 - 18:00', materia: 'Estructuras de Concreto', maestro: 'Ing. Laura Gutiérrez' },
    { carrera: 'Geodesia', grupo: '2-01', aula: '301', hora: '14:00 - 15:00', materia: 'Cartografía y Georreferenciación', maestro: 'M.C. Julio Ramírez' },
    { carrera: 'Geodesia', grupo: '2-01', aula: '302', hora: '15:00 - 16:00', materia: 'Sistemas de Información Geográfica', maestro: 'Dr. Carmen López' },
    { carrera: 'Procesos Industriales', grupo: '5-03', aula: '401', hora: '16:00 - 17:00', materia: 'Gestión de Calidad', maestro: 'Ing. Alejandro Torres' },
    { carrera: 'Procesos Industriales', grupo: '5-03', aula: '402', hora: '17:00 - 18:00', materia: 'Seguridad Industrial', maestro: 'Ing. María González' },
    { carrera: 'Nanotecnología', grupo: '1-04', aula: '501', hora: '14:00 - 15:00', materia: 'Materiales Nanoestructurados', maestro: 'Dr. Ricardo Mendoza' },
    { carrera: 'Nanotecnología', grupo: '1-04', aula: '502', hora: '15:00 - 16:00', materia: 'Aplicaciones Biomédicas', maestro: 'Dra. Sofía Martínez' },
  ];

  get grupos() {
    return [...new Set(this.horarios.map(h => h.grupo))];
  }

  get carreras() {
    return [...new Set(this.horarios.map(h => h.carrera))];
  }

  get maestros() {
    return [...new Set(this.horarios.map(h => h.maestro))];
  }

  filtrarHorarios(carrera: string) {
    return this.horarios.filter(h =>
      h.carrera === carrera &&
      (this.grupo ? h.grupo === this.grupo : true) &&
      (this.maestro ? h.maestro === this.maestro : true)
    );
  }

  borrarFiltros() {
    this.carrera = '';
    this.grupo = '';
    this.maestro = '';
  }
}
