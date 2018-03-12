import { Component, OnInit } from '@angular/core';
import { DevelopersService } from '../services/developers.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

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
  public bigTotalItems: number;
  public bigCurrentPage: number = 1;
  public numPages: number = 0;

  constructor(private _developersService: DevelopersService, private router: Router) { }

  public getDevelopers(){
    this._developersService.getDevelopers()
    .subscribe(developersData => {
      this.developers = developersData.items;
      if (!this.developers.length) {
        this.noDevelopers = true;
      } else this.noDevelopers = false;

      // this.bigTotalItems = 100;
      // console.log("Rapoarte toate " + this.bigTotalItems);
    },
    error => this.errorMsg = error);
  }

  // public pageChanged(event: any): void {
  //   console.log('Page changed to: ' + event.page);
  //   console.log('Number items per page: ' + event.itemsPerPage);
  //   this.getDevelopers(event);
  //   this.bigCurrentPage = event.page;
  //   console.log("Numarul s-a schimbat: " + this.bigCurrentPage);
  // }

  detailsAboutDeveloper(developer){
    console.log(developer.account_id);
    this.router.navigate(['/developer', developer.user_id]);

  }

  sortAZ(){
    this._developersService.sort('desc')
    .subscribe(developersData => {
      this.developers = developersData.items;
      if (!this.developers.length) {
        this.noDevelopers = true;
      } else this.noDevelopers = false;
    },
    error => this.errorMsg = error);
  }

  sortZA(){
    this._developersService.sort('asc')
    .subscribe(developersData => {
      this.developers = developersData.items;
      if (!this.developers.length) {
        this.noDevelopers = true;
      } else this.noDevelopers = false;
    },
    error => this.errorMsg = error);
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
    let nrPage = {
      page: 1,
      itemsPerPage: 10
    }
    this.getDevelopers();
  }

}
