import { Component, OnInit } from '@angular/core';
import { DevelopersService } from '../services/developers.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap';

@Component({
  selector: 'list-of-developers',
  templateUrl: './list-of-developers.component.html',
  styleUrls: ['./list-of-developers.component.scss']
})
export class ListOfDevelopersComponent implements OnInit {

  errorMsg: string;
  developers = [];
  noDevelopers: boolean;

  public maxSize: number = 5;
  public bigTotalItems: number = 10000;
  public bigCurrentPage: number = 1;

  constructor(private _developersService: DevelopersService, private router: Router) { }

  public getDevelopers(data){
    this._developersService.getDevelopers(data)
    .subscribe(developersData => {
      this.developers = developersData.items;
      if (!this.developers.length) {
        this.noDevelopers = true;
      } else this.noDevelopers = false;
      this.bigTotalItems = 10000;
    },
    error => this.errorMsg = error);
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    this.getDevelopers(event.page);
    this.bigCurrentPage = event.page;
    console.log("Numarul s-a schimbat: " + this.bigCurrentPage);
  }

  detailsAboutDeveloper(developer){
    console.log(developer.account_id);
    this.router.navigate(['/developer', developer.user_id]);

  }

  sort(data){
    this._developersService.sort(data)
    .subscribe(developersData => {
      this.developers = developersData.items;
      if (!this.developers.length) {
        this.noDevelopers = true;
      } else this.noDevelopers = false;
    },
    error => this.errorMsg = error);
  }

  sortAZ(){
    this.sort('desc');
  }

  sortZA(){
    this.sort('asc');
  }

  searchByName(data){
    console.log(data);
    this._developersService.searchByName(data)
    .subscribe(developersData => {
      this.developers = developersData.items;
      if (!this.developers.length) {
        this.noDevelopers = true;
      } else this.noDevelopers = false;
    },
    error => this.errorMsg = error);
  }

  ngOnInit() {
    this.getDevelopers(this.bigCurrentPage);
  }

}
