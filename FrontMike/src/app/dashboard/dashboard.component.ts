import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HorariosComponent } from '../horarios/horarios.component';
import { AdminPanelComponent } from "../admin-panel/admin-panel.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LoginComponent, HorariosComponent, AdminPanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isAuthenticated = false;
  showLogin = false;
  role = '';

  handleLoginSuccess(userRole: string) {
    this.isAuthenticated = true;
    this.showLogin = false;
    this.role = userRole;
  }

  logout() {
    this.isAuthenticated = false;
    this.role = '';
    this.showLogin = false; // ✅ Vuelve a la vista de horarios
  }

  toggleLogin() {
    this.showLogin = !this.showLogin; // ✅ Alternar entre Login y Horarios
  }
}
