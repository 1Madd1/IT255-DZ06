import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddSoba: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddSoba(): void {
    this.showAddSoba = !this.showAddSoba;
    this.subject.next(this.showAddSoba);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
