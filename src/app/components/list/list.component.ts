import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from 'src/app/models/fan.model';
import { FanService } from 'src/app/services/fan.service';
import { DialogService } from 'primeng/dynamicdialog';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listView! : Fan[]

  constructor(
    private _fanService : FanService,
    private _router : Router,
    private _dialog : DialogService
  ) { }

  ngOnInit(): void {
    this.loadItems()
  }

  loadItems() {
    this._fanService.getList().subscribe({
      next : (data : Fan[]) => this.listView = data
    })
  }

  detail(index : number) {
    let ref = this._dialog.open(DetailComponent, {
      data : { id : index}
    })
    
  }

  supprimer(index : number) {
    this._fanService.delete(index).subscribe({
      next : () => this.loadItems()
    })
  }

  modifier(index : number) {
    this._router.navigate(['update/'+index])
  }

}
