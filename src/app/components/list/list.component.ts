import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listView! : Fan[]

  constructor(
    private _fanService : FanService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.listView = this._fanService.getList()
  }

  detail(index : number) {
    this._router.navigate(['detail/'+index])
  }

  supprimer(index : number) {
    this._fanService.delete(index)
  }

  modifier(index : number) {
    this._router.navigate(['update/'+index])
  }

}
