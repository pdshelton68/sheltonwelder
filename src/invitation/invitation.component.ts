import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService) { }
  public openMap(){
    window.open("https://goo.gl/maps/tRiYYQoCqC46dSNn9");

  }
  public nav(url:string):void{
    window.open(url);

  }
  ngOnInit() {

    console.log(this.deviceService);
  }
  //registry link:
//https://www.crateandbarrel.com/gift-registry/amanda-blackwelder-and-paul-shelton/r6071439
}
