import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDevelopersComponent } from './list-of-developers.component';

describe('ListOfDevelopersComponent', () => {
  let component: ListOfDevelopersComponent;
  let fixture: ComponentFixture<ListOfDevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfDevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
