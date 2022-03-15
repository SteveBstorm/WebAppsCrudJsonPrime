import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fan } from '../models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  private url : string = environment.baseUrl

  constructor(
    private _router : Router,
    private _client : HttpClient
  ) { }

  getList() : Observable<Fan[]> {
    return this._client.get<Fan[]>(this.url)
  }

  getById(id : number) : Observable<Fan> {
    return this._client.get<Fan>(this.url+id) 
  }

  saveFan(fan : Fan) :void {
    this._client.post(this.url, fan).subscribe({
      next : () => this._router.navigate(['list']) 
    })
  }

  updateFan(fan : Fan) {
    this._client.put(this.url+fan.id, fan).subscribe({
      next : () => this._router.navigate(['list'])
    })
  }

  delete(id : number) : Observable<any> {
    return this._client.delete(this.url+id)
  }
}
