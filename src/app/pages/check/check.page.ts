import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: false 
    },
    {
      name: 'secondary',
      selected: false 
    },
    {
      name: 'primary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false 
    },
    {
      name: 'success',
      selected: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(item){
    console.log(item)
  }

  verData(data){
    console.log(data)
  }

}
