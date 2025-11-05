import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatLiveComponent } from './component/chat-live/chat-live.component';
import { QuejasComponent } from './component/quejas/quejas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: ChatLiveComponent },
  { path: 'quejas', component: QuejasComponent },
  { path: '**', redirectTo: 'login' } // cualquier ruta desconocida vuelve al login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
