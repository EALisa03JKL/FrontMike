import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jefe-grupo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jefe-grupo.component.html',
  styleUrl: './jefe-grupo.component.css'
})
export class JefeGrupoComponent {
  horarios = [
    { hora: '08:00 - 09:00', materia: 'Matemáticas', grupo: 'A1', aula: '101', tema: 'Álgebra' },
    { hora: '09:00 - 10:00', materia: 'Historia', grupo: 'A2', aula: '102', tema: 'Edad Media' },
    { hora: '10:00 - 11:00', materia: 'Química', grupo: 'B1', aula: '103', tema: 'Reacciones químicas' },
  ];

  marcarAsistencia(horario: any, asistio: boolean) {
    console.log(`Asistencia para ${horario.materia} a las ${horario.hora}: ${asistio ? 'Asistió' : 'No Asistió'}`);
    // Aquí puedes agregar la lógica para enviar la asistencia al backend
  }
}
