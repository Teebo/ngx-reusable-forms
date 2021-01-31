import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HobbiesStubComponent } from './component-stubs/hobbies-stub.component';

import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  const powersComponent = jasmine.createSpyObj('PowersComponent', ['createFormGroup']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent, HobbiesStubComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
      imports: [FormsModule, ReactiveFormsModule]
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
