import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // ✅ Opción recomendada: define el email como propiedad (evita el problema del @ en HTML)
  email = 'contacto@canetevivencial.pe';

  onSubmit(form: any) {
    if (form.valid) {
      alert('¡Gracias por tu mensaje!');
      form.reset();
    }
  }
}