import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  const powersComponent = jasmine.createSpyObj('PowersComponent', ['createFormGroup']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilder }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    component.powersComponent = powersComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
