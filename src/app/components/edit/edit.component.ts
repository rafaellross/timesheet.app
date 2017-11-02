import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Day } from '../../classes/day';
import { Week } from '../../classes/week';
import * as moment from 'moment';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  EmployeeId: string;
  Week: string;
  ListWeeks: Week[];
  Days: Day[] = [];
  Today: moment.Moment;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.Days.push(new Day(0, "Monday"));
    this.Days.push(new Day(1, "Tuesday"));
    this.Days.push(new Day(2, "Wednesday"));
    this.Days.push(new Day(3, "Thursday"));
    this.Days.push(new Day(4, "Friday"));
    this.Days.push(new Day(5, "Saturday", false));
    this.Days.push(new Day(6, "Sunday", false));
    this.route.params.subscribe(params => {
      this.EmployeeId = params['employee'];
      this.Week = params['week'];
    });
        

  }

}
