import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Movies {
  private apiUrl = 'https://omdbapi.com/';
  private apiKey = '13cfd603';
}
