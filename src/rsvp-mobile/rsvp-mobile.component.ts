import { Component, OnInit } from '@angular/core';
import { MailService } from '../services/mailservice';

@Component({
  selector: 'app-rsvp-mobile',
  templateUrl: './rsvp-mobile.component.html',
  styleUrls: ['./rsvp-mobile.component.css']
})
export class RsvpMobileComponent implements OnInit {
  public yesNo:number= 1;
  public name: string ="";
  public numGuests:number = 2;
  public email:string = "";

  public state:string = "rsvp";

  constructor(private service:MailService) { }

  ngOnInit() {
  }



  public validForm():boolean{
    return this.name.length >0 && this.email.length>0;
  }

  public onSendMail(){
    if(!this.validForm()) return;
    
    this.state = "submit";
    this.service.sendMail(this.email, this.yesNo > 0, "",this.numGuests, this.name).subscribe(data=>{
      this.state = "complete";
      console.log("ok");
    })

  }

  public reset(){
    this.name = "";
    this.email = "";
    this.numGuests = 2;
    this.yesNo = 1;
  }
}
