import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';
import { minAge } from 'src/app/ValidatorsCustom/minAge.Validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  fg! : FormGroup

  constructor(
    private _fanService : FanService,
    private _builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      nom : [null, Validators.required],
      bday : [null, [Validators.required, minAge(13)]],
      series : this._builder.array([])
    })
  }

  getSeries() : FormArray {
    return this.fg.get('series') as FormArray
  }

  addSerie() {
    this.getSeries().push(new FormControl(null, Validators.required))
  }

  submitForm() {
    let newFan : Fan = {
      name : this.fg.value['nom'],
      bday : this.fg.value['bday'],
      series : this.fg.value['series'] ? this.fg.value['series'] : [] 
    }

    this._fanService.saveFan(newFan)
  }

  removeSerie(index : number) : void {
    this.getSeries().removeAt(index)
  }

}
