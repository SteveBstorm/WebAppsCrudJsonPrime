import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';
import { minAge } from 'src/app/ValidatorsCustom/minAge.Validator';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  fg! : FormGroup

  currentFan! : Fan

  constructor(
    private _fanService : FanService,
    private _builder : FormBuilder,
    private _ar : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this._ar.snapshot.params['id']
    this._fanService.getById(id).subscribe( {
      next : (data : Fan) => {
        this.currentFan = data
        this.initForm()
      }
    })
    
    
  }

  initForm() {
    this.fg = this._builder.group({
      nom : [this.currentFan.name, Validators.required],
      bday : [this.currentFan.bday, [Validators.required, minAge(13)]],
      series : this._builder.array([])
    })

    this.currentFan.series.forEach((el : string) => {
      this.getSeries().push(new FormControl(el, Validators.required))
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
      id : this._ar.snapshot.params['id'],
      name : this.fg.value['nom'],
      bday : this.fg.value['bday'],
      series : this.fg.value['series'] ? this.fg.value['series'] : [] 
    }

    this._fanService.updateFan(newFan)
  }

  removeSerie(index : number) : void {
    this.getSeries().removeAt(index)
  }

}
