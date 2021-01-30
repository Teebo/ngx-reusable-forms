import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.scss']
})
export class PowersComponent implements OnInit {
  public powersForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.powersForm = this.formBuilder.group({
      superPower: ['', Validators.required],
      powerDescription: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public createFormGroup(): FormGroup {
    return this.powersForm;
  }

}
