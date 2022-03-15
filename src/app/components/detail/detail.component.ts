import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  currentFan! : Fan

  constructor(
    //private _ar : ActivatedRoute,
    private _service : FanService,
    private _dialogConfig : DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    let id = this._dialogConfig.data.id
    this._service.getById(id).subscribe({
      next : (data : Fan) => this.currentFan = data
    })
  }

}
