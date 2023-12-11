import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesCongesComponent } from './gestion-des-conges.component';

describe('GestionDesCongesComponent', () => {
  let component: GestionDesCongesComponent;
  let fixture: ComponentFixture<GestionDesCongesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDesCongesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDesCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
