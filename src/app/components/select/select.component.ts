import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Employee } from '../../classes/employee';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  SearchList: Employee[] = [];
  
  constructor(private dataService : DataService) {}

  ngOnInit() {
  }

  search(name: string = ""){
    this.dataService.getEmployees(name)
        .subscribe(data => this.SearchList = data.filter(f => !this.dataService.Selecteds.includes(f)));           
  }

  select(employee: Employee){              
    this.dataService.selectEmployee(employee);           
    this.SearchList = this.SearchList.filter(f => !this.dataService.Selecteds.includes(f))
  }
  
  unselect(employee: Employee){
    this.dataService.unselectEmployee(employee);           
  }
  
  save(){

  }

  test(){
    console.log(this.dataService.Selecteds);
  }
}
