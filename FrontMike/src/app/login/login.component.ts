import { Component, EventEmitter, Output } from '@angular/core';
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
  role = '';

  @Output() loginSuccess = new EventEmitter<string>(); // ✅ Emitimos el rol del usuario

  login() {
    // 🔹 Simulación de roles basados en usuario/contraseña
    const users = [
      { username: 'admin', password: '1234', role: 'Administrador' },
      { username: 'profesor', password: '5678', role: 'Profesor' },
      { username: 'jefe', password: '91011', role: 'Jefe de Grupo' }
    ];

    const user = users.find(u => u.username === this.username && u.password === this.password);

    if (user) {
      this.loginSuccess.emit(user.role); // ✅ Enviamos el rol al dashboard
    } else {
      alert('❌ Credenciales incorrectas');
    }
  }
}
