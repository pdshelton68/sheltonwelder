import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitation-mobile',
  templateUrl: './invitation-mobile.component.html',
  styleUrls: ['./invitation-mobile.component.css']
})
export class InvitationMobileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  public nav(url:string):void{
    window.open(url);

  }
  public openMap(){
    window.open("https://goo.gl/maps/tRiYYQoCqC46dSNn9");

  }
}
