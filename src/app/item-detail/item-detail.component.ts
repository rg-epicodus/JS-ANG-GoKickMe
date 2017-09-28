import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [ItemService]
})
export class ItemDetailComponent implements OnInit {
  itemId: string;
  itemToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.itemId = urlParametersArray['id'];
    });
    this.itemService.getItemById(this.itemId).subscribe(dataLastEmittedFromObserver => {
      this.itemToDisplay = new Item(dataLastEmittedFromObserver.name,
                                    dataLastEmittedFromObserver.author,
                                    dataLastEmittedFromObserver.description,
                                    dataLastEmittedFromObserver.goal,
                                    dataLastEmittedFromObserver.category)
    }
  )}
}
