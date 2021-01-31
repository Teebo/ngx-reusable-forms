import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PowersComponent } from '../powers/powers.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @ViewChild(PowersComponent, { static: true }) public powersComponent: PowersComponent;

  public heroForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.heroForm = this.formBuilder.group({
      heroName: ['', Validators.required],
      aka: ['', Validators.required],
      powers: this.powersComponent.createFormGroup(),
      hobbies: this.formBuilder.group({
        favoriteHobby: ['', Validators.required]
      })
    })
  }

  public logFormData(): void {
    console.log(this.heroForm.value);
  }

}
