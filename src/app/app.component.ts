import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatLiveComponent } from './component/chat-live/chat-live.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatLiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoFinal';
}
