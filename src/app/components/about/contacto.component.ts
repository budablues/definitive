import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ContactForm } from '../../models/conctact.model';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitted = false;
  submittedMessage = '';

  subjects = [
    'Consulta General',
    'Soporte Técnico',
    'Problemas con Compras',
    'Sugerencias',
    'Reportar Error',
    'Colaboraciones',
    'Prensa',
    'Otro'
  ];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['Consulta General', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      newsletter: [true]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.contactForm.invalid) {
      this.markFormGroupTouched(this.contactForm);
      return;
    }

    this.isSubmitting = true;

    // Simular proceso de guardado
    setTimeout(() => {
      const formData: Omit<ContactForm, 'id' | 'createdAt' | 'status'> = {
        ...this.contactForm.value,
        contactPreference: 'email' // Valor fijo para simplificar
      };
      
      const savedContact = this.contactService.addContact(formData);

      this.isSubmitting = false;
      this.submitted = true;
      
      this.submittedMessage = `¡Gracias ${formData.name}! Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.`;

      // Auto-reset después de 5 segundos
      setTimeout(() => {
        this.resetForm();
        this.submitted = false;
      }, 5000);
    }, 1000);
  }

  resetForm() {
    this.contactForm.reset({
      subject: 'Consulta General',
      newsletter: true
    });
    this.contactForm.markAsPristine();
    this.contactForm.markAsUntouched();
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    
    if (control?.errors) {
      if (control.errors['required']) {
        return 'Este campo es obligatorio';
      }
      if (control.errors['email']) {
        return 'Ingresa un correo electrónico válido';
      }
      if (control.errors['minlength']) {
        return `Mínimo ${control.errors['minlength'].requiredLength} caracteres`;
      }
      if (control.errors['maxlength']) {
        return `Máximo ${control.errors['maxlength'].requiredLength} caracteres`;
      }
    }
    return '';
  }
}