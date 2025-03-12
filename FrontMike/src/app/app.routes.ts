import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HorariosComponent } from './horarios/horarios.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HorariosComponent }, // Página principal
      { path: 'login', component: LoginComponent }, // Login en ruta
      { path: 'admin', component: AdminPanelComponent },
     // { path: 'profesor', component: ProfesorComponent },
      //{ path: 'jefe', component: JefeGrupoComponent }
    ]
  },
  { path: '**', redirectTo: '' } // Redirección por defecto
];
