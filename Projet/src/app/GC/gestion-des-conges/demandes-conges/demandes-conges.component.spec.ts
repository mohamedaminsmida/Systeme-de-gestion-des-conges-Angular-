import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesCongesComponent } from './demandes-conges.component';

describe('DemandesCongesComponent', () => {
  let component: DemandesCongesComponent;
  let fixture: ComponentFixture<DemandesCongesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesCongesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandesCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
