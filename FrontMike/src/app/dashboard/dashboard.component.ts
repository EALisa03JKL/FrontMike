import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HorariosComponent } from '../horarios/horarios.component';
import { AdminPanelComponent } from "../admin-panel/admin-panel.component";
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LoginComponent, HorariosComponent, AdminPanelComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  isAuthenticated = false;
  role: string | null = null;

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.isAuthenticated = false;
    this.role = null;
    this.router.navigate(['/']);
  }

  handleLoginSuccess(userRole: string) {
    this.isAuthenticated = true;
    this.role = userRole;

    switch (userRole) {
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
        this.router.navigate(['/dashboard']);
    }
  }
}