import { Component } from '@angular/core';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Experience {
  id: number;
  title: string;
  description: string;
  type: 'aventura' | 'cultural' | 'gastronomia' | 'relax';
  district: string;
  image: string;
  price: string;
}

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    TitleCasePipe,
    FormsModule,      // para ngModel
    RouterModule      // para routerLink
  ],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  experiences: Experience[] = [
    {
      id: 1,
      title: 'Aventura en el Río Cañete',
      description: 'Emoción y adrenalina en el río.',
      type: 'aventura',
      district: 'San Vicente',
      image: 'https://blog.viajesmachupicchu.travel/wp-content/uploads/2025/06/lunahuana-portada-1170x550.jpg',
      price: 'S/ 80'
    },
    {
      id: 2,
      title: 'Sabores de Lunahuaná',
      description: 'Degustación de vinos y piscos.',
      type: 'gastronomia',
      district: 'Lunahuaná',
      image: 'https://lamula.pe/media/uploads/c85cc44d-69d1-4067-bb14-d4bb92e3ea37.jpg',
      price: 'S/ 60'
    },
    {
      id: 3,
      title: 'Atardecer en Cerro Azul',
      description: 'Relajación frente al mar.',
      type: 'relax',
      district: 'Cerro Azul',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/97/2e/71/sunset-at-cerro-azul.jpg?w=1200&h=-1&s=1',
      price: 'S/ 40'
    },
    {
      id: 4,
      title: 'Cultura en Mala',
      description: 'Visita a sitios arqueológicos y museos locales.',
      type: 'cultural',
      district: 'Mala',
      image: 'https://i.ytimg.com/vi/N2L18_wnyZ4/hqdefault.jpg',
      price: 'S/ 70'
    }
  ];

  selectedType: string = '';
  selectedDistrict: string = '';

  get filteredExperiences() {
    return this.experiences.filter(exp => {
      const matchesType = !this.selectedType || exp.type === this.selectedType;
      const matchesDistrict = !this.selectedDistrict || exp.district === this.selectedDistrict;
      return matchesType && matchesDistrict;
    });
  }

  resetFilters() {
    this.selectedType = '';
    this.selectedDistrict = '';
  }

  // ✅ Eliminamos `applyFilter()` porque no es necesario:
  // El binding con `[(ngModel)]` ya actualiza los valores,
  // y `filteredExperiences` es una propiedad computada (getter),
  // así que se actualiza automáticamente.
}