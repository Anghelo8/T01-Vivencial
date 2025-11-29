import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  {
    path: 'inicio',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },

  {
    path: 'reserva',
    loadComponent: () => import('./pages/reservation/reservation.component').then(m => m.ReservationComponent)
  },

  {
    path: 'experiencias',
    loadComponent: () => import('./pages/experiences/experiences.component').then(m => m.ExperiencesComponent)
  },

  {
    path: 'experiencia/:id',
    loadComponent: () => import('./pages/experience-detail/experience-detail.component').then(m => m.ExperienceDetailComponent)
  },

  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent)
  },

  {
    path: 'destinos',
    loadComponent: () => import('./pages/destinations/destinations.component').then(m => m.DestinationsComponent)
  },

  {
    path: 'destino/:id',
    loadComponent: () => import('./pages/destination-detail/destination-detail.component').then(m => m.DestinationDetailComponent)
  },

  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },

  {
    path: 'empresas',
    loadComponent: () => import('./pages/companies/companies.component').then(m => m.CompaniesComponent)
  },

  // Ruta comodín: debe ir al final
  { path: '**', redirectTo: '/inicio' }
];