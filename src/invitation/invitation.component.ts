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
  ngOnInit() {

    console.log(this.deviceService);
  }

}
