import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-live',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-live.component.html',
  styleUrls: ['./chat-live.component.css']
})
export class ChatLiveComponent {
  modo: 'login' | 'registro' = 'login';
  email = '';
  password = '';
  nombre = '';

  constructor(private router: Router) {}

  cambiarModo(m: 'login' | 'registro') {
    this.modo = m;
    this.email = '';
    this.password = '';
    this.nombre = '';
  }

  registrar() {
    if (!this.email || !this.password || !this.nombre) {
      alert('Completa todos los campos');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    if (usuarios.some((u: any) => u.email === this.email)) {
      alert('Correo ya registrado');
      return;
    }

    usuarios.push({ nombre: this.nombre, email: this.email, password: this.password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Registro exitoso, inicia sesión');
    this.cambiarModo('login');
  }

  login() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find((u: any) => u.email === this.email && u.password === this.password);

    if (usuario) {
      localStorage.setItem('usuarioActivo', usuario.nombre);
      // Redirigir a Quejas
      this.router.navigate(['/quejas']);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }
}
