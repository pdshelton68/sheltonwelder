import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rsvp-mobile',
  templateUrl: './rsvp-mobile.component.html',
  styleUrls: ['./rsvp-mobile.component.css']
})
export class RsvpMobileComponent implements OnInit {
  public state:string = 'rsvp';
  constructor() { }

  ngOnInit() {
  }

}
