import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementsFormComponent } from './statements-form.component';

describe('StatementsFormComponent', () => {
  let component: StatementsFormComponent;
  let fixture: ComponentFixture<StatementsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
