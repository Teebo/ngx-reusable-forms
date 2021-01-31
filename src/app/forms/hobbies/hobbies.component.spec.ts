import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, FormBuilder, Validators } from '@angular/forms';

import { HobbiesComponent } from './hobbies.component';

describe('HobbiesComponent', () => {
  let component: HobbiesComponent;
  let fixture: ComponentFixture<HobbiesComponent>;
  const formBuidler: FormBuilder = new FormBuilder();

  const hobbyForm = formBuidler.group({
    favoriteHobby: ['', Validators.required]
  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HobbiesComponent],
      providers: [{ provide: ControlContainer, useValue: hobbyForm }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
