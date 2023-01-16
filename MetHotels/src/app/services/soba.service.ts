import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Soba } from '../model/soba';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SobaService {
  private apiUrl = 'http://localhost:3000/sobe';

  constructor(private http: HttpClient) {}

  addSoba(soba: Soba): Observable<Soba> {
    return this.http.post<Soba>(this.apiUrl, soba, httpOptions);
  }

  getSobe(): Observable<Soba[]> {
    return this.http.get<Soba[]>(this.apiUrl);
  }

  updateSoba(soba: Soba): Observable<Soba> {
    const url = `${this.apiUrl}/${soba.id}`;
    return this.http.put<Soba>(url, soba, httpOptions);
  }

  deleteSoba(soba: Soba): Observable<Soba> {
    const url = `${this.apiUrl}/${soba.id}`;
    return this.http.delete<Soba>(url);
  }
}
