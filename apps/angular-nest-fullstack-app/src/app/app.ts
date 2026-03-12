import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Message } from '@angular-nest-fullstack-app/interfaces';

@Component({
  imports: [NxWelcome, RouterModule, AsyncPipe, JsonPipe],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  hello$ = inject(HttpClient).get<Message>('/api');
}
