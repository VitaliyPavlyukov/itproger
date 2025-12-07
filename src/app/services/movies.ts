import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MovieService {
  private apiUrl = 'https://omdbapi.com/';
  private apiKey = '13cfd603';

  constructor(private http: HttpClient) {}
    
  searchMovies(title: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}?s=${title}&apikey=${this.apiKey}`);
    }

}
