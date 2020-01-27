import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColeccionPage } from './coleccion.page';

describe('ColeccionPage', () => {
  let component: ColeccionPage;
  let fixture: ComponentFixture<ColeccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColeccionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColeccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
