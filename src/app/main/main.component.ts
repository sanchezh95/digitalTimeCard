import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  working = false;
  off = false;
  clockInTime;
  clockOutTime;
  hoursWorked;
  month;
  day;
  time;
  hour;
  minutes;

  constructor() {
    let date = new Date();
    this.month = date.toLocaleString('en-us', {month: 'long'});
    this.day = date.getDate();
    this.hour = date.getHours();
    this.minutes = date.getMinutes();
    this.time = this.hour + ':' + this.minutes;
  }

  clockIn() {
    this.working = true;
  }

  clockOut() {
    this.working = false;
    this.off = true;
  }

  ngOnInit() {}
}
