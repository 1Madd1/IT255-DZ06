import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONamaComponentComponent } from './o-nama-component.component';

describe('ONamaComponentComponent', () => {
  let component: ONamaComponentComponent;
  let fixture: ComponentFixture<ONamaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ONamaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ONamaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
