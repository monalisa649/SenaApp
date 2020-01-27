import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResulBusquedaPage } from './resul-busqueda.page';

describe('ResulBusquedaPage', () => {
  let component: ResulBusquedaPage;
  let fixture: ComponentFixture<ResulBusquedaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResulBusquedaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResulBusquedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
