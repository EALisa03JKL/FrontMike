import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  horarios = [
    { carrera: 'Ingeniería en Software', grupo: '4-01', aula: '101', horainicio: '14:00', horafin:'15:00', materia: 'Innovación de Procesos con NTIC', maestro: 'José Mendívil' },
  ];

  jefesGrupo = ['Carlos Pérez'];
  maestros = ['José Mendívil', 'María López'];
  materias = ['Innovación de Procesos con NTIC'];

  nuevoHorario = { carrera: '', grupo: '', aula: '', horainicio: '', horafin:'', materia: '', maestro: '' };
  nuevoJefe = '';
  nuevoMaestro = '';
  nuevaMateria = '';

  agregarHorario() {
    this.horarios.push({ ...this.nuevoHorario });
    this.nuevoHorario = { carrera: '', grupo: '', aula: '', horainicio: '', horafin:'', materia: '', maestro: '' };
  }

  eliminarHorario(index: number) {
    this.horarios.splice(index, 1);
  }

  agregarJefe() {
    this.jefesGrupo.push(this.nuevoJefe);
    this.nuevoJefe = '';
  }

  agregarMaestro() {
    this.maestros.push(this.nuevoMaestro);
    this.nuevoMaestro = '';
  }

  agregarMateria() {
    this.materias.push(this.nuevaMateria);
    this.nuevaMateria = '';
  }
}
