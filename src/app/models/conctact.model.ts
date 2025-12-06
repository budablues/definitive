export interface ContactForm {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  contactPreference: 'email' | 'phone' | 'whatsapp';
  newsletter: boolean;
  createdAt: Date;
  status: 'pending' | 'read' | 'replied';
}

export interface ContactInfo {
  type: string;
  icon: string;
  title: string;
  value: string;
  link?: string;
}