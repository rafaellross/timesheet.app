import { Employee } from "./employee";

export class Timesheet {
    id: number;
    date: Date;
    employees: Employee;
    start: number;
    end: number;
    interval: number;    
}
