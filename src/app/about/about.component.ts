import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ItemService]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
