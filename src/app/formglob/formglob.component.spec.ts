import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormglobComponent } from './formglob.component';

describe('FormglobComponent', () => {
  let component: FormglobComponent;
  let fixture: ComponentFixture<FormglobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormglobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormglobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
