import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([{ path: '', component: DashboardComponent }])
  ]
};
