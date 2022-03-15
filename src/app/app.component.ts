import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'correctif_Crud';
  menuList : MenuItem[] = [
    {label : 'Ajouter', routerLink : 'create', icon : 'pi pi-user-edit'},
    {label : 'Liste', routerLink : 'list', icon : 'pi pi-list'}
  ] 
}
