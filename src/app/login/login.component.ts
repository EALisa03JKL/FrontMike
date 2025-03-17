import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  @Output() loginSuccess = new EventEmitter<string>();

  constructor(private router: Router) {}

  login() {
    const users = [
      { username: 'admin', password: '1234', role: 'Administrador' },
      { username: 'profesor', password: '5678', role: 'Profesor' },
      { username: 'jefe', password: '91011', role: 'Jefe de Grupo' }
    ];

    const user = users.find(u => u.username === this.username && u.password === this.password);

    if (user) {
      this.loginSuccess.emit(user.role);

      switch (user.role) {
        case 'Administrador':
          this.router.navigate(['/admin']);
          break;
        case 'Profesor':
          this.router.navigate(['/profesor']);
          break;
        case 'Jefe de Grupo':
          this.router.navigate(['/jefe']);
          break;
        default:
          this.router.navigate(['/']);
      }
    } else {
      alert('❌ Credenciales incorrectas');
    }
  }
  regresarAHorarios() {
    this.router.navigate(['/']); // ✅ Redirección directa a la página principal (Dashboard + Horarios)
  }
}
