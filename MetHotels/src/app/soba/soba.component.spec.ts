import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SobaComponent } from './soba.component';


describe('SobaComponent', () => {
  let component: SobaComponent;
  let fixture: ComponentFixture<SobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobaComponent],
      imports: [BrowserModule, FormBuilder, FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(SobaComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
