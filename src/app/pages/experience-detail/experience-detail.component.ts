import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Experience {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  type: string;
  district: string;
  image: string;
  price: string;
  includes: string[];
}

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {
  experience: Experience | null = null;

  // Datos simulados (en el futuro, vendrán de un servicio)
  private experiencesData: Experience[] = [
    {
      id: 1,
      title: 'Aventura en el Río Cañete',
      description: 'Emoción y adrenalina en el río.',
      fullDescription: 'Disfruta de una jornada inolvidable navegando por el río Cañete. Esta experiencia incluye guía local, equipo de seguridad y transporte desde San Vicente.',
      type: 'aventura',
      district: 'San Vicente',
      image: 'https://via.placeholder.com/800x400?text=Aventura+en+el+Río+Cañete',
      price: 'S/ 80',
      includes: ['Guía certificado', 'Chaleco salvavidas', 'Transporte', 'Snack local']
    },
    {
      id: 2,
      title: 'Sabores de Lunahuaná',
      description: 'Degustación de vinos y piscos.',
      fullDescription: 'Recorrido por viñedos y bodegas artesanales de Lunahuaná, con degustación guiada de vinos y piscos locales.',
      type: 'gastronomia',
      district: 'Lunahuaná',
      image: 'https://via.placeholder.com/800x400?text=Sabores+de+Lunahuana',
      price: 'S/ 60',
      includes: ['Degustación', 'Tour guiado', 'Recuerdo artesanal']
    }
    // Agrega más experiencias según necesites
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.experience = this.experiencesData.find(exp => exp.id === id) || null;
  }
}