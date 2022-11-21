import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreporukacomponentComponent } from './preporukacomponent.component';

describe('PreporukacomponentComponent', () => {
  let component: PreporukacomponentComponent;
  let fixture: ComponentFixture<PreporukacomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreporukacomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreporukacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
