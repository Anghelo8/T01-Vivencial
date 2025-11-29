import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css']
})
export class DestinationDetailComponent implements OnInit {
  id = '';
  title = '';
  description = '';
  image = '';
  activities: string[] = [];

  private destinationsData: any = {
    'playa-san-andres': {
      title: 'Playa San Andrés',
      description: 'Ubicada a solo 20 minutos del centro de San Vicente de Cañete, esta playa es conocida por sus aguas tranquilas y su ambiente familiar. Ideal para llevar niños, practicar caminatas al atardecer o disfrutar de un día de sol sin aglomeraciones.',
      image: 'https://peru.info/images/2021/04/01/Playa-San-Andres-Cañete-768x512.jpg',
      activities: [
        'Nadar en aguas tranquilas',
        'Paseos en bote',
        'Degustar ceviche en restaurantes locales',
        'Fotografía al atardecer'
      ]
    },
    'valle-lunahuana': {
      title: 'Valle de Lunahuaná',
      description: 'A una hora de Cañete, este valle es famoso por sus viñedos, aventura y clima cálido. Es el lugar perfecto para practicar rafting, canopy o simplemente relajarse en una bodega disfrutando de un buen vino.',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/3f/valle-de-lunahuan%C3%A1.jpg?w=1200&h=1200&s=1',
      activities: [
        'Rafting en el río Cañete',
        'Visita a bodegas artesanales',
        'Canopy y tirolesa',
        'Degustación de piscos y vinos'
      ]
    },
    'termas-santa-rosa': {
      title: 'Termas de Santa Rosa',
      description: 'Aguas termales naturales con temperaturas que oscilan entre 35°C y 40°C, ricas en minerales. Un lugar ideal para la relajación y terapias naturales en medio de la naturaleza.',
      image: 'https://www.mincetur.gob.pe/wp-content/uploads/2020/02/termas-santa-rosa-1024x683.jpg',
      activities: [
        'Baños termales',
        'Masajes relajantes',
        'Senderismo ligero',
        'Picnic en zonas verdes'
      ]
    }
  };

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    const data = this.destinationsData[this.id] || this.destinationsData['playa-san-andres'];
    this.title = data.title;
    this.description = data.description;
    this.image = data.image;
    this.activities = data.activities;
  }

  constructor(private route: ActivatedRoute) {}
}