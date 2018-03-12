import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DevelopersService } from '../services/developers.service';

@Component({
  selector: 'developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  idDeveloper: number;
  errorMsg: string;
  developer: any;
  
  constructor( private router: Router, private route: ActivatedRoute, private _developersService: DevelopersService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = (params['id']);
      this.idDeveloper = id;
    })
    this.getDeveloper();
  }

  public getDeveloper(){
    this._developersService.getDeveloper(this.idDeveloper)
    .subscribe(developersData => {
      this.developer = developersData.items[0];
      console.log(this.developer);
    },
    error => this.errorMsg = error);
  }
}
