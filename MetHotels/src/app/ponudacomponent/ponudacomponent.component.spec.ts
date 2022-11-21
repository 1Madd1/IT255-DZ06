import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonudacomponentComponent } from './ponudacomponent.component';

describe('PonudacomponentComponent', () => {
  let component: PonudacomponentComponent;
  let fixture: ComponentFixture<PonudacomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonudacomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PonudacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
