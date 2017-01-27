/// <reference path="../../typings/globals/underscore/index.d.ts" />
import { Component } from '@angular/core';
import { OpenHabService } from './open-hab.service'
import * as _ from 'underscore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(oh: OpenHabService) { }
  openhabUrl: String;
  itemsList: any;
  filteredItemsList: any;
  isGroupOnly: boolean = true;

  // Retrieve items from OpenHAB
  getItems(itemList: String) {
    var _self = this;
    OpenHabService.getItems(this.openhabUrl).then(
      function (result) {
        _self.itemsList = result;
        _self.filteredItemsList = _self.filterItems(_.clone(result), _self.isGroupOnly);
      }
    );
  }

  filterItems(items: any, isGroupOnly?: boolean) {
    items = items || this.itemsList;
    isGroupOnly = isGroupOnly || false;

    if (isGroupOnly) {
       return _.filter(items, function (i) {
        return Array.isArray(i["members"]) && i["members"].length > 0;
      });
    }

    return items;
  }

  onisGroupOnlyChange(event: boolean) {
    this.filteredItemsList = this.filterItems(this.itemsList, event)
  }


}
