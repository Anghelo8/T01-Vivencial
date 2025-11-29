import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  // ✅ Declaramos la propiedad, pero NO la inicializamos aquí
  reservationForm: ReturnType<FormBuilder['group']>;

  constructor(private fb: FormBuilder) {
    // ✅ Inicializamos SOLO aquí, donde fb ya existe
    this.reservationForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      fecha: ['', Validators.required],
      personas: [1, [Validators.required, Validators.min(1)]],
      experiencia: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      alert('¡Gracias por tu reserva! Nos pondremos en contacto pronto.');
      this.reservationForm.reset({
        nombre: '',
        email: '',
        telefono: '',
        fecha: '',
        personas: 1,
        experiencia: ''
      });
    }
  }
}