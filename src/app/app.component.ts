import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sheltonwelder';

  constructor(private deviceService: DeviceDetectorService, private router:Router){
  

  }

  ngOnInit(){
    if(this.deviceService.os != "Mac" && this.deviceService.os != "Windows"){

      this.router.navigate(["/invitation-m"]);
    }

  }
}
