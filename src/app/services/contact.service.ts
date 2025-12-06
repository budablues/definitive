import { Injectable } from '@angular/core';
import { ContactForm } from '../models/conctact.model'
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: ContactForm[] = [];
  private jsonFileName = 'contactos_gamestore.json';

  constructor() {
    // Cargar contactos existentes si hay alguno en localStorage (opcional)
    this.loadFromLocalStorage();
  }

  // Agregar nuevo contacto
  addContact(contact: Omit<ContactForm, 'id' | 'createdAt' | 'status'>): ContactForm {
    const newContact: ContactForm = {
      ...contact,
      id: this.generateId(),
      createdAt: new Date(),
      status: 'pending'
    };
    
    this.contacts.unshift(newContact);
    
    // Guardar en localStorage como backup
    this.saveToLocalStorage();
    
    return newContact;
  }

  // Obtener todos los contactos
  getAllContacts(): ContactForm[] {
    return [...this.contacts].sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  // Generar ID único
  private generateId(): number {
    return this.contacts.length > 0 
      ? Math.max(...this.contacts.map(c => c.id || 0)) + 1 
      : 1;
  }

  // Guardar en localStorage (backup)
  private saveToLocalStorage() {
    try {
      localStorage.setItem('gamestore_contacts_backup', JSON.stringify(this.contacts));
    } catch (error) {
      console.warn('No se pudo guardar en localStorage:', error);
    }
  }

  // Cargar desde localStorage
  private loadFromLocalStorage() {
    try {
      const saved = localStorage.getItem('gamestore_contacts_backup');
      if (saved) {
        this.contacts = JSON.parse(saved);
      }
    } catch (error) {
      console.warn('No se pudo cargar desde localStorage:', error);
    }
  }

  // Exportar contactos a archivo JSON (descarga)
  exportToJsonFile(): void {
    const data = this.formatJsonForExport();
    this.downloadJsonFile(data);
  }

  // Formatear JSON para exportación
  private formatJsonForExport(): string {
    const exportData = {
      metadata: {
        exportDate: new Date().toISOString(),
        totalContacts: this.contacts.length,
        source: 'GameStore Contact Form'
      },
      contacts: this.contacts.map(contact => ({
        ...contact,
        createdAt: contact.createdAt.toISOString()
      }))
    };

    return JSON.stringify(exportData, null, 2);
  }

  // Descargar archivo JSON
  private downloadJsonFile(jsonData: string): void {
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = this.getFileName();
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    window.URL.revokeObjectURL(url);
  }

  // Generar nombre de archivo con fecha
  private getFileName(): string {
    const date = new Date();
    const dateStr = date.toISOString().split('T')[0];
    const timeStr = date.getHours() + '-' + date.getMinutes();
    return `contactos_${dateStr}_${timeStr}.json`;
  }

  // Obtener estadísticas
  getStats() {
    return {
      total: this.contacts.length,
      pending: this.contacts.filter(c => c.status === 'pending').length,
      read: this.contacts.filter(c => c.status === 'read').length,
      replied: this.contacts.filter(c => c.status === 'replied').length
    };
  }

  // Limpiar todos los contactos (opcional, solo para desarrollo)
  clearAll(): void {
    this.contacts = [];
    localStorage.removeItem('gamestore_contacts_backup');
  }
}