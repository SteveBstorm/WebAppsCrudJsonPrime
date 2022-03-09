import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from '../models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  private _fanList : Fan[] = []

  constructor(
    private _router : Router
  ) { }

  getList() : Fan[] {
    return this._fanList
  }

  getById(id : number) : Fan {
    return this._fanList[id]
  }

  saveFan(fan : Fan, id : number = -1) :void {
    if(id == -1) 
      this._fanList.push(fan);
    else 
      this._fanList[id] = fan

    console.log(this._fanList)
    this._router.navigate(['list'])

  }

  delete(id : number) : void {
    this._fanList.splice(id, 1)
  }
}
