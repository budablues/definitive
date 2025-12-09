import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {  // ← NOMBRE CORREGIDO
  contactForm: FormGroup;
  submitted = false;
  successMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      ciudad: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{7,15}$')]],
      mensaje: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  // Getter para facilitar el acceso a los controles en el template
  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      const datos = this.contactForm.value;
      
      // Añadir fecha y hora
      const datosCompletos = {
        ...datos,
        fecha: new Date().toISOString(),
        timestamp: Date.now()
      };

      // Crear y descargar JSON
      const blob = new Blob([JSON.stringify(datosCompletos, null, 2)], {
        type: 'application/json'
      });

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `contacto_${Date.now()}.json`;
      a.click();

      window.URL.revokeObjectURL(url);

      // Mensaje de éxito
      this.successMessage = '¡Formulario enviado correctamente! Se ha descargado el archivo JSON.';
      
      // Reset después de 5 segundos
      setTimeout(() => {
        this.contactForm.reset();
        this.submitted = false;
        this.successMessage = '';
      }, 5000);
    }
  }

  cancelar() {
    if (confirm('¿Estás seguro de que quieres cancelar? Se perderán los datos.')) {
      this.contactForm.reset();
      this.submitted = false;
      this.successMessage = '';
    }
  }
}