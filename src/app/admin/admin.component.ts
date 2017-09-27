import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ItemService]
})
export class AdminComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  submitForm(name: string, author: string, description: string, goal: number, category: string) {
    var newItem: Item = new Item(name, author, description, goal, category);
    this.itemService.addItem(newItem);
  }

}
