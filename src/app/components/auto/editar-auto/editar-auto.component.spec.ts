import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAutoComponent } from './editar-auto.component';

describe('EditarAutoComponent', () => {
  let component: EditarAutoComponent;
  let fixture: ComponentFixture<EditarAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
