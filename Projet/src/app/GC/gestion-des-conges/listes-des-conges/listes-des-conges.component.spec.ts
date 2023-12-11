import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesDesCongesComponent } from './listes-des-conges.component';

describe('ListesDesCongesComponent', () => {
  let component: ListesDesCongesComponent;
  let fixture: ComponentFixture<ListesDesCongesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesDesCongesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListesDesCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
