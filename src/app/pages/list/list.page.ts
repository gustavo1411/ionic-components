import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

usuarios: Observable<any>;
@ViewChild(IonList) Ionlist: IonList;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }

  favorite(user: any){
    console.log('favorite', user);
    this.Ionlist.closeSlidingItems();
  }

  share(user: any){
    console.log('share', user);
    this.Ionlist.closeSlidingItems();
  }

  delete(user){
    console.log('delete', user.name);
    this.Ionlist.closeSlidingItems();
  }

}
