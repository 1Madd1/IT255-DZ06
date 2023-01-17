import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpRequest, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { SimpleHttpComponent } from './simple-http.component';
import { AppRoutingModule } from '../app-routing.module';

describe('SimpleHttpComponent', () => {
  let component: SimpleHttpComponent;
  let fixture: ComponentFixture<SimpleHttpComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SimpleHttpComponent],
      imports: [HttpClientTestingModule, HttpClient, AppRoutingModule]
    })

    beforeEach(inject([HttpTestingController], (_httpMock: HttpTestingController) => {
      fixture = TestBed.createComponent(SimpleHttpComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      httpMock = _httpMock;
    })
    );

    /*afterEach(
      inject([HttpTestingController], (httpMock: HttpTestingController) => {
        httpMock.verify();
      })
    );*/

  });

  it('performs a POST', () => {
    component.makePost();
    const req = httpMock.expectOne(
      'http://localhost:3000/sobe'
    );
    expect(req.request.method).toEqual('POST');
    req.flush({ response: 'OK' });
    expect(component.data).toEqual({ response: 'OK' });
    httpMock.verify();
  });

  it(
    'performs a DELETE',
    async(() => {
    component.makeDelete();
    const req = httpMock.expectOne(
    'http://localhost:3000/sobe/1'
    );
    expect(req.request.method).toEqual('DELETE');
    req.flush({ response: 'OK' });
    expect(component.data).toEqual({ response: 'OK' });
    httpMock.verify();
    })
    );
});
